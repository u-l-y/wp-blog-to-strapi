const axios = require('axios');

// Updates metadata
const req = async () => {
  const x = await axios({
    method: 'GET',
    url: 'https://admin.at.com/api/news?pagination[pageSize]=800'
  })
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.error(err);
    });
  [
    x.filter(
      ({ attributes }) => parseInt(attributes.fecha.split('-')[0]) < 2023
    )[0]
  ].forEach(async news => {
    console.log(news.attributes.createdAt);
    console.log(news.attributes.updatedAt);
    await axios({
      method: 'PUT',
      url: `https://admin.at.com/api/news/${news.id}`,
      headers: {
        Authorization: 'Bearer AT'
      },
      data: {
        data: {
          createdAt: '2016-04-06T10:00:00.000Z',
          updatedAt: '2016-04-06T10:00:00.000Z',
          publishedAt: '2016-04-06T10:00:00.000Z'
        }
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
