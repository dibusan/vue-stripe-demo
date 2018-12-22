<template lang="html">
    <div class="">

      <div class="row">
        <div class="col-1 pull-left">
          <i class="status-success-icon fa fa-4x fa-check-circle" v-if="completedBrAccount"></i>
          <i class="status-incomplete-icon fa fa-4x far fa-times-circle" v-else></i>
        </div>
        <h5 class="col">Barber Ranks Account Created!</h5>
      </div>

      <div class="row">
        <div class="col-1 pull-left">
          <i class="status-success-icon fa fa-4x fa-check-circle" v-if="hasStripeAccount"></i>
          <i class="status-incomplete-icon fa fa-4x far fa-times-circle" v-else></i>
        </div>
        <h5 class="col">Striped Account Connected!</h5>
      </div>

      <div class="row">
        <div class="col-1">
          <i class="status-success-icon fa fa-4x fa-check-circle" v-if="hasBankAccount"></i>
          <i class="status-incomplete-icon fa fa-4x far fa-times-circle" v-else></i>
        </div>
        <h5 class="col">Bank Account Linked!</h5>
      </div>

    </div>
</template>

<script>
  export default {
      computed: {
        completedBrAccount: function(){
          return this.$store.state.brAccountCreated;
        },
        hasStripeAccount: function(){
          return this.$store.state.stripeAccountCreated;
        },
        hasBankAccount: function(){
          return this.$store.state.bankAccountConected;
        }
      }
  }
</script>

<style lang="css">
  .status-success-icon {
    color: rgba(46, 204, 113, 0.7);
  }

  .status-incomplete-icon {
    color: rgba(192, 57, 43, 0.7);
  }
</style>
