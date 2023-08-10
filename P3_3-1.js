const todoList = require('./P3_3.js');
console.log('21012011072_Divy Patel');

todoList.addTask('To do homework');
todoList.addTask('Go for playing cricket');
todoList.addTask('Go for sleep');

const tasks = todoList.listTasks();

console.log(`All tasks : ${tasks}`);

todoList.removeTask();

console.log('---------------After removing tasks---------------');
console.log(`Current tasks : ${tasks}`);