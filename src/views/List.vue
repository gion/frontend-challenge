<template>
  <div id="list">
    <Layout :showPanel="!!selectedItemId" :panelStatus="panelStatus">
      <template v-slot:leftPanel>
        <ItemList />
      </template>
      <router-view></router-view>
      <template v-slot:topCell>
        <SelectedItemDetails :people="people" />
      </template>
      <template v-slot:bottomCell>
        <SimilarEntryList />
      </template>
    </Layout>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

import Layout from "../components/Layout.vue";
import ItemList from "../components/ItemList.vue";
import SelectedItemDetails from "../components/SelectedItemDetails.vue";
import SimilarEntryList from "../components/SimilarEntryList.vue";

export default {
  name: "List",
  components: {
    Layout,
    ItemList,
    SelectedItemDetails,
    SimilarEntryList
  },
  data: function() {
    return {
      details: {
        debtor: {
          first_name: "Barron",
          last_name: "Hernandez",
          account: {
            sort_code: "70-20-81",
            account_number: 4074214
          }
        },
        beneficiary: {
          first_name: "Ortiz",
          last_name: "Solis",
          account: {
            sort_code: "70-99-54",
            account_number: 38249705
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["items", "selectedItemId", "selectedItem"]),
    panelStatus: function() {
      return _.get(this.selectedItem, "status");
    },
    people: function() {
      if (!this.selectedItem) {
        return [];
      }

      return Object.entries(this.selectedItem.attributes).map(
        ([type, data]) => ({
          type: type,
          firstName: data.first_name,
          lastName: data.last_name,
          details: {
            "sort code": data.account.sort_code,
            "account number": data.account.account_number
          }
        })
      );
    }
  },
  mounted() {
    this.$store.dispatch("fetchItems");
  },
  watch: {
    $route(to) {
      this.$store.commit("selectItem", _.get(to, "params.id"));
    }
  }
};
</script>

<!-- the global style -->
<style scoped>
#list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex: 1;
  height: 0;
}
</style>
