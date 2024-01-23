console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp ({
    name: "ToDoList",
    data () {
        return {
            todos,
        }
    },
    methods: {
        toggleClass(i) {
            this.todos[i].done = !this.todos[i].done;
        },
        // deleteText () {
        //     this.todos.filter()
        // }
    }
})

app.mount("#root");