<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <table class="form-table">
        <tr class="form-group">
          <td><label for="name">Name</label></td>
          <td>:</td>
          <td><input type="text" id="name" v-model="form.name" required></td>
        </tr>
        <tr class="form-group">
          <td><label for="courseYear">Course Year</label></td>
          <td>:</td>
          <td><input type="text" id="courseYear" v-model="form.courseYear" required></td>
        </tr>
        <tr class="form-group">
          <td><label for="matrixNo">Matrix No</label></td>
          <td>:</td>
          <td><input type="text" id="matrixNo" v-model="form.matrixNo" required></td>
        </tr>
        <tr class="form-group">
          <td><label for="address">Address</label></td>
          <td>:</td>
          <td><textarea id="address" v-model="form.address" required></textarea></td>
        </tr>
        <tr class="form-buttons">
          <td colspan="3" class="button-cell">
            <button type="submit" class="save-button">Save</button>
            <button type="button" @click = "onReset" class="reset-button">Reset</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      /*
      form: {
        name: '',
        courseYear: '',
        matrixNo: '',
        address: '',
      },
      */
      form: this.getInitialFormState(),
    };
  },
  computed: {
    ...mapState(['profile']),
  },
  watch: {
    profile: {
      handler(newProfile) {
        this.form = { ...newProfile };
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['updateProfile']),
    getInitialFormState() {
      return { ...this.profile };
    },
    onSubmit() {
      this.updateProfile(this.form);
    },
    onReset() {
      this.form = this.getInitialFormState();
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
  
  background-position: center;
  background-size: cover;
}

form {
  margin-top: -250px;
  padding: 20px;
  border-radius: 10px;
  
  width: 400px;
  color: white;
  background: transparent;
  font-size: large;
}

.form-table {
  width: 100%;
  
  border: 1px solid white;

}
td {
  border: 1px solid gray;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group td {
  padding: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
}

.button-cell {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-left: 120%;
  border: none;
  margin: 10px;
  
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.save-button,
.reset-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button {
  background-color: darkgreen;
  color: white;
}

.reset-button {
  background-color: darkgreen;
  color: white;
}
</style>
