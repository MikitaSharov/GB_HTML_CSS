const productGrid = document.querySelector('.main__products__grid');

dataProducts.forEach(product => {
    const productBox = document.createElement('div');
    productBox.classList.add('main__products__grid__card');

    const productCard = document.createElement('div');
    productCard.classList.add('main__productsCard_blur');

    const productImg = document.createElement('img');
    productImg.src = product.img;
    productImg.alt = product.alt;

    const hiddenBox = document.createElement('div');
    hiddenBox.classList.add('main__productsCard_hidden');

    const hiddenBtn = document.createElement('button')
    hiddenBtn.textContent = 'Add to Cart';

    const buttonImg = document.createElement('img');
    buttonImg.src = './img/cart_card.svg';
    buttonImg.alt = 'add to cart';

    const productText = document.createElement('div');
    productText.classList.add('main__products__grid__card-text');

    const productName = document.createElement('h3');
    const productDisc = document.createElement('p');
    const productPrice = document.createElement('span');

    productName.textContent = product.name;
    productDisc.textContent = product.disc;
    productPrice.textContent = product.price;

    productText.appendChild(productName);
    productText.appendChild(productDisc);
    productText.appendChild(productPrice);

    hiddenBtn.appendChild(buttonImg);
    hiddenBox.appendChild(hiddenBtn)

    productCard.appendChild(productImg);
    productCard.appendChild(hiddenBox);

    productBox.appendChild(productCard);
    productBox.appendChild(productText);

    productGrid.appendChild(productBox);
});