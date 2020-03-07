<template>
  <Card class="personCard" theme="dark">
    <div class="name">{{ fullName }}</div>
    <div class="title">{{ title }}</div>
    <div class="details">
      <ul>
        <li v-for="(value, key) of details" :key="key">
          <span class="detailsKey">{{ key }}</span
          >: <span class="detailsValue">{{ value }}</span>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script>
import Card from './Card'

export default {
  name: 'PersonCard',
  components: {
    Card,
  },
  props: {
    firstName: String,
    lastName: String,
    title: String,
    details: Object,
  },
  computed: {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
</script>

<style scoped>
.personCard {
  min-height: 100px;
  margin-bottom: 0;
}

.personCard > * {
  transition: all 300ms ease;
}

.name {
  font-size: 28px;
}

.title {
  font-style: italic;
}

.name,
.title,
.detailsKey {
  text-transform: capitalize;
}

.details {
  font-size: 0.9em;
  color: #0a155a;
  opacity: 0.5;
  transition: all 300ms ease;
}

.detailsValue {
  overflow: hidden;
  height: 12px;
  display: inline-block;
}

.detailsValue:before {
  content: "xxxxxxxx";
  display: block;
  transition: all 300ms ease;
}

.personCard:hover .details,
.personCard:active .details {
  opacity: 1;
}

.personCard:hover .detailsValue:before,
.personCard:active .detailsValue:before {
  margin-top: -13px;
}
</style>
