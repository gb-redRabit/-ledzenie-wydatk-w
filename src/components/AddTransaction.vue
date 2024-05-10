<template>
  <h3>Dodaj nową transakcję</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Teskt</label>
      <input type="text" id="text" placeholder="Wprowadź tekst..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount">Kwota <br />
        (ujemny - wydatek, dodatni - dochód)</label>
      <input type="text" id="amount" placeholder="Wprowadź kwote..." v-model="amount" />
    </div>
    <button class="btn">Dodaj transakcję</button>
  </form>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const text = ref('');
const amount = ref('');

// Uzyskaj interfejs tostowy
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    // Wyświetl komunikat o błędzie toastu, jeśli którekolwiek pole jest puste
    toast.error('Obydwa pola muszą być wypełnione.');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit('transactionSubmitted', transactionData);

  // Wyczyść pola formularza
  text.value = '';
  amount.value = '';
};
</script>
