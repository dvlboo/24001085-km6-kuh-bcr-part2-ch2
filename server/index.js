const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req, res) => {
  let filePath;

  // Handle requests dari url
  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join(__dirname, '../public/pages/index.html');
  } else if (req.url === '/findCar') {
    filePath = path.join(__dirname, '../public/pages/findCar.html');
  } else if (req.url === '/exm') {
    filePath = path.join(__dirname, '../public/pages/index.example.html');
  } else if (req.url.endsWith('.css')) {
    // serve css filenyaa
    filePath = path.join(__dirname, '../public/css', req.url);
  } else if (req.url.startsWith('/images')) {
    // serve ke images filenyaa
    filePath = path.join(__dirname, '../public', req.url);
  } else if (req.url.startsWith('/scripts')) {
    // serve JavaScript filenyaaa
    filePath = path.join(__dirname, '../public', req.url);
  } else if (req.url.startsWith('/data')) {
    filePath = path.join(__dirname, '../data', req.url);
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
    return;
  }

  // console.log(req.url)

  // read extentions file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 Internal Server Error</h1>');
      console.error(err);
      return;
    }

    // mengubah ekstentions filenyaaa
    let contentType = 'text/html';
    if (filePath.endsWith('.css')) {
      contentType = 'text/css';
    } else if (filePath.endsWith('.png')) {
      contentType = 'image/png';
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (filePath.endsWith('.js')) {
      contentType = 'text/javascript';
    } else if (filePath.endsWith('.json')) {
      contentType = 'text/json'
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// jujurly pusing bikinyaaaaa 😅, tpi bisaaaa