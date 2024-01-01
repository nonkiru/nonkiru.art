const fs = require("node:fs");
const path = require("node:path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/blog/");
	eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addWatchTarget("./src/blog/");
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc+8' }).toFormat(
      'dd LLL yyyy'
    );
  })

  eleventyConfig.addShortcode("photoFolder", function (photoFolder, extensions = [".png", ".gif"]) {
    const html = fs.readdirSync(photoFolder, {withFileTypes: true})
      .filter(file => file.isFile() && extensions.includes(path.extname(file.name)))
      .map((file) => `<img src="${file.name}" />`);
    return html.join("\n");
  });

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
      },
    };
  };