<template>
  <h4>Twój Bilans</h4>
  <h1 id="balance">{{ total }} ZŁ</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
