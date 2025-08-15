// src/data/samplePlayersData.ts

export type PlayerStats = {
  player: {
    id: number;
    firstname: string;
    lastname: string;
  };
  team: {
    id: number;
    name: string;
    nickname: string;
    code: string;
    logo: string;
  };
  game: {
    id: number;
  };
  points: number;
  pos: string | null;
  min: string;
  fgm: number;
  fga: number;
  fgp: string;
  ftm: number;
  fta: number;
  ftp: string;
  tpm: number;
  tpa: number;
  tpp: string;
  offReb: number;
  defReb: number;
  totReb: number;
  assists: number;
  pFouls: number;
  steals: number;
  turnovers: number;
  blocks: number;
  plusMinus: string;
  comment: string | null;
};

export const samplePlayersData: PlayerStats[] = [
  {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
  {
    player: { id: 2, firstname: "Stephen", lastname: "Curry" },
    team: {
      id: 10,
      name: "Golden State Warriors",
      nickname: "Warriors",
      code: "GSW",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
    },
    game: { id: 10001 },
    points: 28,
    pos: "PG",
    min: "37",
    fgm: 9,
    fga: 18,
    fgp: "50.0",
    ftm: 4,
    fta: 4,
    ftp: "100.0",
    tpm: 6,
    tpa: 12,
    tpp: "50.0",
    offReb: 1,
    defReb: 4,
    totReb: 5,
    assists: 7,
    pFouls: 2,
    steals: 1,
    turnovers: 2,
    blocks: 0,
    plusMinus: "+5",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
    {
    player: { id: 1, firstname: "LeBron", lastname: "James" },
    team: {
      id: 13,
      name: "Los Angeles Lakers",
      nickname: "Lakers",
      code: "LAL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
    },
    game: { id: 10001 },
    points: 32,
    pos: "SF",
    min: "35",
    fgm: 12,
    fga: 20,
    fgp: "60.0",
    ftm: 6,
    fta: 7,
    ftp: "85.7",
    tpm: 2,
    tpa: 5,
    tpp: "40.0",
    offReb: 2,
    defReb: 7,
    totReb: 9,
    assists: 8,
    pFouls: 1,
    steals: 2,
    turnovers: 3,
    blocks: 1,
    plusMinus: "+10",
    comment: null
  },
];
