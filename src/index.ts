import Vue from 'vue';
import App from './App.vue';

import "./theme/index.scss";
import './icon/iconfont.css';

let vm = new Vue({
    el: "#root",
    render: h => h(App)
});
