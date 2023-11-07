const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const qaPairs = [
  {
    question: 'What is 2 + 3?',
    answer: '2 + 3 equals 5.'
  },
  {
    question: 'What is the date today?',
    answer: 'Not sure, but we are in the year 2023'
  },
  {
    question: 'Who created you?',
    answer: 'Muath Ali Alabeedi'
  },
  {
    question: 'Am I alone?',
    answer: 'Could be, look around :)'
  },
  {
    question: 'Exit',
    answer: 'Goodbye!'
  }
];
function chat() {
  rl.question('User: ', userInput => {
    const exitCommand = ['exit', 'quit'];
    if (exitCommand.includes(userInput.toLowerCase())) {
      console.log('Chatbot: Goodbye!');
      rl.close();
      return;
    }
    const qa = qaPairs.find(qaPair => qaPair.question.toLowerCase() === userInput.toLowerCase());
    if (qa) {
      console.log('Chatbot:', qa.answer);
    } else {
      console.log('Chatbot: Sorry, I don\'t understand. Can you please rephrase your question?');
    }
    chat();
  });
}
console.log('Chatbot: Hello! How can I assist you today?');
chat();