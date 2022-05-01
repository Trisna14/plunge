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

    // ! new line
    taker = (URL ,HTML_Request ,request, fail) => {

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    request(xhr.response);

                } else if (xhr.status === 404) {
                    
                    fail('404');
                }
            }
        }
    
        xhr.open(HTML_Request,URL, true);
        xhr.send();
    }

}