<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row justify="center" align="center" style="height: 60vh">
      <v-col cols="12">
        <v-card elevation="10" style="height: 60%">
          <div style="position: relative">
            <v-img
              src="../assets/backg.jpg"
              alt="Background Image"
              height="60%"
              width="100%"
            ></v-img>
            <div class="black-box">
              <!-- Add the text content on top of the image -->
              <div
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 80%;
                "
              >
                <v-card-title
                  class="text-h2 font-weight-bold"
                  align="center"
                  style="color: white"
                  >Welcome to Our College Placement Portal</v-card-title
                >
                <v-spacer></v-spacer>
                <v-card-text>
                  <p class="text-h4" align="center" style="color: white">
                    Unlock Your Potential: Step into a world of endless
                    possibilities as you join our college placement portal,
                    designed to guide you towards achieving your professional
                    goals and landing your dream job. Embrace a seamless
                    transition from college to the corporate world with our
                    comprehensive placement portal, dedicated to fostering your
                    growth and securing promising career prospects.
                  </p>
                </v-card-text>
                <v-col cols="auto">
                  <div class="text-center">
                    <v-btn size="large" color="primary" to="user/registration"
                      >Let's get started</v-btn
                    >
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Add custom styles if needed */
.text-center {
  text-align: center !important;
}
</style>