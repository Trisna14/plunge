// const compress = new Pen;

// console.log('1');

const data = {
    'URL'   : '',   // URL API
    'HTML_Request' : 'GET'
}

compress.typists(data,(response) => { console.log(JSON.parse(response));});
console.log('2');


const compress = new Pen;

var data = {
    'URL'   : 'http://www.omdbapi.com?apikey=a97702a5&s=',  // API URL
    'HTML_Request' : 'GET',
    'button' : 'tombol',    // the id that the button has
    'input'  : 'cari'       // the id that the input has
}
console.log('1');
compress.typists_by(data,(response) => console.log(response));
// console.log('2');