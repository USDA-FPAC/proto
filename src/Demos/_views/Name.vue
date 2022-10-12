<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <h1>Dynamic Router Demo</h1>

          <div class="fds-m-t--sm">
              <p class="fds-m-t--7">What page are we on?  <span class="fds-text-size--5">{{ pageName }}</span></p>
          </div>

          

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){
    
    const route = useRoute();

    const pageName = ref(route.params.id);

    watch( () => route.params.id, _newId => pageName.value = _newId );

    return {
      pageName
    }
  }
}
</script>