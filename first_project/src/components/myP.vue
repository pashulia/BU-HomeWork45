<template>
    <h4>
        Welcome to BU!
    </h4>
    <h5>
        {{ text }}
    </h5>
</template>

<script>
export default {
        props: {
            text: {
                type: String,
                required: true,
            },
        },
        name: "MyP"
    }
</script>

<style scoped>
    p {
        font-size: 16px;
    }
</style>
