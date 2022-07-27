import { Competence } from "./competence";

export interface Race {
  id: number,
  name: string,
  bonusValue: number,
  bonusCarac: string,
  icone: string,
  competence: Competence
}
