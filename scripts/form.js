const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
document.getElementById('currentyear').textContent = new Date().getFullYear();

const products = [
    { id: "fc-1888", name: "Mac", averagerating: 4.5 },
    { id: "fc-2050", name: "iPad", averagerating: 4.7 },
    { id: "fs-1987", name: "Apple Watch", averagerating: 3.5 },
    { id: "ac-2000", name: "Apple Vision Pro", averagerating: 3.9 },
    { id: "jj-1969", name: "AirPods", averagerating: 5.0 }
];

const productSelect = document.getElementById("product");

productSelect.innerHTML = '<option value="">Choose a Product ...</option>';

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});