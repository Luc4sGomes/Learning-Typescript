type ProfileUser = {
    id: number;
    name: string;
};

type Char = {
    level: number;
    nickname: string;
};

type PlayerInfo = ProfileUser & Char;
let info: PlayerInfo = {
    id: 1,
    level: 11,
    name: 'luke',
    nickname: 'luk3',
};
