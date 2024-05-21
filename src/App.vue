<!-- App.vue -->
<template>
  <div class="main">
    <!-- Use the navbar component -->
    <Navbar />
    
    <!-- Use the content component -->
    <Content />
  </div>
</template>

<script>
// Import navbar and content components
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';

export default {
  components: {
    Navbar,
    Content
  },
  // Main Vue component logic goes here
};
</script>

<style>
/* Main component styles go here */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main{
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%),
url(./assets/3.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
}
</style>


