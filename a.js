let obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
obj.forEach(function (item) {
    console.log(item.keys);
})