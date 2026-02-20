const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => displayProduct(json));
};

const displayProduct = (products) => {
    //1. Get the Container----------------------------------------------------------------------------------
    const productContainer = document.getElementById("product-container");
    console.log(productContainer);
    productContainer.innerHTML = "";

    // get each product----------------------------------------------------------------------------------
    for (let product of products) {
        // console.log(product.title);

        //2. Create Element----------------------------------------------------------------------------------
        const productDiv = document.createElement("div");
        // productDiv.innerText= product.title;
        // console.log(productDiv);
        productDiv.innerHTML = `
        <div class="card bg-base-100 w-72 shadow-sm">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between">
                    <div class="badge badge-secondary">Men's Clothing</div>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h2 class="card-title">${product.title}</h2>
                <h2 class="card-title">$</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        
        productContainer.append(productDiv);
    }

};
loadProducts();