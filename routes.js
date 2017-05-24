const fs = require('fs')

let raw = fs.readFileSync('./content.json', 'utf8');
let news = JSON.parse(raw);

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Virgin spotlight', news: news })
    });

    app.get('/article/:id', (req, res) => {        
        let article = getArticle(req.params.id, news);
        res.render('detail', {title: article.title, articleSpotlight: article});
    });
}

let getArticle = (id, news) => {
    return news.find( article => article.id == id );
}
