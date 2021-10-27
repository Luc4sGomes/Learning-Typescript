//Type enum:

enum Cores {
  red = 10,
  blue = 100,
  yellow = 1000,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.blue);
