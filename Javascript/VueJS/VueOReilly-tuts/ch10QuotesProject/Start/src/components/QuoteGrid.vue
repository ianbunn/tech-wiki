<template>
    <div class="row">
        <app-quote v-for="(quote, i) in quotes" @click.native="deleteQuote(i)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    export default {
        props: {
            quotes: Array
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index)
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style scoped>
</style>