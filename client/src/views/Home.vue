<template>
  <div>
    <landing-hero/>
    <div class="section">
      <testimonials/>
    </div>
    
  </div>
  
</template>

<script>
import LandingHero from '../components/Landing-Hero.vue';
import Testimonials from '../components/Testimonials.vue';
export default {
  
  name: 'Home',
  components: {
    LandingHero,
    Testimonials
  }
}
</script>
