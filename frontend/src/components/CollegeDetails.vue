<template>
    <v-card class="mx-auto" max-width="600">
      <v-card-title class="headline">College Details Form</v-card-title>
      <v-card-text>
        <v-form v-if="showForm" @submit.prevent="submitForm">
          <v-text-field v-model="collegeName" label="College Name" required></v-text-field>
          <v-text-field v-model="phoneNo" label="Phone Number" type="tel" required></v-text-field>
          <v-textarea v-model="address" label="Address" required></v-textarea>
          <!-- ... Other form fields ... -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="isFormInvalid" type="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import jwtDecode from 'jwt-decode';
  import axios from 'axios';
  export default {
    data() {
      return {
        collegeName: "",
        phoneNo: "",
        address: "",
        showForm: "true",
      };
    },
    async mounted() {
  try {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const user_id = decodedToken.user_id;
    console.log("heyyyyyyyyyyyyyyyyy");
    // Fetch college data from the API endpoint
    const response = await axios.get(`/college/${user_id}`);
    console.log(response.data);
    // Check if college data exists (not newly registered)
    if (!response.data.message) {
      // College data exists, hide the form or perform some other action
      this.showForm = false;
      this.$router.push("/college/home");
    } else {
      // College data does not exist, show the form
      this.showForm = true;
    }
  } catch (error) {
    console.error('Error fetching college data:', error);
  }
},

    computed: {
      isFormInvalid() {
        return !this.collegeName || !this.phoneNo || !this.address;
      },
    },
    methods: {
      async submitForm() {
        const token = localStorage.getItem("token");
        const decodedToken= jwtDecode(token);
        const user_id= decodedToken.user_id;
        const collegeData = {
          collegeName: this.collegeName,
          phoneNo: this.phoneNo,
          address: this.address,
          user_id: user_id,
        };


        // Send collegeData to your backend API using axios or fetch
        const data = await axios.post(`/college/add-college-details/${user_id}`, collegeData);
          this.$router.push('/college/home');
        console.log(collegeData);
        // Reset form fields after submission (optional)
        this.collegeName = "";
        this.phoneNo = "";
        this.address = "";
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  