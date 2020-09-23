<template>
    <div>
        <p>The new quote!</p>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('destroyed')
        },
        deactivated() {
            console.log('deactivated')
        },
        activated() {
            console.log('activated')
        }
    }
</script>

<style>

</style>