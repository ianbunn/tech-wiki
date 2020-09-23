<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm12 text-center">
                <div class="alert alert-info">Info: click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import QuoteGrid from "./components/QuoteGrid.vue";
    import NewQuote from "./components/NewQuote.vue";

    export default {
        data() {
            return {
                quotes: [
                    'Test quote!'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(newQuote) {
                if(this.quotes.length >= 10) {
                    return alert('Delete old quotes first! Limit 10!')
                }
                this.quotes.push(newQuote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
