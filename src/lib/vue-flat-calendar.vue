<template>
  <transition name="slide">
    <div class="calendar-wrapper" v-if="showCalendar">
      <div class="title">
        <img src="../assets/icon/close.png" @click="emitToggle" class="close-icon" />
        <span>日期选择</span>
      </div>
      <div class="calendar">
        <div class="year-select-panel">
          <img src="../assets/icon/previous.png" class="icon" @click="prevYear"/>
          <span>{{currentYear}}</span>
          <img src="../assets/icon/next.png" class="icon" @click="nextYear"/>
        </div>
        <div class="week-panel">
          <span class="cell" v-for="(day, index) in week" :key="index">{{day}}</span>
        </div>
        <div class="months" ref="months">
          <div class="single-month" v-for="(datesInMonth, month) in datesInYear" :key="month">
            <div class="month-title">
              <div class="row" :ref="selectedDate.getFullYear() == currentYear && selectedDate.getMonth() == month ? 'curRow': ''">
                <div class="cell" v-for="(day, i) in week" :key="i">{{getFirstDayInMonth(month) == i ? month + 1 + "月" : ""}}</div>
              </div>
            </div>
            <div class="date">
              <div class="row" v-for="(row, i) in datesInMonth" :key="i">
                <div class="cell" v-for="(date, idx) in row" :key="idx">
                  <span :class="{'date-selected': selectedDate.getFullYear() == currentYear && selectedDate.getMonth() == month && selectedDate.getDate() == date, 'gray': idx === 0 || idx === 6}" @click="clickDate(month, date)">{{date}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vue-flat-calendar',
  props: {
    showCalendar: {
      type: Boolean,
      default: false
    },
    defaultDate: {
      type: Date,
      default: new Date()
    }
  },
  model: {
    prop: 'showCalendar',
    event: 'toggleShowCalendar'
  },
  data () {
    return {
      currentYear: '',
      selectedDate: '',
      week: ["日", "一", "二", "三", "四", "五", "六"],
      datesInYear: []
    }
  },
  computed: {
    getFirstDayInMonth(month) {
      return (month) => {
        let date = new Date(this.currentYear, month, 1);
        return date.getDay();
      }
    }
  },
  methods: {
    emitToggle() {
      this.$emit('toggleShowCalendar', !this.showCalendar);
    },
    clickDate(month, date) {
      if (date) {
        this.$emit('change', new Date(this.currentYear, month, date));
        this.emitToggle();
      }
    },
    getDatesInYear(year, shouldScrollToCurMonth) {
      for (let i = 0; i < 12; i++) {
        let dates = [];
        let datesInMonth = new Date(+year, i+1, 0).getDate();
        let firstDay = this.getFirstDayInMonth(i);
        this.$set(this.datesInYear, i, []);
        for (let j = 1; j <= datesInMonth; j++) {
          dates.push(j);
        }
        for (let j = 0; j < firstDay; j++) {
          dates.unshift("");
        }
        if (dates.length % this.week.length) {
          let times = this.week.length - (dates.length % this.week.length);
          for (let j = 0; j < times; j++) {
            dates.push("");
          }
        }
        for (let j = 0; j < dates.length / this.week.length; j++) {
          let row = dates.slice(this.week.length * j, this.week.length * (j + 1));
          this.datesInYear[i].push(row);
        }
      }
      if (shouldScrollToCurMonth) {
        this.$nextTick(() => {
          this.scrollToCurMonth();
        });
      }
    },
    prevYear() {
      this.getDatesInYear(--this.currentYear);
    },
    nextYear() {
      this.getDatesInYear(++this.currentYear);
    },
    scrollToCurMonth() {
      this.$refs["months"].scrollTop = this.$refs["curRow"][0].offsetTop - 90;
    }
  },
  mounted() {
    if (this.showCalendar) {
      this.selectedDate = this.defaultDate;
      this.currentYear = this.selectedDate.getFullYear();
      this.getDatesInYear(this.currentYear, true);
    }
  },
  watch: {
    showCalendar(curVal, oldVal) {
      if (curVal) {
        this.selectedDate = this.defaultDate;
        this.currentYear = this.selectedDate.getFullYear();
        this.getDatesInYear(this.currentYear, true);
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import './vue-flat-calendar.scss';
</style>