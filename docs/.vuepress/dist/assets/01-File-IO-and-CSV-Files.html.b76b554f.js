import{_ as o}from"./gzh.e3bdf003.js";import{_ as p}from"./zsxq.5b71a58b.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as n,d as s,b as e,e as t,r}from"./app.1ec90f96.js";const u={},d=t(`<h2 id="_1-forgetful-karaoke" tabindex="-1"><a class="header-anchor" href="#_1-forgetful-karaoke" aria-hidden="true">#</a> 1. Forgetful Karaoke</h2><p><strong>\u6587\u4EF6\u4E0B\u8F7D\uFF1A</strong></p><ul><li><a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/somebody.txt">somebody.txt</a></li><li><a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/barbrastreisand.txt">barbrastreisand.txt</a></li><li><a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/fakesong.txt">fakesong.txt</a></li></ul><blockquote><p>\u5065\u5FD8\u7684\u5361\u62C9ok</p></blockquote><p><strong>Life hack:</strong> if you&#39;re really bad at karaoke and can&#39;t remember the words, you can just repeatedly sing one word. If it&#39;s the most common word in the song, you&#39;ll be right more often than you might think (and may get away with it!).</p><blockquote><p>\u751F\u6D3B\u5C0F\u8D34\u58EB:\u5982\u679C\u4F60\u771F\u7684\u4E0D\u64C5\u957F\u5361\u62C9 ok\uFF0C\u4E0D\u8BB0\u5F97\u6B4C\u8BCD\uFF0C\u4F60\u53EF\u4EE5\u91CD\u590D\u5531\u4E00\u4E2A\u8BCD\u3002\u5982\u679C\u5B83\u662F\u6B4C\u66F2\u4E2D\u6700\u5E38\u89C1\u7684\u5355\u8BCD\uFF0C\u90A3\u4E48\u4F60\u731C\u5BF9\u7684\u6B21\u6570\u6BD4\u4F60\u60F3\u8C61\u7684\u8981\u591A(\u800C\u4E14\u53EF\u80FD\u4F1A\u4FA5\u5E78\u9003\u8131!)</p></blockquote><p>Write a function <code>approximate_song(filename)</code> that reads the lyrics of the song in the file of name filename, and returns the most common word in the song. In the event of a tie, your function should return the word that comes first alphabetically. Assume that words are whitespace-delimited, and use .split() with no stripping of punctuation or folding of case to extract the words from the text.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570 <code>approximate_song(filename)</code>\uFF0C\u5B83\u8BFB\u53D6\u6587\u4EF6\u540D\u4E3A filename \u7684\u6587\u4EF6\u4E2D\u6B4C\u66F2\u7684\u6B4C\u8BCD\uFF0C\u5E76\u8FD4\u56DE\u6B4C\u66F2\u4E2D\u6700\u5E38\u89C1\u7684\u5355\u8BCD\u3002\u5728\u5E73\u5C40\u7684\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u5B57\u6BCD\u987A\u5E8F\u6392\u5728\u524D\u9762\u7684\u5355\u8BCD\u3002\u5047\u8BBE\u5355\u8BCD\u662F\u7528\u7A7A\u683C\u5206\u9694\u7684\uFF0C\u5E76\u4F7F\u7528 <code>.split()</code> \u4ECE\u6587\u672C\u4E2D\u63D0\u53D6\u5355\u8BCD\uFF0C\u4E0D\u5220\u9664\u6807\u70B9\u7B26\u53F7\u6216\u6298\u53E0\u5927\u5C0F\u5199\u3002</p></blockquote><p>We have provided lyrics for three songs for you to test your function: somebody.txt, barbrastrelsand.txt, and fakesong.txt. Note these are not the only files we will use to test your code. You can see the contents of these files by clicking on the tabs at the top-right of the page.</p><blockquote><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u9996\u6B4C\u66F2\u7684\u6B4C\u8BCD\u4F9B\u60A8\u6D4B\u8BD5\u60A8\u7684\u529F\u80FD: <code>some.txt</code>\u3001<code>barbrastrelsand.txt</code> \u548C <code>faksong .txt</code> \u3002\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u5E76\u4E0D\u662F\u6211\u4EEC\u7528\u6765\u6D4B\u8BD5\u4EE3\u7801\u7684\u552F\u4E00\u6587\u4EF6\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5355\u51FB\u9875\u9762\u53F3\u4E0A\u89D2\u7684\u9009\u9879\u5361\u67E5\u770B\u8FD9\u4E9B\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p></blockquote><p>Outputs should be as below:</p><blockquote><p>\u4EA7\u51FA\u5E94\u5982\u4E0B:</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> approximate_song<span class="token punctuation">(</span>&#39;somebody<span class="token punctuation">.</span>txt&quot;<span class="token punctuation">)</span>
<span class="token string">&#39;that&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> approximate_song<span class="token punctuation">(</span><span class="token string">&quot;fakesong.txt&quot;</span><span class="token punctuation">)</span>
<span class="token string">&quot;dum1&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> approx<span class="token operator">-</span>imate_song<span class="token punctuation">(</span><span class="token string">&quot;arbrastre-isand.txt&quot;</span><span class="token punctuation">)</span>
<span class="token string">&quot;whooo-oo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A Dictionaries</p><p>This is very similar to the Top-5 Frequent words problem in Worksheet 11. Feel free to reuse your solution!</p><blockquote><p>\u8FD9\u4E0E\u4E60\u989811\u4E2D\u7684\u524D5\u4E2A\u7ECF\u5E38\u51FA\u73B0\u7684\u5355\u8BCD\u95EE\u9898\u975E\u5E38\u76F8\u4F3C\u3002\u8BF7\u968F\u610F\u91CD\u7528\u60A8\u7684\u89E3\u51B3\u65B9\u6848!</p></blockquote></div><div class="custom-container tip"><p class="custom-container-title">\u7FFB\u8BD1</p><p>\u5199\u4E00\u4E2A function approximate_song(filename)\uFF0C\u6765\u63D0\u53D6\u4E00\u4E2A\u6B4C\u8BCD\u6587\u4EF6\u4E2D\u51FA\u73B0\u6700\u591A\u7684\u8BCD\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u8BCD\u51FA\u73B0\u9891\u7387\u4E00\u6837\u7684\u8BDD\u5C31\u4F9D\u5B57\u6BCD\u987A\u5E8F\u53D6\u7B2C\u4E00\u4E2A</p></div><h2 id="_2-concatenate-files" tabindex="-1"><a class="header-anchor" href="#_2-concatenate-files" aria-hidden="true">#</a> 2. Concatenate Files</h2><blockquote><p>\u8FDE\u63A5\u6587\u4EF6</p></blockquote><p>Write a function concatenate_files (filename1, filename2, new_filename) that concatenates the text from two source files such that the text from the file named by argument filename2 follows the text from filename1. The concatenated text should be written to a new file with the name given by new_file name. Your function must not return anything.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570 concatenate_files(filename1, filename2, new_filename)\uFF0C\u5B83\u5C06\u6765\u81EA\u4E24\u4E2A\u6E90\u6587\u4EF6\u7684\u6587\u672C\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u8FD9\u6837\uFF0C\u7531\u53C2\u6570filename2 \u547D\u540D\u7684\u6587\u4EF6\u4E2D\u7684\u6587\u672C\u4F1A\u8DDF\u968F\u6765\u81EA filename1 \u7684\u6587\u672C\u3002\u8FDE\u63A5\u7684\u6587\u672C\u5E94\u8BE5\u88AB\u5199\u5165\u4E00\u4E2A\u540D\u4E3A new_file name \u7684\u65B0\u6587\u4EF6\u3002\u4F60\u7684\u51FD\u6570\u4E0D\u80FD\u8FD4\u56DE\u4EFB\u4F55\u4E1C\u897F\u3002</p></blockquote><p>We have provided sample input files named <a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/part1.txt">part1.txt</a> and <a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/part2.txt">part2.txt</a> containing a portion of the text from the novel <em>Alice</em> in WonderlandXo test your function.</p><blockquote><p>\u6211\u4EEC\u5728 WonderlandXo \u4E2D\u63D0\u4F9B\u4E86\u540D\u4E3A <code>part1.txt</code> \u548C <code>part2.txt</code> \u7684\u793A\u4F8B\u8F93\u5165\u6587\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u5C0F\u8BF4\u300A\u7231\u4E3D\u4E1D\u300B\u4E2D\u7684\u90E8\u5206\u6587\u672C\u3002</p></blockquote><blockquote><p>\u5199\u4E00\u4E2Afunction concatenate_files(filename1, filename2, new_filename)\uFF0C\u6765\u4E32\u63A5filename1 \u548C</p><p>filename2 \u4E24\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u4E32\u63A5\u597D\u7684\u6587\u672C\u9700\u8981\u88AB\u521B\u5EFA\u5230new_filename\u3002 \u8FD9\u4E2Afunction\u4E0D\u80FDreturn\u4EFB\u4F55</p><p>\u4E1C\u897F</p></blockquote><p><strong>Don&#39;t leave them open!</strong></p><p><strong>Remember to close your files!</strong></p><h2 id="sorting-csv-records" tabindex="-1"><a class="header-anchor" href="#sorting-csv-records" aria-hidden="true">#</a> Sorting CSV Records</h2><blockquote><p>\u6392\u5E8F CSV \u8BB0\u5F55</p></blockquote><p>Write a function sort_records(csv_filename, new_filename) that sorts the records of a CSV file and writes the results as a new CSV file. The first column of the CSV file will be the city name. The rest of the columns will be months of the year. The first row of the CSV file will take the form of the column headings, with all columns other than the first being months of the year. Here is an example file fragment:</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570 sort_records(cv_filename, new_filename)\uFF0C\u5B83\u5BF9CSV\u6587\u4EF6\u7684\u8BB0\u5F55\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u5C06\u7ED3\u679C\u5199\u5165\u4E00\u4E2A\u65B0\u7684CSV\u6587\u4EF6\u3002CSV\u6587\u4EF6\u7684\u7B2C\u4E00\u5217\u662F\u57CE\u5E02\u540D\u79F0\u3002\u5176\u4F59\u7684\u5217\u5C06\u662F\u4E00\u5E74\u4E2D\u7684\u6708\u4EFD\u3002CSV\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5C06\u91C7\u7528\u5217\u6807\u9898\u7684\u5F62\u5F0F\uFF0C\u9664\u7B2C\u4E00\u4E2A\u5217\u5916\u7684\u6240\u6709\u5217\u90FD\u662F\u4E00\u5E74\u4E2D\u7684\u6708\u4EFD\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u6587\u4EF6\u7247\u6BB5:</p></blockquote><p><strong>max_temp.csv</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>city<span class="token operator">/</span>month<span class="token punctuation">,</span> Jan<span class="token punctuation">,</span>Feb<span class="token punctuation">,</span>Mar<span class="token punctuation">,</span>Apr
Melbourne<span class="token punctuation">,</span><span class="token number">41.2</span><span class="token punctuation">,</span><span class="token number">35.5</span><span class="token punctuation">,</span><span class="token number">37.4</span><span class="token punctuation">,</span><span class="token number">29.3</span>
Brisbane<span class="token punctuation">,</span><span class="token number">31.3</span><span class="token punctuation">,</span><span class="token number">40.2</span><span class="token punctuation">,</span><span class="token number">37.9</span><span class="token punctuation">,</span><span class="token number">29</span>
Darwin<span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">33.2</span><span class="token punctuation">,</span><span class="token number">34.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that your code will be tested over different CSV files, with different ranges of months in them. Irrespective of the exact months contained in the file, you may assume that the city name will always be in the first column, and the months in the remaining columns.</p><blockquote><p>\u8BF7\u6CE8\u610F\uFF0C\u60A8\u7684\u4EE3\u7801\u5C06\u5728\u4E0D\u540C\u7684CSV\u6587\u4EF6\u4E0A\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u5176\u4E2D\u5305\u542B\u4E0D\u540C\u7684\u6708\u4EFD\u8303\u56F4\u3002\u4E0D\u7BA1\u6587\u4EF6\u4E2D\u5305\u542B\u7684\u786E\u5207\u6708\u4EFD\u662F\u591A\u5C11\uFF0C\u60A8\u90FD\u53EF\u4EE5\u5047\u5B9A\u57CE\u5E02\u540D\u79F0\u603B\u662F\u5728\u7B2C\u4E00\u5217\u4E2D\uFF0C\u800C\u6708\u4EFD\u5219\u5728\u5176\u4F59\u5217\u4E2D\u3002</p></blockquote><p>You must sort the data in alphabetical order according to the city name (stored in the first column). Your program should write the sorted records to a new file with the name given by the argument new_filename.</p><blockquote><p>\u60A8\u5FC5\u987B\u6839\u636E\u57CE\u5E02\u540D\u79F0(\u5B58\u50A8\u5728\u7B2C\u4E00\u5217\u4E2D)\u6309\u5B57\u6BCD\u987A\u5E8F\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002\u60A8\u7684\u7A0B\u5E8F\u5E94\u8BE5\u5C06\u6392\u5E8F\u7684\u8BB0\u5F55\u5199\u5165\u4E00\u4E2A\u65B0\u6587\u4EF6\uFF0C\u5176\u540D\u79F0\u7531\u53C2\u6570new_filename\u6307\u5B9A\u3002</p></blockquote>`,34),m={href:"http://program.py",target:"_blank",rel:"noopener noreferrer"},k={href:"http://program.py",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>sort_records<span class="token punctuation">(</span><span class="token string">&#39;max_temp.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sorted.csv&#39;</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;sorted.csv&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>city<span class="token operator">/</span>month<span class="token punctuation">,</span>Jan<span class="token punctuation">,</span>Feb<span class="token punctuation">,</span>Mar<span class="token punctuation">,</span>Apr
Brisbane<span class="token punctuation">,</span><span class="token number">31.3</span><span class="token punctuation">,</span><span class="token number">40.2</span><span class="token punctuation">,</span><span class="token number">37.9</span><span class="token punctuation">,</span><span class="token number">29</span>
Darwin<span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">33.2</span><span class="token punctuation">,</span><span class="token number">34.5</span>
Melbourne<span class="token punctuation">,</span><span class="token number">41.2</span><span class="token punctuation">,</span><span class="token number">35.5</span><span class="token punctuation">,</span><span class="token number">37.4</span><span class="token punctuation">,</span><span class="token number">29.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that the row for Melbourne has been sorted below the rows for Brisbane and Darwin because Melbourne comes after Brisbane and Darwin, based on alphabetical ordering.</p></blockquote><blockquote><p>\u6CE8\u610F\uFF0C\u6839\u636E\u5B57\u6BCD\u987A\u5E8F\uFF0C\u58A8\u5C14\u672C\u6392\u5728\u5E03\u91CC\u65AF\u73ED\u548C\u8FBE\u5C14\u6587\u4E4B\u540E\uFF0C\u56E0\u6B64\u58A8\u5C14\u672C\u6392\u5728\u5E03\u91CC\u65AF\u73ED\u548C\u8FBE\u5C14\u6587\u4E4B\u540E\u3002</p></blockquote><p><strong>Test File</strong></p><p>So you can test your answer, we have provided a full year of data for many Australian cities in a file called <a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp.csv">max_temp.csv</a>. The data was obtained from the Bureau of Meteorology website.</p><blockquote><p>\u4F60\u53EF\u4EE5\u6D4B\u8BD5\u4E00\u4E0B\u4F60\u7684\u7B54\u6848\uFF0C\u6211\u4EEC\u5728\u4E00\u4E2A\u540D\u4E3A <a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp.csv">max_temp.csv</a> \u7684\u6587\u4EF6\u4E2D\u63D0\u4F9B\u4E86\u8BB8\u591A\u6FB3\u5927\u5229\u4E9A\u57CE\u5E02\u5168\u5E74\u7684\u6570\u636E\u3002\u8FD9\u4E9B\u6570\u636E\u6765\u81EA\u6C14\u8C61\u5C40\u7F51\u7AD9\u3002</p></blockquote><blockquote><p>CVS\u6587\u4EF6\u7684\u4E00\u5217\u662F\u57CE\u5E02\u7684\u540D\u5B57\uFF0C\u4E00\u884C\u662F\u6708\u4EFD</p><p>\u5199\u4E00\u4E2AFunction, sort_records(csv_filename, new_filename), \u628ACVS\u6587\u4EF6\u7684\u57CE\u5E02 \u7528\u5B57\u6BCD\u987A\u5E8F\u6392\u5217\uFF0C</p><p>\u7136\u540E\u4FDD\u5B58\u5728\u4E00\u4E2A\u540D\u4E3Anew_filename\u7684\u65B0\u6587\u4EF6</p></blockquote><h2 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A\uFF1A</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> csv
data_2d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
csv_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;2d-data.csv&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span>    
writer <span class="token operator">=</span> csv<span class="token punctuation">.</span>writer<span class="token punctuation">(</span>csv_file<span class="token punctuation">)</span>
writer<span class="token punctuation">.</span>writerows<span class="token punctuation">(</span>data_2d<span class="token punctuation">)</span>
csv_file<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

