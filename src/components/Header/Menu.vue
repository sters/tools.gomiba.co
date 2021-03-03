<template>
  <v-navigation-drawer absolute temporary :value="drawer" @input="xxx">
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item
          v-for="item in routeList"
          :key="item.path"
          :to="item.path == '' ? '/' : item.path"
        >
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Menu',

  computed: {
    drawer() {
      return this.$store.state.showGlobalMenuDrawer;
    },
    routeList() {
      return this.$store.getters.routeList;
    },
  },

  methods: {
    xxx(willState: boolean) {
      this.$store.commit('switchGlobalMenuDrawer', willState);
    },
  },

  data: () => ({
    menuItem: [{ name: 'foo', url: '#' }],
  }),
});
</script>
