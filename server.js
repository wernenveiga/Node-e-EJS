const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const itens = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa Javascrit para rendereizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'braça essa'
    },
    {
      title: 'I',
      message: 'nstall EJS'
    },
    {
      title: 'S',
      message: 'intax simples'
    }
  ]
  const subtitle = 'Uma linguagem de modelagem para criação de página HTML'
  res.render('pages/index', {
    qualitys: itens,
    subtitle: subtitle
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('Rodando')
