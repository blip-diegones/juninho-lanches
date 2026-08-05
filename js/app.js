// CONFIGURAÇÕES DA LANCHONETE
const WHATSAPP_NUMBER = "5535991419208"; // WhatsApp do Juninho Lanches
const CHAVE_PIX_LANCHONETE = "46345776000144"; // CNPJ (Chave Pix)

// Dados de reserva (fallback) para o site não quebrar em testes locais (file://) ou falhas de fetch
const FALLBACK_MENU = {
  categories: [
    { id: "lanches", label: "Lanches" },
    { id: "vegetarianos", label: "Vegetarianos" },
    { id: "combos", label: "Combos" },
    { id: "porcoes", label: "Porções" },
    { id: "bebidas", label: "Bebidas" }
  ],
  items: [
    { id: "misto", cat: "lanches", name: "Misto", price: 16.00, desc: "Pão, maionese, presunto e queijo.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop" },
    { id: "x-burguer", cat: "lanches", name: "X-Burguer", price: 19.00, desc: "Pão, maionese, hambúrguer, presunto, queijo, batata palha e tomate.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "x-salada", cat: "lanches", name: "X-Salada", price: 20.00, desc: "Pão, maionese, hambúrguer, presunto, queijo, alface e tomate.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "x-americano", cat: "lanches", name: "X-Americano", price: 20.00, desc: "Pão, maionese, presunto, queijo, ovo, alface e tomate.", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&auto=format&fit=crop" },
    { id: "x-egg", cat: "lanches", name: "X-Egg", price: 22.00, desc: "Pão, maionese, hambúrguer, queijo, tomate, ovo e presunto.", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop" },
    { id: "x-calabresa", cat: "lanches", name: "X-Calabresa", price: 23.00, desc: "Pão, maionese, hambúrguer, queijo, presunto, calabresa, batata palha e tomate.", image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=800&auto=format&fit=crop" },
    { id: "x-egg-salada", cat: "lanches", name: "X-Egg Salada", price: 23.00, desc: "Pão, maionese, hambúrguer, queijo, tomate, alface, ovo, presunto e batata palha.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "x-egg-calabresa", cat: "lanches", name: "X-Egg Calabresa", price: 25.00, desc: "Pão, maionese, hambúrguer, queijo, presunto, calabresa, ovo, batata palha e tomate.", image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&auto=format&fit=crop" },
    { id: "x-frango", cat: "lanches", name: "X-Frango", price: 25.00, desc: "Pão, maionese, filé de frango, queijo, presunto, milho, tomate.", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop" },
    { id: "x-frango-bacon", cat: "lanches", name: "X-Frango Bacon", price: 26.00, desc: "Pão, maionese, filé de frango, bacon, queijo, presunto, milho, tomate.", badge: "Top Pedido", image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&auto=format&fit=crop" },
    { id: "x-bacon", cat: "lanches", name: "X-Bacon", price: 26.00, desc: "Pão, maionese, hambúrguer, queijo, presunto, bacon, batata palha e tomate.", badge: "Mais Pedido", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop" },
    { id: "x-egg-bacon", cat: "lanches", name: "X-Egg Bacon", price: 27.00, desc: "Pão, maionese, hambúrguer, queijo, presunto, bacon, ovo, batata palha e tomate.", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=800&auto=format&fit=crop" },
    { id: "especial-casa", cat: "lanches", name: "Especial da Casa", price: 26.00, desc: "Pão, maionese, hambúrguer, queijo, presunto, bacon, ovo, cheddar, batata palha e tomate.", badge: "Da Casa", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop" },
    { id: "x-tudo", cat: "lanches", name: "X-Tudo", price: 30.00, desc: "Pão, maionese, hambúrguer, queijo, ovo, presunto, bacon, frango, calabresa, milho, alface, tomate e batata palha.", badge: "Sucesso", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "x-tudo-maluco", cat: "lanches", name: "X-Tudo Maluco", price: 39.00, desc: "Pão, maionese, 2 hambúrgueres, 2 ovos, cebola roxa, cheddar, catupiry, presunto, queijo, batata palha, tomate, milho, alface, bacon, frango e calabresa.", badge: "Gigante", image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&auto=format&fit=crop" },
    { id: "x-tudo-2-paes", cat: "lanches", name: "X-Tudo em 2 Pães", price: 58.00, desc: "Pão, maionese, hambúrguer, queijo, ovo, presunto, bacon, frango, calabresa, milho, alface, tomate e batata palha.", badge: "Para Dividir", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "x-vegetariano", cat: "vegetarianos", name: "X-Vegetariano", price: 20.00, desc: "Pão, maionese, queijo, ovo, alface e tomate.", image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=800&auto=format&fit=crop" },
    { id: "combo-1", cat: "combos", name: "Combo 1 (Para Mim)", price: 30.00, desc: "Lanche do Dia + Batata Frita + Refrigerante 200ml", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop" },
    { id: "combo-2", cat: "combos", name: "Combo 2 (Para Mim)", price: 31.00, desc: "X-Vegetariano + Batata Frita + Refrigerante 200ml", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop" },
    { id: "combo-3", cat: "combos", name: "Combo 3 (Para Mim)", price: 33.00, desc: "X-Bacon + Batata Frita + Refrigerante 200ml", badge: "Combo Favorito", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop" },
    { id: "combo-4", cat: "combos", name: "Combo 4 (Para Mim)", price: 36.00, desc: "X-Cheddar Bacon + Batata Frita + Refrigerante 200ml", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop" },
    { id: "combo-5", cat: "combos", name: "Combo 5 (Para Mim)", price: 38.00, desc: "X-Tudo + Batata Frita + Refrigerante 200ml", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop" },
    { id: "combo-6", cat: "combos", name: "Combo 6 (Para Nós)", price: 51.00, desc: "2 Lanches do Dia + Batata Frita + Refrigerante 500ml", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "combo-7", cat: "combos", name: "Combo 7 (Para Nós)", price: 55.00, desc: "2 X-Calabresa + Batata Frita + Refrigerante 500ml", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "combo-8", cat: "combos", name: "Combo 8 (Para Nós)", price: 57.00, desc: "2 X-Frango + Batata Frita + Refrigerante 500ml", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "combo-9", cat: "combos", name: "Combo 9 (Para Nós)", price: 62.00, desc: "2 X-Bacon + Batata Frita + Refrigerante 500ml", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "combo-10", cat: "combos", name: "Combo 10 (Para Nós)", price: 67.00, desc: "2 X-Tudo + Batata Frita + Refrigerante 500ml", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "combo-11", cat: "combos", name: "Combo 11 (Família)", price: 70.00, desc: "3 Lanches do Dia + Batata Frita + Refrigerante 2L", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "combo-12", cat: "combos", name: "Combo 12 (Família)", price: 75.00, desc: "3 X-Calabresa + Batata Frita + Refrigerante 2L", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "combo-13", cat: "combos", name: "Combo 13 (Família)", price: 83.00, desc: "3 X-Frango + Batata Frita + Refrigerante 2L", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "combo-14", cat: "combos", name: "Combo 14 (Família)", price: 87.00, desc: "3 X-Bacon + Batata Frita + Refrigerante 2L", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "combo-15", cat: "combos", name: "Combo 15 (Família)", price: 97.00, desc: "3 X-Tudo + Batata Frita + Refrigerante 2L", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "fritas-simples", cat: "porcoes", name: "Fritas", price: 21.00, desc: "Porção individual ou para compartilhar de batata frita crocante.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop" },
    { id: "calabresa-acebolada", cat: "porcoes", name: "Calabresa Acebolada", price: 25.00, desc: "Porção de calabresa fatiada acebolada.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop" },
    { id: "fritas-queijo-bacon", cat: "porcoes", name: "Fritas com Queijo e Bacon", price: 28.00, desc: "Batata frita coberta com queijo derretido e bacon crocante.", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop" },
    { id: "fritas-queijo-bacon-cheddar", cat: "porcoes", name: "Fritas com Queijo, Bacon e Cheddar", price: 30.00, desc: "Batata frita coberta com queijo, bacon e molho cheddar cremoso.", badge: "Top Porção", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop" },
    { id: "calabresa-fritas", cat: "porcoes", name: "Calabresa Acebolada com Fritas", price: 32.00, desc: "Porção mista de calabresa acebolada acompanhada de batata frita.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop" },
    { id: "agua-sem-gas", cat: "bebidas", name: "Água sem Gás", price: 4.00, desc: "Garrafa de água mineral sem gás.", image: "images/agua-sem-gas.jpg" },
    { id: "agua-com-gas", cat: "bebidas", name: "Água com Gás", price: 4.00, desc: "Garrafa de água mineral com gás.", image: "images/agua-com-gas.jpg" },
    { id: "refri-lata", cat: "bebidas", name: "Refrigerante Lata", price: 8.00, desc: "Lata 350ml (Sabores diversos).", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop" },
    { id: "guarana-600", cat: "bebidas", name: "Guaraná 600ml", price: 8.00, desc: "Garrafa 600ml.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop" },
    { id: "coca-600", cat: "bebidas", name: "Coca 600ml", price: 9.00, desc: "Garrafa 600ml.", image: "images/coca-600ml.jpg" },
    { id: "cerveja-latio", cat: "bebidas", name: "Cerveja Mega Latão", price: 10.00, desc: "Latão trincando de gelado.", image: "images/cerveja-latao.jpg" },
    { id: "guarana-2l", cat: "bebidas", name: "Guaraná 2L", price: 10.00, desc: "Garrafa de 2 Litros.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop" },
    { id: "coca-2l", cat: "bebidas", name: "Coca-Cola 2L", price: 16.00, desc: "Garrafa de 2 Litros.", image: "images/coca-2l.jpg" }
  ]
};

let MENU_DATA = { categories: [], items: [] };
let cart = {};
let activeCategory = 'lanches';

async function init() {
  try {
    const res = await fetch('data/menu.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    MENU_DATA = await res.json();
  } catch (e) {
    console.warn("Não foi possível carregar via fetch. Usando dados internos de segurança.");
    MENU_DATA = FALLBACK_MENU;
  }

  renderCategories();
  renderMenu(activeCategory);
  renderDestaques();

  window.addEventListener('resize', updatePillPosition);
}

function brl(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

// RENDER CATEGORIAS + PILL DESLIZANTE
function renderCategories() {
  const container = document.getElementById('categories-tabs');
  if (!container) return;

  container.innerHTML = `
    <div class="category-wrapper" id="category-wrapper">
      <div class="active-pill" id="active-pill"></div>
      ${MENU_DATA.categories.map(c => {
        const isActive = c.id === activeCategory;
        return `
          <button 
            data-cat="${c.id}" 
            onclick="switchCategory('${c.id}')" 
            class="category-btn ${isActive ? 'active' : ''}">
            ${c.label}
          </button>
        `;
      }).join('')}
    </div>
  `;

  requestAnimationFrame(() => updatePillPosition());
}

function updatePillPosition() {
  const pill = document.getElementById('active-pill');
  const activeBtn = document.querySelector(`.category-btn[data-cat="${activeCategory}"]`);

  if (pill && activeBtn) {
    pill.style.left = `${activeBtn.offsetLeft}px`;
    pill.style.width = `${activeBtn.offsetWidth}px`;
  }
}

function switchCategory(catId) {
  if (activeCategory === catId) return;

  activeCategory = catId;

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === catId);
  });

  updatePillPosition();

  const grid = document.getElementById('menu-grid');
  if (grid) {
    grid.classList.add('fade-out');
    setTimeout(() => {
      renderMenu(catId);
      grid.classList.remove('fade-out');
    }, 200);
  } else {
    renderMenu(catId);
  }
}

// RENDER MENU
function renderMenu(catId) {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const items = MENU_DATA.items.filter(i => i.cat === catId);

  if (items.length === 0) {
    container.innerHTML = `<p class="text-neutral-500 col-span-full text-center py-12">Nenhum item encontrado nesta categoria.</p>`;
    return;
  }
  
  container.innerHTML = items.map((item, index) => `
    <div class="menu-item-anim bg-dark-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between" style="animation-delay: ${index * 0.04}s;">
      <div>
        <div class="h-52 overflow-hidden relative">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          ${item.badge ? `<span class="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-lg">${item.badge}</span>` : ''}
        </div>
        <div class="p-6 space-y-2">
          <div class="flex justify-between items-start gap-2">
            <h3 class="font-bold text-lg text-white leading-snug">${item.name}</h3>
            <span class="text-brand-gold font-bold text-base whitespace-nowrap">${brl(item.price)}</span>
          </div>
          <p class="text-neutral-400 text-xs leading-relaxed font-light">${item.desc || ''}</p>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button onclick="addToCart('${item.id}')" class="w-full bg-white/5 hover:bg-white text-white hover:text-black font-semibold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i> Adicionar ao Pedido
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.lucide) lucide.createIcons();
}

function renderDestaques() {
  const container = document.getElementById('destaques-grid');
  if (!container) return;

  const destaques = MENU_DATA.items.filter(i => i.badge).slice(0, 3);
  
  container.innerHTML = destaques.map(item => `
    <div class="bg-dark-900 p-5 rounded-3xl border border-white/5 flex gap-4 items-center hover:border-white/20 transition">
      <img src="${item.image}" alt="${item.name}" class="w-24 h-24 rounded-2xl object-cover shrink-0">
      <div class="space-y-1 flex-1 min-w-0">
        <span class="text-[10px] bg-brand-red/20 text-brand-red px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">${item.badge}</span>
        <h4 class="font-bold text-white text-base truncate">${item.name}</h4>
        <p class="text-brand-gold font-bold text-sm">${brl(item.price)}</p>
        <button onclick="addToCart('${item.id}')" class="mt-2 text-xs bg-white text-black font-bold px-4 py-1.5 rounded-lg hover:bg-brand-red hover:text-white transition">
          + Adicionar
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.lucide) lucide.createIcons();
}

// CARRINHO DE COMPRAS
function addToCart(id) {
  const item = MENU_DATA.items.find(i => i.id === id);
  if (!item) return;

  if (!cart[id]) cart[id] = { item, qty: 0 };
  cart[id].qty++;
  updateCartUI();
  toggleCart(true);
}

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  
  if (forceOpen) drawer.classList.remove('translate-x-full');
  else drawer.classList.toggle('translate-x-full');
}

function updateCartUI() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  const entries = Object.values(cart);
  const total = entries.reduce((sum, c) => sum + (c.item.price * c.qty), 0);
  const count = entries.reduce((sum, c) => sum + c.qty, 0);

  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = count;
    cartCountEl.classList.toggle('hidden', count === 0);
  }

  const cartTotalEl = document.getElementById('cart-total');
  if (cartTotalEl) cartTotalEl.textContent = brl(total);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = count === 0;

  if (entries.length === 0) {
    container.innerHTML = `<p class="text-neutral-500 text-center py-10">Seu carrinho está vazio.</p>`;
    return;
  }

  container.innerHTML = entries.map(c => `
    <div class="flex items-center justify-between bg-dark-800 p-4 rounded-2xl border border-white/5">
      <div class="pr-2">
        <h4 class="font-bold text-sm text-white">${c.item.name}</h4>
        <p class="text-xs text-neutral-400">${brl(c.item.price * c.qty)}</p>
      </div>
      <div class="flex items-center gap-3 bg-dark-950 px-3 py-1.5 rounded-xl border border-white/5 shrink-0">
        <button onclick="changeQty('${c.item.id}', -1)" class="text-xs font-bold text-neutral-400 hover:text-white px-1">-</button>
        <span class="text-sm font-bold text-white">${c.qty}</span>
        <button onclick="changeQty('${c.item.id}', 1)" class="text-xs font-bold text-neutral-400 hover:text-white px-1">+</button>
      </div>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

// CHECKOUT & WHATSAPP
function startCheckout() {
  const entries = Object.values(cart);
  if (entries.length === 0) return;

  toggleCart(false);

  let modal = document.getElementById('checkout-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'checkout-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  const total = entries.reduce((sum, c) => sum + (c.item.price * c.qty), 0);

  modal.innerHTML = `
    <div class="bg-dark-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl relative">
      <div class="flex justify-between items-center border-b border-white/10 pb-4">
        <h3 class="text-xl font-bold text-white">Finalizar Pedido</h3>
        <button onclick="closeCheckoutModal()" class="text-neutral-400 hover:text-white">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>

      <form id="checkout-form" onsubmit="handleCheckoutSubmit(event, ${total})" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold uppercase text-neutral-400 mb-1">Seu Nome *</label>
          <input type="text" id="cust-name" required placeholder="Ex: Diego" class="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase text-neutral-400 mb-1">Endereço de Entrega / Bairro *</label>
          <input type="text" id="cust-address" required placeholder="Rua, Número - Bairro" class="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase text-neutral-400 mb-1">Forma de Pagamento *</label>
          <select id="cust-payment" required onchange="toggleChangeInput(this.value)" class="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
            <option value="pix">Pix (QR Code / Copia e Cola)</option>
            <option value="cartao_maquininha">Cartão na Entrega (Débito/Crédito)</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </div>

        <div id="troco-wrapper" class="hidden">
          <label class="block text-xs font-semibold uppercase text-neutral-400 mb-1">Precisa de troco para quanto?</label>
          <input type="text" id="cust-troco" placeholder="Ex: R$ 50,00" class="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase text-neutral-400 mb-1">Observações do Pedido</label>
          <input type="text" id="cust-obs" placeholder="Ex: Sem cebola, capricha na maionese" class="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red">
        </div>

        <div class="pt-4 border-t border-white/10 flex justify-between items-center">
          <div>
            <span class="block text-xs text-neutral-400">Total a pagar:</span>
            <span class="text-xl font-bold text-brand-gold">${brl(total)}</span>
          </div>
          <button type="submit" class="bg-brand-red text-white font-bold px-6 py-3 rounded-xl hover:bg-red-600 transition">
            Continuar
          </button>
        </div>
      </form>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function toggleChangeInput(val) {
  const trocoWrap = document.getElementById('troco-wrapper');
  if (trocoWrap) {
    trocoWrap.classList.toggle('hidden', val !== 'dinheiro');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.remove();
}

function handleCheckoutSubmit(e, total) {
  e.preventDefault();

  const name = document.getElementById('cust-name').value;
  const address = document.getElementById('cust-address').value;
  const payment = document.getElementById('cust-payment').value;
  const troco = document.getElementById('cust-troco')?.value || 'Não precisa';
  const obs = document.getElementById('cust-obs').value || 'Nenhuma';

  const itemsList = Object.values(cart)
    .map(c => `• ${c.qty}x ${c.item.name} (${brl(c.item.price * c.qty)})`)
    .join('\n');

  let paymentText = payment === 'pix' ? 'Pix' : (payment === 'dinheiro' ? `Dinheiro (Troco para: ${troco})` : 'Cartão na Entrega');

  const orderData = {
    name,
    address,
    paymentText,
    itemsList,
    obs,
    total,
    isPix: payment === 'pix'
  };

  if (payment === 'pix') {
    showPixScreen(orderData);
  } else {
    sendToWhatsApp(orderData);
  }
}

function showPixScreen(order) {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="bg-dark-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl text-center relative">
      <button onclick="closeCheckoutModal()" class="absolute top-6 right-6 text-neutral-400 hover:text-white">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>

      <div>
        <span class="text-xs font-bold uppercase tracking-widest text-brand-gold">Pagamento Pix</span>
        <h3 class="text-2xl font-extrabold text-white mt-1">Total: ${brl(order.total)}</h3>
      </div>

      <div class="bg-white p-4 rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-inner" id="qrcode-container"></div>

      <div class="space-y-2">
        <p class="text-xs text-neutral-400">Chave Pix CNPJ:</p>
        <div class="flex items-center gap-2 bg-dark-950 p-2.5 rounded-xl border border-white/10">
          <input type="text" id="pix-key-input" readonly value="${CHAVE_PIX_LANCHONETE}" class="bg-transparent text-xs text-neutral-300 w-full focus:outline-none text-center font-mono font-bold">
          <button onclick="copyPixKey()" class="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition font-semibold shrink-0">
            Copiar
          </button>
        </div>
      </div>

      <p class="text-xs text-neutral-500 leading-relaxed">
        Após fazer o Pix, clique abaixo para enviar o pedido direto no WhatsApp da lanchonete!
      </p>

      <button id="send-whatsapp-btn" class="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20">
        <i data-lucide="message-square" class="w-5 h-5"></i>
        Enviar Pedido no WhatsApp
      </button>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  document.getElementById('send-whatsapp-btn').onclick = () => sendToWhatsApp(order);

  setTimeout(() => {
    const qrContainer = document.getElementById('qrcode-container');
    if (qrContainer && window.QRCode) {
      qrContainer.innerHTML = '';
      new QRCode(qrContainer, {
        text: CHAVE_PIX_LANCHONETE,
        width: 160,
        height: 160,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    }
  }, 100);
}

function copyPixKey() {
  const input = document.getElementById('pix-key-input');
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value);
    alert('Chave Pix copiada com sucesso!');
  }
}

function sendToWhatsApp(order) {
  const message = `*--- NOVO PEDIDO: JUNINHO LANCHES ---*\n\n` +
    `*Cliente:* ${order.name}\n` +
    `*Endereço:* ${order.address}\n` +
    `*Forma de Pagamento:* ${order.paymentText}\n\n` +
    `*ITENS DO PEDIDO:*\n${order.itemsList}\n\n` +
    `*Observações:* ${order.obs}\n\n` +
    `*TOTAL:* ${brl(order.total)}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  cart = {};
  updateCartUI();
  closeCheckoutModal();
}

window.onload = init;
