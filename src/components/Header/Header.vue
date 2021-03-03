<template>
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon @click="switchGlobalMenuDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>tools.gomiba.co</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',

  data: () => ({
  }),

  methods: {
    switchGlobalMenuDrawer() {
      this.$store.commit('switchGlobalMenuDrawer');
    },
  },
});
</script>
