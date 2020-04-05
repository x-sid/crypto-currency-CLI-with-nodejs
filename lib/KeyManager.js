const configstore = require('configstore')
const pkg = require('./package.json')

const config = new Configstore(pkg.name, KeyManager)

class KeyManager {
  constructor(){
    this.conf = new Configstore(pkg.name)
  }

  setKey(key){
    this.conf.set('apiKey',key)
    return key;
  }

  getKey(key){
    const key = this.conf.get('apiKey')
    if(!key){
      throw new Error('No API Key Found - Get a key at https://nomics.com')
    }
    return key;
  }

  deleteKey(key){
    const key = this.conf.set('apiKey')

    if(!key){
      throw new Error('No API Key Found - Get a key at https://nomics.com')
    }

    this.conf.delete('apiKey')
    return key;
  }
}

module.exports = KeyManager;