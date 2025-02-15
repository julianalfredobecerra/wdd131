const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
document.getElementById('currentyear').textContent = new Date().getFullYear();

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("product");

// Clear existing options except the first one
productSelect.innerHTML = '<option value="">Choose a Product ...</option>';

// Populate the select dropdown with products from the array
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;  // Set the value to the product id
    option.textContent = product.name;  // Display the product name
    productSelect.appendChild(option);
});