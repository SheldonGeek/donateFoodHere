angular.module('ionic.example', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        $scope.items = [
          { id: "Ashland/Hanover - 253 N. Washington Hwy.",
           url:"https:\/\/www.google.com\/maps\/place\/253+N+Washington+Hwy,+Ashland,+VA+23005\/@37.7613013,-77.7507448,10z\/data=!4m13!1m7!3m6!1s0x89b13962af37bb67:0xe2721531499994e2!2s253+N+Washington+Hwy,+Ashland,+VA+23005!3b1!8m2!3d37.7612971!4d-77.4705934!3m4!1s0x89b13962af37bb67:0xe2721531499994e2!8m2!3d37.7612971!4d-77.4705934" },
          { id: "Bermuda Square - 12601 Jeff Davis Hwy.",
          url:"https:\/\/www.google.com\/maps\/search\/Bermuda+Square+-+12601+Jeff+Davis+Hwy.\/@37.3534335,-77.4134021,17z\/data=!3m1!4b1" },
          { id: "Brook Run - 5700 Brook Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Brook+Run+-+5700+Brook+Rd.\/@37.6158568,-77.46812,15z\/data=!3m1!4b1" },
          { id: "Carytown - 3522 W. Cary St." ,
          url:"https:\/\/www.google.com\/maps\/place\/3522+W+Cary+St,+Richmond,+VA+23221\/@37.5563777,-77.4893772,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b113f186cf2253:0x2c93d5080d81c11f!8m2!3d37.5563735!4d-77.4871885" },
          { id: "Chesterfield Meadows - 6401 Centralia Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Chesterfield+Meadows+-+6401+Centralia+Rd.\/@37.3726561,-77.5015898,17z\/data=!3m1!4b1" },
          { id: "Chesterfield Towne Center - 11361 Midlothian Tpke." ,
          url:"https:\/\/www.google.com\/maps\/search\/Chesterfield+Towne+Center+-+11361+Midlothian+Tpke.\/@37.5059181,-77.6123509,16z\/data=!3m1!4b1" },
          { id: "Chippenham Crossing - 5201 Chippenham Crossing Center" ,
          url:"https:\/\/www.google.com\/maps\/search\/Chippenham+Crossing+-+5201+Chippenham+Crossing+Center\/@37.4504163,-77.4932211,17z\/data=!3m1!4b1" },
          { id: "Colonial Square - 3107-15 Blvd." ,
          url:"https:\/\/www.google.com\/maps\/place\/Colonial+Square+Shopping+Center\/@37.2696827,-77.413128,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b1a7b1a7c8aa2d:0x11d28d3ef60ae701!8m2!3d37.2696785!4d-77.4109393" },
          { id: "Crossridge - 10250 Staples Mill Rd." ,
          url:"https:\/\/www.google.com\/maps\/place\/10250+Staples+Mill+Rd,+Glen+Allen,+VA+23060\/@37.6567637,-77.5279212,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b13fd12bd27bab:0x43d5a3170b9fc704!8m2!3d37.6567595!4d-77.5257325" },
          { id: "Gayton Crossing - 9782 Gayton Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Gayton+Crossing+-+9782+Gayton+Rd.\/@37.6056569,-77.5946695,17z\/data=!3m1!4b1" },
          { id: "Harbour Pointe - 13700 Hull St. Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Harbour+Pointe+-+13700+Hull+St.+Rd.\/@37.4110032,-78.2123207,9z" },
          { id: "John Rolfe at Ridgefield - 2250 John Rolfe Pkwy.",
          url:"https:\/\/www.google.com\/maps\/place\/John+Rolfe+At+Ridgefield\/@37.6226449,-77.6262189,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b13fd0da5c322b:0x37c41f14b1285837!8m2!3d37.6226407!4d-77.6240302" },
          { id: "Mechanicsville - 7324 Bell Creek Rd. Sth." ,
          url:"https:\/\/www.google.com\/maps\/search\/Mechanicsville+-+7324+Bell+Creek+Rd.+Sth.\/@37.6020668,-77.3532712,17z\/data=!3m1!4b1" },
          { id: "Oxbridge Square - 10001 Hull St. Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Oxbridge+Square+-+10001+Hull+St.+Rd.\/@37.4424622,-77.5816762,17z\/data=!3m1!4b1" },
          { id: "Petersburg - 3330 S. Crater Rd." ,
          url:"https:\/\/www.google.com\/maps\/place\/3330+S+Crater+Rd,+Petersburg,+VA+23805\/@37.1827369,-77.3700266,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b1af654580e437:0x625c02d9783cf1ff!8m2!3d37.1827326!4d-77.3678379" },
          { id: "Short Pump - 3460 Pump Rd." ,
          url:"https:\/\/www.google.com\/maps\/place\/3460+Pump+Rd,+Richmond,+VA+23233\/@37.6490585,-77.6179398,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b16a645b8b16c5:0xaf2b30f2dc576c5b!8m2!3d37.6490543!4d-77.6157511" },
          { id: "Staples Mill - 7129 Staples Mill Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/Staples+Mill+-+7129+Staples+Mill+Rd.\/@37.6164093,-77.4986025,17z\/data=!3m1!4b1" },
          { id: "Stony Point - 3000 Stony Point Rd." ,
          url:"https:\/\/www.google.com\/maps\/place\/3000+Stony+Point+Rd,+Richmond,+VA+23235\/@37.5381788,-77.5648465,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b16cd324505747:0x85a75203a864beb5!8m2!3d37.5381746!4d-77.5626578" },
          { id: "Stratford Hills - 7045 Forest Hills Ave.",
          url:"https:\/\/www.google.com\/maps\/place\/7045+Forest+Hill+Ave,+Richmond,+VA+23225\/@37.537742,-77.528556,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b1130ff3bc5a61:0x4ce32abb4f334af6!8m2!3d37.5377378!4d-77.5263673" },
          { id: "Charter Colony - 200 Charter Colonly Parkway" ,
          url:"https:\/\/www.google.com\/maps\/place\/200+Charter+Colony+Pkwy,+Midlothian,+VA+23114\/@37.5042087,-77.6631387,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b16e03ecf3d579:0x6522f3722e56b7e6!8m2!3d37.5042045!4d-77.66095" },
          { id: "The Village - 7035 Three Chopt Rd." ,
          url:"https:\/\/www.google.com\/maps\/search\/The+Village+-+7035+Three+Chopt+Rd.\/@37.6143577,-77.5946589,13z\/data=!3m1!4b1" },
          { id: "Virginia Center Marketplace - 10150 Brook Rd." ,
          url:"https:\/\/www.google.com\/maps\/place\/Virginia+Center+Marketplace\/@37.6740698,-77.4635043,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b13ddb028c8a5b:0x792c43a7d3ca5b60!8m2!3d37.6740656!4d-77.4613156" },
          { id: "Westpark - 9645 W. Broad St." ,
          url:"https:\/\/www.google.com\/maps\/search\/Westpark+-+9645+W.+Broad+St.\/@37.6402147,-77.5652731,17z\/data=!3m1!4b1" },
          { id: "White Oak Village - 4591 S. Laburnum Ave." ,
          url:"https:\/\/www.google.com\/maps\/place\/White+Oak+Village\/@37.5292637,-77.3562477,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b11a406b756f27:0x23f6cf33486a1d62!8m2!3d37.5292595!4d-77.354059" },
          { id: "MIDAS 5301 W. Broad St. -  804.288.4055" ,
          url:"https:\/\/www.google.com\/maps\/place\/5301+W+Broad+St,+Richmond,+VA+23230\/@37.5859692,-77.5015247,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b11469f16bce09:0x5548038c0a1a526c!8m2!3d37.585965!4d-77.499336" },
          { id: "MIDAS 11463 W. Broad St. -  804.360.2211" ,
          url:"https:\/\/www.google.com\/maps\/place\/11463+W+Broad+St,+Richmond,+VA+23233\/@37.6508422,-77.6133474,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b16a632ef314db:0x2a3897dbfcba37f1!8m2!3d37.650838!4d-77.6111587" },
          { id: "MIDAS 10160 Hull St. Rd. -  804.276.9600" ,
          url:"https:\/\/www.google.com\/maps\/place\/10160+Hull+Street+Rd,+Midlothian,+VA+23112\/@37.4430676,-77.586872,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b17322061d5251:0xdc3c36533516cb9e!8m2!3d37.4430634!4d-77.5846833" },
          { id: "MIDAS 1400 Boulevard in Colonial Heights -  804.520.2206" ,
          url:"https:\/\/www.google.com\/maps\/place\/1400+Boulevard,+Colonial+Heights,+VA+23834\/@37.2525586,-77.4135345,17z\/data=!3m1!4b1!4m5!3m4!1s0x89b1a64f935a2a65:0x6b56fdd10dc7a617!8m2!3d37.2525544!4d-77.4113458" },
        ];

        var locations = [
      ['<a href='+$scope.items[0].url+'>Ashland\/Hanover <\/a>', 37.7613135,-77.4718631, 4],
      ['<a href='+$scope.items[1].url+'>Bermuda Square<\/a>', 37.3534335,-77.4134074, 5],
      ['<a href='+$scope.items[2].url+'>Brook Run<\/a>', 37.6158568,-77.4681414, 3],
      ['<a href='+$scope.items[3].url+'>Carytown <\/a>', 37.5563777,-77.4893825, 2],
      ['<a href='+$scope.items[4].url+'>Chesterfield Meadows<\/a>', 37.3726561,-77.5015952, 2],
      ['<a href='+$scope.items[5].url+'>Chesterfield Towne Center<\/a>', 37.5059181,-77.6123617, 2],
      ['<a href='+$scope.items[6].url+'>Chippenham Crossing<\/a>', 37.4504163,-77.4932265, 2],
      ['<a href='+$scope.items[7].url+'>Colonial Square<\/a>', 37.2696827,-77.4131333, 2],
      ['<a href='+$scope.items[8].url+'>Crossridge<\/a>', 37.6567637,-77.5279265, 2],
      ['<a href='+$scope.items[9].url+'>Gayton Crossing<\/a>', 37.6056569,-77.5946748, 2],
      ['<a href='+$scope.items[10].url+'>Harbour Pointe<\/a>', 37.4109949,-77.6564061, 2],
      ['<a href='+$scope.items[11].url+'>John Rolfe at Ridgefield<\/a>', 37.6226449,-77.6262242, 2],
      ['<a href='+$scope.items[12].url+'>Mechanicsville<\/a>', 37.6020668,-77.3532766, 2],
      ['<a href='+$scope.items[13].url+'>Oxbridge Square<\/a>', 37.4424622,-77.5816816, 2],
      ['<a href='+$scope.items[14].url+'>Petersburg<\/a>', 37.1827369,-77.3700319, 2],
      ['<a href='+$scope.items[15].url+'>Short Pump<\/a>', 37.6490585,-77.6179451, 2],
      ['<a href='+$scope.items[16].url+'>Staples Mill<\/a>', 37.6164093,-77.4986078, 2],
      ['<a href='+$scope.items[17].url+'>Stony Point<\/a>', 37.5381788,-77.5648518, 2],
      ['<a href='+$scope.items[18].url+'>Stratford Hills<\/a>', 37.537742,-77.5285613, 2],
      ['<a href='+$scope.items[19].url+'>Charter Colony<\/a>', 37.5042087,-77.663144, 2],
      ['<a href='+$scope.items[20].url+'>The Village<\/a>', 37.6143577,-77.5947447, 2],
      ['<a href='+$scope.items[21].url+'>Virginia Center Marketplace<\/a>', 37.6740698,-77.4635096, 2],
      ['<a href='+$scope.items[22].url+'>Westpark<\/a>', 37.6402147,-77.5652784, 2],
      ['<a href='+$scope.items[23].url+'>White Oak Village<\/a>', 37.5292637,-77.356253, 2],
      ['<a href='+$scope.items[24].url+'>MIDAS 5301 W. Broad St<\/a>', 37.5859692,-77.50153, 2],
      ['<a href='+$scope.items[25].url+'>MIDAS 11463 W. Broad St<\/a>', 37.6508422,-77.6133527, 2],
      ['<a href='+$scope.items[26].url+'>MIDAS 10160 Hull St. Rd.<\/a>', 37.4430676,-77.5868773, 2],
      ['<a href='+$scope.items[27].url+'>MIDAS 1400 Boulevard in Colonial Heights<\/a>', 37.2525586,-77.4135398, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(37.5563777,-77.489382),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });
    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
       }

        $scope.map = map;
      }


      google.maps.event.addDomListener(window, 'load', initialize);

      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          template: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading = $ionicLoading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };

      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

      //Show list view of bin locations + hide map view
      $scope.mapView = true;
      $scope.showListView = function() {
        $scope.mapView = false;
      }

      $scope.showMapView = function() {
        $scope.mapView = true;
      }
      //Most needed food
      $scope.neededFood = function() {
        alert("1. Peanut Butter\r\n2. Canned Tuna & Chicken\r\n3. Low Sodium Veggies\r\n4. Fruits Packed in Juice\r\n5. Spaghetti Sauce (No Glass)\r\n6. Canned or Dry Beans\r\n7. Hot & Cold Cereal\r\n8. Whole Grain Snacks\r\n\r\nPlease refer to feedMore website for more info:https:\/\/feedmore.org\/food-bank");
      }
      //about me
      $scope.aboutMe = function() {
        alert('When I was trying to drop food to FeedMore\'s donation bins, I noticed that it\'s hard to find and visualize all the locations. So I thought well I should build an APP that helps people easily find donation locations and facilitate food donation process. Then I made it. Hope this helps :) - Lei\r\n'
        +'\r\nPlease refer to feedMore website for more info:\r\nhttps:\/\/feedmore.org\/ways-to-give\/donate-food\/drop-boxes');
      }

      $scope.data = {
    showDelete: false
  };

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };


  });
