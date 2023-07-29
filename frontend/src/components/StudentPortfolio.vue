<template>
    <v-card class="mx-auto" max-width="800">
      <v-form @submit.prevent="submitPortfolio">
        <v-card-title class="headline">Student Portfolio</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="firstName" label="First Name" required color="primary"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="lastName" label="Last Name" required color="primary"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="course" label="Course" required color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="phoneNo" label="Phone Number" required color="primary"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="branch" label="Branch" type="text" color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="semesterTraining" label="Semester Training" type="number" required color="primary"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="cgpa" label="CGPA" type="number" required color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-checkbox v-model="internships" label="Internships" color="primary"></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-textarea v-model="skills" label="Skills" required color="primary"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
            <v-checkbox v-model="placed" label="placed" color="primary"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="college" label="College" type="text" color="primary"></v-text-field>
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
    </v-card>
  </template>
  
  <script>
  import axios from "axios";
  import jwt_decode from 'jwt-decode'
  export default {
    data() {
      return {
        // ... Your form data ...
        firstName: "",
      lastName: "",
      course: "",
      phoneNo: "",
      branch: "",
      semesterTraining: null,
      cgpa: null,
      internships: false,
      skills: "",
      placed: false,
      college:"",
      };
    },
    methods: {
      async submitPortfolio() {
        const token = localStorage.getItem("token")

        // ... Your form submission logic ...
        try{
            const user = jwt_decode(token)
        const user_id = user.user_id
        console.log(user);
            const foliodata = {
      firstName: this.firstName,
      lastName: this.lastName,
      course: this.course,
      phoneNo: this.phoneNo,
      branch: this.branch,
      semesterTraining: this.semesterTraining,
      cgpa: this.cgpa,
      internships: this.internships,
      skills: this.skills,
      placed: this.placed,
      college: this.college,
      user_id: user_id
            };
            const data = await axios.post("/student/add-portfolio", foliodata);
            if (data.data.exists === false) {
          alert("College name not registered...");
        } else {
          console.log("Portfolio added successfully");
          this.$router.push('/student/home');
        }
          

        }catch(e)
        {
            console.error('Error submitting portfolio:', e);
        }

      },
    },
    computed: {
      isFormInvalid() {
        // ... Your form validation logic ...
        return (
        !this.firstName ||
        !this.lastName ||
        !this.course ||
        !this.phoneNo ||
        !this.branch ||
        this.semesterTraining === null ||
        this.cgpa === null ||
        !this.skills ||
        this.rollNumber === null
      );
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  