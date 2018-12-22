<template>
  <div id="wizard-container">

    <div class="wizard-step" id="wizard-step-1">
      <vsd-create-br-account></vsd-create-br-account>
    </div>

    <div class="wizard-step" id="wizard-step-2-a">
      <vsd-standard-connect-stripe-account></vsd-standard-connect-stripe-account>
    </div>

    <div class="wizard-step" id="wizard-step-2-b">
      <vsd-express-connect-stripe-account></vsd-express-connect-stripe-account>
    </div>

    <div class="wizard-step" id="wizard-step-2-c">
      <vsd-custom-connect-stripe-account></vsd-custom-connect-stripe-account>
    </div>

    <div class="wizard-step" id="wizard-step-4">
      <vsd-account-setup-complete></vsd-account-setup-complete>
    </div>

  </div>
</template>

<script>
  import VsdCreateBrAccount from './vsd-create-br-account.vue';
  import VsdStandardConnectStripeAccount from './vsd-standard-connect-stripe-account.vue';
  import VsdExpressConnectStripeAccount from './vsd-express-connect-stripe-account.vue';
  import VsdCustomConnectStripeAccount from './vsd-custom-connect-stripe-account.vue';
  import VsdAccountSetupComplete from './vsd-account-setup-complete.vue';

  export default {
    name: 'vsd-wizard',
    components: {
      'vsd-create-br-account': VsdCreateBrAccount,
      'vsd-standard-connect-stripe-account': VsdStandardConnectStripeAccount,
      'vsd-express-connect-stripe-account': VsdExpressConnectStripeAccount,
      'vsd-custom-connect-stripe-account': VsdCustomConnectStripeAccount,
      'vsd-account-setup-complete': VsdAccountSetupComplete
    }
  }
</script>

<style>
  .wizard-step {
      background: #2980b9;
      border: #2980b9 5px solid;
      border-radius: 1rem;
      margin: 1em;
      padding: 1em;
      color: #bdc3c7;
  }


</style>
