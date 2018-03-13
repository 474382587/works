今天做 30 day js
学到了这些：

1.  element.getBoundingClientRect()
    这个可以返回 元素的大小 和 元素的位置
    位置是指相对于 viewport 的位置
    就是 client 的位置

| Attribute | Type  | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| bottom    | float | Y 轴，相对于视口原点（viewport origin）矩形盒子的底部。只读。           |
| height    | float | 矩形盒子的高度（等同于 bottom 减 top）。只读。                          |
| left      | float | X 轴，相对于视口原点（viewport origin）矩形盒子的左侧。只读。           |
| right     | float | X 轴，相对于视口原点（viewport origin）矩形盒子的右侧。只读。           |
| top       | floa  | t Y 轴，相对于视口原点（viewport origin）矩形盒子的顶部。只读。         |
| width     | float | 矩形盒子的宽度（等同于 right 减 left）。只读。                          |
| x         | float | X 轴横坐标，矩形盒子左边相对于视口原点（viewport origin）的距离。只读。 |
| y         | float | Y 轴纵坐标，矩形盒子顶部相对于视口原点（viewport origin）的距离。只读。 |

2.  自己不好好看文档的下场

    一定要用字符串  
    一定要用字符串  
    一定要用字符串

```
element.style.xxx = "xxx";
element.style.xxx = 'xxx';
element.style.xxx = `${variable}px`;
```
