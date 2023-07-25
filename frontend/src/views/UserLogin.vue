<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <LoginForm />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from '../components/UserLogin.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
