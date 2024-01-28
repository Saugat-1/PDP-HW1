import Interaction from "./Interaction.js";

class DalleInteraction extends Interaction{

    constructor(prompt, response="", imageLink){
        // Validate inputs
    if (typeof prompt !== "string" || typeof response !== "string" || typeof imageLink !== "string") {
      throw new Error("Invalid input. 'prompt', 'response', and 'imageUrl' must be strings.");
    }

    // Ensure required attributes are properly passed
    if (!prompt.trim() || !imageLink.trim()) {
      throw new Error("Required attributes 'prompt' and 'imageUrl' cannot be empty.");
    }

        super(prompt, response);
        this.imageLink = imageLink;
    }

    show(){
        if(this.response != ''){
            console.log(`Prompt ${this.prompt.slice(0, 20)}... had response: ${this.response.slice(0, 20)}... Image URL: ${this.imageLink}`);
        }
        else{
            console.log(`Prompt ${this.prompt.slice(0, 20)}and Image URL: ${this.imageLink}`);
        }
    }


    getType(){
        return "DalleInteraction";
    }

}

export default DalleInteraction;