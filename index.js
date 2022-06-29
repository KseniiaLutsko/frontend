//Numbers
function sortStrings(arr, order) {
    console.log(arr.sort(order));
}
sortStrings([1,3,2], function(a, b){return a-b});


function sortStrings(arr, order) {
    console.log(arr.sort(order));
}
sortStrings([1,3,2], function(a, b){return b - a});

//Strings
function sortStrings(arr, order) {
    console.log(arr.sort(order));
    //console.log(arr.sort().reverse());
}
//asc
sortStrings(["b", "a", "c"]); // ['a', 'b', 'c'] -> by default OR sortStrings(["b", "a", "c"], function(a, b){return a>b?1:-1});
//desc
sortStrings(["b", "a", "c"], function(a, b){return a>b?-1:1}); //['c', 'b', 'a']
//reverse()
sortStrings(["b", "a", "c"]); //['c', 'b', 'a']

//uniq numbers
function uniq(arr) {
    console.log(arr.filter(onlyUnique));
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
uniq([1, 2, 2, 3, 1, 4]);
uniq(["a", "a", "b", "c", "c"]); // ['a', 'b', 'c']

