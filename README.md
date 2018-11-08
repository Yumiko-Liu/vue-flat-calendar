# vue-flat-calendar

> 📅一只基于 Vue.js 2.x 的日历组件

## 效果

[demo](https://yumiko-liu.github.io/vue-flat-calendar/index.html)

![](https://s1.ax1x.com/2018/10/16/ia5tZq.png)

![](https://s1.ax1x.com/2018/10/16/ia51zQ.png)


## 使用

``` bash
npm install flat-calendar --save
```

``` javascript
import vueFlatCalendar from 'flat-calendar'

Vue.use(vueFlatCalendar)
```

``` html
<vue-flat-calendar v-model="showCalendar" :defaultDate="new Date()" @change="selectDate" />
```

## 参数

option | description | type | default
--- | --- | --- | ---
v-model | 显示或隐藏日历 | Boolean | false
defaultDate | 默认选中的日期 | Date | new Date()
startDate | 起始日期（范围） | Date | null
endDate | 结束日期（范围） | Date | null

## 事件

event name | description | parameter of callback
--- | --- | ---
change | 日期变化时触发 | date
