<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="UXP">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="UXP-123-XYZ">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';

import footerTopper from '@/_components/footer/footer-topper.vue';
import footerFooter from '@/_components/footer/footer-footer.vue';
import footerScreenId from '@/_components/footer/footer-screen-id.vue';
import hiddenItems from '@/_components/hidden/hidden-items.vue';

export default {
  setup(){

  },
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  }
}
</script>