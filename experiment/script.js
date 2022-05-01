
// const init = new Promise((resolve, reject) => {

//     if (achieved) {
//         setTimeout(() => { resolve('Terpenuhi');},2000);
//     } else {
//         setTimeout(() => { reject('Terpenuhi Terpenuhi');},2000);
//     }
// });


// init
// .finally(() => console.log('cukup sekian menunggu!'))
// .then(response => console.log(response))
// .catch(response => console.log(response));

class App {

    taker = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    resolve(xhr.response);

                } else if (xhr.status === 404) {
                    
                    reject('url yang anda masukan salah');
                }
            }
        }
    
        xhr.open('GET','json/ake.json', true);
        xhr.send();
    });
}

const init = new App;
init.taker.then(response => console.log(response),response => console.log(response));