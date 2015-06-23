#zepto.clearinput
![github-zepto-clearinput](https://cloud.githubusercontent.com/assets/5467932/8300502/2e1e4d44-19b8-11e5-99db-f0a11df8caf0.png)
```html
<script src="http://zeptojs.com/zepto.min.js" type="text/javascript"></script>
<script src="../src/zepto.clearinput.js" type="text/javascript"></script>
```
```html
<div class="query form1">
    <input name="q" type="text" placeholder="keywords">
	<a class="clear" href="javascript:void(0)"></a>
</div>
<div class="query form2">
    <input name="q" type="text" placeholder="keywords">
    <a class="clear" href="javascript:void(0)"></a>
</div>
```
###Default settings:
```javascript
$('.form1 input').clearInput({clear: '.form1 .clear'});
$('.form2 input').clearInput({clear: '.form2 .clear',focus:false});
```