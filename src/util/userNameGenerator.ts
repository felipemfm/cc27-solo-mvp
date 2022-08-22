import { User } from "../globals";

export function userNameGenerator(): User {
  const date = new Date();
  const animalAvatar = [
    "Cat",
    "Dog",
    "Lizard",
    "Lion",
    "Elephant",
    "Hippo",
    "Parrot",
    "Toucans",
    "Dolphin",
    "Whale",
    "Monkey",
    "Fish",
    "Koala",
  ];
  const adAvatar = [
    "agile",
    "nimble",
    "spry",
    "strong",
    "secure",
    "powerful",
    "intelligent",
    "clever",
    "bright",
    "sharp",
  ];

  const name = `${adAvatar[Math.floor(Math.random() * adAvatar.length)]}${
    animalAvatar[Math.floor(Math.random() * animalAvatar.length)]
  }`;

  const token = date.getTime().toString(36).toUpperCase();

  return { name, token };
}
