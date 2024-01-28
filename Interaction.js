class Interaction{
    constructor(prompt, response){
        if (typeof prompt !== "string" || (response !== undefined && typeof response !== "string")) {
            throw new Error("Invalid input. 'prompt' and 'response' must be strings.");
          }
      
          if (!prompt.trim()) {
            throw new Error("Required attribute 'prompt' cannot be empty.");
          }

        this.prompt = prompt;
        this.response = response;
    }

    show(){
        console.log(`Prompt ${this.prompt.slice(0,20)}.. had response: ${this.response.slice(0,20)}..`);
    }
}

export default Interaction;
