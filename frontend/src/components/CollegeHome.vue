<template>
    <v-container>
      <!-- Section 1: First vertical section -->
      <v-app-bar app color="primary" dark>
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>

export default {
  methods: {
    showAllStudents() {
      // Add your logic here to show details of all registered students
      // You can navigate to a new route or display the details in a dialog or table, etc.
      
    },
    filterStudents() {
      // Add your logic here to filter students based on their placement status
      // You can navigate to a new route or display the filtered students in a dialog or table, etc.
    },
    logout()
    {
      localStorage.clear("token");
      this.$router.push("/");
    }
  },
};
</script>
  
  <style scoped>
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
  
  