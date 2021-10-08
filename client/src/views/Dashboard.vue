<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <profile-sidebar/>
        <feed/>
      </div>
    </div>
  </section>
</template>

<script>
import Feed from '../components/Feed.vue'
import ProfileSidebar from '../components/Profile-Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    ProfileSidebar,
    Feed
    
  }
}
</script>