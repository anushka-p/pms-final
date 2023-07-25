<template>
  <div>
    <v-app-bar app color="primary">
      <v-toolbar-title>Student Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text to="add-bio">Add Bio</v-btn> -->
      <v-btn text to="/student/portfolio">Create Portfolio</v-btn>
      <v-btn text to="update-portfolio">Update Portfolio</v-btn>
      <v-btn @click="logout" text>Logout</v-btn>
    </v-app-bar>
    <!-- <v-main>
      <v-container fluid="">
       
        <h1>Welcome, {{ studentName }}</h1>
        <div class="image-container text-right">
          <v-img
            src="../assets/grad4.png"
            alt="Background Image"
            height="60%"
            width="100%"
          ></v-img>
        </div>
      
       
      </v-container>
    </v-main> -->
     <v-main class="page-container">
      <v-container fluid>
       
        <v-row align="center" class="my-4">
          <!-- Column for text content -->
          <v-col cols="12" md="6">
            <h1 class="text-h1">Welcome, {{ studentName }}</h1>
            <h3 class="text-h5">
              Hello, future trailblazer! Begin your journey now and unleash your potential. Take the first step towards success by adding your portfolio.
            </h3>
          </v-col>

          <!-- Column for the image -->
          <v-col cols="12" md="6" class="text-right">
            <div class="image-container text-right">
              <v-img
                src="../assets/grad4.png"
                alt="Image"
                height="300px"
                width="300px"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: "John Doe", // Replace with actual student name
      // bio: "This is the student bio.", // Replace with actual student bio
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

<style>
   .page-container {
    display: grid;
  /* min-height: 100vh;   */
    align-items: center;
    justify-items: center;
    padding: 100px;
  }
  .my-custom-margin{
    margin:100px;
  }
  .text-h1{
    font-size: 36px;
  }
  .text-h5{
    font-size: 20px;
  }
   .image-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .image-container v-img {
    width: 100%;
    max-height: 300px; /* Increase the height of the image */
  }

</style>

