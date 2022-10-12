<template>
  <header>
    <tophat
      AG_ABBR="USDA"
      AG_FULL="United States Department of Agriculture"
      AG_URL="//www.usda.gov"
      :AG_LOGO="baseUrl + 'img/usda-logo--white.svg'"
      SUB_AG_ABBR="FPAC"
      SUB_AG_FULL="Farm Production and Conservation"
      SUB_AG_URL="//www.fpacbc.usda.gov/"
     >
     </tophat>
     
    <headerApp
      APP_ABBR_NAME="UXP"
      APP_FULL_NAME="User Experience Prototype"
      PROFILE_NAME="Michael Scott (Log off)"
      LOGOFF_URL="https://www.eauth.usda.gov/Logout/logoff.asp"
    >
    </headerApp>
    
    <globalNav
      :NAV_DATA="navigationData"
      EXTRA_CLASSES="fds-nav-global__list-item--multi-column"
      @emitSearch="submitSearch"
      USE_SEARCH="true"
    ></globalNav>
    
  </header>
</template>

<script>
import { onMounted, ref, reactive, computed } from 'vue';

import { navigationService } from '@/Shared/_services/navigation.service';
import { useStore } from 'vuex';


import tophat from '@/_components/tophat/tophat.vue';
import headerApp from '@/_components/header-app/header-app.vue';
import globalNav from '@/_components/global-nav/global-nav.vue';
//import modal from '@/_components/Modal.vue';

export default {
  components: {
    tophat,
    headerApp,
    globalNav
  },
  setup(props, {emit}){
    const store = useStore();

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    const baseUrl = ref(import.meta.env.BASE_URL);

    const submitSearch = ( obj ) => {
      emit('emitSearch',obj)
      console.log('NAV SEARCH BASEHEADER', obj)
    };

    onMounted(()=>{
      store.dispatch("navigation/setNavigation");
    });

    return {
      baseUrl,
      navigationData,
      submitSearch
    }
  }  
}

</script>