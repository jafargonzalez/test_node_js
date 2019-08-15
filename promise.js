var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    },1500);
  });
};

asyncAdd(5,7).then((res) => {
  console.log(res);
} ,(errorMessage) => {
  console.log(errorMessage);
});

// var somepromiss = new  Promise( (resolve,reject) => {
//   setTimeout(() => {
//     resolve('ok')
//   },2500);
// } );
//
// somepromiss.then((message) => {
//   console.log('Success' , message);
// }) , (errorMessage) => {
//   console.log('Error: ', errorMessage );
// });
