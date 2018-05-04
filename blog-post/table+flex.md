## table
### 用法
    设置在父元素上的属性
    `display: table;`
    设置在子元素上的属性
    `display: table-cell;`

### table特点
    - 对宽度高度敏感
    - 对margin值无反应
    - 等高(可实现等高布局)
    - 可使用传统表格样式，如table-layout
    - 兼容IE8, 对于IE6/7，我们可以使用display： inline-block属性代替
```
    .parent {
        display: table;
    }
    .child {
        display: table-cell;
        vertical-align: middle;     //可调整子元素的对齐方式
    }
 ```    

## flex
    Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性

### 用法
    设置在父元素上的属性

    flex-direction ---决定项目的排列方向，row | row-reverse | column | column-reverse
    flex-wrap ---决定项目是否换行，nowrap | wrap | wrap-revers
    flex-flow ---<flex-direction> || <flex-wrap>
    justify-content ---决定项目排列方向上的对齐方式，flex-start | flex-end | center | space-between | space-around
    align-items ---决定垂直轴上的对齐方式，flex-start | flex-end | center | baseline | stretch
    align-content ---决定多列或多行垂直轴上的对齐方式，flex-start | flex-end | center | space-between | space-around | stretch
    flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

    设置在子元素上的属性

    order ---决定项目的排列顺序，数值越小，排列越靠前，默认为0，<integer>
    align-self ---决定单个项目与其他项目不一样的对齐方式，可覆盖align-items属性，默认值为auto，auto | flex-start | flex-end | center | baseline | stretch
    flex ---none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    flex-grow ---决定项目的放大比例，默认为0，<number>
    flex-shrink ---决定项目的缩小比例，默认为1，<number>
    flex-basis ---决定在分配多余空间之前，项目占据的空间，默认值为auto，<length> | auto
    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

box、flexbox、flex比较
    出现时间
    box ---2009年
    flexbox ---2011年
    flex ---2012年

写法
    box
 
    parent
    display: -moz-box;
    display: -webkit-box; 
    display: -o-box;
    display: box;
    box-orient: horizontal | vertical; ---项目排列方向
    box-direction: normal | reverse | inherit; ---确定子元素的排列顺序
    box-align: start | end | center | baseline | stretch; ---垂直方向对齐方式
    box-pack: start | end | center | justify; ---水平方向对齐方式
    box-lines: single | multiple; ---决定子元素是可以换行显示
 
    child
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-box-align: center;
    box-align: center;
    flexbox