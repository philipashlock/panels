
(function(){var panel,panel_close_button,panel_frame,panel_html,panel_status,style;style=&quot;&lt;style type=\&quot;text/css\&quot;&gt;\n #hacker-panel {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  z-index: 999999;\n  \n  width: 100%25;\n  height: 40px;\n\n  border: 0;\n  background: #fff;\n  \n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 -5px 6px 0;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 -5px 6px 0;\n  -o-box-shadow: rgba(0, 0, 0, 0.2) 0 -5px 6px 0;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -5px 6p;\n }\n \n #hacker-panel .close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #999;\n  cursor: auto;\n  display: block;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 18px;\n  height: 10px;\n  width: 11px;\n  line-height: 10px;\n  text-decoration: none;\n }\n \n #hacker-panel .status {\n  text-align: center;\n  padding-top: 10px;\n  font-family: Verdana;\n  font-size: 12px;\n }\n \n #hacker-panel .frame {\n  display: none;\n  width: 100%25;\n  height: 100%25;\n  border: 0;\n }\n&lt;/style&gt;&quot;;$(&quot;head&quot;).append(style);panel_html=&quot;&lt;div id=\&quot;hacker-panel\&quot; class=\&quot;panel\&quot;&gt;\n &lt;div class=\&quot;close\&quot;&gt;\n  &lt;a href=\&quot;#\&quot; class=\&quot;close-button\&quot;&gt;&amp;times;&lt;/a&gt;\n &lt;/div&gt;\n &lt;div class=\&quot;status\&quot;&gt;\n  Loading...\n &lt;/div&gt;\n &lt;iframe class=\&quot;frame\&quot; /&gt;\n&lt;/div&gt;&quot;;panel=$(&quot;#hacker-panel&quot;);if(panel.length){if(panel.is(&quot;:visible&quot;)){panel.slideUp(&quot;fast&quot;);}else{panel.slideDown(&quot;fast&quot;);}}else{panel=$(panel_html);panel_status=panel.find(&quot;.status&quot;);panel_frame=panel.find(&quot;.frame&quot;);panel.appendTo(&quot;body&quot;);panel.slideDown(&quot;fast&quot;);$.getJSON(&quot;http://api.ihackernews.com/getid?format=jsonp&amp;callback=?&amp;url=&quot;+encodeURI(window.location),function(data){if(data.length){return panel_frame.attr(&quot;src&quot;,&quot;http://news.ycombinator.com/item?id=&quot;+data[0]);}else{return panel_frame.attr(&quot;src&quot;,&quot;http://news.ycombinator.com/submitlink?u=&quot;+encodeURIComponent(document.location)+&quot;&amp;t=&quot;+encodeURIComponent(document.title));}});panel_frame.bind(&quot;load&quot;,function(){panel_status.fadeOut(&quot;fast&quot;);panel_frame.fadeIn(&quot;fast&quot;);return panel.animate({height:&quot;60%25&quot;});});}
panel_close_button=panel.find(&quot;.button&quot;);panel_close_button.click(function(){return panel.slideUp(&quot;fast&quot;);});}).call(this);
