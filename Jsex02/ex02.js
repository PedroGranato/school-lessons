// Objeto para armazenar as quantidades iniciais dos produtos
let productQuantities = {
    Sucrilhos: 0,
    Oreo: 0,
    Moca: 0,
    Arroz: 0,
    Feijao: 0,
    Leite: 0,
    Margarina: 0,
    Requeijao: 0,
    Queijo: 0,
    Detergente: 0
};

window.onload = function() {
    for (let product in productQuantities) {
        let storedValue = localStorage.getItem(product);
        
        if (storedValue !== null) {
            productQuantities[product] = parseInt(storedValue);
        } else {
            localStorage.setItem(product, 0);
        }
        document.getElementById(`count-${product}`).textContent = productQuantities[product];
    }
}


function updateProductCount(productId, increment) {
    if (increment) {
        productQuantities[productId]++;
    } else {
        if (productQuantities[productId] > 0) {
            productQuantities[productId]--;
        }
    }
    
    localStorage.setItem(productId, productQuantities[productId]);
    document.getElementById(`count-${productId}`).textContent = productQuantities[productId];
}


document.querySelectorAll('.button-add').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('productId');
        updateProductCount(productId, true);
    });
});

document.querySelectorAll('.button-remove').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('productId');
        updateProductCount(productId, false);
    });
});
