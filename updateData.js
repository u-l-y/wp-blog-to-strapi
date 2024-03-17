const axios = require('axios');

// Updates publishedAt
const req = async () => {
  const x = await axios({
    method: 'GET',
    url: 'https://admin.at.com/api/news?publicationState=preview&filters[publishedAt][$null]=true&pagination[pageSize]=800'
  })
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.error(err);
    });

  x.map(({ id, attributes }) => ({
    id: id,
    publishedAt: attributes.fecha
  })).forEach(async news => {
    await axios({
      method: 'PUT',
      url: `https://admin.at.com/api/news/${news.id}`,
      headers: {
        Authorization: 'Bearer AT'
      },
      data: {
        data: { publishedAt: news.publishedAt }
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

req();
