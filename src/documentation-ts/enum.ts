//Enums allow a devolper to define a set of named constants

//Numeric Enums
//An enum can be defined using the enum keyword

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  //...
}

respond('Princess Caroline', UserResponse.Yes);

//String enums
//String enums are a similar concept, but have some subtle runtime differences as documented below. In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

//Heterogeneous enums
//Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so:

enum BooleanLikeHetorogeneousEnum {
  No = 'yes',
  yes = 'no',
}

//Union enums and enum member types

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

const c: Circle = {
  //kind: ShapeKind.Square, Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.

  radius: 110,
};
