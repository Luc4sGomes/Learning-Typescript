type Point2 = {
  x: number;
  y: number;
};

type Usuario = {
  name: string;
  idade: string;
  age: number;
  isAdmin: boolean;
};

function printCordenada(pontos: Point2) {
  console.log(`o eixo X é: ${pontos.x} e o eixo y é ${pontos.y}`);
}

printCordenada({ x: 101, y: 50 });
