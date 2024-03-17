const blog = require('./blog.json');

// Extract tags to import them to Strapi
const cats = {};
blog.rss.channel.item.forEach(cat => {
  if (!cats?.cat) {
    cats[cat.category.nicename] = true;
  }
});
console.log(cats);
