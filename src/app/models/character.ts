import { Classe } from "./classe";
import { Race } from "./race";

export interface Character {
  id: number,
  name: string,
  classe: Classe,
  description: string,
  sexe: string,
  race: Race,
  force: number,
  intelligence: number,
  agilite: number,
  constitution: number,
  pvRestants: number
}
