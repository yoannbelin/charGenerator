import { Character } from "../models/character";

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: "imperath",
    classe: {
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
    description: "premier personnage test",
    sexe: "masculin",
    race: {
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
    force: 8,
    intelligence: 6,
    agilite: 4,
    constitution: 10,
    pvRestants: 100
  },
  {
    id: 2,
    name: "gregouin",
    classe: {
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
    },
    description: "deuxième personnage test",
    sexe: "féminin",
    race: {
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
    },
    force: 6,
    intelligence: 8,
    agilite: 6,
    constitution: 8,
    pvRestants: 80
  },
  {
    id: 3,
    name: "pilou",
    classe: {
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
    description: "premier troisième test",
    sexe: "masculin",
    race: {
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
    force: 4,
    intelligence: 10,
    agilite: 6,
    constitution: 8,
    pvRestants: 80
  },
  {
    id: 4,
    name: "poupi",
    classe: {
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
    description: "premier troisième test",
    sexe: "masculin",
    race: {
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
    force: 4,
    intelligence: 10,
    agilite: 6,
    constitution: 8,
    pvRestants: 80
  },
  {
    id: 5,
    name: "theodule",
    classe: {
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
    description: "premier troisième test",
    sexe: "masculin",
    race: {
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
    force: 4,
    intelligence: 10,
    agilite: 6,
    constitution: 8,
    pvRestants: 80
  },
  {
    id: 6,
    name: "vivion",
    classe: {
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
    description: "premier troisième test",
    sexe: "masculin",
    race: {
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
    force: 4,
    intelligence: 10,
    agilite: 6,
    constitution: 8,
    pvRestants: 80
  }
]
