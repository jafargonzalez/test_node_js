// // //  console.log('Test');
// // //
// // // setTimeout (() => {
// // //   console.log('Inside of callback');
// // // }, 2000)
// // //
// // //  console.log('Finish');
// //
// // // var getUser = (id,callback) => {
// // //   var user = {
// // //     id: id,
// // //     name: 'Hossein'
// // //   };
// // //   setTimeout(() => {
// // //     callback(user);
// // //   },3000);
// // // };
// // //
// // // getUser(31, (userObj) =>{
// // //   console.log(userObj);
// // // });
// //
// // const request = require('request');
// //
// // request({
// //   url: 'https://apsi.darksky.net/forecast/19b17f50a0ffb6d0a16040895cabbcc7/37.8267,-122.4233',
// //   json: true
// // },(error,response,body)=>{
// //   if (error){
// //     console.log('Unable to connect');
// //   }else if(response.statusCode === 400){
// //     console.log('Unable to fetch weather');
// //   } else if(response.statusCode === 200) {
// //       console.log(body.currently.temperature);
// //   }
// // });
//
// const yargs = require('yargs');
// const axios  = require('axios');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Adress to fetch weather for',
//       string: true
//     }
//   })
//     .help()
//     .alias('help','h')
//     .argv;
//
// var encodeAddress = encodeURIComponent(argv.address);
// var geocodeUrl =  'https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}'
//
// axios.get(geocodeUrl).then((response) => {
//   console.log(response.data);
// });
