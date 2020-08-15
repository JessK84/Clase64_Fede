function listaMesasAbiertas ()  {
    this.lista = []; //aca vamos a "meter" todas las mesas abiertas

    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error(`La mesa no es una "Mesa"`);
        this.validarMesaYaAbierta(mesa.numero);
        this.lista.push(mesa);
    }

    this.eliminar = numMesa => {
        this.lista = this.lista.filter(element => element.numero !== numMesa)
    }

    this.validarMesaYaAbierta = nroMesa => {
        if(this.lista.find(element => element.numero == nroMesa)) {
            alert(`La mesa ya esta abierta.`);
            throw new Error(`La mesa ya esta abierta.`);
        }
    }
}

const mesasAbiertas = new listaMesasAbiertas();

class Mesa {
    constructor(numero) {
        this.numero = Number(numero);
        this.listaConsumo = []
    }

    //TODO
    agregarProducto (prod,cantidad) { //prod = ¿id? ¿nombre?
        this.verificarProducto(prod);
        this.listaConsumo.push(prod);
    }

    get cuentaMesa() {
        if(this.listaConsumo.length===0) {
            return 0;
        } 
    }

    get cerrarMesa() {
        //la reinicia : tomar nro de mesa e igualar a cero
    }

    //TODO
    verificarProducto (prod) {
        if(!prod instanceof Producto) throw new Error(`El producto consumido *no* es un producto`)

    }
}




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



class Producto {
    constructor(id,nombreProducto,precio) {
        this.id = id;
        this.nombre = nombreProducto;
        this.precio = Number(precio);
    }
}




//lista de objetos Producto
//evento que se lo agrega al boton [nombreProdu][precioProd] (agregar nuevo Producto) del HTML
