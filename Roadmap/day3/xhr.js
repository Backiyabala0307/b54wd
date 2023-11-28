/*
   XMLHttpRequest:The XMLHttpRequest can be 
   used to request data from a web server.
 */

//require the library xhr2
let XMLHttpRequest = require('xhr2');

//create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

//open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    //console.log(xhr.responseText);
    let data = JSON.parse(xhr.responseText);
    for (let i in data) {
        console.log(data[i].name.common);
    }

}


//send the http Request
xhr.send();
