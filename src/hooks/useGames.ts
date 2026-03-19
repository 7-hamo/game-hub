import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform{
    id:number;
    name:string;
    slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform: Platform}[]
  metacritic:number
}


const useGames = (gameQury:GameQuery) => 
  useData<Game>("/games",
  {params:{genres:gameQury.genre?.id, platforms: gameQury.platform?.id}},
  [gameQury]);

export default useGames;