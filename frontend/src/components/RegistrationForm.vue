<template>
  <v-form ref="form" @submit.prevent="registerUser">
    <v-container>
      <!-- Your form fields here -->
      <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
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
              :rules="confirmPasswordRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="role"
              :items="roleOptions"
              label="Role"
              required
            ></v-select>
          </v-col>
        </v-row>
    <v-btn color="primary" :disabled="isButtonDisabled" type="submit">Register</v-btn>
  </v-container>
  </v-form>
</template>

<script>
import { emailRules, passwordRules, confirmPasswordRules, roleOptions } from '../../src/validator/FormValidations';
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
      if (await this.validateForm()) {
        const user = {
          email: this.email,
          password: this.password,
          role: this.role,
        };
        const data = await axios.post("/user/signup", user);
      } else {
        console.log('Form is invalid. Please check the fields.');
      }
    },
    async validateForm() {
      await this.$nextTick(); // Wait for the next update cycle to ensure the form is rendered
      return this.$refs.form.validate();
    },
  },
  computed: {
    emailRules() {
      return emailRules;
    },
    passwordRules() {
      return passwordRules;
    },
    confirmPasswordRules() {
      return confirmPasswordRules(this.password);
    },
    roleOptions() {
      return roleOptions;
    },
    isButtonDisabled() {
      return (
        !this.email ||
        !this.password ||
        !this.confirmPassword ||
        !this.role ||
        !this.validateForm()
      );
    },
  },
};
</script>







