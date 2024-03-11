// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Navbar Animation
function markActiveLink(element) {
    // Remove active class from all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    element.classList.add('active');
}
// slide show
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Add to cart
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function (event) {
         // Prevent default button behavior
        event.preventDefault();

        console.log("cliked")
        const productId = this.dataset.productId;
        const productName = this.dataset.productName;
        const productPrice = this.dataset.productPrice;

        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Optionally, you can display a message or update the UI to indicate the product has been added to the cart
        alert('Product added to cart!');

     
    });
});

// Function to display cart items in the modal
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('mb-3');
        cartItemDiv.innerHTML = `
                    <div class="d-flex justify-content-between">
                        <span>${item.name}</span>
                        <span>${item.price}</span>
                    </div>
                `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

// Display cart items when the modal is shown
document.getElementById('cartModal').addEventListener('shown.bs.modal', displayCartItems);

   