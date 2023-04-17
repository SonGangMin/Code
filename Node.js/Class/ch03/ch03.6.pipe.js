const fs = require("fs");
const readStream = fs.createReadStream("./readme.txt");
const read2Stream = fs.createReadStream("./readme3.txt");
readStream.pipe(read2Stream);
