    transform:skewX(30deg) scaleX(0.5)  rotate(45deg) translate(10px,20px) 

    顺序不同 表现形式就不一样
    一定要注意

    perspective属性有两种书写形式，一种用在舞台元素上（动画元素们的共同父辈元素）；第二种就是用在当前动画元素上，与transform的其他属性写在一起。如下代码示例：

.stage {
    perspective: 600px;
}
以及：

#stage .box {
    transform: perspective(600px) rotateY(45deg);
}
