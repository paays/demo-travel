<template>
  <div class="hello">
    <div class="wrape-vacationa-des">
      <div class="container">
        <h1>Checkout</h1>
      </div>
    </div>
    <div class="warpe-details">
      <div class="container">
        <p class="text-left goback">
          <a href="#/BookingDetail"><span><i class="fa fa-chevron-left"></i></span>Back to Booking Detail</a>
        </p>
        <div class="row">
          <div class="col-sm-9 list-details">
            <div class="step-one--three">
              <h2 class="header-titles">Payment Method</h2>
              <div class="col-sm-12 choose-fashion">
                <form class="checkoutform">
                  <label class="wrap-radio">
                    Credit Card
                    <input type="radio" checked="checked" name="radio" v-model="seen" value="creditcard">
                    <span class="checkmark"></span>
                  </label>
                  <label class="wrap-radio">
                    PayPal
                    <input type="radio" name="radio" v-model="seen" value="paypal">
                    <span class="checkmark"></span>
                  </label>
                  <label class="wrap-radio">
                    Finance with Paays<span class="pull-right" style="padding-top:0;"><small>As low as </small><b>${{emi}}</b><small> /month*</small></span>
                    <input type="radio" name="radio" v-model="seen" value="finance">
                    <span class="checkmark"></span>
                  </label>
                </form>
              </div>
            </div>
            <div id="apply-finance" v-show="seen === 'finance'">
              <iframe width="100%" height="500" src="http://localhost:9000/paays" frameborder="0" allowfullscreen></iframe>
            </div>
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
                    <p>Toronto (XYZ) to Manzanillo de Cube (MZO)</p>
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
                    <p>Toronto (XYZ) to Manzanillo de Cube (MZO)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickets (2 adults)</p>
                    <h3>Flight Number: WG657</h3>
                    <p>Manzanillo de Cube (MZO) Toronto (XYZ)</p>
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
                        <td>Air Transportation Charges</td>
                        <td align="right"><b>$285.00</b></td>
                      </tr>
                      <tr>
                        <td>Surcharges</td>
                        <td align="right"><b>$0.00</b></td>
                      </tr>
                      <tr>
                        <td>Taxes, Fees and Charges</td>
                        <td align="right"><b>$380.00</b></td>
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
              <h3>${{emi}}<span> / month</span></h3>
              <p>using <img src="/static/images/booking-img.png" alt="Sun Travell"> at Checkout</p>
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
  name: 'Checkout',
 data () {
    return {
      seen: false,
      msg: 'Welcome to Your Vue.js App',
      total: 1330.00,
      taxes: '380.00',
      airFee: '285.00',
      emi: 110,
      year: 1,
      rate: 9.99,
      amount: 1200,
      checked: 29.99,
      rates: [{
          duration: '7 days',
          value: 29.99,
          checked: true
      },{
          duration: '7 days',
          value: 89.99,
          checked: false
      },{
         duration: '7 days',
         value: 129.99,
         checked: false
      }]
    }
  },
  watch: {
    'checked': 'calculateTotal'
  },
  created() {
    this.total = + (this.$route.query.total);
    this.emi = this.$route.query.emi;
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
</style>
