<template>
  <div class="hello">
    <div class="wrape-vacationa-des">
      <div class="container">
        <h1>Vacation Packages</h1>
        <p>The Sun Travel Services, is located in Frederick, Maryland, has an enduring LOVE for all things travel, and there is nothing she would rather do than share that excitement and love with you as her valued clients and friends. The Sun Travel Services, is located in Frederick, Maryland, has an enduring LOVE for all things travel, and there is nothing she would rather do than share that excitement and love with you as her valued clients and friends.</p>
      </div>
    </div>
    <div class="sidebar-trip-list with-vacation-form">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="list-sidebar-col">
              <h3>Find your perfect vacation now</h3>
              <form class="form-inline">
                <div class="form-group">
                  <label>Departing from</label>
                  <select class="form-control">
                    <option disabled selected>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Going to</label>
                  <select class="form-control" placeholder="Select">
                    <option disabled selected>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Departing on</label>
                  <input type="date" class="form-control" id="" placeholder="22-03-2018">
                </div>
                <div class="form-group">
                  <label>Going for</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group book-list">
                  <label>Rooms</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group book-list">
                  <label>Adults</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group book-list" style="margin-right: 0;">
                  <label>Childrens</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Returning on</label>
                  <input type="date" class="form-control" id="" placeholder="22-03-2018">
                </div>
                <div class="form-group">
                  <label>Select a Hotel Grade</label>
                  <select class="form-control">
                    <option>3 star</option>
                    <option>4 star</option>
                    <option>5 star</option>
                  </select>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-default">Search</button>
                </div>
              </form>
            </div>
            <div class="advertize-sect">
              <p>Purchase your trip today and pay later with
                <img src="/static/images/pay-blue.png" alt="Sun Travell">
              </p>
              <p class="purchage-img">
                <img src="/static/images/purchage-trip.png" alt="Sun Travell">
              </p>
              <p class="short-desc">Purchase your trip today and pay for it over the next 12 months with paays.</p>
              <button class="btn btn-primary">Learn more</button>
            </div>
          </div>
          <div class="col-sm-9 list-sidebar-col-right">
            <ul>
              <li v-for="item in packages">
                <div class="col-sm-3" style="padding-left: 0;">
                  <img :src="item.img" alt="Sun Travell">
                </div>
                <div class="col-sm-6 details-mid-sect">
                  <h1>{{item.title}}</h1>
                  <p class="star-rating"><img src="/static/images/star.png" alt="Sun Travell"></p>
                  <h5>{{item.subtitle}}</h5>
                  <h4>Wed, March 21,2018 | 7 Days / All Inclusive</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <button class="btn btn-default">Read More</button>
                  </ul>
                </div>
                <div class="col-sm-3 payment-mid-sect">
                  <h1>${{item.price}}<br/> <span class="">taxes & fees incl.</span></h1>
                  <div class="pay-low-sect">
                    <h3><span style="color: rgb(135, 156, 169);"><i>Pay as low as</i></span> <br/> ${{ item.emi }} <br/><span> / month*</span></h3>
                  </div>
                  <router-link :to="{ path: `/BookingDetail?cost=${item.price}&emi=${item.emi}` }" class="btn btn-primary">Select <span class="pull-right"><i class="fa fa-chevron-right"></i></span></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingPackage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      packages: [{
        img: '/static/images/vacation-1.png',
        title: 'Memories Varadero Beach Resort',
        price: 650,
        subtitle: 'Varadero',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 55
      }, {
        img: '/static/images/sebastien-jermer-4.png',
        title: 'Vacation Package',
        price: 780,
        subtitle: 'Varadero',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 65
      }, {
        img: '/static/images/vacation-3.png',
        title: 'Vacation Package',
        price: 899,
        subtitle: 'Starfish Cayo Santa Maria',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 75
      }, {
        img: '/static/images/vacation-4.png',
        title: 'Grand Hyatt Hotal Beachview',
        price: 926,
        subtitle: 'Varadero',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 77
      }, {
        img: '/static/images/vacation-5.png',
        title: 'Fun Holiday Beach Resort',
        price: 1020,
        subtitle: 'Jamaica',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 85
      }, {
        img: '/static/images/vacation-6.png',
        title: 'Starfish Varadero',
        price: 899,
        subtitle: 'Varadero',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 75
      },{
        img: '/static/images/vacation-7.png',
        title: 'Roc Arenas Doradas',
        price: 926,
        subtitle: 'Varadero',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 77
      },
      {
        img: '/static/images/vacation-8.png',
        title: 'Be Live Collection Marien',
        price: 1020,
        subtitle: 'Puerto Plata',
        details: 'Wed, March 21,2018 | 7 Days / All Inclusive',
        emi: 85
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
