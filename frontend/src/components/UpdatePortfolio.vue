<template>
  <v-card class="mx-auto card" max-width="600" >
    <v-form @submit.prevent="UpdatePortfolio">
      <v-card-title class="headline">Student Portfolio</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="portfolio.firstname" label="First Name" required color="primary"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="portfolio.lastname" label="Last Name" required color="primary"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="portfolio.course" label="Course" required color="primary"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field v-model="portfolio.phone" label="Phone Number"  required color="primary"></v-text-field>

      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="portfolio.branch" label="Branch" type="text" color="primary"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="portfolio.semester_training" label="Semester Training" type="number" required color="primary"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="portfolio.cgpa" label="CGPA" type="number" required color="primary"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-checkbox v-model="portfolio.internships" label="Internships" color="primary"></v-checkbox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-textarea v-model="portfolio.skills" label="Skills" required color="primary"></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
          <v-checkbox v-model="portfolio.placed" label="placed" color="primary"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="portfolio.college" label="College" type="text" color="primary"></v-text-field>
      </v-col>
    </v-row>
          <!-- ... Other form fields ... -->
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="isFormInvalid" type="submit">Submit</v-btn>
      </v-card-actions>
    </v-form>

    <v-snackbar v-model="successSnackbar" :timeout="timeout" color="success">
      Form updated successfully!
    </v-snackbar>

  </v-card>
</template>

<script>
import axios from "axios";
import jwtDecode from "jwt-decode";
// import router from "@/router";
export default {
  data() {
    return {
      // ... Your form data ...
      portfolio :{
      firstname: "",
    lastname: "",
    course: "",
    phone: "",
    branch: "",
    semester_training: null,
    cgpa: null,
    internships: false,
    skills: "",
    placed: false,
    college:"",

      },
      successSnackbar: false,
      timeout: 3000, 

    };
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token'); 
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      console.log(userId);
      // const userEmail = decodedToken.email;
      // // Fetch portfolio data from the API endpoint
      // console.log("here1");
      const response = await axios.get(`/student/update-portfolio/${userId}`);
      if(!response.data.portfolio[0])
      {
        alert("First create the portfolio");
        this.$router.push("/student/home");
      }
      else{
        this.portfolio = await response.data.portfolio[0];
      }
      
      console.log("reached");
      console.log(this.portfolio);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
  },
  methods: {
    async UpdatePortfolio() {
      try{
        const token = localStorage.getItem('token'); 
      const decodedToken = jwtDecode(token);
        const user_id = decodedToken.user_id;
            const data = await axios.post(`student/add-updated-portfolio/${user_id}`,this.portfolio);

            this.successSnackbar = true;

// Hide the snackbar after 3 seconds
setTimeout(() => {
  this.successSnackbar = false;
}, 2000);

// Wait for 3 seconds before navigating to "/student/home"
setTimeout(() => {
  this.$router.push('/student/home');
}, 2000);


        }catch(e)
        {
            console.error('Error submitting portfolio:', e);
        }
    },
  },
};
</script>

<style>
/* Add custom styles here */
.card{
  margin-top: 30px;
}
</style>