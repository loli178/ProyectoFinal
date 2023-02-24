function openH() {
  document.getElementById('show').style.width = '300px';
  document.getElementById('container').style.marginLeft = '300px';
  //   document.body.style.backgroundColor = 'rgba(154, 137, 137, 0.977)';
}

function closeH() {
  document.getElementById('show').style.width = '0';
  document.getElementById('show').style.height = 'auto';
  //   document.getElementById('show').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}
function openF() {
  document.getElementById('Hiden').style.visibility = 'hidden';
  document.getElementById('Hiden').style.display = 'none';
  // document.getElementById('container').style.marginLeft = '300px';
  //   document.body.style.backgroundColor = 'rgba(154, 137, 137, 0.977)';
}

function closeF() {
  document.getElementById('Hiden').style.visibility = 'visible';
  document.getElementById('Hiden').style.display = 'flex';
  //   document.getElementById('container').style.marginLeft = '0';
  // document.body.style.backgroundColor = 'white';
}
function show() {
  let detail = document.getElementsByClassName('detail');
  for (let i = 0; i < detail.length; i++) {
    detail[i].style.display = 'inline-block';
  }
}
function nShow() {
  let detail = document.getElementsByClassName('detail');
  for (let i = 0; i < detail.length; i++) {
    detail[i].style.display = 'none';
  }
}
