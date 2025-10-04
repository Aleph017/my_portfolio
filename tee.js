//unfortunately I'm not that clever so this terminal emulator emulator
//was written by ChatGPT :c

    const terminal = document.getElementById('cli');
    const promptText = '[usr@portfolio ~]$ ';

    // Available commands
    const commands = {
      ls: () => './apiframe\n./shelf',
      help: () => 'Available commands: ls, help, clear, exit',
      exit: () => 'There\'s no escape.',
      clear: () => {
        terminal.innerHTML = '';
        return '';
      },
    };

    function createPrompt() {
      const line = document.createElement('div');
      const label = document.createElement('span');
      const input = document.createElement('input');

      label.textContent = promptText;
      input.type = 'text';
      input.autofocus = false;

      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          const userInput = input.value.trim();
          input.disabled = true;

          // Evaluate command
          let output = commands[userInput] ? commands[userInput]() : `${userInput}: command not found`;

          // Append output if exists
          if (output) {
            const outputDiv = document.createElement('div');
            outputDiv.textContent = output;
            terminal.appendChild(outputDiv);
          }

          // Recreate prompt
          createPrompt();
        }
      });

      line.appendChild(label);
      line.appendChild(input);
      terminal.appendChild(line);
      //input.focus();
    }

    // Start the terminal
    createPrompt();
