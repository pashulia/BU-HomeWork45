<template>
    <MyP :text="message"/>
    <MyInput @newMessage="updateMessage"/>
</template>

<script>
export default {
    data() {
        return {
            message: "Login",
        }
    },
    methods: {
        updateMessage(eventData) {
            this.message = eventData
        },
    }
  }
</script>

<style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
  }
</style>
