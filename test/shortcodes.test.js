const { test } = require("node:test");
const assert = require("node:assert");
const {
  rootShortcode,
  prefixShortcode,
  wordShortcode,
  calloutShortcode,
  variantShortcode,
  exerciseShortcode
} = require("../src/shortcodes.js");

test("rootShortcode renders morpheme and class", () => {
  const html = rootShortcode("flect", "bend");
  assert.ok(html.includes("morpheme--root"), "missing root class");
  assert.ok(html.includes("flect"), "missing morpheme text");
  assert.ok(html.includes("bend"), "missing meaning");
});

test("prefixShortcode renders morpheme and class", () => {
  const html = prefixShortcode("re-", "back/again");
  assert.ok(html.includes("morpheme--prefix"), "missing prefix class");
  assert.ok(html.includes("re-"), "missing morpheme text");
  assert.ok(html.includes("back/again"), "missing meaning");
});

test("wordShortcode renders prefix tile, root tile, and meaning", () => {
  const html = wordShortcode("reflect", "re-", "flect", "to bend back");
  assert.ok(html.includes("morpheme--prefix"), "missing prefix tile");
  assert.ok(html.includes("morpheme--root"), "missing root tile");
  assert.ok(html.includes("reflect"), "missing word");
  assert.ok(html.includes("to bend back"), "missing meaning");
});

test("calloutShortcode wraps content in callout div", () => {
  const html = calloutShortcode("some **content**");
  assert.ok(html.includes("callout--deep-word"), "missing callout class");
  assert.ok(html.includes("some"), "missing content");
});

test("variantShortcode shows canonical and variant", () => {
  const html = variantShortcode("trans-", "tra-");
  assert.ok(html.includes("trans-"), "missing canonical");
  assert.ok(html.includes("tra-"), "missing variant");
  assert.ok(html.includes("variant-note"), "missing variant-note class");
});

test("exerciseShortcode wraps content in exercise div", () => {
  const html = exerciseShortcode("decode this");
  assert.ok(html.includes("exercise"), "missing exercise class");
  assert.ok(html.includes("decode this"), "missing content");
});
