<template>
  <div class="hello">
    <div class="wrape-vacationa-des">
      <div class="container">
        <h1>Confirmation</h1>
      </div>
    </div>
    <div class="warpe-details">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 list-details confirmation">
            <h2 class="header-titles">Congratulations! You've booked a vacation with Sun Travel</h2>
            <p class="rcv-mail">You will receive a confirmation email short with all of your booking details.</p>
            <div class="step-one--three">
              <div class="col-sm-12 choose-fashion">
                <div class="booking-price-sect">
                  <h2>Order Summary
                    <small class="pull-right"><a href="#">Print Full Order Confirmation</a></small>
                  </h2>
                  <h3>Price
                    <span class="pull-right">Adult x 2</span>
                  </h3>
                  <table class="table table-condensed detail-table">
                    <tbody>
                      <tr>
                        <td>Air Transportation Charges</td>
                        <td align="right">${{ airFee }}</td>
                      </tr>
                      <tr>
                        <td>Surcharges</td>
                        <td align="right">$0.00</td>
                      </tr>
                      <tr>
                        <td>Taxes, Fees and Charges</td>
                        <td align="right">$ {{tax}}</td>
                      </tr>
                      <tr>
                        <td ><big>Total</big></td>
                        <td align="right"><big>${{ total }} CAD</big></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p class="rcv-mail">This package is a combined package of two flights an a hoel reservation, each sabject to its own rules and restrictions. Tickects are non refundable and non transferable. Itinerary changes may incure a fee of $50. Your name must be exactly as spelled on the passport. You may not change your name on a confirmed booking. Flight schedule and terminals are subject to change at any time. Correct travel documents are required. Please check your documents before you travel. There will be no refund or exchange in the case of impermissible trvel documents.</p>
          </div>
          <div class="col-sm-3 confirmation-right-side">
            <h2>Upgrade your holiday!</h2>
            <div class="booking-summary">
              <img class="img-responsive" src="/static/images/travell-img.png" alt="Sun Travell">
              <h2>Vacation Upgrade</h2>
              <p>for an extra $10/month* <br/>using Paays</p>
              <a href="#/BookingPackage" class="btn btn-primary">View</a>
            </div>
            <div class="booking-summary">
              <img class="img-responsive" src="/static/images/travell-img.png" alt="Sun Travell">
              <h2>Vacation Upgrade</h2>
              <p>for an extra $10/month* <br/>using Paays</p>
              <a href="#/BookingPackage" class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>