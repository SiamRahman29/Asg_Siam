<!-- App.vue -->
<template>
    <div class="main">
      
      <Navbar />
      
      
      <Profile_Form />
    </div>
  </template>
  
  <script>
  // Import components
  import Navbar from '../components/Navbar.vue';
  import Profile_Form from '../components/Profile_Form.vue';
  
  export default {
    components: {
      Navbar,
      Profile_Form
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
  
  
  