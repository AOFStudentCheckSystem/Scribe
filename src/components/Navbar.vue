<template>
    <Menu mode="horizontal" :theme="dark" active-name="user">
        <Menu-item name="login">
            Login
        </Menu-item>
        <Menu-item name="login">
            Register
        </Menu-item>
        <Submenu name="user">
            <template slot="title">
                用户
            </template>
            <Menu-group title="">
                <Menu-item name="3-1">新增和启动</Menu-item>
            </Menu-group>
        </Submenu>
        <Menu-item name="4">
            <Icon type="settings"></Icon>
            综合设置
        </Menu-item>
    </Menu>
</template>

<style scoped>

</style>

<script>
    export default {
        name: 'Navbar',
        methods: {
            navbarSelect () {}
        },
        data () {
            return {
                isFullScreen: false
            }
        }
    }
</script>
