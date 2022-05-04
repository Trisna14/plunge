export class App {

    processing = (HTML_Request,URL,request) => {

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    request(xhr.response);

                }
            }
        }
    
        xhr.open(HTML_Request,URL, true);
        xhr.send();
    }

   // ! just for Local JSON
    taker = (URL, request) => {

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    request(JSON.parse(xhr.response));
                }
            }
        }
    
        xhr.open('GET',URL, true);
        xhr.send();
    }

}