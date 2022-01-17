require("babel-register")({
    presets: ["es2015", "react"]
});
   
const router = require("./sitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;
  
function generateSitemap() {
    return (
    new Sitemap(router)
        .build("http://touchartarchive.com") 
        .save("./public/sitemap.xml")
    );
}
  
generateSitemap();