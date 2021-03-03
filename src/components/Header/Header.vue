<template>
  <v-app-bar app color="teal lighten-5">
    <v-app-bar-nav-icon @click="switchGlobalMenuDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>tools.gomiba.co {{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {
  switchGlobalMenuDrawer() {
    this.$store.commit('switchGlobalMenuDrawer');
  }

  get title() {
    return this.$route.meta.title === '' ? '' : ` / ${this.$route.meta.title}`;
  }
}
</script>
