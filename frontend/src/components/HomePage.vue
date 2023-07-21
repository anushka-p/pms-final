<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>College Placement Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="user/login">Login</v-btn>
      <v-btn color="secondary" to="user/registration">Register</v-btn>
    </v-app-bar>

    <!-- Hero Section -->
    <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        <v-card elevation="4">
          <v-img src="../assets/bg.jpg" height="400px"></v-img>
          <v-card-title class="headline font-weight-bold">Welcome to Our College Placement Portal</v-card-title>
          <v-card-text>
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat justo vel facilisis fermentum.
              Nulla facilisi. Sed in velit nec dolor tincidunt lacinia eu id ipsum. Sed a interdum nisi, a dapibus arcu.
            </p>
            <p>
              Phasellus ac enim sed nisi faucibus mollis. Nullam vehicula metus ut dolor sollicitudin, eget egestas ipsum vestibulum.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
/* Add custom styles if needed */
</style>