// permite seterar propiedades privadas y publicas para la clase
const _private = new WeakMap()
    // cracion de clase 
    // creadora de objetos Book
class Book {
    // llamar al metodo contructor de objetos
    constructor(title, author, price) {
        const properties = {
            _title: title,
            _author: author,
            _price: price
        }

        // métodos set y get de WeakMap y realizamos el encapsuplamentos 
        // en el encapsulamiento hacemos privadas las propiedades de la clase
        _private.set(this, { properties });
    }

    // metodos de acceso getters y setters
    // getter obtiene simplemente el valor actual
    // en este caso obtiene el titulo de un libro

    get title() {
        return _private.get(this).properties['_title'];
    }

    // setter actualizar propiedades
    // en este caso modifica el titulo de un libro
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }

    // para poder ver el autor de los comics
    // no ponemos el set porque no queremos que se pueda comabiar
    get author() {
        return _private.get(this).properties['_author'];
    }

    // para price
    get price() {
        return _private.get(this).properties['_price'];
    }
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }

    getAllData() {
        console.log(`Titulo: ${this.title}, Autor: ${this.author}, Price: ${this.price}`)
    }
}

// con la palabra extends llamamos a la herencia para poder ocupar 
// las propiedades de la clase Book
class Comic extends Book {
    // llamamos al constructor con la smismas propiedades de BooK
    constructor(title, author, price, ilustrators) {
        // y para definir las propiedades con base en la
        // clase padre utilizamos en metodo super
        super(title, author, price);
        // definimos propiedad nueva para los ilustradores
        this.ilustrators = ilustrators;
    }

    getAllData() {
        super.getAllData();
        console.log(`Ilustradores: ${this.ilustrators}`)
    }

    // metodo para agregar un nuevo ilustrador 
    // ya nadamas se manda a llamar para poder ejecutarlo
    addIlustrator(newIlustrator = []) {
        this.ilustrators.push(newIlustrator)
    }
}

class ShopingCart {
    constructor() {
        // creamos un array bacio
        this.products = [];
    }

    // metodo para agregar productos
    addProduct(amount, price) {
        // ... spread operator
        // ... creamos una copia del arreglo y luego le concatenemaos el resto
        this.products.push(...Array(amount).fill(price));
    }

    // metodo para mostras los productos agregados
    showProduts() {
        console.log(this.products);
    }

    // metodo para calcular el toral de los productos
    clacTotal() {
        return this.products
            .map(price => price)
            .reduce((ac, price) => ac + price, 0);
    }

    printTicket() {
        console.log(`Total a pagar ${this.clacTotal()}`);
    }
}




// instancia del objeto
// cracion de un objeto
const book1 = new Book('1984', 'G.O', 350);
const book2 = new Book('Frankenstein', 'M.S', 200);

const comic1 = new Comic('The killing joke', 'A.M', 150, ['B.B']);

const cart = new ShopingCart();

cart.addProduct(2, comic1.price)
cart.addProduct(3, book1.price)

cart.showProduts();

cart.printTicket();


// para ocupar el metodo set asignamos un nuevo titulo y en automatico accede al metod set
// book1.title = '555';


// console.log(book1);
// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.price);
book1.getAllData();

// console.log(book2);
// console.log(book2.title);
// console.log(book2.author);
// console.log(book2.price);

// console.log(comic1);
// console.log(comic1.title);
// console.log(comic1.author);
// console.log(comic1.price);
// console.log(comic1.ilustrators);
// comic1.addIlustrator('J.H')
// console.log(comic1.ilustrators);
// console.log(comic1);
comic1.getAllData();