<template lang="html">

  <div class="">
    <h3>Create Barber Ranks Account</h3>

    <b-form @submit="onSubmit" @reset="onReset">

      <!-- Email -->
      <b-form-group id="email-group"
                    label="Email address:"
                    label-for="email-input"
                    horizontal>
        <b-form-input id="email-input"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- Full Name -->
      <b-form-group id="name-group"
                    label="Full Name:"
                    label-for="name-input"
                    horizontal>
        <b-form-input id="name-input"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter full name"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- Password -->
      <b-form-group id="password-group"
                    label="Password:"
                    label-for="password-input"
                    horizontal>
        <b-form-input id="password-input"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Create password"
                      size="sm">

        </b-form-input>
      </b-form-group>

      <b-row>
        <b-col sm="2">
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
        <b-col></b-col> <!--Spacer column-->
        <b-col sm="2">
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-col>

      </b-row>


    </b-form>
  </div>

</template>

<script>
export default {
  created: function(){

    console.log("process.env");
    console.log(process.env);
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();

      console.log("Creating account:");
      console.log(JSON.stringify(this.form));

      this.$store.dispatch('createBrAccount').then(() => {
        this.$store.dispatch('setWizardStep', 2);
      });
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style lang="css">
</style>
