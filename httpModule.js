const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Hello World');
        // res.end();
    }

    if(req.url === '/about'){
        res.end('You are on the about page');
    }

    res.end(`
        <h1>Oops there has been a problem</h1>
        <p>How did you get here</p>
        <a href = "/">Back Home</a>

    `);
})


server.listen(5000)