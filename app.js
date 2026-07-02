// ============================================================================
// TERMINAL CHALLENGE — Application Logic
// ============================================================================

// ---- Virtual Network Configuration ----
const VIRTUAL_NETWORK = {
  'http://example.com/file.txt': 'This is a sample text file downloaded from example.com.',
  'http://target.local': '<html><body><h1>Welcome to Target Local Intranet</h1><p>Public files are listed in <a href="/robots.txt">robots.txt</a></p></body></html>',
  'http://target.local/robots.txt': 'User-agent: *\nDisallow: /secret_key.pem\nDisallow: /api/flag',
  'http://target.local/secret_key.pem': `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA0YxpP59aVz5a2g2...
[PRIVATE SSH KEY FOR bandit14]
-----END RSA PRIVATE KEY-----`,
  'http://target.local/api/flag': 'CTF{cUrl_h34d3r_s3cr3t}',
  'http://localhost:8080': 'Welcome to internal dashboard!',
  'http://localhost:8080/admin': 'Welcome to Admin console! Flag: CTF{ssrf_1nt3rn4l}',
  'http://127.0.0.1:8080': 'Welcome to internal dashboard!',
  'http://localhost:8080/internal': '{\n  "service": "Internal Dashboard",\n  "flag": "CTF{ssh_tunn3l}",\n  "status": "restricted"\n}',
  'http://localhost:8080/internal/flag': 'Flag: CTF{ssrf_1nt3rn4l}',
  'https://ctf-challenge-bucket.s3.amazonaws.com/': '<?xml version="1.0" encoding="UTF-8"?><ListBucketResult><Contents><Key>flag.txt</Key><Size>24</Size></Contents></ListBucketResult>',
  'http://target.local/search': 'Reflected in page: search results... session=admin; flag=CTF{xss_4tt4ck}',
  'http://target.local/profile': 'Hello! Flag: CTF{sst1_t3mpl4t3}',
  'http://target.local/page.php': 'root:x:0:0:root:/root:/bin/bash\nctf_flag:x:1337:1337:CTF{lf1_4tt4ck}:/dev/null:/bin/false',
  'http://target.local/ping': 'PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.\nCTF{cmd_1nj3ct10n}'
};

// ---- State ----
const state = {
  currentCategory: 'command',
  currentChallengeIndex: -1,
  lastCompletedIndex: -1,
  completedChallenges: new Set(),
  totalXP: 0,
  streak: 0,
  commandHistory: [],
  historyIndex: -1,
  hintIndex: 0,
  currentChallenge: null,
  activeFilesystem: null,
  currentDir: '', // path relative to home directory (~/)
  sshTunnelActive: false,
  currentUser: null, // null means Guest
  currentAuthTab: 'signin',
  avatar: '👤',
};

// ---- DOM References ----
const DOM = {
  challengeList: document.getElementById('challenge-list'),
  challengePanel: document.getElementById('challenge-panel'),
  welcomeScreen: document.getElementById('welcome-screen'),
  challengeInfo: document.getElementById('challenge-info'),
  challengeActions: document.getElementById('challenge-actions'),
  challengeDesc: document.getElementById('challenge-desc'),
  challengeObj: document.getElementById('challenge-obj'),
  hintArea: document.getElementById('hint-area'),
  solutionArea: document.getElementById('solution-area'),
  terminalBody: document.getElementById('terminal-body'),
  terminalInput: document.getElementById('terminal-input'),
  terminalPrompt: document.getElementById('terminal-prompt'),
  terminalTitle: document.getElementById('terminal-title'),
  headerCategory: document.getElementById('header-category'),
  headerTitle: document.getElementById('header-title'),
  headerDifficulty: document.getElementById('header-difficulty'),
  headerXP: document.getElementById('header-xp'),
  statXP: document.getElementById('stat-xp'),
  statSolved: document.getElementById('stat-solved'),
  statStreak: document.getElementById('stat-streak'),
  progressText: document.getElementById('progress-text'),
  progressFill: document.getElementById('progress-fill'),
  successOverlay: document.getElementById('success-overlay'),
  successIcon: document.getElementById('success-icon'),
  successTitle: document.getElementById('success-title'),
  successMessage: document.getElementById('success-message'),
  successXP: document.getElementById('success-xp'),
  btnNext: document.getElementById('btn-next'),
  btnHint: document.getElementById('btn-hint'),
  sidebar: document.getElementById('sidebar'),
  banditUnlockPanel: document.getElementById('bandit-unlock-panel'),
  unlockPasswordInput: document.getElementById('unlock-password-input'),
  unlockFeedback: document.getElementById('unlock-feedback'),
  ctfFlagPanel: document.getElementById('ctf-flag-panel'),
  ctfFlagInput: document.getElementById('ctf-flag-input'),
  ctfFlagFeedback: document.getElementById('ctf-flag-feedback'),
  profileWidget: document.getElementById('profile-widget'),
  profileName: document.getElementById('profile-name'),
  profileRank: document.getElementById('profile-rank'),
  profileBtn: document.getElementById('profile-btn'),
  profileAvatar: document.getElementById('profile-avatar'),
  authOverlay: document.getElementById('auth-overlay'),
  authTabSignin: document.getElementById('auth-tab-signin'),
  authTabRegister: document.getElementById('auth-tab-register'),
  authForm: document.getElementById('auth-form'),
  authUsername: document.getElementById('auth-username'),
  authPassword: document.getElementById('auth-password'),
  authError: document.getElementById('auth-error'),
  authSubmitBtn: document.getElementById('auth-submit-btn'),
  avatarOverlay: document.getElementById('avatar-overlay'),
};

// Sorts command and ctf challenge lists by difficulty on startup so that their
// indices match display order and numbering remains sequential.
function sortChallengesByDifficulty() {
  const diffOrder = { easy: 0, medium: 1, hard: 2, expert: 3 };
  const categoriesToSort = ['command', 'ctf'];
  
  categoriesToSort.forEach(cat => {
    CHALLENGES[cat].sort((a, b) => {
      return diffOrder[a.difficulty] - diffOrder[b.difficulty];
    });
  });
}

// ---- Initialize ----
function init() {
  sortChallengesByDifficulty();
  loadProgress();
  renderChallengeList();
  updateStats();
  setupTerminal();
  setupUnlockPasswordInput();
  renderLeaderboard();
  initCrtMode();
}

// ---- Category Switching ----
function switchCategory(category) {
  state.currentCategory = category;
  state.currentChallengeIndex = -1;
  state.currentChallenge = null;
  state.currentDir = '';
  state.sshTunnelActive = false;

  // Update tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === category);
  });

  // Update header
  DOM.headerCategory.textContent = CATEGORY_CONFIG[category].label;
  DOM.headerCategory.style.color = CATEGORY_CONFIG[category].color;
  DOM.headerTitle.textContent = 'Select a challenge';
  DOM.headerDifficulty.style.display = 'none';
  DOM.headerXP.style.display = 'none';

  // Show welcome, hide challenge
  DOM.welcomeScreen.style.display = 'flex';
  DOM.challengeInfo.style.display = 'none';
  DOM.challengeActions.style.display = 'none';
  DOM.banditUnlockPanel.style.display = 'none';

  // Update terminal prompt
  updatePrompt(category);

  // Render list
  renderChallengeList();

  // Update leaderboard to match category
  switchLeaderboardTab(category);

  // Clear terminal
  clearTerminal();
  addTerminalLine(`Switched to ${CATEGORY_CONFIG[category].label}`, 'system-line');
  addTerminalLine(CATEGORY_CONFIG[category].description, 'info-line');
  addTerminalLine("Select a challenge from the sidebar to begin.", '');
}

// ---- Render Challenge List ----
function renderChallengeList() {
  const challenges = CHALLENGES[state.currentCategory];
  let html = '';

  if (state.currentCategory === 'bandit') {
    // Render Bandit as a single sequential flat list (1 to 100)
    html += `<div class="difficulty-group">`;
    html += `<div class="difficulty-label bandit-label">🔓 Bandit Levels (100)</div>`;
    challenges.forEach((ch, index) => {
      const isCompleted = state.completedChallenges.has(ch.id);
      const isActive = index === state.currentChallengeIndex;
      const isLocked = isChallengeLocked(index);
      let cls = 'challenge-item';
      if (isActive) cls += ' active';
      if (isCompleted) cls += ' completed';
      if (isLocked) cls += ' locked';

      const diffConfig = DIFFICULTY_CONFIG[ch.difficulty];
      html += `<div class="${cls}" onclick="selectChallenge(${index})" title="${ch.title}">
        <span class="challenge-num">${String(index + 1).padStart(2, '0')}</span>
        <span class="challenge-title">${ch.title}</span>
        <span class="challenge-diff-dot" style="color: ${diffConfig.color}; margin-left: auto; font-size: 0.6rem;" title="${diffConfig.label}">${diffConfig.icon}</span>
      </div>`;
    });
    html += `</div>`;
  } else {
    // Grouped by difficulty for command and ctf
    const groups = { easy: [], medium: [], hard: [], expert: [] };
    challenges.forEach((ch, index) => {
      groups[ch.difficulty].push({ ...ch, index });
    });

    for (const [diff, items] of Object.entries(groups)) {
      if (items.length === 0) continue;
      const config = DIFFICULTY_CONFIG[diff];
      html += `<div class="difficulty-group">`;
      html += `<div class="difficulty-label ${diff}">${config.icon} ${config.label} (${items.length})</div>`;
      items.forEach(ch => {
        const isCompleted = state.completedChallenges.has(ch.id);
        const isActive = ch.index === state.currentChallengeIndex;
        const isLocked = isChallengeLocked(ch.index);
        let cls = 'challenge-item';
        if (isActive) cls += ' active';
        if (isCompleted) cls += ' completed';
        if (isLocked) cls += ' locked';
        html += `<div class="${cls}" onclick="selectChallenge(${ch.index})" title="${ch.title}">
          <span class="challenge-num">${String(ch.index + 1).padStart(2, '0')}</span>
          <span class="challenge-title">${ch.title}</span>
        </div>`;
      });
      html += `</div>`;
    }
  }

  DOM.challengeList.innerHTML = html;
}

// ---- Challenge Locking ----
function isChallengeLocked(index) {
  if (index === 0) return false;
  const challenges = CHALLENGES[state.currentCategory];

  if (state.currentCategory === 'bandit') {
    const prevChallenge = challenges[index - 1];
    return !state.completedChallenges.has(prevChallenge.id);
  }

  // First challenge of each difficulty group is unlocked
  const currentDiff = challenges[index].difficulty;
  const firstOfDiff = challenges.findIndex(c => c.difficulty === currentDiff);
  if (index === firstOfDiff) return false;
  
  // Otherwise, previous in same difficulty must be completed
  const prevChallenge = challenges[index - 1];
  if (prevChallenge && prevChallenge.difficulty === currentDiff) {
    return !state.completedChallenges.has(prevChallenge.id);
  }
  return false;
}

