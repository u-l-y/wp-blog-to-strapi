const axios = require('axios');
const blog = require('./blog.json');

// List of entries objects
const newsAll = blog.rss.channel.item.map(news => ({
  data: {
    titulo: news.title,
    contenido: news['content:encoded'],
    slug: news['wp:post_name'],
    fecha: new Date(news['wp:post_date']).toJSON()
  }
}));

// POST entries to Strapi
const req = async () => {
  Promise.all(
    newsAll.map(
      async news =>
        await axios({
          method: 'POST',
          url: 'https://admin.at.com/api/news',
          headers: {
            Authorization: 'Bearer AT'
          },
          data: news
        })
    )
  )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
};

req();
