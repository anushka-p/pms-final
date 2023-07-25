<template v-if="">
    <v-app>
      <v-main>
        <v-container>
          <CollegeNew />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import CollegeNew from '../components/CollegeDetails.vue';
  
  export default {
    components: {
      CollegeNew,
    },
  };
  </script>