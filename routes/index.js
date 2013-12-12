/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Express',
		headline: 'Templating sample',
		items: [{
			heading: 'head1',
			body: 'body1'
		}, {
			heading: 'head2',
			body: 'body2'
		}, {
			heading: 'head3',
			body: 'body3'
		}, {
			heading: 'head4',
			body: 'body4'
		}, {
			heading: 'head5',
			body: 'body5'
		}, {
			heading: 'head6',
			body: 'body6'
		}]
	});
};