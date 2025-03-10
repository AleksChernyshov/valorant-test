export interface IPlayer {
  puuid: string,
  name: string,
  tag: string,
  team: string,
  level: number,
  character: string,
  currenttier: number,
  currenttier_patched: string,
  player_card: string,
  player_title: string,
  party_id: string,
  session_playtime: {
    minutes: number,
    seconds: number,
    milliseconds: number
  },
  assets: {
    card: {
      small: string,
      large: string,
      wide: string
    },
    agent: {
      small: string,
      full: string,
      bust: string,
      killfeed: string
    }
  },
  behaviour: object,
  platform: object,
  ability_casts: object,
  stats: {
    score: number,
    kills: number,
    deaths: number,
    assists: number,
    bodyshots: number,
    headshots: number,
    legshots: number
  },
  economy: object,
  damage_made: number,
  damage_received: number
}

interface IMetadata {
  cluster: string,
  game_length: number,
  game_start: number,
  game_start_patched: string,
  game_version: string,
  map: string,
  matchid: string,
  mode: string,
  mode_id: string,
  platform: string,
  premier_info: object
  queue: string,
  region: string,
  rounds_played: number,
  season_id: string,
}

export interface IMatch {
  metadata: IMetadata;
  players: {
    all_players: IPlayer[],
    red: IPlayer[],
    blue: IPlayer[],
  },
  teams: {
    red: {
      has_won: boolean,
      rounds_won: number,
      rounds_lost: number
    },
    blue: {
      has_won: boolean,
      rounds_won: number,
      rounds_lost: number
    }, 
    observers: [],
    kills: [],
    coaches: []
  },
  rounds: object[],
}