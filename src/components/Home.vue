<template>
  <div class="hello">
    <div class="wrapebanner-section">
      <div class="container">
        <div class="row banner-lf-rt">
          <div class="col-sm-6 text-left">
            <h3>Top Ten</h3>
            <h1>Summer </h1>
            <h2>Vacations</h2>
             <!-- linkt to bookingpackage -->
            <router-link to="/bookingpackage" class="btn btn-primary">Take me there !</router-link>
          </div>
          <div class="col-sm-6 text-right">
            <div class="wrape-offer">
              <h2>Now offering instalment financing with
                <img src="/static/images/paays.png" alt="Sun Travell">
              </h2>
              <p>Purchase your trip today and pay for it over the next 12 months with paays.</p>
              <button class="btn btn-primary" data-toggle="modal" data-target="#aboutpaays">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrape-trip-form">
      <div class="container">
        <div class="row">
          <form class="form-inline">
            <div class="form-group">
              <label>Departing from</label>
              <select class="form-control">
                <option>Toronto</option>
                <option>Kingston</option>
                <option>Ottawa</option>
                <option>Muskoka</option>
              </select>
            </div>
            <div class="form-group">
              <label>Going to</label>
              <select class="form-control">
                <option>Cayman Islands</option>
                <option>Lake Como</option>
                <option>Paris</option>
                <option>Frankfurt</option>
              </select>
            </div>
            <div class="form-group">
              <label>Departing on</label>
              <input type="date" class="form-control" id="" placeholder="22-03-2018">
            </div>
            <div class="form-group">
              <label>Returning on</label>
              <input type="date" class="form-control" id="" placeholder="22-03-2018">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-default">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="views-trip-list">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 list-desc-title">
            <img src="/static/images/rob-bye.png" alt="Sun Travell">
            <h3>Hiking Trips
              <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
            </h3>
          </div>
          <div class="col-sm-3 list-desc-title">
            <img src="/static/images/rob-bye-2.png" alt="Sun Travell">
            <h3>Adventure Trips
              <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
            </h3>
          </div>
          <div class="col-sm-3 list-desc-title">
            <img src="/static/images/rob-bye-3.png" alt="Sun Travell">
            <h3>Sunny Vacations
              <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
            </h3>
          </div>
          <div class="col-sm-3 list-desc-title">
            <img src="/static/images/rob-bye-4.png" alt="Sun Travell">
            <h3>Destination Weddings
              <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-trip-list">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 list-sidebar-col">
            <h2>Explore</h2>
            <ul>
              <li>
                <a href="#demo" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/flight.png" alt="Sun Travell"></span> Flights
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo1" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/dollar.png" alt="Sun Travell"></span> Last Minutes Deals
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo1" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo2" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/euro.png" alt="Sun Travell"></span> European Tours
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo2" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo3" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/coffee.png" alt="Sun Travell"></span> Coffee Destinations
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo3" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo4" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/mauntain.png" alt="Sun Travell"></span> Mountain Hiking
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo4" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo5" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/globe.png" alt="Sun Travell"></span> Last Minute  Deals
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo5" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo6" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/travellers.png" alt="Sun Travell"></span> Good For Solo Travellers
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo6" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li>
                <a href="#demo7" class="btn btn-info" data-toggle="collapse"><span><img src="/static/images/dollar.png" alt="Sun Travell"></span> Last Minute Deals
                  <span class="pull-right"><i class="fa fa-chevron-right"></i></span>
                </a>
                <div id="demo7" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
            </ul>
          </div>
          <div class="col-sm-9 list-sidebar-col-right">
            <h2>Recommended for You</h2>
            <ul>
              <li v-for="item in packages">
                <div class="col-sm-3" style="padding-left: 0;">
                  <img :src="item.img" alt="Sun Travell">
                </div>
                <div class="col-sm-6 details-mid-sect">
                  <h1>{{item.title}}</h1>
                  <p class="star-rating"><img src="/static/images/star.png" alt="Sun Travel"></p>
                  <h5>{{item.subtitle}}</h5>
                  <h4>{{ item.date  }} | 7 Days / All Inclusive</h4>
                  <ul>
                    <li v-for="listItem in item.list">{{ listItem }}</li>
                    <button class="btn btn-default">Read More</button>
                  </ul>
                </div>
                <div class="col-sm-3 payment-mid-sect">
                  <h1>${{item.price}}<br/> <span class="">taxes & fees incl.</span></h1>
                  <div class="pay-low-sect">
                    <h3><span style="color: rgb(135, 156, 169);"><i>Pay as low as</i></span> <br/> ${{item.emi}} <br/><span> / month*</span></h3>
                  </div>
                  <router-link :to="{ path: `/BookingDetail?cost=${item.price}&emi=${item.emi}` }" class="btn btn-primary">Select <span class="pull-right"><i class="fa fa-chevron-right"></i></span></router-link>
                </div>
              </li>
              <!-- <li>
                <div class="col-sm-3" style="padding-left: 0;">
                  <img src="/static/images/sebastien-jermer-4.png" alt="Sun Travell">
                </div>
                <div class="col-sm-6 details-mid-sect">
                  <h1>Roc Barlovento</h1>
                  <p class="star-rating"><img src="/static/images/star.png" alt="Sun Travell"></p>
                  <h5>Starfish Cayo Santa Maria</h5>
                  <h4>Wed, March 21,2018 | 7 Days / All Inclusive</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <button class="btn btn-default">Read More</button>
                  </ul>
                </div>
                <div class="col-sm-3 payment-mid-sect">
                  <h1>$650<br/> <span class="">taxes & fees incl.</span></h1>
                  <div class="pay-low-sect">
                    <h3><span style="color: rgb(135, 156, 169);"><i>Pay as low as</i></span> <br/> $55 <br/><span> / month*</span></h3>
                  </div>
                  <a href="#/BookingDetail" class="btn btn-primary">Select <span class="pull-right"><i class="fa fa-chevron-right"></i></span></a>
                </div>
              </li>
              <li>
                <div class="col-sm-3" style="padding-left: 0;">
                  <img src="/static/images/sebastien-jermer-3.png" alt="Sun Travell">
                </div>
                <div class="col-sm-6 details-mid-sect">
                  <h1>Playa Blanca Resort</h1>
                  <p class="star-rating"><img src="/static/images/star.png" alt="Sun Travell"></p>
                  <h5>Starfish Cayo Santa Maria</h5>
                  <h4>Wed, March 21,2018 | 7 Days / All Inclusive</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <button class="btn btn-default">Read More</button>
                  </ul>
                </div>
                <div class="col-sm-3 payment-mid-sect">
                  <h1>$650<br/> <span class="">taxes & fees incl.</span></h1>
                  <div class="pay-low-sect">
                    <h3><span style="color: rgb(135, 156, 169);"><i>Pay as low as</i></span> <br/> $55 <br/><span> / month*</span></h3>
                  </div>
                  <a href="#/BookingPackage" class="btn btn-primary">Select <span class="pull-right"><i class="fa fa-chevron-right"></i></span></a>
                </div>
              </li>
              <li>
                <div class="col-sm-3" style="padding-left: 0;">
                  <img src="/static/images/sebastien-jermer.png" alt="Sun Travell">
                </div>
                <div class="col-sm-6 details-mid-sect">
                  <h1>Memories Flamenco Beach Resort</h1>
                  <p class="star-rating"><img src="/static/images/star.png" alt="Sun Travell"></p>
                  <h5>Starfish Cayo Santa Maria</h5>
                  <h4>Wed, March 21,2018 | 7 Days / All Inclusive</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <button class="btn btn-default">Read More</button>
                  </ul>
                </div>
                <div class="col-sm-3 payment-mid-sect">
                  <h1>$650<br/> <span class="">taxes & fees incl.</span></h1>
                  <div class="pay-low-sect">
                    <h3><span style="color: rgb(135, 156, 169);"><i>Pay as low as</i></span> <br/> $55 <br/><span> / month*</span></h3>
                  </div>
                  <a href="#/BookingPackage" class="btn btn-primary">Select <span class="pull-right"><i class="fa fa-chevron-right"></i></span></a>
                </div>
              </li> -->
            </ul>
            <div class="wrape-view-more">
              <button class="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      packages: [{
        img: '/static/images/sebastien-jermer-5.png',
        title: 'Starfish Cayo Santa Maria',
        subtitle: 'Cayo Santa Maria, Cuba',
        date: 'Wed, March 14, 2018',
        list: [
          'Exclusive Viva Cuba program featuring cigar education & appreciation',
          'Scuba diving lessons available in the pool',
          'The Whole family can whoosh down the exciting'
        ],
        price: 650,
        emi: 55
      }, {
        img: '/static/images/sebastien-jermer-4.png',
        title: 'Roc Barlovento',
        subtitle: 'Cayo Santa Maria, Cuba',
        date: 'Wed, March 14, 2018',
        list: [
          'Exclusive Viva Cuba program featuring cigar education & appreciation',
          'Scuba diving lessons available in the pool',
          'The Whole family can whoosh down the exciting'
        ],
        price: 780,
        emi: 65
      }, {
        img: '/static/images/sebastien-jermer-3.png',
        title: 'Playa Blanca Resort',
        subtitle: 'Cayo Coco',
        date: 'Wed, March 14, 2018',
        list: [
          'Exclusive Viva Cuba program featuring cigar education & appreciation',
          'Scuba diving lessons available in the pool',
          'The Whole family can whoosh down the exciting'
        ],
        price: 899,
        emi: 75
      }, {
        img: '/static/images/sebastien-jermer.png',
        title: 'Memories Flamenco Beach Resort',
        subtitle: 'Varadero',
        date: 'Wed, March 14, 2018',
        list: [
          'Exclusive Viva Cuba program featuring cigar education & appreciation',
          'Scuba diving lessons available in the pool',
          'The Whole family can whoosh down the exciting'
        ],
        price: 926,
        emi: 77
      }]
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
