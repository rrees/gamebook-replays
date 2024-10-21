import {
  EleventyHtmlBasePlugin,
  InputPathToUrlTransformPlugin
} from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("base.css");
}