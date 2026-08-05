let selectedPayment = 'pix';

function selectPayment(type) {
  selectedPayment = type;
  
  const btnPix = document.getElementById('pay-pix');
  const btnCartao = document.getElementById('pay-cartao');
  const btnDinheiro = document.getElementById('pay-dinheiro');
  const pixSection = document.getElementById('pix-section');
  const trocoBox = document.getElementById('troco-box');

  [btnPix, btnCartao, btnDinheiro].forEach(b => {
    if (b) b.className = 'bg-dark-950 border border-white/10 text-neutral-400 py-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1';
  });

  if (type === 'pix') {
    if (btnPix) btnPix.className = 'bg-dark-950 border border-brand-red text-white py-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1';
    if (pixSection) pixSection.classList.remove('hidden');
    if (trocoBox) trocoBox.classList.add('hidden');
  } else if (type === 'cartao') {
    if (btnCartao) btnCartao.className = 'bg-dark-950 border border-brand-red text-white py-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1';
    if (pixSection) pixSection.classList.add('hidden');
    if (trocoBox) trocoBox.classList.add('hidden');
  } else if (type === 'dinheiro') {
    if (btnDinheiro) btnDinheiro.className = 'bg-dark-950 border border-brand-red text-white py-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1';
    if (pixSection) pixSection.classList.add('hidden');
    if (trocoBox) trocoBox.classList.remove('hidden');
  }
}

function abrirModalCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;
  
  const total = Object.values(cart).reduce((sum, c) => sum + (c.item.price * c.qty), 0);
  gerarPix(total);
  selectPayment('pix');
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharModalCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function processarCheckout() {
  const nome = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;
  const troco = document.getElementById('cust-troco').value;

  let linhas = [];
  linhas.push('*NOVO PEDIDO - JUNINHO LANCHES* 🍔');
  linhas.push('');
  linhas.push('*Cliente:* ' + nome);
  linhas.push('*WhatsApp:* ' + phone);
  linhas.push('*Endereço:* ' + address);
  linhas.push('');
  linhas.push('*ITENS DO PEDIDO:*');
  
  Object.values(cart).forEach(c => {
    linhas.push(`• ${c.qty}x ${c.item.name} (${brl(c.item.price * c.qty)})`);
  });
  
  const total = Object.values(cart).reduce((sum, c) => sum + (c.item.price * c.qty), 0);
  linhas.push('');
  linhas.push('*TOTAL: ' + brl(total) + '*');
  linhas.push('');
  
  if (selectedPayment === 'pix') {
    linhas.push('*Forma de Pagamento:* Pix (Comprovante em anexo)');
  } else if (selectedPayment === 'cartao') {
    linhas.push('*Forma de Pagamento:* Cartão (Maquininha na entrega)');
  } else if (selectedPayment === 'dinheiro') {
    linhas.push('*Forma de Pagamento:* Dinheiro' + (troco ? ` (Troco para R$ ${troco})` : ' (Sem troco)'));
  }

  linhas.push('');
  linhas.push('_Observações/Sabores de bebida informados em seguida._');

  const textoMsg = encodeURIComponent(linhas.join('\n'));
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${textoMsg}`, '_blank');
}
