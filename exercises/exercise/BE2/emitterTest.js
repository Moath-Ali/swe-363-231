const customEmitter = require('./eventEmitter');
function simulateUserLogin() {
  const userId = Math.floor(Math.random() * 10) + 1;
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}
customEmitter.on('userLoggedIn', simulateUserLogin);
customEmitter.on('userLoggedOut', () => {
  console.log('A user logged out');
});
setInterval(() => {
  customEmitter.emit('userLoggedIn');
}, Math.random() * (2000 - 100) + 100);
setTimeout(() => {
  customEmitter.emit('userLoggedOut');
}, 5000);