<template>
  <div class="container">
    <!-- pricing banner -->
    <div class="level">
      <div class="level-item has-text-centered">
        <p class="title is-size-2">Pricing</p>
      </div>
    </div>

    <!--  Pricing tabs-->
    <div class="tabs is-boxed is-fullwidth">
      <ul>
        <li :class="{ 'is-active': basicActive }">
          <a @click="toggleBasic">
            <span>Basic</span>
          </a>
        </li>
        <li :class="{ 'is-active': premiumActive }">
          <a @click="togglePremium">
            <span>Premium</span>
          </a>
        </li>
        <li :class="{ 'is-active': superActive }">
          <a @click="toggleSuper">
            <span>Super</span>
          </a>
        </li>
      </ul>
    </div>

    <div id="tab-content">
      <div :class="{ 'is-hidden': !basicActive }">
        <div class="content">
          <h3 class="title is-size-3">Basic Plan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quas enim recusandae, numquam magnam consequuntur dolorem labore non
            a dolorum voluptates molestiae quasi suscipit accusantium.
            Laboriosam quidem consequatur officia quia.
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ol>
          <div class="level">
            <div class="level-item">
              <button class="button is-dark is-medium is-rounded">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'is-hidden': !premiumActive }">
        <div class="content">
          <h3 class="title is-size-3">Premium Plan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quas enim recusandae, numquam magnam consequuntur dolorem labore non
            a dolorum voluptates molestiae quasi suscipit accusantium.
            Laboriosam quidem consequatur officia quia.
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ol>
          <div class="level">
            <div class="level-item">
              <button class="button is-dark is-medium is-rounded">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'is-hidden': !superActive }">
        <div class="content">
          <h3 class="title is-size-3">Super Plan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quas enim recusandae, numquam magnam consequuntur dolorem labore non
            a dolorum voluptates molestiae quasi suscipit accusantium.
            Laboriosam quidem consequatur officia quia.
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ol>
          <div class="level">
            <div class="level-item">
              <button class="button is-dark is-medium is-rounded">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicActive: true,
      premiumActive: false,
      superActive: false,
    };
  },
  methods: {
    toggleBasic() {
      this.basicActive = true;
      this.premiumActive = false;
      this.superActive = false;
    },
    togglePremium() {
      this.basicActive = false;
      this.premiumActive = true;
      this.superActive = false;
    },
    toggleSuper() {
      this.basicActive = false;
      this.premiumActive = false;
      this.superActive = true;
    },
  },
};
</script>