import Interaction from "./Interaction.js";

class TimestampedInteraction extends Interaction{
    constructor(prompt, response, timestamp){

        // Validate inputs
        if (!(timestamp instanceof Date)) {
            throw new Error("Invalid input. 'timestamp' must be a Date object.");
          }

        super(prompt, response);
        this.timestamp = timestamp;
    }

    show(){
        console.log(`Prompt ${this.prompt.slice(0,20)}... had response: ${this.response.slice(0,20)}... ran at ${this.timestamp}`);
    }
}

export default TimestampedInteraction;