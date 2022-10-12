<template>
    <h1>?? {{ header }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <p class="cdh">Testing Paragraph Text</p>

    <button class="fds-btn fds-btn--primary" @click="incrementCount()">count is: {{ count }}</button> <button class="fds-btn fds-btn--tertiary" @click="decrementCount()">count is: {{ count }}</button>
    <p>Edit<code>components/HelloWorld.vue</code> to test hot module replacement.</p>

    <div>
      <button class="fds-btn fds-btn--secondary" data-behavior="open-modal" aria-controls="MODAL-ID-123" aria-expanded="false" type="button">Eject</button>
    </div>

    <div class="fds-spinbox">
      <div class="fds-spinbox__number">
        <input class="fds-input fds-spinbox__input" id="lorem-ipsum-amount__hsus" name="lorem-ipsum-amount" type="number" step=".01" value="10">
      </div>
      <div class="fds-spinbox__actions" aria-hidden="true">
        <button tabindex="-1" class="fds-spinbox__btn fds-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
        <button tabindex="-1" class="fds-spinbox__btn fds-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
      </div>
    </div>

    <div class="fds-level">
      <span>
        <input @change="sliderChange()" class="fds-slider fds-slider--block" id="theSlider" name="lorem-range-4672" type="range" min="0" max="100" :value="slider" step="10">
      </span>
      <span><output aria-live="polite" id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">{{slider}}</output></span>
    </div>

    <modal ID="MODAL-ID-123"/>

</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';
import modal from '@/_components/Modal.vue';

export default {
  setup(props){
    const fdsModal = inject('fdsModal');
    let count = ref(0);
    let slider = ref(0);
    function incrementCount(){
      count.value++;
    };
    function decrementCount(){
      count.value--;
    };
    function sliderChange(){
      slider.value = document.getElementById('theSlider').value;
    };
    onMounted(() => {
      fdsModal.init();
    });
    return {
      count,
      slider,
      incrementCount: incrementCount,
      decrementCount: decrementCount,
      sliderChange: sliderChange
    }
  },
  components: {
    modal: modal
  },
  props: {
    header: String
  }

}


</script>

<style lang="scss">
$cdh-color: $color-fds-yellow;

.cdh {
  color: $cdh-color;
}
</style>