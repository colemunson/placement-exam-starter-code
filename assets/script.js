// First, tell us your name
let yourName = "Cole Munson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${"Cole Munson"}`



// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(x) {

    document.getElementById('qty-gb').textContent = parseInt(document.getElementById('qty-gb').textContent, 10) + 1
    
})
document.getElementById('minus-gb').addEventListener('click', function(x) {

    document.getElementById('qty-gb').textContent = parseInt(document.getElementById('qty-gb').textContent, 10) - 1
    
})
document.getElementById('add-cc').addEventListener('click', function(x) {

    document.getElementById('qty-cc').textContent = parseInt(document.getElementById('qty-cc').textContent, 10) + 1
    
})
document.getElementById('minus-cc').addEventListener('click', function(x) {

    document.getElementById('qty-cc').textContent = parseInt(document.getElementById('qty-cc').textContent, 10) - 1
    
})
document.getElementById('add-sugar').addEventListener('click', function(x) {

    document.getElementById('qty-total').textContent = parseInt(document.getElementById('qty-total').textContent, 10) + 1
    
})
document.getElementById('minus-sugar').addEventListener('click', function(x) {

    document.getElementById('qty-total').textContent = parseInt(document.getElementById('qty-total').textContent, 10) - 1
    
})

