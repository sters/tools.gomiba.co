<template>
  <v-app>
    <Header />
    <Menu />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header/Header.vue';
import Menu from './components/Header/Menu.vue';

@Component({
  components: {
    Header,
    Menu,
  },
})
export default class App extends Vue {}
</script>
