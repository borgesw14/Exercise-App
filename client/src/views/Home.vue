<template>
  <div>
    <landing-hero/>
    <div class="section">
      <testimonials/>
    </div>
    <section class="section is-medium">
      <pricing/>
    </section>
    
    <section class="section is-medium has-background-light">
      <mailing-list/>
    </section>

  </div>
  
</template>

<script>
import LandingHero from '../components/Landing-Hero.vue';
import MailingList from '../components/Mailing-List.vue';
import Pricing from '../components/Pricing.vue';
import Testimonials from '../components/Testimonials.vue';
export default {
  
  name: 'Home',
  components: {
    LandingHero,
    Testimonials,
    Pricing,
    MailingList
  }
}
</script>
