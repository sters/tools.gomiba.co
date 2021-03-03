<template>
  <v-app>
    <Header />
    <Menu />

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header/Header.vue';
import Menu from './components/Header/Menu.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Menu,
  },

  data: () => ({}),

  methods: {},

});
</script>
