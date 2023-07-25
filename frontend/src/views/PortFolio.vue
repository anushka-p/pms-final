<template>
    <v-app>
      <v-main>
        <v-container>
          <PortFolio />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import PortFolio from '../components/StudentPortfolio.vue';
  
  export default {
    components: {
      PortFolio,
    },
  };
  </script>