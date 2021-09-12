// imports
const htmlmin = require("html-minifier");

// Pass through files

module.exports = function (eleventyConfig) {
  // directories
  // templating formats
  htmlTemplateEngine: "njk";
  markdownTemplateEngine: "njk";
  dataTemplateEngine: "njk";

  // pass through declarations
  eleventyConfig.addPassThroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassThroughCopy("/src/assets/images");

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

    return {
      dir: {
        input: "src",
        includes: "_includes/",
        layouts: "_includes/layouts/",
        output: "_site/",
      },
      content,
    };
  });
};
