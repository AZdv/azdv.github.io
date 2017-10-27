var formatDate = function(dateStr) {
	var dateVar = new Date(dateStr);
	var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dateVar.getMonth()];
	var str = month + ' ' + dateVar.getDate() + ', ' + dateVar.getFullYear();
};
var strCleanUp = function(str) {
	return str.split('<!-- more -->')[0].replace(/<(?:.|\n)*?>/gm, '').trim();
};
var onSuccess = function(xml) {
	var afterPost = 0;
	$(xml).find('entry').slice(0, 2).each(function() {
		var newPost = $('.post:eq(0)').clone();
		var href = $(this).children('link').attr('href');
		var content = $(this).children('content').text();
		newPost.addClass('founders-blog');
		newPost.find('.post-image').attr('src', function() { return $(this).attr('src_default') }).css('opacity', 0.8);
		newPost.find('.post-title a').text($(this).children('title').text());
		newPost.find('.post-title a').attr('href', href);
		newPost.find('.post-content').html(strCleanUp($(this).children('content').text()));
		newPost.find('.post-author').text($(this).find('author name').text());
		newPost.find('.post-date').text(formatDate($(this).children('updated').text()));
		newPost.find('.post-tags').html('<a href="' + href + '" target="_blank">Founder\'s Blog</a>');
		newPost.hide().remove('.post-comments');
		$('.post:eq(' + afterPost + ')').after(newPost);
		newPost.fadeTo('slow', 0.8);
		afterPost++;
	})

};
var lastPostOlderThan2Weeks = function() {
	var postDate = new Date($('.post:eq(0) .post-date').text());
	return Math.abs(new Date() - postDate) / (1000*60*60*24) > 14;
};
(function($) {
	//Either less than 2 posts, or last post is older than 2 weeks
	if ($('.post').length < 2 || lastPostOlderThan2Weeks()) {
		$.ajax({
			type: 'GET',
			url: '//www.kidsil.net/feed.xml?foo=' + String(Math.random()).slice(2), //avoiding caching
			dataType: 'xml',
			success: function(xml) {
				setTimeout(onSuccess, 5000, xml);
			}
		})
	}

})(jQuery)