<template>
    <div>
      <v-app-bar app color="primary">
        <v-toolbar-title>Add Bio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="saveBio" text>Save Bio</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <v-textarea
            v-model="bio"
            label="Bio"
            outlined
            rows="5"
            required
          ></v-textarea>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bio: '', // Holds the student's bio
      };
    },
    methods: {
      async saveBio() {
        try {
          // Send the student's bio to the backend to save it in the database
          const response = await axios.post('/api/bio', { bio: this.bio });
  
          // Handle the response if needed
          console.log(response.data);
  
          // Optional: Show a success message to the user
          this.$snackbar.show({
            text: 'Bio saved successfully!',
            color: 'success',
          });
        } catch (error) {
          // Handle errors if needed
          console.error('Error saving bio:', error);
  
          // Optional: Show an error message to the user
          this.$snackbar.show({
            text: 'Error saving bio. Please try again later.',
            color: 'error',
          });
        }
      },
    },
  };
  </script>
  