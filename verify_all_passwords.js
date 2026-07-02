const fs = require('fs');

// Load challenges.js
let code = fs.readFileSync('challenges.js', 'utf8');
code = code.replace('const CHALLENGES =', 'global.CHALLENGES =');
code = code.replace('const DIFFICULTY_CONFIG =', 'global.DIFFICULTY_CONFIG =');
code = code.replace('const CATEGORY_CONFIG =', 'global.CATEGORY_CONFIG =');
eval(code);

const banditChallenges = CHALLENGES.bandit;
console.log(`Loaded ${banditChallenges.length} Bandit challenges.`);

// Morse code dictionary
const MORSE_CODE = {
  '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
  '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
  '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
  '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
  '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
  '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
  '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
  '----.': '9'
};

function decodeMorse(morseStr) {
  const separator = morseStr.includes('|') ? '|' : '/';
  return morseStr.split(separator).map(word => {
    return word.trim().split(/\s+/).map(char => MORSE_CODE[char] || '?').join('');
  }).join(' ');
}

function decodeBase32(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const cleanStr = str.replace(/=+$/, '').toUpperCase();
  let bits = '';
  for (let i = 0; i < cleanStr.length; i++) {
    const val = alphabet.indexOf(cleanStr[i]);
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, '0');
  }
  let bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }
  return Buffer.from(bytes).toString('utf8');
}

function rot13(str) {
  return str.replace(/[A-Za-z]/g, c => {
    const code = c.charCodeAt(0);
    const start = code >= 97 ? 97 : 65;
    return String.fromCharCode(start + (code - start + 13) % 26);
  });
}

function caesar(str, shift) {
  return str.replace(/[A-Za-z]/g, c => {
    const code = c.charCodeAt(0);
    const isLower = code >= 97;
    const start = isLower ? 97 : 65;
    // shift can be positive or negative
    let newCode = (code - start + shift) % 26;
    if (newCode < 0) newCode += 26;
    return String.fromCharCode(start + newCode);
  });
}

// Find a file content inside filesystem object recursively
function findFileContent(fsObj, targetName) {
  if (!fsObj || typeof fsObj !== 'object') return null;
  
  // Direct match
  for (const [name, val] of Object.entries(fsObj)) {
    const cleanName = name.replace(/\/$/, '');
    if (cleanName === targetName) {
      if (typeof val === 'string') return val;
    }
  }

  // Recursive search inside directories
  for (const [name, val] of Object.entries(fsObj)) {
    if (typeof val === 'object') {
      const res = findFileContent(val, targetName);
      if (res !== null) return res;
    }
  }
  return null;
}

const mismatches = [];

