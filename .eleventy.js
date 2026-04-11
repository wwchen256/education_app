const markdownIt = require("markdown-it");
const { rootShortcode, prefixShortcode, wordShortcode, calloutShortcode, variantShortcode, exerciseShortcode } = require("./src/shortcodes.js");

module.exports = function(eleventyConfig) {
  // Allow HTML in markdown (needed for <details>/<summary> in exercises)
  const md = markdownIt({ html: true });
  eleventyConfig.setLibrary("md", md);

  // Register shortcodes
  eleventyConfig.addShortcode("root", rootShortcode);
  eleventyConfig.addShortcode("prefix", prefixShortcode);
  eleventyConfig.addShortcode("word", wordShortcode);
  eleventyConfig.addPairedShortcode("callout", calloutShortcode);
  eleventyConfig.addShortcode("variant", variantShortcode);
  eleventyConfig.addPairedShortcode("exercise", exerciseShortcode);

  // Chapter collection: sorted by filename for prev/next nav
  eleventyConfig.addCollection("chapters", function(api) {
    return api.getFilteredByGlob("src/chapters/*.md")
      .sort((a, b) => a.fileSlug.localeCompare(b.fileSlug));
  });

  // Filters for prev/next chapter navigation
  eleventyConfig.addFilter("getPrevChapter", function(chapters, url) {
    const idx = chapters.findIndex(ch => ch.url === url);
    return idx > 0 ? chapters[idx - 1] : null;
  });

  eleventyConfig.addFilter("getNextChapter", function(chapters, url) {
    const idx = chapters.findIndex(ch => ch.url === url);
    return idx < chapters.length - 1 ? chapters[idx + 1] : null;
  });

  // Pass CSS through to _site unchanged
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: process.env.PATHPREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
