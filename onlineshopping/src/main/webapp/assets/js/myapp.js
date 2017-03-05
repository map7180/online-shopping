$(function() {
	switch (menu) {

	case 'About Us':
		$('#bout').addClass('active');
		break;

	case 'Contact Us':
		$('#contact').addClass('active');
		break;
	case 'All Products':
		$('#listProducts').addClass('active');
		break;

	default:
		$('#listProducts').addClass('active');
	$('#a_'+menu).addClass('active');
	break;

	/*
	 * listProducts case 'About Us': $('#bout').addClass('active'); break;
	 */

	}

});
