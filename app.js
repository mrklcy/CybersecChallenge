// ============================================================================
// TERMINAL CHALLENGE — Application Logic
// ============================================================================

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

    // Clear terminal & show challenge intro
    clearTerminal();
    addTerminalLine(`── Challenge ${index + 1}: ${ch.title} ──`, 'info-line');
    addTerminalLine(ch.description, '');
    addTerminalLine('', '');

    // For bandit challenges, show available files
    if (isBandit && ch.filesystem) {
      addTerminalLine('📁 Files in current directory:', 'system-line');
      displayFilesystem(ch.filesystem, '');
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

  const isCorrect = password === prevChallenge.password;

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
}

// ---- CTF Challenge Processing ----
function processCTFChallenge(cmd) {
  const ch = state.currentChallenge;
  const normalizedCmd = normalizeCommand(cmd);

  // Check if correct
  const isCorrect = ch.solutions.some(sol => {
    const normSol = normalizeCommand(sol);
    return normalizedCmd === normSol || normalizedCmd.startsWith(normSol) || normSol.startsWith(normalizedCmd);
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
    completeChallenge();
  } else {
    // Partial simulation
    if (cmd.toLowerCase().startsWith('ping')) {
      simulatePing(cmd);
    } else if (cmd.toLowerCase().startsWith('traceroute') || cmd.toLowerCase().startsWith('tracert')) {
      addTerminalLine('traceroute: Running...', 'output-line');
      addTerminalLine('Try the specific target from the challenge description.', 'warning-line');
    } else {
      addTerminalLine(`bash: command output simulated`, 'output-line');
      addTerminalLine(`❌ Not quite right. Check the challenge requirements.`, 'error-line');
    }
  }
}

// ---- Simulate Bandit Commands ----
function simulateBanditCommand(cmd, ch) {
  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ').replace(/['"]/g, '');
  const fs = ch.filesystem;

  if (command === 'ls') {
    const target = args.replace('-la', '').replace('-al', '').replace('-a', '').replace('-l', '').trim() || '';
    const dir = target ? navigateFS(fs, target) : fs;
    if (dir && typeof dir === 'object') {
      for (const [name, val] of Object.entries(dir)) {
        if (name.endsWith('/') && (!args.includes('-a') && name.startsWith('.'))) continue;
        if (typeof val === 'object' && name.endsWith('/')) {
          addTerminalLine(`drwxr-xr-x  2 user user 4096  ${name}`, 'fs-output');
        } else if (typeof val === 'string') {
          const size = val.length;
          const hidden = name.startsWith('.');
          if (!hidden || args.includes('-a') || args.includes('-la') || args.includes('-al')) {
            if (val.startsWith('[FILE]')) {
              addTerminalLine(val.replace('[FILE] ', ''), 'output-line');
            } else {
              addTerminalLine(`-rw-r--r--  1 user user ${String(size).padStart(5)}  ${name}`, 'output-line');
            }
          }
        }
      }
    } else {
      addTerminalLine(`ls: cannot access '${target}': No such file or directory`, 'error-line');
    }
    return;
  }

  if (command === 'cat') {
    const filePath = args.replace('./', '');
    const content = findInFS(fs, filePath);
    if (content !== null && typeof content === 'string') {
      const lines = content.split('\n');
      lines.forEach(line => {
        if (line.includes(ch.password)) {
          addTerminalLine(line, 'success-line');
        } else {
          addTerminalLine(line, 'output-line');
        }
      });
    } else if (content !== null && typeof content === 'object') {
      addTerminalLine(`cat: ${filePath}: Is a directory`, 'error-line');
    } else {
      addTerminalLine(`cat: ${filePath}: No such file or directory`, 'error-line');
    }
    return;
  }

  if (command === 'find') {
    addTerminalLine(`Searching...`, 'output-line');
    const results = flattenFS(fs, '.');
    const sizeArg = cmd.match(/-size\s+(\d+)c/);
    const nameArg = cmd.match(/-name\s+["']?([^"'\s]+)["']?/);
    const emptyArg = cmd.includes('-empty');
    const typeArg = cmd.match(/-type\s+(\w)/);

    results.forEach(({ path, content, isDir }) => {
      let show = true;
      if (typeArg && typeArg[1] === 'f' && isDir) show = false;
      if (typeArg && typeArg[1] === 'd' && !isDir) show = false;
      if (nameArg && !path.match(new RegExp(nameArg[1].replace('*', '.*')))) show = false;
      if (sizeArg && typeof content === 'string' && content.length !== parseInt(sizeArg[1])) show = false;
      if (emptyArg && typeof content === 'string' && content.length > 0) show = false;
      if (show) {
        const cls = (typeof content === 'string' && content.includes(ch.password)) ? 'success-line' : 'output-line';
        addTerminalLine(path, cls);
      }
    });
    return;
  }

  if (command === 'grep') {
    const grepMatch = cmd.match(/grep\s+(?:-\w+\s+)*["']?([^"'\s]+)["']?\s+(.+)/);
    if (grepMatch) {
      const pattern = grepMatch[1];
      const file = grepMatch[2].trim();
      const content = findInFS(fs, file);
      if (content && typeof content === 'string') {
        const lines = content.split('\n');
        lines.forEach(line => {
          if (line.toLowerCase().includes(pattern.toLowerCase())) {
            addTerminalLine(line, line.includes(ch.password) ? 'success-line' : 'output-line');
          }
        });
      } else {
        addTerminalLine(`grep: ${file}: No such file or directory`, 'error-line');
      }
    }
    return;
  }

  if (command === 'file') {
    const target = args.replace('./*', 'inhere/*').replace('*', '');
    if (target.endsWith('/') || target.endsWith('/*') || target.includes('*')) {
      const dirPath = target.replace('/*', '').replace('*', '') || '.';
      const dir = navigateFS(fs, dirPath) || fs;
      if (typeof dir === 'object') {
        for (const [name, val] of Object.entries(dir)) {
          if (typeof val === 'string') {
            if (val.startsWith('\x00') || val.startsWith('\x7f') || val.startsWith('\x89') || val.startsWith('\xff') || val.startsWith('\x1f')) {
              addTerminalLine(`${dirPath}/${name}: data`, 'output-line');
            } else {
              addTerminalLine(`${dirPath}/${name}: ASCII text`, 'success-line');
            }
          }
        }
      }
    }
    return;
  }

  if (command === 'strings') {
    const content = findInFS(fs, args);
    if (content && typeof content === 'string') {
      const printable = content.replace(/[^\x20-\x7E\n]/g, '').split('\n').filter(l => l.length > 3);
      printable.forEach(line => {
        addTerminalLine(line, line.includes(ch.password) ? 'success-line' : 'output-line');
      });
    }
    return;
  }

  if (command === 'head' || command === 'tail') {
    const numMatch = cmd.match(/-(?:n\s+)?(\d+)/);
    const num = numMatch ? parseInt(numMatch[1]) : 10;
    const fileName = parts[parts.length - 1];
    const content = findInFS(fs, fileName);
    if (content && typeof content === 'string') {
      const lines = content.split('\n');
      const selected = command === 'head' ? lines.slice(0, num) : lines.slice(-num);
      selected.forEach(line => {
        addTerminalLine(line, line.includes(ch.password) ? 'success-line' : 'output-line');
      });
    }
    return;
  }

  if (command === 'base64') {
    if (args.includes('-d') || args.includes('--decode')) {
      const fileName = parts[parts.length - 1];
      const content = findInFS(fs, fileName);
      if (content) {
        try {
          const decoded = atob(content.trim());
          addTerminalLine(decoded, decoded.includes(ch.password) ? 'success-line' : 'output-line');
        } catch {
          addTerminalLine(ch.password || 'Decoded content', 'success-line');
        }
      }
    }
    return;
  }

  if (command === 'xxd') {
    if (args.includes('-r')) {
      addTerminalLine(ch.password || 'Decoded content', 'success-line');
    } else {
      const fileName = parts[parts.length - 1];
      const content = findInFS(fs, fileName);
      if (content) {
        addTerminalLine(content, 'output-line');
      }
    }
    return;
  }

  if (command === 'sort') {
    const fileName = parts[parts.length - 1];
    const content = findInFS(fs, fileName);
    if (content && typeof content === 'string') {
      let lines = content.split('\n').sort();
      if (args.includes('-u')) {
        lines = [...new Set(lines)];
      }
      lines.forEach(line => {
        addTerminalLine(line, line.includes(ch.password) ? 'success-line' : 'output-line');
      });
      if (cmd.includes('| uniq -u')) {
        const counts = {};
        content.split('\n').forEach(l => counts[l] = (counts[l] || 0) + 1);
        const unique = Object.entries(counts).filter(([, c]) => c === 1).map(([l]) => l);
        addTerminalLine('--- Unique lines ---', 'info-line');
        unique.forEach(l => addTerminalLine(l, 'success-line'));
      }
    }
    return;
  }

  if (command === 'rev') {
    const fileName = parts[parts.length - 1];
    const content = findInFS(fs, fileName);
    if (content) {
      const reversed = content.split('').reverse().join('');
      addTerminalLine(reversed, 'success-line');
    }
    return;
  }

  if (command === 'stat') {
    const results = flattenFS(fs, '.');
    results.forEach(({ path, content }) => {
      if (content && typeof content === 'string' && content.includes('[PERMS:') || content && typeof content === 'string' && content.includes('[MTIME:')) {
        addTerminalLine(`${path}: ${content}`, 'output-line');
      }
    });
    return;
  }

  if (command === 'echo') {
    const output = args.replace(/^["']|["']$/g, '');
    addTerminalLine(output, output.includes(ch.password) ? 'success-line' : 'output-line');
    return;
  }

  if (command === 'sqlite3' || command === 'openssl' || command === 'dig' || command === 'nslookup' || command === 'zcat' || command === 'gunzip' || command === 'getfattr' || command === 'md5sum' || command === 'sha256sum' || command === 'printf') {
    // Simulate by showing the password
    addTerminalLine(`Output: ${ch.password}`, 'success-line');
    return;
  }

  // Generic fallback
  addTerminalLine(`Executing: ${cmd}`, 'output-line');
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

// ---- Filesystem Helpers ----
function navigateFS(fs, path) {
  const parts = path.replace(/^\.\//, '').split('/').filter(Boolean);
  let current = fs;
  for (const part of parts) {
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

function findInFS(fs, path) {
  const cleanPath = path.replace(/^\.\//, '').replace(/['"]/g, '');
  // Direct lookup
  if (fs[cleanPath] !== undefined) return fs[cleanPath];
  // Navigate path
  return navigateFS(fs, cleanPath);
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
  return `<span class="terminal-prompt-user">${cfg.terminalPrompt}</span><span class="terminal-prompt-at">@</span><span class="terminal-prompt-host">challenge</span><span class="terminal-prompt-path">:~/level${level}</span><span class="terminal-prompt-dollar">$</span>`;
}

function updatePrompt(category) {
  const cfg = CATEGORY_CONFIG[category || state.currentCategory];
  DOM.terminalTitle.textContent = `${cfg.terminalPrompt}@challenge:~$`;
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
  if (
    !e.target.closest('.sidebar') && 
    !e.target.closest('.btn') && 
    !e.target.closest('.success-overlay') && 
    !e.target.closest('.sidebar-backdrop') &&
    !e.target.closest('.auth-overlay') &&
    !e.target.closest('.auth-card') &&
    !e.target.closest('.bandit-unlock-panel')
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
