<template>
  <v-navigation-drawer absolute temporary :value="drawer" @input="xxx">
    <MenuItems />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuItems from './MenuItems.vue';

@Component({
  components: {
    MenuItems,
  },
})
export default class Menu extends Vue {
  get drawer() {
    return this.$store.state.showGlobalMenuDrawer;
  }

  get routeList() {
    return this.$store.getters.routeList;
  }

  xxx(willState: boolean) {
    this.$store.commit('switchGlobalMenuDrawer', willState);
  }
}
</script>
