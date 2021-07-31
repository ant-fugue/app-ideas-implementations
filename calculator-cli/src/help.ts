const menus = {
  main: `
  calc command options

    add ....... add given integers and return its result
    even ...... add only even integers
    odd ....... add only odd integers
    version ... show package version
    help....... show help menu for a command
  `,
};
// TODO define and use type definition for "args"
export async function help(args: Record<string, string>): Promise<void> {
  // console.log(menus[subCmd] || menus.main);
  console.log(menus.main);
}
9;
