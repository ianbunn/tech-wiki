<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <button @click="selectedComponent = 'appQuote'">Quote</button>
               <button @click="selectedComponent = 'appAuthor'">Author</button>
               <button @click="selectedComponent = 'appNew'">New</button>
               <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="title">title</h2>
                        <p>Default content</p>
                    </component>
                </keep-alive>
<!--               <app-quote>-->
<!--                   <h2 slot="title">{{ quoteTitle }}</h2>-->
<!--                   <p slot="subtitle">{{ subtitle }}</p>-->
<!--                   <p>{{ quote }}</p>-->
<!--               </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data() {
            return {
                quoteTitle: "The Title of the Quote",
                quote: "If you ain't first, you're last, puto",
                subtitle: "Soy el subtitulo, cabrones",
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style scoped>
</style>
