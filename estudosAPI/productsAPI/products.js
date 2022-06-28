class Product {
    id
    name
    price
    created
    upDated

    TempID = 1

    constructor(name, price){
        this.name = name
        this.price = price
        var data = new Date();
        var dia = String(data. getDate()). padStart(2, '0');
        var mes = String(data. getMonth() + 1). padStart(2, '0');
        var ano = data. getFullYear();
        this.created = dia + '/' + mes + '/' + ano;
        this.upDated = this.created
        this.id = this.TempID
        this.TempID++
    }



}

const products = []

module.exports = { Product };
