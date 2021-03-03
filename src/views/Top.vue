<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="text-center">
        <p>Welcome to my toolbox.</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-col class="text-center">
        <v-card>
          <MenuItems dont-show-top show-page-title />
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuItems from '../components/Header/MenuItems.vue';

@Component({
  components: {
    MenuItems,
  },
})
export default class Top extends Vue {}
</script>
