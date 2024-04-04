const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 8080;
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))

// Thiết lập engine template
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

