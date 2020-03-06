<template>
  <div class="itemList">
    <div class="message error" v-if="error">
      <h3>Bummer 😕</h3>
      <p>We couldn't fetch the data at this time.</p>
      <p>
        Error details: <code>{{ error }}</code>
      </p>
    </div>
    <div class="message loading" v-else-if="isLoading">
      <p>loading...</p>
    </div>
    <template v-else>
      <ul>
        <li class="item" v-for="item in items" :key="item.guid">
          item #{{ item.guid }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { getItems } from '../services/getItems'

export default {
  name: 'ItemList',
  data() {
    return {
      items: [],
      error: null,
      isLoading: true,
    }
  },
  mounted: async function() {
    try {
      this.items = await getItems()
    } catch (error) {
      this.error = error
    }

    this.isLoading = false
  },
}
</script>

<style scoped>
.itemList {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
}

h3 {
  font-size: 1.2em;
  margin: 10px;
}

.message {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}

.error {
  color: red;
}
</style>
