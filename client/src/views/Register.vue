<template>
  <form class="section is-large">
    <p class="title">Register</p>

    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Email" v-model="email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">Register</button>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {},
};
</script>

<style>
</style>