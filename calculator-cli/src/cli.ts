import minimist from "minimist";
import { version } from "./version";
import { help } from "./help";
import { add, even, odd } from "./arith";

export async function cli(argsArray: any[]) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0];
  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help) {
    cmd = "help";
  }

  if (args.add) {
    cmd = "add";
  }
  if (args.even) {
    cmd = "even";
  }
  if (args.odd) {
    cmd = "odd";
  }

  switch (cmd) {
    case "version":
      version();
      break;

    case "help":
      help(args);
      break;

    case "add":
      console.log(add(argsArray.slice(3)));
      break;

    case "even":
      console.log(even(argsArray.slice(3)));
      break;

    case "odd":
      console.log(odd(argsArray.slice(3)));
      break;

    default:
      console.error(`${cmd} is not a valid command!`);
      break;
  }
}
