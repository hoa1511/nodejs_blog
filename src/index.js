const path = require('path');
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const port = 3000;

//template engine
app.engine('handlebars', hbs.engine({
      extname: '.hbs'
}));
app.set('views engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)
})


