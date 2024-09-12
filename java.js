const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", this.window.scrollY > 0);
})

    // Filter options in the product listing page
    fetch('/get-categories')
        .then(response => response.json())
        .then(categories => {
            const categorySelect = document.getElementById('category');
            categories.forEach(category => {
                const option = document.createElement('option');   

                option.value = category.id;
                option.text = category.name;
                categorySelect.appendChild(option);   

            });
        });


        // Cart page calculations // when adding an item to the cart calc the total price




        const quantityInputs = document.querySelectorAll('.quantity-input');
        const productPrices = document.querySelectorAll('.product-price');   

        const totalPriceElement = document.getElementById('total-price');
        const removeButtons = document.querySelectorAll('.remove-button');

        // Calculate and update total price
        function calculateTotalPrice() {
            let totalPrice = 0;
            quantityInputs.forEach((input, index) => {
                const quantity = parseInt(input.value);
                const price = parseFloat(productPrices[index].textContent.replace('$', ''));
                totalPrice += quantity * price;
            });
            totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
        }

        // Update total price on quantity change
        quantityInputs.forEach(input => {
            input.addEventListener('change', calculateTotalPrice);
        });

        // Remove product and update total
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.parentNode.parentNode.remove();
                calculateTotalPrice();
            });
        });

        // Initial total calculation
        calculateTotalPrice();



//check out page'Form Validation'

const form = document.getElementById('checkout-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name === '' || email === '' || address === '' || paymentMethod === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // If validation passes, submit the form or perform other actions
    console.log('Form submitted successfully!');
});


// when user clicks on the 'procced to check out button from home page, it should take them to the check out page

const checkoutButton = document.querySelector('.checkout-button');

checkoutButton.addEventListener('click', () => {
    
    window.location.href = 'checkout.html';
});







