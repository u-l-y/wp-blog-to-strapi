fs = require('fs');
const parser = require('xml2json');

fs.readFile('./blog.xml', (err, data) => {
  const json = parser.toJson(data);
  fs.writeFileSync('./blog.json', json);
});
