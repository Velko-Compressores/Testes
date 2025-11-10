document.addEventListener('DOMContentLoaded', () => {
    const purchaseButton = document.getElementById('purchaseButton');
    const cartBody = document.querySelector('.cart-table tbody');
    let cart = [];

    const products = {
        1: 'Produto 1',
        2: 'Produto 2',
        3: 'Produto 3',
        4: 'Produto 4',
        5: 'Produto 5',
        6: 'Produto 6',
        7: 'Produto 7',
        8: 'Produto 8',
        9: 'Produto 9',
        10: 'Produto 10',
        11: 'Produto 11',
        12: 'Produto 12',
        13: 'Produto 13',
        14: 'Produto 14',
        15: 'Produto 15',
        16: 'Produto 16',
        17: 'Produto 17',
        18: 'Produto 18',
        19: 'Produto 19',
        20: 'Produto 20',
        21: 'Produto 21',
        22: 'Produto 22',
        23: 'Produto 23',
        24: 'Produto 24',
        25: 'Produto 25',
        26: 'Produto 26',
        27: 'Produto 27',
        28: 'Produto 28',
        29: 'Produto 29',
        30: 'Produto 30',
        31: 'Produto 31',
        32: 'Produto 32',
        33: 'Produto 33',
        34: 'Produto 34',
        35: 'Produto 35',
        36: 'Produto 36',
        37: 'Produto 37',
        38: 'Produto 38',
        39: 'Produto 39',
        40: 'Produto 40',
        41: 'Produto 41',
        42: 'Produto 42',
        43: 'Produto 43',
        44: 'Produto 44',
        45: 'Produto 45',
        46: 'Produto 46',
        47: 'Produto 47',
        48: 'Produto 48',
        49: 'Produto 49',
        50: 'Produto 50',
        51: 'Produto 51',
        52: 'Produto 52',
        53: 'Produto 53',
        54: 'Produto 54',
        55: 'Produto 55',
        56: 'Produto 56',
        57: 'Produto 57',
        58: 'Produto 58',
        59: 'Produto 59',
        60: 'Produto 60',
        61: 'Produto 61',
        62: 'Produto 62',
        63: 'Produto 63',
        64: 'Produto 64',
        65: 'Produto 65',
        66: 'Produto 66',
        67: 'Produto 67',
        68: 'Produto 68',
        69: 'Produto 69',
        70: 'Produto 70',
        71: 'Produto 71',
        72: 'Produto 72',
        73: 'Produto 73',
        74: 'Produto 74',
        75: 'Produto 75',
        76: 'Produto 76',
        77: 'Produto 77',
        78: 'Produto 78',
        79: 'Produto 79',
        80: 'Produto 80',
        81: 'Produto 81',
        82: 'Produto 82',
        83: 'Produto 83',
        84: 'Produto 84',
        85: 'Produto 85',
        86: 'Produto 86',
        87: 'Produto 87',
        88: 'Produto 88',
        89: 'Produto 89',
        90: 'Produto 90',
        91: 'Produto 91',
        92: 'Produto 92',
        93: 'Produto 93',
        94: 'Produto 94',
        95: 'Produto 95',
        96: 'Produto 96',
        97: 'Produto 97',
        98: 'Produto 98',
        99: 'Produto 99',
        100: 'Produto 100',
        101: 'Produto 101',
        102: 'Produto 102',
        103: 'Produto 103',
        104: 'Produto 104',
        105: 'Produto 105',
        106: 'Produto 106',
        107: 'Produto 107',
        108: 'Produto 108',
        109: 'Produto 109',
        110: 'Produto 110',
        111: 'Produto 111',
        112: 'Produto 112',
        113: 'Produto 113',
        114: 'Produto 114',
        115: 'Produto 115',
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
            `;
            cartBody.appendChild(row);
        });
    }

    function addToCart(id) {
        const name = products[id];
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ id, name, quantity: 1 });
        }
        renderCart();
    }

    Object.keys(products).forEach(id => {
        const link = document.getElementById(`add-product-${id}`);
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(parseInt(id));
            });
        }
    });

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
