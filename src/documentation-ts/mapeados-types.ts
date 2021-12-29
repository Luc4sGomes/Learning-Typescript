//quando voce nao quer repetir as vezes um tipo precisa ser baseado em outro tipo

type OnlyBoolsAndHorses = {
  [key: string]: boolean;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

//um tipo mapeado é um tipo generico que usa uma uniao de propertyKey para iterar por meio de chaves para criar um tipo

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

//neste exemplo acima OptionsFlag pegará todas as propriedades do tipo Type e alterará seus valores para um booleano

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
