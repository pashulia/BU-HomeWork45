<template>
    <p>
        <input 
        v-model="name" 
        placeholder="name"
        type="text"
    >
    </p>
    <p>
        <input 
        v-model="phone" 
        placeholder="phone"
        type="text"
    >
    </p>
    <p>
        <input 
        v-model="email" 
        placeholder="email"
        type="text"
    >
    </p>
    <p>
        <input 
        v-model="password" 
        placeholder="password"
        type="text"
    >
    </p>
    
    <button @click="inputMessage">login</button>
</template>

<script>
export default {
        data() {
            return {
                name: "",
                phone: "",
                email: "",
                password: "",
            }
        },
        methods: {
            inputMessage() {
                this.$emit("newMessage", "name: " + this.name + ", phone: " +this.phone + ", email: " +this.email + ", password " + this.password.replace(/[\s\S]/g, "*"));
                this.name = "";
                this.phone = "";
                this.email = "";
                this.password = "";
            },
        },
        name: "MyInput"
    }
</script>

<style scoped>
    input {
        border: 1px solid black;
        border-radius: 4px;
        padding: 5px;
    }
    button {
        background-color: rgb(12, 230, 77);
        border-radius: 4px;
        width: 190px;
    }
</style>
