function listaMesasAbiertas ()  {
    this.lista = []; //aca vamos a "meter" todas las mesas abiertas
    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error(`La mesa no es una "Mesa"`);
        if(this.lista.find(element => element.numero == mesa.numero)) throw new Error(`La mesa ya esta abierta.`);
        this.lista.push(mesa)
    }
}

//const mesita = new Mesa(num);
//mesita.agregarprod(papas) --> pushea a listaConsumo
//Mesa.mifuncion() --> metodo estatico 
//Mesa.verificarProducto() --> metodo estatico 
//"la" clase mesa

class Mesa {
    constructor(numero) {
        this.numero = numero;
        this.listaConsumo = []
    }

    //TODO
    agregarProducto (prod) {
        //this.verificarProducto(prod);
        this.listaConsumo.push(prod);
    }

    //TODO
    //verificarProducto (prod) {
        //prod instanceOf Producto
        //prod existe en listaDeProductos
    }

    /*get cuentaMesa() {
        //this.listaConsumo.forEach(suma => {
        //})
        return 0;
    }*/




class Producto {
    constructor(id,nombreProducto,precio) {
        this.id = id;
        this.nombre = nombreProducto;
        this.precio = Number(precio);
    }
}


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
} 

const menu = new catalogoDeProductos();

//lista de objetos Producto
//evento que se lo agrega al boton [nombreProdu][precioProd] (agregar nuevo Producto) del HTML
