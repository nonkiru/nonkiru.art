module.exports = (function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");

    return {

        dir: {
            output: "public",
            input: "src",
        },

    };

});