fs = require('fs');
const parser = require('xml2json');

// Parse xml WP exported file and prepare JSON format for Strapi API
fs.readFile('./blog.xml', (err, data) => {
  const json = parser.toJson(data);
  fs.writeFileSync('./blog.json', json);
});
