<template>
  <router-link :to="itemUrl" class="link">
    <Card class="item" :class="classObject" @click="handleClick">
      <div>index: {{ data.index }}</div>
      <div>type: {{ data.type }}</div>
      <div>status: {{ data.status }}</div>
      <div>amount: {{ amount }}</div>
      <div>created: {{ created }}</div>
    </Card>
  </router-link>
</template>

<script>
import numeral from "numeral";
import moment from "moment";

import Card from "./Card.vue";

import { STATUSES } from "./constants";
import { scrollElementIntoView } from "../helpers";

export default {
  name: "Item",
  components: {
    Card
  },
  props: {
    data: Object,
    selected: Boolean,
    onSelect: Function,
    currencyFormat: {
      type: String,
      default: "0,0"
    },
    dateFormat: {
      type: String,
      default: "dd/mm/YYYY hh:mm:ss"
    }
  },
  computed: {
    classObject: function() {
      return {
        selected: !!this.selected,
        success: this.data.status === STATUSES.SUCCESS,
        fail: this.data.status === STATUSES.FAIL
      };
    },
    amount: function() {
      return numeral(this.data.amount).format(this.currencyFormat);
    },
    created: function() {
      return moment(this.data.created).format(this.dateFormat);
    },
    itemUrl: function() {
      // deselect
      if (this.selected) {
        return "/list";
      }

      // select
      return `/list/${this.data.guid}`;
    }
  },
  methods: {
    handleClick() {
      console.log("handleClick", this.data);
      this.onSelect(this.data);
    }
  },
  watch: {
    selected(newSelectedVal) {
      if (newSelectedVal) {
        scrollElementIntoView(this.$el);
      }
    }
  }
};
</script>

<style scoped>
.link {
  text-decoration: inherit;
  text-align: left;
  color: inherit;
}

.item {
  border-left-width: 12px !important;
  transition: all 300ms ease;
}

.item.selected {
  margin-right: 0;
  background: linear-gradient(to left, #2e90a2, #206688);
  color: #fff;
  border: 0;
  position: relative;
  z-index: 1;
}

.item.fail.selected {
  background: linear-gradient(to left, #ca6069, #960713);
}

.item.fail {
  border-left-color: #ca6069 !important;
}
</style>
