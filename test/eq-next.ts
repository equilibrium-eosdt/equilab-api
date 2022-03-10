import * as EQ from "../eq-next";
import { currencyFromU64 } from "../genshiro/util";
import assert from "assert";
import fs from "fs/promises";
import path from "path";

import "mocha";

import json from "../eqn.json";

let api: EQ.API | undefined;

const fromSnake = (snakeCased: string) => snakeCased.split("_").join("");

describe("Equilibrium testnet", function () {
  const artPath = path.join(process.cwd(), "artifacts");

  before(async () => {
    this.timeout(10000);
    api = await EQ.createApi(
      // "wss://dev-chain.equilab.io/"
      // "wss://testnet.equilibrium.io"
      "wss://devnet.genshiro.io",
      // "ws://127.0.0.1:9944"
    );

    console.log(process.cwd());
  });

  after(() => {
    api?._api.disconnect();
  });

  it("has up-to-date metadata", async () => {
    const metadata = (await api?._api.rpc.state.getMetadata())?.toHex();

    await fs.writeFile(
      path.join(artPath, "eq-next-metadata.json"),
      JSON.stringify({ metadata }, null, 2),
      "utf8",
    );

    assert.strictEqual(metadata, json.result);
  });

  it("generates docs", async () => {
    assert(api, "Api should be truthy");

    const result: any = {
      queries: [],
      txs: [],
    };

    const metadata = await api._api.rpc.state.getMetadata();

    const info: { modules: any; extrinsic: any } =
      // @ts-ignore
      metadata.toHuman().metadata.V12;

    for (const [module, methods] of Object.entries(api._api.tx)) {
      for (const method of Object.keys(api)) {
        for (const sysMethod of Object.keys(methods)) {
          // @ts-ignore
          if (api[method] === methods[sysMethod]) {
            const smodule = info.modules.find(
              ({ name }: { name: string }) =>
                name.toLowerCase() === module.toLowerCase(),
            );

            if (!smodule?.calls) {
              continue;
            }

            const details = smodule.calls.find(
              ({ name }: { name: string }) =>
                fromSnake(name) === sysMethod.toLowerCase(),
            );

            if (details) {
              result.txs.push({ method, details });
            }
          }
        }
      }
    }

    for (const [module, methods] of Object.entries(api._api.query)) {
      for (const method of Object.keys(api)) {
        for (const sysMethod of Object.keys(methods)) {
          // @ts-ignore
          if (api[method] === methods[sysMethod]) {
            const smodule = info.modules.find(
              ({ name }: { name: string }) =>
                name.toLowerCase() === module.toLowerCase(),
            );

            if (!smodule.storage) {
              continue;
            }

            const details = smodule.storage.items.find(
              ({ name }: { name: string }) =>
                name.toLowerCase() === sysMethod.toLowerCase(),
            );

            if (details) {
              result.queries.push({ method, details });
            }
          }
        }
      }
    }

    await fs.writeFile(
      path.join(artPath, "docs.json"),
      JSON.stringify(result, null, 2),
      "utf8",
    );
  });

  it.skip("EQ assets", () => {
    const assets = [
      25969,
      6452323,
      6517366,
      6582132,
      6647667,
      6648936,
      7697252,
    ];

    console.log(assets.map(currencyFromU64));
  });
});
