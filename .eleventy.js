module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addPassthroughCopy("src/content/");
    eleventyConfig.addWatchTarget("./src/content/");

    eleventyConfig.addNunjucksFilter("section", function(sectionName) {
        const idify = (value) => eleventyConfig.getFilter("slugify")(value)
        return `<a href="#${idify(sectionName)}" id="${idify(sectionName)}">${sectionName}</a>`
    });
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['njk', 'html', 'md'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    }
}