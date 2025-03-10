import { GetMatchesResponse, MatchData, MatchPlayer } from "@/types/api";
import { generateFakePlayers } from "@/utils/playersGenerator";
import { v4 as uuidv4 } from "uuid";

const maps = ["Icebox", "Ascent", "Bind", "Split", "Haven", "Breeze"];
const agents = [
  { name: "Jett", icon: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png" },
  { name: "Sage", icon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png" },
  { name: "Omen", icon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png" },
  { name: "Reyna", icon: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png" },
  { name: "Phoenix", icon: "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/displayicon.png" },
  { name: "Killjoy", icon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png" },
  { name: "Brimstone", icon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png" },
];

export const generateRandomMatches = (
  count: number,
  selectedPlayerName: string,
  selectedPlayerTag: string,
  selectedPlayerRegion: string
): GetMatchesResponse => {
  return Array.from({ length: count }, (): MatchData => {
    const matchId = uuidv4();
    const map = maps[Math.floor(Math.random() * maps.length)];
    const isBlueWinner = Math.random() > 0.5;

    let players = generateFakePlayers(9, selectedPlayerRegion).map((player) => {
      const agent = agents[Math.floor(Math.random() * agents.length)];
      return {
        puuid: player.puuid,
        name: player.gameName,
        tag: player.tagLine,
        team: "",
        level: Math.floor(Math.random() * 50) + 1,
        character: agent.name,
        currenttier: player.competitiveTier,
        currenttier_patched: `Tier ${player.competitiveTier}`,
        player_card: player.PlayerCardID,
        player_title: player.TitleID,
        session_playtime: {
          minutes: Math.floor(Math.random() * 30),
          seconds: Math.floor(Math.random() * 60),
          milliseconds: Math.floor(Math.random() * 100000),
        },
        assets: {
          card: {
            small: `https://media.valorant-api.com/playercards/${uuidv4()}/smallart.png`,
            large: `https://media.valorant-api.com/playercards/${uuidv4()}/largeart.png`,
            wide: `https://media.valorant-api.com/playercards/${uuidv4()}/wideart.png`,
          },
          agent: {
            small: agent.icon,
            full: agent.icon,
            bust: agent.icon,
            killfeed: agent.icon,
          },
        },
        ability_casts: {
          c_cast: Math.floor(Math.random() * 10),
          q_cast: Math.floor(Math.random() * 10),
          e_cast: Math.floor(Math.random() * 10),
          x_cast: Math.floor(Math.random() * 5),
        },
        stats: {
          score: Math.floor(Math.random() * 5000),
          kills: Math.floor(Math.random() * 30),
          deaths: Math.floor(Math.random() * 30),
          assists: Math.floor(Math.random() * 20),
          bodyshots: Math.floor(Math.random() * 50),
          headshots: Math.floor(Math.random() * 20),
          legshots: Math.floor(Math.random() * 10),
        },
        economy: {
          spent: {
            overall: Math.floor(Math.random() * 100000),
            average: Math.floor(Math.random() * 5000),
          },
          loadout_value: {
            overall: Math.floor(Math.random() * 100000),
            average: Math.floor(Math.random() * 5000),
          },
        },
        damage_made: Math.floor(Math.random() * 5000),
        damage_received: Math.floor(Math.random() * 5000),
      };
    });

    const selectedPlayerAgent = agents[Math.floor(Math.random() * agents.length)];
    const selectedPlayer: MatchPlayer = {
      puuid: uuidv4(),
      name: decodeURIComponent(selectedPlayerName),
      tag: selectedPlayerTag,
      team: "",
      level: Math.floor(Math.random() * 50) + 1,
      character: selectedPlayerAgent.name,
      currenttier: Math.floor(Math.random() * 25),
      currenttier_patched: `Tier ${Math.floor(Math.random() * 25)}`,
      player_card: uuidv4(),
      player_title: uuidv4(),
      session_playtime: {
        minutes: Math.floor(Math.random() * 30),
        seconds: Math.floor(Math.random() * 60),
        milliseconds: Math.floor(Math.random() * 100000),
      },
      assets: {
        card: {
          small: `https://media.valorant-api.com/playercards/${uuidv4()}/smallart.png`,
          large: `https://media.valorant-api.com/playercards/${uuidv4()}/largeart.png`,
          wide: `https://media.valorant-api.com/playercards/${uuidv4()}/wideart.png`,
        },
        agent: {
          small: selectedPlayerAgent.icon,
          full: selectedPlayerAgent.icon,
          bust: selectedPlayerAgent.icon,
          killfeed: selectedPlayerAgent.icon,
        },
      },
      ability_casts: {
        c_cast: Math.floor(Math.random() * 10),
        q_cast: Math.floor(Math.random() * 10),
        e_cast: Math.floor(Math.random() * 10),
        x_cast: Math.floor(Math.random() * 5),
      },
      stats: {
        score: Math.floor(Math.random() * 5000),
        kills: Math.floor(Math.random() * 30),
        deaths: Math.floor(Math.random() * 30),
        assists: Math.floor(Math.random() * 20),
        bodyshots: Math.floor(Math.random() * 50),
        headshots: Math.floor(Math.random() * 20),
        legshots: Math.floor(Math.random() * 10),
      },
      economy: {
        spent: {
          overall: Math.floor(Math.random() * 100000),
          average: Math.floor(Math.random() * 5000),
        },
        loadout_value: {
          overall: Math.floor(Math.random() * 100000),
          average: Math.floor(Math.random() * 5000),
        },
      },
      damage_made: Math.floor(Math.random() * 5000),
      damage_received: Math.floor(Math.random() * 5000),
    };

    players.push(selectedPlayer);

    players.forEach((player, index) => {
      player.team = index < 5 ? "Blue" : "Red";
    });

    const blueTeam = players.filter((p) => p.team === "Blue");
    const redTeam = players.filter((p) => p.team === "Red");

    return {
      metadata: {
        map,
        game_version: "release-03.12-shipping-16-649370",
        game_length: 2356581,
        game_start: Date.now(),
        game_start_patched: new Date().toDateString(),
        rounds_played: 23,
        mode: "Competitive",
        queue: "Standard",
        season_id: uuidv4(),
        platform: "PC",
        matchid: matchId,
        region: selectedPlayerRegion,
        cluster: "London",
      },
      players: {
        all_players: players,
        red: redTeam,
        blue: blueTeam,
      },
      teams: {
        red: { has_won: !isBlueWinner, rounds_won: 10, rounds_lost: 13 },
        blue: { has_won: isBlueWinner, rounds_won: 13, rounds_lost: 10 },
      },
    };
  });
};
