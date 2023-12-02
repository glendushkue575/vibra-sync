/* filename: complexCode.js */

// This code is a complex implementation of a todo list application with various features and functionalities.

// ******************** Common Functions ********************

// Function to get current date and time
function getCurrentDateTime() {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    return `${date} ${time}`;
}

// Function to display a welcome message
function displayWelcomeMessage() {
    console.log("Welcome to the Todo List Application!");
    console.log("=====================================");
    console.log("Enter 'help' to see the list of available commands.");
    console.log("=====================================");
}

// Function to display a help message
function displayHelpMessage() {
    console.log("Available Commands:");
    console.log("===================");

    console.log("1. add <task>: Add a task to the todo list");
    console.log("2. list: Display all tasks in the todo list");
    console.log("3. complete <index>: Mark a task as complete");
    console.log("4. delete <index>: Remove a task from the todo list");
    console.log("5. clear: Clear the entire todo list");
    console.log("6. help: Display the list of available commands");
    console.log("7. exit: Exit the application");
    console.log("");
}

// ******************** Todo List Functionality ********************

// TodoList class
class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            task,
            created: getCurrentDateTime(),
            completed: false
        });

        console.log(`Task "${task}" added successfully.`);
    }

    listTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks found in the todo list.");
        } else {
            console.log("Tasks in the todo list:");
            console.log("=======================");
            this.tasks.forEach((task, index) => {
                const status = task.completed ? " (✓)" : " (✗)";
                console.log(`${index + 1}. ${task.task} - Created: ${task.created} - Completed: ${status}`);
            });
        }
    }

    completeTask(index) {
        if (index < 1 || index > this.tasks.length) {
            console.log("Invalid index. Please provide a valid task index.");
            return;
        }

        const task = this.tasks[index - 1];

        if (task.completed) {
            console.log(`Task "${task.task}" is already marked as completed.`);
        } else {
            task.completed = true;
            console.log(`Task "${task.task}" marked as completed.`);
        }
    }

    deleteTask(index) {
        if (index < 1 || index > this.tasks.length) {
            console.log("Invalid index. Please provide a valid task index.");
            return;
        }

        const task = this.tasks[index - 1];
        this.tasks.splice(index - 1, 1);

        console.log(`Task "${task.task}" removed successfully.`);
    }

    clearTasks() {
        this.tasks = [];

        console.log("All tasks cleared successfully.");
    }
}

// ******************** Application Setup ********************

// Create an instance of TodoList
const todoList = new TodoList();

// Display welcome message
displayWelcomeMessage();

// ******************** Command Line Interface ********************

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [command, ...args] = line.split(' ');

    switch (command.toLowerCase()) {
        case 'add':
            todoList.addTask(args.join(' '));
            break;
        case 'list':
            todoList.listTasks();
            break;
        case 'complete':
            todoList.completeTask(parseInt(args[0]));
            break;
        case 'delete':
            todoList.deleteTask(parseInt(args[0]));
            break;
        case 'clear':
            todoList.clearTasks();
            break;
        case 'help':
            displayHelpMessage();
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log("Invalid command. Enter 'help' to see the list of available commands.");
            break;
    }
});

rl.on('close', () => {
    console.log("Goodbye!");
    process.exit(0);
});

// Display help message initially
displayHelpMessage();