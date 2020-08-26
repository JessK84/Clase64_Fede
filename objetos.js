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
        this.listaConsumo = []; // [[producto, cant],[producto, cant]]
        this.cuenta = 0;
    }

    //TODO
    agregarProducto (prod,cantidad) { //prod = ¿id? ¿nombre?
        this.verificarProducto(prod);
        // TODO: si la cantidad es cero no deberia agregarse

        let index = this.buscarIndexProducto(prod);
        if(index === -1 && cantidad !== 0){
            this.listaConsumo.push([prod, cantidad]);//pusheamos un array
        }else if(cantidad !== 0){
            this.listaConsumo[index][1] = this.listaConsumo[index][1] + cantidad; //sentencia con op matematica
        };
        //se genera un array de arrays 
        
        console.log("los productos se han agregado");
    }

    get cuentaActualizada() {
        if(this.listaConsumo.length===0){
            return 0;
        }else{
            let totalCuenta = 0;
            //buscar precios en (menu.lista[i].nombre == this.listaConsumo[i][0])

            this.listaConsumo.forEach(item =>{//item[0]= nombre  // item[1] = cantidad
                //recorro lista consumo y menu.lista
                menu.lista.forEach(elem =>{
                    if(item[0] === elem.nombre){
                        totalCuenta += elem.precio * item[1];
                    };
                });
            });
            this.cuenta = totalCuenta;
        }
    }

    get cerrarMesa() {
        //la reinicia : tomar nro de mesa e igualar a cero
    }

    buscarIndexProducto(nombreProd){
        return this.listaConsumo.findIndex(item => item[0] === nombreProd);
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

    // get precioProducto(){ ***podria usarse para obtener un precio total ***
    //     return this.precio;
    // }
}




//lista de objetos Producto
//evento que se lo agrega al boton [nombreProdu][precioProd] (agregar nuevo Producto) del HTML
