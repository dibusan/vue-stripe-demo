<template lang="html">
  <div class="">
    <h3>Create Stripe Account</h3>
    <p>This account is to manage your money and is independent of the BarberRanks app</p>

    <a :href="stripe_connect_url">
      <b-button> Connect with Stripe </b-button>
    </a>

  </div>

</template>

<script>
  var test_client_id = "ca_E5Hvh5VQCWo8U9wiXD2oN7VMdROzQgxS";
  var redirect_uri = "http://localhost:8080/";

  export default {


    data: function(){
      return {
        stripe_connect_url: `https://connect.stripe.com/oauth/authorize?redirect_uri=${redirect_uri}&response_type=code&client_id=${test_client_id}&scope=read_write`,
      }
    }
  }
</script>

<style lang="css">
</style>
