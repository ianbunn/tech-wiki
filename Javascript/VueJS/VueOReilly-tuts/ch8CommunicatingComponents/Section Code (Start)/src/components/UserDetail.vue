<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetNameByLocal">Reset my name using local method</button>
        <br><br>
        <button @click="resetFn">Reset my name using props method</button>
    </div>
</template>

<script>
    import { eventBus} from "../main";

    export default {
        props: {
            name: {
                type: String,
                default: 'Ian'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("")
            },
            resetNameByLocal() {
                this.name = 'Dick';
                this.$emit('nameWasReset', this.name)
            }
        },
        created() {
            eventBus.$on('ageEdited', (data)=> {
                this.userAge = data
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
