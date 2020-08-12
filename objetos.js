function listaMesasAbiertas ()  {
    this.lista = []; //aca vamos a "meter" todas las mesas abiertas
    this.agregar = mesa => {
        if(!(mesa instanceof Mesa)) throw new Error(`La mesa no es una "Mesa"`);
        if(this.lista.find(element => element.numero == mesa.numero)) throw new Error(`La mesa ya esta abierta.`);
        this.lista.push(mesa)
    }
}

//let mesa = new Mesa(num);

//"la" clase mesa
class Mesa {
    constructor(numero) {
        this.numero,
        this.listaConsutmo = []
    }

    //TODO
    agregarProductoMesa = (prod) => {
        verificarProducto(prod);
        this.listaConsutmo.push(prod);
    }

    //TODO
    /*verificarProducto = (prod) => {
        //prod instanceOf Producto
        //prod existe en listaDeProductos
    }*/

    get cuentaMesa() {
        return 
    }


}