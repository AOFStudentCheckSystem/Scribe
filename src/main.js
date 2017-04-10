// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import storeOptions from './vuex/store'
import Router from 'vue-router'
import routerOptions from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

export const http = axios.create({
    baseURL: `http://hn2.guardiantech.com.cn:10493/`,
    headers: {
        Authorization: ''
    },
    transformRequest: [data => {
        // Vue.$Loading.start()
        return data ? Object.keys(data).map(key => {
            return {key: key, value: data[key]}
        }).reduce((formData, entry) => {
            formData.append(entry.key, entry.value)
            return formData
        }, new FormData()) : data
    }
    ],
    transformResponse: [function (data) {
        // Vue.$Loading.finish()
        return JSON.parse(data)
    }]
})

Vue.use(VueAxios, http)

Vue.use(Vuex)
const store = new Vuex.Store(storeOptions)

Vue.use(Router)
const router = new Router(routerOptions)

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

