<template>
  <div class="page-wrapper" >
    <v-container class="content-container" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
    <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 24 : 6"
              class="mx-auto pg"
              max-width="600"
            >
      <v-card-title class="headline" align="center" rounded>College Details Form</v-card-title>
      <!-- <v-card-title class="headline" align="center">
               
                <span style="font-size: 32px;">College Details Form</span>
              </v-card-title> -->

      <v-card-text>
        <v-form v-if="showForm" @submit.prevent="submitForm" >
          <v-text-field v-model="collegeName" label="College Name" required></v-text-field>
          <v-text-field v-model="phoneNo" label="Phone Number" required></v-text-field>
          <v-textarea v-model="address" label="Address" required></v-textarea>
          <!-- <v-textarea v-model="description" label="Add Description" required></v-textarea> -->
          
          <!-- ... Other form fields ... -->
          <v-card-actions>
           
            <v-btn   color="primary" :disabled="isFormInvalid" type="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    </v-hover>
        </v-col>
    </v-row>
    </v-container>
    </div>
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
  
  <style scoped>

  .page-wrapper {
  position: relative; /* Set the position to relative to contain the absolute-positioned image */
  background-image: url("../assets/clghomebg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Set the height to occupy the full viewport */
}
.content-container {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding-top: 80px; /* Add some padding to create space between the card and the navbar */
}
  </style>