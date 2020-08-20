class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class Ui {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
            <strong>Product Name</strong>: ${product.name}
            <strong>Product Price</strong>: ${product.price}
            <strong>Product Year</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
          </div>
        </div>
      `;
        // para insertar el elemento hijo
        productList.appendChild(element);
        // para llamarlo desde su propia class
        // this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form"').reset();
    }

    deleteProduct(element) {
            if (element.name === 'delete') {
                // borraremos el elemento padre
                // console.log(element.parentElement.parentElement.parentElement);
                element.parentElement.parentElement.parentElement.remove();
                // mensaje de eliminado 
                this.showMessage('Product eliminado', 'danger');

            }
        }
        // recibira el mensaje y que clase le daremos para que muestre un mensaje rojo o verde
    showMessage(messge, cssClass) {
        // creamos el div para el mensaje
        document.createElement('div');
        // llenamos el div con sus diferentes clases
        div.className = `alert alert-${cssClass} mt-2`;
        // ahora agregamos el mensaje
        // dentro del div agregamos su elemento hijo
        div.appendChild(document.createTextNode(messge));
        // Showing in DOM
        // seleccionamos la parte que quiero guardar en mi variable 
        const container = document.querySelector('.container')
            // y tambien seleccionamos de la misma manera toda la app de manera que se guarden dos bloques
            // en las variables para asi poder mandar el mensaje en medio de estas dos bloques 
        const app = document.querySelector('#app');
        // aqui es donde posicionamos el mensaje
        // en medio de las dos constantes o bloques que ya dividi 
        //  dentro de este contenedor container.insertBefore(que insertaremos , y estara antes de)
        container.insertBefore(div, app);
        // por ultimo mandamos a llamar al metodo donde lo utilizaremos 
        // que sera despues de que guardamos un pruducto y seria en DOM Events 
        // para eliminar el mensaje 
        setTimeout(() => {
            document.querySelector('.alert').remove;
        }, 3000);
    }
}

// dom events
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        console.log(name, price, year);

        const product = new Product(name, price, year);
        // creamos una nueva instancia de la clase para poder acceder a sus metodos
        const ui = new Ui();

        if (name === '' || price === '' || year === '') {
            return ui.showMessage('Conpleta los campos', 'danger');
        }
        // entramos al metodo de la ui
        ui.addProduct(product);
        // despues de agrgar e producto retear el formulario
        // ui.resetForm();
        // ui.showMessage(mensaje, clase);
        ui.showMessage('Producto agregado satisfactoriamente', 'success');


        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function(e) {
        // hacemos una instancia para poder acceder a sus metodos
        const ui = new Ui();
        ui.deleteProduct(e.target);
    });