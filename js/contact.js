(function($) {
	$( '#contact_form' ).ajaxForm({
		beforeSubmit: function(formData, jqForm, options) {
			for (var i=0; i < formData.length; i++) { 
				var formValid = true;
				if (!formData[i].value) { 
					formValid = false;
					$( '[name="' + formData[i].name + '"]' ).addClass('invalid');
				} else {
					$( '[name="' + formData[i].name + '"]' ).removeClass('invalid');
				}
			}
			if ( ! formValid )
				return false;
			submitted = true;
			if (dataLayer) {
				dataLayer.push({
					'Category': 'ContactForm',
					'Action': 'ContactFormSubmit',
					'event': 'auto_event'
				});
			}
		},
		error: function(d, q, o) {
			submitFunc($('#contact_form'), $('.form-sent'));
		},
		success: function(d, q, o) {
			submitFunc($('#contact_form'), $('.form-sent'));
		}
	})
	var submitFunc = function(contactForm, msg) {
		contactForm.clearForm();
		msg.show();
		setTimeout(function() {
			window.location.reload(false);
		}, 3000)
	}
})(jQuery);