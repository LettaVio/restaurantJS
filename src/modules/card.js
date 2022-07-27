export const card = () => {
    const buttonCard = document.getElementById("cart-button");
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const body = modalCart.querySelector('.modal-body');
    const buttonSent = modalCart.querySelector('.button-primary');
    const clearCart = modalCart.querySelector('.clear-cart');
    const modalPricetag = modalCart.querySelector('.modal-pricetag');

    const resetCart = () => {
        body.innerHTML = '';
        localStorage.removeItem('cart');
        modalCart.classList.remove('is-open');
    }


    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));
        cartArray.map((item) => {
            if (item.id === id) {
                item.count++;
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0;
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    }

    const totalPrice = () => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));
        let itemSum = 0;
        const arrayPrice = cartArray.map((item) => {
            itemSum = item.count * item.price;
            return itemSum;
        })
        const initialValue = 0;
        const sumWithInitial = arrayPrice.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        return sumWithInitial;
    }


    const renderItems = (data) => {

        body.innerHTML = '';

        data.forEach(({ name, price, id, count }) => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('food-row');
            cartElem.innerHTML = `
            <span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec" data-index="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc" data-index="${id}">+</button>
					</div>
            `;

            body.append(cartElem);
        });
    }


    body.addEventListener('click', (e) => {

        e.preventDefault();
        if (e.target.classList.contains('btn-inc')) {
            // console.log(e.target.dataset.index);
            incrementCount(e.target.dataset.index);
        }
        else if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index);
        }
        modalPricetag.innerHTML = totalPrice() + " ₽";
    })


    buttonSent.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart');
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray
        })
            .then(response => {
                if (response.ok) {
                    resetCart();
                }
            })
            .catch(e => {
                console.error(e);
            })
    })

    clearCart.addEventListener('click', () => {
        resetCart();
    })

    buttonCard.addEventListener('click', () => {

        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')));
            modalPricetag.innerHTML = totalPrice() + " ₽";
        }

        modalCart.classList.add('is-open');
    })

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
    })


}

