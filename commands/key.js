const KeyManager = require("../lib/KeyManager");
const inquire = require("inquirer");
const colors = require("colors");
const isRequired = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquire.prompt([
      {
        type: "input",
        name: "key",
        message: "Ente API Key".green + " " + "https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);
    console.log(input.key);
    if (key) {
      return console.log("API Key Set".yellow);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      
      console.log("Current API Key:".blue + ' ' + key)

    } catch (error) {
      console.log(error.message.red)
    }
  },

  async remove() {
    try{
      const keyManager = new KeyManager();
      await keyManager.deleteKey();

      console.log("Key removed")

      return;
    }catch(error){
      console.log(error.message.red)
    }
  },
};
module.exports = key;
