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
        <div class="months" ref="months" @click="proxy($event)">
          <div class="single-month" v-for="(datesInMonth, month) in datesInYear" :key="month">
            <div class="month-title">
              <div class="row" :ref="selectedDate.getFullYear() == currentYear && selectedDate.getMonth() == month ? 'curRow': ''">
                <div class="cell" v-for="(day, i) in week" :key="i">{{getFirstDayInMonth(month) == i ? month + 1 + "月" : ""}}</div>
              </div>
            </div>
            <div class="date">
              <div class="row" v-for="(row, i) in datesInMonth" :key="i">
                <div class="cell" v-for="(date, idx) in row" :key="idx">
                  <span 
                    :class="{'date-today': new Date().getFullYear() == currentYear && new Date().getMonth() == month && new Date().getDate() == date.date, 'date-selected': selectedDate.getFullYear() == currentYear && selectedDate.getMonth() == month && selectedDate.getDate() == date.date, 'disabled': date.disabled}"
                    :data-month="month"
                    :data-date="JSON.stringify(date)"
                  >{{date.date}}</span>
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
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
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
    proxy(e) {
      let target = e.target;
      target.nodeName.toUpperCase() === 'SPAN' && this.clickDate(target.dataset.month, JSON.parse(target.dataset.date));
    },
    clickDate(month, date) {
      if (!date.disabled) {
        this.$emit('change', new Date(this.currentYear, month, date.date));
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
          let fullDate = new Date(year, i, j);
          let startDate = this.startDate || new Date(0, 0, 0);
          let endDate = this.endDate || new Date(9999, 0, 0);
          let obj = {};
          obj.date = j;

          if (fullDate >= startDate && fullDate <= endDate) {
            obj.disabled = false;
          } else {
            obj.disabled = true;
          }
          
          dates.push(obj);
        }
        for (let j = 0; j < firstDay; j++) {
          let obj = {};
          obj.date = "";
          obj.disabled = false;
          dates.unshift(obj);
        }
        if (dates.length % this.week.length) {
          let times = this.week.length - (dates.length % this.week.length);
          for (let j = 0; j < times; j++) {
            let obj = {};
            obj.date = "";
            obj.disabled = false;
            dates.push(obj);
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
