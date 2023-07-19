<template>
  <v-form ref="form" @submit.prevent="registerUser">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" label="Email" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="role"
            :items="roles"
            label="Role"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary">Register</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      roles: ["Student", "College"],
    };
  },
  methods: {
    async registerUser() {
      if (this.$refs.form.validate()) {
        // Perform registration logic here (e.g., API call to save user data)
        const user = {
          email: this.email,
          password: this.password,
          role: this.role,
        };
        // console.log(userDetails);
        const data = await axios.post("/user/signup", user);
      }
    },
  },
};
</script>
