import { Competence } from "./competence";

export interface Classe {
  id: number,
  name: string,
  icone: string,
  competences: Competence[]
}
