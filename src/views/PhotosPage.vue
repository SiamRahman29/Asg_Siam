<template>
    <div class="main">
      <Navbar @search="handleSearch" />
      <Photos_List ref="photosList" />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import Photos_List from '../components/Photos_List.vue';
  
  export default {
    components: {
      Navbar,
      Photos_List
    },
    data() {
      return {
        filteredPhotos: [], // Initialize as an empty array
        searchQuery: ''
      };
    },
    methods: {
      handleSearch(query) {
        this.searchQuery = query;
        this.filterPhotos();
      },
      filterPhotos() {
        // Check if photosList is defined and photos is not empty
        if (this.$refs.photosList && this.$refs.photosList.photos && this.$refs.photosList.photos.length > 0) {
          if (this.searchQuery === '') {
            this.filteredPhotos = [...this.$refs.photosList.photos]; // Reset to all photos
          } else {
            this.filteredPhotos = this.$refs.photosList.photos.filter(photo =>
              photo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
          }
        }
      }
    },
    watch: {
      // Watch for changes in photosList.photos and re-filter if necessary
      '$refs.photosList.photos': {
        handler() {
          this.filterPhotos();
        },
        deep: true
      }
    }
  };
  </script>
  
  <style>
  * {
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
  
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: auto;
    background: url(../assets/3.jpg);
    background-position: center;
    background-size: cover;
  }
  </style>
  