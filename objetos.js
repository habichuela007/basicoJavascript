var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleAuto: function(){
        // this, hace referencia al objeto con su nombre o a al propiedad del objeto
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
miAuto.marca

//llamar a una funcion
miAuto.detalleAuto();

//función constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla","Model 3", 2020);
var autoNuevo2 = new auto("Tesla","MOdel X",2020);

//arrays con objetos dentro

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

//
var articulosFiltrados =  articulos.filter(function(articulo){
    return articulo.costo <= 500
})



//solo trae las propiedades especificas
var articulosMapeados = articulos.map(function(articulo){
    return articulo.nombre
})

//find

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" 
})

//foreach solo regresa la búsqueda, NO genera un nuevo array
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

// solo regresa el valor booleano de la consulta enviada
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

/*métodos
El método .push() nos permite agregar uno o más */