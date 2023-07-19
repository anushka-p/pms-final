<!-- src/components/LoginForm.vue -->
<template>
  <v-form ref="form" @submit.prevent="loginUser">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="email" label="Email" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      if (this.$refs.form.validate()) {
        // Perform login logic here (e.g., API call for authentication)
        console.log('Login data:', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>
