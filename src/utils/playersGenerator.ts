import { Player } from "@/types/players";
import { v4 as uuidv4 } from "uuid";

const playerNamesByRegion: Record<string, string[]> = {
  eu: [
    "Oliver", "Lucas", "Hugo", "Liam", "Noah", "Emil", "Jakub", "Mateo", "Nils", "Felix",
    "Isabella", "Emma", "Mia", "Sofia", "Lara", "Lina", "Hanna", "Elena", "Anna", "Clara"
  ],
  ap: [
    "裕太", "翔太", "健一", "達也", "智也", "玲奈", "美咲", "花子", "愛", "奈々",
    "伟", "晓明", "建国", "文涛", "永强", "丽丽", "晓霞", "芳芳", "燕", "娜娜"
  ],
  na: [
    "James", "John", "Robert", "Michael", "William", "David", "Joseph", "Daniel", "Matthew", "Christopher",
    "Jessica", "Emily", "Sarah", "Ashley", "Megan", "Amanda", "Brittany", "Elizabeth", "Madison", "Samantha"
  ],
  kr: [
    "김민준", "이서준", "박도윤", "최지훈", "정우진", "김서연", "이지은", "박지수", "최유진", "정소영",
    "박민호", "강현우", "조성민", "윤재현", "신태민", "한수진", "송예진", "문지원", "오하나", "배지우"
  ],
  latam: [
    "Mateo", "Santiago", "Sebastián", "Leonardo", "Emiliano", "Diego", "Andrés", "Joaquín", "Rodrigo", "Francisco",
    "Valentina", "Camila", "Sofía", "Lucía", "Isabella", "Renata", "Mariana", "Victoria", "Gabriela", "Paula"
  ],
  br: [
    "Gabriel", "Lucas", "Mateus", "Pedro", "Felipe", "Rafael", "Enzo", "Gustavo", "Bernardo", "João",
    "Julia", "Isabella", "Lara", "Mariana", "Beatriz", "Luiza", "Camila", "Carolina", "Fernanda", "Gabriela"
  ]
};

const generateRandomTag = () => Math.floor(1000 + Math.random() * 9000).toString();

export const generateFakePlayers = (count: number = 30, region: string = "eu"): Player[] => {
  const names = playerNamesByRegion[region] || playerNamesByRegion["eu"];

  return Array.from({ length: count }, () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomRank = Math.floor(Math.random() * 1000) + 1;
    const randomRating = Math.floor(Math.random() * 1500);
    const randomWins = Math.floor(Math.random() * 100);
    const randomTier = Math.floor(Math.random() * 30);

    return {
      PlayerCardID: uuidv4(),
      TitleID: uuidv4(),
      IsBanned: false,
      IsAnonymized: false,
      puuid: uuidv4(),
      gameName: randomName,
      tagLine: generateRandomTag(),
      leaderboardRank: randomRank,
      rankedRating: randomRating,
      numberOfWins: randomWins,
      competitiveTier: randomTier
    };
  });
};
