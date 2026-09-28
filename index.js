console.log("inicio de programa");
console.log(process.argv);
const args = process.argv.slice(2);


// FUNCION OBTENER PRODUCTOS
async function obtenerProductos(url) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${url}`)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

// FUNCION CREAR PRODUCTO
async function crearProducto(product) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            console.log("ID del producto: ", data.id);
        }
    } catch (error) {
        console.log(error);
    }
}

// FUNCION ELIMINAR PRODCUTO
async function eliminarProducto(product) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${product}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}



// SWITCH para ejecutar las funciones
switch (args[0]) {
    case 'GET':
        console.log(args[0]);
        if (args[1] && args[1].startsWith("products")) {
            const productos = await obtenerProductos(args[1]);
            console.log(productos);
        } else {
            console.log("GET not found");
        }
        break;
    case 'POST':
        console.log(args[0]);
        if (args[1] && args[2] && args[3] && args[4] && args[1].startsWith("products")) {
            await crearProducto({ title: args[2], price: args[3], category: args[4] })
            console.log("Producto creado correctamente")
        } else {
            console.log("incorrect comand");
        }
        break;
    case "DELETE":
        console.log(args[0]);
        if (args[1].startsWith('products/') && args[1].length > 9) {
            const response = await eliminarProducto(args[1]);
            console.log("Producto eliminado ", response);
        } else {
            console.log("incorrect comand");
        }
        break;
    default:
        console.log("comando no reconocido");
        break;
}
