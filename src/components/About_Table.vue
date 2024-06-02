<template>
    <div class="table-container">
      <table>
        
        <tr>
        <td class="field">Name</td>
        <td>:</td>
        <td class="entry">{{ profile.name }}</td>
      </tr>
      <tr>
        <td class="field">Course Year</td>
        <td>:</td>
        <td class="entry">{{ profile.courseYear }}</td>
      </tr>
      <tr>
        <td class="field">Matrix No</td>
        <td>:</td>
        <td class="entry">{{ profile.matrixNo }}</td>
      </tr>
      <tr>
        <td class="field">Address</td>
        <td>:</td>
        <td class="entry">{{ profile.address }}</td>
      </tr>
        
      </table>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['profile']),
  },
};
  </script>
  
  <style scoped>
  .table-container {
    display: flex;
    justify-content: center;
  }
  
  table {
    border-collapse: collapse;
  }
  
  td {
    color: white;
    border: 1px solid white;
    padding: 10px;
  }
  .field{
    font-size: 20px;
  }
  .entry{
    font-size: 36px;
    color: orange;

  }
  </style>