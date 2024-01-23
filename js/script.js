console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp ({
    name: "ToDoList",
    data () {
        return {
            todos,
            newTodo: "",
        }
    },
    methods: {
        toggleClass(i) {
            this.todos[i].done = !this.todos[i].done;
        },
        deleteText (id) {
            this.todos = this.todos.filter(todo => id !== todo.id)
        },
        addTodo () {
            if(!this.newTodo.trim()){
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
        onSubmit(e) {
            e.preventDefault();
        }
    }
})

app.mount("#root");