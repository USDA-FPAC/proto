<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Today Button</h1>
              <div class="fds-level fds-level--justify-between fds-level--grow-auto">
                <span>
                  
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--align-top">
          
            <div class="fds-field fds-field">
              <label class="fds-field__label" :for="datePickerOneId">Select Date <span class="fds-field__label-desc">Required</span></label>
              <input placeholder="mm/dd/yyyy" class="fds-input fds-field__item" :id="datePickerOneId" :aria-describedby="datePickerOneId+'__help'" aria-required="true" :name="datePickerOneId" type="text" value="">
              <span class="fds-field__help" :id="datePickerOneId+'__help'">Example 07/04/2019</span>
            </div>
            <button @click="setDateAsToday( datePickerOneId )" class="uxp-dp-margin-default fds-btn fds-btn--secondary" type="button">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>
              Today
            </button>

          </div>

        </div>
      </div>


      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--align-top">
          
            <div class="fds-field fds-field--fill">
              <label class="fds-field__label" :for="datePickerTwoId">Select Date <span class="fds-field__label-desc">Required</span></label>
              <input placeholder="mm/dd/yyyy" class="fds-input fds-field__item" :id="datePickerTwoId" :aria-describedby="datePickerTwoId+'__help'" aria-required="true" :name="datePickerTwoId" type="text" value="">
              <span class="fds-field__help" :id="datePickerTwoId+'__help'">Example 10/17/2020</span>
            </div>
            <button @click="setDateAsToday( datePickerTwoId, dateFormatTwo )" class="uxp-dp-margin-default fds-btn fds-btn--secondary" type="button">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>
              Today
            </button>

          </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--align-top">
          
            <div class="fds-field">
              <label class="fds-field__label" :for="datePickerThreeId">Select Date <span class="fds-field__label-desc">Required</span></label>
              <input disabled placeholder="mm/dd/yyyy" class="fds-input fds-field__item" :id="datePickerThreeId" :aria-describedby="datePickerThreeId+'__help'" aria-required="true" :name="datePickerThreeId" type="text" value="">
              <span class="fds-field__help" :id="datePickerThreeId+'__help'">Example 03/28/2022</span>
            </div>
            <button disabled @click="setDateAsToday( datePickerThreeId, dateFormatThree )" class="uxp-dp-margin-default fds-btn fds-btn--secondary" type="button">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>
              Today
            </button>

          </div>

        </div>
      </div>


      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--align-top">
          
            <div class="fds-field">
              <label class="fds-field__label" :for="datePickerFourId">Select Date <span class="fds-field__label-desc">Required</span></label>
              <input placeholder="mm/dd/yyyy" class="fds-input fds-field__item" :id="datePickerFourId" :aria-describedby="datePickerFourId+'__help'" aria-required="true" :name="datePickerFourId" type="text" value="">
              <span class="fds-field__help" :id="datePickerFourId+'__help'">Example 06/29/2022</span>
            </div>
            <button @click="setDateAsToday( datePickerFourId, dateFormatFour )" class="uxp-dp-margin-default fds-btn fds-btn--secondary" type="button">
              <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>
              Today
            </button>

          </div>

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, computed, watch, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from 'vuex';
import { useNavigation } from '@/_composables/useNavigation';
import { useUtilities } from '@/_composables/useUtilities';
import { useDatePicker } from '@/_composables/useDatePicker';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

 
export default {

  components: {
    baseHeader,
    baseFooter
  },

  setup(props){

    const { goto } = useNavigation();

    const {
      initializeDatePicker,
      createDatePicker,
      setDateAsToday,
      setRange } = useDatePicker();

    //initializeDatePicker( '/proto/scripts/datepicker.js');
    initializeDatePicker( 'https://usda-fpac.github.io/fds-style/js/vendor/fds-date-picker.js');

    // Date Picker ONE
    const dateFormatOne = ref("%m/%d/%Y");
    const datePickerOneId = ref( uuidv4() );
    
    const runDatePickerOne = () => {
      createDatePicker(
        {
          id: datePickerOneId.value,
          format: dateFormatOne.value,
          disabledDays: [0,0,0,0,0,0,0],
          staticPos: false
        }
      );
    }
    
    // Date Picker TWO
    const dateFormatTwo = ref("%m/%d/%Y");
    const datePickerTwoId = ref( uuidv4() );
    
    const runDatePickerTwo = () => {
      createDatePicker(
        {
          id: datePickerTwoId.value,
          format: dateFormatTwo.value,
          disabledDays: [0,0,0,0,0,1,1],
          staticPos: false
        }
      );
    }

    
    // Date Picker THREE
    const dateFormatThree = ref("%m/%d/%Y");
    const datePickerThreeId = ref( uuidv4() );
    
    const runDatePickerThree = () => {
      createDatePicker(
        {
          id: datePickerThreeId.value,
          format: dateFormatThree.value,
          disabledDays: [0,0,0,0,0,0,0],
          staticPos: false
        }
      );
    }

    // Date Picker FOUR
    const dateFormatFour = ref("%m/%d/%Y"); //"%n/%j/%Y" 
    const datePickerFourId = ref( uuidv4() );
    
    const runDatePickerFour = () => {
      createDatePicker(
        {
          id: datePickerFourId.value,
          format: dateFormatFour.value,
          disabledDays: [0,0,0,0,0,0,0],
          staticPos: true
        }
      );
    }

    
    const init = () => {
      runDatePickerOne();
      runDatePickerTwo();
      runDatePickerThree();
      runDatePickerFour();
    }

    onMounted(()=>{
      init();
    });

    return {
      datePickerOneId,
      dateFormatOne,
      datePickerTwoId,
      dateFormatTwo,
      datePickerThreeId,
      dateFormatThree,
      datePickerFourId,
      dateFormatFour,
      setDateAsToday
    }
  }

}
</script>

<style lang="scss">
.uxp-dp-margin-default {
  margin-top: 28px;
}
</style>