
<template>
    <div class="main">
      
      <Navbar />
      
      
      <Photos_List />
    </div>
    
  </template>
  
  <script>
  // Import components
  import Navbar from '../components/Navbar.vue';
  import Photos_List from '../components/Photos_List.vue';
  
  
  export default {
    components: {
      Navbar,
      Photos_List
    },
    
  };
  </script>
  
  <style>
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto; /* Ensure scrolling is enabled */
}
  .main{
      width: 100%;
      background: url(../assets/3.jpg);
      background-position: center;
      background-size: cover;
      height: 100vh;
      position: relative;
      overflow: auto;

  }
  </style>
  
  
  