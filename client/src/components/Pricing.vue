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
        <li :class="{ 'is-active': active == tabIds.BASIC }">
          <a @click="active = tabIds.BASIC">
            <span>Basic</span>
          </a>
        </li>
        <li :class="{ 'is-active': active == tabIds.PREMIUM }">
          <a @click="active = tabIds.PREMIUM">
            <span>Premium</span>
          </a>
        </li>
        <li :class="{ 'is-active': active == tabIds.SUPER }">
          <a @click="active = tabIds.SUPER">
            <span>Super</span>
          </a>
        </li>
      </ul>
    </div>

    <div id="tab-content">
      <div :class="{ 'is-hidden': active != tabIds.BASIC }">
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
      <div :class="{ 'is-hidden': active == 2 }">
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
      <div :class="{ 'is-hidden': active == tabIds.SUEPR }">
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
const tabIds ={ BASIC : 1, PREMIUM : 2, SUPER : 3} ;
export default {
  data() {
    return {
      tabIds,
      active: 1,
    };
  },
  methods: {
  },
};
</script>