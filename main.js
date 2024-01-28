import PromptsManager from "./PromptManager.js";

const myPromptManager = new PromptsManager();

myPromptManager.recordPrompt(
  `What coding paradigm is ES?`,
  `ES can refer to different coding paradigms depending on the context. In the context of web development, ES often stands for ECMAScript, which is a scripting language specification that JavaScript follows. ECMAScript supports multiple programming paradigms, including:

Imperative Programming: Writing code that specifies the steps the program must take to reach the desired state.

Object-Oriented Programming (OOP): Organizing code into objects that encapsulate data and behavior.

Functional Programming (FP): Treating computation as the evaluation of mathematical functions, avoiding changing-state and mutable data.

JavaScript, as an implementation of ECMAScript, allows developers to use a combination of these paradigms based on their preferences and the requirements of the task at hand.`
);

myPromptManager.recordPrompt(
  `Aren't you forgetting a very important one?`,
  `I apologize if I missed mentioning a specific coding paradigm. Please clarify which paradigm you are referring to, and I'll be happy to provide information about it.
`
);

myPromptManager.recordPrompt(
  `What is imperative programming?`,
  `Imperative programming is a programming paradigm that uses statements that change a program's state. In imperative programming, the focus is on describing how a program operates.`
);


myPromptManager.recordTimestampInteraction(
  `What is OOP?`,
  `It is a programming paradigm.`,
  new Date()
);


myPromptManager.recordDalleInteraction(
  `Generate a painting based on this description`,
  `A beautiful landscape with mountains and a river.`,
  `https://example.com/image.jpg`
);


myPromptManager.recordDalleInteraction(
  `Generate a painting based on this description`,
  `https://example.com/image.jpg`
);


myPromptManager.showAllInteractions();

console.log('\n--------\n');


console.log('\n--------\n');

myPromptManager.removeInteraction(()=>{
  myPromptManager.showAllInteractions();
});

