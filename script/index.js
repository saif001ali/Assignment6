const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json));
};

const displayProduct = (products) => {

    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    // get product
    for (let product of products) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <div class="card bg-base-100 w-72 shadow-sm">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between">
                    <div class="badge badge-secondary">Men's Clothing</div>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h2 class="card-title">
                    Card Title
                </h2>
                <h2 class="card-title">$</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `;
    }

};
loadProducts();