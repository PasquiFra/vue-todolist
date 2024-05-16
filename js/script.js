console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp({
    name: "ToDoList",
    data() {
        return {
            todos,
            newTodo: "",
        }
    },
    methods: {
        // toggle da fare/fatto
        toggleClass(i) {
            this.todos[i].done = !this.todos[i].done;
        },
        //delete task
        deleteText(id) {
            this.todos = this.todos.filter(todo => id !== todo.id)
        },
        //add task function
        addTodo() {
            if (!this.newTodo.trim()) {
                return
            }
            const newTodo = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTodo,
            }
            this.todos.push(newTodo);
            this.newTodo = "";
            console.table(todos)
        },
        //prevent default form
        onSubmit(e) {
            e.preventDefault();
        }
    }
})

app.mount("#root");