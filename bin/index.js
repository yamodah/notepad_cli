#!/usr/bin/env node
require("dotenv").config()
const yargs = require("yargs")
const axios = require("axios").default


const options = yargs
.usage("Usage: -t <title> -c <content>")
.option("t",{ alias:"title", describe:"Note title", type:"string", demandOption:true })
.option("c",{ alias:"content", describe:"Note content", type:"string", demandOption:true })
.argv;

const newNote = {
    title:options.title,
    content:options.content,
}
axios.post("",newNote).catch(console.error)
