var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var resultArr = [];
var getData = function (url) {
    return fetch(url, {
        method: 'GET'
    })
        .then(function (data) { return data.json(); });
};
getData(COMMENTS_URL)
    .then(function (data) {
    data.forEach(function (el) {
        resultArr.push("ID: ".concat(el.id, ", Email: ").concat(el.email));
    });
    console.log(resultArr);
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 
