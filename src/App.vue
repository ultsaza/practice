<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center">
          <v-card class="pa-4" elevation="2" max-width="400">
          <div class="text-h4">count = {{ count }}</div>
          <v-row>
            <v-col cols="auto">
              <v-btn variant="tonal" color="primary" @click="count++"> +1 </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn variant="tonal" color="secondary" @click="count--"> -1 </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.text-h4 {
  font-size: 1.5rem;
  margin-bottom: 20px; /* テキストとボタンの間にスペースを追加 */
}
</style>
