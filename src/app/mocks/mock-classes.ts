import { Classe } from "../models/classe";

export const CLASSES: Classe[] = [
  {
    id: 1,
    name: "mage",
    icone: "mage.png",
    competences: [
      {
        id: 1,
        name: "boule de feu",
        description: "lance une boule de feu",
        icone: "test-bdf.jpg"
      },
      {
        id: 2,
        name: "téléportation",
        description: "se téléporte quelques mètres plus loin",
        icone: "test-tp.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "guerrier",
    icone: "guerrier.png",
    competences: [
      {
        id: 4,
        name: "rage",
        description: "entre en rage pour gagner en force",
        icone: "test-rage.jpg"
      },
      {
        id: 5,
        name: "coup de tête",
        description: "donne un coup de tête pour renverser la cible",
        icone: "test-tete.jpg"
      }
    ]
  }
]
