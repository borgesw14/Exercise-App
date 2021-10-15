<template>
  <div id="nav-container" class="container">
    <div class="columns">
      <div class="column">
        <nav class="navbar has-shadow is-white px-6 is-fixed-top">
      <!-- <nav class="navbar has-shadow is-white px-6"> -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-4">FitLife</router-link>
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
          <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">Workouts</a>

            <div class="navbar-dropdown">
              <router-link to="/workouts_history" class="navbar-item">History</router-link>
              <router-link to="/workouts_new" class="navbar-item">New Workout</router-link>
            </div>
          </div>

          <!-- <a href="/friends" class="navbar-item">Friends</a> -->
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
            
            <a class="button is-white">
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
            </a>
            
          </div>
          <div class="navbar-item">
            <a class="button is-white">
              <span class="icon">
                <i class="fab fa-youtube"></i>
              </span>
            </a>
          </div>
          <div class="navbar-item">
            <a class="button is-white">
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
      </div>
    </div>
    
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
