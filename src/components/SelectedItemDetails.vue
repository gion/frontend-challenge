<template>
  <div class="selectedItemDetails">
    <div class="empty" v-if="isEmpty">
      <h3>There's nothing to show here :(</h3>
      <p>Please select an item to see it's details.</p>
    </div>
    <template v-else>
      <h3>People involved:</h3>
      <PersonCard
        class="person"
        v-for="(person, index) in people"
        :key="index"
        :title="person.type"
        :firstName="person.firstName"
        :lastName="person.lastName"
        :details="person.details"
      />
    </template>
  </div>
</template>

<script>
import PersonCard from './PersonCard.vue'

export default {
  name: 'SelectedItemDetails',
  components: {
    PersonCard,
  },
  props: {
    people: Array
  },
  computed: {
    isEmpty: function() {
      return this.people.length === 0
    }
  }
}
</script>

<style scoped>
.selectedItemDetails {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.empty {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}

h3 {
  font-size: 1.2em;
  margin: 10px;
}

.person {
  margin: 10px;

}
</style>
