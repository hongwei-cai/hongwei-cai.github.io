/* Module 2: 
Accordion effects on work list
__________________________________________________ */

$(document).ready(function() {
  $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
    e.preventDefault(); // Prevent default action of button

    // Close all open panels except the clicked one
    $('.accordion-panel')
      .not($(this).next('.accordion-panel'))
      .filter(':visible')
      .slideUp();

    // Toggle the clicked panel
    $(this) // Get the element the user clicked on
      .next('.accordion-panel') // Select following panel
      .not(':animated') // If it is not currently animating
      .slideToggle(); // Use slide toggle to show or hide it
  });
});
