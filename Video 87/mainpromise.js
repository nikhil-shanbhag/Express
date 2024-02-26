import fs from 'fs/promises'

let a = await fs.readFile("noob.txt")
let b = await fs.writeFile("noob.txt", "\n\n\n\n\n\nthis is new promise")
console.log(a.toString(), b);