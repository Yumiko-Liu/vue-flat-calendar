# vue-flat-calendar

> 📅一只基于 Vue.js 2.x 的日历组件

## 效果

[demo](https://yumiko-liu.github.io/vue-flat-calendar/index.html)

<img src="https://i.loli.net/2018/10/16/5bc590d175e08.png" style="width: 300px"/>

<img src="https://i.loli.net/2018/10/16/5bc5923c3c84f.png" style="width: 200px"/>


## 使用

``` javascript
import vueFlatCalendar from 'vue-flat-calendar'

Vue.use(vueFlatCalendar)
```

``` html
<vue-flat-calendar v-model="showCalendar" @change="selectDate" />
```

## 参数

option | description | type | default
--- | --- | --- | ---
v-model | 显示或隐藏日历 | Boolean | false
defaultDate | 默认选中的日期 | Date | new Date()

## 事件

event name | description | 	parameter of callback
--- | --- | ---
change | 日期变化时触发 | date

## 最后

* 懒癌复发，力不从心
* 随心维护，谨慎使用
