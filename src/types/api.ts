
export interface MatchPlayerStats {
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kills: number;
  score: number;
}

export interface MatchRound {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: object;
  defuse_events: object;
  player_stats: MatchPlayerStats[];
}

export interface MatchMetadata {
  map: string;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: string;
  queue: string;
  season_id: string;
  platform: string;
  matchid: string;
  region: string;
  cluster: string;
}

export interface MatchPlayer {
  puuid: string;
  name: string;
  tag: string;
  team: string;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: string;
  player_card: string;
  player_title: string;
  session_playtime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  assets: {
    card: {
      small: string;
      large: string;
      wide: string;
    };
    agent: {
      small: string;
      full: string;
      bust: string;
      killfeed: string;
    };
  };
  ability_casts: {
    c_cast: number;
    q_cast: number;
    e_cast: number;
    x_cast: number;
  };
  stats: {
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    bodyshots: number;
    headshots: number;
    legshots: number;
  };
  economy: {
    spent: {
      overall: number;
      average: number;
    };
    loadout_value: {
      overall: number;
      average: number;
    };
  };
  damage_made: number;
  damage_received: number;
}

export interface MatchTeams {
  red: {
    has_won: boolean;
    rounds_won: number;
    rounds_lost: number;
  };
  blue: {
    has_won: boolean;
    rounds_won: number;
    rounds_lost: number;
  };
}

export interface MatchData {
  metadata: MatchMetadata;
  players: {
    all_players: MatchPlayer[];
    red: MatchPlayer[];
    blue: MatchPlayer[];
  };
  teams: MatchTeams;
  rounds: MatchRound[];
}

export type GetMatchesResponse = MatchData[];
