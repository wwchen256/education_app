const markdownIt = require("markdown-it");
const md = markdownIt({ html: true });

function rootShortcode(morpheme, meaning) {
  return `<span class="morpheme morpheme--root" title="${meaning}">${morpheme}</span>`;
}

function prefixShortcode(morpheme, meaning) {
  return `<span class="morpheme morpheme--prefix" title="${meaning}">${morpheme}</span>`;
}

function wordShortcode(word, prefix, root, meaning) {
  return `<span class="word-breakdown">` +
    `<span class="morpheme morpheme--prefix">${prefix}</span>` +
    `<span class="morpheme morpheme--root">${root}</span>` +
    ` <strong>${word}</strong>` +
    ` <span class="word-meaning">${meaning}</span>` +
    `</span>`;
}

function calloutShortcode(content, type = "deep-word") {
  return `<div class="callout callout--${type}">${md.render(content)}</div>`;
}

function variantShortcode(canonical, variant) {
  return `<span class="variant-note">` +
    `<strong>${canonical}</strong> → <strong>${variant}</strong>` +
    `</span>`;
}

function exerciseShortcode(content) {
  return `<div class="exercise">${md.render(content)}</div>`;
}

module.exports = {
  rootShortcode,
  prefixShortcode,
  wordShortcode,
  calloutShortcode,
  variantShortcode,
  exerciseShortcode
};
