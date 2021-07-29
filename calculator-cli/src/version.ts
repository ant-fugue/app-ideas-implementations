import packagejson from '../package.json'
export async function version() {
  console.log(packagejson.version)
}