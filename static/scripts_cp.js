
//////////////////////////////////////////
/////////////COOKIE FUNCTIONS/////////////
//////////////////////////////////////////

// Set Cookie, unless policy hasn't been accepted.
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  if(!sessionStorage.getItem("cookie_policy")){
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";}
}

// Get Cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//////////////////////////////////////////
///////////////COOKIE POLICY /////////////
//////////////////////////////////////////

// When the page loads! Wait a little too
window.onload = setTimeout(function(){
  //If cookie exists, do not show cookie policy.
  //If session = deny, do not show cookie policy.
  if(getCookie("cookie_policy") || sessionStorage.getItem("cookie_policy") == 'deny'){
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
},600);

//////////////////////////////////////////
/////////////MODAL BUTTONS////////////////
//////////////////////////////////////////

// Get the modal
var modal = document.getElementById('Modal_cp');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_cp")[0];

// accept cookie policy Button
var btn_cpa = document.getElementById("cpa");

// deny cookie policy Button
var btn_cpd = document.getElementById("cpd");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // Store session variable.
  sessionStorage.setItem("cookie_policy", "deny");
}

// When the user clicks deny close the modal and add session variable
btn_cpd.onclick = function() {
  modal.style.display = "none";
  // Store session variable.
  sessionStorage.setItem("cookie_policy", "deny");
}

// When the user clicks accept drop cookie
btn_cpa.onclick = function() {
  modal.style.display = "none";
  setCookie("cookie_policy",'accept',1)
}
