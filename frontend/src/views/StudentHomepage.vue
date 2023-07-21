<template>
    <v-app>
      <v-main>
        <v-container>
          <h1>Hii Student</h1>
          <Stuhome />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Stuhome from '../components/StudentHome.vue';
  
  export default {
    components: {
      Stuhome,
    },
  };
  </script>