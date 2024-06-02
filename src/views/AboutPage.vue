<!-- App.vue -->
<template>
    <div class="main">
      
      <Navbar />
      
      
      <About_Table />
    </div>
  </template>
  
  <script>
  // Import components
  import Navbar from '../components/Navbar.vue';
  import About_Table from '../components/About_Table.vue';
  
  export default {
    components: {
      Navbar,
      About_Table
    },
    
  }
  </script>
  
  <style>
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .main{
      width: 100%;
      background: linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%),
  url(../assets/3.jpg);
      background-position: center;
      background-size: cover;
      height: 100vh;
  }
  </style>
  
  
  