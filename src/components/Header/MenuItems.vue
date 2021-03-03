<template>
  <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
      <v-list-item
          v-for="item in routeList"
          :key="item.path"
          :to="item.path == '' ? '/' : item.path"
      >
        <v-list-item-title>
          {{ showPageTitle ? item.meta.title : item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component({
  components: {},
})
export default class MenuItems extends Vue {
  @Prop({ type: Boolean, default: false })
  dontShowTop: boolean|undefined;

  @Prop({ type: Boolean, default: false })
  showPageTitle: boolean|undefined;

  get routeList() {
    const list = this.$store.getters.routeList.map((x: Route) => {
      if (this.dontShowTop && x.name === 'TOP') {
        return null;
      }
      return x;
    });

    return list.filter((x: Route | null) => x);
  }
}
</script>
