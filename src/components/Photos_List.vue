<!-- PhotoList.vue -->
<template>
    <div class = "header">
    <h1>List of Photos</h1>
    <hr>
</div>
    <div v-for="(photo, index) in photos" :key="photo.id" class="photo-container">
    <div>{{index + 1}}. {{ photo.title }}</div>
    <img :src="photo.url" alt="Photo" width = "200px">
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        photos: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
          .then(response => {
            this.photos = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Any scoped styles you may want */
  .photo-container {
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  margin-right: 120px;
  color: white;
}
.header {
    margin-left: 120px;
    color: white;
    margin-bottom: 50px;
    margin-right: 120px;
}
img{
    margin-bottom: 10px;
}

  </style>
  