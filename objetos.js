function listaMesasAbiertas ()  {
    this.lista = []; //aca vamos a "meter" todas las mesas abiertas

    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error(`La mesa no es una "Mesa"`);
        if(this.lista.find(element => element.numero == mesa.numero)) throw new Error(`La mesa ya esta abierta.`);
        this.lista.push(mesa)
    }
}

const mesasAbiertas = new listaMesasAbiertas();

//const mesita = new Mesa(num);
//mesita.agregarprod(papas) --> pushea a listaConsumo
//Mesa.mifuncion() --> metodo estatico 
//Mesa.verificarProducto() --> metodo estatico 
//"la" clase mesa

function catalogoDeProductos () {
    this.lista = [];
    this.nextId = 0; 
    
    //catalogoDeProductos.agregarProducto(milanesa)
    this.agregarProducto = (newProducto) => { //---> btn (agregar producto)
        //const milanesas = new Producto("milanesa", 200) ??? consola?
        if(!(newProducto instanceof Producto)) throw new Error(`El producto no es un "Producto"`);;
        this.lista.push(newProducto);
        this.nextId++;
    }

    this.eliminarProducto = (idProducto) => {
        this.lista = this.lista.filter(element => element.id !== idProducto)
    }
} 

const menu = new catalogoDeProductos();

class Mesa {
    constructor(numero) {
        this.numero = numero;
        this.listaConsumo = []
    }

    //TODO
    agregarProducto (prod,cantidad) { //prod = ¿id? ¿nombre?
        this.verificarProducto(prod);
        this.listaConsumo.push(prod);
    }

    get cuentaMesa() {
        //this.listaConsumo.forEach(suma => {
        //})
        //TODO : cuando la lista de consumo esta vacia debe dar cero.
        return 0;
    }

    //TODO
    verificarProducto (prod) {
        if(!prod instanceof Producto) throw new Error(`El producto consumido *no* es un producto`)

    }
}


class Producto {
    constructor(id,nombreProducto,precio) {
        this.id = id;
        this.nombre = nombreProducto;
        this.precio = Number(precio);
    }
}




//lista de objetos Producto
//evento que se lo agrega al boton [nombreProdu][precioProd] (agregar nuevo Producto) del HTML