// ---- Select Challenge ----
function selectChallenge(index) {
  const challenges = CHALLENGES[state.currentCategory];
  if (index < 0 || index >= challenges.length) return;

  const isBandit = state.currentCategory === 'bandit';
  const isLocked = isChallengeLocked(index);

  if (isLocked && !isBandit) {
    // For command and ctf, show a message or do nothing
    alert("Please complete the previous challenges first to unlock this level!");
    return;
  }

  state.currentChallengeIndex = index;
  state.currentChallenge = challenges[index];
  state.hintIndex = 0;
  state.currentDir = '';
  state.sshTunnelActive = false;

  if (state.currentChallenge.filesystem) {
    state.activeFilesystem = JSON.parse(JSON.stringify(state.currentChallenge.filesystem));
  } else {
    state.activeFilesystem = null;
  }

  const ch = state.currentChallenge;
  const isCompleted = state.completedChallenges.has(ch.id);

  // Update header
  DOM.headerTitle.textContent = ch.title;
  DOM.headerDifficulty.textContent = DIFFICULTY_CONFIG[ch.difficulty].label;
  DOM.headerDifficulty.className = `difficulty-badge ${ch.difficulty}`;
  DOM.headerDifficulty.style.display = '';
  DOM.headerXP.textContent = `+${ch.xp} XP`;
  DOM.headerXP.style.display = '';

  // Handle Bandit unlock flow vs normal flow
  if (isBandit && isLocked && index > 0) {
    // Show unlock panel, hide main challenge details and terminal
    DOM.welcomeScreen.style.display = 'none';
    DOM.challengeInfo.style.display = 'none';
    DOM.challengeActions.style.display = 'none';
    DOM.banditUnlockPanel.style.display = 'flex';
    document.getElementById('terminal-container').style.display = 'none';

    // Set up unlock panel details
    document.getElementById('unlock-title').textContent = `Level Locked: ${ch.title}`;
    document.getElementById('unlock-subtitle').textContent = `To access this level and show the question, you must enter the password found in Level ${index - 1}.`;
    DOM.unlockPasswordInput.value = '';
    DOM.unlockFeedback.innerHTML = '';
    DOM.unlockFeedback.className = 'unlock-feedback';
    
    // Focus unlock password input
    setTimeout(() => DOM.unlockPasswordInput.focus(), 50);
  } else {
    // Show challenge info & terminal
    DOM.welcomeScreen.style.display = 'none';
    DOM.challengeInfo.style.display = '';
    DOM.challengeInfo.className = 'challenge-info animate-fade-in';
    DOM.challengeActions.style.display = 'flex';
    DOM.banditUnlockPanel.style.display = 'none';
    document.getElementById('terminal-container').style.display = '';

    DOM.challengeDesc.textContent = ch.description;
    DOM.challengeObj.textContent = ch.objective;
    DOM.hintArea.innerHTML = '';
    DOM.solutionArea.innerHTML = '';

    // Toggle next button
    // Always show next button in Bandit to allow proceeding to enter password
    DOM.btnNext.style.display = (isCompleted || isBandit) ? '' : 'none';
    DOM.btnHint.style.display = isCompleted ? 'none' : '';

    // Show CTF flag panel if ctf and not completed
    if (state.currentCategory === 'ctf') {
      DOM.ctfFlagPanel.style.display = isCompleted ? 'none' : 'block';
      DOM.ctfFlagInput.value = '';
      DOM.ctfFlagFeedback.textContent = '';
      DOM.ctfFlagFeedback.className = 'ctf-flag-feedback';
    } else {
      DOM.ctfFlagPanel.style.display = 'none';
    }

    // Clear terminal & show challenge intro
    clearTerminal();
    addTerminalLine(`── Challenge ${index + 1}: ${ch.title} ──`, 'info-line');
    addTerminalLine(ch.description, '');
    addTerminalLine('', '');

    // For bandit challenges, show available files
    if (isBandit && state.activeFilesystem) {
      addTerminalLine('📁 Files in current directory:', 'system-line');
      displayFilesystem(state.activeFilesystem, '');
      addTerminalLine('', '');
      addTerminalLine('🔐 Explore using commands below, find the password, then click "Next" or select the next level to submit it.', 'warning-line');
    }

    // For CTF challenges, show instructions
    if (state.currentCategory === 'ctf') {
      addTerminalLine('🚩 Use ping and network commands to solve this challenge.', 'system-line');
      addTerminalLine('', '');
    }

    if (!isBandit) {
      addTerminalLine("Type your command below. Use 'hint' for help.", 'warning-line');
    }

    // Focus terminal
    DOM.terminalInput.focus();
    updatePrompt();
  }

  // Update list
  renderChallengeList();

  // Close sidebar on mobile/tablet after selecting a challenge
  if (DOM.sidebar && DOM.sidebar.classList.contains('open')) {
    toggleSidebar();
  }
}

// ---- Display Virtual Filesystem ----
function displayFilesystem(fs, prefix) {
  for (const [name, value] of Object.entries(fs)) {
    if (name.endsWith('/')) {
      addTerminalLine(`${prefix}  📁 ${name}`, 'fs-output');
      if (typeof value === 'object') {
        displayFilesystem(value, prefix + '    ');
      }
    } else {
      const icon = name.startsWith('.') ? '👁️' : '📄';
      const cls = name.startsWith('.') ? 'fs-hidden' : 'fs-file';
      addTerminalLine(`${prefix}  ${icon} <span class="${cls}">${name}</span>`, 'fs-output');
    }
  }
}

// ---- Terminal Setup ----
function setupTerminal() {
  DOM.terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = DOM.terminalInput.value.trim();
      if (cmd) {
        processCommand(cmd);
        state.commandHistory.push(cmd);
        state.historyIndex = state.commandHistory.length;
      }
      DOM.terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.historyIndex > 0) {
        state.historyIndex--;
        DOM.terminalInput.value = state.commandHistory[state.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.historyIndex < state.commandHistory.length - 1) {
        state.historyIndex++;
        DOM.terminalInput.value = state.commandHistory[state.historyIndex];
      } else {
        state.historyIndex = state.commandHistory.length;
        DOM.terminalInput.value = '';
      }
    }
  });
}

// ---- Process Command ----
function processCommand(cmd) {
  const promptLabel = getPromptText();
  addTerminalLine(`<span class="terminal-prompt">${promptLabel}</span> ${escapeHtml(cmd)}`, 'input-line');

  // Built-in commands
  const lowerCmd = cmd.toLowerCase().trim();
  if (lowerCmd === 'help') {
    showHelp();
    return;
  }
  if (lowerCmd === 'clear') {
    clearTerminal();
    if (state.currentChallenge && state.currentChallenge.id === 'cmd-15' && !state.completedChallenges.has('cmd-15')) {
      completeChallenge();
    }
    return;
  }
  if (lowerCmd === 'hint') {
    showHint();
    return;
  }
  if (lowerCmd === 'solution') {
    addTerminalLine("⚠️ Solutions are disabled for this session. Use 'hint' if you are stuck!", 'warning-line');
    return;
  }
  if (lowerCmd === 'reset') {
    resetChallenge();
    return;
  }
  if (lowerCmd.startsWith('submit ')) {
    addTerminalLine('⚠️ Please submit the password using the submission panel above the terminal.', 'warning-line');
    return;
  }
  if (lowerCmd === 'next') {
    nextChallenge();
    return;
  }

  // No challenge selected
  if (!state.currentChallenge) {
    addTerminalLine('⚠️ No challenge selected. Pick one from the sidebar.', 'warning-line');
    return;
  }

  // Already completed
  if (state.completedChallenges.has(state.currentChallenge.id)) {
    addTerminalLine('✅ This challenge is already completed! Use "next" to continue.', 'info-line');
    return;
  }

  // Process based on category
  const category = state.currentCategory;
  if (category === 'command') {
    processCommandChallenge(cmd);
  } else if (category === 'bandit') {
    processBanditChallenge(cmd);
  } else if (category === 'ctf') {
    processCTFChallenge(cmd);
  }
  updatePrompt();
}

// ---- Command Challenge Processing ----
function processCommandChallenge(cmd) {
  const ch = state.currentChallenge;
  const normalizedCmd = normalizeCommand(cmd);
  const isCorrect = ch.solutions.some(sol => normalizeCommand(sol) === normalizedCmd);

  if (isCorrect) {
    simulateCommandOutput(cmd);
    completeChallenge();
  } else {
    // Check partial match for helpful feedback
    const firstWord = cmd.split(' ')[0].toLowerCase();
    const solutionFirstWords = ch.solutions.map(s => s.split(' ')[0].toLowerCase());

    if (solutionFirstWords.includes(firstWord)) {
      addTerminalLine(`⚠️ Right command, but check your arguments/flags.`, 'warning-line');
    } else {
      simulateCommandOutput(cmd);
      addTerminalLine(`❌ That's not the expected command. Try again or type 'hint'.`, 'error-line');
    }
  }
}

// ---- Bandit Challenge Processing ----
// In Bandit mode, commands only show output — the user must submit the password to unlock the next level
function processBanditChallenge(cmd) {
  const ch = state.currentChallenge;

  // Simulate filesystem commands (output only, no auto-complete)
  if (ch.filesystem) {
    simulateBanditCommand(cmd, ch);
  } else {
    addTerminalLine('No filesystem available for this challenge.', 'warning-line');
  }

  // If it's the last level, check if they solved it directly
  const challenges = CHALLENGES.bandit;
  const isLastLevel = state.currentChallengeIndex === challenges.length - 1;
  if (isLastLevel) {
    const normalizedCmd = normalizeCommand(cmd);
    const isCorrect = ch.solutions.some(sol => normalizeCommand(sol) === normalizedCmd);
    if (isCorrect || normalizedCmd === ch.password.toLowerCase() || normalizedCmd === `submit ${ch.password.toLowerCase()}`) {
      completeChallenge();
      return;
    }
  }

  // Remind user of next steps
  addTerminalLine('', '');
  if (isLastLevel) {
    addTerminalLine('🏆 This is the final level! Find the final password and run the command to complete the challenge.', 'success-line');
  } else {
    addTerminalLine('🔐 Found the password? Click the "Next" button or select the next level in the sidebar to enter it.', 'system-line');
  }
}

// ---- Submit CTF Flag ----
function submitCtfFlag() {
  const input = DOM.ctfFlagInput.value.trim();
  if (!input) {
    DOM.ctfFlagFeedback.textContent = '⚠️ Please enter a flag.';
    DOM.ctfFlagFeedback.className = 'ctf-flag-feedback incorrect';
    return;
  }
  
  const ch = state.currentChallenge;
  if (!ch) return;
  
  const clean = (str) => str.trim().toLowerCase().replace(/\s+/g, '');
  const expectedFlag = ch.flag || '';
  
  if (clean(input) === clean(expectedFlag)) {
    DOM.ctfFlagFeedback.textContent = '✅ Correct flag! Challenge completed!';
    DOM.ctfFlagFeedback.className = 'ctf-flag-feedback correct';
    
    // Complete the current CTF challenge
    completeChallenge();
  } else {
    DOM.ctfFlagFeedback.textContent = '❌ Incorrect flag. Try again!';
    DOM.ctfFlagFeedback.className = 'ctf-flag-feedback incorrect shake';
    
    setTimeout(() => {
      DOM.ctfFlagFeedback.classList.remove('shake');
    }, 400);
  }
}

// ---- Submit Unlock Password (from the locked view) ----
function submitUnlockPassword() {
  const input = DOM.unlockPasswordInput.value.trim();
  if (!input) {
    DOM.unlockFeedback.innerHTML = '⚠️ Please enter a password.';
    DOM.unlockFeedback.className = 'unlock-feedback incorrect';
    return;
  }
  checkUnlockPassword(input);
}

// ---- Check Unlock Password ----
function checkUnlockPassword(password) {
  const currentIndex = state.currentChallengeIndex;
  if (currentIndex <= 0) return; // Level 0 doesn't need unlock password

  const prevChallenge = CHALLENGES.bandit[currentIndex - 1];
  if (!prevChallenge) return;

  // Exact match check
  let isCorrect = password === prevChallenge.password;

  // Lookalike-tolerant, case-insensitive, whitespace-insensitive fallback check
  if (!isCorrect) {
    const clean = (str) => str.toLowerCase()
      .replace(/\s+/g, '')
      .replace(/l/g, '1')
      .replace(/i/g, '1')
      .replace(/o/g, '0');
    isCorrect = clean(password) === clean(prevChallenge.password);
  }

  if (isCorrect) {
    DOM.unlockFeedback.innerHTML = '✅ Correct password! Unlocking level...';
    DOM.unlockFeedback.className = 'unlock-feedback correct';
    
    // Complete the previous challenge!
    completePreviousChallenge(currentIndex - 1);
  } else {
    DOM.unlockFeedback.innerHTML = '❌ Incorrect password. Try again!';
    DOM.unlockFeedback.className = 'unlock-feedback incorrect shake';
    
    // Shake animation reset
    setTimeout(() => {
      DOM.unlockFeedback.classList.remove('shake');
    }, 400);
  }
}

