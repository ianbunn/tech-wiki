<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>