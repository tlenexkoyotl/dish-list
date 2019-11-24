/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../dish-list.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<dish-list></dish-list>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
