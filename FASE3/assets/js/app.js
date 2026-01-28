
let score = 0;

function info(id){
  const map = {
    CPS2: 'CPS II cataliza el paso limitante de la síntesis de pirimidinas.',
    UMP: 'UMP es el primer nucleótido pirimidínico formado.',
    REG: 'CTP inhibe por retroalimentación negativa a CPS II.'
  };
  document.getElementById('infoBox').innerText = map[id];
}

function infoCat(id){
  const map = {
    gota: 'La gota es causada por hiperuricemia y depósito de cristales.',
    alopurinol: 'El alopurinol inhibe la xantina oxidasa.'
  };
  document.getElementById('catBox').innerText = map[id];
}

function q1(ans){ if(ans==='IMP'){ score+=5; } update(); }
function q2(ans){ if(ans==='CPS2'){ score+=5; } update(); }
function q3(ans){ if(ans==='alopurinol'){ score+=5; } update(); }

function update(){
  document.getElementById('scoreBox').innerText =
    'Puntaje final: '+score+'/15';
}
