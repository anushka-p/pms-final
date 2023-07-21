<template v-if="">
    <v-app>
      <v-main>
        <v-container>
          <h1>Hii College</h1>
          <Collegehome />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Collegehome from '../components/CollegeHome.vue';
  
  export default {
    components: {
      Collegehome,
    },
  };
  </script>