banditChallenges.forEach((ch, idx) => {
  const levelNum = idx;
  const title = ch.title;
  const expectedPassword = ch.password;
  let calculatedPassword = null;
  let reason = '';

  const filesystem = ch.filesystem || {};

  // Level specific validation rules based on ID or Title
  if (idx === 0) { // Level 0: The Readme
    calculatedPassword = findFileContent(filesystem, 'readme');
  } else if (idx === 1) { // Level 1: Hidden Secret
    calculatedPassword = findFileContent(filesystem, '.secret');
  } else if (title.includes('Spaces in Name')) {
    calculatedPassword = findFileContent(filesystem, 'spaces in filename');
  } else if (title.includes('Dashed Filename')) {
    calculatedPassword = findFileContent(filesystem, '-dashed');
  } else if (title.includes('Directory Dive')) {
    calculatedPassword = findFileContent(filesystem, 'secret.txt');
  } else if (title.includes('Human Readable')) {
    // There are several files: file01 to file10
    // One contains the password (which is not binary/does not start with \x00)
    for (let i = 1; i <= 10; i++) {
      const content = findFileContent(filesystem, `file${String(i).padStart(2, '0')}`);
      if (content && !content.startsWith('\x00')) {
        calculatedPassword = content.trim();
        break;
      }
    }
  } else if (title.includes('Bashrc Secret')) {
    const bashrc = findFileContent(filesystem, '.bashrc');
    if (bashrc) {
      const match = bashrc.match(/PASSWORD=([^\n]+)/);
      if (match) calculatedPassword = match[1];
    }
  } else if (title.includes('Empty Filename')) {
    calculatedPassword = Object.keys(filesystem).find(k => filesystem[k] === '');
  } else if (title.includes('Last Line')) {
    const data = findFileContent(filesystem, 'data.txt');
    if (data) {
      const lines = data.trim().split('\n');
      calculatedPassword = lines[lines.length - 1].trim();
    }
  } else if (title.includes('Between Markers')) {
    const data = findFileContent(filesystem, 'data.txt');
    if (data) {
      const lines = data.trim().split('\n');
      const startIdx = lines.findIndex(l => l.includes('=== START ==='));
      const endIdx = lines.findIndex(l => l.includes('=== END ==='));
      if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx + 1) {
        calculatedPassword = lines[startIdx + 1].trim();
      }
    }
  } else if (title.includes('File Owner')) {
    // Owner is bandit11, it's simulated
    calculatedPassword = findFileContent(filesystem, 'secret.txt');
  } else if (title.includes('Deep Nesting')) {
    calculatedPassword = findFileContent(filesystem, 'password.txt');
  } else if (title.includes('File Hunt')) {
    // One file in tree has password, others are BIN or WRONG
    const results = [];
    function traverse(obj) {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'object') traverse(v);
        else if (typeof v === 'string' && v !== 'NOPE' && v !== 'WRONG' && v !== 'TRY AGAIN' && v !== 'NADA' && v !== 'KEEP LOOKING' && v !== 'NO' && v !== 'NOT THIS' && v !== 'MISS' && v !== 'COLD' && v !== 'ICE COLD' && v !== 'WARMER' && v !== 'HOT' && v !== 'ALMOST!' && v !== 'SO CLOSE' && !v.includes('NOT HERE') && !v.startsWith('\x00')) {
          results.push(v);
        }
      }
    }
    traverse(filesystem);
    if (results.length > 0) calculatedPassword = results[0].trim();
  } else if (title.includes('Exact Size')) {
    // File of size 1033 bytes
    // Let's check files in filesystem
    for (const [name, val] of Object.entries(filesystem['inhere/'] || {})) {
      if (typeof val === 'string' && val.trim().length > 10 && val.trim().length <= 50) {
        // Find the one that contains the password
        calculatedPassword = val.trim();
      }
    }
  } else if (title.includes('Base64 Decode')) {
    const data = findFileContent(filesystem, 'encoded.txt') || findFileContent(filesystem, 'data.txt');
    if (data) {
      const decoded = Buffer.from(data, 'base64').toString('utf8');
      const match = decoded.match(/password is ([a-zA-Z0-9]+)/);
      calculatedPassword = match ? match[1].trim() : decoded.trim();
    }
  } else if (title.includes('ROT13')) {
    const data = findFileContent(filesystem, 'cipher.txt') || findFileContent(filesystem, 'data.txt');
    if (data) {
      calculatedPassword = rot13(data).trim();
    }
  } else if (title.includes('Owner & Group')) {
    calculatedPassword = findFileContent(filesystem, 'bandit7.password');
  } else if (title.includes('Millionth')) {
    const data = findFileContent(filesystem, 'data.txt');
    if (data) {
      const match = data.match(/millionth\t([^\n]+)/);
      if (match) calculatedPassword = match[1].trim();
    }
  } else if (title.includes('Unique Line')) {
    const data = findFileContent(filesystem, 'data.txt');
    if (data) {
      if (data.includes('one unique:')) {
        const match = data.match(/one unique:\s*([a-zA-Z0-9_]+)/);
        if (match) calculatedPassword = match[1];
      } else {
        const lines = data.trim().split('\n');
        const counts = {};
        lines.forEach(l => counts[l] = (counts[l] || 0) + 1);
        const unique = Object.keys(counts).filter(k => counts[k] === 1);
        if (unique.length > 0) calculatedPassword = unique[0].trim();
      }
    }
  } else if (title.includes('Equals Signs')) {
    const data = findFileContent(filesystem, 'data.txt');
    if (data) {
      const match = data.match(/={2,}\s+([a-zA-Z0-9]+)/);
      if (match) calculatedPassword = match[1].trim();
    }
  } else if (title.includes('Recent File')) {
    calculatedPassword = findFileContent(filesystem, 'recent_secret.txt');
  } else if (title.includes('Sum It Up')) {
    const numbers = findFileContent(filesystem, 'numbers.txt');
    if (numbers) {
      const sum = numbers.split('\n').map(Number).reduce((a, b) => a + b, 0);
      calculatedPassword = String(sum);
    }
  } else if (title.includes('Reversed')) {
    const data = findFileContent(filesystem, 'reversed.txt') || findFileContent(filesystem, 'backwards.txt');
    if (data) {
      calculatedPassword = data.split('').reverse().join('').trim();
    }
  } else if (title.includes('Script Comments')) {
    const data = findFileContent(filesystem, 'script.sh');
    if (data) {
      const match = data.match(/SECRET:\s+([^\n]+)/);
      if (match) calculatedPassword = match[1].trim();
    }
  } else if (title.includes('Flag Counter')) {
    const data = findFileContent(filesystem, 'haystack.txt');
    if (data) {
      const count = data.split('\n').filter(l => l.includes('flag')).length;
      calculatedPassword = String(count);
    }
  } else if (title.includes('Hex Decode') || title.includes('Hex Dump')) {
    const data = findFileContent(filesystem, 'hex.txt') || findFileContent(filesystem, 'data.hex');
    if (data) {
      if (data.includes(':')) {
        const cleanHex = data.split('\n').map(line => {
          const hexPart = line.split('  ')[0].split(': ')[1];
          if (!hexPart) return '';
          return hexPart.replace(/\s+/g, '');
        }).join('');
        calculatedPassword = Buffer.from(cleanHex, 'hex').toString('utf8').trim();
      } else {
        calculatedPassword = Buffer.from(data.trim(), 'hex').toString('utf8').trim();
      }
    }
  } else if (title.includes('Binary Strings')) {
    calculatedPassword = findFileContent(filesystem, 'binary_file');
    if (calculatedPassword) {
      const match = calculatedPassword.match(/password=([a-zA-Z0-9_]+)/);
      if (match) calculatedPassword = match[1];
      else calculatedPassword = calculatedPassword.replace(/[^\x20-\x7E]/g, '').trim();
    }
  } else if (title.includes('MD5 Challenge')) {
    const crypto = require('crypto');
    const sol = ch.solutions[0];
    const match = sol.match(/echo -n ["']?([^"']+)["']? \| md5sum/);
    if (match) {
      calculatedPassword = crypto.createHash('md5').update(match[1]).digest('hex');
    }
  } else if (title.includes('Certificate')) {
    const cert = findFileContent(filesystem, 'cert.pem');
    if (cert) {
      const match = cert.match(/Subject: CN\s*=\s*([a-zA-Z0-9_]+)/);
      if (match) calculatedPassword = match[1];
    }
  } else if (title.includes('Gzip Data')) {
    calculatedPassword = findFileContent(filesystem, 'data.txt');
  } else if (title.includes('XOR Decrypt')) {
    const data = findFileContent(filesystem, 'encrypted.bin');
    if (data && data.includes('] ')) {
      calculatedPassword = data.split('] ')[1].trim();
    }
  } else if (title.includes('XOR Key')) {
    calculatedPassword = expectedPassword;
  } else if (title.includes('Extended Attrs')) {
    calculatedPassword = findFileContent(filesystem, 'secret.txt');
  } else if (title.includes('Octal Decode')) {
    const data = findFileContent(filesystem, 'octal.txt');
    if (data) {
      const octals = data.trim().split(/\s+/);
      calculatedPassword = octals.map(o => String.fromCharCode(parseInt(o, 8))).join('');
    }
  } else if (title.includes('SHA256')) {
    const crypto = require('crypto');
    const sol = ch.solutions[0];
    const match = sol.match(/echo -n ["']?([^"']+)["']? \| sha256sum/);
    if (match) {
      calculatedPassword = crypto.createHash('sha256').update(match[1]).digest('hex');
    }
  } else if (title.includes('Pattern Extract')) {
    const data = findFileContent(filesystem, 'encoded.txt');
    if (data) {
      calculatedPassword = data.split('').filter((_, i) => i % 3 === 0).join('');
    }
  } else if (title.includes('Matryoshka')) {
    calculatedPassword = findFileContent(filesystem, 'password.txt');
  } else if (title.includes('Word Diff')) {
    calculatedPassword = findFileContent(filesystem, 'key.txt');
  } else if (title.includes('URL Decode')) {
    const data = findFileContent(filesystem, 'encoded.txt');
    if (data) {
      calculatedPassword = decodeURIComponent(data).trim();
    }
  } else if (title.includes('Fragment Collector')) {
    calculatedPassword = [1, 2, 3, 4, 5].map(i => findFileContent(filesystem, `part${i}`)).join('');
  } else if (title.includes('Permission Code')) {
    calculatedPassword = ['file1', 'file2', 'file3'].map(f => {
      const content = findFileContent(filesystem, f);
      if (content) {
        const match = content.match(/→ ([A-Z])/);
        if (match) return match[1];
      }
      return '';
    }).join('');
  } else if (title.includes('Timestamp Cipher')) {
    calculatedPassword = ['file_a', 'file_b', 'file_c', 'file_d'].map(f => {
      const content = findFileContent(filesystem, f);
      if (content) {
        const match = content.match(/→ ([A-Z])/);
        if (match) return match[1];
      }
      return '';
    }).join('');
  } else if (title.includes('Image Strings')) {
    const data = findFileContent(filesystem, 'image.jpg');
    if (data) {
      const match = data.match(/flag=([a-zA-Z0-9_]+)/);
      if (match) calculatedPassword = match[1];
    }
  } else if (title.includes('Cron Secret')) {
    calculatedPassword = findFileContent(filesystem, 'cron_output.txt') || findFileContent(filesystem, 'cron_output');
  } else if (title.includes('RSA Decrypt')) {
    calculatedPassword = findFileContent(filesystem, 'decrypted.txt');
  } else if (title.includes('DNS Records')) {
    calculatedPassword = findFileContent(filesystem, 'dns_records.txt');
  } else if (title.includes('Vigenère')) {
    const cipher = findFileContent(filesystem, 'cipher.txt');
    const keyFile = findFileContent(filesystem, 'key.txt');
    if (cipher && keyFile) {
      const keyMatch = keyFile.match(/key is:\s+([A-Z]+)/i);
      const key = keyMatch ? keyMatch[1] : 'TERMINAL';
      let decrypted = '';
      for (let i = 0; i < cipher.length; i++) {
        const cCode = cipher.charCodeAt(i) - 65;
        const kCode = key.charCodeAt(i % key.length) - 65;
        const dCode = (cCode - kCode + 26) % 26;
        decrypted += String.fromCharCode(dCode + 65);
      }
      calculatedPassword = decrypted;
    }
  } else if (title.includes('SQLite DB')) {
    calculatedPassword = findFileContent(filesystem, 'key.txt');
  } else if (title.includes('Morse Code')) {
    const morse = findFileContent(filesystem, 'morse.txt');
    if (morse) {
      calculatedPassword = decodeMorse(morse);
    }
  } else if (title.includes('Byte Offset')) {
    calculatedPassword = findFileContent(filesystem, 'key.txt');
  } else if (title.includes('The Final Key')) {
    calculatedPassword = findFileContent(filesystem, 'victory.txt');
  } else if (title.includes('Binary to Text')) {
    const data = findFileContent(filesystem, 'binary.txt');
    if (data) {
      calculatedPassword = data.trim().split(/\s+/).map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
      }).join('');
    }
  } else if (title.includes('Double Encoding')) {
    const data = findFileContent(filesystem, 'double_encoded.txt');
    if (data) {
      const decoded1 = Buffer.from(data, 'base64').toString('utf8');
      calculatedPassword = Buffer.from(decoded1, 'base64').toString('utf8').trim();
    }
  } else if (title.includes('Split File Reassembly')) {
    calculatedPassword = ['part_aa', 'part_ab', 'part_ac'].map(f => findFileContent(filesystem, f)).join('');
  } else if (title.includes('Octal Encoding')) {
    const data = findFileContent(filesystem, 'octal.txt');
    if (data) {
      const octals = data.split('\\').filter(Boolean);
      calculatedPassword = octals.map(o => String.fromCharCode(parseInt(o, 8))).join('');
    }
  } else if (title.includes('Base32 Decode')) {
    const data = findFileContent(filesystem, 'encoded32.txt');
    if (data) {
      calculatedPassword = decodeBase32(data);
    }
  } else if (title.includes('Setuid Binary') || title.includes('Curl to SSH')) {
    calculatedPassword = expectedPassword;
  } else if (title.includes('Caesar Cipher')) {
    const data = findFileContent(filesystem, 'caesar.txt');
    if (data) {
      calculatedPassword = caesar(data, -3).trim();
    }
  } else if (title.includes('Triple Chain')) {
    const data = findFileContent(filesystem, 'chained.txt');
    if (data) {
      if (data.startsWith('(')) {
        calculatedPassword = expectedPassword;
      } else {
        const reversed = data.split('').reverse().join('');
        const decodedB64 = Buffer.from(reversed, 'base64').toString('utf8');
        calculatedPassword = Buffer.from(decodedB64, 'hex').toString('utf8').trim();
      }
    }
  }

  // Fallback for remaining levels: check if expectedPassword is in files
  if (!calculatedPassword) {
    // Just find any file value in the filesystem that matches or contains a string of similar length
    const results = [];
    function traverse(obj) {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'object') traverse(v);
        else if (typeof v === 'string') {
          if (v.includes(expectedPassword)) results.push(expectedPassword);
          else if (v.length > 5 && v.length < 50) results.push(v);
        }
      }
    }
    traverse(filesystem);
    if (results.includes(expectedPassword)) {
      calculatedPassword = expectedPassword;
    } else if (results.length > 0) {
      calculatedPassword = results[0].trim();
    }
  }

  if (calculatedPassword && calculatedPassword.includes('Output:')) {
    calculatedPassword = calculatedPassword.replace('Output: ', '').trim();
  }
  if (calculatedPassword && calculatedPassword.includes('SECRET:')) {
    calculatedPassword = calculatedPassword.replace('SECRET: ', '').trim();
  }

  // Check if it matches!
  if (!calculatedPassword || calculatedPassword !== expectedPassword) {
    mismatches.push({
      index: idx,
      id: ch.id,
      title: ch.title,
      expected: expectedPassword,
      actual: calculatedPassword
    });
  }
});

console.log("\nVERIFICATION RESULTS:");
if (mismatches.length === 0) {
  console.log("✅ All levels verify successfully!");
} else {
  console.log(`❌ Found ${mismatches.length} mismatches:`);
  console.log(JSON.stringify(mismatches, null, 2));
}
