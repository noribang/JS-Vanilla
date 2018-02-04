/***************/
/* Version 9 */
/***************/
var todoList = {
		todos: [],
		/* 
		 * Displays todos in console. 
		*/
		// displayTodos: function() {
		// 	if (this.todos.length === 0) {
		// 		console.log("Your todo list is empty!")
		// 		// document.getElementById("displayTo").innerHTML = "Your todo list is empty!";
		// 	} else {
		// 		console.log('My todos: ');
		// 		for (var i = 0; i < this.todos.length; i++) {
		// 		// check if .completed is true
		// 		if (this.todos[i].completed === true) {
		// 			// print with (x)
		// 			console.log('(x)', this.todos[i].todoText);
		// 			// document.getElementById("displayTo").innerHTML = '(x)'+this.todos[i].todoText;
		// 		}
		// 		else
		// 			console.log('( )', this.todos[i].todoText);
		// 			// document.getElementById("displayTo").innerHTML = '( )'+this.todos[i].todoText;
		// 		}
		// 	}
		// },
		addTodo: function(todoText) {
			this.todos.push({
				todoText: todoText,
				completed: false
			});
			// this.displayTodos();
		},
		changeTodo: function(position, todoText) {
			// this.todos[position] = newValue;
			this.todos[position].todoText = todoText;
			// this.displayTodos();
		},
		deleteTodo: function(position) {
			this.todos.splice(position, 1);
			// this.displayTodos();
		},
		toggleCompleted: function(position) {
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			// this.displayTodos();
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
			// this.displayTodos();	
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
 *    Methods for onclick handler inside each button element in DOM.
*/
var handlers = {
	// displayTodos: function() {
	// 	todoList.displayTodos();
	// },
	// 1. It should have working controls for .addTodo
	addTodo: function() {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		// Renders todos on html for any changes made.
		view.displayTodos();
	},
	// 2. It should have working controls for .changeTodo
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);		
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		// Renders todos on html for any changes made.
		view.displayTodos();
	},
	// 3. It should have working controls for .deleteTodo
	deleteTodo: function() {
		// Access input element by id.
		var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		// Call delete Todo method and pass it input value as number.
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		// Clear out user input from input element.
		deleteTodoPositionInput.value = "";
		// Renders todos on html for any changes made.
		view.displayTodos();
	},
	// 4. It should have working controls for .toggleCompleted
	toggleCompleted: function() {
		// Access input by id.
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		// Call toggle completed method and pass it input value as number.
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		// Clear out user input from input.
		toggleCompletedPositionInput.value = "";
		// Renders todos on html for any changes made.
		view.displayTodos();
	},
	toggleAll: function() {
	todoList.toggleAll();
	// Renders todos on html for any changes made.
	view.displayTodos();
	}		
};

/*
* Object to render todos data on html.
*/
// V9 Requirements
// 1. There should be an li element for every todo.
// 2. Each li element should contain .todoText.
// 3. Each li element should show .completed.
var view = {
	displayTodos: function() {
		// Access ul element in the html.
		var todosUl = document.querySelector('ul');
		// Clear ul before running loop in order not 
		// to keep adding same todos again.
		todosUl.innerHTML = "";
		// Loop through the todos array.
		for (var i = 0; i < todoList.todos.length; i++) {
			// Create li element.
			var todoLi = document.createElement('li');
			// Object element of todoList array.
			var todo = todoList.todos[i];
			// Variable that will hold todoText content and either 
			// completed or not completed.
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			}
			else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}
			// Created li will show whether completed or not completed.
			todoLi.textContent = todoTextWithCompletion;
			// Comment for code below: Add .todoText property content to each li.
			// Code was improved(see above): todoLi.textContent = todoList.todos[i].todoText;
			// Append li element as a child of ul element already in html.
			todosUl.appendChild(todoLi);
		}

	}
};