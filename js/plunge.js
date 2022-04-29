
class Moder {

    // request to ajax
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

}


