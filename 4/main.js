// let xml = new XMLHttpRequest();

// xml.open("GET", "https://jsonkeeper.com/b/LUH3");

// xml.onreadystatechange = function () {
//   if (xml.readyState == 4 && xml.status == 200) {
//     data(JSON.parse(xml.responseText));
//   }
// };
// xml.send();

// function data(res) {
//   console.log(res);
// }

let items = new Promise(function(resolve, reject){

    let xml = new XMLHttpRequest();

xml.open("GET", "https://jsonkeeper.com/b/LUH3");

xml.onreadystatechange = function () {
  if (xml.readyState == 4 && xml.status == 200) {
    resolve(JSON.parse(xml.responseText));
  }
};
xml.send();

})
items.then(function(res){
console.log(res)
},
function(err){
    console.log(err)
})