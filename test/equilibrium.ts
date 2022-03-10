import * as EQ from "../equilibrium";
import { currencyFromU64 } from "../genshiro/util";
import assert from "assert";
import fs from "fs/promises";
import path from "path";

import "mocha";

import json from "../eq.json";

let api: EQ.API | undefined;

describe.skip("Equilibrium", function () {
  const artPath = path.join(process.cwd(), "artifacts");

  before(async () => {
    this.timeout(10000);
    api = await EQ.createApi("wss://node.equilibrium.io");

    console.log(process.cwd());
  });

  after(() => {
    api?._api.disconnect();
  });

  it("has up-to-date metadata", async () => {
    const metadata = (await api?._api.rpc.state.getMetadata())?.toHex();

    await fs.writeFile(
      path.join(artPath, "eq-metadata.json"),
      JSON.stringify({ metadata }, null, 2),
      "utf8",
    );

    assert.strictEqual(metadata, json.result);
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
