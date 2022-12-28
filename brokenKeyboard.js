function findBrokenKeys(correct, actual) {
  //Definimos un array para almacenar las teclas identificadas como rotas
  const brokenKeys = [];
  //Iteramos sobre la frase correcta para recorrer una por una las letras de la misma
  for (let i = 0; i < correct.length; i++) {
    //Verificamos si en la misma posición de las dos frases las letras son distintas
    if (correct[i] !== actual[i]) {
      //Verificamos, en caso de que las letras sean distintas (lo que significa que esas letras estan rotas),
      //que no hayamos agregado anteriormente la letas al array de teclas identificadas como rotas.
      if (!brokenKeys.includes(correct[i])) {
        //Agregamos la letra encontrada como rota
        brokenKeys.push(correct[i]);
      }
    }
  }
  //Retornamos el array con las letras que identificamos
  return brokenKeys;
}
