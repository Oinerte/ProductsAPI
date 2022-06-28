const http = require('http');

const port = 8080;

const Product = require("./products")
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
 * (DELETE) /products/1 Update product
 */

const requestListener = function (req, res) {
    const { url, method } = true

    if(url.includes('/products')){
        switch (method) {
            case 'POST': 
                
                break;
        
            default:
                break; 
        }
    }else{
        throw console.error('url not found');
    }
}

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
