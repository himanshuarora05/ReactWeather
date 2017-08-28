function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else {
      reject(-1);
    }
  });
}

addPromise(5, "Hello").then(function(result){
  console.log('result ' + result);
}, function(err) {
  console.log('error -1');
});
