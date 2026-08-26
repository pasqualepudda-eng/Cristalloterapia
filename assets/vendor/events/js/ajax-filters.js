
jQuery(function($){
    $('#apply-filters').on('click',function(){
        var data={action:'bricks_events_filter',nonce:bricksEventsAjax.nonce,category:$('#category-filter').val(),tag:$('#tag-filter').val(),date:$('#event-date-filter').val()};
        $.post(bricksEventsAjax.ajax_url,data,function(res){ $('.events-grid').html(res); });
    });
});
