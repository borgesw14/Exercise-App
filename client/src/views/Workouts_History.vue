<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <profile-sidebar />
          <feed-history />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FeedHistory from "../components/Feed-History.vue";
import ProfileSidebar from "../components/Profile-Sidebar.vue";
export default {
  components: { FeedHistory, ProfileSidebar },
};
</script>
