interface Game {
  title: string;
  description: string;
  genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: 'the last of us',
  description: 'the best game in thw world',
  genre: 'action',
  platform: ['ps3', 'ps4'],
  getSimilars: (title: string) => {
    console.log(`similar games to ${title}: uncharted`);
  },
};

console.log(tlou.getSimilars(tlou.title));

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: 'the last of us',
  description: 'you play as ellie before the original game',
  genre: 'action',
  platform: ['ps4'],
  originalGame: tlou,
  newContent: ['3 hours story'],
};

console.log(leftbehind);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
