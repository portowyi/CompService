const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/add-client', (req, res) => {
    console.log('default');
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" crossorigin="anonymous">
        </head>
        <body>
            <div class="container-fluid">
                <div  style="width: 25rem;">
                    <form action="/clients" method=POST>
                        <div class="mb-3">
                            <label for="name" class="form-label">Фамилия, Имя, Отчество</label>
                            <input type="text" class="form-control" id="name" name="name">
                            <div id="nameHelp" class="form-text">Заполняется любыми даннми, будь то хоть ссылка на VK.</div>
                        </div>
                        <div  class="mb-3">
                            <label for="street" class="form-label">Адрес</label>
                            <input type="text" class="form-control" id="street" name="street">
                            <div id="nameHelp" class="form-text">ЗАполните адрес если необходим выезд к клиенту или доставка техники после ремонта / заказа.</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Сохранить</button>     
                    </form>
                </div>    
            </div>
        </body>
        </html>`
    );
});

app.post('/clients', (req, res) => {
    console.log(req.body);
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" crossorigin="anonymous">
        </head>
        <body>
            <div class="container-fluid">
                <h3>Добавлен клиент: </h3> ${req.body.name}
            </div>
        </body>
        </html>`);
});

app.use('/', (req, res) => {
    console.log('default');
    res.write('test test test 222');
    res.send();
});

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

