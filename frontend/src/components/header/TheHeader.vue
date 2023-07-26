<template>
  <v-card max-width="500" style="position: sticky; z-index: 1000">
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-title>College Placement Portal</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn text to="user/login">Login</v-btn>
        <v-btn color="white" to="user/registration">Register</v-btn>
        <div>
          <v-btn text to="update-portfolio">Update Portfolio</v-btn>
          <v-btn text to="/student/portfolio">Create Portfolio</v-btn>
          <v-btn text>Logout</v-btn>
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>