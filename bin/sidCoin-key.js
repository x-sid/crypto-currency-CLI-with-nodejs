const program = require("commander");
const key = require('../commands/key')

program
  .command("set")
  .description("set API key -- Get at https://nomics.com")
  .action(key.set)

program
  .command("show")
  .description("Show API key")
  .action(key.show)

program
  .command("Remove")
  .description("Remove API key")
  .action(key.remove)

program .parse(process.argv);
