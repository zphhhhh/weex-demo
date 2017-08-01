import App from './src/App.vue';
import router from './src/routers/router';

App.el = '#root';
App.router = router;

new Vue(App);

router.push('/');
