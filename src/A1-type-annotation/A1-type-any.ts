//Any representa qualquer tipo, utilize any apenas em ultimo caso!

function showMessage(msg: any) {
  return msg;
}

//console.log(showMessage([1, 2, 3])); essa linha não irá funcionar
console.log(showMessage('foo'));
console.log(showMessage('`foo`'));
