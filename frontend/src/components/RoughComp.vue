<<<<<<< Updated upstream
=======
<template>
  <div>
    <v-card class="student-card" v-for="student in students" :key="student.id">
      <v-card-title>{{ student.firstname }}</v-card-title>
      <v-card-title>{{ student.lastname }}</v-card-title>
      <!-- Display other student details here -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
.student-card {
  margin-bottom: 16px;
}
</style>


  

  
>>>>>>> Stashed changes
