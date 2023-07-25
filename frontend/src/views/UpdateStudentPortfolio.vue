<template>
    <v-app>
      <v-main>
        <v-container>
          <Updatestu />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Updatestu from '../components/UpdatePortfolio.vue';
  export default {
    components: {
      Updatestu,
    },
  };
  </script>