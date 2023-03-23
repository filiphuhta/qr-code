const createQrCode = () => {
  const qrcodeDiv = document.getElementById('qrcode');
  qrcodeDiv.innerHTML = ''; // clear existing content

  const qrcode = new QRCode(qrcodeDiv, {
    text: document.getElementById('qrcodeInput').value,
    width: 256,
    height: 256,
    colorDark: '#701131',
    colorLight: '#F49E88',
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    let qelem = document.querySelector('#qrcode img')
    let dlink = document.querySelector('#qrdl')
    let qr = qelem.getAttribute('src');
    dlink.setAttribute('href', qr);
    dlink.setAttribute('download', 'QrConsid');
    dlink.removeAttribute('hidden');
  }, 500);
}