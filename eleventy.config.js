module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/files": "files" });
  eleventyConfig.addPassthroughCopy({ "src/lab/css-grid-showcase": "lab/css-grid-showcase" });
  eleventyConfig.addPassthroughCopy({ "src/lab/react-sprint-board": "lab/react-sprint-board" });
  eleventyConfig.addPassthroughCopy({ "src/lab/repo-explorer.html": "lab/repo-explorer.html" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // The lab apps are copied as-is, not processed as templates.
  eleventyConfig.ignores.add("src/lab/**");

  const byDateDesc = (a, b) => b.date - a.date;

  eleventyConfig.addCollection("work", (api) =>
    api.getFilteredByGlob("src/work/*.md").sort((a, b) => (a.data.order || 99) - (b.data.order || 99))
  );
  eleventyConfig.addCollection("insights", (api) =>
    api.getFilteredByGlob("src/insights/*.md").sort(byDateDesc)
  );
  eleventyConfig.addCollection("reviews", (api) =>
    api.getFilteredByGlob("src/reviews/*.md").sort(byDateDesc)
  );

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("pad", (n) => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("findWork", (items, slug) => (items || []).find((i) => i.fileSlug === slug));
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).toString());
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  });
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
