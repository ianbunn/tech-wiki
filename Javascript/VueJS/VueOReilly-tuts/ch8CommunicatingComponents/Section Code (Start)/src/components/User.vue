<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p :name="name">Name is {{ name }}</p>
        <p :age="age">User Age: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :name="name"
                        @nameWasReset="name = $event"
                        :resetFn="resetName"
                        :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        @ageEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import {eventBus} from "../main";

    export default {
        data() {
            return {
                name: "Ian",
                age: 27
            }
        },
        methods: {
            changeName() {
                return this.name = "irb___"
            },
            resetName() {
                this.name = 'Parent name reset name'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        created() {
            eventBus.$on('ageEdited', (data)=> {
                this.age = data
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
