const express = require('express');
const hbs = require('hbs');

var app =  express();

// app.set('view engine','hbs');
// app.use(express.static(__dirname + '/public'));
//
//
// app.get('/', (req,res) => {
//   // res.send('Hello Express!')
//   res.send({
//     name: 'Andrew',
//     likes: [
//       'Biking',
//       'Cities'
//     ]
//   });
// });
//
// app.get('/about', (req,res) => {
//   res.render('about.hbs', {
//     pageTitle: 'About Page',
//     currentYear: new Date().getFullYear( )
//   })
// });

app.get('/',(req , res) => {
  res.send('Hello world');
});


app.listen(3000);
module.export.app = app;
