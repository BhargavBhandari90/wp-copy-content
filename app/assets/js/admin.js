!function(t){var e=t("#wcc_post_title"),o=0,n=t("#wcc_fetch_button");t.fn.wpPostSuggest=function(e){var n,a=t(this);e=e||{},e=t.extend({source:function(e,c){t.post(ajaxurl,{action:"wpcc_find_posts",ps:a.val(),_ajax_nonce:t("#_ajax_nonce").val(),dataType:"json"}).always(function(){a.removeClass("ui-autocomplete-loading")}).done(function(t){var e=[];t.success?(t.data.map(t=>{var n=++o;e.push({id:n,post_id:t.ID,name:t.post_title})}),n=e,c(e)):c(e)})},focus:function(t,e){a.attr("aria-activedescendant","wp-tags-autocomplete-"+e.item.id),t.preventDefault()},select:function(e,o){return a.val(o.item.name),t("#wcc_post_id").val(o.item.post_id),t("#wcc_fetch_button").show(),!1},open:function(){a.attr("aria-expanded","true")},close:function(){a.attr("aria-expanded","false")},minLength:2,position:{my:"left top+2",at:"left bottom",collision:"none"},messages:{noResults:window.uiAutocompleteL10n.noResults,results:function(t){return t>1?window.uiAutocompleteL10n.manyResults.replace("%d",t):window.uiAutocompleteL10n.oneResult}}},e),a.on("keydown",function(){a.removeAttr("aria-activedescendant")}).autocomplete(e).autocomplete("instance")._renderItem=function(e,o){return t('<li role="option" data-post-id="'+o.post_id+'" id="wp-tags-autocomplete-'+o.id+'">').text(o.name).appendTo(e)},a.attr({role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-owns":a.autocomplete("widget").attr("id")}).on("focus",function(){console.log("focuse"),a.val()&&a.autocomplete("search")})},t.fn.wpCopyContent=function(e){t(this).on("click",function(e){var o=t("#wcc_post_id").val();t("#wpcc-spiner").attr("style","visibility:visible"),t("#wpcc-notice-element").length>0&&t("#wpcc-notice-element").remove(),t.post(window.ajaxurl,{action:"wpcc_copy_from_post",pid:o,_ajax_nonce:t("#_ajax_nonce").val(),dataType:"json"}).done(function(e){e.success?(tinyMCE.activeEditor.setContent(e.data),t("#wcc_post_id").val(0),t("#wcc_fetch_button").hide()):t("#wpcc-spiner").after('<div id="wpcc-notice-element" class="error">'+e.data+"</div>"),t("#wpcc-spiner").hide()})})},t(e).wpPostSuggest(),t(n).wpCopyContent()}(jQuery);