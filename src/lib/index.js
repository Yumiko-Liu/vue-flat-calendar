import vueFlatCalendar from './vue-flat-calendar.vue';

const pluginConfig = {
  install(Vue, options) {
    Vue.component(vueFlatCalendar.name, vueFlatCalendar);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(pluginConfig);
}

export default pluginConfig;
