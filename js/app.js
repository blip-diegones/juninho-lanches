const FALLBACK_MENU = {
  categories: [
    { id: "lanches", label: "Lanches" },
    { id: "vegetarianos", label: "Vegetarianos" },
    { id: "combos", label: "Combos" },
    { id: "porcoes", label: "Porções" },
    { id: "bebidas", label: "Bebidas" }
  ],
  items: [
    { id: "misto", cat: "lanches", name: "Misto", price: 16.0, desc: "Pão, maionese, presunto e queijo.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop" },
    { id: "x-burguer", cat: "lanches", name: "X-Burguer", price: 19.0, desc: "Pão, maionese, hambúrguer, presunto, queijo, batata palha e tomate.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop" },
    { id: "x-salada", cat: "lanches", name: "X-Salada", price: 20.0, desc: "Pão, maionese, hambúrguer, presunto, queijo, alface e tomate.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop" },
    { id: "x-americano", cat: "lanches", name: "X-Americano", price: 20.0, desc: "Pão, maionese, presunto, queijo, ovo, alface e tomate.", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=800&auto=format&fit=crop" },
    { id: "x-egg", cat: "lanches", name: "X-Egg", price: 22.0, desc: "Pão, maionese, hambúrguer, queijo, tomate, ovo e presunto.", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop" },
    { id: "x-calabresa", cat: "lanches", name: "X-Calabresa", price: 23.0, desc: "Pão, maionese, hambúrguer, queijo, presunto, calabresa, batata palha e tomate.", image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=800&auto=format&fit=crop" },
    { id: "x-frango-bacon", cat: "lanches", name: "X-Frango Bacon", price: 26.0, desc: "Pão, maionese, filé de frango, bacon, queijo, presunto, milho, tomate.", badge: "Top Pedido", image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&auto=format&fit=crop" },
    { id: "x-bacon", cat: "lanches", name: "X-Bacon", price: 26.0, desc: "Pão, maionese, hambúrguer, queijo, presunto, bacon, batata palha e tomate.", badge: "Mais Pedido", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop" },
    { id: "especial-casa", cat: "lanches", name: "Especial da Casa", price: 26.0, desc: "Pão, maionese, hambúrguer, queijo, presunto, bacon, ovo, cheddar, batata palha e tomate.", badge: "Da Casa", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop" },
    { id: "fritas-queijo-bacon-cheddar", cat: "porcoes", name: "Fritas com Queijo, Bacon e Cheddar", price: 30.0, desc: "Batata frita coberta com queijo, bacon e molho cheddar cremoso.", badge: "Top Porção", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop" },
    { id: "refri-lata", cat: "bebidas", name: "Refrigerante Lata", price: 8.0, desc: "Lata 350ml (Informe o sabor desejado no WhatsApp).", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop" },
    { id: "refri-2l", cat: "bebidas", name: "Refrigerante 2L", price: 16.0, desc: "Garrafa de 2 Litros (Escolha o sabor no WhatsApp: Coca-Cola, Guaraná, etc).", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop" }
  ]
};

let MENU_DATA = { categories: [], items: [] };
let cart = {};
let activeCategory = 'lanches';
let viewMode = 'grid'; // 'grid' ou 'list'

async function init() {
  try {
    const res = await fetch('data/menu.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    MENU_DATA = await res.json();
  } catch (e) {
    MENU_DATA = FALLBACK_MENU;
  }

  renderCategories();
  renderMenu(activeCategory);
  renderDestaques();
  renderSuggestions();
}

function brl(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

function setViewMode(mode) {
  viewMode = mode;
  const btnGrid = document.getElementById('view-grid-btn');
  const btnList = document.getElementById('view-list-btn');

  if (mode === 'grid') {
    if (btnGrid) btnGrid.className = 'p-2 rounded-full text-white bg-white/10 transition';
    if (btnList) btnList.className = 'p-2 rounded-full text-neutral-400 hover:text-white transition';
  } else {
    if (btnList) btnList.className = 'p-2 rounded-full text-white bg-white/10 transition';
    if (btnGrid) btnGrid.className = 'p-2 rounded-full text-neutral-400 hover:text-white transition';
  }

  renderMenu(activeCategory);
}

function renderCategories() {
  const container = document.getElementById('categories-tabs');
  if (!container) return;

  container.innerHTML = MENU_DATA.categories.map(c => {
    const isActive = c.id === activeCategory;
    const activeClasses = isActive 
      ? 'bg-white text-black border-white shadow-lg' 
      : 'bg-dark-900 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white';

    return `
      <button onclick="switchCategory('${c.id}')" class="px-6 py-3 rounded-full text-sm font-semibold border transition-all whitespace-nowrap ${activeClasses}">
        ${c.label}
      </button>
    `;
  }).join('');
}

function switchCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderMenu(catId);
}

function renderMenu(catId) {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const items = MENU_DATA.items.filter(i => i.cat === catId);

  if (items.length === 0) {
    container.innerHTML = `<p class="text-neutral-500 col-span-full text-center py-12">Nenhum item encontrado nesta categoria.</p>`;
    return;
  }

  if (viewMode === 'grid') {
    container.className = 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6';
    container.innerHTML = items.map(item => `
      <div class="bg-dark-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
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
  } else {
    // MODO LISTA COMPACTA ESTILO CARDÁPIO TRADICIONAL
    container.className = 'grid sm:grid-cols-2 gap-4';
    container.innerHTML = items.map(item => `
      <div class="bg-dark-900 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition flex items-center gap-4">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-xl object-cover shrink-0">
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-baseline gap-2">
            <h3 class="font-bold text-sm text-white truncate">${item.name}</h3>
            <span class="text-brand-gold font-bold text-xs shrink-0">${brl(item.price)}</span>
          </div>
          <p class="text-neutral-400 text-[11px] line-clamp-2 mt-0.5 leading-snug font-light">${item.desc || ''}</p>
          <button onclick="addToCart('${item.id}')" class="mt-2 text-[11px] bg-white/10 hover:bg-white hover:text-black font-semibold px-3 py-1 rounded-lg transition flex items-center gap-1">
            <i data-lucide="plus" class="w-3 h-3"></i> Adicionar
          </button>
        </div>
      </div>
    `).join('');
  }
  
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

function renderSuggestions() {
  const container = document.getElementById('suggestions-list');
  if (!container) return;

  // Seleciona 2 bebidas ou porções populares
  const sug = MENU_DATA.items.filter(i => i.cat === 'bebidas' || i.cat === 'porcoes').slice(0, 2);

  container.innerHTML = sug.map(item => `
    <div class="flex items-center justify-between bg-dark-950 p-2.5 rounded-xl border border-white/5">
      <div class="flex items-center gap-2 min-w-0">
        <img src="${item.image}" class="w-10 h-10 rounded-lg object-cover shrink-0">
        <div class="min-w-0">
          <p class="text-xs font-bold text-white truncate">${item.name}</p>
          <p class="text-[11px] text-brand-gold font-semibold">${brl(item.price)}</p>
        </div>
      </div>
      <button onclick="addToCart('${item.id}')" class="text-xs bg-white/10 hover:bg-white hover:text-black font-bold px-3 py-1.5 rounded-lg transition shrink-0">
        + Add
      </button>
    </div>
  `).join('');
}

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

function continuarComprando() {
  toggleCart(false);
  const cardapioEl = document.getElementById('cardapio');
  if (cardapioEl) cardapioEl.scrollIntoView({ behavior: 'smooth' });
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
    container.innerHTML = `
      <div class="text-center py-10 space-y-3">
        <p class="text-neutral-500 text-sm">Seu carrinho está vazio.</p>
        <button onclick="continuarComprando()" class="text-xs bg-brand-red text-white font-bold px-4 py-2 rounded-xl hover:bg-red-600 transition">
          Escolher um Lanche
        </button>
      </div>
    `;
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

window.onload = init;
