let orderData = {
  nome: '',
  telefone: '',
  endereco: '',
  pagamento: '',
  troco: ''
};

function processarPedidoWhats() {
  let linhas = [];
  linhas.push('*NOVO PEDIDO - JUNINHO LANCHES* 🍔');
  linhas.push('');
  linhas.push('*Cliente:* ' + orderData.nome);
  linhas.push('*WhatsApp:* ' + orderData.telefone);
  linhas.push('*Endereço:* ' + orderData.endereco);
  linhas.push('');
  linhas.push('*ITENS DO PEDIDO:*');
  
  Object.values(cart).forEach(c => {
    linhas.push(`• ${c.qty}x ${c.item.name} (${brl(c.item.price * c.qty)})`);
  });
  
  const total = Object.values(cart).reduce((sum, c) => sum + (c.item.price * c.qty), 0);
  linhas.push('');
  linhas.push('*TOTAL: ' + brl(total) + '*');
  linhas.push('');
  
  if (orderData.pagamento === 'pix') {
    linhas.push('*Forma de Pagamento:* Pix (Comprovante em anexo)');
  } else if (orderData.pagamento === 'cartao') {
    linhas.push('*Forma de Pagamento:* Cartão (Maquininha na entrega)');
  } else if (orderData.pagamento === 'dinheiro') {
    linhas.push('*Forma de Pagamento:* Dinheiro' + (orderData.troco ? ` (Troco para R$ ${orderData.troco})` : ' (Sem troco)'));
  }

  const textoMsg = encodeURIComponent(linhas.join('\n'));
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${textoMsg}`, '_blank');
}
