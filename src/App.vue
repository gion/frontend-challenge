<template>
  <div id="app">
    <Layout>
      <template v-slot:leftPanel>
        <ItemList :getItems="getItems" />
      </template>
      <template v-slot:topCell>
        <SelectedItemDetails :people="people" />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
import ItemList from './components/ItemList.vue'
import SelectedItemDetails from './components/SelectedItemDetails.vue'

import { getItems } from './services/getItems'

export default {
  name: 'App',
  components: {
    Layout,
    ItemList,
    SelectedItemDetails,
  },
  data: function() {
    return {
      details: {
        debtor: {
          first_name: 'Barron',
          last_name: 'Hernandez',
          account: {
            sort_code: '70-20-81',
            account_number: 4074214,
          },
        },
        beneficiary: {
          first_name: 'Ortiz',
          last_name: 'Solis',
          account: {
            sort_code: '70-99-54',
            account_number: 38249705,
          },
        },
      },
    }
  },
  computed: {
    people: function() {
      return Object.entries(this.details).map(([type, data]) => ({
        type: type,
        firstName: data.first_name,
        lastName: data.last_name,
        details: {
          'sort code': data.account.sort_code,
          'account number': data.account.account_number,
        },
      }))
    },
  },
  methods: {
    getItems,
  },
}
</script>

<!-- a simple css reset -->
<style src="../node_modules/reset-css/reset.css"></style>

<!-- the global style -->
<style>
body {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex: 1;
}
</style>
