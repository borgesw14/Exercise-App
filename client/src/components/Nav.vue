<template>
  <div id="nav-container" class="container">
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
          <div class="navbar-item is-hidden-desktop">
            <input
              type="text"
              class="input is-dark is-rounded"
              placeholder="Search"
            />
          </div>
          <router-link to="/feed" class="navbar-item">Feed</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a href="#" class="navbar-link">Workouts</a>

            <div class="navbar-dropdown">
              <router-link to="/workouts_history" class="navbar-item"
                >History</router-link
              >
              <router-link to="/workouts_new" class="navbar-item"
                >New Workout</router-link
              >
            </div>
          </div>

          <!-- <a href="/friends" class="navbar-item">Friends</a> -->
        </div>
        <div class="navbar-end">
          <div class="navbar-item is-hidden-touch">
            <o-field label="Find a User">
              <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="e.g. vp" icon="search" clearable @select="option => selected = option">
                
              </o-autocomplete>
            </o-field>
          </div>
          <div class="navbar-item is-hidden-touch">
            <login-badge />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { GetAll } from '../services/users';
import LoginBadge from "./LoginBadge";
export default {
  methods: {
    toggleIsActive() {
      this.showNav = !this.showNav;
    },
  },
  data() {
    return {
      showNav: false,
      data:[],
      name: '',
    };
  },
  components: {
    LoginBadge,
  },
  created() {
    document.title = "FitLife";
  },
  async mounted() {
    this.data = GetAll();
  },
  computed: {
      filteredDataArray() {
        return this.data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    }
};
</script>
