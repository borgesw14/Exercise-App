<template>
  <!-- feed -->
  <div id="feed-column" class="column">
    <div class="post" v-for="(p, index) in posts" :key="index">
      <post :post="p" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import session from "../services/session";
import { GetFeed } from "../services/posts";

export default {
  components: { Post },
  data() {
    return {
      posts: GetFeed(session.user.handle),
    };
  },
};
</script>

<style>
</style>