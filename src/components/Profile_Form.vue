<template>
    <div class="form-container">
      <form @submit.prevent="onSubmit" @reset="onReset">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="courseYear">Course Year:</label>
          <input type="number" id="courseYear" v-model="form.courseYear" required>
        </div>
        <div class="form-group">
          <label for="matrixNo">Matrix No:</label>
          <input type="text" id="matrixNo" v-model="form.matrixNo" required>
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea id="address" v-model="form.address" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Save</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          courseYear: '',
          matrixNo: '',
          address: '',
        },
      };
    },
    methods: {
      onSubmit() {
        // Handle form submission
        console.log(this.form);
      },
      onReset() {
        // Reset form fields
        this.form = {
          name: '',
          courseYear: '',
          matrixNo: '',
          address: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
</style>