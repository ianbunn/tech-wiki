<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <label>
            <input v-model="filterText">
        </label>
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin";

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('inside list created hook')
        }
    }
</script>

<style>

</style>
