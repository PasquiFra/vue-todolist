console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp ({
    name: "ToDoList",
    data () {
        return {
            message: "Questo messaggio è stato scritto su Javascript"
        }
    },
    /*methods: {
    
    }*/
})

app.mount("#root");