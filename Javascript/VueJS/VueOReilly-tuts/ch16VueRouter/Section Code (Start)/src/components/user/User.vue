<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-success">Go to Home</button>
        <hr>

        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' }) // Could also pass an object for dynamic links
            }
        }
    }
</script>