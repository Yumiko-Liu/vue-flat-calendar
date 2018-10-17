<template>
  <div id="app">
    <div class="btn" @click="toggle">開</div>
    <div class="selected-date">{{selectedDate}}</div>
    <vue-flat-calendar v-model="showCalendar" :defaultDate="defaultDate" @change="selectDate" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showCalendar: false,
      defaultDate: new Date(),
      selectedDate: ''
    }
  },
  methods: {
    toggle() {
      this.showCalendar = !this.showCalendar;
    },
    selectDate(_date) {
      let year = _date.getFullYear();
      let month = _date.getMonth() + 1;
      let date = _date.getDate();
      this.selectedDate = year + "-" + month + "-" + date;
      this.defaultDate = _date;
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background-color: #EDEDED;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.selected-date {
  padding: 15px 0;
}
.btn {
  display: inline-block;
  text-align: center;
  width: 80px;
  height: 80px;
  line-height: 80px;
  background-color: #e74c3c;
  color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.45);
  border-radius: 50%;
  border: 5px solid #fff;
  font-size: 20px;
}
</style>