// ---- Complete Previous Challenge ----
function completePreviousChallenge(prevIndex) {
  const challenges = CHALLENGES[state.currentCategory];
  const ch = challenges[prevIndex];
  if (!ch || state.completedChallenges.has(ch.id)) return;

  state.completedChallenges.add(ch.id);
  state.totalXP += ch.xp;
  state.streak++;
  state.lastCompletedIndex = prevIndex;

  updateStats();
  renderChallengeList();
  saveProgress();
  renderLeaderboard();

  // Show success overlay
  DOM.successIcon.textContent = '🎉';
  DOM.successTitle.textContent = `Level ${prevIndex} Complete!`;
  DOM.successMessage.textContent = ch.successMessage || 'Level unlocked successfully!';
  DOM.successXP.textContent = `+${ch.xp} XP`;
  DOM.successOverlay.classList.add('show');
}

// ---- Setup Unlock Password Input (Enter key) ----
function setupUnlockPasswordInput() {
  DOM.unlockPasswordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitUnlockPassword();
    }
  });
  if (DOM.ctfFlagInput) {
    DOM.ctfFlagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitCtfFlag();
      }
    });
  }
}

// ---- CTF Challenge Processing ----
function processCTFChallenge(cmd) {
  const ch = state.currentChallenge;
  const normalizedCmd = normalizeCommand(cmd);

  // Check if correct
  const isCorrect = ch.solutions.some(sol => {
    const normSol = normalizeCommand(sol);
    return normalizedCmd === normSol || normalizedCmd.startsWith(normSol);
  });

  if (isCorrect) {
    // Show simulated response
    if (ch.simulatedResponse) {
      const lines = ch.simulatedResponse.split('\n');
      lines.forEach(line => {
        if (line.includes('Flag:') || line.includes('CTF{')) {
          addTerminalLine(line, 'success-line');
        } else if (line.includes('✓') || line.includes('ALIVE')) {
          addTerminalLine(line, 'info-line');
        } else if (line.includes('⚠️') || line.includes('ALERT')) {
          addTerminalLine(line, 'warning-line');
        } else if (line.includes('timeout') || line.includes('Unreachable')) {
          addTerminalLine(line, 'error-line');
        } else {
          addTerminalLine(line, 'output-line');
        }
      });
    }
    if (ch.flag) {
      addTerminalLine(`\n🚩 FLAG: ${ch.flag}`, 'success-line');
    }
  } else {
    const lower = cmd.toLowerCase().trim();
    if (lower.startsWith('ping') || lower.startsWith('nmap') || lower.startsWith('traceroute') || lower.startsWith('tracert')) {
      const output = executePipeline(cmd, ch);
      if (output) {
        const lines = output.split('\n');
        lines.forEach(line => {
          if (line.includes('Flag:') || line.includes('CTF{')) {
            addTerminalLine(line, 'success-line');
          } else {
            addTerminalLine(line, 'output-line');
          }
        });
      }
    } else {
      addTerminalLine(`bash: command output simulated`, 'output-line');
    }
    addTerminalLine(`❌ Not quite right. Check the challenge requirements.`, 'error-line');
  }
}

// ---- Simulate Bandit Commands ----
function simulateBanditCommand(cmd, ch) {
  // If the command is or includes one of the official solutions, directly reveal the password!
  const normalizedCmd = cmd.trim().toLowerCase().replace(/\s+/g, ' ');
  const matchedSolution = ch.solutions && ch.solutions.some(sol => {
    const normSol = sol.trim().toLowerCase().replace(/\s+/g, ' ');
    return normalizedCmd === normSol || normalizedCmd.includes(normSol);
  });
  if (matchedSolution) {
    addTerminalLine(ch.password, 'success-line');
    return;
  }

  const output = executePipeline(cmd, ch);
  if (output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes(ch.password)) {
        addTerminalLine(line, 'success-line');
      } else {
        addTerminalLine(line, 'output-line');
      }
    });
  }
}

function executePipeline(cmd, ch) {
  let baseCmd = evaluateSubshells(cmd, ch);

  const redirectRegex = /\s*(>>|>)\s*(\S+)\s*$/;
  const redirectMatch = baseCmd.match(redirectRegex);
  let redirectOp = null;
  let redirectFile = null;
  
  if (redirectMatch) {
    baseCmd = baseCmd.substring(0, redirectMatch.index);
    redirectOp = redirectMatch[1];
    redirectFile = redirectMatch[2].replace(/['"]/g, '');
  }
  
  const segments = splitByPipe(baseCmd);
  let pipedInput = '';
  let commandOutput = '';
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].trim();
    if (!segment) continue;
    
    const parts = parseArguments(segment);
    const command = parts[0].toLowerCase();
    const rawArgs = parts.slice(1);
    const args = expandWildcards(rawArgs);
    
    const runResult = runVirtualCommand(command, args, pipedInput, ch);
    if (runResult.error) {
      addTerminalLine(runResult.error, 'error-line');
      return '';
    }
    pipedInput = runResult.output;
    commandOutput = runResult.output;
  }
  
  if (redirectFile) {
    writeToVirtualFS(redirectFile, commandOutput, redirectOp === '>>');
    return '';
  }
  
  return commandOutput;
}

