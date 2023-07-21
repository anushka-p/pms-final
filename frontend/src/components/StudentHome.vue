<template>
    <div>
      <v-app-bar app color="primary">
        <v-toolbar-title>Student Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="add-bio" >Add Bio</v-btn>
        <v-btn text to="create-portfolio">Create Portfolio</v-btn>
        <v-btn @click="logout" text>Logout</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <h2>Welcome, {{ studentName }}</h2>
          <p>{{ bio }}</p>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        studentName: 'John Doe', // Replace with actual student name
        bio: 'This is the student bio.', // Replace with actual student bio
      };
    },
    methods: {
      logout() {
        // Implement logout logic here
        // For example, remove the token from local storage and redirect to login page.
        // You can use this.$router.push('/login') to navigate to the login page.
      },
    },
  };
  </script>
  