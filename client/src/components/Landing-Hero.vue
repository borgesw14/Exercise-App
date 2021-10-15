<template>
  <div class="container">
    <section id="header-hero" class="hero is-halfheight is-light hero-header">
      <div class="hero-body">
        <div class="container has-text-left">
          <p class="title has-text-white is-size-1">Your Life</p>
          <p class="subtitle has-text-white is-size-3">but Fit</p>
          <button class="button is-dark is-rounded mr-3">Sign Up</button>
          <a class="button is-white is-rounded is-outlined" @click="login"
            >Login</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/login");
      //this.Session.Login();
    },
  },
};
</script>


