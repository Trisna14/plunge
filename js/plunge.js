
class Moder {

    // request to App
    connector = (HTML_Request,URL,request) => {
        
        import('./packages/App.js')
        .then(response => {

            const compress = new response.App;
            compress.processing(HTML_Request,URL,(response) => request(response));
        });
       
    }

}

class Pen extends Moder {

    typists = function (deliv,request) {

        const URL = deliv.URL;
        const HTML_Request = deliv.HTML_Request;

        this.connector(HTML_Request,URL,(response) => request(response));
    }

    typists_by = function (deliv,request) {

        const HTML_Request = deliv.HTML_Request;

        const button = document.getElementById(deliv.button_id);
        button.onclick = () => {

            let value = document.getElementById(deliv.input_id).value;
            const URL = deliv.URL+value;

            this.connector(HTML_Request,URL,(response) => request(response));
        }
    }

}

const compress = new Pen;

var data = {
    'URL'   : 'http://www.omdbapi.com?apikey=a97702a5&s=',
    'HTML_Request' : 'GET',
    'button_id' : 'tombol',
    'input_id'  : 'cari'
}
console.log('1');
compress.typists_by(data,(response) => console.log(response));
console.log('2');

