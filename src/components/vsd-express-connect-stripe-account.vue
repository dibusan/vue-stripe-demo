<template lang="html">
  <div class="">
    <h3>Create Stripe Account (Express Integration)</h3>
    <p>
      This redirects stripe Signup page that allows for some customization.
      ie. Logo Brand, etc.
    </p>

    <a :href="stripe_connect_url">
      <b-button> Connect with Stripe Express </b-button>
    </a>

  </div>
</template>

<script>
  var test_client_id = "ca_E5Hvh5VQCWo8U9wiXD2oN7VMdROzQgxS";
  var redirect_uri = "http://localhost:8080/";

  export default {
    data: function() {
      return {
        stripe_connect_url: `https://connect.stripe.com/express/oauth/authorize?redirect_uri=http://localhost:8080/&client_id=ca_E5Hvh5VQCWo8U9wiXD2oN7VMdROzQgxS`
      }
    }
  }
</script>

<style lang="css">
</style>
