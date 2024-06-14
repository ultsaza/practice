<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column align-center">
        <v-btn class="ma-2" color="primary" @click="count++">+1</v-btn>
        <v-btn class="ma-2" color="secondary" @click="count--">-1</v-btn>
        <div class="text-h4">count = {{ count }}</div>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-center {
  align-items: center;
}
.ma-2 {
  margin: 8px;
}
.text-h4 {
  font-size: 1.5rem;
}
</style>
