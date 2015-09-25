# luckywheel.js
[DEMO](http://wucao.github.io/luckywheel.js/index.html)

``` 
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="luckywheel.js"></script>
```

```
<ul>
	<li>һ�Ƚ���MacBook Pro</li>
	<li>���Ƚ���iPhone 6s</li>
	<li>���Ƚ���iPad Air 2</li>
	<li>��Ϸ����</li>
	<li>��Ϸ���</li>
	<li>��������</li>
	<li>��������</li>
	<li>��Ҫ����</li>
	<li>�ٽ�����</li>
	<li>ף�����</li>
</ul>
<button>�齱</button>
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
		activeClass: "active",  // Ч����ʽ��class
		wheelResult: 3  // �н����
	}, function() {
		alert("��ϲ���н���");
	});
});
```