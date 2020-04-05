const KeyManager = require('../lib/KeyManager')

const CryptoApi = require('../lib/CryptoApi')
const check = {
  async price(c){
    try{
      const keyManager = new KeyManager()
      const key = keyManager.getKey();
      const api = new CryptoApi(key)
      const priceOutputData = await api.getPriceData(c.coin,c.cur)

      console.log(priceOutputData)
    }catch(error){
      console.error(error)
    }
  }
} 

module.exports = check