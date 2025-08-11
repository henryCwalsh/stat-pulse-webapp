export type Game = {
  id: number;
  league: string;
  season: number;
  date: {
    start: string;
    end: string | null;
    duration: string | null;
  };
  stage: number;
  status: {
    clock: string | null;
    halftime: boolean;
    short: number;
    long: string;
  };
  periods: {
    current: number;
    total: number;
    endOfPeriod: boolean;
  };
  arena: {
    name: string;
    city: string;
    state: string;
    country: string | null;
  };
  teams: {
    visitors: {
      id: number;
      name: string;
      nickname: string;
      code: string;
      logo: string;
    };
    home: {
      id: number;
      name: string;
      nickname: string;
      code: string;
      logo: string;
    };
  };
  scores: {
    visitors: {
      win: number;
      loss: number;
      series: { win: number; loss: number };
      linescore: string[];
      points: number;
    };
    home: {
      win: number;
      loss: number;
      series: { win: number; loss: number };
      linescore: string[];
      points: number;
    };
  };
  officials: string[];
  timesTied: number | null;
  leadChanges: number | null;
  nugget: string | null;
};