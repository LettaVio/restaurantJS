export const menu = () => {
    const cardMenu = document.querySelector('.cards-menu');
    const cartArray = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];

    const changeInfo = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title');
        restaurantTitle.textContent = restaurant.name;

        const rating = document.querySelector('.rating');
        rating.textContent = restaurant.stars;

        const price = document.querySelector('.price');
        price.textContent = `От ${restaurant.price} ₽`;

        const category = document.querySelector('.category');
        category.textContent = restaurant.kitchen;

    }

    const addToCart = (cartItem) => {
        if (cartArray.some((item) => item.id === cartItem.id)) {

            cartArray.map((item => {
                if (item.id === cartItem.id) {
                    item.count++;
                }
                return item
            }))
        }
        else {
            cartArray.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cartArray));
    }

    const renderItems = (data) => {
        data.forEach(({ description, id, image, name, price }) => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                    <img src="${image}" alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
                `;
            card.querySelector('.button-card-text').addEventListener('click', () => {
                addToCart({ name, price, id, count: 1 })
            })
            cardMenu.append(card);
        });
    }

    if (localStorage.getItem('restaurantJSON')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurantJSON'));
        changeInfo(restaurant);
        fetch(`./db/${restaurant.products}`)
            .then(response => response.json())
            .then(data => renderItems(data))
            .catch(error => console.log(error))
    }
    else {
        window.location.href = '/';
    }

}
