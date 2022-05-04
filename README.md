<img src="documentation/img/js.png" align="right" style="height: 120px;"/>

# Plunge is Semi-finished Program used to get data from **Rest API** and JSON FILE using Vanilla JavaScript :pencil2:

### Write a script to get data from the rest API on the Front End

**For Example**
```javascript
<script src="js/plunge.js"></script>
```

###### How to get all data

```javascript
const compress = new Pen;
const data = {
    'URL'   : '',   // URL API
    'HTML_Request' : 'GET'
}
compress.typists(data,(response) => { console.log(JSON.parse(response));});
```

###### How to get data by input

```javascript
const compress = new Pen;
var data = {
    'URL'   : '',  // API URL
    'HTML_Request' : 'GET',
    'button' : '',    // the id that the button has
    'input'  : ''       // the id that the input has
}
compress.typists_by(data,(response) => console.log(response));
```

**! Just for Local JSON**

```javascript
const compress = new Pen;
compress.sticker('json/fake.json',(response) => {console.log(response)})
```