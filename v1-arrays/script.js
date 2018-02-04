/***************/
/* Version 1 */
/***************/
// 1. It should have a place to store todos.
var todos = ["item 1", "item 2", "item 3"];
// 2. It should have a way to display todos.
console.log('My todos: ', todos, ' is an array.');
// 3. It should have a way to add new todos.
// .push() pushes new item to the end of array.
todos.push('item 4');
todos.push('item 5');
// 4. It should have a way to change/ update a todo.
todos[0] = 'item 1 updated';
todos[2] = 'item 3 updated';
// 5. It should have a way to delete a todo.
todos.splice(start element index, number of elements to delete);
// e.g.
todos.splice(0,1);
["item 1 updated"]

todos.splice(2,1);
["item 3 updated"]

todos.splice(1,2);
(2) ["item 2", "item 4"]


/***************/
/* Version 2 */
/***************/
// V2 Requirements
// 1. It should have a function to display todos.
// 2. It should have a function to add todos.
// 3. It should have a function to change todos.
// 4. It should have a function to delete todos.

// Store todos in an array.
var todos = ['item 1', 'item 2', 'item 3'];
// 1. It should have a function to display todos.
function displayTodos() {
	console.log('My todos: ', todos);
}
displayTodos();
// 2. It should have a function to add todos.

// function addTodo() {
// 	todos.push("new todo");
// 	displayTodos();
// }

// Customize function by adding parameter.
function addTodo(todo) {
	todos.push(todo);
	// Calling function inside of function
	displayTodos();
}
// Call function.
addTodo('add me');

// 3. It should have a function to change todos.
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}
changeTodo(0, 'new item');

// 4. It should have a function to delete todos.
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
deleteTodo(0);

/***************/
/* Version 3 */
/***************/
// V3 Requirements
// 1. It should store the todos array on an object.
// 2. It should have a displayTodos method.
// 3. It should have a addTodo method.
// 4. It should have a changeTodo method.
// 5. It should have a deleteTodo method.

// Object example
var gordon = {
	name: 'Gordon',
	sayName: function() {
		console.log(this);
	}
}

// 1. It should store the todos array on an object.
var todoList = {
		todos: ['item 1', 'item 2', 'item 3']
	}
// 2. It should have a displayTodos method.
var todoList = {
		todos: ['item 1', 'item 2', 'item 3'],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
		}
	}
// 3. It should have a addTodo method.
var todoList = {
		todos: ['item 1', 'item 2', 'item 3'],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
		},
		addTodo: function(todo) {
			this.todos.push(todo);
			this.displayTodos();
		}
	}
// 4. It should have a changeTodo method.
var todoList = {
		todos: ['item 1', 'item 2', 'item 3'],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
		},
		addTodo: function(todo) {
			this.todos.push(todo);
			this.displayTodos();
		},
		changeTodo: function(position, newValue) {
			this.todos[position] = newValue;
			this.displayTodos();
		}
	}
// 5. It should have a deleteTodo method.
var todoList = {
		todos: ['item 1', 'item 2', 'item 3'],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
		},
		addTodo: function(todo) {
			this.todos.push(todo);
			this.displayTodos();
		},
		changeTodo: function(position, newValue) {
			this.todos[position] = newValue;
			this.displayTodos();
		},
		deleteTodo: function(position) {
			this.todos.splice(position, 1);
			this.displayTodos();
		}
	}


/***************/
/* Version 4 */
/***************/
// V4 Requirements
// 1. todoList.addTodo should add objects.
// 2. todoList.changeTodo should change the todoText property.
// 3. todoList.toggleCompleted should change the completed property.

// 1. todoList.addTodo should add objects.
var todoList = {
		todos: [],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
		},
		addTodo: function(todoText) {
			this.todos.push({
				todoText: todoText,
				completed: false
			});
			this.displayTodos();
		},
		changeTodo: function(position, newValue) {
			this.todos[position] = newValue;
			this.displayTodos();
		},
		deleteTodo: function(position) {
			this.todos.splice(position, 1);
			this.displayTodos();
		}
	}
// 2. todoList.changeTodo should change the todoText property.
var todoList = {
		todos: [],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
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
		}
	}
// 3. todoList.toggleCompleted should change the completed property.
var todoList = {
		todos: [],
		displayTodos: function() {
			console.log('My todos: ', this.todos);
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
		}
	}

/***************/
/* Version 5 */
/***************/
// 1. .displayTodos should show .todoText.
// 2. .displayTodos should tell you if .todos is empty.
// 3. .displayTodos should show .completed.

// 1. .displayTodos should show .todoText.
var todoList = {
		todos: [],
		displayTodos: function() {
			// console.log('My todos: ', this.todos);
			console.log('My todos: ');
			for (var i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
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
		}
	}
// 2. .displayTodos should tell you if .todos is empty.
var todoList = {
		todos: [],
		displayTodos: function() {
			if (this.todos.length === 0) {
				console.log("Your todo list is empty!");
			} else {
				console.log('My todos: ');
				for (var i = 0; i < this.todos.length; i++) {
					console.log(this.todos[i].todoText);
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
		}
	}
// 3. .displayTodos should show .completed.
var todoList = {
		todos: [],
		displayTodos: function() {
			if (this.todos.length === 0) {
				console.log("Your todo list is empty!");
			} else {
				console.log('My todos: ');
				for (var i = 0; i < this.todos.length; i++) {
				// check if .completed is true
				if (this.todos[i].completed === true) {
					// print with (x)
					console.log('(x)', this.todos[i].todoText);
				}
				else
					console.log('( )', this.todos[i].todoText);
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
		}
	}

/***************/
/* Version 6 */
/***************/
// V6 Requirements
// 1. .toggleAll: If everything is true, make everything false.
// 2. .toggleAll: Otherwise, make everything true.

// 1. .toggleAll: If everything is true, make everything false.
var todoList = {
		todos: [],
		displayTodos: function() {
			if (this.todos.length === 0) {
				console.log("Your todo list is empty!");
			} else {
				console.log('My todos: ');
				for (var i = 0; i < this.todos.length; i++) {
				// check if .completed is true
				if (this.todos[i].completed === true) {
					// print with (x)
					console.log('(x)', this.todos[i].todoText);
				}
				else
					console.log('( )', this.todos[i].todoText);
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
			}
			// Display all todos.
			this.displayTodos();	
		}
	}

// 2. .toggleAll: Otherwise, make everything true.
var todoList = {
		todos: [],
		displayTodos: function() {
			if (this.todos.length === 0) {
				console.log("Your todo list is empty!");
			} else {
				console.log('My todos: ');
				for (var i = 0; i < this.todos.length; i++) {
				// check if .completed is true
				if (this.todos[i].completed === true) {
					// print with (x)
					console.log('(x)', this.todos[i].todoText);
				}
				else
					console.log('( )', this.todos[i].todoText);
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