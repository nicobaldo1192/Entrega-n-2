let cart = JSON.parse(localStorage.getItem("cartProducts")) || []

let cartContainer = document.getElementById("cart-section")

function renderCarrito() {
    cartContainer.innerHTML = ''
    let total = 0
    cart.forEach(producto => {
        total += producto.precio
        const card = document.createElement("div")
        card.classList.add('cart-item')
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h4>$${producto.precio.toFixed(2)}</h4>
            <button onclick="removeFromCart(${producto.id})">Eliminar</button>`
        cartContainer.appendChild(card)
    })
    document.getElementById('total').innerText = total.toFixed(2)
}

function addToCart(product) {
    const existingProductIndex = cart.findIndex(p => p.id === product.id)
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].cantidad += 1
    } else {
        cart.push({product, cantidad: 1 })
    }
    saveCart()                                            
    renderCarrito()
}
function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId)
    saveCart()
    renderCarrito()
}
function saveCart() {
    localStorage.setItem("cartProducts", JSON.stringify(cart))
}
document.addEventListener('DOMContentLoaded', renderCarrito)
