const fs = require('fs');
let code = fs.readFileSync('challenges.js', 'utf8');

code = code.replace('const CHALLENGES =', 'global.CHALLENGES =');
code = code.replace('const DIFFICULTY_CONFIG =', 'global.DIFFICULTY_CONFIG =');
code = code.replace('const CATEGORY_CONFIG =', 'global.CATEGORY_CONFIG =');
eval(code);

const cmds = new Set();
CHALLENGES.bandit.forEach(ch => {
  ch.solutions.forEach(sol => {
    const mainCmd = sol.split('|')[0].trim().split(/\s+/)[0];
    cmds.add(mainCmd);
    // If it has pipe, add the piped commands too
    if (sol.includes('|')) {
      const pipes = sol.split('|').slice(1);
      pipes.forEach(p => {
        cmds.add(p.trim().split(/\s+/)[0]);
      });
    }
  });
});

console.log("All commands in Bandit solutions:", Array.from(cmds));
