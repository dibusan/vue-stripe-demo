<template>
  <div id="wizard-container">
    <div class="wizard-step" id="wizard-step-1">
      <h3>Create Barber Ranks Account</h3>
    </div>

    <div class="wizard-step" id="wizard-step-2">
      <h3>Create Stripe Account</h3>
      <p>This account is to manage your money and is independent of the BarberRanks app</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'vsd-wizard',
    props: {}
  }
</script>

<style>
  .wizard-step {
      
  }

  html *
  {
    color: #1abc9c;
    font-family: Arial;
  }


</style>
