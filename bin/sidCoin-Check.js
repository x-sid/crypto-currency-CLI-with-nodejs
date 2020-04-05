const program = require("commander");
const check = require("../commands/check");
program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>",
    "Add specific coin type in csv format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change the currency", "USD")
  .action((c) => {
    check.price(c);
  });
program.parse(process.argv);
