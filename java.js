if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else { 
    ready()
}

function ready() {

var removeItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeItemButtons)
// loop through all different buttons in cart
for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener('click', removeCartItem) 
       
   
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
}

function removeCartItem(event) {
    var buttonClicked =  event.target 
    // getting rid of entire section so it calls the parent element of the parent element
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}