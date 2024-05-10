<template>
  <div class="inc-exp-container">
    <div>
      <h4>Dochód</h4>
      <p id="money-plus" class="money plus">+{{ income }} ZŁ</p>
    </div>
    <div>
      <h4>Koszt</h4>
      <p id="money-minus" class="money minus">-{{ expenses }} ZŁ</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
