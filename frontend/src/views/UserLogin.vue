<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>User Login</h1>
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
