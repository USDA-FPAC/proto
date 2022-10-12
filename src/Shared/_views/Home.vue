<template>
  <div>

    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Home</h1>
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

        <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/2@m">

              <range
                :ID="priceRangeFieldId"
                @emitRangeChange="handleRangeChange"
                EXTRA_FIELD_CLASSES="fds-field--fill"
                RANGE_LABEL="Price Range"
                LOW_VALUE="30"
                LOW_LABEL_TITLE="lower price value"
                HIGH_VALUE="70"
                HIGH_LABEL_TITLE="higher price value"
                :STEP="rangeStep"
                USE_PREFIX="true"
                PREFIX="$"
                USE_SUFFIX="false"
                SUFFIX="%"
                USE_ICON="false"
                ICON_PATH="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"
                ICON_SIZE_CLASS="fds-icon--size-2"
                :ARIA_DESCRIBEDBY="priceRangeFieldId + '__help'"
                HELP_MESSAGE="Receive a better offer with a smaller price range"
                INPUT_ERROR_CLASS="fds-input--error"
                ERROR_MESSAGE="That price range is not acceptable."
                HAS_ERROR="false"
                USE_POPOVER="false"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--tr fds-popover--size-small"
                :POPOVER_ID="priceRangeFieldId+'-help-popover'"
                POPOVER_HEADER="Price Range Help"
                ref="priceRangeFieldRef"
              >
                <div :id="priceRangeFieldId + '-popup-body'">
                  <p><strong>Note:</strong> The low and high prices values will automatically adjust if one is exceeding the limits of the range..</p>
                </div>
              </range>

            </div>
            <div class="fds-grid__1/1 fds-grid__1/2@m">

              <p class="fds-m-t--m">
                <button @click="setError('price-range')" class="fds-btn fds-btn--secondary">Toggle Price Range Error</button>
              </p>

            </div>
          </div>

          <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/2@m">

              <field
                :ID="nameFieldId"
                EXTRA_FIELD_CLASSES=""
                LABEL="Full Name"
                INPUT_VALUE=""
                INPUT_TYPE="text"
                REQUIRED="true"
                ARIA_REQUIRED="true"
                BEHAVIOR=""
                :ARIA_DESCRIBEDBY="nameFieldId + '__help'"
                HELP_MESSAGE="Use your full name, please."
                ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
                HAS_ERROR="false"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--rt fds-popover--size-small"
                :POPOVER_ID="nameFieldId+'-help-popover'"
                POPOVER_HEADER="Name Field Help"
                ref="nameField"
              >
                <div :id="nameFieldId + '-popup-body'">
                  <p><strong>Note:</strong> Please provide your full legal given name, a it is written on your birth certificate.</p>
                </div>
              </field>

            </div>
            <div class="fds-grid__1/1 fds-grid__1/2@m">

              <p class="fds-m-t--m">
                <button @click="setError('name')" class="fds-btn fds-btn--secondary">Toggle Name Error</button>
              </p>

            </div>
          </div>

          <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/2@m">
              
              <field-group
                :ID="piesFieldId"
                GROUP_TYPE="radio"
                DISPLAY=""
                LABEL="Pick a Pie"
                :DATA="pieData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_FIELD_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Select your favorite."
                ERROR_MESSAGE="Why don't you like my pies?"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--tr fds-popover--size-small"
                :POPOVER_ID="piesFieldId+'-help-popover'"
                POPOVER_HEADER="Pies Help"
                ref="pieField"
              >
                <div :id="piesFieldId + '-popup-body'">
                  <p><strong>Note:</strong> Select the pie that you like the most to bring to parties.</p>
                </div>
              </field-group>
              
            </div>
            <div class="fds-grid__1/1 fds-grid__1/2@m">

              <p class="fds-m-t--l">
                <button @click="setError('pies')" class="fds-btn fds-btn--secondary">Toggle Pie Error</button>
              </p>
              
            </div>
          </div>

          <div class="fds-level fds-level--justify-between fds-level--align-top">
            <span>
              <selection
                :ID="vehicleId"
                LABEL="What do you drive?"
                :DATA="vehicleData"
                REQUIRED="true"
                SELECT_CLASSES=""
                EXTRA_FIELD_CLASSES=""
                EXTRA_SELECT_CLASSES="fds-select--fill"
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="true"
                HELP_MESSAGE="Select your ride."
                ERROR_MESSAGE="You must like walking!"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--rt fds-popover--size-small"
                :POPOVER_ID="vehicleId+'-help-popover'"
                POPOVER_HEADER="Vehicle Help"
                ref="vehicleField"
              >
                <div :id="vehicleId + '-popup-body'">
                  <p><strong>Note:</strong> Select the vehicle that has the least amount of C0<sub>2</sub> emissions.</p>
                </div>
              </selection>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('vehicle')" class="fds-btn fds-btn--secondary">Toggle Vehicle Error</button>
              </p>
            </span>
          </div>

          <div class="fds-level fds-level--justify-between fds-level--align-top">
            <span>
              <selectMulti
                ID="animal"
                LABEL="Select large animals."
                :DATA="animalData"
                REQUIRED="false"
                EXTRA_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Please don't feed them."
                ERROR_MESSAGE="Those are small ones, buddy!"
                ref="animalField"
              >
              </selectMulti>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('animal')" class="fds-btn fds-btn--secondary">Toggle Animal Error</button>
              </p>
            </span>
          </div>

        </div>
      </div>
      <div class="fds-section">
        <div class="fds-section__bd">
          <h2>{{headerText}}</h2>
          <span class="fds-m-t--l">{{searchResults}}</span>
        </div>
      </div>

      <page-level-help-modal :MODAL_ID="helpModalId"></page-level-help-modal>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/_composables/useNavigation';
