setInterval(glitch_titulos, 3000);

function glitch_titulos() {
  var titulo_glitch = document.querySelector('#titulo');
  setTimeout(() => {
    titulo_glitch.style.cssText = 'text-shadow: -2px 2px 0px #02ecec, 2px -2px 0px #e505e5';
  }, 1000);
  setTimeout(() => {
    titulo_glitch.style.cssText = 'text-shadow:0';
  }, 1200);
  setTimeout(() => {
    titulo_glitch.style.cssText = 'text-shadow: -2px 2px 0px #02ecec, 2px -2px 0px #e505e5';
  }, 1300);
  setTimeout(() => {
    titulo_glitch.style.cssText = 'text-shadow:0';
  }, 1500);
};

function glitch_menor() {
    var logo_glitch_preto = document.querySelector('.logo-glitch-preto');
    logo_glitch_preto.innerHTML = '<img src="SRC/logo-glitch.svg width="2.1rem"/>'
  };
  setInterval(glitch, 3000);

  function glitch() {
    var logo_glitch = document.querySelector('#logo-glitch');
    var estado_1 = '<img src="SRC/logo-glitch.svg" width="518px"/>';
    var estado_2 ='<img src="SRC/LOGO-BRANCO.svg" width="512px"/>';
    setTimeout(() => {
      logo_glitch.innerHTML = estado_1 ;
    }, 1000);
    setTimeout(() => {
      logo_glitch.innerHTML = estado_2 ;
    }, 1200);
    setTimeout(() => {
      logo_glitch.innerHTML = estado_1;
    }, 1300);
    setTimeout(() => {
      logo_glitch.innerHTML = estado_2;
    }, 1500);
  };