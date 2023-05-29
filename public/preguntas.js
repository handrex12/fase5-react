function procesarRespuesta() {
  let total = 5;
  let puntos = 0;

  let myform = document.forms["question"];
  let rescorrectas = ["b","c","a","a","c"];
  for (let i = 1; i <= total; i++) {
    if (myform["R" + i].value == null ||
      myform["R" + i].value == ''){
        alert('Favor responder todas las preguntas');
        return false;
      }
      else{
        if (myform["R" + i].value===rescorrectas[i-1])
          puntos++;

      }
  }
  let resultado=document.getElementById('result')
  resultado.innerHTML='Obtuviste ' + puntos +' puntos de ' + total ;
  return false;

}
