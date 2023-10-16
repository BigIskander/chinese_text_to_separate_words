const tokenize = require('chinese-tokenizer').loadFile("cedict_ts.u8")
const fs = require('fs')
const path = require('path')
let data = fs.readFileSync("no_words.txt", 'utf8').split("\n")
function clearInput(value) {
    if(!value) return ''
    return value.replace(/(?:\r\n|\r|\n|\t)/g, ' ').replace(/(?:\s\s+)/g, ' ').trim()
}
let no_words = []
for(let word of data) {
    no_words.push(clearInput(word))
}
fs.readdirSync("subtitles").forEach(file => {
    let text = ""
    let data = fs.readFileSync(path.join("subtitles", file), 'utf8')
    // get only chinese characters
    // https://stackoverflow.com/questions/9576384/use-regular-expression-to-match-any-chinese-character-in-utf-8-encoding
    let sentences = data.match(/[\u4E00-\u9FFF]+/gm)
    for(let sentence of sentences) {
        text = text.concat(" ", sentence)
    }
    let words = tokenize(text)
    let output = []
    for(let word of words) {
        if(word.text != " ") output.push(word.text)
    }
    output = [...new Set(output)]
    output = output.filter((item) => { return !no_words.includes(item) })
    fs.writeFileSync(path.join("output", file), output.join("\n"));
});