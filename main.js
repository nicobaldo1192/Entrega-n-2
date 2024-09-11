const productos= [
    {
        id: 1, 
        nombre: "Nintendo Switch Oled", 
        precio: 790000
    },
    {
        id: 2, 
        nombre: "Playstation 5", 
        precio: 1150000
    },
    {
        id: 3, 
        nombre: "Xbox Series X", 
        precio: 1150000
    },
    {
        id: 4, 
        nombre: " Playstation 4", 
        precio: 750000
    },
    {
        id: 5, 
        nombre: "Xbox Series S", 
        precio: 900000
    },
]

let cartProducts = [] 

let productsContainer = document.getElementById("products-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <h4>${producto.precio}</h4>
                        <button class="productoAgregar" id="${producto.id}">Agregar</button>`
        productsContainer.appendChild(card)
    })
    addToCartButton()
}
renderProductos(productos)
//explicacion de esto en 2:03:50
function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id 
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}