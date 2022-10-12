<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between fds-level--wrap">
              <h1 class="fds-m--none">Growl Demo</h1>
              <div class="fds-level fds-level--justify-between fds-level--grow-auto">
                <span>
                  <button @click="showModal(helpModalId)" class="fds-btn fds-btn--block fds-btn--flat" type="button">
                    <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                    Help
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">
          
          
          <div v-if="alertsData" class="fds-m-t--l fds-box fds-level fds-level--gutter-l">
            <button
              v-for="alert in alertsData"
              :key="alert.id"
              :id="alert.id"
              :aria-controls="alert.id"
              @click="triggerAlert(alert.id)"
              class="fds-btn fds-btn--secondary">
              {{ alert.label }}
            </button>
          </div>


        </div>
      </div>

      
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { useGrowlControls } from '@/_composables/useGrowlControls';


import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

 
export default {

  components: {
    baseHeader,
    baseFooter
  },

  setup(props){
    const store = useStore();
    const { 
      showDefaultGrowl,
      showSuccessGrowl,
      showErrorGrowl,
      showWarningGrowl,
      showErrorModalGrowl,
      showWhiteout,
      setOrigin
    } = useGrowlControls();

    const alertOneId = ref(uuidv4());
    const alertTwoId = ref(uuidv4());
    const alertThreeId = ref(uuidv4());
    const alertFourId = ref(uuidv4());
    const alertFiveId = ref(uuidv4());
    

    const alertsData = ref([
      {
          "id": alertOneId,
          "label": "Show Default",
          "title": "Alert",
          "msg": "The system had done something, and we wanted to let you know.",
          "callback": showDefaultGrowl
      },
      {
          "id": alertTwoId,
          "label": "Show Success",
          "title": "Success",
          "useIcon": 'true',
          "msg": "Great, that was a successful thing!",
          "callback": showSuccessGrowl
      },
      {
          "id": alertThreeId,
          "label": "Show Error",
          "title": "Error",
          "useIcon": 'true',
          "msg": "Oh no! Something negative has happened.",
          "callback": showErrorGrowl
      },
      {
          "id": alertFourId,
          "label": "Show Warning",
          "title": "Warning",
          "useIcon": 'false',
          "msg": "This item might need attention. Be careful.",
          "callback": showWarningGrowl
      },
      {
          "id": alertFiveId,
          "label": "Show Error Modal",
          "title": "Error",
          "useIcon": 'true',
          "msg": "Oh no! Something negative has happened. I'm a Modal.",
          "callback": showErrorModalGrowl
      }
    ]);

    const triggerAlert = (_id) => {
      let aData = alertsData.value.find( (o)=> o.id == _id );
      aData.callback(aData);
    }

    return {
      alertsData,
      triggerAlert
    }
  }

}
</script>