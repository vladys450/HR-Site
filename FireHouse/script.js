const btnContact = document.querySelector('.btn-contact');
const form = document.querySelector('form');

btnContact.addEventListener('click', () => {
  form.classList.toggle('show-form');
});

function showCookieModal() {
  var modal = document.getElementById("cookie-modal");
  modal.style.display = "flex";
}

function acceptCookies() {
  setCookie("cookies_accepted", "true", 365);
  var modal = document.getElementById("cookie-modal");
  modal.style.display = "none";
}

function rejectCookies() {
  var modal = document.getElementById("cookie-modal");
  modal.style.display = "none";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}