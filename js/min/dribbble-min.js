var dribbbleItems=$(".dribbble-items"),callback=function(e){var s="";$.each(e.shots,function(e,t){s+='<div class="item column three"><figure>',s+='<img src="'+t.image_url+'" ',s+='alt="'+t.title+'"></figure>',s+='<a class="overlay" href="'+t.url+'">',s+='<div class="overlay-content">',s+='<div class="post-type"><i class="fa fa-dribbble"></i></div>',s+='<p class="reset">'+t.views_count+" views</p>",s+='<p class="reset">'+t.likes_count+" likes</p>",s+="</div></a></div>"}),dribbbleItems.html(s).append(loader);var t=$(".dribbble-items");t.find(".item:nth-of-type(4n)").addClass("last"),t.removeClass("preload"),t.children(".landing-els").remove(),centerOverlay()};if(dribbbleItems.length){var username=dribbbleItems.data("username"),elemNr=dribbbleItems.data("elements");$.jribbble.getShotsByPlayerId(username,callback,{page:1,per_page:elemNr}),$(window).load(function(){centerOverlay()})}!function(e){"use strict";e.jribbble={};var s=function(s,t){e.ajax({type:"GET",url:"http://api.dribbble.com"+s,data:t[1]||{},dataType:"jsonp",success:function(e){t[0](void 0===e?{error:!0}:e)}})},t={getShotById:"/shots/$/",getReboundsOfShot:"/shots/$/rebounds/",getShotsByList:"/shots/$/",getShotsByPlayerId:"/players/$/shots/",getShotsThatPlayerFollows:"/players/$/shots/following/",getPlayerById:"/players/$/",getPlayerFollowers:"/players/$/followers/",getPlayerFollowing:"/players/$/following/",getPlayerDraftees:"/players/$/draftees/",getCommentsOfShot:"/shots/$/comments/",getShotsThatPlayerLikes:"/players/$/shots/likes/"},l=function(e){return function(){var t=[].slice.call(arguments),l=e.replace("$",t.shift());s(l,t)}};for(var a in t)e.jribbble[a]=l(t[a])}(jQuery,window,document);