import{_ as o}from"./gzh.b03adfd2.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,a as r,d as e,b as s,e as n,r as p}from"./app.048cd509.js";const h="/assets/01.7401cdce.png",c={},d=n('<h2 id="ppa01a" tabindex="-1"><a class="header-anchor" href="#ppa01a" aria-hidden="true">#</a> PPA01A</h2><p>Class: Programming Practice &amp; Applications</p><p>Created: October 22, 2022 6:48 PM</p><p>Type: Assignment</p><h2 id="property-viewer-\u623F\u4EA7\u67E5\u770B\u5668" tabindex="-1"><a class="header-anchor" href="#property-viewer-\u623F\u4EA7\u67E5\u770B\u5668" aria-hidden="true">#</a> Property Viewer \u623F\u4EA7\u67E5\u770B\u5668</h2><hr><p>\u8FD9\u9879\u4EFB\u52A1\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u4E00\u4E2A\u5141\u8BB8\u7528\u6237\u67E5\u770B\u4ECE\u7535\u5B50\u8868\u683C\u52A0\u8F7D\u7684\u623F\u4EA7\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u8BE5\u5E94\u7528\u7A0B\u5E8F\u5DF2\u90E8\u5206\u5B9E\u73B0\uFF0C\u4F46\u4F60\u9700\u8981\u5B8C\u6210\u4E00\u4E9B\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u5E76\u4FEE\u590D\u4E00\u4E2A\u76EE\u524D\u4E0D\u80FD\u6309\u9884\u671F\u5DE5\u4F5C\u7684\u65B9\u6CD5\u3002</p><hr><h3 id="\u5F00\u59CB\u884C\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u884C\u52A8" aria-hidden="true">#</a> \u5F00\u59CB\u884C\u52A8</h3><ul><li>\u5F53\u4F60\u6253\u5F00\u5B83\u65F6\uFF0C\u4F60\u4F1A\u770B\u5230\u4E0B\u9762\u63CF\u8FF0\u7684\u7C7B\u7ED3\u6784\u3002</li><li>\u56DB\u4E2A\u7C7B\u4E2D\u7684\u4E09\u4E2A\u5DF2\u7ECF\u5B8C\u5168\u5B9E\u73B0\uFF0C\u6240\u4EE5\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u5B83\u4EEC\u3002\u6709\u4E00\u4E2A\u7C7B\uFF0C<strong>PropertyViewer</strong> \uFF0C\u8FD8\u6CA1\u6709\u5B8C\u6210\uFF0C\u4F60\u7684\u5DE5\u4F5C\u662F\u5B8C\u6210\u8FD9\u4E2A\u7C7B\u7684\u5B9E\u73B0\u3002</li></ul><p><img src="'+h+'" alt="01" loading="lazy"></p><hr><h3 id="\u9879\u76EE\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6982\u8FF0" aria-hidden="true">#</a> \u9879\u76EE\u6982\u8FF0</h3><p>\u4E0B\u9762\u662F\u5BF9\u73B0\u6709\u7C7B\u7684\u5FEB\u901F\u6982\u8FF0\uFF1A</p><ul><li><p>Property (\u8D22\u4EA7)</p><ul><li>\u8FD9\u4E2A\u7C7B\u4EE3\u8868\u4E86\u4E00\u4E2A\u5355\u4E00\u7684\u623F\u4EA7\u3002\u4F60\u5E94\u8BE5\u770B\u4E00\u4E0B\u8FD9\u4E2A\u7C7B\u7684\u5185\u90E8\u3002</li><li>\u8FD9\u662F\u4F60\u9700\u8981\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u5982 <strong>getID (\u83B7\u53D6ID)</strong>\u3001<strong>getLatitude (\u83B7\u53D6\u7EAC\u5EA6)</strong> \u548C <strong>toggleFavourite (\u5207\u6362\u6700\u7231)</strong>\u3002</li></ul></li><li><p>Porfolio (\u6295\u8D44\u7EC4\u5408)</p><ul><li>\u8FD9\u4EE3\u8868\u4E86\u623F\u4EA7\u7684\u4E00\u4E2A\u96C6\u5408</li><li><strong>Porfolio (\u6295\u8D44\u7EC4\u5408)</strong> \u662F\u901A\u8FC7\u6307\u5B9A\u78C1\u76D8\u4E0A\u7684\u7535\u5B50\u8868\u683C\u6765\u5EFA\u7ACB\u7684\uFF0C\u91CC\u9762\u6709\u4E00\u4E9B\u623F\u4EA7\u7684\u6570\u636E\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u540D\u4E3A airbnb-london.csv \u7684\u6587\u4EF6 - \u8FD9\u662F\u771F\u5B9E\u4E16\u754C\u7684\u6570\u636E\uFF0C\u662F\u4E00\u4E9B\u5B9E\u9645\u7684 AirBnB \u623F\u6E90\uFF09\u3002</li><li><strong>Porfolio (\u6295\u8D44\u7EC4\u5408)</strong> \u5C06\u81EA\u52A8\u52A0\u8F7D\u5B83\u5728\u8BE5\u7535\u5B50\u8868\u683C\u4E2D\u53D1\u73B0\u7684\u6240\u6709\u623F\u4EA7\u3002\u5982\u679C\u4F60\u559C\u6B22\uFF0C\u53EF\u4EE5\u968F\u65F6\u5411\u7535\u5B50\u8868\u683C\u4E2D\u6DFB\u52A0\u66F4\u591A\u7684\u623F\u4EA7</li></ul></li><li><p>PropertyViewerGUI (\u623F\u4EA7\u67E5\u770B\u5668 GUI )</p><ul><li>\u8FD9\u4E2A\u7C7B\u5C55\u793A\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684 GUI\uFF08\u56FE\u5F62\u7528\u6237\u754C\u9762\uFF09\u3002\u5C31\u662F\u8BF4\uFF1A\u5B83\u7ED8\u5236\u4E86\u4E3B\u7A97\u53E3\u3001\u6309\u94AE\u4EE5\u53CA\u4F60\u5728\u5C4F\u5E55\u4E0A\u770B\u5230\u7684\u6240\u6709\u5176\u4ED6\u4E1C\u897F\u3002</li><li>\u8BE5\u7C7B\u505A\u4E86\u4E24\u4EF6\u989D\u5916\u7684\u4E8B\u60C5\uFF1A</li><li>\uFF081\uFF09\u5982\u679C\u7528\u6237\u70B9\u51FB\u4E86\u4E00\u4E2A\u6309\u94AE\uFF0C\u8FD9\u4E2A\u8C03\u7528\u4F1A\u88AB\u4F20\u9012\u5230\u76F8\u5173\u7684 <strong>PropertyViewer</strong> \u65B9\u6CD5\u4E0A\uFF1B</li><li>\uFF082\uFF09<strong>PropertyViewer \u7C7B</strong>\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u6765\u663E\u793A\u754C\u9762\u4E2D\u7684\u4E00\u4E2A <strong>Porperty (\u8D22\u4EA7)</strong> \u6216 <strong>String (\u5B57\u7B26\u4E32)</strong> \u3002</li></ul></li><li><p>Property Viewer</p><ul><li>\u8FD9\u4E2A\u7C7B\u5B9E\u73B0\u4E86\u623F\u4EA7\u67E5\u770B\u5668\u7684\u903B\u8F91\u3002</li><li>\u8FD9\u5C31\u662F\u4F60\u5FC5\u987B\u505A\u7684\u5DE5\u4F5C\u3002</li><li>\u8FD9\u4E5F\u662F\u4F60\u4E3A\u542F\u52A8\u8FD9\u4E2A\u5E94\u7528\u7A0B\u5E8F\u800C\u5B9E\u4F8B\u5316\u7684\u7C7B\u3002</li><li>\u8FD9\u4E5F\u662F\u4F60\u4E3A\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u800C\u5B9E\u4F8B\u5316\u7684\u7C7B\u3002</li></ul></li></ul><hr><h3 id="\u57FA\u7840\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4EFB\u52A1" aria-hidden="true">#</a> \u57FA\u7840\u4EFB\u52A1</h3><p>\u4E3A\u4E86\u5B8C\u6210\u8FD9\u9879\u4EFB\u52A1\uFF0C\u4F60\u5FC5\u987B\u5B8C\u6210\u4EE5\u4E0B\u4EFB\u52A1\uFF1A</p><ul><li>\u5F53\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0Cportfolio (\u6295\u8D44\u7EC4\u5408) \u4E2D\u7684\u7B2C\u4E00\u4E2A porperty\uFF08\u7D22\u5F150\uFF09\u5E94\u8BE5\u88AB\u81EA\u52A8\u663E\u793A\u3002(6\u5206)</li><li>\u5BF9\u4E8E\u4EFB\u4F55\u663E\u793A\u7684\u5730\u4EA7\uFF0C\u8BE5\u5730\u4EA7\u7684ID\u5E94\u8BE5\u663E\u793A\u5728\u9760\u8FD1\u7A97\u53E3\u7684\u9876\u90E8\u3002<strong>GUI \u7C7B</strong>\u6709\u4E00\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u505A\u5230\u8FD9\u4E00\u70B9\u3002(10\u5206)</li><li>\u5F53 <strong>&quot;Toggle Favourite&quot;</strong> \u6309\u94AE\u88AB\u6309\u4E0B\u65F6\uFF0C\u8BE5\u5C5E\u6027\u7684 <strong>isFavourite \u5B57\u6BB5</strong> \u5E94\u8BE5\u88AB\u66F4\u65B0\u3002\u5728 <strong>Property \u7C7B</strong>\u4E2D\u6709\u4E00\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u505A\u5230\u8FD9\u4E00\u70B9\u3002(15\u5206)</li><li>\u7A97\u53E3\u5E95\u90E8\u7684\u680F\u5E94\u663E\u793A\u8BE5\u5730\u4EA7\u662F\u5426\u5DF2\u88AB\u7528\u6237\u6807\u8BB0\u4E3A\u4ED6\u4EEC\u7684\u6700\u7231\u4E4B\u4E00\u3002(10\u5206)</li><li>\u5F53\u6309\u4E0B <strong>&quot;Next&quot;</strong> \u6309\u94AE\u65F6\uFF0C\u4E0B\u4E00\u4E2A\u5730\u4EA7\u9879\u76EE\u5E94\u8BE5\u88AB\u663E\u793A\u51FA\u6765\uFF0C\u5E76\u6709\u6B63\u786E\u7684\u6570\u636E\u3002\u6B64\u5916\uFF0C\u9876\u90E8\u7684ID\u5E94\u8BE5\u88AB\u6B63\u786E\u66F4\u65B0\uFF0C\u4EE5\u53CA\u8BE5\u5730\u4EA7\u662F\u5426\u662F\u7528\u6237\u7684\u6700\u7231\u4E4B\u4E00\u3002\u5982\u679C\u5728\u6700\u540E\u4E00\u4E2A\u5730\u4EA7\u4E0A\u6309\u4E0B <strong>&quot;Next&quot;</strong> \u6309\u94AE\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5E94\u8BE5\u8FD4\u56DE\u5230\u7B2C\u4E00\u4E2A\u5730\u4EA7\u3002(12\u5206)</li><li>\u5F53 <strong>\u201CPrevious\u201D</strong> \u6309\u94AE\u88AB\u6309\u4E0B\u65F6\uFF0C\u4E0A\u4E00\u4E2A\u5730\u4EA7\u5E94\u8BE5\u88AB\u663E\u793A\u51FA\u6765\uFF0C\u5E76\u6709\u6B63\u786E\u7684\u6570\u636E\u3002\u6B64\u5916\uFF0C\u9876\u90E8\u7684ID\u5E94\u8BE5\u88AB\u6B63\u786E\u66F4\u65B0\uFF0C\u4EE5\u53CA\u8BE5\u5730\u4EA7\u662F\u5426\u662F\u7528\u6237\u7684\u6700\u7231\u4E4B\u4E00\u3002\u5982\u679C\u5728\u7B2C\u4E00\u4E2A\u5730\u4EA7\u4E0A\u6309\u4E0B <strong>\u201CPrevious\u201D</strong> \u6309\u94AE\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5E94\u8BE5\u8F6C\u5230\u6700\u540E\u4E00\u4E2A\u5730\u4EA7\u3002(12\u5206)</li><li>\u5728 <strong>PropertyViewer \u7C7B</strong>\u4E2D\uFF0C\u6709\u51E0\u4E2A\u65B9\u6CD5\u662F\u6CA1\u6709\u8BB0\u5F55\u7684\u3002\u63D0\u4F9B\u9002\u5F53\u7684\u65B9\u6CD5\u7EA7\u522B\u7684\u6CE8\u91CA\u3002(5\u5206)</li></ul><hr><h3 id="\u6311\u6218\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6311\u6218\u4EFB\u52A1" aria-hidden="true">#</a> \u6311\u6218\u4EFB\u52A1</h3><p>\u8FD9\u4E9B\u4EFB\u52A1\u53EA\u6709\u5728\u4F60\u5B8C\u6210\u4E86\u57FA\u672C\u4EFB\u52A1\u540E\u624D\u5E94\u5B8C\u6210\u3002\u6CE8\u610F\uFF0C\u6311\u6218\u4EFB\u52A1\u9700\u8981\u7684\u77E5\u8BC6\u53EF\u80FD\u8FDC\u8FDC\u8D85\u8FC7\u6211\u4EEC\u5728\u8BFE\u7A0B\u4E2D\u8FC4\u4ECA\u4E3A\u6B62\u6240\u6D89\u53CA\u7684\u77E5\u8BC6\u3002</p><ul><li>\u5B9E\u73B0\u4E00\u4E2A\u540D\u4E3A <strong>getNumberOfPropertiesViewed</strong> \u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u81EA\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u4EE5\u6765\u88AB\u67E5\u770B\u7684\u5730\u4EA7\u6570\u91CF\u3002\u8FD4\u56DE\u7C7B\u578B\u5E94\u8BE5\u662F <strong>int</strong> \u3002\u67E5\u770B\u540C\u4E00\u5730\u4EA7\u4E24\u6B21\u7B97\u4F5C\u4E24\u6B21\u67E5\u770B\u3002(5\u5206)</li><li>\u5B9E\u73B0\u4E00\u4E2A\u540D\u4E3A <strong>averagePropertyPrice</strong> \u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u5230\u76EE\u524D\u4E3A\u6B62\u6240\u67E5\u770B\u7684\u623F\u4EA7\u7684\u5E73\u5747\u4EF7\u683C\u3002\u8FD4\u56DE\u7684\u7C7B\u578B\u5E94\u8BE5\u662F <strong>int</strong> \u3002\uFF0810\u5206\uFF09 <ul><li>\u4F8B\u5982\uFF1A\u5148\u770B\u623F\u4EA7 A\uFF0850\u82F1\u9551\uFF09\uFF0C\u518D\u770B\u623F\u4EA7 B\uFF0820 \u82F1\u9551\uFF09\uFF0C\u7136\u540E\u518D\u770B\u623F\u4EA7A\u7B97\u4F5C\u7B2C 3 \u6B21\uFF0C\u5E73\u5747\u4EF7\u683C\u5E94\u8BE5\u662F (50+20+50) / 3 = 40\u3002</li></ul></li><li><strong>\u201DView Property on Map\u201D</strong> \u6309\u94AE\u76EE\u524D\u662F\u574F\u7684\uFF0C\u56E0\u4E3A\u5B83\u53EA\u5728\u5730\u56FE\u4E0A\u663E\u793A\u5E03\u4EC0\u5E84\u56ED\u3002\u4FEE\u590D\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4F7F\u5176\u6539\u4E3A\u5728\u5730\u56FE\u4E0A\u663E\u793A\u623F\u4EA7\u7684\u4F4D\u7F6E\u3002(5\u5206)</li><li>\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 <strong>\u201DStatistics\u201D</strong> \u6309\u94AE\u3002\u70B9\u51FB\u540E\uFF0C\u5E94\u6253\u5F00\u4E00\u4E2A\u65B0\u7A97\u53E3\uFF0C\u663E\u793A\u6311\u6218\u4EFB\u52A1\u4E2D\u4E24\u4E2A\u65B0\u65B9\u6CD5\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002(10\u5206)</li></ul><hr><h3 id="\u63D0\u4EA4\u548C\u622A\u6B62\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u548C\u622A\u6B62\u65E5\u671F" aria-hidden="true">#</a> \u63D0\u4EA4\u548C\u622A\u6B62\u65E5\u671F</h3><ul><li>\u4F60\u5FC5\u987B\u5728\u82F1\u56FD\u65F6\u95F4 **10\u670828\u65E5\uFF08\u661F\u671F\u4E94\uFF0916:00\uFF08\u4E0B\u53484\u70B9\uFF09**\u4E4B\u524D\u5728\u63D0\u4EA4\u4EE5\u4E0B\u5185\u5BB9\uFF1A <ol><li>\u4F60\u7684 BlueJ \u9879\u76EE\u7684\u4E00\u4E2A Jar \u6587\u4EF6 <ol><li>\u4F60\u53EF\u4EE5\u5728BlueJ\u5185\u90E8\u901A\u8FC7\u8FDB\u5165 Project\uFF0C\u7136\u540E &quot;\u521B\u5EFAJar\u6587\u4EF6...&quot; \u6765\u521B\u5EFA\u4E00\u4E2AJar\u3002</li><li>\u4F60\u4E0D\u9700\u8981\u6539\u53D8\u4EFB\u4F55\u9ED8\u8BA4\u9009\u9879\uFF0C\u56E0\u6B64\u4F60\u5E94\u8BE5\u76F4\u63A5\u70B9\u51FB &quot;\u7EE7\u7EED&quot; \u6309\u94AE\u3002</li></ol></li></ol></li><li>*<em>Jar \u6587\u4EF6\u5FC5\u987B\u5305\u542B\u4F60\u7684\u6E90\u4EE3\u7801\uFF0C\u5373 <em>.java \u6587\u4EF6\uFF0C\u800C\u4E14\u5FC5\u987B\u5728 BlueJ \u4E0A\u8FD0\u884C\u3002</em></em></li><li>\u8FDF\u5230\u7684\u63D0\u4EA4\u3002\u5982\u679C\u4F60\u5EF6\u8FDF\u63D0\u4EA4\uFF0C\u4F46\u5728\u622A\u6B62\u65E5\u671F\u524D 24 \u5C0F\u65F6\u5185\u63D0\u4EA4\uFF0C\u4F5C\u54C1\u5C06\u88AB\u8BC4\u5206\uFF0C\u5E76\u88AB\u6263\u9664 10 \u5206\u539F\u59CB\u5206\u3002\u5982\u679C\u8FD9\u4E00\u6263\u5206\u4F7F\u4F60\u7684\u5206\u6570\u4F4E\u4E8E\u5408\u683C\u5206\u6570\uFF0840%\uFF09\uFF0C\u4F60\u7684\u5206\u6570\u5C06\u88AB\u9650\u5236\u5728 40%\u3002</li></ul><hr><h3 id="\u8BC4\u5206" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u5206" aria-hidden="true">#</a> \u8BC4\u5206</h3><p>\u5E94\u7528\u7A0B\u5F0F\u6839\u636E\u56DB\u4E2A\u7C7B\u522B\u8FDB\u884C\u8BC4\u5206\uFF1A</p><ol><li>\u7A0B\u5E8F\u6B63\u786E\u6027 \u2014\u2014 \u5E94\u7528\u7A0B\u5E8F\u7B26\u5408\u6240\u6709\u7684\u7A0B\u5E8F\u89C4\u8303\uFF0C\u5373\u5B66\u751F\u5B8C\u6210\u4E86\u6240\u6709\u7684\u57FA\u672C\u4EFB\u52A1\uFF0C\u5305\u62EC\u9075\u5FAA\u63D0\u4EA4\u8BF4\u660E\uFF08\u4F8B\u5982\uFF0C\u5B66\u751F\u63D0\u4EA4\u4E86\u4ED6\u4EECBlueJ\u9879\u76EE\u7684Jar\u6587\u4EF6\uFF09\u3002</li><li>\u4EE3\u7801\u4F18\u96C5 \u2014\u2014 \u5E94\u7528\u7A0B\u5E8F\u7684\u7F16\u5199\u65B9\u5F0F\u4F7F\u4EE3\u7801\u53EF\u91CD\u590D\u4F7F\u7528\u4E14\u9AD8\u6548\uFF08\u5373\u5185\u5B58\u4F7F\u7528\u548C\u590D\u6742\u6027\uFF09\u3002\u5E94\u7528\u7A0B\u5E8F\u9002\u5F53\u5730\u4F7F\u7528\u5FAA\u73AF\u548C\u51FD\u6570\u6765\u51CF\u5C11\u4EE3\u7801\u7684\u590D\u6742\u6027 \u548C/\u6216 \u91CD\u590D\u4EE3\u7801\u3002\u8BE5\u5E94\u7528\u7A0B\u5E8F\u6CA1\u6709\u786C\u7F16\u7801\u7684\u89E3\u51B3\u65B9\u6848\u6216\u8BBE\u8BA1\u4E0D\u826F\u7684\u89E3\u51B3\u65B9\u6848\u3002\u8BBE\u8BA1\u4E0D\u826F\u7684\u89E3\u51B3\u65B9\u6848\u8FC7\u4E8E\u590D\u6742\uFF0C\u5229\u7528\u8FC7\u591A\u7684\u5185\u5B58\u6216\u5229\u7528\u8F83\u6162\u7684\u65B9\u6CD5\u6765\u89E3\u51B3\u95EE\u9898\u3002</li><li>\u6587\u732E \u2014\u2014 \u5E94\u7528\u7A0B\u5E8F\u6709\u8DB3\u591F\u7684\u6587\u732E\u3002\u597D\u7684\u6587\u732E/\u8BC4\u8BBA\u5E94\u8BE5\u89E3\u91CA\u4EE3\u7801\u505A\u4E86\u4EC0\u4E48\u4EE5\u53CA\u5982\u4F55\u505A\u7684\u3002\u8BC4\u8BBA\u4E5F\u53EF\u4EE5\u7528\u6765\u5F3A\u8C03\u4F60\u7684\u89E3\u51B3\u65B9\u6848\u4E2D\u7684\u7EC6\u5FAE\u5DEE\u522B\uFF0C\u4F8B\u5982\uFF0C\u4E00\u6BB5\u53EA\u5728\u7279\u5B9A\u6761\u4EF6\u4E0B\u5DE5\u4F5C\u7684\u4EE3\u7801\u3002</li><li>\u53EF\u8BFB\u6027--\u5E94\u7528\u7A0B\u5E8F\u6613\u4E8E\u7406\u89E3\uFF0C\u5E76\u4F7F\u7528\u826F\u597D\u7684\u7F16\u7A0B\u5B9E\u8DF5\u3002</li></ol><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+o+'" alt="" loading="lazy"></p></details>',32),g={class:"custom-container info"},u=r("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),m=r("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=r("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),P={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},f=r("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1);function y(b,v){const i=p("ExternalLinkIcon");return l(),a("div",null,[d,r("div",g,[u,m,_,r("p",null,[e("\u65B9\u6CD5\u4E00\uFF1A"),r("a",P,[e("QQ"),s(i)])]),f])])}const V=t(c,[["render",y],["__file","01-Coursework-1-Property-Viewer-zh.html.vue"]]);export{V as default};
