# random-riddles-10

If you want to create a service that should be used by real people, not bots, you can ask popular and basic riddles to users. Here are 10 simple riddles in Russian that will not cause difficulty guessing for Russian-speaking users.

## Installation

```
npm install random-riddles-10
```

## Usage

```
import { getRandomRiddle, getRandomRiddleAnswer } from "random-riddles-10";

const randomRiddle = getRandomRiddle();
console.log(randomRiddle);
const randomRiddleAnswer = getRandomRiddleAnswer();
console.log(randomRiddleAnswer);

```