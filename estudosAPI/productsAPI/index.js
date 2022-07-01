const http = require('http');

const port = 8080; 

const Product = require("./products").Product
const products = require('./products').products
/**
 * Product object: { id, name, price, createdAt, updatedAt }
 * Name (Max. 45 chars)
 * Price (Int 4 digits)
 * Created at (Default now)
 * Updated at (Default now, automatic)
 */
/**
 * (GET) /products List products --> Ordered by name
 * (GET) /products/:id Get product by id
 * (POST) /products Create product
 * (PUT) /products/1 Update product
 * (DELETE) /products/1 Delete product
 */

function getProductsById(id){
    for(i = 0; i < products.length; i++){
        if (products[i].id == id) {
            return products[i]
        }
    }
}

const server = http.createServer((req, res) => {
    const { method, url } = req
    switch (method) {
        case 'GET':
            if(url == '/products'){
                res.end(`the avaliable products are: ${JSON.stringify(products)}`)
            }else{
                res.end(`${getProductsById(url.replace(/[^0-9]/g,''))}`)
            }
            break;
        
        case 'POST':

        default:
            break;
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});