<template>
  <div class="container">
    <nav class="navbar has-shadow is-white px-6 is-fixed-top">
      <!-- <nav class="navbar has-shadow is-white px-6"> -->
      <div class="navbar-brand">
        <a href="/" class="navbar-item is-size-4">FitLife</a>
        <a
          class="navbar-burger"
          @click="toggleIsActive"
          :class="{ 'is-active': showNav }"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <a href="/dashboard" class="navbar-item">Dashboard</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">Workouts</a>

            <div class="navbar-dropdown">
              <a href="/workouts_history" class="navbar-item">History</a>
              <a href="/workouts_new" class="navbar-item">New Workout</a>
            </div>
          </div>

          <a href="/friends" class="navbar-item">Friends</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <input
              type="text"
              class="input is-dark is-rounded"
              placeholder="Search"
            />
          </div>

          <div class="navbar-item">
            <span class="icon">
              <a class="button is-white"><i class="fa fa-facebook"></i></a>
            </span>
          </div>
          <div class="navbar-item">
            <span class="icon">
              <a class="button is-white"><i class="fa fa-youtube"></i></a>
            </span>
          </div>
          <div class="navbar-item">
            <span class="icon">
              <a class="button is-white"><i class="fa fa-instagram"></i></a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleIsActive() {
      this.showNav = !this.showNav;
    },
  },
  data() {
    return {
      showNav: false,
    };
  },
};
</script>
