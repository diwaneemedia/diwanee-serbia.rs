<template>
  <div >

    <div class="container">
      <div class="map__container">
        <div id='map' class="map map-responsive">
        </div>
        <div class="map__info">
          <p class='map__area-code'>11000</p>
          <h3>Belgrade</h3>
          <p class='map__address'>Resavska 23</p>
          <p class='map__nbr'>+381 (0) 11 3340 117</p>
        </div>
        <div id='map2' class="map map-responsive">
        </div>
        <div class="map__info">
          <p class='map__area-code'>11000</p>
          <h3>Belgrade</h3>
          <p class='map__address'>Resavska 23</p>
          <p class='map__nbr'>+381 (0) 11 3340 117</p>
        </div>
        <div id='map3' class="map map-responsive">
        </div>
        <div class="map__info">
          <p class='map__area-code'>11000</p>
          <h3>Belgrade</h3>
          <p class='map__address'>Resavska 23</p>
          <p class='map__nbr'>+381 (0) 11 3340 117</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMini from "~/components/Navigation/NavigationMini";

export default {
  layout:"work",
  components: {
    NavigationMini
  },
  mounted(){
    return new Promise((resolve, reject) => {
      let script = document.createElement("script")
      script.onload = () => {
       resolve(this.initMap())
      }
      script.async = true
      script.src ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCayd2cYZHZU89SVQ2VHDQYNqos6EcFWoQ&callback=initMap"
      document.head.appendChild(script)
   })

  },
   methods: {
     initMap() {
       var map;
       var map2;
       var map3;
       var dubaiCords = {lat: 25.1049000, lng: 55.1681569};
       var beirutCords = {lat: 33.8915885, lng: 35.5055454};
       var belgradeCords = {lat: 44.8075600, lng:20.465700};

       map = new window.google.maps.Map(document.getElementById('map'), {
         center: dubaiCords,
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
       });

       map2 = new window.google.maps.Map(document.getElementById('map2'), {
         center: beirutCords,
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
       });

       map3 = new window.google.maps.Map(document.getElementById('map3'), {
         center: belgradeCords,
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
       });

       // MARKERS
       var dubaiMarker = new window.google.maps.Marker({
         position: dubaiCords,
         map: map,
       });

       var beirutMarker = new window.google.maps.Marker({
         position: beirutCords,
         map: map2,
       });

       var belgradeMarker = new window.google.maps.Marker({
         position: belgradeCords,
         map: map3,
       });
     }
   }
};
</script>
<style lang="scss">
@import "~/assets/scss/master.scss";
  // #map {
  //   width: 523px;
  //   height: 663px;
  //   // margin: 100px;
  // }
  //
  // #map2 {
  //   width: 523px;
  //   height: 663px;
  //   // margin: 100px;
  // }
  // #map3 {
  //   width: 523px;
  //   height: 663px;
  //   // margin: 100px;
  // }
  .cont {
    height: 500px;
  }
  .map-responsive{
    overflow:hidden;
    padding-bottom: 126.75%;
    position:relative;
    height:0;
  }
  .map-responsive iframe {
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
  .map {
    img {
      width: 100%;
    }
    @include breakpoint(desktop) {
      margin-bottom: 8.5rem;
    }
  }
  .map__area-code {
    color:#c41230;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  .map__info {
      text-align: left;
      justify-self: center;
      align-self: center;
    h3 {
      font-family: "Playfair", sans-serif;
      font-size: 36px;
      margin-bottom: 2.7rem;
    }
    @include breakpoint(desktop) {
      margin-top: -8.4rem;
    }
    @include breakpoint(phone) {
      padding: 14% 0 31%;
    }
  }
  .map__address {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color:#17191d;
  }
  .map__container {
    display: grid;
    @include breakpoint(desktop) {
      padding-top: 6rem;
      padding-bottom: 4.2rem;
      padding-left: 8.1%;
      grid-template-columns: 0.84fr 1fr;
    }
    @include breakpoint(phone) {
      padding-bottom: 7.5%;
      padding-top: 5.2rem;
    }
  }

</style>
