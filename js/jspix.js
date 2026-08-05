/* Configuração do Lojista com dados oficiais */
const CONFIG = {
  whatsapp: '5535991419208',
  pixKey: '46345776000144', // Chave CNPJ do Juninho Lanches
  merchantName: 'JUNINHO LANCHES',
  merchantCity: 'SAO LOURENCO',
};

function crc16(str) {
  let crc = 0xFFFF;
  for (let c = 0; c < str.length; c++) {
    crc ^= str.charCodeAt(c) << 8;
    for (let i = 0; i < 8; i++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function tlv(id, value) { 
  return id + String(value.length).padStart(2, '0') + value; 
}

function buildPixPayload(amount) {
  const merchantAccount = tlv('00', 'BR.GOV.BCB.PIX') + tlv('01', CONFIG.pixKey);
  const mai = tlv('26', merchantAccount);
  const mcc = tlv('52', '0000');
  const cur = tlv('53', '986');
  const amt = tlv('54', amount.toFixed(2));
  const country = tlv('58', 'BR');
  const name = tlv('59', CONFIG.merchantName.substring(0, 25));
  const city = tlv('60', CONFIG.merchantCity.substring(0, 15));
  const addData = tlv('62', tlv('05', '***'));
  const payloadFormat = tlv('00', '01');
  const poi = tlv('01', '12');
  const partial = payloadFormat + poi + mai + mcc + cur + amt + country + name + city + addData + '6304';
  return partial + crc16(partial);
}

let currentPixCode = '';

function gerarPix(total) {
  currentPixCode = buildPixPayload(total);
  const qrContainer = document.getElementById('qrcode');
  if (qrContainer) {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: currentPixCode,
      width: 170,
      height: 170,
      colorDark: '#090909',
      colorLight: '#FFFFFF'
    });
  }
  const copiaColaInput = document.getElementById('pix-copia-cola');
  if (copiaColaInput) copiaColaInput.value = CONFIG.pixKey;
}

function copiarChavePix() {
  navigator.clipboard.writeText(CONFIG.pixKey).then(() => {
    const btn = document.getElementById('btn-copiar-pix');
    if (btn) {
      const orig = btn.innerText;
      btn.innerText = 'CNPJ Copiado! ✓';
      setTimeout(() => btn.innerText = orig, 2000);
    }
  });
}
