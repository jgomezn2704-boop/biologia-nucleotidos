
let puntos = 0;
function info(id){
  if(id==='HGPRT'){
    document.getElementById('infoBox').innerText =
      'HGPRT convierte hipoxantina y guanina en nucleótidos reutilizables.';
  }
}
function score(ans){
  if(ans==='IMP'){ puntos=10; }
  document.getElementById('scoreBox').innerText =
    'Puntaje obtenido: '+puntos+'/10';
}
