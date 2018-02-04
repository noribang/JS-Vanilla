/***************/
/* Version 8 */
/***************/
// V8 Requirements
// 1. It should have working controls for .addTodo
// 2. It should have working controls for .changeTodo
// 3. It should have working controls for .deleteTodo
// 4. It should have working controls for .toggleCompleted
var todoList = {
		todos: [],
		displayTodos: function() {
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
			this.todos.push({
				todoText: todoText,
				completed: false
			});
			this.displayTodos();
		},
		changeTodo: function(position, todoText) {
			// this.todos[position] = newValue;
			this.todos[position].todoText = todoText;
			this.displayTodos();
		},
		deleteTodo: function(position) {
			this.todos.splice(position, 1);
			this.displayTodos();
		},
		toggleCompleted: function(position) {
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			this.displayTodos();
		},
		toggleAll: function() {
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

/*
 * A) Original Display Todos and Toggle All buttons code.
*/
// // 1. Get access to the Display Todos button.
// var displayTodosButton = document.getElementById("displayTodosButton");
// console.log(displayTodosButton);
// // 2. Get access to Toggle All button.
// var toggleAllButton = document.getElementById("toggleAllButton");
// console.log(toggleAllButton);
// // 1a. Run displayTodos method, when someone 
// // clicks the Display Todos button.
// // var displayTo = document.getElementById("displayTo").innerHTML;
// displayTodosButton.addEventListener('click', function() {
// 	todoList.displayTodos();
// 	// displayTo = todoList.displayTodos();
// });
// // 2a. Run toggleAll method, when someone clicks the Toggle All button.
// toggleAllButton.addEventListener('click', function() {
// 	todoList.toggleAll();
// });
/*
 * B) Refactored Display Todos and Toggle All buttons code.
*/
var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	// 1. It should have working controls for .addTodo
	addTodo: function() {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	// 2. It should have working controls for .changeTodo
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);		
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
	},
	// 3. It should have working controls for .deleteTodo
	deleteTodo: function() {
		// Access input element by id.
		var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		// Call delete Todo method and pass it input value as number.
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		// Clear out user input from input element.
		deleteTodoPositionInput.value = "";
	},
	// 4. It should have working controls for .toggleCompleted
	toggleCompleted: function() {
		// Access input by id.
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		// Call toggle completed method and pass it input value as number.
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		// Clear out user input from input.
		toggleCompletedPositionInput.value = "";
	},
	toggleAll: function() {
	todoList.toggleAll();
	}		
};


