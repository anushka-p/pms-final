
<template>
  <v-container>
    <!-- Section 1: First vertical section -->
    <!-- <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text color="white" @click="logout">Logout</v-btn>

    </v-app-bar>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="section-card">
            <v-card-title class="section-title">Section 1</v-card-title>
            <v-card-text>
              <!-- Content for section 1 goes here -->
              <v-btn color="primary" @click="showAllStudents">Show All Students</v-btn>

              <all-students-list :students="studentsList" v-if="showStudentsList" />

            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Vertical divider -->
        <v-col cols="12" md="1">
          <v-divider vertical></v-divider>
        </v-col>
  
        <!-- Section 2: Second vertical section -->
        <v-col cols="12" md="5">
          <v-card class="section-card">
            <v-card-title class="section-title">Section 2</v-card-title>
            <v-card-text>
              <!-- Content for section 2 goes here -->
              <v-btn color="primary" @click="filterStudents">Filter Students by Placement Status</v-btn>

              <all-students-with-internships :studentsint="studentsListWithInt" v-if="showStudentsListWithInt" />

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

      <v-col cols="12" md="1">
        <v-divider vertical></v-divider>
      </v-col>
      <!-- Section 2: Second vertical section -->
      <v-col cols="12" md="5" >
        <v-card class="section-card">
          <v-card-title class="section-title">Section 2</v-card-title>
          <v-card-text>
            Content for section 2 goes here
            <v-btn color="primary" @click="filterStudents"
              >Filter Students by Placement Status</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import AllStudentsList from "../components/AllStudentsList.vue";
import AllStudentsWithInternships from '../components/AllStudentsWithInternships.vue';
import jwtDecode from 'jwt-decode';
export default {
  components: {
    AllStudentsList,
    AllStudentsWithInternships,
  },
  data() {
    return {
      showStudentsList: false,
      studentsList: [], // An array to store the list of students
      showStudentsListWithInt:false,
      studentsListWithInt:[],
    };
  },
  methods: {
   async showAllStudents() {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
      this.studentsList = [];
      try {
        // Fetch the list of students from your API endpoint
        const response = await axios.get(`/college/get-all-students/${user_id}`);
        const studentdata = response.data.data;
        if(!studentdata)
        {
          alert("No Students registered yet!");
        }
        else
        {
          this.studentsList = studentdata;
          this.showStudentsList = true;
        }
       
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    },
    async filterStudents() {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const user_id = decodedToken.user_id;
      this.studentsListWithInt = [];
      try {
        // Fetch the list of students from your API endpoint
        const response = await axios.get(`/college/get-all-internships/${user_id}`);
        const studentdata = response.data.data;
        if(!studentdata)
        {
          alert("No student registered yet");
        }
        else{
          this.studentsListWithInt = studentdata;
          this.showStudentsListWithInt = true;
        }
        // Show the students list by setting the flag to true
      } catch (error) {
        console.error("Error fetching students data:", error);
      }

      // Add your logic here to filter students based on their placement status
      // You can navigate to a new route or display the filtered students in a dialog or table, etc. -->
    },
    logout() {
      localStorage.clear("token");
      this.$router.push("/");
    },
  },
};
</script> 
  
  // <style scoped>
-->
 /* Custom styling */
   .section-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style> 
  
