// imports
const htmlmin = require("html-minifier");

// Pass through files

module.exports = function (eleventyConfig) {
  // templating formats
  htmlTemplateEngine: "njk";
  markdownTemplateEngine: "njk";
  dataTemplateEngine: "njk";

  // pass through declarations
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassThroughCopy("admin");
  eleventyConfig.addPassTHroughCopy("images");

  // minification
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
