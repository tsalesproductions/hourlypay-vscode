const vscode = require('vscode');

let startTime;
let interval;
let totalTimeInSeconds = 0;
let isRunning = false;

// Função para iniciar o cronômetro
function startTimer() {
  if (!isRunning) {
    startTime = Date.now();
    isRunning = true;
    interval = setInterval(() => {
      totalTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
      updateDisplay();
    }, 1000);
  }
}

// Função para parar o cronômetro
function stopTimer() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  }
}

// Função para atualizar o display
function updateDisplay() {
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = totalTimeInSeconds % 60;
  const formattedTime = `${hours > 9 ? hours : "0"+hours}:${minutes > 9 ? minutes : "0"+minutes}:${seconds > 9 ? seconds : "0"+seconds}`;

  const hourlyRate = vscode.workspace.getConfiguration().get('hourlyPay.hourlyRate');
  const userCurrency = vscode.workspace.getConfiguration().get('hourlyPay.currency');
  const cost = (totalTimeInSeconds / 3600) * hourlyRate;

  // Exibir na barra de status
  vscode.window.setStatusBarMessage(`Time: ${formattedTime} | Price: ${userCurrency}${cost.toFixed(2)}`);
}

function resetTimer(){
	totalTimeInSeconds = 0;
	updateDisplay();
}

// Função para ativar a extensão
function activate(context) {
  const startCommand = vscode.commands.registerCommand('hourly-pay.startTimer', () => {
    startTimer();
  });

  const stopCommand = vscode.commands.registerCommand('hourly-pay.stopTimer', () => {
    stopTimer();
  });

  const resetCommand = vscode.commands.registerCommand('hourly-pay.resetTimer', () => {
	resetTimer();
  });

  context.subscriptions.push(startCommand, stopCommand);
}

// Função que é chamada quando a extensão é desativada
function deactivate() {
  if (isRunning) {
    clearInterval(interval);
  }
}

module.exports = {
  activate,
  deactivate
};
