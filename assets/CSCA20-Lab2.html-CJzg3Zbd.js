import{_ as n}from"./gzh-DnOBNg6W.js";import{_ as e}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as o,o as t}from"./app-YAtctw5y.js";const p={};function i(r,s){return t(),l("div",null,s[0]||(s[0]=[o(`<div style="text-align:center;"><h2 id="csca20-lab-2" tabindex="-1"><a class="header-anchor" href="#csca20-lab-2"><span>CSCA20 - Lab 2</span></a></h2><h4 id="data-types-strings" tabindex="-1"><a class="header-anchor" href="#data-types-strings"><span>Data Types &amp; Strings</span></a></h4></div><h2 id="_1-learning-objectives" tabindex="-1"><a class="header-anchor" href="#_1-learning-objectives"><span>1. Learning Objectives</span></a></h2><p>In this lab, we’re working with converting between data types, working with built-in string meth-ods, and learning how to find new information in the Python Docs.</p><h2 id="_2-quiz" tabindex="-1"><a class="header-anchor" href="#_2-quiz"><span>2. Quiz</span></a></h2><p>This week will be our first one with a quiz. Your tutorial will start with a review of the lab 1 material. So make sure you arrive on-time, log into the lab computers and load up your lab 1 solution. Your TAs will then ask you to make a small modification to your solution to prove that you truly understood the material from the lab.</p><p>A few things to note:</p><ul><li>The modification will be something small and simple enough that if you understood and completed the lab on your own, you’ll be fine.</li><li>You will only have 10 minutes to make the modification, so ensure that you’ve arrived on time, and are ready to go, and also that you’re familiar enough with your own solution that you don’t need to spend the 10 minutes re-reading the handout.</li></ul><p>This is the way the quizzes will work for future tutorials. If you can’t complete the quiz, don’t worry, you will get plenty more opportunities to demonstrate your skills in later quizzes, just make sure you’re really understanding your own solutions moving forward.</p><h2 id="_3-demonstration-evaluation" tabindex="-1"><a class="header-anchor" href="#_3-demonstration-evaluation"><span>3. Demonstration &amp; Evaluation</span></a></h2><p>Successfully completing this lab and the accompanying quiz (next week) will demonstrate the skills of user input/output, and variables. Note that if you have already demonstrated input/output in Lab 1, you don’t need to demonstrate that specific skill again, but as we mentioned last week, some of the fundamentals will have many chances for demonstration.</p><h2 id="_4-prelab" tabindex="-1"><a class="header-anchor" href="#_4-prelab"><span>4. Prelab</span></a></h2><p>You can now get basic input from and send output to the user, so let’s make sure we’re ready to start playing with strings. For the start of your lab, you should show up with code that can ask the user for a word and a number, and will then print True if the word has more characters than the number. e.g.;</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">Type a word: hi</span></span>
<span class="line"><span style="color:#F8F8F2;">How many letters</span><span style="color:#F44747;">?</span><span style="color:#AE81FF;"> 7</span></span>
<span class="line"><span style="color:#AE81FF;">False</span></span>
<span class="line"><span style="color:#F8F8F2;">Type a word: supercalifragilisticexpialidocious</span></span>
<span class="line"><span style="color:#F8F8F2;">How many letters</span><span style="color:#F44747;">?</span><span style="color:#AE81FF;"> 7</span></span>
<span class="line"><span style="color:#AE81FF;">True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Are you confused that you don’t know how to make something print True or False based on the value of variables?</p><p>Good thing we know how to look up this sort of thing in the python docs. (Hint: 6.10. Compar-isons)</p><h2 id="_5-the-scenario" tabindex="-1"><a class="header-anchor" href="#_5-the-scenario"><span>5. The Scenario</span></a></h2><p>The Unbelievably Trained Security Council (UTSC) wants you to build them a program to help their password crackers learn how to... well.. crack passwords. The program will allow the trainer to input a password, and then the trainee will go through 3 rounds of attempts to crack the password.</p><h2 id="_6-round-1" tabindex="-1"><a class="header-anchor" href="#_6-round-1"><span>6. Round 1</span></a></h2><p>After the trainer has entered the password, the trainee will be allowed to guess 5 letters. For each letter, the system will print True if that letter is in the password, or False if it isn’t.</p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="python" data-title="python" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">#prompt the trainer for the passcode</span></span>
<span class="line"><span style="color:#F8F8F2;">passcode </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Trainer: enter 5 letter passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">#print a bunch of empty lines so that the entered passcode scrolls off the screen</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\</span></span>
<span class="line"><span style="color:#E6DB74;">n</span><span style="color:#AE81FF;">\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">####ROUND 1#####</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Round 1: Guess 5 letters to see if they&#39;re in the passcode &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;">#do this 5 times... later when we learn about loops, we can come back and make</span></span>
<span class="line"><span style="color:#88846F;">#this a lot simpler</span></span>
<span class="line"><span style="color:#F8F8F2;">guess_1 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #1: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess_1 </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess_2 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #2: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess_2 </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess_3 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #3: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess_3 </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess_4 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #4: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess_4 </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess_5 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #5: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess_5 </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> passcode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_7-round-2" tabindex="-1"><a class="header-anchor" href="#_7-round-2"><span>7. Round 2</span></a></h2><p>Now that the trainee knows (hopefully) the letters in the password, they will be prompted to enter the letters and their predicted positions (e.g., I think ’X’ is in position 3), and will be told True if the letter is in that position, and False otherwise. The trainee will get 5 chances to guess in this round.</p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="python" data-title="python" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">#####ROUND 2#####</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Round 2: Guess 5 letter/position combinations to see if you have them correct&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">letter_guess_1 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #1: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_1 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #1: position to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_1 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> int</span><span style="color:#F8F8F2;">(position_guess_1)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(passcode[position_guess_1] </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> letter_guess_1)</span></span>
<span class="line"><span style="color:#F8F8F2;">letter_guess_2 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #2: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_2 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #2: position to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_2 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> int</span><span style="color:#F8F8F2;">(position_guess_1)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(passcode[position_guess_2] </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> letter_guess_2)</span></span>
<span class="line"><span style="color:#F8F8F2;">letter_guess_3 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #3: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_3 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #3: position to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_3 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> int</span><span style="color:#F8F8F2;">(position_guess_3)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(passcode[position_guess_3] </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> letter_guess_3)</span></span>
<span class="line"><span style="color:#F8F8F2;">letter_guess_4 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #4: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_4 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #4: position to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_4 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> int</span><span style="color:#F8F8F2;">(position_guess_4)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(passcode[position_guess_4] </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> letter_guess_4)</span></span>
<span class="line"><span style="color:#F8F8F2;">letter_guess_5 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #5: letter to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_5 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #5: position to check: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">position_guess_5 </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> int</span><span style="color:#F8F8F2;">(position_guess_5)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(passcode[position_guess_5] </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> letter_guess_5)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_8-round-3" tabindex="-1"><a class="header-anchor" href="#_8-round-3"><span>8. Round 3</span></a></h2><p>At this point, the trainee has 5 chances to input the whole password. If the guessed password is correct, the system will print True. If a guess is incorrect, the program will print False (note: even if the trainee guesses correctly on the first try, the system will still prompt for all five attempts).</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">#####ROUND 3#####</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Round 3: Guess the whole word, and I&#39;ll tell you if it&#39;s correct&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #1: guess the passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #2: guess the passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #3: guess the passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #4: guess the passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> passcode)</span></span>
<span class="line"><span style="color:#F8F8F2;">guess </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Guess #5: guess the passcode: &quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(guess </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> passcode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-starter-code" tabindex="-1"><a class="header-anchor" href="#_9-starter-code"><span>9. Starter Code</span></a></h2><p><code>lab2_starter.py</code> has been uploaded to Quercus. You should start by reading through it, and running it to make sure you understand how and why it prints the True and False values that it does. If you don’t understand something, ask your TA for help. Once you understand what the starter code is doing, your job is to modify it so that it prints True and False correctly based on the input of the users.</p><h2 id="_10-hints" tabindex="-1"><a class="header-anchor" href="#_10-hints"><span>10. Hints</span></a></h2><p>Here are a few hints that might help you with this assignment:</p><ul><li>Your code only needs to print out True or False, later on, when we learn about loops and selection, we can do fancy things like keeping track of the number of correct guesses, or giving them feedback on how they’re doing.</li><li>You can assume that the trainee understands enough about computer science that they will know that computer scientists start counting at 0 (or you can try to change it so they don’t have to, it’s up to you)</li><li>You will need to store the passcode and the trainee’s guesses. But do you really need 5 separate variables for each guess of the trainee? If you won’t need a value anymore, you don’t need to store it and can re-use the variable to point to a new value.</li><li>We haven’t covered all the features of strings you need in order to complete this lab in lectures. But we HAVE covered where you should go to find out the features of strings.</li></ul><h2 id="_11-extra-practice" tabindex="-1"><a class="header-anchor" href="#_11-extra-practice"><span>11. Extra Practice</span></a></h2><p>If you get this working and want to move beyond the basics, there are several things you can do:</p><ul><li>Not all passwords are case-sensitive. Try to make a version of the program where it doesn’t matter if the trainer/trainee uses upper or lower case letters.</li><li>(once you’ve learned loops) improve this code so that each input/print statement is only in the code once for each round.</li><li>(once you’ve learned selection) improve this code so that it keeps track of the number of correct guesses and gives better feedback than just True or False</li><li>(once you’ve learned loops &amp; selection) make a better version of this program that actually shows the user the parts of the password they’ve figured out already. e.g., if they’ve guessed the positions of A and L and the password is APPLE, prompt them with A_L_</li></ul><h2 id="_13-知识点" tabindex="-1"><a class="header-anchor" href="#_13-知识点"><span>13. 知识点</span></a></h2><h3 id="_13-1-思路" tabindex="-1"><a class="header-anchor" href="#_13-1-思路"><span>13.1 思路</span></a></h3><p>题目要输入，那么咱们就按输入的思路来实现。</p><h3 id="_13-2-语法1-判断一个值是否存在字符串" tabindex="-1"><a class="header-anchor" href="#_13-2-语法1-判断一个值是否存在字符串"><span>13.2 语法1：判断一个值是否存在字符串</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">Value </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> Squence</span></span>
<span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]: </span><span style="color:#E6DB74;">&#39;1&#39;</span><span style="color:#F92672;"> in</span><span style="color:#E6DB74;"> &#39;aiyuechuang12345678&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">]: </span><span style="color:#E6DB74;">&#39;213&#39;</span><span style="color:#F92672;"> in</span><span style="color:#E6DB74;"> &#39;aiyuechuang12345678&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">]: </span><span style="color:#E6DB74;">&#39;1234&#39;</span><span style="color:#F92672;"> in</span><span style="color:#E6DB74;"> &#39;aiyuechuang12345678&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-3-语法2-判断是否相等" tabindex="-1"><a class="header-anchor" href="#_13-3-语法2-判断是否相等"><span>13.3 语法2: 判断是否相等</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> ==</span><span style="color:#AE81FF;"> 3</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> ==</span><span style="color:#E6DB74;"> &#39;11&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">6</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">In [</span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">]: </span><span style="color:#E6DB74;">&#39;1&#39;</span><span style="color:#F92672;"> ==</span><span style="color:#E6DB74;"> &#39;1&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">Out[</span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">]: </span><span style="color:#AE81FF;">True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-4-语法3-input" tabindex="-1"><a class="header-anchor" href="#_13-4-语法3-input"><span>13.4 语法3: input</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>input 得到的永远都是字符串类型，如需使用需要慎重思考所需要的数据类型！</p></div><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',46)]))}const y=a(p,[["render",i],["__file","CSCA20-Lab2.html.vue"]]),h=JSON.parse('{"path":"/1v1/96-Four-dimensional/CSCA20-Lab2.html","title":"CSCA20 - Lab 2","lang":"zh-CN","frontmatter":{"title":"CSCA20 - Lab 2","date":"2024-11-20T19:21:19.000Z","author":"AI悦创","isOriginal":true,"icon":"blog","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"watermark":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"1. Learning Objectives","slug":"_1-learning-objectives","link":"#_1-learning-objectives","children":[]},{"level":2,"title":"2. Quiz","slug":"_2-quiz","link":"#_2-quiz","children":[]},{"level":2,"title":"3. Demonstration & Evaluation","slug":"_3-demonstration-evaluation","link":"#_3-demonstration-evaluation","children":[]},{"level":2,"title":"4. Prelab","slug":"_4-prelab","link":"#_4-prelab","children":[]},{"level":2,"title":"5. The Scenario","slug":"_5-the-scenario","link":"#_5-the-scenario","children":[]},{"level":2,"title":"6. Round 1","slug":"_6-round-1","link":"#_6-round-1","children":[]},{"level":2,"title":"7. Round 2","slug":"_7-round-2","link":"#_7-round-2","children":[]},{"level":2,"title":"8. Round 3","slug":"_8-round-3","link":"#_8-round-3","children":[]},{"level":2,"title":"9. Starter Code","slug":"_9-starter-code","link":"#_9-starter-code","children":[]},{"level":2,"title":"10. Hints","slug":"_10-hints","link":"#_10-hints","children":[]},{"level":2,"title":"11. Extra Practice","slug":"_11-extra-practice","link":"#_11-extra-practice","children":[]},{"level":2,"title":"13. 知识点","slug":"_13-知识点","link":"#_13-知识点","children":[{"level":3,"title":"13.1 思路","slug":"_13-1-思路","link":"#_13-1-思路","children":[]},{"level":3,"title":"13.2 语法1：判断一个值是否存在字符串","slug":"_13-2-语法1-判断一个值是否存在字符串","link":"#_13-2-语法1-判断一个值是否存在字符串","children":[]},{"level":3,"title":"13.3 语法2: 判断是否相等","slug":"_13-3-语法2-判断是否相等","link":"#_13-3-语法2-判断是否相等","children":[]},{"level":3,"title":"13.4 语法3: input","slug":"_13-4-语法3-input","link":"#_13-4-语法3-input","children":[]}]}],"git":{"createdTime":1732103173000,"updatedTime":1732116203000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":4}]},"readingTime":{"minutes":5.93,"words":1778},"filePathRelative":"1v1/96-Four-dimensional/CSCA20-Lab2.md","localizedDate":"2024年11月20日","copyright":{"author":"AI悦创"}}');export{y as comp,h as data};
