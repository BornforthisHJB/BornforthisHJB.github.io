webpackJsonp([1],{"+BTi":function(t,n){},"0P22":function(t,n){},Gaf7:function(t,n){},I4nB:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("I4nB"),e("+BTi");var l=e("STLj"),r=e.n(l),i=(e("cDSy"),e("e0Bm")),u=e.n(i),c=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var p=e("VU/8")({name:"App"},o,!1,function(t){e("Gaf7")},null,null).exports,s=e("/ocq"),a=e("mvHQ"),d=e.n(a),g=e("//Fk"),f=e.n(g),h=(e("x1cr"),e("Nyks"),e("xjBu"),e("mKw/"),e("Szhv"),e("oS5H"),[{name:"时间生成",code:"import time  # 引入time模块\nprint(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))       # 打印按指定格式排版的时间\n"},{name:"冰墩墩",code:'import turtle\n\nturtle.speed(1000)  # 速度\n\n# 左手\nturtle.penup()\nturtle.goto(177, 112)\nturtle.pencolor("lightgray")\nturtle.pensize(3)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(80)\nturtle.circle(-45, 200)\nturtle.circle(-300, 23)\nturtle.end_fill()\n\n# 左手内\nturtle.penup()\nturtle.goto(182, 95)\nturtle.pencolor("black")\nturtle.pensize(1)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.setheading(95)\nturtle.pendown()\nturtle.circle(-37, 160)\nturtle.circle(-20, 50)\nturtle.circle(-200, 30)\nturtle.end_fill()\n# 轮廓\n# 头顶\nturtle.penup()\nturtle.goto(-73, 230)\nturtle.pencolor("lightgray")\nturtle.pensize(3)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(20)\nturtle.circle(-250, 35)\n# 左耳\nturtle.setheading(50)\nturtle.circle(-42, 180)\n# 左侧\nturtle.setheading(-50)\nturtle.circle(-190, 30)\nturtle.circle(-320, 45)\n# 左腿\nturtle.circle(120, 30)\nturtle.circle(200, 12)\nturtle.circle(-18, 85)\nturtle.circle(-180, 23)\nturtle.circle(-20, 110)\nturtle.circle(15, 115)\nturtle.circle(100, 12)\n# 右腿\nturtle.circle(15, 120)\nturtle.circle(-15, 110)\nturtle.circle(-150, 30)\nturtle.circle(-15, 70)\nturtle.circle(-150, 10)\nturtle.circle(200, 35)\nturtle.circle(-150, 20)\n# 右手\nturtle.setheading(-120)\nturtle.circle(50, 30)\nturtle.circle(-35, 200)\nturtle.circle(-300, 23)\n# 右侧\nturtle.setheading(86)\nturtle.circle(-300, 26)\n# 右耳\nturtle.setheading(122)\nturtle.circle(-53, 160)\nturtle.end_fill()\n\n# 右耳内\nturtle.penup()\nturtle.goto(-130, 180)\nturtle.pencolor("black")\nturtle.pensize(1)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(120)\nturtle.circle(-28, 160)\nturtle.setheading(210)\nturtle.circle(150, 20)\nturtle.end_fill()\n\n# 左耳内\nturtle.penup()\nturtle.goto(90, 230)\nturtle.setheading(40)\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(-30, 170)\nturtle.setheading(125)\nturtle.circle(150, 23)\nturtle.end_fill()\n\n# 右手内\nturtle.penup()\nturtle.goto(-180, -55)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.setheading(-120)\nturtle.pendown()\nturtle.circle(50, 30)\nturtle.circle(-27, 200)\nturtle.circle(-300, 20)\nturtle.setheading(-90)\nturtle.circle(300, 14)\nturtle.end_fill()\n\n# 左腿内\nturtle.penup()\nturtle.goto(108, -168)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-115)\nturtle.circle(110, 15)\nturtle.circle(200, 10)\nturtle.circle(-18, 80)\nturtle.circle(-180, 13)\nturtle.circle(-20, 90)\nturtle.circle(15, 60)\nturtle.setheading(42)\nturtle.circle(-200, 29)\nturtle.end_fill()\n# 右腿内\nturtle.penup()\nturtle.goto(-38, -210)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-155)\nturtle.circle(15, 100)\nturtle.circle(-10, 110)\nturtle.circle(-100, 30)\nturtle.circle(-15, 65)\nturtle.circle(-100, 10)\nturtle.circle(200, 15)\nturtle.setheading(-14)\nturtle.circle(-200, 27)\nturtle.end_fill()\n\n# 右眼\n# 眼圈\nturtle.penup()\nturtle.goto(-64, 120)\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(40)\nturtle.circle(-35, 152)\nturtle.circle(-100, 50)\nturtle.circle(-35, 130)\nturtle.circle(-100, 50)\nturtle.end_fill()\n# 眼珠\nturtle.penup()\nturtle.goto(-47, 55)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(25, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(-45, 62)\nturtle.pencolor("darkslategray")\nturtle.fillcolor("darkslategray")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(19, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(-45, 68)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(10, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(-47, 86)\nturtle.pencolor("white")\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(5, 360)\nturtle.end_fill()\n\n# 左眼\n# 眼圈\nturtle.penup()\nturtle.goto(51, 82)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(120)\nturtle.circle(-32, 152)\nturtle.circle(-100, 55)\nturtle.circle(-25, 120)\nturtle.circle(-120, 45)\nturtle.end_fill()\n# 眼珠\nturtle.penup()\nturtle.goto(79, 60)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(24, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(79, 64)\nturtle.pencolor("darkslategray")\nturtle.fillcolor("darkslategray")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(19, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(79, 70)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(10, 360)\nturtle.end_fill()\nturtle.penup()\nturtle.goto(79, 88)\nturtle.pencolor("white")\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(0)\nturtle.circle(5, 360)\nturtle.end_fill()\n\n# 鼻子\nturtle.penup()\nturtle.goto(37, 80)\nturtle.fillcolor("black")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(-8, 130)\nturtle.circle(-22, 100)\nturtle.circle(-8, 130)\nturtle.end_fill()\n\n# 嘴\nturtle.penup()\nturtle.goto(-15, 48)\nturtle.setheading(-36)\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(60, 70)\nturtle.setheading(-132)\nturtle.circle(-45, 100)\nturtle.end_fill()\n\n# 彩虹圈\nturtle.penup()\nturtle.goto(-135, 120)\nturtle.pensize(5)\nturtle.pencolor("cyan")\nturtle.pendown()\nturtle.setheading(60)\nturtle.circle(-165, 150)\nturtle.circle(-130, 78)\nturtle.circle(-250, 30)\nturtle.circle(-138, 105)\nturtle.penup()\nturtle.goto(-131, 116)\nturtle.pencolor("slateblue")\nturtle.pendown()\nturtle.setheading(60)\nturtle.circle(-160, 144)\nturtle.circle(-120, 78)\nturtle.circle(-242, 30)\nturtle.circle(-135, 105)\nturtle.penup()\nturtle.goto(-127, 112)\nturtle.pencolor("orangered")\nturtle.pendown()\nturtle.setheading(60)\nturtle.circle(-155, 136)\nturtle.circle(-116, 86)\nturtle.circle(-220, 30)\nturtle.circle(-134, 103)\nturtle.penup()\nturtle.goto(-123, 108)\nturtle.pencolor("gold")\nturtle.pendown()\nturtle.setheading(60)\nturtle.circle(-150, 136)\nturtle.circle(-104, 86)\nturtle.circle(-220, 30)\nturtle.circle(-126, 102)\nturtle.penup()\nturtle.goto(-120, 104)\nturtle.pencolor("greenyellow")\nturtle.pendown()\nturtle.setheading(60)\nturtle.circle(-145, 136)\nturtle.circle(-90, 83)\nturtle.circle(-220, 30)\nturtle.circle(-120, 100)\nturtle.penup()\n\n# 爱心\nturtle.penup()\nturtle.goto(220, 115)\nturtle.pencolor("brown")\nturtle.pensize(1)\nturtle.fillcolor("brown")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(36)\nturtle.circle(-8, 180)\nturtle.circle(-60, 24)\nturtle.setheading(110)\nturtle.circle(-60, 24)\nturtle.circle(-8, 180)\nturtle.end_fill()\n\n# 五环\nturtle.penup()\nturtle.goto(-5, -170)\nturtle.pendown()\nturtle.pencolor("blue")\nturtle.circle(6)\nturtle.penup()\nturtle.goto(10, -170)\nturtle.pendown()\nturtle.pencolor("black")\nturtle.circle(6)\nturtle.penup()\nturtle.goto(25, -170)\nturtle.pendown()\nturtle.pencolor("brown")\nturtle.circle(6)\nturtle.penup()\nturtle.goto(2, -175)\nturtle.pendown()\nturtle.pencolor("lightgoldenrod")\nturtle.circle(6)\nturtle.penup()\nturtle.goto(16, -175)\nturtle.pendown()\nturtle.pencolor("green")\nturtle.circle(6)\nturtle.penup()\n\nturtle.pencolor("black")\nturtle.goto(-16, -160)\nturtle.write("BEIJING 2022", font=(\'Arial\', 10, \'bold italic\'))\nturtle.hideturtle()\n\nturtle.done()'},{name:"大白",code:"import turtle as t\npen = t.Turtle()  # 定义画笔实例\npen.speed(0)\npen.pensize(5)\npen.pu()\npen.right(90)# 头部\npen.goto(-100,200)\npen.pd()\na = 1\nfor i in range(120):\n    if 0 <= i < 30 or 60 <= i < 90:\n        a = a + 0.2\n        pen.lt(3)  # 向左转3度\n        pen.fd(a)  # 向前走a的步长\n    else:\n        a = a - 0.2\n        pen.lt(3)\n        pen.fd(a)\npen.pu()\npen.goto(-50,200)\npen.dot(20)\npen.goto(35,200)\npen.dot(20)\npen.right(90)\npen.pd()\n# 身体\npen.pensize(5)\npen.fd(85)\npen.pu()\npen.goto(-70,150)\npen.pd()\npen.left(30)\npen.circle(200,90)\npen.pu()\npen.goto(50,150)\npen.left(30)\npen.pd()\npen.circle(-200,90)\npen.pu()\npen.goto(-140,-125)\npen.pd()\npen.left(90)\npen.circle(270,59)\n#腿\npen.pu()\npen.goto(-120,-140)#左腿\npen.right(135)\npen.pd()\npen.circle(90,120)\npen.seth(-270)\npen.fd(90)\npen.pu()#右腿\npen.goto(100,-140)\npen.right(165)\npen.pd()\npen.circle(-90,120)\npen.seth(-270)\npen.fd(88)\n#胳膊\npen.pu()#左臂\npen.goto(-130,100)\npen.pd()\npen.seth(200)\npen.circle(200,70)\npen.circle(30,180)\npen.fd(50)\npen.right(45)\npen.fd(50)\npen.up()#右臂\npen.goto(110,100)\npen.pd()\npen.seth(162)\npen.circle(200,-70)\npen.circle(30,-180)\npen.fd(-50)\npen.left(225)\npen.fd(50)\npen.hideturtle()\n"},{name:"雪容融",code:'import turtle\nfrom turtle import *\n\n#turtle.bgpic("xrr.png")\n\npm=Screen() #新建屏幕对象\npm.delay(2)  #设定屏幕延时为0\npm.title("雪容融")\nturtle.hideturtle()\nturtle.speed(200)  # 速度\n\n\n# 大头的圈圈\nturtle.penup()\nturtle.goto(-145, 135)\nturtle.pensize(10)\nturtle.pencolor("#BB3529")\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(45)\nturtle.circle(-150, 45)\nturtle.forward(80)\nturtle.circle(-150, 180)\nturtle.forward(80)\nturtle.circle(-150, 135)\nturtle.end_fill()\n\n\n#花纹\nturtle.fillcolor("#FF9300")\nturtle.begin_fill()\n\nturtle.pensize(5)\nturtle.setheading(15)\nturtle.circle(-600, 28)\nturtle.pencolor("#FF9300")\nturtle.right(30)\nturtle.circle(-150, -35)\nturtle.setheading(180)\nturtle.forward(100)\nturtle.circle(150, 42)\nturtle.end_fill()\n\nturtle.pencolor("#DA2D20")\nturtle.penup()\nturtle.goto(-100, 160)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(4, 360)\nturtle.end_fill()\n\nturtle.penup()\nturtle.goto(-40, 169)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(4, 360)\nturtle.end_fill()\n\nturtle.penup()\nturtle.goto(20, 169)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(4, 360)\nturtle.end_fill()\n\nturtle.penup()\nturtle.goto(80, 163)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(4, 360)\nturtle.end_fill()\n\n#内部弧线\n#从左往右\n#1\nturtle.pencolor("#FF9300")\nturtle.penup()\nturtle.goto(-130, 135)\nturtle.setheading(52)\nturtle.pendown()\nturtle.circle(-175, -60)\nturtle.circle(-125, -70)\n#2\nturtle.penup()\nturtle.goto(-80, 150)\nturtle.setheading(54)\nturtle.pendown()\nturtle.circle(-175, -40)\nturtle.circle(-200, -50)\n#3\nturtle.penup()\nturtle.goto(-10, 155)\nturtle.setheading(75)\nturtle.pendown()\nturtle.circle(-480, -35)\n#4\nturtle.penup()\nturtle.goto(50, 150)\nturtle.setheading(115)\nturtle.pendown()\nturtle.circle(270, -40)\nturtle.circle(500, -12)\n#5\nturtle.penup()\nturtle.goto(120, 140)\nturtle.setheading(130)\nturtle.pendown()\nturtle.circle(180, -40)\nturtle.circle(145, -80)\n\n#脸部\nturtle.pensize(8)\nturtle.pencolor("#BB3529")\nturtle.penup()\nturtle.goto(-125, 40)\nturtle.setheading(216)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(34, 170)\nturtle.right(60)\nturtle.circle(170, 63)\nturtle.right(60)\nturtle.circle(32, 158)\nturtle.right(65)\nturtle.circle(34, 157)\nturtle.circle(-15, 155)\nturtle.left(30)\nturtle.circle(36, 127)\nturtle.circle(-15, 45)\nturtle.right(38)\nturtle.circle(36, 107)\nturtle.circle(-15, 55)\nturtle.right(22)\nturtle.circle(32, 120)\nturtle.end_fill()\n#脸蛋\n#左边\nturtle.pencolor("#F44F39")\nturtle.penup()\nturtle.goto(-120, 5)\nturtle.fillcolor("#F44F39")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(15, 360)\nturtle.end_fill()\n#右边\nturtle.penup()\nturtle.goto(85, 0)\nturtle.fillcolor("#F44F39")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(15, 360)\nturtle.end_fill()\n#眼睛\nturtle.pensize(1)\n#右黑\nturtle.pencolor("#534A49")\nturtle.penup()\nturtle.goto(65, 35)\nturtle.fillcolor("#534A49")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(90)\nturtle.circle(9, 180)\nturtle.forward(9)\nturtle.circle(9, 180)\nturtle.forward(9)\nturtle.end_fill()\n#右白\nturtle.penup()\nturtle.pencolor("white")\nturtle.goto(57, 36)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(90)\nturtle.circle(3, 360)\nturtle.end_fill()\n#左黑\nturtle.pencolor("#534A49")\nturtle.penup()\nturtle.goto(-51, 35)\nturtle.fillcolor("#534A49")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(90)\nturtle.circle(9, 180)\nturtle.forward(9)\nturtle.circle(9, 180)\nturtle.forward(9)\nturtle.end_fill()\n#左白\nturtle.penup()\nturtle.pencolor("white")\nturtle.goto(-58, 36)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(90)\nturtle.circle(3, 360)\nturtle.end_fill()\n\n#头顶\nturtle.pensize(5)\nturtle.penup()\nturtle.pencolor("#5FA8D2")\nturtle.goto(-108, 170)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(24)\nturtle.forward(70)\nturtle.left(15)\nturtle.circle(-68, 80)\nturtle.left(22)\nturtle.forward(78)\nturtle.circle(-4, 175)\nturtle.forward(40)\nturtle.right(22)\nturtle.circle(24, 62)\nturtle.circle(-34, 62)\nturtle.circle(34, 75)\nturtle.circle(-34, 62)\nturtle.circle(24, 72)\nturtle.right(30)\nturtle.forward(24)\nturtle.circle(-4, 180)\nturtle.forward(4)\nturtle.end_fill()\n\n#皇冠\nturtle.pensize(5)\nturtle.setheading(0)\nturtle.penup()\nturtle.pencolor("#E7A910")\nturtle.goto(-15, 225)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(-7, 260)\nturtle.left(70)\nturtle.circle(-11, 180)\nturtle.left(52)\nturtle.circle(-27, 93)\nturtle.left(62)\nturtle.circle(-10, 180)\nturtle.left(70)\nturtle.circle(-7, 260)\nturtle.setheading(-135)\nturtle.forward(15)\nturtle.right(90)\nturtle.forward(10)\nturtle.left(90)\nturtle.forward(10)\nturtle.end_fill()\n\n#左手\nturtle.pensize(6)\nturtle.penup()\nturtle.pencolor("#BB3529")\nturtle.goto(-60, -135)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(150)\nturtle.forward(50)\nturtle.circle(25,110)\nturtle.circle(32,90)\nturtle.circle(332,10)\nturtle.end_fill()\n\n#右手\nturtle.pensize(6)\nturtle.penup()\nturtle.pencolor("#BB3529")\nturtle.goto(80, -125)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-30)\nturtle.forward(50)\nturtle.circle(-25,110)\nturtle.circle(-32,90)\nturtle.end_fill()\n\n#左脚\nturtle.pensize(6)\nturtle.penup()\nturtle.pencolor("#BB3529")\nturtle.goto(-65, -225)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-70)\nturtle.forward(40)\nturtle.circle(10,40)\nturtle.circle(55,40)\nturtle.circle(10,70)\nturtle.forward(25)\nturtle.end_fill()\n\n#右脚\nturtle.pensize(6)\nturtle.penup()\nturtle.pencolor("#BB3529")\nturtle.goto(70, -225)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-110)\nturtle.forward(40)\nturtle.circle(-10,40)\nturtle.circle(-50,40)\nturtle.circle(-10,70)\nturtle.forward(25)\nturtle.end_fill()\n\n#脚的花纹\nturtle.pensize(7)\nturtle.penup()\nturtle.pencolor("#FF9300")\nturtle.goto(-50, -255)\nturtle.pendown()\nturtle.setheading(-20)\nturtle.circle(100,27)\n\nturtle.pensize(7)\nturtle.penup()\nturtle.pencolor("#FF9300")\nturtle.goto(15, -258)\nturtle.pendown()\nturtle.setheading(-10)\nturtle.circle(80,28)\n\n#身体\nturtle.pensize(10)\nturtle.penup()\nturtle.pencolor("#BB3529")\nturtle.goto(-60, -125)\nturtle.fillcolor("#DA2D20")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-120)\nturtle.circle(130,30)\nturtle.circle(40,62)\nturtle.circle(145,45)\nturtle.circle(42,62)\nturtle.circle(130,35)\nturtle.end_fill()\n#中间白色\nturtle.penup()\nturtle.pencolor("white")\nturtle.goto(45, -173)\nturtle.fillcolor("white")\nturtle.begin_fill()\nturtle.pendown()\nturtle.circle(38,360)\nturtle.end_fill()\n#冬奥会象形字\nturtle.setheading(-138)\nturtle.pensize(4)\nturtle.penup()\nturtle.pencolor("red")\nturtle.goto(10, -162)\nturtle.pendown()\nturtle.forward(12)\n\nturtle.setheading(18)\nturtle.pencolor("blue")\nturtle.forward(22)\n\nturtle.setheading(-140)\nturtle.pencolor("lightblue")\nturtle.forward(34)\n\nturtle.setheading(28)\nturtle.pencolor("yellowgreen")\nturtle.forward(24)\n\nturtle.pencolor("yellow")\nturtle.circle(-5,200)\n\nturtle.pensize(2)\nturtle.pencolor("lightblue")\nturtle.circle(23,18)\n\nturtle.penup()\nturtle.setheading(135)\nturtle.pencolor("red")\nturtle.goto(0, -215)\nturtle.pendown()\nturtle.circle(-4,150)\n\nturtle.penup()\nturtle.setheading(175)\nturtle.pencolor("blue")\nturtle.goto(8, -220)\nturtle.pendown()\nturtle.circle(-5,120)\n\nturtle.penup()\nturtle.setheading(245)\nturtle.pencolor("green")\nturtle.goto(18, -215)\nturtle.pendown()\nturtle.circle(-4,180)\n\nturtle.penup()\nturtle.goto(-16, -199)\nturtle.pencolor("black")\nturtle.pendown()\nturtle.write("BEIJING 2022", font=(\'华文行楷\', 6, \'bold italic\'))\nturtle.penup()\nturtle.goto(-10, -203)\nturtle.pencolor("black")\nturtle.pendown()\nturtle.write("Paralympic Games", font=(\'Arial\', 4))\n\n#围巾\nturtle.pensize(1)\nturtle.penup()\nturtle.pencolor("#FF9300")\nturtle.goto(-74, -113)\nturtle.fillcolor("#FF9300")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(5)\nturtle.circle(-1000,3)\nturtle.right(10)\nturtle.circle(300,19)\nturtle.right(30)\nturtle.circle(-15,120)\nturtle.circle(-100,4)\nturtle.right(20)\nturtle.circle(-300,25)\nturtle.right(20)\nturtle.circle(-65,23)\nturtle.circle(-15,80)\nturtle.end_fill()\n\nturtle.pensize(1)\nturtle.penup()\nturtle.pencolor("#FF9300")\nturtle.goto(-57, -135)\nturtle.fillcolor("#FF9300")\nturtle.begin_fill()\nturtle.pendown()\nturtle.setheading(-105)\nturtle.forward(50)\nturtle.circle(5,80)\nturtle.forward(28)\nturtle.circle(5,100)\nturtle.forward(60)\nturtle.end_fill()\n#围巾末尾\nturtle.pensize(3)\nturtle.penup()\nturtle.pencolor("#DA2D20")\nturtle.goto(-61, -175)\nturtle.pendown()\nturtle.setheading(-105)\nturtle.forward(20)\n\nturtle.penup()\nturtle.pencolor("#DA2D20")\nturtle.goto(-54, -178)\nturtle.pendown()\nturtle.setheading(-105)\nturtle.forward(20)\n\nturtle.penup()\nturtle.pencolor("#DA2D20")\nturtle.goto(-47, -181)\nturtle.pendown()\nturtle.setheading(-105)\nturtle.forward(20)\n\nturtle.penup()\nturtle.pencolor("#DA2D20")\nturtle.goto(-40, -184)\nturtle.pendown()\nturtle.setheading(-105)\nturtle.forward(20)\n\n\nturtle.hideturtle()\n\npm.exitonclick()   #单击屏幕关闭窗口\n\n\nturtle.done()\n'},{name:"小猪佩奇",code:'# coding:utf-8\nimport turtle as t\n\nt.pensize(4)\nt.hideturtle()\nt.colormode(255)\nt.color((255,155,192),"pink")\n# t.setup(840,500)\nt.speed(1000)\n\n#鼻子\nt.pu()\nt.goto(-100,100)\nt.pd()\nt.seth(-30)\nt.begin_fill()\na=0.4\nfor i in range(120):\n    if 0<=i<30 or 60<=i<90:\n        a=a+0.08\n        t.lt(3) #向左转3度\n        t.fd(a) #向前走a的步长\n    else:\n        a=a-0.08\n        t.lt(3)\n        t.fd(a)\nt.end_fill()\n\nt.pu()\nt.seth(90)\nt.fd(25)\nt.seth(0)\nt.fd(10)\nt.pd()\nt.pencolor(255,155,192)\nt.seth(10)\nt.begin_fill()\nt.circle(5)\nt.color(160,82,45)\nt.end_fill()\n\nt.pu()\nt.seth(0)\nt.fd(20)\nt.pd()\nt.pencolor(255,155,192)\nt.seth(10)\nt.begin_fill()\nt.circle(5)\nt.color(160,82,45)\nt.end_fill()\n\n#头\nt.color((255,155,192),"pink")\nt.pu()\nt.seth(90)\nt.fd(41)\nt.seth(0)\nt.fd(0)\nt.pd()\nt.begin_fill()\nt.seth(180)\nt.circle(300,-30)\nt.circle(100,-60)\nt.circle(80,-100)\nt.circle(150,-20)\nt.circle(60,-95)\nt.seth(161)\nt.circle(-300,15)\nt.pu()\nt.goto(-100,100)\nt.pd()\nt.seth(-30)\na=0.4\nfor i in range(60):\n    if 0<=i<30 or 60<=i<90:\n        a=a+0.08\n        t.lt(3) #向左转3度\n        t.fd(a) #向前走a的步长\n    else:\n        a=a-0.08\n        t.lt(3)\n        t.fd(a)\nt.end_fill()\n\n#耳朵\nt.color((255,155,192),"pink")\nt.pu()\nt.seth(90)\nt.fd(-7)\nt.seth(0)\nt.fd(70)\nt.pd()\nt.begin_fill()\nt.seth(100)\nt.circle(-50,50)\nt.circle(-10,120)\nt.circle(-50,54)\nt.end_fill()\n\nt.pu()\nt.seth(90)\nt.fd(-12)\nt.seth(0)\nt.fd(30)\nt.pd()\nt.begin_fill()\nt.seth(100)\nt.circle(-50,50)\nt.circle(-10,120)\nt.circle(-50,56)\nt.end_fill()\n\n#眼睛\nt.color((255,155,192),"white")\nt.pu()\nt.seth(90)\nt.fd(-20)\nt.seth(0)\nt.fd(-95)\nt.pd()\nt.begin_fill()\nt.circle(15)\nt.end_fill()\n\nt.color("black")\nt.pu()\nt.seth(90)\nt.fd(12)\nt.seth(0)\nt.fd(-3)\nt.pd()\nt.begin_fill()\nt.circle(3)\nt.end_fill()\n\nt.color((255,155,192),"white")\nt.pu()\nt.seth(90)\nt.fd(-25)\nt.seth(0)\nt.fd(40)\nt.pd()\nt.begin_fill()\nt.circle(15)\nt.end_fill()\n\nt.color("black")\nt.pu()\nt.seth(90)\nt.fd(12)\nt.seth(0)\nt.fd(-3)\nt.pd()\nt.begin_fill()\nt.circle(3)\nt.end_fill()\n\n#腮\nt.color((255,155,192))\nt.pu()\nt.seth(90)\nt.fd(-95)\nt.seth(0)\nt.fd(65)\nt.pd()\nt.begin_fill()\nt.circle(30)\nt.end_fill()\n\n#嘴\nt.color(239,69,19)\nt.pu()\nt.seth(90)\nt.fd(15)\nt.seth(0)\nt.fd(-100)\nt.pd()\nt.seth(-80)\nt.circle(30,40)\nt.circle(40,80)\n\n#身体\nt.color("red",(255,99,71))\nt.pu()\nt.seth(90)\nt.fd(-20)\nt.seth(0)\nt.fd(-78)\nt.pd()\nt.begin_fill()\nt.seth(-130)\nt.circle(100,10)\nt.circle(300,30)\nt.seth(0)\nt.fd(230)\nt.seth(90)\nt.circle(300,30)\nt.circle(100,3)\nt.color((255,155,192),(255,100,100))\nt.seth(-135)\nt.circle(-80,63)\nt.circle(-150,24)\nt.end_fill()\n\n#手\nt.color((255,155,192))\nt.pu()\nt.seth(90)\nt.fd(-40)\nt.seth(0)\nt.fd(-27)\nt.pd()\nt.seth(-160)\nt.circle(300,15)\nt.pu()\nt.seth(90)\nt.fd(15)\nt.seth(0)\nt.fd(0)\nt.pd()\nt.seth(-10)\nt.circle(-20,90)\n\nt.pu()\nt.seth(90)\nt.fd(30)\nt.seth(0)\nt.fd(237)\nt.pd()\nt.seth(-20)\nt.circle(-300,15)\nt.pu()\nt.seth(90)\nt.fd(20)\nt.seth(0)\nt.fd(0)\nt.pd()\nt.seth(-170)\nt.circle(20,90)\n\n#脚\nt.pensize(10)\nt.color((240,128,128))\nt.pu()\nt.seth(90)\nt.fd(-75)\nt.seth(0)\nt.fd(-180)\nt.pd()\nt.seth(-90)\nt.fd(40)\nt.seth(-180)\nt.color("black")\nt.pensize(15)\nt.fd(20)\n\nt.pensize(10)\nt.color((240,128,128))\nt.pu()\nt.seth(90)\nt.fd(40)\nt.seth(0)\nt.fd(90)\nt.pd()\nt.seth(-90)\nt.fd(40)\nt.seth(-180)\nt.color("black")\nt.pensize(15)\nt.fd(20)\n\n#尾巴\nt.pensize(4)\nt.color((255,155,192))\nt.pu()\nt.seth(90)\nt.fd(70)\nt.seth(0)\nt.fd(95)\nt.pd()\nt.seth(0)\nt.circle(70,20)\nt.circle(10,330)\nt.circle(70,30)\nt.done()'},{name:"文字对话游戏",code:'import random\n\n\nclass Creature():\n    def __init__(self, hp, name):\n        self.hp = hp\n        self.name = name\n\n    def attack(self):\n        # 我希望得到一个随机数\n        attack_value = random.randint(0, 50)\n        return attack_value\n\n    def not_dead(self):\n        if self.hp <= 0:\n            return False\n        else:\n            return True\n\n    def being_attack(self, attack_value):\n        self.hp = self.hp - attack_value\n\n    def show_status(self):\n        # print(self.hp)\n        print("{}\'hp is {}.".format(self.name, self.hp))\n\n\nplayer = Creature(100, "AI悦创")\nenemy = Creature(80, "Enemy")\n\nwhile player.not_dead() and enemy.not_dead():\n    player.show_status()\n    enemy.show_status()\n\n    user_input = input("Attack or Defence(A/D):").upper()\n\n    if user_input == "A":\n        player_attack_value = player.attack()\n        enemy_attack_value = enemy.attack()\n        enemy.being_attack(player_attack_value)\n        player.being_attack(enemy_attack_value)\n\n    elif user_input == "D":\n        enemy_attack_value = enemy.attack() * 0.1\n        player.being_attack(enemy_attack_value)\n\nif player.not_dead():\n    print("You Win!")\nelse:\n    print("Loser!")\n\n'}]),_=["12px","14px","16px","18px","20px","22px","24px","26px","28px","30px"],w=["12px","14px","16px","18px","20px","22px","24px","26px","28px","30px"],v={mounted:function(){var t=this;window.vm=this,this.canvansHeight=this.$refs.canvas.clientHeight+"px",this.canvansWidth=this.$refs.canvas.clientWidth+"px",window.onresize=function(){if(0==document.getElementsByTagName("canvas").length)return t.canvansHeight=t.$refs.canvas.clientHeight+"px",t.canvansWidth=t.$refs.canvas.clientWidth+"px",null;t.bottom_px=(t.canvansHeight.slice(0,-2)-t.$refs.canvas.clientHeight)/2+"px",t.right_px=(t.canvansWidth.slice(0,-2)-t.$refs.canvas.clientWidth)/2+"px"},ace.require("ace/ext/language_tools");var n=ace.edit("code");this.editor=n,n.session.setMode("ace/mode/python"),n.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,fontSize:"18px",theme:"ace/theme/monokai",showPrintMargin:!1,value:this.code})},data:function(){return{code_size_options:_,code_size:"18px",canvas_not_show:!1,is_processing:!1,is_grid:!1,is_full_screen:!1,output:["欢迎来到AI悦创·1v1,小图灵的世界! Happy Coding :)\n"],StopExecution:!1,canvansHeight:"0px",canvansWidth:"0px",right_px:0,bottom_px:0,input_msg:"",file_name:"",editor:null,canvas_hide:!1,code_ex_options:h,code:h[0].code,console_size_options:w,console_size:"14px"}},watch:{code_size:function(){this.editor.setFontSize(this.code_size)},code:function(){this.editor.setValue(this.code)},canvas_not_show:function(){this.del_canvas()}},methods:{del_canvas:function(){for(var t=document.getElementsByTagName("canvas"),n=t.length-1;n>=0;n--)t[n].parentNode.removeChild(t[n]);this.right_px="0px",this.bottom_px="0px"},toggle_grid:function(){this.is_grid=!this.is_grid},toggle_full_screen:function(){this.is_full_screen=!this.is_full_screen,this.$nextTick(function(){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!0),window.dispatchEvent(t)})},builtinRead:function(t){if(void 0===Sk.builtinFiles||void 0===Sk.builtinFiles.files[t])throw"File not found: '"+t+"'";return Sk.builtinFiles.files[t]},outf:function(t){this.output.push(t);var n=this;this.$nextTick(function(){n.$refs.output.scrollTop=n.$refs.output.scrollHeight})},inputfunc:function(){var t=this,n=document.getElementById("input");return n.removeAttribute("readonly"),n.focus(),new f.a(function(e,l){n.addEventListener("keyup",function(r){var i=n.value;if("Enter"==r.key){var u=document.createElement("input");u.setAttribute("id","input"),u.setAttribute("readonly","readonly"),u.setAttribute("style","color: white;display:inline;position: absolute;background: transparent;outline: none;border: none;"),n.parentNode.replaceChild(u,n),t.input_msg="",t.StopExecution?l("input"):(t.outf(i+"\n"),e(i))}})})},run_code:function(){var t=this,n=this,e=ace.edit("code").getValue();Sk.configure({output:this.outf,inputfun:this.inputfunc,read:this.builtinRead,killableWhile:!0,inputTakesPrompt:!0}),(Sk.TurtleGraphics||(Sk.TurtleGraphics={})).target="turtleCanvas",Sk.TurtleGraphics.width=this.$refs.canvas.clientWidth,Sk.TurtleGraphics.height=this.$refs.canvas.clientHeight,Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",!1,e,!0)},{"*":function(){if(n.StopExecution)throw n.StopExecution=!1,"<font color='red'>\n程序中止运行\n</font>"}}).then(function(t){n.StopExecution||n.outf("<font color='#36ff00'>\n程序运行结束～\n</font>"),n.is_processing=!1},function(t){throw"input"==JSON.parse(d()(t)).nativeError?"<font color='red'>\n程序中止运行\n</font>":"<font color='red'>"+t.toString()+"</font>"}).catch(function(n){t.outf("<font color='red'>"+n.toString()+"\n</font>")}).finally(function(){n.is_processing=!1})},run:function(){if(this.is_processing){this.is_processing=!1,this.StopExecution=!0;var t=new KeyboardEvent("keyup",{key:"Enter",keyCode:13});document.getElementById("input").dispatchEvent(t)}else this.del_canvas(),this.canvas_not_show=!1,this.is_processing=!0,this.StopExecution=!1,this.run_code()},clearConsole:function(){this.output=[],this.canvas_not_show=!0},saveFile:function(){var t=ace.edit("code").getValue(),n=new Blob([t],{type:"text/plain"}),e=window.URL||window.webkitURL||window,l=e.createObjectURL(n),r=document.createElement("a");r.href=l,r.download=this.file_name+".py",r.click(),e.revokeObjectURL(l)},canvas_hide_handler:function(){this.canvas_hide=!this.canvas_hide}}},b={render:function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("div",{staticClass:"header full-width"},[t._m(0),t._v(" "),l("div",{staticClass:"flex-none"},[l("div",{staticClass:"searchbox_search-box"},[l("img",{staticStyle:{transform:"scale(0.7, 0.7)"},attrs:{src:e("QRFi"),alt:""}}),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.file_name,expression:"file_name"}],attrs:{type:"text",placeholder:"这是我的作品名称",value:""},domProps:{value:t.file_name},on:{input:function(n){n.target.composing||(t.file_name=n.target.value)}}})])]),t._v(" "),l("div",{staticClass:"header_py-btn"},[l("a",{staticClass:"header_py-btn__hiNW1 logo",attrs:{href:"https://www.bornforthis.cn/"}},[t._v("博客")]),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"header_btn_"},[l("div",{staticClass:"button_header-button__xiNgO",staticStyle:{width:"96px",padding:"0px"},on:{click:t.saveFile}},[t._v("\n          下载\n        ")])]),t._v(" "),l("div",{staticClass:"header_right"})])]),t._v(" "),l("div",{staticClass:"main"},[l("div",{staticClass:"codeandconsole",class:{display_none:t.is_full_screen},attrs:{id:"codeandconsole"}},[l("div",{staticClass:"code",attrs:{id:"code"}}),t._v(" "),l("div",{staticClass:"code_size-code_example"},[l("el-select",{attrs:{placeholder:"冰墩墩"},model:{value:t.code,callback:function(n){t.code=n},expression:"code"}},t._l(t.code_ex_options,function(t){return l("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}),1),t._v(" "),l("el-select",{attrs:{placeholder:"18px"},model:{value:t.code_size,callback:function(n){t.code_size=n},expression:"code_size"}},t._l(t.code_size_options,function(t){return l("el-option",{key:t,attrs:{value:t}})}),1)],1),t._v(" "),l("div",{staticClass:"console",style:{fontSize:t.console_size},attrs:{id:"console"}},[l("div",{staticClass:"console_size"},[l("el-select",{attrs:{placeholder:"14px"},model:{value:t.console_size,callback:function(n){t.console_size=n},expression:"console_size"}},t._l(t.console_size_options,function(t){return l("el-option",{key:t,attrs:{value:t}})}),1)],1),t._v(" "),l("div",{ref:"output",staticClass:"output"},[l("div",{staticClass:"component_repl-ct",attrs:{id:"output"}},[t._l(t.output,function(n,e){return l("span",{key:e,domProps:{innerHTML:t._s(n)}})}),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.input_msg,expression:"input_msg"}],staticClass:"input",attrs:{readonly:"true",id:"input"},domProps:{value:t.input_msg},on:{input:function(n){n.target.composing||(t.input_msg=n.target.value)}}})],2)]),t._v(" "),l("div",{staticClass:"console_btn"},[l("div",{staticClass:"console_btn_container clear_console",on:{click:t.canvas_hide_handler}},[l("div",[t._v(t._s(t.canvas_hide?"显示":"隐藏")+"画布")])]),t._v(" "),l("div",{staticClass:"console_btn_container clear_console",class:{display_none:t.is_processing},on:{click:t.clearConsole}},[l("div",[t._v("清除终端")])]),t._v(" "),l("div",{staticClass:"console_btn_container",on:{click:function(n){return t.run()}}},[l("div",[t._v(t._s(t.is_processing?"停止":"开始"))])])])])]),t._v(" "),l("div",{ref:"canvas",staticClass:"canvas",style:{display:t.canvas_hide?"none":""}},[l("div",{staticClass:"src_ct"},[l("div",{staticClass:"src_tutle",style:{right:t.right_px,bottom:t.bottom_px},attrs:{id:"turtleCanvas"}}),t._v(" "),l("div",{staticClass:"wangge"},[l("div",{class:t.is_grid?"":"wanggexian",attrs:{id:"wanggexian"}})])]),t._v(" "),l("div",{staticClass:"btn_container"},[l("div",{staticClass:"btn_canvas"},[l("img",{attrs:{src:e("kkRR")},on:{click:function(n){return t.toggle_grid()}}})]),t._v(" "),l("div",{staticClass:"btn_canvas"},[l("img",{attrs:{src:t.is_full_screen?"../../static/exitfullscreen.svg":"../../static/enterfullscreen.svg"},on:{click:function(n){return t.toggle_full_screen()}}})])])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flex-1-1-auto"},[n("div",{staticClass:"logo"},[this._v("AI悦创·1v1")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header_btn_"},[n("a",{staticClass:"release",attrs:{href:"https://bornforthis.cn/onepython.html"}},[n("div",{staticClass:"button_header-button__xiNgO",staticStyle:{width:"96px",padding:"0px"}},[this._v("\n            编程一对一\n          ")])])])}]};var m=e("VU/8")(v,b,!1,function(t){e("tG4e"),e("0P22")},"data-v-e0498bf0",null).exports;c.default.use(s.a);var M=new s.a({routes:[{path:"/",name:"index",component:m}]}),I=e("2dE2"),x=e.n(I);c.default.component(u.a.name,u.a),c.default.component(r.a.name,r.a),c.default.use(x.a),c.default.config.productionTip=!1,new c.default({el:"#app",router:M,components:{App:p},template:"<App/>"})},QRFi:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjM3NjQgMjAuMDI3OUwxOC4xNjI4IDguNjY1NDRDMTguNjQwMyA4LjA1MjcgMTguODEwMSA3LjM0NDMgMTguNjUwOSA2LjYyMjk5QzE4LjUxMyA1Ljk2NzI2IDE4LjEwOTcgNS4zNDM3NyAxNy41MDQ5IDQuODcwNzhMMTYuMDI5OSAzLjY5OTA2QzE0Ljc0NTkgMi42Nzc4NCAxMy4xNTQxIDIuNzg1MzQgMTIuMjQxNSAzLjk1NzA2TDExLjI1NDYgNS4yMzczNUMxMS4xMjczIDUuMzk3NTIgMTEuMTU5MSA1LjYzNDAxIDExLjMxODMgNS43NjMwMUMxMS4zMTgzIDUuNzYzMDEgMTMuODEyIDcuNzYyNDYgMTMuODY1MSA3LjgwNTQ2QzE0LjAzNDkgNy45NjY3MSAxNC4xNjIyIDguMTgxNyAxNC4xOTQxIDguNDM5NjlDMTQuMjQ3MSA4Ljk0NDkzIDEzLjg5NjkgOS40MTc5MiAxMy4zNzcgOS40ODI0MkMxMy4xMzI5IDkuNTE0NjcgMTIuODk5NCA5LjQzOTQyIDEyLjcyOTcgOS4yOTk2N0wxMC4xMDg2IDcuMjE0MjJDOS45ODEyNiA3LjExODU1IDkuNzkwMjUgNy4xMzg5OCA5LjY4NDEzIDcuMjY3OTdMMy40NTUxNCAxNS4zMzAzQzMuMDUxOSAxNS44MzU1IDIuOTEzOTUgMTYuNDkxMiAzLjA1MTkgMTcuMTI1NUwzLjg0Nzc3IDIwLjU3NjFDMy44OTAyMSAyMC43NTg5IDQuMDQ5MzkgMjAuODg3OSA0LjI0MDM5IDIwLjg4NzlMNy43NDIyMiAyMC44NDQ5QzguMzc4OTEgMjAuODM0MSA4Ljk3MzE2IDIwLjU0MzkgOS4zNzY0IDIwLjAyNzlaTTE0LjI3OTcgMTguOTUzM0gxOS45ODk4QzIwLjU0NjkgMTguOTUzMyAyMSAxOS40MTIzIDIxIDE5Ljk3NjZDMjEgMjAuNTQyMSAyMC41NDY5IDIxIDE5Ljk4OTggMjFIMTQuMjc5N0MxMy43MjI2IDIxIDEzLjI2OTUgMjAuNTQyMSAxMy4yNjk1IDE5Ljk3NjZDMTMuMjY5NSAxOS40MTIzIDEzLjcyMjYgMTguOTUzMyAxNC4yNzk3IDE4Ljk1MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},cDSy:function(t,n){},kkRR:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iOCIgZmlsbD0iIzA0MDgxMiIgZmlsbC1vcGFjaXR5PSIwLjQwMDE4NiIvPgo8bGluZSB4MT0iMTAuNzUiIHkxPSIxMi41ODM1IiB4Mj0iMjUuOTE2NyIgeTI9IjEyLjU4MzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjEwLjc1IiB5MT0iMjMuOTE2NSIgeDI9IjI1LjkxNjciIHkyPSIyMy45MTY1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxsaW5lIHgxPSIxMi43NDkiIHkxPSIxMC4wODM1IiB4Mj0iMTIuNzQ5IiB5Mj0iMjUuOTE2OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8bGluZSB4MT0iMjMuNDE3IiB5MT0iMTAuMDgzNSIgeDI9IjIzLjQxNyIgeTI9IjI1LjkxNjgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},tG4e:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.24ac5bfc094b962b7313.js.map