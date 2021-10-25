//accountInfo
//charInfo

type accountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: accountInfo = {
  id: 123,
  name: 'lucas',
};

type charInfo = {
  nickname: string;
  level: number;
};

const char: charInfo = {
  nickname: 'lucas',
  level: 12,
};

//interseção
type PlayerInfo = accountInfo & charInfo;

const player: PlayerInfo = {
  id: 123,
  name: 'foo',
  nickname: 'foo bar',
  level: 12,
};
