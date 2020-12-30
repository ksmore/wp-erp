import App from './App.vue';
import router from './router';
import store from './store/store';

import { createHooks } from '@wordpress/hooks';
window.erpAccountingHooks = createHooks();

// get lib reference
/* global acct_get_lib */
const Vue            = acct_get_lib('Vue');
const VueSweetalert2 = acct_get_lib('VueSweetalert2');
const Loading        = acct_get_lib('Loading');
const Vuelidate      = acct_get_lib('Vuelidate');
const VueClipboards  = acct_get_lib('VueClipboards');
const commonMixins   = acct_get_lib('commonMixins');
const i18nMixin      = acct_get_lib('i18nMixin');
const clickOutside   = acct_get_lib('clickOutside');

// config
Vue.config.productionTip = false;

// vue uses
Vue.use(VueSweetalert2);
Vue.use(Loading);
Vue.use(Vuelidate);
Vue.use(VueClipboards);

// mixin
Vue.mixin(commonMixins);
Vue.mixin(i18nMixin);

// vue click outside directive
Vue.directive('click-outside', clickOutside);


import {getRequest, postRequest} from 'admin/request';

(function () {
    window.postRequest = postRequest;
    window.getRequest = getRequest;
})();


const accountingContainer = document.getElementById('erp-accounting');

if (accountingContainer !== null) {
    window.erp_acct_vue_instance = new Vue({
        el: '#erp-accounting',
        router,
        store,
        render: h => h(App)
    });
}
