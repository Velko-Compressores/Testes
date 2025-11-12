
/*===  inicio section resposiva  === */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


/*================================================================== */
/*==============  Inicio function para arrastar a imagem  ============== */
/*================================================================== */


    document.addEventListener('DOMContentLoaded', function () {
      const image = document.getElementById('compressor-img');
      const panzoom = Panzoom(image, {
        minScale: 0.1,
        maxScale: 1000,
        contain: 'false',
        canvas: true // permite arrastar livremente
      });

      // Zoom com roda do mouse
      image.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
    });

    


/*====================================================================================== */
/*==============  Inicio function para adicionar produtos no carrinho lateral  ============== */
/*====================================================================================== */


document.addEventListener('DOMContentLoaded', () => {
    const purchaseButton = document.getElementById('purchaseButton');
    const cartBody = document.querySelector('.cart-table tbody');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-btn');
    let cart = [];

    // Lista de produtos com nomes e imagens reais
    const products = {
        1: { name: 'Gasket set', image: 'assets/images/1 - Gasket set.png' },
        2: { name: 'Built-in motor', image: 'assets/images/2 - Built-in motor.png' },
        4: { name: 'Parallel key', image: 'assets/images/4 - Parallel key.png' }
        // Adicione todos os outros produtos aqui...
    };

    function renderCart() {
        cartBody.innerHTML = '';
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <div class="quantity-controls">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td>
                    <img src="${item.image}" alt="${item.name}" class="cart-img" style="width:50px;height:50px;object-fit:cover;cursor:pointer;">
                </td>
            `;
            cartBody.appendChild(row);
        });
    }

    function addToCart(id) {
        const { name, image } = products[id];
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ id, name, image, quantity: 1 });
        }
        renderCart();
    }

    // Adiciona eventos para todos os botões de adicionar produto
    Object.keys(products).forEach(id => {
        const link = document.getElementById(`add-product-${id}`);
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(parseInt(id));
            });
        }
    });

    // Controle de quantidade
    cartBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(i => i.id === id);
            item.quantity++;
            renderCart();
        }
        if (e.target.classList.contains('decrease')) {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(i => i.id !== id);
            }
            renderCart();
        }
    });

    // Abrir modal ao clicar na imagem
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-img')) {
            modalImg.src = e.target.src;
            modalDesc.textContent = e.target.alt;
            modal.style.display = 'flex';
        }
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora do conteúdo
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Finalizar compra
    purchaseButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
        } else {
            alert('Compra finalizada com sucesso!');
            cart = [];
            renderCart();
        }
    });
});



