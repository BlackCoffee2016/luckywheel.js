# luckywheel.js
[DEMO](http://wucao.github.io/luckywheel.js/index.html)

``` 
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="luckywheel.js"></script>
```

```
<ul>
	<li>一等奖：MacBook Pro</li>
	<li>二等奖：iPhone 6s</li>
	<li>三等奖：iPad Air 2</li>
	<li>游戏键盘</li>
	<li>游戏鼠标</li>
	<li>屠龙宝刀</li>
	<li>传奇大礼包</li>
	<li>不要灰心</li>
	<li>再接再厉</li>
	<li>祝你好运</li>
</ul>
<button>抽奖</button>
```

```
ul li.active {
	border-color: red;
	color: red;
	font-size: 18px;
}
```

```
$("button").click(function() {
	$("ul li").luckywheel({
		activeClass: "active",  // 效果样式的class
		wheelResult: 3  // 中奖结果
	}, function() {
		alert("恭喜你中奖了");
	});
});
```