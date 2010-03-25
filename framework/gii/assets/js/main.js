$(document).ready(function() {
	$('.common-generator .check-all a').click(function() {
		if($(this).hasClass('all'))
			$(".common-generator td input").attr('checked', 'checked');
		else if($(this).hasClass('none'))
			$(".common-generator td input").removeAttr('checked');
		return false;
	});

	$('.form.gii .row input').tooltip({
	    position: "center right",
		offset: [-2, 10]
	});

	$('.form.gii .row input').change(function(){
		$('.form.gii .feedback').hide();
		$('.form.gii input[name="generate"]').hide();
	});

	$('#fancybox-inner .close-code').live('click', function(){
		$.fancybox.close();
		return false;
	});

	$('.form.gii .view-code').click(function(){
		$.fancybox.showActivity();
		$.ajax({
			type: 'POST',
			cache: false,
			url: $(this).attr('href'),
			data: $('.form.gii form').serializeArray(),
			success: function(data){
				$.fancybox(data, {
					'showCloseButton': false,
					'autoDimensions': false,
					'width': 800,
					'height': 'auto'
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$.fancybox('<div class="error">'+XMLHttpRequest.responseText+'</div>');
			}
		});
		return false;
	});
});