const fs = require('fs');
let input = fs.readFileSync('codSys.txt','utf-8');
const code = input.split('').map(String);
function Pars() {
    for(let i = 0; i < code.length - 3; i++) {
        let symbol4 = code.slice(i, i+4);
        let orgSymb = new Set(symbol4);
        if(orgSymb.size === 4) {
          return i + 4;
          
        }
        
      }

  }
console.log(Pars())//part 1

function ParsMassege() {
    for(let i = 0; i < code.length; i++) {
        let symbol14 = code.slice(i, i+14);
        let orgSymb = new Set(symbol14);
        if(orgSymb.size === 14) {
          return i + 14;
          
        }
        
      }

    }
console.log(ParsMassege())//part 2