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
                <p>Toronto (XYZ) to Manzanillo de Cube (MZO)</p>
                <p style="margin-bottom: 0;">Departing: Wed Mar 14 2018 2:25 PM</p>
                <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                <p>2 tickects (2 adults)</p>
              </div>
              <div class="col-sm-6 booking-slots">
                <h3>Flight Number: WG657</h3>
                <p>Manzanillo de Cube (MZO) Toronto (XYZ)</p>
                <p style="margin-bottom: 0;">Departing: Wed Mar 21 2018 7:25 PM</p>
                <p>Arriving: Wed Mar 21 2018 11:15 PM</p>
                <p>2 tickects (2 adults)</p>
              </div>
            </div>
            <div class="step-one--three">
              <h2 class="header-titles">
                <span class="steps">2</span> Room Details
              </h2>
              <div class="col-sm-12 choose-fashion">
                <form>
                  <label class="wrap-radio">
                    Room (Double)<span class="pull-right">Included</span>
                    <span class="duration-time">Duration: 7 days</span>
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>
                  </label>
                  <label class="wrap-radio">
                    Superior Room (Double)<span class="pull-right">+ $8.97 per night/per person</span>
                    <span class="duration-time">Duration: 7 days</span>
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                  </label>
                  <label class="wrap-radio">
                    Room (Double)<span class="pull-right">+ $14.97 per night/per person</span>
                    <span class="duration-time">Duration: 7 days</span>
                    <input type="radio" name="radio">
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
              <a href="#/Checkout" type="text" class="btn btn-default">Next <i class="fa fa-chevron-right pull-right"></i></a>
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
                    <p>Toronto (XYZ) to Manzanillo de Cube (MZO)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickects (2 adults)</p>
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
                    <p>2 tickects (2 adults)</p>
                    <h3>Flight Number: WG657</h3>
                    <p>Manzanillo de Cube (MZO) Toronto (XYZ)</p>
                    <p style="margin-bottom: 0px;">Departing: Wed Mar 14 2018 2:25 PM</p>
                    <p>Arriving: Wed Mar 14 2018 6:20 PM</p>
                    <p>2 tickects (2 adults)</p>
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
                        <td align="right"><b>$1,330.00 CAD</b></td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
            <div class="price-total-wrape">
              <p><i>Pay as low as</i></p>
              <h3>$110<span> / month</span></h3>
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
export default {
  name: 'Booking',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
