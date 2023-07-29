<template>
  <v-container class="mt-7">
      <v-row allign="center" justify="center">
          <v-col cols="12">
              <v-card class="elevation-6 mx-auto mt-10" max-width="450">
                  <v-card-text class="mt-1">
                      <h2>Sign Up</h2>

                      <v-form ref="form" @submit.prevent="registerUser">
        <!-- Your form fields here -->
            <v-col cols="6" md="12">
              <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
            </v-col>
            <v-col cols="6" md="12">
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6" md="12">
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                :rules="confirmPasswordRules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6" md="12">
              <v-select
                v-model="role"
                :items="roleOptions"
                label="Role"
                required
              ></v-select>
            </v-col>
            <v-col cols="8" md="12" class="text-center mt-6">
      <v-btn color="primary" :disabled="isButtonDisabled" type="submit">Register</v-btn>
           </v-col>
    </v-form>
                      <div class="text-center mt-6">
                          <h4>Already have an account?<a><router-link to="/user/login">Login</router-link></a></h4>
                      </div>
                  </v-card-text>

              </v-card>
          </v-col>
      </v-row>

  </v-container>
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
        const info = {email: this.email};
        const response = await axios.get("/user/checkmail", { params: info });
        const isEmailAvailable = response.data.exists;
        console.log(isEmailAvailable);
        if (!isEmailAvailable && (await this.validateForm())) {
          const user = {
            email: this.email,
            password: this.password,
            role: this.role,
          };
          const data = await axios.post("/user/signup", user);
            this.$router.push('/user/login');
        } else {
          alert("Email already exists");
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





