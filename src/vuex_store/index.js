import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 9999,
    brAccountCreated: false,
    stripeAccountCreated: false,
    bankAccountConected: false,
    currentWizardStep: 1
  },
  mutations: {
    setBrAccountCreated (state){
      state.brAccountCreated = true;
    },
    setStripeAccountCreated (state){
      state.stripeAccountCreated = true;
    },
    setWizardStep(state, step){
      state.currentWizardStep = step;
    }
  },
  actions: {
    setWizardStep (context, step) {
      context.commit('setWizardStep', step);
    },
    createBrAccount (context) {

      context.commit('setBrAccountCreated');
    },
    createCustomStripeAccount(context, form){
      var URL = "https://api.stripe.com/v1/accounts"

      fetch(URL, {
        body: "country=US&type=custom",
        headers: {
          "Authorization": `Bearer ${process.env.VUE_APP_STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      }).then(function(response){
        if(response.status !== 200){
          console.log("Error. HTTP Code: " + response.status);
          response.text().then(function(data){
            console.log(data);
          });
          return;
        }
        response.json().then(function(data){
          console.log(data);
        })
      }).catch(function(err){
        console.log("There was a fetch error: " + err);
      })

      context.commit('setStripeAccountCreated');
    }
  }
});

export default store;
