import Interaction from "./Interaction.js";
import Timestamp from "./TimestampedInteraction.js";
import DalleInteraction from "./DalleInteraction.js";
import readline from 'readline';

export class PromptsManager {
  interactions = [];

  showAllInteractions() {
    for (let inter of this.interactions) {
      inter.show();
    }
  }

  recordPrompt(prompt, response) {

    // Validate inputs
    if (typeof prompt !== "string" || typeof response !== "string") {
      throw new Error("Invalid input. 'prompt' and 'response' must be strings.");
    }

    // Ensure required attributes are properly passed
    if (!prompt.trim()) {
      throw new Error("Required attribute 'prompt' cannot be empty.");
    }

    const p = new Interaction(prompt, response);
    this.interactions.push(p);
  }

  recordTimestampInteraction(prompt, response, timestamp=Date.now()){
    //const timestamp = new Date();
    const p = new Timestamp(prompt, response, timestamp);
    this.interactions.push(p);
  }

  recordDalleInteraction(prompt, imageLink,response=''){

    const p = new DalleInteraction(prompt, response, imageLink);
    this.interactions.push(p);
  }


  removeInteraction(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter a word or sentence from the prompt: ", (text) => {
        let interactionsList = [];
        let count = 1;

        // Collect prompts containing the specified text
        for (let inter of this.interactions) {
            if (inter.prompt.includes(text)) {
                interactionsList.push(inter.prompt);
                console.log(`${count}. ${inter.prompt}`);
                count++;
            }
        }

        if (count === 1) {
            console.log("No prompt with the specified word or sentence exists.");
            rl.close();
        } else {
            rl.question("Enter the index of the prompt to remove: ", (promptIndex) => {
                // Validate the user input for promptIndex
                promptIndex = parseInt(promptIndex);
                if (isNaN(promptIndex) || promptIndex < 1 || promptIndex >= count) {
                    console.log("Invalid index. Please enter a valid index.");
                } else {
                    console.log(`Prompt "${this.interactions[promptIndex].prompt}" removed successfully.`);
                    this.interactions.splice(promptIndex, 1);

                    console.log('\n--------\n');
                }
                rl.close();
                callback();
            });
        }
    });

  }


}

export default PromptsManager;
