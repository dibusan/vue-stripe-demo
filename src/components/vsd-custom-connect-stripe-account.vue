<template lang="html">
  <div class="">
    <h3>Create Stripe Account (Custom Integration)</h3>
    <p>
      With integration the user will never need to intract with Stripe.
      All account management and perorting will be done in this app.
    </p>

    <b-form @submit="onSubmit" >
      <!-- Country: Only US for the moment -->
      <b-form-group label="Country"
                    label-for="country-in"
                    horizontal>
        <b-form-select id="country-in"
                       v-model="form.country"
                       :options="supported_countries"
                       size="sm">
        </b-form-select>
      </b-form-group>

      <!-- Address Line 1 -->
      <b-form-group label="Address"
                    label-for="addr-1-in"
                    horizontal>
        <b-form-input v-model="form.addr1"
                      id="addr-1-in"
                      type="text"
                      required
                      placeholder="Address Line 1"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- City -->
      <b-form-group label="City"
                    label-for="city-in"
                    horizontal>
        <b-form-input v-model="form.city"
                      id="city-in"
                      type="text"
                      required
                      placeholder="City"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- Postal Code -->
      <b-form-group label="Postal Code"
                    label-for="zip-in"
                    horizontal>
        <b-form-input v-model="form.zip"
                      id="zip-in"
                      type="number"
                      required
                      placeholder="Postal Code"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- State -->
      <b-form-group label="State"
                    label-for="state-in"
                    horizontal>
        <b-form-input v-model="form.state"
                      id="state-in"
                      type="text"
                      required
                      placeholder="State"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- Date of Birth -->
      <b-form-group label="Date of Birth"
                    label-for="dob-in"
                    horizontal>
        <b-form-input v-model="form.dob"
                      id="dob-in"
                      type="date"
                      required
                      placeholder="Date of Birth"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <!-- SSN Last 4 digits -->
      <b-form-group label="Last 4 of SSN"
                    label-for="ssn-in"
                    horizontal>
        <b-form-input v-model="form.ssn"
                      id="ssn-in"
                      type="number"
                      required
                      placeholder="Last 4 of Social Security Number"
                      size="sm">
        </b-form-input>
      </b-form-group>

      <b-form-group></b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>



  </div>
</template>

<script>
  var countries = ["United States"];

  export default {
    data: function(){
      return {
        supported_countries: countries,
        form: {
          country: countries[0],
          dob: '1995-12-26',
          ssn: 2222

        }
      }
    },
    methods: {
      onSubmit (evt){
        evt.preventDefault();
        console.log(JSON.stringify(this.form));
        this.$store.dispatch('createCustomStripeAccount', this.form)
      }
    }
  }
</script>

<style lang="css">
</style>
