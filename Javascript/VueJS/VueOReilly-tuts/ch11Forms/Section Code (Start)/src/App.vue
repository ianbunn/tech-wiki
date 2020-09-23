<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="user.password"
                        >
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="user.age"
                        >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="user.message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="user.sendMail"
                            > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="user.sendMail"
                            > Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="user.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="user.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority"
                    >
                        <option
                                v-for="priority in priorities"
                        >{{ priority }}</option>
                    </select>
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm"
                    >Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitStatus">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Age: {{ user.age }}</p>
                        <p style="white-space: pre">Message: {{ user.message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in user.sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ user.gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched:  {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './components/Switch.vue'
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    age: 27,
                    message: 'This is a message.',
                    sendMail: [],
                    gender: 'Male',
                },
                priorities: [
                    'High',
                    'Medium',
                    'Low'
                ],
                selectedPriority: 'Low',
                dataSwitch: true,
                submitStatus: false
            }
        },
        methods: {
            submitForm() {
                this.submitStatus = true
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
