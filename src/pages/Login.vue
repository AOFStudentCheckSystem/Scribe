<template>
    <div class="login-parent vert-parent">
        <div class="align-vertical">
            <div class="ms-title">Scribe Login</div>
            <div class="ms-login">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password"
                                  @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .vert-parent {
        padding: 5% 0;
        margin: auto;
    }

    .login-parent {
        max-width: 320px;
    }

    .align-vertical {
        padding: 10% 0;
    }

    .ms-title {
        text-align: center;
        font-size: 20pt;
        font-weight: bold;
        margin-bottom: 1em;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }
</style>
<script>
    export default {
        name: 'Login',
        data () {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: 'username required',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: 'password required',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            submitForm (formName) {
                const self = this
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        // TODO: Login
//                        this.$store.dispatch('authenticate', {
//                            username: self.ruleForm.username,
//                            password: self.ruleForm.password,
//                            callback: (result) => {
//                                console.log(result)
//                                if (result.success) {
//                                    this.$router.push('/')
//                                }
//                            }
//                        })
                    } else {
                        return false
                    }
                })
            }
        }

    }
</script>
