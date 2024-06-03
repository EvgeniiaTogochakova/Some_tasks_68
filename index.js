const riddles = [
  {
    riddle: "Красная девица сидит в темнице, а коса на улице.",
    answer: "Морковь",
  },
  { riddle: "Зелёные глаза - всем мышам гроза. Кто она?", answer: "Кошка" },

  { riddle: "Висит груша - нельзя скушать.", answer: "Лампочка" },

  {
    riddle: "Нос стальной, хвост льняной. Как зовут эту пару?",
    answer: "Нитка с иголкой",
  },
  {
    riddle:
      "Вся мохнатенька, четыре лапки, сама усатенька, два яхонта под шапкой.",
    answer: "Кошка",
  },
  {
    riddle: "Он стучит — голова болит, а не стучит — голодный...",
    answer: "Дятел",
  },
  {
    riddle: " Не упрекает, не ругает, a плакать заставляет.",
    answer: "Лук",
  },

  {
    riddle: "Два кольца, два конца, в середине гвоздик.",
    answer: "Ножницы",
  },

  {
    riddle: "Крикнешь – откликается, от людей прячется.",
    answer: "Эхо",
  },

  {
    riddle: "Не портной, а всю жизнь с иголками ходит.",
    answer: "Ёж",
  },
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const num = getRandomIntInclusive(0, 9);

const getRandomRiddle = () => riddles[num].riddle;

const getRandomRiddleAnswer = () => riddles[num].answer;

export { getRandomRiddle, getRandomRiddleAnswer };
