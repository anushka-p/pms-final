<template>
    <div>
      <v-card class="student-card" v-for="student in studentsint" :key="student.id">
        <!-- Add a click event to toggle the collapse -->
        <v-card-title @click="toggleCollapse(student)">
          {{ student.firstname }} {{ student.lastname }}
        </v-card-title>
  
        <!-- Use v-collapse to show/hide the details when collapsed is false -->
        <v-collapse v-model="student.collapsed">
          <v-card-text>
            <!-- Display other student details here -->
            <p>Course: {{ student.course }}</p>
            <p>Phone: {{ student.phone }}</p>
            <!-- Add more student details as needed -->
          </v-card-text>
        </v-collapse>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      studentsint: {
        type: Array,
        required: true,
      },
    },
    methods: {
      toggleCollapse(student) {
        // Toggle the collapsed state for the clicked student
        console.log("hereree");
        student.collapsed = !student.collapsed;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  .student-card {
    margin-bottom: 16px;
    cursor: pointer;
  }
  </style>
  