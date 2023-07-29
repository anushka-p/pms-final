<template>
    <div>
      <v-card class="student-card" v-for="student in students" :key="student.id">
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
      students: {
        type: Array,
        required: true,
      },
    },
    methods: {
      toggleCollapse(student) {
        // student.collapsed = !student.collapsed;
        if (!('collapsed' in student)) {
        this.$set(student, 'collapsed', true);
      } else {
        student.collapsed = !student.collapsed;
      }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  .student-card {
    margin-bottom: 16px;
    cursor: pointer;
    margin-top: 30px;
  }
  </style>
  