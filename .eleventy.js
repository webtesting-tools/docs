module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPassthroughCopy("src/design/");
    eleventyConfig.addWatchTarget("./src/design/");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    }
}