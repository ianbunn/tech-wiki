<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <br>
                <p>Another Counter</p>
                <app-another-counter></app-another-counter>
                <hr>

                <label>
                    <input type="text" v-model="value" @input="changeValue">
                </label>
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters.value
                },
                set() {
                    this.$store.dispatch('updateValue')
                }
            }
        },
        methods: {
            changeValue(event){
                this.$store.dispatch('updateValue', event.target.value)
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter
        }
    }
</script>