csv_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;2d-data.csv&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>csv_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
csv_file<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hottest-month" tabindex="-1"><a class="header-anchor" href="#hottest-month" aria-hidden="true">#</a> Hottest Month</h2><blockquote><p>\u6700\u70ED\u7684\u6708\u4EFD</p></blockquote><p>Write a function max_city_temp(csv_filename, city) which analyses temperatures recorded in a CSV file, and returns the maximum temperature recorded for the named city.</p><blockquote><p>\u7F16\u5199\u51FD\u6570 max_city_temp(csv_filename, city)\uFF0C\u5B83\u5206\u6790CSV\u6587\u4EF6\u4E2D\u8BB0\u5F55\u7684\u6E29\u5EA6\uFF0C\u5E76\u8FD4\u56DE\u6307\u5B9A\u57CE\u5E02\u8BB0\u5F55\u7684\u6700\u9AD8\u6E29\u5EA6\u3002</p></blockquote><p>Once again, the first column of the CSV file will be the city name, and the rest of the columns will be months of the year. The first row of the CSV file will provide the column headings. Here is an example file fragment:</p><blockquote><p>\u540C\u6837\uFF0CCSV \u6587\u4EF6\u7684\u7B2C\u4E00\u5217\u5C06\u662F\u57CE\u5E02\u540D\uFF0C\u5176\u4F59\u5217\u5C06\u662F\u4E00\u5E74\u4E2D\u7684\u6708\u4EFD\u3002CSV \u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5C06\u63D0\u4F9B\u5217\u6807\u9898\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u6587\u4EF6\u7247\u6BB5:</p></blockquote><p><strong>max_temp_small.csv</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>city<span class="token operator">/</span>month<span class="token punctuation">,</span>Jan<span class="token punctuation">,</span>Feb<span class="token punctuation">,</span>Mar Apr
Melbourne<span class="token punctuation">,</span><span class="token number">41.2</span><span class="token punctuation">,</span><span class="token number">35.5</span><span class="token punctuation">,</span><span class="token number">37.4</span><span class="token punctuation">,</span><span class="token number">29.3</span>
Brisbane<span class="token punctuation">,</span><span class="token number">31.3</span><span class="token punctuation">,</span><span class="token number">40.2</span><span class="token punctuation">,</span><span class="token number">37.9</span><span class="token punctuation">,</span><span class="token number">29</span>
Darwin<span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">33.2</span><span class="token punctuation">,</span><span class="token number">34.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example of how max_city_temp() should work:</p><blockquote><p>\u4E0B\u9762\u662F\u4E00\u4E2Amax_city_temp()\u5E94\u8BE5\u5982\u4F55\u5DE5\u4F5C\u7684\u4F8B\u5B50:</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>max_city_temp<span class="token punctuation">(</span><span class="token string">&#39;max_temp_small.csv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Brisbane&#39;</span><span class="token punctuation">)</span>
<span class="token number">40.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test File</strong></p>`,22),b={href:"http://www.bom",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"ov.au/climate/avera"},"ov.au/climate/avera",-1),v={href:"http://www.bom",target:"_blank",rel:"noopener noreferrer"},g=n("a",{href:"ov.au/climate/avera"},"ov.au/climate/avera",-1),_=t(`<blockquote><p>CVS\u6587\u4EF6\u7684\u4E00\u5217\u662F\u57CE\u5E02\u7684\u540D\u5B57\uFF0C\u4E00\u884C\u662F\u6708\u4EFD\uFF0C\u6708\u4EFD\u4E0B\u9762\u7684\u662F\u5F53\u6708\u6E29\u5EA6,\u5199\u4E00\u4E2Afunction\uFF0C\uFF0C\u6765\u627E\u51FA\u6240\u9009\u57CE\u5E02\u7684\u6700\u9AD8\u6E29\u5EA6</p></blockquote><h2 id="hottest-city" tabindex="-1"><a class="header-anchor" href="#hottest-city" aria-hidden="true">#</a> Hottest City</h2><blockquote><p>\u6700\u70ED\u7684\u57CE\u5E02</p></blockquote><p>Write a function hottest_city(csv_filename) that analyses the temperatures recorded in a CSV file, and returns a 2-tuple made up of the maximum temperature in the whole dataset, along with a sorted list of the names of cities where that temperature was recorded.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570hottest_city(csv_filename)\uFF0C\u5B83\u5206\u6790CSV\u6587\u4EF6\u4E2D\u8BB0\u5F55\u7684\u6E29\u5EA6\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u7531\u6574\u4E2A\u6570\u636E\u96C6\u4E2D\u7684\u6700\u9AD8\u6E29\u5EA6\u7EC4\u6210\u7684\u4E8C\u5143\u7EC4\uFF0C\u4EE5\u53CA\u8BB0\u5F55\u8BE5\u6E29\u5EA6\u7684\u57CE\u5E02\u540D\u79F0\u7684\u6392\u5E8F\u5217\u8868\u3002<strong>\u8981\u8003\u8651\u76F8\u540C\u6700\u9AD8\u6E29\u5EA6\u65F6\u7684\u57CE\u5E02\u3002</strong></p></blockquote><p>The first column of the CSV file will contain the city name. The rest of the columns will be months of the year. The first row of the CSV files will provide column headings. Here is an example file (with an incomplete set of months):</p><blockquote><p>CSV\u6587\u4EF6\u7684\u7B2C\u4E00\u5217\u5C06\u5305\u542B\u57CE\u5E02\u540D\u79F0\u3002\u5176\u4F59\u7684\u5217\u5C06\u662F\u4E00\u5E74\u4E2D\u7684\u6708\u4EFD\u3002CSV\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5C06\u63D0\u4F9B\u5217\u6807\u9898\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u6587\u4EF6(\u6709\u4E00\u4E2A\u4E0D\u5B8C\u6574\u7684\u6708\u4EFD\u96C6):</p></blockquote><p><a href="/1v1/07-AJuN/01-W14-Worksheet-14-File-IO-and-CSV-Files/max_temp_tiny.csv">max_temp_tiny.csv</a></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>city<span class="token operator">/</span>month<span class="token punctuation">,</span>Jan<span class="token punctuation">,</span>Feb<span class="token punctuation">,</span>Mar<span class="token punctuation">,</span>Apr
Melbourne<span class="token punctuation">,</span><span class="token number">41.2</span><span class="token punctuation">,</span><span class="token number">35.5</span><span class="token punctuation">,</span><span class="token number">37.4</span><span class="token punctuation">,</span><span class="token number">29.3</span>
Brisbane<span class="token punctuation">,</span><span class="token number">31.3</span><span class="token punctuation">,</span><span class="token number">40.2</span><span class="token punctuation">,</span><span class="token number">37.9</span><span class="token punctuation">,</span><span class="token number">29</span>
Darwin<span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">33.2</span><span class="token punctuation">,</span><span class="token number">34.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example of how hottest_city() should work:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hottest_city<span class="token punctuation">(</span><span class="token string">&#39;max_temp_tiny.csv&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">41.2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Melbourne&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test File</strong></p>`,12),y={href:"http://www.bom",target:"_blank",rel:"noopener noreferrer"},w=n("a",{href:"ov.au/climate/avera"},"ov.au/climate/avera",-1),x={href:"http://www.bom",target:"_blank",rel:"noopener noreferrer"},q=n("a",{href:"ov.au/climate/avera"},"ov.au/climate/avera",-1),C=t(`<blockquote><p>CVS\u6587\u4EF6\u7684\u4E00\u5217\u662F\u57CE\u5E02\u7684\u540D\u5B57\uFF0C\u4E00\u884C\u662F\u6708\u4EFD\uFF0C\u6708\u4EFD\u4E0B\u9762\u7684\u662F\u5F53\u6708\u6E29\u5EA6\u5199\u4E00\u4E2Afunction\uFF0C hottest_city(csv_filename)\uFF0C\u6765\u627E\u51FA\u6587\u4EF6\u4E2D\u6700\u70ED\u7684\u4E00\u4E2A\u6E29\u5EA6\u548C\u6240\u5728\u57CE\u5E02\uFF0C\u7528\u4E00\u4E2A tuple \u6765\u8868\u793A\uFF0C\u57CE\u5E02\u7684\u540D\u5B57\u7528 list \u8868\u793A</p></blockquote><p><strong>\u8981\u8003\u8651\u76F8\u540C\u6700\u9AD8\u6E29\u5EA6\u65F6\u7684\u57CE\u5E02\u3002</strong></p><h2 id="disentangling-list-comprehensions" tabindex="-1"><a class="header-anchor" href="#disentangling-list-comprehensions" aria-hidden="true">#</a> Disentangling list comprehensions</h2><blockquote><p>\u7406\u6E05\u5217\u8868\u7406\u89E3</p></blockquote><p>List comprehensions can be baffling verging on incomprehensible at first (joke!), so let&#39;s get some experience pulling a list comprehension apart into code that you are more familiar with. Given the following mystery function, write an equivalent function aha(minval, maxval) with the exact same functionality but which doesn&#39;t make use of list comprehensions.</p><blockquote><p>\u5217\u8868\u63A8\u5BFC\u5F0F\u4E00\u5F00\u59CB\u53EF\u80FD\u4EE4\u4EBA\u56F0\u60D1\uFF0C\u51E0\u4E4E\u65E0\u6CD5\u7406\u89E3(\u5F00\u73A9\u7B11!)\uFF0C\u6240\u4EE5\u8BA9\u6211\u4EEC\u83B7\u5F97\u4E00\u4E9B\u5C06\u5217\u8868\u63A8\u5BFC\u5F0F\u5206\u89E3\u4E3A\u60A8\u66F4\u719F\u6089\u7684\u4EE3\u7801\u7684\u7ECF\u9A8C\u3002\u7ED9\u5B9A\u4E0B\u9762\u7684\u795E\u79D8\u51FD\u6570\uFF0C\u7528\u5B8C\u5168\u76F8\u540C\u7684\u529F\u80FD\u7F16\u5199\u4E00\u4E2A\u7B49\u4EF7\u7684\u51FD\u6570 aha(minval, maxval)\uFF0C\u4F46\u4E0D\u4F7F\u7528\u5217\u8868\u63A8\u5BFC\u5F0F\u3002</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">mystery</span><span class="token punctuation">(</span>minval<span class="token punctuation">,</span> maxval<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token operator">%</span> <span class="token number">10</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>minval<span class="token punctuation">,</span> maxval <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>For example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> aha<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> aha<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+o+'" alt="" loading="lazy"></p></details>',11),S={class:"custom-container info"},V=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),F=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),W=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),A={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},I=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),T=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function J(M,N){const a=r("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("Here is an example of how sort_records() should work. '"),n("a",m,[s("program.py"),e(a)]),s("' is the program and below is its terminal output.")]),n("blockquote",null,[n("p",null,[s("\u4E0B\u9762\u662F\u4E00\u4E2A sort_records() \u5E94\u8BE5\u5982\u4F55\u5DE5\u4F5C\u7684\u4F8B\u5B50\u3002'"),n("a",k,[s("program.py"),e(a)]),s("'\u662F\u7A0B\u5E8F\uFF0C\u4E0B\u9762\u662F\u5B83\u7684\u7EC8\u7AEF\u8F93\u51FA\u3002")])]),h,n("p",null,[s("So you can test your code, we have provided a full year of data for many Australian cities in a file called max_temp.csv. The data was obtained from the Bureau of Meteorology website (http:\u3003"),n("a",b,[s("www.bom"),e(a)]),s(".q"),f,s("qes/).")]),n("blockquote",null,[n("p",null,[s('\u56E0\u6B64\u60A8\u53EF\u4EE5\u6D4B\u8BD5\u60A8\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u5728\u4E00\u4E2A\u540D\u4E3A max_temp.csv \u7684\u6587\u4EF6\u4E2D\u63D0\u4F9B\u4E86\u8BB8\u591A\u6FB3\u5927\u5229\u4E9A\u57CE\u5E02\u5168\u5E74\u7684\u6570\u636E\u3002\u6570\u636E\u6765\u81EA\u6C14\u8C61\u5C40\u7F51\u7AD9(http: " '),n("a",v,[s("www.bom"),e(a)]),s(".q"),g,s("qes/)\u3002")])]),_,n("p",null,[s("So you can test your answer; we have provided a full year of data for many Australian cities in a file called max_temp.csv. The data was obtained from the Bureau of Meteorology website (http:\u3003"),n("a",y,[s("www.bom"),e(a)]),s(".g"),w,s("gvs/).")]),n("blockquote",null,[n("p",null,[s('\u6240\u4EE5\u4F60\u53EF\u4EE5\u6D4B\u8BD5\u4F60\u7684\u7B54\u6848;\u6211\u4EEC\u5728\u4E00\u4E2A\u540D\u4E3Amax_temp.csv\u7684\u6587\u4EF6\u4E2D\u63D0\u4F9B\u4E86\u8BB8\u591A\u6FB3\u5927\u5229\u4E9A\u57CE\u5E02\u5168\u5E74\u7684\u6570\u636E\u3002\u6570\u636E\u6765\u81EA\u6C14\u8C61\u5C40\u7F51\u7AD9(http: " '),n("a",x,[s("www.bom"),e(a)]),s(".g"),q,s("gvs/)\u3002")])]),C,n("div",S,[V,F,W,n("p",null,[s("\u65B9\u6CD5\u4E00\uFF1A"),n("a",A,[s("QQ"),e(a)])]),I]),T])}const L=c(u,[["render",J],["__file","01-File-IO-and-CSV-Files.html.vue"]]);export{L as default};
