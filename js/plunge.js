
class Moder {

    // request App to get data
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

    // ! just for Local JSON
    sticker = (resources, request) => {

        import('./packages/App.js')
        .then(response => {

            const compress = new response.App;
            compress.taker(resources, (response) => request(response));
        });
    }

}


