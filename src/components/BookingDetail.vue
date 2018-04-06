<template>
  <div class="hello">
    <div class="wrape-vacationa-des">
      <div class="container">
        <h1>Booking Details</h1>
      </div>
    </div>
    <div class="warpe-details">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 list-details">
            <div class="step-one--three">
              <h2 class="header-titles">
                <span class="steps">1</span> Flight Details
                <a href="#" class="pull-right sm-fonts">Change</a>
              </h2>
             <div class="col-sm-6 booking-slots">
                <h3>Flight Number: WG656</h3>
                <p>Toronto (XYZ) to Manzanillo de Cuba (MZO)</p>
                <p style="margin-bottom: 0;">Departing: Wed Mar 14 2018 2:25 PM</p>
                <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                <p>2 tickets (2 adults)</p>
              </div>
              <div class="col-sm-6 booking-slots">
                <h3>Flight Number: WG657</h3>
                <p>Manzanillo de Cuba (MZO) Toronto (XYZ)</p>
                <p style="margin-bottom: 0;">Departing: Wed Mar 21 2018 7:25 PM</p>
                <p>Arriving: Wed Mar 21 2018 11:15 PM</p>
                <p>2 tickets (2 adults)</p>
              </div>
            </div>
            <div class="step-one--three">
              <h2 class="header-titles">
                <span class="steps">2</span> Room Details
              </h2>
              <div class="col-sm-12 choose-fashion">
                <form>
                  <label class="wrap-radio" v-for="(rate, i) in rates">
                    {{ rate.title }}<span class="pull-right" v-if="rate.value > 0">+ ${{ rate.value }} per night/per person</span>
                    <span class="duration-time">Duration: {{rate.duration}}</span>
                    <input type="radio" :checked="rate.checked" :value="rate.value" v-model="checked" name="radio">
                    <span class="checkmark"></span>
                  </label>
                </form>
              </div>
            </div>
            <div class="step-one--three">
              <h2 class="header-titles">
                <span class="steps">3</span> Passenger Details
              </h2>
              <div class="col-sm-12 passanger-details">
                <form class="form-inline">
                  <h3>Adult 1</h3>
                  <div class="form-group" style="width: 14%;">
                    <label>Title*</label>
                    <select class="form-control">
                      <option>Mr</option>
                      <option>Mrs</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>First name*</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Middle name</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Last name*</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Date of Birth*</label>
                    <input type="date" class="form-control" id="" placeholder="">
                  </div>
                  <h3>Adult 2</h3>
                  <div class="form-group" style="width: 14%;">
                    <label>Title*</label>
                    <select class="form-control">
                      <option>Mr</option>
                      <option>Mrs</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>First name*</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Middle name</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Last name*</label>
                    <input type="text" class="form-control" id="" placeholder="">
                  </div>
                  <div class="form-group">
                    <label>Date of Birth*</label>
                    <input type="date" class="form-control" id="" placeholder="">
                  </div>
                </form>
              </div>
            </div>
            <p class="next-button text-right">
              <router-link :to="{ path: `/Checkout?total=${total}&tax=${taxes}&emi=${emi}` }" type="text" class="btn btn-default">Next <i class="fa fa-chevron-right pull-right"></i></router-link>
            </p>
          </div>
          <div class="col-sm-3">
            <h1 class="booking-sm-title">Booking Summary</h1>
            <div class="booking-summary">
              <ul>
                <li>
                  <a href="#hotel" class="btn btn-info" data-toggle="collapse">Hotel
                    <span class="pull-right"><i class="fa fa-chevron-down"></i></span>
                  </a>
                 <div id="hotel" class="collapse data-content">
                    <h3>Flight Number: WG656</h3>
                    <p>Toronto (XYZ) to Manzanillo de Cuba (MZO)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickets (2 adults)</p>
                  </div>
                </li>
                <li>
                  <a href="#flight" class="btn btn-info" data-toggle="collapse">Flight
                    <span class="pull-right"><i class="fa fa-chevron-down"></i></span>
                  </a>
                 <div id="flight" class="collapse data-content">
                    <h3>Flight Number: WG656</h3>
                    <p>Toronto (XYZ) to Manzanillo de Cuba (MZO)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickets (2 adults)</p>
                    <h3>Flight Number: WG657</h3>
                    <p>Manzanillo de Cuba (MZO) Toronto (XYZ)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickets (2 adults)</p>
                  </div>
                </li>
                <li class="booking-price-sect">
                  <h3>Price
                    <span class="pull-right">Adult x 2</span>
                  </h3>
                  <table class="table table-condensed detail-table">
                    <tbody>
                      <tr>
                        <td>Hotel and Air Charges</td>
                        <td align="right"><b>${{ amount }}</b></td>
                      </tr>
                      <tr>
                        <td>Surcharges</td>
                        <td align="right"><b>$0.00</b></td>
                      </tr>
                      <tr>
                        <td>Taxes, Fees and Charges</td>
                        <td align="right"><b>${{taxes}}</b></td>
                      </tr>
                      <tr>
                        <td ><b>Total</b></td>
                        <td align="right"><b>{{ total | currency }} CAD</b></td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
            <div class="price-total-wrape">
              <p><i>Pay as low as</i></p>
              <h3>${{ emi  }}<span> / month</span></h3>
              <p>using <img class="logo-paays" src="/static/images/booking-img.png" alt="Sun Travell"> at Checkout</p>
              <a href="#/BookingPackage" class="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.filter('currency', (val) => {
  let nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
  return nf.format(val);
});
export default {
  name: 'Booking',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      taxes: 380,
      emi: 110,
      rate: 9.99,
      amount: 820,
      checked: 0,
      rates: [{
          duration: '7 days',
          value: 0,
          title: 'Standard Room',
          checked: true
      },{
          title: 'Superior Room',
          duration: '7 days',
          value: 29.99,
          checked: false
      },{
         title: '1-Bedroom Junior Suite',
         duration: '7 days',
         value: 69.99,
         checked: false
      }]
    }
  },
  watch: {
    'checked': 'calculateTotal', // calculate total when radio bbox is checked
    '$route': 'setValues'  // same as created but listens to route change in case users moves back and forth between routes
  },
  created() {
    this.setValues();
    // set initial value for cost and taxes
  },
  methods: {
      setValues(){
        // pass default standard room rate
        this.calculateTotal(0);
      },
      getRate(total){
        return total*(this.rate/100);
      },
      payable(total){
        return this.getRate()+total;
      },
      monthly(total){
        return ((total + this.getRate(total))/12).toFixed(0);
      },
      calculateTotal(val){
         // if(cost is passed from route )
        //   amount = cost from route - default tax
        // else
        //   amount = initial amount
        // check route for emi value or pass emi value
        let amount = (+this.$route.query.cost - 380) || this.amount;
        this.amount = ((val*2*7) + Math.ceil(amount)).toFixed(0);
        this.taxes = (val>0) ? 380*7 : 380; // gets the standard tax rate or the checked values rate
        this.total = (+this.amount) + (+this.taxes);
        // emi is calculated to show the default emi shown on the route or calculate it in case the user has selected
        // the superior or the the junior bedroom
        this.emi = (val == 0 && this.$route.query.emi) ? this.$route.query.emi  : this.monthly(this.total);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.logo-paays {
  margin-top: 6px;
}
</style>
