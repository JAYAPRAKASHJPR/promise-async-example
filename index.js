var x = new Promise((resolve, reject) => {
  console.log('hi');
  setTimeout(() => resolve(console.log('async')), 9000);
});

x.then(x => console.log(x + 'respone'))

  .catch(x => console.log(x + 'error'))
  .finally(() => console.log('finally'));
