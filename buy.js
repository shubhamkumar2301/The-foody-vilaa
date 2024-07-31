document.addEventListener('DOMContentLoaded', function () {
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const quantityInputs = document.querySelectorAll('.quantity-control input');

    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (quantityInputs[index].value > 1) {
                quantityInputs[index].value--;
            }
        });
    });

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            quantityInputs[index].value++;
        });
    });
})