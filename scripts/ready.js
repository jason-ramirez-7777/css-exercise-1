$(document).ready(function() {
  initSearch();
  initAbout();
  initAll();
  initCopy();
});

function initSearch() {
  // cache vars
  var homepageBadges = $('.badges');
  var menu = $('.menu');
  
  var search = $('.search');
  var searchToggle = $('.search-toggle');
  var searchInput = $('.search-input');
  var searchResults = $('.search-results');
  
  var searchClosed = true;
  var firstCallback = true;
  
  $('.search-toggle').click(function(e) {
    // if search is closed
    if(searchClosed) {
      $('html, body').animate({ scrollTop: menu.offset().top }, 500, function() {
        // only on first callback
        if(firstCallback) {
          search.toggleClass('expanded');
          searchResults.toggleClass('expanded');
          homepageBadges.toggleClass('collapsed');
          searchInput.focus();
          
          firstCallback = false;
          searchClosed = false;
        }
      });
    }
    // if search is open
    else {
      search.toggleClass('expanded');
      searchResults.toggleClass('expanded');
      homepageBadges.toggleClass('collapsed');
      
      firstCallback = true;
      searchClosed = true;
    }
	});
	
	// cache vars
	var searchText;
	var searchSplit;
	var searchItems = $('.search-list li');
	
	$('.search-input').keyup(function() {
	  // get search text, all lowercase
  	searchText = $(this).val().toLowerCase();
  	
  	// remove match/not-match classes
  	searchItems.removeAttr('class');
  	
  	if(searchText != '') {
    	// find matches
      $('.search-list li[data-search*="' + searchText + '"]').addClass('match');
      
      // find not-matches
      $('.search-list li:not([data-search*="' + searchText + '"])').addClass('not-match');
  	}
	});
}

function initAll() {
  $('.all-toggle').click(function() {
    $('.search-toggle').click();
  });
}

function initAbout() {
  $('.about-toggle').click(function(e) {
    e.preventDefault();
    $('.about').toggleClass('expanded');
    $('.badges').toggleClass('collapsed');
  });
}

function initCopy() {
  ZeroClipboard.config({ swfPath: 'scripts/ZeroClipboard.swf' });
  var clientCopy = new ZeroClipboard($('.copy'));
  var clientInline = new ZeroClipboard($('.inline-copy'));
}