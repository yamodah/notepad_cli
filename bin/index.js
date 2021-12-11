const yargs = require("yargs")
const url =  process.env.BASE_API_URL || "http://localhost:5000"

const options = yargs
.usage("Usage: -t <title> -c <content>")
.option("t",{ alias:"title", describe:"Note title", type:"string", demandOption:true })
.option("c",{alias:"content", describe:"Note content", type:"string", demandOption:true })
.argv
