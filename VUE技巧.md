### Vue如何获取当前点击元素？获取父元素、子元素、兄弟元素呢？

> 通过帮定点击事件：
> 例如： `<button class="shanchu" @click="shanchu($event)">删除</button>`
>
> 获取元素方法总结：

```js
 **     
           //当前点击的元素
           e.target
           
		   //绑定事件的元素
           e.currentTarget
           
           //获得点击元素的前一个元素
           e.currentTarget.previousElementSibling.innerHTML
           
           //获得点击元素的第一个子元素
           e.currentTarget.firstElementChild
           
           //获得点击元素的下一个元素
           e.currentTarget.nextElementSibling
           
           //获得点击元素中id为string的元素
           e.currentTarget.getElementById("string")
           
           //获得点击元素的class属性
           e.currentTarget.getAttributeNode('class')
           
           // 获得点击元素的父级元素
           e.currentTarget.parentElement
           
           // 获得点击元素的前一个元素的第一个子元素的HTML值
		   e.currentTarget.previousElementSibling.firstElementChild.innerHTML**
``
```

