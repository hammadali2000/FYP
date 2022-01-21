const express = require('express')
const app = express()
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    const company = req.body.product_name;

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['script.py',req.body]);

    pyProg.stdout.on('data', function(data) {

        console.log(data.toString());
        res.write(data);
        res.end('end');
    });
})

app.listen(4000, () => console.log('Application listening on port 4000!'))