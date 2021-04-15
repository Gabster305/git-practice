// Classes you have full control and they have inheritance
//You know what to expect. Its strict. 

class Product {
    constructor(productName) {
        this.name = productName
    }
    display( ){
        console.log('For sale:' + this.name)
    }

}


let prod1 = new Product('shirt')
let prod2 = new Product('ski mask')
let prod3 = new Product('dem bootz')
prod1.display()
prod2.display()
prod3.display()
