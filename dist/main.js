
    (() => {
     var modules = {
       
         "./src/channel1.js": (module) => {
           module.exports = "status common";
//给你的代码加点注释：loader2//给你的代码加点注释：loader1
         }
       ,
         "./src/channel2.js": (module) => {
           module.exports = "has error";
//给你的代码加点注释：loader2//给你的代码加点注释：loader1
         }
       ,
         "./src/index.js": (module) => {
           const channel1 = require("./src/channel1.js");
const channel2 = require("./src/channel2.js");
console.log("channel", channel1, channel2);
//给你的代码加点注释：loader2//给你的代码加点注释：loader1
         }
         
     };
     var cache = {};
     function require(moduleId) {
       var cachedModule = cache[moduleId];
       if (cachedModule !== undefined) {
         return cachedModule.exports;
       }
       var module = (cache[moduleId] = {
         exports: {},
       });
       modules[moduleId](module, module.exports, require);
       return module.exports;
     }
     var exports ={};
     const channel1 = require("./src/channel1.js");
const channel2 = require("./src/channel2.js");
console.log("channel", channel1, channel2);
//给你的代码加点注释：loader2//给你的代码加点注释：loader1
   })();
    