/***************/
/* Version 7 */
/***************/
// V7 Requirements
// 1. There should be a "Display todos" button and a "Toggle all" button in the app.
// 2. Clicking "Display todos" should run todoList.displayTodos.
// 3. Clicking "Toggle all" should run todoList.toggleAll.
var todoList = {
		todos: [],
		displayTodos: function() {
			// debugger;
			if (this.todos.length === 0) {
				console.log("Your todo list is empty!")
				// document.getElementById("displayTo").innerHTML = "Your todo list is empty!";
			} else {
				console.log('My todos: ');
				for (var i = 0; i < this.todos.length; i++) {
				// check if .completed is true
				if (this.todos[i].completed === true) {
					// print with (x)
					console.log('(x)', this.todos[i].todoText);
					// document.getElementById("displayTo").innerHTML = '(x)'+this.todos[i].todoText;
				}
				else
					console.log('( )', this.todos[i].todoText);
					// document.getElementById("displayTo").innerHTML = '( )'+this.todos[i].todoText;
				}
			}
		},
		addTodo: function(todoText) {
			// debugger;
			this.todos.push({
				todoText: todoText,
				completed: false
			});
			this.displayTodos();
		},
		changeTodo: function(position, todoText) {
			debugger;
			// this.todos[position] = newValue;
			this.todos[position].todoText = todoText;
			this.displayTodos();
		},
		deleteTodo: function(position) {
			debugger;
			this.todos.splice(position, 1);
			this.displayTodos();
		},
		toggleCompleted: function(position) {
			debugger;
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			this.displayTodos();
		},
		toggleAll: function() {
			debugger;
			var totalTodos = this.todos.length;
			var completedTodos = 0;
			// Get number of completed todos.
			for (var i = 0; i < totalTodos; i++) {
				if (this.todos[i].completed === true) {
					completedTodos++;
				}
			}
			// Case 1: .toggleAll: If everything is true, make everything false.
			if (completedTodos === totalTodos) {
				for (var i = 0; i < totalTodos; i++ ) {
					this.todos[i].completed = false;
				}
			// Case 2: .toggleAll: Otherwise, make everything true.
			} else {
				for (var i = 0; i < totalTodos; i++) {
					this.todos[i].completed = true;
				}
			}
			// Display all todos.
			this.displayTodos();	
		}
	}


// 1. Get access to the Display Todos button.
var displayTodosButton = document.getElementById("displayTodosButton");
console.log(displayTodosButton);
// 2. Get access to Toggle All button.
var toggleAllButton = document.getElementById("toggleAllButton");
console.log(toggleAllButton);
// 1a. Run displayTodos method, when someone 
// clicks the Display Todos button.
// var displayTo = document.getElementById("displayTo").innerHTML;
displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
	// displayTo = todoList.displayTodos();
});
// 2a. Run toggleAll method, when someone clicks the Toggle All button.
toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});


