const blog = require('./blog.json');

const cats = {};
blog.rss.channel.item.forEach(cat => {
  if (!cats?.cat) {
    cats[cat.category.nicename] = true;
  }
});
console.log(cats);
