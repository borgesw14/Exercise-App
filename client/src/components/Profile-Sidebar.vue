<template>
  <div>
    <!-- profile sidebar -->
    <div class="column is-narrow">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="suser.pic" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                {{ suser.firstName }} {{ suser.lastName }}
              </p>
              <p class="subtitle is-6">{{ suser.handle }}</p>
            </div>
          </div>

          <div class="content">
            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <div>
                    <p class="heading">Following</p>
                    <p class="title">10</p>
                  </div>
                </div>
              </div>
              <div class="level-item">
                <div>
                  <p class="heading">Followers</p>
                  <p class="title">14</p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div>
                    <p class="heading">Post</p>
                    <p class="title">2</p>
                  </div>
                </div>
              </div>
            </div>
            <p class="heading">Latest Activity</p>
            <p>
              Morning Workout - <time datetime="2021-10-1">1 Oct 2021</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import session from "../services/session";
import { GetByHandle } from "../services/users";
export default {
  data() {
    return {
      suser: GetByHandle(session.user.handle),
    };
  },
};
</script>

<style>
</style>