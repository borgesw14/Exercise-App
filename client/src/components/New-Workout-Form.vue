<template>
  <!-- New Workout form -->
  <div class="section">
    <div class="container">
      <form action="" class="form">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Workout Title"
              v-model="title"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Location</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Workout Title"
              v-model="location"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select">
              <select v-model="workoutType">
                <option>Cardio</option>
                <option>Strength</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" v-model="description"></textarea>
          </div>
        </div>

        <div class="field file is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Upload Photo </span>
            </span>
          </label>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="savePost">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      location: "",
      workoutType: "",
      description: "",
    };
  },
  methods: {
    async savePost() {
      const response = await axios.post("api/posts/", {
        title: this.title,
        location: this.location,
        workoutType: this.workoutType,
        description: this.description,
      });
      console.log(response);
      this.title = "";
      this.location = "";
      this.workoutType = "";
      this.description = "";
    },
  },
};
</script>

<style>
</style>