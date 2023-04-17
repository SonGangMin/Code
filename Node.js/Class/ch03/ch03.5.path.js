const path = require("path");
const string = __filename;

console.log("path.sep:", path.sep);
console.log(path.delimiter);
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.basename(string, path.extname(string)));
console.log(path.basename(string, "s"));
console.log(path.parse(string)); // 파일경로를 root,dir,base,ext,name으로 분리해줌

let pformat = path.format({
  dir: "/home/skm",
  name: "path",
  ext: ".js",
});
console.log(pformat);
console.log(path.format(path.parse(string))); //path.parse()한 객체를 파일경로로 합쳐줌
console.log(path.normalize("/home/skm/////path.js")); // \나 / 실수했을때 정상적으로 변환해줌
console.log(path.format(path.parse(string)));
console.log(path.isAbsolute("/home"));
console.log(path.relative("/home/", "/home/skm/Code/Node.js"));
