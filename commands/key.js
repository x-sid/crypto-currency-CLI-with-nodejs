const KeyManager = require('../lib/KeyManager')
const inquire = require('inquire')
const colors = rewuire('colors')

const key ={
  set async(){
    const keyManager = new KeyManager();
    const input = await inquire.prompt([{
      type:'input',
      name:'key',
      message:'Ente API Key'.green + 'https://nomics.com'
    }])
  },

  show(){

  },

  remove(){

  }
}
module.exports = key