import { useModalControls } from '@/_composables/useModalControls';
import { usePopoverControls } from '@/_composables/usePopoverControls';

import { v4 as uuidv4 } from 'uuid';


import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/_components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/_components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/_components/selection/selection.vue'));
const selectMulti = defineAsyncComponent(() => import('@/_components/select-multi/select-multi.vue'));
const pageLevelHelpModal = defineAsyncComponent(() => import('@/Demos/_views/help/Page-Level-Help-Modal.vue'));
const inlineHelp = defineAsyncComponent(() => import('@/_components/inline-help/inline-help.vue'));
const range = defineAsyncComponent(() => import('@/_components/range/range.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    selectMulti,
    pageLevelHelpModal,
    inlineHelp,
    range
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();

    const {
      setModalId,
      getModalId,
      showModal,
      hideModal
    } = useModalControls();

    const { showPopover, hidePopover } = usePopoverControls();

    const helpModalId = ref( uuidv4() );
    setModalId(helpModalId.value);
    
    const priceRangeFieldRef = ref(null);
    const priceRangeFieldId = ref( uuidv4() );
    const rangeStep = ref('10'); // element property expects a string, not int
    const handleRangeChange = (_obj) => {
      // Do stuff here to control Parent
      //let step = parseInt( rangeStep.value ); 
    }

    const nameField = ref(null);
    const nameFieldId = ref( uuidv4() );

    const pieField = ref(null);
    const vehicleField = ref(null);
    const animalField = ref(null);

    const piesFieldId = ref( uuidv4() );
    const pieData = [
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];

    const vehicleDataZZZ = [
      { id: "v0", label: "Select a Vehicle", name: "vehiclesGroup", val: 0, isDisabled: true, isSelected: true },
      { id: "v1", label: "Motor Scooter", val: "scoot", name: "vehiclesGroup"},
      { id: "v2", label: "Cafe Racer", val: "cf", name: "vehiclesGroup"},
      { id: "v3", label: "Can-Am", val: "can", name: "vehiclesGroup"},
      { id: "v4", label: "4-Door Sedan", val: "sedan", name: "vehiclesGroup"},
      { id: "v5", label: "Sports Coupe", val: "Coupe", name: "vehiclesGroup"},
      { id: "v6", label: "Cross Over SUV", val: "xo", name: "vehiclesGroup"},
      { id: "v7", label: "Minivan", val: "van", name: "vehiclesGroup"},
      { id: "v8", label: "Pickup Truck", val: "truck", name: "vehiclesGroup"},
      { id: "v9", label: "7 Passenger SUV", val: "suv", name: "vehiclesGroup"},
      { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "vehiclesGroup"}
    ];

    const vehicleId = ref(uuidv4());
    const vehicleData = [
      { 
        groupId: "g0",
        groupData: [
          { id: "v0", label: "Select a Vehicle", name: "vehiclesGroup", val: 0, isDisabled: true, isSelected: true },
        ]
      },
      { 
        groupId: "g1",
        groupLabel: "Small Vehicles",
        groupData: [
          { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
          { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
          { id: "v3", label: "Can-Am", val: "can", name: "small"},
        ]
      },
      { 
        groupId: "g2",
        groupLabel: "Medium Vehicles",
        groupData: [
          { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
          { id: "v5", label: "Sports Coupe", val: "Coupe", name: "medium"},
          { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
        ]
      },
      { 
        groupId: "g3",
        groupLabel: "Large Vehicles",
        groupData: [
          { id: "v7", label: "Minivan", val: "van", name: "large"},
          { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
          { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
          { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"},
        ]
      },
    ];

    const animalData = [
      { id: "a0", label: "Select all", val: "", name: "a0", behavior: "select-multi-all"},
      { id: "a1", label: "Aligator", val: "", name: "a1", behavior: ""},
      { id: "a2", label: "Buffalo", val: "checked", name: "a2", behavior: ""},
      { id: "a3", label: "Cow", val: "", name: "a3", behavior: ""},
      { id: "a4", label: "Dolphin", val: "", name: "a4", behavior: ""},
      { id: "a5", label: "Elephant", val: "", name: "a5", behavior: ""},
      { id: "a6", label: "Frog", val: "", name: "a6", behavior: ""},
      { id: "a7", label: "Goose", val: "", name: "a7", behavior: ""},
    ];


    let nameHasError = ref(false);
    let piesHasError = ref(false);
    let vehicleHasError = ref(false);
    let animalHasError = ref(false);
    let priceRangeHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(nameHasError.value);
      } 
      if(type=='pies'){
        piesHasError.value = piesHasError.value ? false : true;
        pieField.value.setHasError(piesHasError.value);
      }
      if(type=='vehicle'){
        vehicleHasError.value = vehicleHasError.value ? false : true;
        vehicleField.value.setHasError(vehicleHasError.value);
      }
      if(type=='animal'){
        animalHasError.value = animalHasError.value ? false : true;
        animalField.value.setHasError(animalHasError.value);
      } 
      if(type=='price-range'){
        priceRangeHasError.value = priceRangeHasError.value ? false : true;
        let el = priceRangeFieldRef.value;
        el.setHasError(priceRangeHasError.value);
        el.hasErrorCaller(priceRangeHasError.value);
      } 
    }

    const headerText = ref('Search Header Default');
    const searchResults = ref('');

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results:'
      searchResults.value = obj.phrase;
    };

    onMounted(()=>{

    });

    return {
      priceRangeFieldRef,
      priceRangeFieldId,
      handleRangeChange,
      rangeStep,
      nameField,
      nameFieldId,
      piesFieldId,
      pieField,
      vehicleId,
      vehicleField,
      animalField,
      setError,
      pieData,
      vehicleData,
      animalData,
      submitSearch,
      searchResults,
      headerText,
      showModal,
      hideModal,
      helpModalId,
      showPopover,
      hidePopover
    }
  }

}
</script>