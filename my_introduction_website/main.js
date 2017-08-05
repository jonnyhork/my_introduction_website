console.log('hello world');

$(document).ready(function() {

  var categories = {
    activities: ['rock climbing, mostly bouldering.', 'make cocktails', 'dancing, except at weddings', 'DJ on Traktor Pro', 'travel, especially abroad...for climbing', 'road bike', 'mini-golf', 'cook', 'BBQ\'s', 'watch Game of Thrones', 'routesetting', 'spend time with Jessie (gf)', 'listen to techno, house, R&B, Hip-Hop,...'],
    food: ['wine, I took a basic sommelier class', 'whiskey, usually bourbon', 'sushi', 'dark chocolate', 'ramen', 'tequila', 'spicy food', 'gin', 'ice cream!', 'good espresso', 'sour beer', 'I\'m a sucker for good pastries', 'chicken and waffles', 'deep dish pizza'],
    places: ['RMNP', 'born in Chicago, grew up in the North Shore', 'New Trier High School', 'LA', 'Cape Town', 'Fontainebleau', 'Yosemite', 'The Populist restaurant', 'Joe\'s Valley, UT', 'Box Car Cafe', 'The Aviary in Chicago', 'I\'ve worked at all three climbing gyms in Boulder + USAC. Currently the BRC.', 'Bogota']
  }



  function randomResponse(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }



  $("button").click(function() {

    var responseContainer = $(this).parents('.info-box').find('.response')[0]
    var arrayName = responseContainer.getAttribute('arrayName')
    var catagoryArray = categories[arrayName]
    $(responseContainer).text(randomResponse(catagoryArray))

    console.log($(this).parents('.info-box').find('.response')[0]);
    console.log(`Then we get the HTML attribute arrayName for the container of 'this': ${arrayName}`);
    console.log(`Finally we take the value of getAttribute and use that as the argument for randomResponse()`);

  })
})
