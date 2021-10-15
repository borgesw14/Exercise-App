<template>
  <!-- Post -->
  <article class="media">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.src" :alt="post.alt" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="post.user.pic" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ post.user.firstName }} {{ post.user.lastName }}
            </p>
            <p class="subtitle is-6">{{ post.user.handle }}</p>
          </div>
        </div>
        <div class="content">
          <p class="title">Workout Title</p>
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <strong>Location</strong>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quia facere alias nesciunt eveniet tenetur odit mollitia voluptatibus
          expedita. Ipsa mollitia illum inventore ad officia ex facere adipisci
          ducimus deserunt error non quo perferendis sit quisquam, eos quam vel
          consectetur debitis itaque libero? Aliquam veniam atque iste similique
          impedit asperiores labore, placeat tenetur provident nihil tempora ea.
          Nam, facilis assumenda.
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style>
</style>