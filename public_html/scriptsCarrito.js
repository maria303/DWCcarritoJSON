/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


miCarrito = new Carrito("28/10/2016", "Maria");
            
function addArticulo(){
    id = prompt("Introduce el id");
    nombre = prompt("Introduce el nombre");
    descripcion = prompt("Introduce la descripcion");
    precio = prompt("Introduce el precio");

    miArticulo = new Articulo(id, nombre, descripcion, precio);
    miCarrito.anyade(miArticulo);
}

function mostrarArticulo(){
    miCarrito.mostrar();
}

function mostrarJSON(){
    document.write(JSON.stringify(miCarrito));
}