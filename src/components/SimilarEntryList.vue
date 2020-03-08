<template>
  <div class="similarEntryList">
    <div class="empty" v-if="isEmpty">
      <p>There aren't any other entries with the same type and status 🤷‍♂</p>
    </div>
    <template v-else>
      <h3>We found {{ similarEntryList.length }} similar entries:</h3>
      <ul>
        <li v-for="(item, index) in similarEntryList" :key="item.guid">
          <router-link class="link" :to="getItemUrl(item)">
            <Card theme="dark" class="similarEntry" @click="onSelect(item)">
              #{{ index }} {{ item.guid }}
            </Card>
          </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import Card from "./Card.vue";

export default {
  name: "SimilarEntryList",
  components: {
    Card
  },
  computed: {
    ...mapGetters(["items", "selectedItemId", "selectedItem"]),

    unselectedItems: function() {
      return _.filter(this.items, item => item.guid !== this.selectedItemId);
    },
    similarEntryList: function() {
      if (!this.selectedItem) {
        return [];
      }

      const { type, status } = this.selectedItem;

      return _.filter(this.unselectedItems, { type, status });
    },
    isEmpty: function() {
      return this.similarEntryList.length === 0;
    }
  },
  methods: {
    getItemUrl(item) {
      return `/list/${item.guid}`;
    }
  }
};
</script>

<style scoped>
.similarEntryList {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.similarEntryList ul {
  overflow: auto;
}

.similarEntry {
  margin-top: 4px;
  margin-bottom: 4px;
}

.link {
  text-decoration: inherit;
  text-align: left;
  color: inherit;
}

.empty {
  text-align: center;
  color: #fff;
  padding: 24px;
}

h3 {
  font-size: 1.2em;
  margin: 10px;
}
</style>
