/* Menu toggle for the mobile navigation (open / close / Esc). */
( function () {
	var body = document.body;
	var modal = document.querySelector( '.menu-modal' );
	if ( ! modal ) { return; }

	function setOpen( open ) {
		if ( open ) {
			modal.classList.add( 'show-modal' );
			// Let the display change apply before fading in.
			window.requestAnimationFrame( function () { modal.classList.add( 'active' ); } );
		} else {
			modal.classList.remove( 'active' );
			window.setTimeout( function () {
				if ( ! modal.classList.contains( 'active' ) ) { modal.classList.remove( 'show-modal' ); }
			}, 250 );
		}
		body.classList.toggle( 'showing-menu-modal', open );
		document.querySelectorAll( '[data-toggle-target=".menu-modal"]' ).forEach( function ( t ) {
			t.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		} );
		if ( open ) {
			var close = modal.querySelector( '.close-nav-toggle' );
			if ( close ) { close.focus(); }
		}
	}

	document.querySelectorAll( '[data-toggle-target=".menu-modal"]' ).forEach( function ( t ) {
		t.addEventListener( 'click', function ( e ) {
			e.preventDefault();
			setOpen( ! modal.classList.contains( 'active' ) );
		} );
	} );

	document.addEventListener( 'keyup', function ( e ) {
		if ( e.key === 'Escape' && modal.classList.contains( 'active' ) ) { setOpen( false ); }
	} );

	// Close when the backdrop (outside the menu) is clicked.
	modal.addEventListener( 'click', function ( e ) {
		if ( e.target === modal || e.target === modal.querySelector( '.menu-modal-inner' ) ) { setOpen( false ); }
	} );
}() );
