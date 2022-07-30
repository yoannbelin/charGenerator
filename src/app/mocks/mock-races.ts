import { Race } from "../models/race";

export const RACES: Race[] = [
  {
    id: 1,
    name: "orc",
    bonusValue: 2,
    bonusCarac: "force",
    icone: "orc.jpg",
    competence: {
      id: 3,
      name: "charge",
      description: "charge vers l'avant",
      icone: "charge.jpg"
    }
  },
  {
    id: 2,
    name: "elf",
    bonusValue: 2,
    bonusCarac: "intelligence",
    icone: "elf.jpg",
    competence: {
      id: 6,
      name: "lien naturel",
      description: "gagne un bonus d'intelligence dans la nature",
      icone: "lien.jpg"
    }
  }
]
