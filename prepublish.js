const { execSync } = require("child_process")

const packageJson = require("./package.json")
const [version, _build] = packageJson.version.split("-")
const head = execSync('git rev-parse --short HEAD').toString().trim()
const newVersion = `${version}-${head}`

execSync(`pnpm version ${newVersion}`)
