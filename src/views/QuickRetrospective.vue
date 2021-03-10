<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="8" lg="6">
        <v-tabs
          color="deep-purple accent-4"
          right
        >
          <v-tab>振り返りを実施する</v-tab>
          <v-tab>新しく振り返り項目を作る</v-tab>
          <v-tab>これまでの振り返りを確認する</v-tab>

          <v-tab-item>
            <v-container fluid>
              <v-select solo :items="retrospectiveLabels" placeholder="振り返り項目の選択"></v-select>
            </v-container>
          </v-tab-item>

          <v-tab-item>
            <v-container fluid>
              <v-text-field label="項目の名前"></v-text-field>

              <v-card>
                <v-card-title>
                  質問の設定
                  <v-spacer></v-spacer>
                  <v-btn><v-icon>mdi-plus</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                  <v-text-field label="質問文"></v-text-field>
                  <v-text-field label="回答の選択肢">
                    <template v-slot:append-outer>
                      <v-btn><v-icon>mdi-plus</v-icon></v-btn>
                    </template>
                  </v-text-field>
                </v-card-text>
              </v-card>
            </v-container>
          </v-tab-item>

          <v-tab-item>
            <v-container fluid>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<style module>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dexie from 'dexie';

type DexieDatabase = {[P in keyof Dexie]: Dexie[P]};
interface DB extends DexieDatabase {
  definitions: Dexie.Table<Definitions, number>;
}
interface Definitions {
  id?: number;
  definition: string;
}

const databaseName = 'QuickRetrospective';
const dbVersion = 1;

@Component({
  components: {},
})
export default class QuickRetrospective extends Vue {
  db: DB = new Dexie(databaseName) as DB;

  panel = [1];

  retrospectiveLabels: string[] = [];

  async mounted() {
    this.db.version(dbVersion).stores({
      definitions: '++id, definition',
      retrospectives: '++id, definition_id, values',
    });

    const def = await this.db.definitions.toArray();
    this.retrospectiveLabels = def.map((d) => d.definition);
  }

  beforeDestroy() {
    this.db.close();
  }
}
</script>
