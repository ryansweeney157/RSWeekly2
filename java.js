var removeItemButtons = document.getElementsByClassName("btn-danger")
console.log(removeItemButtons)
// loop through all different buttons in cart
for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener("click", function(event) {
        var buttonClicked =  event.target
        // getting rid of entire section so it calls the parent element of the parent element
        buttonClicked.parentElement.parentElement.remove()
    })
}