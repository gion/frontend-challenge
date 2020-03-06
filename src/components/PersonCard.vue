<template>
  <div class="personCard">
    <div class="name">{{fullName}}</div>
    <div class="title">{{title}}</div>
    <div class="details">
      <ul>
        <li v-for="(value, key) of details" :key="key">
          <span class="detailsKey">{{key}}</span>: <span class="detailsValue">{{value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    firstName: String,
    lastName: String,
    title: String,
    details: Object,
  },
  computed: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>

<style scoped>
.personCard {
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100px;
}
.personCard > * {
  transition: all 300ms ease;
}

.name {
  font-size: 28px;
  color: red;
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
  color: rgba(0, 0, 0, 0.3);
  transition: all 300ms ease;
}

.detailsValue {
  overflow: hidden;
  height: 12px;
  display: inline-block;
}

.detailsValue:before {
  content: 'xxxxxxxx';
  display: block;
  transition: all 300ms ease;
}

.personCard:hover .details,
.personCard:active .details {
  color: rgba(0, 0, 0, 0.8);
}

.personCard:hover .detailsValue:before,
.personCard:active .detailsValue:before {
  margin-top: -13px;
}
</style>
