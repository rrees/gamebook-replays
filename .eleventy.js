module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("base.css");

  return {
    markdownTemplateEngine: "njk",
  }
};