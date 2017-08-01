import Router from 'vue-router';

// import Views
import Home from '../views/Home.vue';
import Hello from '../views/Hello.vue';

Vue.use(Router);

// define router, then export
export default new Router({
    mode: 'abstract',
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/hello', name: 'Hello', component: Hello},
    ],
});