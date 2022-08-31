function run(){
    var xmlXttp = new XMLHttpRequest();
    xmlXttp.onreadystatechange = function(){
        if(xmlXttp.readyState == 4 && xmlXttp.status == 200){
            data(xmlXttp);
        }
    }
    xmlXttp.open('GET', 'https://jsonkeeper.com/b/LUH3',true);
    xmlXttp.send(null);
}
function data(dataJSON){
    var allData = JSON.parse(dataJSON.responseText);
    console.log(allData);

}