<template>
  <div>
    <header>
      <globalNav :NAV_DATA="navigationData"
        EXTRA_CLASSES="fds-nav-global__list-item--multi-column"
        USE_SEARCH="false"
        ></globalNav>
    </header>
    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <h1>Page Header</h1>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';

import globalNav from "@/_components/global-nav/global-nav.vue";

export default {
  components: {
    globalNav
  },

  setup(props) {
    const store = useStore();

    const navigationData = computed(() => store.getters["fpacnow/getNavigation"]);

    onMounted(() => {
      store.dispatch("fpacnow/setNavigation");
    });

    return {
      navigationData
    };
  }
};
</script>