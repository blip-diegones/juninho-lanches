let MENU_DATA = { categories: [], items: [] };
let cart = {};

async function init() {
  try {
    const res = await fetch('data/menu.json');
    MENU_DATA = await res.json();
    renderCategories();
    renderMenu('lanches');
    renderDestaques();
  } catch (e) {
    console.error("Erro ao carregar menu.json", e);
  }
}

function brl(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

function renderCategories() {
  const container = document.getElementById('categories-tabs');
  container.innerHTML = MENU_DATA.categories.map(c => `
    <button onclick="renderMenu('${c.id}')" class="px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 hover:border-white/30 transition whitespace-nowrap bg-dark-900">
      ${c.label}
    </button>
  `).join('');
}

function renderMenu(catId) {
  const container = document.getElementById('menu-grid');
  const items = MENU_DATA.items.filter(i => i.cat === catId);
  
  container.innerHTML = items.map(item => `
    <div class="bg-dark-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between">
      <div>
        <div class="h-48 overflow-hidden relative">
          <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          ${item.badge ? `<span class="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">${item.badge}</span>` : ''}
        </div>
        <div class="p-6 space-y-2">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-lg">${item.name}</h3>
            <span class="text-brand-gold font-bold text-sm">${brl(item.price)}</span>
          </div>
          <p class="text-neutral-400 text-xs leading-relaxed">${item.desc || ''}</p>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button onclick="addToCart('${item.id}')" class="w-full bg-white/5 hover:bg-white text-white hover:text-black font-semibold text-sm py-3 rounded-xl transition flex items-center justify-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i> Adicionar
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function renderDestaques() {
  const container = document.getElementById('destaques-grid');
  const destaques = MENU_DATA.items.filter(i => i.badge);
  
  container.innerHTML = destaques.map(item => `
    <div class="bg-dark-900 p-6 rounded-3xl border border-white/5 flex gap-4 items-center">
      <img src="${item.image}" class="w-24 h-24 rounded-2xl object-cover">
      <div class="space-y-1 flex-1">
        <h4 class="font-bold">${item.name}</h4>
        <p class="text-brand-gold font-bold text-sm">${brl(item.price)}</p>
        <button onclick="addToCart('${item.id}')" class="mt-2 text-xs bg-white text-black font-bold px-3 py-1.5 rounded-lg hover:bg-brand-red hover:text-white transition">
          + Adicionar
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  const item = MENU_DATA.items.find(i => i.id === id);
  if (!cart[id]) cart[id] = { item, qty: 0 };
  cart[id].qty++;
  updateCartUI();
  toggleCart(true);
}

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  if (forceOpen) drawer.classList.remove('translate-x-full');
  else drawer.classList.toggle('translate-x-full');
}

function updateCartUI() {
  const container = document.getElementById('cart-items');
  const entries = Object.values(cart);
  const total = entries.reduce((sum, c) => sum + (c.item.price * c.qty), 0);
  const count = entries.reduce((sum, c) => sum + c.qty, 0);

  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-count').classList.toggle('hidden', count === 0);
  document.getElementById('cart-total').textContent = brl(total);
  document.getElementById('checkout-btn').disabled = count === 0;

  container.innerHTML = entries.map(c => `
    <div class="flex items-center justify-between bg-dark-800 p-4 rounded-2xl border border-white/5">
      <div>
        <h4 class="font-bold text-sm">${c.item.name}</h4>
        <p class="text-xs text-neutral-400">${brl(c.item.price)}</p>
      </div>
      <div class="flex items-center gap-3 bg-dark-950 px-3 py-1.5 rounded-xl border border-white/5">
        <button onclick="changeQty('${c.item.id}', -1)" class="text-xs font-bold">-</button>
        <span class="text-sm font-bold">${c.qty}</span>
        <button onclick="changeQty('${c.item.id}', 1)" class="text-xs font-bold">+</button>
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