function info(id){
  const map = {
    PRPP: "PRPP: ribosa activada que inicia la síntesis de purinas.",
    IMP: "IMP: nucleótido central y precursor común de AMP y GMP.",
    AMP: "AMP: adenilato (usa GTP).",
    GMP: "GMP: guanilato (usa ATP).",
    CPS2: "CPS II: enzima reguladora clave de pirimidinas.",
    UMP: "OMP → UMP: primer nucleótido pirimidínico.",
    CTP: "UTP y CTP: productos finales."
  };
  document.getElementById("infoBox").innerText = map[id];
}