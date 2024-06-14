<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const snapshots = ref<{ timestamp: string, value: number }[]>([])

const addSnapshot = () => {
  const timestamp = new Date().toLocaleString()
  snapshots.value.push({ timestamp, value: count.value })
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card 
              title="count up and down"
              class="pa-4" 
              elevation="2"
              variant="plain">
              <div class="text-h4 text-center mb-4">count = {{ count }}</div>
              <v-row justify="center">
                <v-col cols="auto">
                  <v-btn variant="tonal" color="primary" @click="count++">+1</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="tonal" color="secondary" @click="count--">-1</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="tonal" color="denger" @click="count= 0">initialize</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="tonal" color="success" @click="addSnapshot">snapshot</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-4">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class = "text-center">Snapshots</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item v-for="(snapshot, index) in snapshots" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>time: {{ snapshot.timestamp }}</v-list-item-title>
                      <v-list-item-subtitle>count: {{ snapshot.value }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.text-h4 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; /* フォントを変更 */
}
.mb-4 {
  margin-bottom: 16px;
}
.mt-4 {
  margin-top: 16px;
}
</style>
