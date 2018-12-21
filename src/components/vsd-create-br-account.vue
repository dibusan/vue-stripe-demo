<template lang="html">

  <div class="">
    <h3>Create Barber Ranks Account</h3>

    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="email-group"
                    label="Email address:"
                    label-for="email-input">
        <b-form-input id="email-input"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="name-group"
                    label="Full Name:"
                    label-for="name-input">
        <b-form-input id="name-input"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter full name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="password-group"
                    label="Password:"
                    label-for="password-input">
        <b-form-input id="password-input"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Create password">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

</template>

<script>
export default {
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
      alert(JSON.stringify(this.form));
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
