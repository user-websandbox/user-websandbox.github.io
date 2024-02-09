let footer = document.querySelector( 'footer' ),
    frontend = document.querySelector( '#frontend' );

function frontEndExpand() {
  if ( 
    footer.classList.contains( 'frontEndExpand' ) 
  ) {
    footer.classList.remove( 'frontEndExpand' );

    setTimeout(
      function() {
        footer.classList.remove( 'open' );
      }, 1
    );
  }
  else {
    footer.classList.add( 'frontEndExpand' );

    setTimeout(
      function() {
        footer.classList.add( 'open' );
      }, 1
    );
  }
  
}

frontend.addEventListener( 'click', frontEndExpand );
