let TempID = 1
class Product {
    id
    name
    price
    created
    upDated

    constructor(name, price){
        this.name = name
        this.price = price
        var data = new Date();
        var dia = String(data. getDate()). padStart(2, '0');
        var mes = String(data. getMonth() + 1). padStart(2, '0');
        var ano = data. getFullYear();
        this.created = dia + '/' + mes + '/' + ano;
        this.upDated = this.created
        this.id = TempID
        TempID++
    }



}

const products = []

module.exports = { Product, products };
