<template>
  <div>
    <landing-hero />
    <div class="section">
      <testimonials />
    </div>
    <section class="section is-medium">
      <pricing />
    </section>

    <section class="section is-medium">
      <mailing-list />
    </section>
    <Footer />
  </div>
</template>

<script>
import LandingHero from "../components/Landing-Hero.vue";
import MailingList from "../components/Mailing-List.vue";
import Pricing from "../components/Pricing.vue";
import Testimonials from "../components/Testimonials.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    LandingHero,
    Testimonials,
    Pricing,
    MailingList,
    Footer,
  },
};
</script>
