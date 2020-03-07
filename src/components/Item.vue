<template>
  <Card class="item" :class="classObject" @click="onSelect">
    <div>index: {{ data.index }}</div>
    <div>type: {{ data.type }}</div>
    <div>status: {{ data.status }}</div>
    <div>amount: {{ amount }}</div>
    <div>created: {{ created }}</div>
  </Card>
</template>

<script>
import Card from './Card.vue'

import numeral from 'numeral'
import moment from 'moment'

export const STATUSES = {
  SUCCESS: 'ADMISSION',
  FAIL: 'DECLINED',
}

export default {
  name: 'item',
  components: {
    Card,
  },
  props: {
    data: Object,
    onSelect: {
      type: Function,
      default: function() {
        console.log('clicked item')
      },
    },
    currencyFormat: {
      type: String,
      default: '0,0',
    },
    dateFormat: {
      type: String,
      default: 'dd/mm/YYYY hh:mm:ss',
    },
  },
  computed: {
    classObject: function() {
      return {
        selected: this.data.selected,
        success: this.data.status === STATUSES.SUCCESS,
        fail: this.data.status === STATUSES.FAIL,
      }
    },
    amount: function() {
      return numeral(this.data.amount).format(this.currencyFormat)
    },
    created: function() {
      return moment(this.data.created).format(this.dateFormat)
    },
  },
}
</script>

<style scoped>
.item {
  cursor: pointer;
  border-left-width: 12px !important;
}

.item.selected {
  margin-right: 0;
  background: linear-gradient(to left, #2e90a2, #206688);
  color: #fff;
  border: 0;
  position: relative;
  z-index: 1;
}

.item.fail {
  border-left-color: #ca6069 !important;
}
</style>
