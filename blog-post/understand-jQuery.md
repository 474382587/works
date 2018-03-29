# 对 jQuery 实现的学习


假设我们需要完成如下的功能：
```
window.jQuery = ???
window.$ = jQuery

var $div = $('div')
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi
```

我们怎么想呢？

首先，jQuery 使用的时候我们是这样用的

1. $('div') 返回所有的 div 节点
2. 这个返回的东西里面有两个function，可以加class又可以变text



## 1）$('div') 返回所有的 div 节点
我们在 JavaScript 中如何选择的呢？

    var div = document.querySelectorAll('div');
    这个 div 中就是一个包含所有 div 的伪数组
    
我们做一个可以返回 div 的 function

```
function returnElements(selector){
 return document.querySelectorAll(selector);   
}
```

接下来给这个东西一个名字，把function名字删了是因为如果不删除他的名字不会是jQuery，而还是原来的名字

```
window.jQuery = function(selector){
 return document.querySelectorAll(selector);   
}

```

我们现在在console里面打jQuery('div')就会返回所有选中的div的伪数组了


但是我们不满足于现状
想要加个class,改个文本
于是

addClass(),setText()就出现了

```
function addClass(nodes,className){
    //注意我们这里传进来的是一个伪数组
    //给一个node加class：node.classList.add(className)
    //现在我们需要遍历一下这个东西并且给他当中的所有node都加个class
    for(let i=0;i<nodes.length;i++){
        nodes[i].classList.add(className);
    }
}
//齐活，接下来再来一个可以变里面textContent的玩意儿
//一样的套路，一个一个遍历改textcontent，用DOM本来的API搞
function setText(nodes,text){
    //注意我们这里传进来的是一个伪数组
    //给一个node加class：node.textConten他= text;
    //现在我们需要遍历一下这个东西并且给他当中的所有node都改textcontent
    for(let i=0;i<nodes.length;i++){
        nodes[i].textContent = text;
    }
}
```

我现在想把这俩都叫别人知道是我发明的，以我命名所以我就把他们团一起
```
var joseph = {};
joseph.setText = function setText(nodes,text){
    for(let i=0;i<nodes.length;i++){
        nodes[i].textContent = text;
    }
}；
joseph.addClass = function addClass(nodes,className){
    for(let i=0;i<nodes.length;i++){
        nodes[i].classList.add(className);
    }
}；
```
上面一顿操作就相当于： 
```
var joseph = {
    addClass: function addClass(){...},
    setText: function setText(){...}
}
```

## 2）这个返回的东西里面有两个function，可以加class又可以变text

我怎么才能直接用这两个刁东西呢？
$div.addClass('red') => 字面意思不是 addClass是 $div 的一个key 么？

好了，现在我把两个function送给 $div 

所以这个东西现在是个有两个function的人了

==> 

```
window.jQuery = function(){
    let nodes = document.querySelectorAll(selector);
    nodes.addClass = function(className){...}
    nodes.setText = function(text){...}
    //因为这俩哥们是nodes的人了，所以调用nodes里面的东西都是免费的，不用传了，都自家人
    //因为nodes小兄弟是个伪数组，所以遍历的时候也轮不到我这送给他的俩function
    然后再return这个node就好了
    return nodes;
}
```

完成了就。
