var jq = undefined;
var domain = "https://d2xlo5np10kf5x.cloudfront.net";
window.onload = function () {
  //load css
  document.getElementsByTagName("head")[0].insertAdjacentHTML(
    "beforeend",
    '<link rel="stylesheet" href="' + domain + '/modal.css" > "');
  //load Jquery
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', this.onJqueryLoaded);


  //append DOM for modal 
  var elem = document.createElement('div');
  elem.classList.add('pixibo-modal');

  elem.insertAdjacentHTML('beforeend', '<div class="modal-content"><span class="close">&times;</span><p>Hello world</p></div>');
  document.body.appendChild(elem);
}

function onJqueryLoaded() {
  jq = jQuery.noConflict(true);
  registerEvents();
}

function registerEvents() {
  jq('body').on('click', '#pixiboTest', function () {
    jq('.pixibo-modal').css('display', 'block');
  });
  jq('.pixibo-modal .close').click(function () {
    jq('.pixibo-modal').css('display', 'none');
  });
}

function loadScript(url, callback) {
  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.onload = callback;
  scriptElement.src = url // https://example.com/modal.js
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(scriptElement);
}