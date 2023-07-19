<!-- src/App.vue -->
<template>
  <v-container>
    <h1>User Registration</h1>
    <RegistrationForm />
  </v-container>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm.vue";

export default {
  components: {
    RegistrationForm,
  },
};
</script>
