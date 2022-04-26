let other = null;
let features =
'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=800,width=500';
var reload = document.getElementById("reload")
var gamingcard = document.getElementById("gaming-card")
document.getElementById('clm').addEventListener('click', (ev) => {
    let url = 'https://discord.com/oauth2/authorize?client_id=924652623389413446&scope=applications.commands%20bot&permissions=8';
    document.querySelector("#ba").style.display = "block";
    document.querySelector("#clm").style.display = "none";
    let other = window.open(url, '_blank', features);
  });

reload.onclick = function reload() {
  document.querySelector("#reloading").style.display = "block";
  window.location.reload()
}

// gaming-card
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}