function runVirtualCommand(command, args, pipedInput, ch) {
  const fs = state.activeFilesystem || {};

  if (command === 'cd') {
    const target = args[0] || '~';
    const resolved = resolvePath(target);
    const item = getFileSystemItem(resolved);
    if (resolved === '' || (item && typeof item === 'object')) {
      state.currentDir = resolved;
      return { output: '', error: null };
    } else {
      return { output: '', error: `cd: ${target}: No such file or directory` };
    }
  }

  if (command === 'pwd') {
    return { output: `/home/user${state.currentDir ? '/' + state.currentDir : ''}`, error: null };
  }
  
  if (command === 'ls') {
    const hasA = args.some(arg => arg.startsWith('-') && arg.includes('a'));
    const hasL = args.some(arg => arg.startsWith('-') && arg.includes('l'));
    const targetPath = args.filter(arg => !arg.startsWith('-'))[0] || '';
    
    const resolved = resolvePath(targetPath);
    const item = getFileSystemItem(resolved);
    
    if (item && typeof item === 'object') {
      let lines = [];
      for (const [name, val] of Object.entries(item)) {
        const isHidden = name.startsWith('.');
        if (isHidden && !hasA) continue;
        
        if (name.endsWith('/')) {
          if (hasL) {
            lines.push(`drwxr-xr-x  2 user user 4096  ${name}`);
          } else {
            lines.push(name);
          }
        } else {
          if (hasL) {
            const size = typeof val === 'string' ? val.length : 0;
            if (typeof val === 'string' && val.startsWith('[FILE]')) {
              lines.push(val.replace('[FILE] ', ''));
            } else {
              lines.push(`-rw-r--r--  1 user user ${size}  ${name}`);
            }
          } else {
            lines.push(name);
          }
        }
      }
      return { output: lines.join('\n'), error: null };
    } else if (item && typeof item === 'string') {
      if (hasL) {
        if (item.startsWith('[FILE]')) {
          return { output: item.replace('[FILE] ', ''), error: null };
        }
        return { output: `-rw-r--r--  1 user user ${item.length}  ${targetPath}`, error: null };
      }
      return { output: targetPath, error: null };
    } else {
      return { output: '', error: `ls: cannot access '${targetPath}': No such file or directory` };
    }
  }

  if (command === 'cat') {
    const targetFiles = args.filter(arg => !arg.startsWith('-'));
    if (targetFiles.length === 0 || targetFiles.includes('-')) {
      return { output: pipedInput, error: null };
    }
    let outputs = [];
    for (const file of targetFiles) {
      const resolved = resolvePath(file);
      const content = getFileSystemItem(resolved);
      if (content !== null && typeof content === 'string') {
        outputs.push(content);
      } else if (content !== null && typeof content === 'object') {
        return { output: '', error: `cat: ${file}: Is a directory` };
      } else {
        return { output: '', error: `cat: ${file}: No such file or directory` };
      }
    }
    return { output: outputs.join('\n'), error: null };
  }

  if (command === 'grep' || command === 'zgrep') {
    const flags = args.filter(arg => arg.startsWith('-'));
    const nonFlags = args.filter(arg => !arg.startsWith('-'));
    const pattern = nonFlags[0] ? nonFlags[0].replace(/['"]/g, '') : '';
    const targetFile = nonFlags[1];
    
    if (!pattern) {
      return { output: '', error: 'grep: pattern expected' };
    }
    
    let content = '';
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      const fileVal = getFileSystemItem(resolved);
      if (fileVal === null) {
        return { output: '', error: `grep: ${targetFile}: No such file or directory` };
      }
      content = typeof fileVal === 'string' ? fileVal : '';
    } else {
      content = pipedInput;
    }
    
    let lines = content.split('\n');
    const isCaseInsensitive = flags.some(f => f.includes('i'));
    const isInverted = flags.some(f => f.includes('v'));
    
    const matched = lines.filter(line => {
      let isMatch = isCaseInsensitive ? line.toLowerCase().includes(pattern.toLowerCase()) : line.includes(pattern);
      return isInverted ? !isMatch : isMatch;
    });
    return { output: matched.join('\n'), error: null };
  }

  if (command === 'wc') {
    const hasL = args.includes('-l');
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    
    if (content === null) {
      return { output: '', error: `wc: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    
    if (hasL) {
      const lineCount = content ? content.split('\n').filter(Boolean).length : 0;
      return { output: String(lineCount), error: null };
    } else {
      const lines = content ? content.split('\n').filter(Boolean).length : 0;
      const words = content ? content.split(/\s+/).filter(Boolean).length : 0;
      const chars = content ? content.length : 0;
      return { output: `${lines} ${words} ${chars}`, error: null };
    }
  }

  if (command === 'rev') {
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `rev: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    const reversed = content.split('\n').map(line => line.split('').reverse().join('')).join('\n');
    return { output: reversed, error: null };
  }

  if (command === 'base64' || command === 'base32') {
    const decode = args.includes('-d') || args.includes('--decode');
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `${command}: ${targetFile}: No such file or directory` };
    }
    content = String(content).trim();
    if (decode) {
      try {
        if (command === 'base64') {
          return { output: atob(content), error: null };
        } else {
          return { output: ch.password || 'Decoded base32 content', error: null };
        }
      } catch (e) {
        return { output: '', error: `${command}: invalid input` };
      }
    } else {
      try {
        if (command === 'base64') {
          return { output: btoa(content), error: null };
        } else {
          return { output: 'b32_encoded_placeholder', error: null };
        }
      } catch (e) {
        return { output: '', error: `${command}: encoding failed` };
      }
    }
  }

  if (command === 'xxd') {
    const revert = args.includes('-r');
    const plain = args.includes('-p');
    const skipArg = args.find(a => a.startsWith('-s'));
    const lenArg = args.find(a => a.startsWith('-l'));
    
    let skip = 0;
    if (skipArg) {
      const skipIndex = args.indexOf(skipArg);
      let val = skipArg.length > 2 ? skipArg.substring(2) : args[skipIndex + 1];
      if (val) {
        skip = val.startsWith('0x') ? parseInt(val, 16) : parseInt(val);
      }
    }
    
    const targetFile = args.filter(arg => !arg.startsWith('-') && arg !== String(skip))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `xxd: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    
    if (revert) {
      if (plain) {
        try {
          const cleanHex = content.replace(/\s+/g, '');
          let decoded = '';
          for (let i = 0; i < cleanHex.length; i += 2) {
            decoded += String.fromCharCode(parseInt(cleanHex.substr(i, 2), 16));
          }
          return { output: decoded, error: null };
        } catch (e) {
          return { output: '', error: 'xxd: revert failed' };
        }
      } else {
        return { output: ch.password || 'Decoded content', error: null };
      }
    } else {
      if (skip > 0) {
        return { output: content.substring(skip), error: null };
      }
      return { output: content, error: null };
    }
  }

  if (command === 'sort') {
    const hasU = args.includes('-u');
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `sort: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    let lines = content.split('\n');
    lines.sort();
    if (hasU) {
      lines = [...new Set(lines)];
    }
    return { output: lines.join('\n'), error: null };
  }

  if (command === 'uniq') {
    const hasU = args.includes('-u');
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `uniq: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    const lines = content.split('\n');
    let filtered = [];
    for (let i = 0; i < lines.length; i++) {
      if (i === 0 || lines[i] !== lines[i - 1]) {
        if (hasU) {
          const repeats = lines.filter(l => l === lines[i]).length;
          if (repeats === 1) {
            filtered.push(lines[i]);
          }
        } else {
          filtered.push(lines[i]);
        }
      }
    }
    return { output: filtered.join('\n'), error: null };
  }

  if (command === 'file') {
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0] || '';
    if (targetFile.endsWith('*')) {
      const dirPath = targetFile.replace('*', '') || '.';
      const resolved = resolvePath(dirPath);
      const dir = getFileSystemItem(resolved);
      if (typeof dir === 'object') {
        let lines = [];
        for (const [name, val] of Object.entries(dir)) {
          if (typeof val === 'string') {
            if (val.startsWith('\x00') || val.startsWith('\x7f') || val.startsWith('\x89') || val.startsWith('\xff') || val.startsWith('\x1f')) {
              lines.push(`${dirPath}/${name}: data`);
            } else {
              lines.push(`${dirPath}/${name}: ASCII text`);
            }
          }
        }
        return { output: lines.join('\n'), error: null };
      }
    }
    const resolved = resolvePath(targetFile);
    const content = getFileSystemItem(resolved);
    if (content !== null && typeof content === 'string') {
      if (content.startsWith('\x00') || content.startsWith('\x7f') || content.startsWith('\x89') || content.startsWith('\xff') || content.startsWith('\x1f')) {
        return { output: `${targetFile}: data`, error: null };
      } else {
        return { output: `${targetFile}: ASCII text`, error: null };
      }
    }
    return { output: '', error: `file: ${targetFile}: No such file or directory` };
  }

  if (command === 'strings') {
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `strings: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    const printable = content.replace(/[^\x20-\x7E\n]/g, '').split('\n').filter(l => l.length > 3);
    return { output: printable.join('\n'), error: null };
  }

  if (command === 'head' || command === 'tail') {
    const numFlag = args.find(arg => arg.startsWith('-n'));
    let num = 10;
    if (numFlag) {
      const index = args.indexOf(numFlag);
      if (index !== -1 && args[index + 1]) {
        num = parseInt(args[index + 1]) || 10;
      }
    } else {
      const numArg = args.find(arg => arg.startsWith('-') && /^\d+$/.test(arg.substring(1)));
      if (numArg) {
        num = parseInt(numArg.substring(1)) || 10;
      }
    }
    
    const targetFile = args.find(arg => !arg.startsWith('-') && arg !== String(num));
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `head/tail: target not found` };
    }
    content = String(content);
    const lines = content.split('\n');
    const selected = command === 'head' ? lines.slice(0, num) : lines.slice(-num);
    return { output: selected.join('\n'), error: null };
  }

  if (command === 'echo' || command === 'printf') {
    let text = args.join(' ').replace(/^["']|["']$/g, '');
    if (command === 'printf') {
      text = text.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }
    return { output: text, error: null };
  }

  if (command === 'stat') {
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    const resolved = resolvePath(targetFile);
    const content = getFileSystemItem(resolved);
    if (content !== null && typeof content === 'string') {
      if (content.includes('[PERMS:') || content.includes('[MTIME:')) {
        return { output: `${targetFile}: ${content}`, error: null };
      }
      return { output: `${targetFile}: regular file, size: ${content.length}`, error: null };
    }
    return { output: '', error: `stat: ${targetFile}: No such file or directory` };
  }

  if (command === 'touch') {
    const targetFile = args[0];
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      writeToVirtualFS(resolved, '', false);
    }
    return { output: '', error: null };
  }

  if (command === 'mkdir') {
    const targetDir = args[0];
    if (targetDir) {
      const resolved = resolvePath(targetDir);
      const cleanPath = resolved.replace(/\/$/, '') + '/';
      writeToVirtualFS(cleanPath, {}, false);
    }
    return { output: '', error: null };
  }

  if (command === 'rm') {
    const targetFile = args.filter(arg => !arg.startsWith('-'))[0];
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      removeFromVirtualFS(resolved);
    }
    return { output: '', error: null };
  }

  if (command === 'chmod') {
    return { output: '', error: null };
  }

  if (command === 'bash' || command === 'sh' || command.startsWith('./')) {
    const scriptFile = command.startsWith('./') ? command : args[0];
    if (!scriptFile) {
      return { output: '', error: 'bash: script expected' };
    }
    const resolved = resolvePath(scriptFile);
    const content = getFileSystemItem(resolved);

    // Support Setuid reader binary simulation
    if (scriptFile.endsWith('reader') && String(content).includes('setuid binary')) {
      const targetFile = args[0];
      if (targetFile === 'protected.txt' || targetFile === './protected.txt') {
        return { output: ch.password, error: null };
      } else {
        return { output: '', error: `./reader: cannot read ${targetFile || ''}: Permission denied` };
      }
    }

    if (content && typeof content === 'string') {
      const scriptLines = content.split('\n');
      let scriptOutput = [];
      for (const line of scriptLines) {
        const cleanLine = line.trim();
        if (!cleanLine || cleanLine.startsWith('#')) continue;
        
        const runResult = executePipeline(cleanLine, ch);
        if (runResult) {
          scriptOutput.push(runResult);
        }
      }
      return { output: scriptOutput.join('\n'), error: null };
    }
    return { output: '', error: `bash: ${scriptFile}: No such file or directory` };
  }

  if (command === 'tr') {
    const set1 = args[0];
    const set2 = args[1];
    if (!set1 || !set2) {
      return { output: pipedInput, error: null };
    }
    const buildSet = (s) => {
      let res = '';
      for (let i = 0; i < s.length; i++) {
        if (s[i] === '-' && i > 0 && i < s.length - 1) {
          const start = s.charCodeAt(i - 1);
          const end = s.charCodeAt(i + 1);
          for (let c = start + 1; c < end; c++) {
            res += String.fromCharCode(c);
          }
        } else {
          res += s[i];
        }
      }
      return res;
    };
    const s1 = buildSet(set1.replace(/['"]/g, ''));
    const s2 = buildSet(set2.replace(/['"]/g, ''));
    const translated = pipedInput.split('').map(c => {
      const idx = s1.indexOf(c);
      return idx !== -1 && s2[idx] ? s2[idx] : c;
    }).join('');
    return { output: translated, error: null };
  }

  if (command === 'cut') {
    const dFlag = args.find(a => a.startsWith('-d'));
    const fFlag = args.find(a => a.startsWith('-f'));
    let delim = '\t';
    if (dFlag) {
      const dIndex = args.indexOf(dFlag);
      if (dFlag.length > 2) {
        delim = dFlag.substring(2).replace(/['"]/g, '');
      } else if (args[dIndex + 1]) {
        delim = args[dIndex + 1].replace(/['"]/g, '');
      }
    }
    let field = 1;
    if (fFlag) {
      const fIndex = args.indexOf(fFlag);
      if (fFlag.length > 2) {
        field = parseInt(fFlag.substring(2)) || 1;
      } else if (args[fIndex + 1]) {
        field = parseInt(args[fIndex + 1]) || 1;
      }
    }
    
    const targetFile = args.find(a => !a.startsWith('-') && a !== delim && a !== String(field));
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `cut: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    
    const lines = content.split('\n').map(line => {
      const parts = line.split(delim);
      return parts[field - 1] || '';
    });
    return { output: lines.join('\n'), error: null };
  }

  if (command === 'awk') {
    const script = args.find(arg => arg.includes('{'));
    if (!script) {
      return { output: pipedInput, error: null };
    }
    
    const targetFile = args.find(a => !a.startsWith('-') && a !== script);
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `awk: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    const lines = content.split('\n');
    
    const printMatch = script.match(/\{print\s+([^}]+)\}/);
    if (printMatch) {
      const fields = printMatch[1].split(/[\s,]+/).filter(Boolean);
      const outputLines = lines.map(line => {
        const parts = line.trim().split(/\s+/);
        return fields.map(f => {
          if (f.startsWith('$')) {
            const idx = parseInt(f.substring(1));
            return parts[idx - 1] || '';
          }
          return f.replace(/['"]/g, '');
        }).join(' ');
      });
      return { output: outputLines.join('\n'), error: null };
    }
    
    const sumMatch = script.match(/\{s\+=\$(\d+)\}\s*END\s*\{\s*print\s+s\s*\}/);
    if (sumMatch) {
      const col = parseInt(sumMatch[1]);
      let total = 0;
      lines.forEach(line => {
        const parts = line.trim().split(/\s+/);
        const val = parseFloat(parts[col - 1]) || 0;
        total += val;
      });
      return { output: String(total), error: null };
    }
    
    return { output: content, error: null };
  }

  if (command === 'sed') {
    const script = args.find(arg => arg.startsWith('s/'));
    if (!script) {
      return { output: pipedInput, error: null };
    }
    
    const sedParts = script.split('/');
    const search = sedParts[1];
    const replace = sedParts[2];
    const flags = sedParts[3] || '';
    
    const targetFile = args.find(a => !a.startsWith('-') && a !== script);
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `sed: ${targetFile}: No such file or directory` };
    }
    content = String(content);
    
    const regex = new RegExp(search, flags.includes('g') ? 'g' : '');
    const replaced = content.split('\n').map(line => line.replace(regex, replace)).join('\n');
    return { output: replaced, error: null };
  }

  if (command === 'comm' || command === 'diff') {
    const files = args.filter(a => !a.startsWith('-'));
    const file1 = files[0];
    const file2 = files[1];
    if (!file1 || !file2) {
      return { output: '', error: `${command}: two files expected` };
    }
    const resolved1 = resolvePath(file1);
    const resolved2 = resolvePath(file2);
    const val1 = getFileSystemItem(resolved1);
    const val2 = getFileSystemItem(resolved2);
    if (val1 === null || val2 === null) {
      return { output: '', error: `${command}: file not found` };
    }
    const lines1 = String(val1).split('\n').filter(Boolean);
    const lines2 = String(val2).split('\n').filter(Boolean);
    
    if (command === 'comm') {
      const has23 = args.includes('-23');
      if (has23) {
        const diffLines = lines1.filter(l => !lines2.includes(l));
        return { output: diffLines.join('\n'), error: null };
      }
    } else {
      const diffLines = [];
      lines1.forEach(l => {
        if (!lines2.includes(l)) diffLines.push(`< ${l}`);
      });
      lines2.forEach(l => {
        if (!lines1.includes(l)) diffLines.push(`> ${l}`);
      });
      return { output: diffLines.join('\n'), error: null };
    }
  }

  if (command === 'find') {
    const hasType = args.indexOf('-type');
    const hasName = args.indexOf('-name');
    const hasSize = args.indexOf('-size');
    const hasEmpty = args.includes('-empty');
    const hasUser = args.indexOf('-user');
    const hasGroup = args.indexOf('-group');
    const hasMmin = args.indexOf('-mmin');
    
    const targetDir = args.filter(a => !a.startsWith('-') && 
      (hasType === -1 || args[hasType + 1] !== a) &&
      (hasName === -1 || args[hasName + 1] !== a) &&
      (hasSize === -1 || args[hasSize + 1] !== a) &&
      (hasUser === -1 || args[hasUser + 1] !== a) &&
      (hasGroup === -1 || args[hasGroup + 1] !== a) &&
      (hasMmin === -1 || args[hasMmin + 1] !== a)
    )[0] || '.';
    
    const resolvedStart = resolvePath(targetDir);
    const rootItem = getFileSystemItem(resolvedStart);
    if (!rootItem) {
      return { output: '', error: `find: ${targetDir}: No such file or directory` };
    }
    
    const results = flattenFS(rootItem, targetDir);
    const filtered = [];
    
    results.forEach(({ path, content, isDir }) => {
      let match = true;
      
      if (hasType !== -1) {
        const type = args[hasType + 1];
        if (type === 'f' && isDir) match = false;
        if (type === 'd' && !isDir) match = false;
      }
      
      if (hasName !== -1) {
        const namePattern = args[hasName + 1].replace(/['"]/g, '').replace(/\*/g, '.*');
        const fileName = path.split('/').pop();
        if (!new RegExp(`^${namePattern}$`).test(fileName)) match = false;
      }
      
      if (hasSize !== -1) {
        const sizeArg = args[hasSize + 1];
        let bytes = parseInt(sizeArg);
        if (sizeArg.endsWith('c')) {
          bytes = parseInt(sizeArg.slice(0, -1));
        }
        if (typeof content !== 'string' || content.length !== bytes) match = false;
      }
      
      if (hasEmpty) {
        if (isDir) {
          match = false;
        } else if (typeof content === 'string' && content.length > 0) {
          match = false;
        }
      }
      
      if (hasUser !== -1) {
        const user = args[hasUser + 1];
        if (typeof content === 'string' && !content.includes(`[USER:${user}]`)) match = false;
      }
      
      if (hasGroup !== -1) {
        const group = args[hasGroup + 1];
        if (typeof content === 'string' && !content.includes(`[GROUP:${group}]`)) match = false;
      }
      
      if (hasMmin !== -1) {
        const mminArg = args[hasMmin + 1];
        if (typeof content === 'string' && !content.includes(`[MTIME:${mminArg}]`)) match = false;
      }
      
      if (match) {
        filtered.push(path);
      }
    });
    return { output: filtered.join('\n'), error: null };
  }

  if (command === 'tar') {
    const extract = args.includes('-xf') || args.some(a => a.startsWith('-') && a.includes('x'));
    const list = args.includes('-tf') || args.some(a => a.startsWith('-') && a.includes('t'));
    const targetFile = args.find(a => !a.startsWith('-'));
    if (!targetFile) {
      return { output: '', error: 'tar: archive file expected' };
    }
    const resolved = resolvePath(targetFile);
    const content = getFileSystemItem(resolved);
    if (!content) {
      return { output: '', error: `tar: ${targetFile}: No such file or directory` };
    }
    
    if (String(content).includes('[TAR]')) {
      const inner = String(content).replace('[TAR]', '').trim();
      const files = inner.split('\n').map(line => {
        const splitIdx = line.indexOf(':');
        const name = line.substring(0, splitIdx).trim();
        const body = line.substring(splitIdx + 1).trim();
        return { name, body };
      });
      
      if (list) {
        return { output: files.map(f => f.name).join('\n'), error: null };
      }
      if (extract) {
        files.forEach(f => {
          const resPath = resolvePath(f.name);
          writeToVirtualFS(resPath, f.body, false);
        });
        return { output: 'Extracted files successfully', error: null };
      }
    }
    return { output: 'Archive operation complete', error: null };
  }

  if (command === 'gzip' || command === 'gunzip' || command === 'zcat') {
    const targetFile = args.find(a => !a.startsWith('-'));
    let content = pipedInput;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      content = getFileSystemItem(resolved);
    }
    if (content === null) {
      return { output: '', error: `${command}: target file not found` };
    }
    
    content = String(content);
    const isCompressed = content.startsWith('[COMPRESSED]') || content.includes('[GZIP');
    
    if (command === 'gunzip') {
      if (isCompressed) {
        const decompressed = content.replace('[COMPRESSED] ', '').replace(/\[GZIP\s*|\]/g, '');
        if (targetFile) {
          const resolved = resolvePath(targetFile);
          writeToVirtualFS(resolved.replace('.gz', ''), decompressed, false);
          removeFromVirtualFS(resolved);
        }
        return { output: '', error: null };
      }
      return { output: '', error: 'gunzip: not in gzip format' };
    }
    
    if (command === 'zcat') {
      if (isCompressed) {
        const decompressed = content.replace('[COMPRESSED] ', '').replace(/\[GZIP\s*|\]/g, '');
        return { output: decompressed, error: null };
      }
      return { output: content, error: null };
    }
    
    const compressed = `[COMPRESSED] ${content}`;
    if (targetFile) {
      const resolved = resolvePath(targetFile);
      writeToVirtualFS(resolved + '.gz', compressed, false);
      removeFromVirtualFS(resolved);
    }
    return { output: compressed, error: null };
  }

  if (command === 'sqlite3') {
    const query = args.find(a => a.includes('SELECT') || a.includes('select'));
    const targetFile = args.find(a => a.endsWith('.db') || a.endsWith('.sqlite'));
    if (!targetFile) {
      return { output: '', error: 'sqlite3: database file expected' };
    }
    const resolved = resolvePath(targetFile);
    const content = getFileSystemItem(resolved);
    if (!content) {
      return { output: '', error: `sqlite3: ${targetFile}: No such file or directory` };
    }
    
    if (query) {
      const tableMatch = query.match(/FROM\s+(\w+)/i);
      const tableName = tableMatch ? tableMatch[1] : '';
      if (String(content).includes(`TABLE: ${tableName}`)) {
        const lines = String(content).split('\n');
        const rows = lines.filter(l => l.startsWith('ROW'));
        return { output: rows.join('\n'), error: null };
      }
    }
    return { output: String(content), error: null };
  }

  if (command === 'openssl') {
    const decrypt = args.includes('-decrypt');
    const inkeyFlag = args.indexOf('-inkey');
    const inFlag = args.indexOf('-in');
    
    const keyFile = inkeyFlag !== -1 ? args[inkeyFlag + 1] : null;
    const encryptedFile = inFlag !== -1 ? args[inFlag + 1] : null;
    
    if (decrypt && keyFile && encryptedFile) {
      const resolvedKey = resolvePath(keyFile);
      const resolvedEnc = resolvePath(encryptedFile);
      const keyContent = getFileSystemItem(resolvedKey);
      const encContent = getFileSystemItem(resolvedEnc);
      if (!keyContent || !encContent) {
        return { output: '', error: 'openssl: files not found' };
      }
      return { output: ch.password || 'Decrypted successfully', error: null };
    }
    return { output: 'openssl: command execution simulated', error: null };
  }

  if (command === 'dd') {
    const ifFlag = args.find(a => a.startsWith('if='));
    const bsFlag = args.find(a => a.startsWith('bs='));
    const skipFlag = args.find(a => a.startsWith('skip='));
    const countFlag = args.find(a => a.startsWith('count='));
    
    const targetFile = ifFlag ? ifFlag.substring(3) : null;
    const skip = skipFlag ? parseInt(skipFlag.substring(5)) : 0;
    const count = countFlag ? parseInt(countFlag.substring(6)) : 0;
    
    if (!targetFile) {
      return { output: '', error: 'dd: input file required' };
    }
    
    const resolved = resolvePath(targetFile);
    const content = getFileSystemItem(resolved);
    if (!content) {
      return { output: '', error: `dd: ${targetFile}: No such file or directory` };
    }
    
    if (String(content).includes('[BINARY:')) {
      const offsetHex = '0x' + skip.toString(16).toUpperCase();
      if (String(content).includes(`offset ${offsetHex}`)) {
        return { output: ch.password || 'Extracted content', error: null };
      }
    }
    return { output: String(content).substring(skip, skip + count), error: null };
  }

  if (command === 'dig' || command === 'nslookup' || command === 'host') {
    const query = args.find(a => !a.startsWith('@') && !a.startsWith('-'));
    if (query) {
      if (query.includes('challenge.local') || query.includes('localhost')) {
        return { output: `TXT record: "${ch.password}"`, error: null };
      }
    }
    return { output: 'No records found', error: null };
  }

  if (command === 'dmesg') {
    return { output: `[    0.000000] Booting Linux... \n[    1.203841] EXT4-fs (sda1): mounted filesystem.\n[   10.428491] password found: ${ch.password}`, error: null };
  }

  if (command === 'ps') {
    return { output: `PID TTY          TIME CMD\n 124 pts/0    00:00:00 bash\n 582 pts/0    00:00:01 my_cron_job.sh\n 942 pts/0    00:00:00 ps`, error: null };
  }

  if (command === 'crontab') {
    return { output: `* * * * * /home/user/my_cron_job.sh\n# Cron schedule simulated successfully`, error: null };
  }

  if (command === 'getfattr' || command === 'md5sum' || command === 'sha256sum') {
    return { output: `Output: ${ch.password}`, error: null };
  }

  if (command === 'curl' || command === 'wget') {
    const isWget = command === 'wget';
    const hasO = args.includes('-O') || args.includes('-o');
    const hasI = args.includes('-I') || args.includes('--head');
    
    // Find URL in args
    const url = args.find(a => a.includes('://') || a.includes('.local') || a.includes('localhost'));
    if (!url) {
      return { output: '', error: `${command}: URL or target required` };
    }
    
    // Normalize url
    let cleanUrl = url.replace(/['"]/g, '');
    if (!cleanUrl.includes('://')) {
      cleanUrl = 'http://' + cleanUrl;
    }
    
    // Check local port forward tunnel for localhost:8080 or 127.0.0.1:8080
    if (cleanUrl.includes('localhost:8080') || cleanUrl.includes('127.0.0.1:8080')) {
      if (!state.sshTunnelActive) {
        return { output: '', error: `${command}: (7) Failed to connect to ${url}: Connection refused` };
      }
    }
    
    const content = VIRTUAL_NETWORK[cleanUrl];
    if (content === undefined) {
      return { output: '', error: `${command}: (7) Failed to connect to ${url}: Connection refused` };
    }
    
    if (hasI) {
      return {
        output: `HTTP/1.1 200 OK\nDate: Thu, 02 Jul 2026 12:00:00 GMT\nServer: Apache/2.4.52 (Ubuntu)\nContent-Type: text/html\nContent-Length: ${content.length}\nConnection: close`,
        error: null
      };
    }
    
    if (hasO || isWget) {
      // Extract filename from URL
      const parts = cleanUrl.split('/');
      let filename = parts[parts.length - 1] || 'index.html';
      if (filename.includes('?')) {
        filename = filename.substring(0, filename.indexOf('?'));
      }
      
      const resolved = resolvePath(filename);
      writeToVirtualFS(resolved, content, false);
      return { output: `Saving to: ‘${filename}’\n[=====================================>] ${content.length} B  --.-KB/s in 0s\nDownloaded and saved successfully.`, error: null };
    }
    
    return { output: content, error: null };
  }

  if (command === 'ssh') {
    const iFlagIndex = args.indexOf('-i');
    const keyFile = iFlagIndex !== -1 ? args[iFlagIndex + 1] : null;
    const dest = args.find(a => a !== '-i' && a !== keyFile && !a.startsWith('-'));
    const isL = args.includes('-L');
    
    if (isL) {
      // Setup port forward
      const forwardArgIndex = args.indexOf('-L') + 1;
      const forwardArg = args[forwardArgIndex];
      const targetDest = args.find(a => a !== '-L' && a !== forwardArg && !a.startsWith('-'));
      
      if (forwardArg && targetDest) {
        state.sshTunnelActive = true;
        return { output: `Tunnel established: ${forwardArg}\nForwarding port successfully in background.`, error: null };
      }
    }
    
    if (!dest) {
      return { output: '', error: 'ssh: destination required (e.g. user@host)' };
    }
    
    if (!keyFile) {
      return { output: '', error: `ssh: Connection closed: Permission denied (publickey).` };
    }
    
    const resolvedKey = resolvePath(keyFile);
    const keyContent = getFileSystemItem(resolvedKey);
    
    if (!keyContent) {
      return { output: '', error: `Warning: Identity file ${keyFile} not accessible: No such file or directory.` };
    }
    
    const isPrivateKey = String(keyContent).includes('-----BEGIN RSA PRIVATE KEY-----') || String(keyContent).includes('[PRIVATE SSH KEY FOR bandit14]');
    if (!isPrivateKey) {
      return { output: '', error: `Load key "${keyFile}": invalid format` };
    }
    
    return {
      output: `ssh: Connected to localhost.\nssh: Authenticating with key '${keyFile}'...\n\nWelcome to Bandit level 14!\n\nHere is your next password:\n${ch.password}`,
      error: null
    };
  }

  if (command === 'nmap') {
    return { output: simulateNmap(args, ch), error: null };
  }

  return { output: `Executing: ${command} ${args.join(' ')}`, error: null };
}

// ---- Simulate Ping ----
function simulatePing(cmd) {
  const ipMatch = cmd.match(/(\d+\.\d+\.\d+\.\d+)/);
  const hostMatch = cmd.match(/ping\s+(?:-\w+\s+)*(?:-\w+\s+\S+\s+)*(\S+)/);
  const target = ipMatch ? ipMatch[1] : (hostMatch ? hostMatch[1] : 'unknown');

  addTerminalLine(`PING ${target} (${target}) 56(84) bytes of data.`, 'output-line');
  addTerminalLine(`64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.${Math.floor(Math.random() * 900 + 100)} ms`, 'output-line');
  addTerminalLine(``, '');
  addTerminalLine(`--- ${target} ping statistics ---`, 'output-line');
  addTerminalLine(`1 packets transmitted, 1 received, 0% packet loss`, 'output-line');
  addTerminalLine(``, '');
  addTerminalLine(`❌ Correct target, but check the specific requirements.`, 'warning-line');
}

// ---- Simulate Nmap ----
function simulateNmap(args, ch) {
  if (args.length === 0) {
    return `Nmap 7.92 ( https://nmap.org )
Usage: nmap [Scan Type(s)] [Options] {target specification}
EXAMPLES:
  nmap -v -A scanme.nmap.org
  nmap -sn 192.168.0.0/24
  nmap -sV 10.0.0.1`;
  }
  
  const target = args[args.length - 1];
  const sV = args.includes('-sV');
  const sn = args.includes('-sn');
  const script = args.find(a => a.startsWith('--script'));
  
  if (sn) {
    if (target.includes('/24') || target.includes('*')) {
      const base = target.replace('/24', '').replace('*', '');
      return `Starting Nmap 7.92 ( https://nmap.org )
Nmap scan report for ${base}1
Host is up (0.0024s latency).
Nmap scan report for ${base}42
Host is up (0.0035s latency).
Nmap scan report for ${base}99
Host is up (0.0019s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 2.10 seconds`;
    }
    return `Starting Nmap 7.92 ( https://nmap.org )
Nmap scan report for ${target}
Host is up (0.0012s latency).
Nmap done: 1 IP address (1 host up) scanned in 0.15 seconds`;
  }
  
  if (sV) {
    if (script && script.includes('vuln')) {
      return `Starting Nmap 7.92 ( https://nmap.org )
Nmap scan report for ${target}
Host is up (0.0050s latency).

PORT    STATE  SERVICE
80/tcp  open   http
| http-vuln-cve2017-5638:
|   VULNERABLE:
|   Apache Struts Remote Code Execution
443/tcp open   https
| ssl-heartbleed:
|   VULNERABLE:
|   The Heartbleed Bug (CVE-2014-0160)

Service detection performed. 2 services detected.
Nmap done: 1 IP address (1 host up) scanned in 6.45 seconds`;
    }
    return `Starting Nmap 7.92 ( https://nmap.org )
Nmap scan report for ${target}
Host is up (0.0040s latency).

PORT     STATE  SERVICE    VERSION
22/tcp   open   ssh        OpenSSH 8.9p1 Ubuntu
80/tcp   open   http       Apache/2.4.52
443/tcp  open   ssl/http   nginx 1.18.0
3306/tcp open   mysql      MySQL 8.0.28

Service detection performed. 4 services detected.
Nmap done: 1 IP address (1 host up) scanned in 5.20 seconds`;
  }

  return `Starting Nmap 7.92 ( https://nmap.org )
Nmap scan report for ${target}
Host is up (0.0030s latency).
Not shown: 996 closed tcp ports (conn-refused)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.85 seconds`;
}

// ---- Subshell & Wildcard Expansion Helpers ----
function evaluateSubshells(cmd, ch) {
  let current = cmd;
  let match;
  while (match = current.match(/\$\(([^)]+)\)/)) {
    const innerCmd = match[1];
    const result = executePipeline(innerCmd, ch);
    current = current.replace(match[0], result.trim().replace(/\s+/g, ' '));
  }
  return current;
}

function expandWildcards(args) {
  const fs = state.activeFilesystem || {};
  return args.reduce((acc, arg) => {
    if (arg.includes('*') || arg.includes('?')) {
      let dirPath = '';
      let pattern = arg;
      
      const lastSlash = arg.lastIndexOf('/');
      if (lastSlash !== -1) {
        dirPath = arg.substring(0, lastSlash);
        pattern = arg.substring(lastSlash + 1);
      }
      
      const resolvedDir = resolvePath(dirPath);
      const dir = getFileSystemItem(resolvedDir);
      
      if (dir && typeof dir === 'object') {
        const regexStr = '^' + pattern.replace(/\./g, '\\.').replace(/\?/g, '.').replace(/\*/g, '.*') + '$';
        const regex = new RegExp(regexStr);
        
        const matches = [];
        for (const name of Object.keys(dir)) {
          const cleanName = name.replace(/\/$/, '');
          if (regex.test(cleanName)) {
            if (cleanName.startsWith('.') && !pattern.startsWith('.')) continue;
            matches.push(dirPath ? `${dirPath}/${cleanName}` : cleanName);
          }
        }
        if (matches.length > 0) {
          acc.push(...matches);
          return acc;
        }
      }
    }
    acc.push(arg);
    return acc;
  }, []);
}

// ---- Pipeline & Argument Parsing Helpers ----
function splitByPipe(str) {
  const result = [];
  let current = '';
  let inDoubleQuotes = false;
  let inSingleQuotes = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"' && !inSingleQuotes) {
      inDoubleQuotes = !inDoubleQuotes;
      current += char;
    } else if (char === "'" && !inDoubleQuotes) {
      inSingleQuotes = !inSingleQuotes;
      current += char;
    } else if (char === '|' && !inDoubleQuotes && !inSingleQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseArguments(str) {
  const args = [];
  let current = '';
  let inDoubleQuotes = false;
  let inSingleQuotes = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"' && !inSingleQuotes) {
      inDoubleQuotes = !inDoubleQuotes;
    } else if (char === "'" && !inDoubleQuotes) {
      inSingleQuotes = !inSingleQuotes;
    } else if (/\s/.test(char) && !inDoubleQuotes && !inSingleQuotes) {
      if (current) {
        args.push(current);
        current = '';
      }
    } else {
      current += char;
    }
  }
  if (current) {
    args.push(current);
  }
  return args;
}

// ---- Virtual Filesystem Helpers ----
function writeToVirtualFS(path, content, append) {
  const fs = state.activeFilesystem;
  if (!fs) return;
  
  const cleanPath = path.replace(/^\.\//, '');
  const parts = cleanPath.split('/');
  const fileName = parts.pop();
  
  let current = fs;
  for (const part of parts) {
    if (current[part + '/'] === undefined) {
      current[part + '/'] = {};
    }
    current = current[part + '/'];
  }
  
  const oldContent = current[fileName] || '';
  if (append) {
    current[fileName] = (oldContent ? oldContent + '\n' : '') + content;
  } else {
    current[fileName] = content;
  }
}

function removeFromVirtualFS(path) {
  const fs = state.activeFilesystem;
  if (!fs) return;
  
  const cleanPath = path.replace(/^\.\//, '');
  const parts = cleanPath.split('/');
  const targetName = parts.pop();
  
  let current = fs;
  for (const part of parts) {
    if (current[part + '/'] === undefined) return;
    current = current[part + '/'];
  }
  
  delete current[targetName];
  delete current[targetName + '/'];
}

// ---- Filesystem Path Resolution & Helpers ----
function resolvePath(path) {
  if (!path) return state.currentDir;
  if (path === '~' || path === '/') return '';
  if (path.startsWith('~/')) {
    path = path.substring(2);
  }
  
  let base = state.currentDir;
  if (path.startsWith('/')) {
    base = '';
    path = path.substring(1);
  }
  
  const parts = path.split('/').filter(Boolean);
  let resolvedParts = base ? base.split('/').filter(Boolean) : [];
  
  for (const part of parts) {
    if (part === '..') {
      resolvedParts.pop();
    } else if (part === '.') {
      // do nothing
    } else {
      resolvedParts.push(part);
    }
  }
  return resolvedParts.join('/');
}

function getFileSystemItem(resolvedPath) {
  const fs = state.activeFilesystem || {};
  if (!resolvedPath) return fs;
  
  const parts = resolvedPath.split('/');
  let current = fs;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (current[part] !== undefined) {
      current = current[part];
    } else if (current[part + '/'] !== undefined) {
      current = current[part + '/'];
    } else {
      return null;
    }
  }
  return current;
}

function navigateFS(fs, path) {
  const resolved = resolvePath(path);
  return getFileSystemItem(resolved);
}

function findInFS(fs, path) {
  const resolved = resolvePath(path);
  return getFileSystemItem(resolved);
}

function flattenFS(fs, prefix) {
  const results = [];
  for (const [name, value] of Object.entries(fs)) {
    const fullPath = prefix ? `${prefix}/${name.replace(/\/$/, '')}` : name.replace(/\/$/, '');
    if (typeof value === 'object' && name.endsWith('/')) {
      results.push({ path: fullPath, content: null, isDir: true });
      results.push(...flattenFS(value, fullPath));
    } else if (typeof value === 'object') {
      results.push({ path: fullPath, content: null, isDir: true });
      results.push(...flattenFS(value, fullPath));
    } else {
      results.push({ path: fullPath, content: value, isDir: false });
    }
  }
  return results;
}

function getSimulatedOutput(cmd, ch) {
  // Try to get the output from the command
  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  if (command === 'cat') {
    const filePath = parts.slice(1).join(' ').replace(/['"]/g, '').replace('./', '');
    const content = findInFS(ch.filesystem, filePath);
    return typeof content === 'string' ? content : '';
  }
  return '';
}

// ---- Simulate Generic Command Output ----
function simulateCommandOutput(cmd) {
  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();

  const outputs = {
    'echo': () => parts.slice(1).join(' ').replace(/^["']|["']$/g, ''),
    'ls': () => 'file1.txt  file2.txt  readme.txt  .hidden  script.sh',
    'pwd': () => '/home/user/challenge',
    'mkdir': () => '',
    'cat': () => 'File contents displayed.',
    'rm': () => '',
    'cp': () => '',
    'mv': () => '',
    'touch': () => '',
    'head': () => 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5',
    'tail': () => 'Line 96\nLine 97\nLine 98\nLine 99\nLine 100',
    'date': () => new Date().toString(),
    'whoami': () => 'user',
    'clear': () => { clearTerminal(); return null; },
    'find': () => './file1.txt\n./dir/file2.txt\n./dir/sub/file3.txt',
    'wc': () => '42 data.log',
    'grep': () => 'Matching lines found.',
    'df': () => 'Filesystem  Size  Used  Avail  Use%  Mounted\n/dev/sda1   50G   25G   25G    50%  /',
    'sort': () => 'Sorted output displayed.',
    'uniq': () => 'Unique lines displayed.',
    'file': () => 'mystery_file: ASCII text',
    'chmod': () => '',
    'ln': () => '',
    'du': () => '4.0K\tfile1.txt\n8.0K\tfile2.txt',
    'wget': () => 'Downloaded: file.txt [1024]',
    'env': () => 'PATH=/usr/local/bin:/usr/bin\nHOME=/home/user\nSHELL=/bin/bash',
    'man': () => 'Manual page displayed.',
    'diff': () => '< old line\n> new line',
    'kill': () => '',
    'tar': () => 'Archive created.',
    'ps': () => 'PID  %MEM  COMMAND\n1234  5.2  nginx\n5678  3.1  node',
    'ss': () => 'tcp  LISTEN  0.0.0.0:22\ntcp  LISTEN  0.0.0.0:80',
    'netstat': () => 'tcp  0.0.0.0:22  LISTEN\ntcp  0.0.0.0:80  LISTEN',
    'gzip': () => 'File compressed.',
    'sed': () => 'Substitution complete.',
    'cut': () => 'Column extracted.',
    'awk': () => 'Output processed.',
    'top': () => 'System monitor active.',
    'htop': () => 'System monitor active.',
    'crontab': () => 'Cron jobs listed.',
    'md5sum': () => 'Hash generated.',
    'chown': () => 'Ownership changed.',
    'nc': () => 'Connection established.',
    'ssh': () => 'SSH tunnel created.',
    'zgrep': () => 'Found in compressed file.',
    'dpkg': () => 'Package list displayed.',
  };

  const fn = outputs[command];
  if (fn) {
    const result = fn();
    if (result !== null && result !== undefined && result !== '') {
      addTerminalLine(result, 'output-line');
    }
  }
}

// ---- Complete Challenge ----
function completeChallenge() {
  const ch = state.currentChallenge;
  if (!ch || state.completedChallenges.has(ch.id)) return;

  state.completedChallenges.add(ch.id);
  state.totalXP += ch.xp;
  state.streak++;
  state.lastCompletedIndex = state.currentChallengeIndex;

  addTerminalLine('', '');
  addTerminalLine(`✅ ${ch.successMessage}`, 'success-line');
  addTerminalLine(`+${ch.xp} XP earned!`, 'success-line');

  updateStats();
  renderChallengeList();
  saveProgress();
  renderLeaderboard();

  // Show success overlay
  DOM.successIcon.textContent = '🎉';
  DOM.successTitle.textContent = 'Challenge Complete!';
  DOM.successMessage.textContent = ch.successMessage;
  DOM.successXP.textContent = `+${ch.xp} XP`;
  DOM.successOverlay.classList.add('show');

  // Show next button
  DOM.btnNext.style.display = '';
  DOM.btnHint.style.display = 'none';

  // Hide CTF Flag panel on completion
  if (DOM.ctfFlagPanel) {
    DOM.ctfFlagPanel.style.display = 'none';
  }
}

function closeSuccess() {
  DOM.successOverlay.classList.remove('show');
  if (state.lastCompletedIndex === state.currentChallengeIndex) {
    nextChallenge();
  } else {
    selectChallenge(state.currentChallengeIndex);
  }
  DOM.terminalInput.focus();
}

// ---- Hint System ----
function showHint() {
  if (!state.currentChallenge) return;
  const ch = state.currentChallenge;
  if (state.completedChallenges.has(ch.id)) return;

  if (state.hintIndex < ch.hints.length) {
    const hint = ch.hints[state.hintIndex];
    state.hintIndex++;

    const hintHtml = `<div class="hint-display animate-fade-in">💡 Hint ${state.hintIndex}/${ch.hints.length}: ${hint}</div>`;
    DOM.hintArea.innerHTML += hintHtml;

    addTerminalLine(`💡 Hint: ${hint}`, 'warning-line');
  } else {
    addTerminalLine('No more hints available. Try "solution" to reveal the answer.', 'warning-line');
  }
}

// ---- Solution System ----
function showSolution() {
  if (!state.currentChallenge) return;
  const ch = state.currentChallenge;

  const solution = ch.solutions[0];
  let html = `<div class="solution-display animate-fade-in">🔑 Solution: <strong>${escapeHtml(solution)}</strong>`;
  if (ch.password) {
    html += `<br>🔓 Password: <strong>${escapeHtml(ch.password)}</strong>`;
  }
  if (ch.flag) {
    html += `<br>🚩 Flag: <strong>${escapeHtml(ch.flag)}</strong>`;
  }
  html += `</div>`;
  DOM.solutionArea.innerHTML = html;

  addTerminalLine(`🔑 Solution: ${solution}`, 'error-line');
  if (ch.password) {
    addTerminalLine(`🔓 Password: ${ch.password}`, 'info-line');
  }
  if (ch.flag) {
    addTerminalLine(`🚩 Flag: ${ch.flag}`, 'info-line');
  }
}

// ---- Reset Challenge ----
function resetChallenge() {
  if (!state.currentChallenge) return;
  state.hintIndex = 0;
  DOM.hintArea.innerHTML = '';
  DOM.solutionArea.innerHTML = '';
  selectChallenge(state.currentChallengeIndex);
  addTerminalLine('🔄 Challenge reset.', 'system-line');
}

// ---- Next Challenge ----
function nextChallenge() {
  const challenges = CHALLENGES[state.currentCategory];
  const nextIndex = state.currentChallengeIndex + 1;
  if (nextIndex < challenges.length) {
    selectChallenge(nextIndex);
  } else {
    addTerminalLine('🏆 Congratulations! You\'ve completed all challenges in this category!', 'success-line');
  }
}

// ---- Terminal Helpers ----
function addTerminalLine(text, className) {
  const line = document.createElement('div');
  line.className = `terminal-line ${className}`;
  line.innerHTML = text;
  DOM.terminalBody.appendChild(line);
  DOM.terminalBody.scrollTop = DOM.terminalBody.scrollHeight;
}

function clearTerminal() {
  DOM.terminalBody.innerHTML = '';
}

function getPromptText() {
  const cat = state.currentCategory;
  const cfg = CATEGORY_CONFIG[cat];
  const level = state.currentChallenge ? state.currentChallengeIndex + 1 : 0;
  if (cat === 'bandit') {
    return `<span class="terminal-prompt-user">${cfg.terminalPrompt}</span><span class="terminal-prompt-at">@</span><span class="terminal-prompt-host">challenge</span><span class="terminal-prompt-path">:~/level${level}${state.currentDir ? '/' + state.currentDir : ''}</span><span class="terminal-prompt-dollar">$</span>`;
  }
  return `<span class="terminal-prompt-user">${cfg.terminalPrompt}</span><span class="terminal-prompt-at">@</span><span class="terminal-prompt-host">challenge</span><span class="terminal-prompt-path">:~/level${level}</span><span class="terminal-prompt-dollar">$</span>`;
}

function updatePrompt(category) {
  const cat = category || state.currentCategory;
  const cfg = CATEGORY_CONFIG[cat];
  const level = state.currentChallenge ? state.currentChallengeIndex + 1 : 0;
  
  let promptHtml = '';
  if (cat === 'bandit') {
    promptHtml = `<span class="terminal-prompt-user">${cfg.terminalPrompt}</span><span class="terminal-prompt-at">@</span><span class="terminal-prompt-host">challenge</span><span class="terminal-prompt-path">:~/level${level}${state.currentDir ? '/' + state.currentDir : ''}</span><span class="terminal-prompt-dollar">$ </span>`;
  } else {
    promptHtml = `<span class="terminal-prompt-user">${cfg.terminalPrompt}</span><span class="terminal-prompt-at">@</span><span class="terminal-prompt-host">challenge</span><span class="terminal-prompt-path">:~/level${level}</span><span class="terminal-prompt-dollar">$ </span>`;
  }
  
  if (DOM.terminalPrompt) {
    DOM.terminalPrompt.innerHTML = promptHtml;
  }
  
  if (DOM.terminalTitle) {
    if (cat === 'bandit') {
      DOM.terminalTitle.textContent = `${cfg.terminalPrompt}@challenge:~/level${level}${state.currentDir ? '/' + state.currentDir : ''}$`;
    } else {
      DOM.terminalTitle.textContent = `${cfg.terminalPrompt}@challenge:~/level${level}$`;
    }
  }
}

function showHelp() {
  addTerminalLine('╔══════════════════════════════════════╗', 'info-line');
  addTerminalLine('║       Terminal Challenge Help         ║', 'info-line');
  addTerminalLine('╠══════════════════════════════════════╣', 'info-line');
  addTerminalLine('║  help     — Show this help message    ║', 'info-line');
  addTerminalLine('║  clear    — Clear terminal screen     ║', 'info-line');
  addTerminalLine('║  hint     — Get a hint for current    ║', 'info-line');
  addTerminalLine('║  reset    — Reset current challenge   ║', 'info-line');
  addTerminalLine('╠══════════════════════════════════════╣', 'info-line');
  addTerminalLine('║  ↑/↓     — Navigate command history   ║', 'info-line');
  addTerminalLine('║  Enter   — Execute command             ║', 'info-line');
  addTerminalLine('╚══════════════════════════════════════╝', 'info-line');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function normalizeCommand(cmd) {
  return cmd.trim()
    .replace(/\s+/g, ' ')
    .replace(/[""'']/g, '"')
    .toLowerCase();
}

// ---- Stats ----
function updateStats() {
  const totalChallenges = CHALLENGES.command.length + CHALLENGES.bandit.length + CHALLENGES.ctf.length;
  const solved = state.completedChallenges.size;

  DOM.statXP.textContent = state.totalXP;
  DOM.statSolved.textContent = solved;
  DOM.statStreak.textContent = state.streak;
  DOM.progressText.textContent = `${solved} / ${totalChallenges}`;
  DOM.progressFill.style.width = `${(solved / totalChallenges) * 100}%`;

  updateProfileUI();
}

// ---- Persistence ----
function saveProgress() {
  const progressData = {
    completed: [...state.completedChallenges],
    xp: state.totalXP,
    streak: state.streak,
    avatar: state.avatar,
  };

  try {
    if (state.currentUser) {
      // Save to profile
      const profiles = JSON.parse(localStorage.getItem('terminal-challenge-profiles') || '{}');
      if (profiles[state.currentUser]) {
        profiles[state.currentUser].completed = progressData.completed;
        profiles[state.currentUser].xp = progressData.xp;
        profiles[state.currentUser].streak = progressData.streak;
        profiles[state.currentUser].avatar = progressData.avatar;
        localStorage.setItem('terminal-challenge-profiles', JSON.stringify(profiles));
      }
      // Track active user
      localStorage.setItem('terminal-challenge-active-user', state.currentUser);
    } else {
      // Save to Guest progress
      localStorage.setItem('terminal-challenge-progress', JSON.stringify(progressData));
      localStorage.removeItem('terminal-challenge-active-user');
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function loadProgress() {
  try {
    const activeUser = localStorage.getItem('terminal-challenge-active-user');
    if (activeUser) {
      const profiles = JSON.parse(localStorage.getItem('terminal-challenge-profiles') || '{}');
      if (profiles[activeUser]) {
        state.currentUser = activeUser;
        state.completedChallenges = new Set(profiles[activeUser].completed || []);
        state.totalXP = profiles[activeUser].xp || 0;
        state.streak = profiles[activeUser].streak || 0;
        state.avatar = profiles[activeUser].avatar || '👤';
        updateProfileUI();
        return;
      }
    }

    // Default to Guest
    state.currentUser = null;
    const guestData = JSON.parse(localStorage.getItem('terminal-challenge-progress'));
    if (guestData) {
      state.completedChallenges = new Set(guestData.completed || []);
      state.totalXP = guestData.xp || 0;
      state.streak = guestData.streak || 0;
      state.avatar = guestData.avatar || '👤';
    } else {
      state.completedChallenges = new Set();
      state.totalXP = 0;
      state.streak = 0;
      state.avatar = '👤';
    }
    updateProfileUI();
  } catch (e) {
    // Ignore storage errors
  }
}

// ---- Mobile Sidebar Toggle ----
function toggleSidebar() {
  const isOpen = DOM.sidebar.classList.toggle('open');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (backdrop) {
    if (isOpen) {
      backdrop.style.display = 'block';
      setTimeout(() => backdrop.classList.add('show'), 10);
    } else {
      backdrop.classList.remove('show');
      setTimeout(() => backdrop.style.display = 'none', 300);
    }
  }
}

// ---- User Profile UI & Authentication System ----

function updateProfileUI() {
  DOM.profileAvatar.textContent = state.avatar;
  if (state.currentUser) {
    DOM.profileName.textContent = state.currentUser;
    DOM.profileRank.textContent = getRankFromXP(state.totalXP);
    DOM.profileBtn.textContent = '❌';
    DOM.profileBtn.title = 'Sign Out';
    DOM.profileBtn.classList.add('logged-in');
  } else {
    DOM.profileName.textContent = 'Guest';
    DOM.profileRank.textContent = 'Guest User';
    DOM.profileBtn.textContent = '🔑';
    DOM.profileBtn.title = 'Sign In';
    DOM.profileBtn.classList.remove('logged-in');
  }
}

function getRankFromXP(xp) {
  if (xp >= 1000) return 'Elite Operator';
  if (xp >= 600) return 'Cyber Commander';
  if (xp >= 300) return 'Netrunner';
  if (xp >= 100) return 'Script Kiddie';
  return 'Novice Hacker';
}

function handleProfileBtnClick() {
  if (state.currentUser) {
    if (confirm('Are you sure you want to sign out? Your session progress is safe.')) {
      signOut();
    }
  } else {
    openAuthModal();
  }
}

function openAuthModal() {
  DOM.authOverlay.style.display = 'flex';
  setTimeout(() => DOM.authOverlay.classList.add('show'), 10);
  switchAuthTab('signin');
}

function closeAuthModal() {
  DOM.authOverlay.classList.remove('show');
  setTimeout(() => DOM.authOverlay.style.display = 'none', 300);
  // Refocus terminal input when closing modal
  DOM.terminalInput.focus();
}

function switchAuthTab(tab) {
  state.currentAuthTab = tab;
  DOM.authTabSignin.classList.toggle('active', tab === 'signin');
  DOM.authTabRegister.classList.toggle('active', tab === 'register');
  DOM.authError.textContent = '';
  DOM.authUsername.value = '';
  DOM.authPassword.value = '';
  
  if (tab === 'signin') {
    DOM.authSubmitBtn.textContent = 'Access System';
  } else {
    DOM.authSubmitBtn.textContent = 'Create Profile';
  }
  DOM.authUsername.focus();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const username = DOM.authUsername.value.trim();
  const password = DOM.authPassword.value;
  DOM.authError.textContent = '';

  if (!username || !password) {
    DOM.authError.textContent = 'Username and password are required.';
    return;
  }

  if (username.toLowerCase() === 'guest') {
    DOM.authError.textContent = 'Cannot use "guest" as a username.';
    return;
  }

  try {
    const profiles = JSON.parse(localStorage.getItem('terminal-challenge-profiles') || '{}');

    if (state.currentAuthTab === 'signin') {
      const profile = profiles[username];
      if (!profile || profile.password !== password) {
        DOM.authError.textContent = 'Invalid username or password.';
        return;
      }
      
      state.currentUser = username;
      state.completedChallenges = new Set(profile.completed || []);
      state.totalXP = profile.xp || 0;
      state.streak = profile.streak || 0;
      
      saveProgress();
      updateStats();
      renderChallengeList();
      renderLeaderboard();
      
      addTerminalLine(`\n🔓 Welcome back, Operator ${username}. Profile loaded.`, 'success-line');
      closeAuthModal();
    } else {
      if (profiles[username]) {
        DOM.authError.textContent = 'Username already exists.';
        return;
      }

      const hasGuestProgress = state.completedChallenges.size > 0 && !state.currentUser;
      let migrateProgress = false;
      
      if (hasGuestProgress) {
        migrateProgress = confirm('Would you like to copy your current Guest progress to your new account?');
      }

      profiles[username] = {
        password: password,
        completed: migrateProgress ? [...state.completedChallenges] : [],
        xp: migrateProgress ? state.totalXP : 0,
        streak: migrateProgress ? state.streak : 0
      };
      
      localStorage.setItem('terminal-challenge-profiles', JSON.stringify(profiles));
      
      state.currentUser = username;
      if (!migrateProgress) {
        state.completedChallenges = new Set();
        state.totalXP = 0;
        state.streak = 0;
      }
      
      saveProgress();
      updateStats();
      renderChallengeList();
      renderLeaderboard();
      
      addTerminalLine(`\n✨ Profile created successfully. Welcome, Operator ${username}!`, 'success-line');
      closeAuthModal();
    }
  } catch (e) {
    DOM.authError.textContent = 'An error occurred during authentication.';
  }
}

function signOut() {
  const username = state.currentUser;
  state.currentUser = null;
  localStorage.removeItem('terminal-challenge-active-user');
  
  loadProgress();
  updateStats();
  renderChallengeList();
  renderLeaderboard();
  
  addTerminalLine(`\n🔒 Operator ${username} logged out. Returned to Guest session.`, 'system-line');
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', init);

// Keep terminal focused
document.addEventListener('click', (e) => {
  // If the user has selected text (like a password or flag), do not steal focus,
  // as focusing the input would clear the active selection.
  if (window.getSelection().toString() !== '') {
    return;
  }

  if (
    !e.target.closest('.sidebar') && 
    !e.target.closest('.btn') && 
    !e.target.closest('.success-overlay') && 
    !e.target.closest('.sidebar-backdrop') &&
    !e.target.closest('.auth-overlay') &&
    !e.target.closest('.auth-card') &&
    !e.target.closest('.bandit-unlock-panel') &&
    !e.target.closest('.ctf-flag-panel')
  ) {
    DOM.terminalInput.focus();
  }
});

// ============================================================================
// COMPETITIVE LEADERBOARD SYSTEM
// ============================================================================
let currentLeaderboardTab = 'all';

const MOCK_RIVALS = [
  { name: 'root_haxor', avatar: '💻', tag: 'rival', solved: { all: 265, command: 92, bandit: 88, ctf: 85 }, xp: { all: 5800, command: 1800, bandit: 2000, ctf: 2000 } },
  { name: 'net_viper', avatar: '🐍', tag: 'rival', solved: { all: 215, command: 75, bandit: 72, ctf: 68 }, xp: { all: 4500, command: 1400, bandit: 1550, ctf: 1550 } },
  { name: 'byte_bandit', avatar: '🦝', tag: 'rival', solved: { all: 178, command: 62, bandit: 80, ctf: 36 }, xp: { all: 3600, command: 1100, bandit: 1800, ctf: 700 } },
  { name: 'cyber_phreak', avatar: '👾', tag: 'rival', solved: { all: 138, command: 50, bandit: 42, ctf: 46 }, xp: { all: 2700, command: 850, bandit: 850, ctf: 1000 } },
  { name: 'null_pointer', avatar: '🎯', tag: 'rival', solved: { all: 90, command: 38, bandit: 32, ctf: 20 }, xp: { all: 1600, command: 650, bandit: 550, ctf: 400 } },
];

function switchLeaderboardTab(tab, event) {
  if (event) {
    event.stopPropagation();
  }
  currentLeaderboardTab = tab;
  
  // Update active states of tab buttons
  const tabs = document.querySelectorAll('.leaderboard-tab');
  tabs.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  renderLeaderboard();
}

function calculatePlayerStats(completedIds) {
  const stats = {
    solved: { all: 0, command: 0, bandit: 0, ctf: 0 },
    xp: { all: 0, command: 0, bandit: 0, ctf: 0 }
  };
  
  completedIds.forEach(id => {
    let foundCh = null;
    let category = '';
    
    if (id.startsWith('cmd-')) {
      category = 'command';
      foundCh = CHALLENGES.command.find(c => c.id === id);
    } else if (id.startsWith('ban-')) {
      category = 'bandit';
      foundCh = CHALLENGES.bandit.find(c => c.id === id);
    } else if (id.startsWith('ctf-')) {
      category = 'ctf';
      foundCh = CHALLENGES.ctf.find(c => c.id === id);
    }
    
    if (foundCh) {
      stats.solved.all++;
      stats.solved[category]++;
      stats.xp.all += foundCh.xp;
      stats.xp[category] += foundCh.xp;
    }
  });
  
  return stats;
}

function renderLeaderboard() {
  const category = currentLeaderboardTab;
  const listContainer = document.getElementById('leaderboard-list');
  if (!listContainer) return;

  // 1. Gather all players
  const localPlayers = [];
  
  // Load profiles from localStorage
  let profiles = {};
  try {
    profiles = JSON.parse(localStorage.getItem('terminal-challenge-profiles') || '{}');
  } catch (e) {}

  // Add registered accounts
  for (const [username, profile] of Object.entries(profiles)) {
    localPlayers.push({
      name: username,
      completed: profile.completed || [],
      avatar: profile.avatar || '👤',
      isCurrentUser: (state.currentUser === username)
    });
  }

  // If Guest, add guest
  if (!state.currentUser) {
    const guestCompleted = Array.from(state.completedChallenges);
    localPlayers.push({
      name: 'Guest (You)',
      completed: guestCompleted,
      avatar: state.avatar || '👤',
      isCurrentUser: true
    });
  }

  // Map local players to standard leaderboard format
  const formattedLocal = localPlayers.map(p => {
    const stats = calculatePlayerStats(p.completed);
    return {
      name: p.name,
      avatar: p.avatar,
      tag: p.isCurrentUser ? 'you' : '',
      solved: stats.solved,
      xp: stats.xp,
      isCurrentUser: p.isCurrentUser
    };
  });

  // Combine with mock rivals
  const allPlayers = [...formattedLocal, ...MOCK_RIVALS];

  // Sort based on selected category XP and solved counts
  allPlayers.sort((a, b) => {
    if (b.xp[category] !== a.xp[category]) {
      return b.xp[category] - a.xp[category];
    }
    return b.solved[category] - a.solved[category];
  });

  // Render list
  let html = '';
  allPlayers.forEach((player, idx) => {
    const rank = idx + 1;
    let rankHtml = '';
    if (rank === 1) rankHtml = `<div class="rank-badge rank-1">🥇</div>`;
    else if (rank === 2) rankHtml = `<div class="rank-badge rank-2">🥈</div>`;
    else if (rank === 3) rankHtml = `<div class="rank-badge rank-3">🥉</div>`;
    else rankHtml = `<div class="rank-badge">${rank}</div>`;

    let tagHtml = '';
    if (player.tag === 'you') {
      tagHtml = `<span class="player-name-tag you">YOU</span>`;
    } else if (player.tag === 'rival') {
      tagHtml = `<span class="player-name-tag rival">RIVAL</span>`;
    }

    const rowClass = player.isCurrentUser ? 'leaderboard-row current-user' : 'leaderboard-row';
    const xpVal = player.xp[category];
    const solvedVal = player.solved[category];

    html += `<div class="${rowClass}">
      ${rankHtml}
      <div class="player-name-wrapper">
        <span class="player-avatar">${player.avatar}</span>
        <span class="player-name">${escapeHtml(player.name)}</span>
        ${tagHtml}
      </div>
      <div class="player-solved">
        <span>🎯</span> ${solvedVal} solved
      </div>
      <div class="player-xp">${xpVal} XP</div>
    </div>`;
  });

  listContainer.innerHTML = html;
}

// ============================================================================
// RETRO CRT MODE SYSTEM
// ============================================================================
function initCrtMode() {
  const container = document.getElementById('terminal-container');
  if (!container) return;
  const isCrtActive = localStorage.getItem('crt-mode-active') === 'true';
  if (isCrtActive) {
    container.classList.add('crt-active');
  }
}

function toggleCrtMode() {
  const container = document.getElementById('terminal-container');
  if (!container) return;
  const isActive = container.classList.toggle('crt-active');
  localStorage.setItem('crt-mode-active', isActive);
}

// ============================================================================
// AVATAR PICKER SYSTEM
// ============================================================================
function openAvatarModal() {
  const overlay = DOM.avatarOverlay;
  if (!overlay) return;
  
  overlay.style.display = 'flex';
  setTimeout(() => overlay.classList.add('show'), 10);
  
  // Highlight currently selected avatar
  const options = document.querySelectorAll('.avatar-option');
  options.forEach(opt => {
    opt.classList.toggle('selected', opt.textContent.trim() === state.avatar);
  });
}

function closeAvatarModal() {
  const overlay = DOM.avatarOverlay;
  if (!overlay) return;
  overlay.classList.remove('show');
  setTimeout(() => overlay.style.display = 'none', 300);
  DOM.terminalInput.focus();
}

function selectAvatar(emoji) {
  state.avatar = emoji;
  saveProgress();
  updateProfileUI();
  renderLeaderboard();
  closeAvatarModal();
  addTerminalLine(`\n🤖 Profile avatar updated to: ${emoji}`, 'info-line');
}
