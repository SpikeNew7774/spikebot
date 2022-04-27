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

function getParameterByName(pageid, url = window.location.href) {
  pageid = pageid.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + pageid + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.getElementById(getParameterByName("pageid")).style.display = "block";