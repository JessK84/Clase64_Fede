/*
  * Hacer un sistema para restaurant.
  * Para esto necesitamos.
  * 1. Lista de mesas - agregar, eliminar
  * 2. Lista de productos con precio - Agregar, eliminar, modificar
  * 
  * Y que nos permita obtener
  * 3. Una cuenta por mesa (la mesa se abre, se cargan los productos, y 
  * se cierra pidiendo el total consumido. Lista de cuentas con objetos)
  * 4. Obtener el producto mas vendido
  * 
  * Las funciones deben tener validaciones correspondientes.
  * 
  * Y esto debe estar todo accesible desde una pagina web.
  * TESTS de las funciones que no requieran DOM
  * 
  * En el GUI (graphical user interface, o interfaz grafica de usuario), o sea
  * la pagina, vamos a tener varias acciones relacionadas a inputs.
  * Resetear el valor de los inputs cada vez que hago click en el boton que le 
  * corresponde al input. O sea, si agrego un nuevo numero de mesa, el input
  * debe quedar vacio una vez agregado.
  * 
  * Por ultimo, puede hacerse con objetos o con clases.
*/

const agregarMesa = event =>{
    const tbody = document.querySelector("#lista-mesas");
    const trow = document.createElement("tr");
    trow.className ="tr-style";
    const input = document.querySelector("#input-mesa");
    const tMesa = document.createElement("td");
    tMesa.innerText = input.value;
    const tPrecio = document.createElement("td");
    tPrecio.innerText = "$600";
    const tButton = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "Cerrar";
    button.className ="button green";

    trow.appendChild(tMesa);
    trow.appendChild(tPrecio);
    tButton.appendChild(button);
    trow.appendChild(tButton);
    tbody.appendChild(trow);

    const cerrarMesa = () =>{
        trow.remove();
    }
    
    button.addEventListener("click", cerrarMesa);
}

let nextId = 1;
const agregarProducto = () =>{
    const listaProd = document.querySelector("#lista-productos");
    const trow = document.createElement("tr");
    trow.className = "tr-style";
    //agregando ID
    const tId = document.createElement("td");
    tId.innerText = `${nextId}`;
    nextId++;
    console.log(nextId);
    //input de producto
    const inputProducto = document.querySelector("#input-producto");
    const tProducto = document.createElement("td");
    tProducto.innerText = inputProducto.value;
    //input de precio
    const inputPrecio = document.querySelector("#input-precio");
    const tPrecio = document.createElement("td");
    tPrecio.innerText = inputPrecio.value;
    //boton
    const tButton = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    button.className = "button green"
    button.style.backgroundColor = "#da1e37";

    //agregar elementos
    trow.appendChild(tId);
    trow.appendChild(tProducto);
    trow.appendChild(tPrecio);
    trow.appendChild(tButton);
    tButton.appendChild(button);
    listaProd.appendChild(trow);

    const eliminarProducto = () =>{
        trow.remove();
    }

    button.addEventListener("click", eliminarProducto);
}

const loadEvents = () =>{
    document.querySelector("#agrega-mesa").addEventListener("click", agregarMesa);
    document.querySelector("#agrega-producto").addEventListener("click",agregarProducto);
}