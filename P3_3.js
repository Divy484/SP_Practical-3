const tasks = [];
exports.addTask = function(task) {
    tasks.push(task);
}
exports.removeTask = function() {
    tasks.pop();
}
exports.listTasks = function() {
    return tasks;
}