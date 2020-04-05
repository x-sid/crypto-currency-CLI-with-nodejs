const axios = require("axios");
const colors = require("colors");

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }

  async getPriceData(coinOption, curOption) {
    try {
      //formater for currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );

      let output = "";

      res.data.forEach((coin) => {
        output += `Coin:${coin.symbol.yellow} (${coin.name}) | Price: ${
          formatter.format(coin.price).green
        } | Rank: ${coin.rank.blue}\n`;
      });

      return output;
    } catch (error) {
      if (error.status === 401) {
        throw new Error("Your API key is invalid -- Go to https://nomics.com");
      }

      return "Something went wrong";
    }
  }
}

module.exports = CryptoApi;
