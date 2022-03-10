import {
  API,
  createApi,
  currencyFromU64,
  u64FromCurrency,
} from "@equilab/api/genshiro";
import Keyring from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";

import assert from "assert";
import fs from "fs/promises";
import path from "path";

import "mocha";

import json from "../gens.json";

let api: API | undefined;
let kr: Keyring | undefined;

const mnemonic =
  "summer vendor rely become put remain crucial tide what holiday expect rate";

const BUSD = 1651864420;
const DAI = 6578537;
const EQD = 6648164;
const GENS = 1734700659;
const USDC = 11970496611;
const USDT = 11970496628;

describe.skip("Genshiro", function () {
  this.timeout(10000);
  const artPath = path.join(process.cwd(), "artifacts");

  before(async () => {
    await cryptoWaitReady();
    kr = new Keyring();
    kr.addFromMnemonic(mnemonic, {}, "sr25519");

    api = await createApi(
      // "ws://127.0.0.1:9944"
      "wss://devnet.genshiro.io",
      // "wss://testnet.genshiro.io",
    );
  });

  after(() => {
    api?._api.disconnect();
  });

  it.skip("converts assets", () => {
    const capitalized = (str: string) =>
      str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

    const tokens = api!._api.registry.chainTokens.map(capitalized);
    console.log(tokens, tokens.map(u64FromCurrency));
    const eqU64 = u64FromCurrency("Eq");
    assert.strictEqual(eqU64, 25969);
    const eqStr = currencyFromU64(25969);
    assert.strictEqual(eqStr, "Eq");
  });

  it.skip("deposit stablecoins and native", async () => {
    const nonce = await api?.getNonce(
      "5DhKh2CQFCY5k1B4EDecU3G4XQ89faM74gfj5FesihCrgbEx",
    );

    await Promise.all(
      [BUSD, DAI, EQD, GENS, USDC, USDT].map((id, i) =>
        api
          ?.deposit(
            { 0: id },
            "5Dqnwz3ysY5PEg25i3XB7NjM52zREAAZNjXfGccdxCBRV5c4",
            "1000000000000000",
          )
          .signAndSend(
            kr?.getPair("5DhKh2CQFCY5k1B4EDecU3G4XQ89faM74gfj5FesihCrgbEx") ??
              "",
            { nonce: nonce ? parseInt(nonce.toString(10)) + 1 + i : -1 },
          ),
      ),
    );
  });

  it("has up-to-date metadata", async () => {
    const metadata = (await api?._api.rpc.state.getMetadata())?.toHex();

    await fs.writeFile(
      path.join(artPath, "gens-metadata.json"),
      JSON.stringify({ metadata }, null, 2),
      "utf8",
    );

    assert.strictEqual(metadata, json.result);
  }).timeout(20000);
});
