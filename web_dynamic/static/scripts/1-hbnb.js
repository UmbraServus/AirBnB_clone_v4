#!/usr/bin/node
$(document).ready(function () {
  let checkedAmenities = {};
  $(document).on('change', 'input[type=checkbox]', function () {
    const aId = $(this).data('id');
    const aName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities[aId] = aName;
    } else {
      delete checkedAmenities[aId];
    }
    let amenities = Object.values(checkedAmenities).join(', ');
    $('.amenities h4').text(amenities);
  });
});