<template>
  <v-navigation-drawer absolute temporary :value="drawer" @input="xxx">
    <v-list nav dense>
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
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
