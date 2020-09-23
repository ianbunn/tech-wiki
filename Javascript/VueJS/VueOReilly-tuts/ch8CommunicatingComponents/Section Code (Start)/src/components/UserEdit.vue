<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age locally</button>
        <button @click="editAgeAll">Edit Age globally</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                return this.userAge = 30
            },
            editAgeAll() {
                this.userAge = 32;
                // return this.$emit('ageEdited', this.userAge)
                // return eventBus.$emit('ageEdited', this.userAge)
                return eventBus.changeAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
