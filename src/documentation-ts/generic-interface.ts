interface GenericIdentityFn<Type> {
  <Type>(arg: Type): Type;
}

function identity3<Type>(arg: Type): Type {
  return arg;
}

const myIdentity: GenericIdentityFn<number> = identity;
