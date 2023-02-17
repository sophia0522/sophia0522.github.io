function greeting(arr) {
    alert('Hello ' + arr.name);
  }
  // callback 函式
  function processUserInput(callback, arr) {
    callback(arr);
  }
  
  let arr = {name: "Jordan"};
  // 在 callback 函式中調用 greeting 函式，並把 arr 也一併代入
  processUserInput(greeting, arr);