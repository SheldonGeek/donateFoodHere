angular.module('ionic.example', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var locations = [
      ['Ashland/Hanover', 37.7613135,-77.4718631, 4],
      ['Bermuda Square', 37.3534335,-77.4134074, 5],
      ['Brook Run', 37.6158568,-77.4681414, 3],
      ['Carytown', 37.5563777,-77.4893825, 2],
      ['Chesterfield Meadows', 37.3726561,-77.5015952, 2],
      ['Chesterfield Towne Center', 37.5059181,-77.6123617, 2],
      ['Chippenham Crossing ', 37.4504163,-77.4932265, 2],
      ['Colonial Square', 37.2696827,-77.4131333, 2],
      ['Crossridge', 37.6567637,-77.5279265, 2],
      ['Gayton Crossing', 37.6056569,-77.5946748, 2],
      ['Harbour Pointe', 37.4109949,-77.6564061, 2],
      ['John Rolfe at Ridgefield', 37.6226449,-77.6262242, 2],
      ['Mechanicsville', 37.6020668,-77.3532766, 2],
      ['Oxbridge Square', 37.4424622,-77.5816816, 2],
      ['Petersburg', 37.1827369,-77.3700319, 2],
      ['Short Pump', 37.6490585,-77.6179451, 2],
      ['Staples Mill', 37.6164093,-77.4986078, 2],
      ['Stony Point', 37.5381788,-77.5648518, 2],
      ['Stratford Hills', 37.537742,-77.5285613, 2],
      ['Charter Colony', 37.5042087,-77.663144, 2],
      ['The Village', 37.6143577,-77.5947447, 2],
      ['Virginia Center Marketplace', 37.6740698,-77.4635096, 2],
      ['Westpark', 37.6402147,-77.5652784, 2],
      ['White Oak Village', 37.5292637,-77.356253, 2],
      ['MIDAS 5301 W. Broad St', 37.5859692,-77.50153, 2],
      ['MIDAS 11463 W. Broad St', 37.6508422,-77.6133527, 2],
      ['MIDAS 10160 Hull St. Rd.', 37.4430676,-77.5868773, 2],
      ['MIDAS 1400 Boulevard in Colonial Heights', 37.2525586,-77.4135398, 1]
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

      //about me
      $scope.aboutMe = function() {
        alert('When I was trying to drop food to FeedMore\'s donation bins, I noticed that it\'s hard to find and visulize all the locations. So I thought well I should build an APP that helps people easily find donation location and facilicate food donation process. Then I made it. Hope this helps :) - Lei');
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

  $scope.items = [
    { id: "Ashland/Hanover - 253 N. Washington Hwy." },
    { id: "Bermuda Square - 12601 Jeff Davis Hwy." },
    { id: "Brook Run - 5700 Brook Rd." },
    { id: "Carytown - 3522 W. Cary St." },
    { id: "Chesterfield Meadows - 6401 Centralia Rd." },
    { id: "Chesterfield Towne Center - 11361 Midlothian Tpke." },
    { id: "Chippenham Crossing - 5201 Chippenham Crossing Center" },
    { id: "Colonial Square - 3107-15 Blvd." },
    { id: "Crossridge - 10250 Staples Mill Rd." },
    { id: "Gayton Crossing - 9782 Gayton Rd." },
    { id: "Harbour Pointe - 13700 Hull St. Rd." },
    { id: "John Rolfe at Ridgefield - 2250 John Rolfe Pkwy." },
    { id: "Mechanicsville - 7324 Bell Creek Rd. Sth." },
    { id: "Oxbridge Square - 10001 Hull St. Rd." },
    { id: "Petersburg - 3330 S. Crater Rd." },
    { id: "Short Pump - 3460 Pump Rd." },
    { id: "Staples Mill - 7129 Staples Mill Rd." },
    { id: "Stony Point - 3000 Stony Point Rd." },
    { id: "Stratford Hills - 7045 Forest Hills Ave."},
    { id: "Charter Colony - 200 Charter Colonly Parkway" },
    { id: "The Village - 7035 Three Chopt Rd." },
    { id: "Virginia Center Marketplace - 10150 Brook Rd." },
    { id: "Westpark - 9645 W. Broad St." },
    { id: "White Oak Village - 4591 S. Laburnum Ave." },
    { id: "MIDAS 5301 W. Broad St. -  804.288.4055" },
    { id: "MIDAS 11463 W. Broad St. -  804.360.2211" },
    { id: "MIDAS 10160 Hull St. Rd. -  804.276.9600" },
    { id: "MIDAS 1400 Boulevard in Colonial Heights -  804.520.2206" }
  ];

    });
