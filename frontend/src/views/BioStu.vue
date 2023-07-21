<template>
    <v-app>
      <v-main>
        <v-container>
          <h1>Hii Student</h1>
          <Stubio />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Stubio from '../components/AddBio.vue';
  export default {
    components: {
      Stubio,
    },
  };
  </script>