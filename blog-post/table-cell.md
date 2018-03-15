table-cell
table-cell 具有“同行等高，同行各列自动调节宽度”的特性。因此可以用于响应式布局
还可以用在多行文本垂直居中
可以设置宽高、padding，但不可以设置 margin
尽量不与 float、absolute 定位同用

实际用例：

<div>

</div>

垂直居中
这应该是大家都很熟悉了的应用，在父盒子中设置 display: table，子盒子中设置 display: table-cell 和 vertical-align: middle 就可以实现大小不固定盒子的垂直居中。

划分等宽区块
以往的方式中同一行中的几个等宽区块，比如产品陈列。宽度如果都写死就没有办法做到响应式。宽度如果都写成百分比，border 和 padding 就没有办法再使用固定值。使用 display: table-cell 就可以很好地解决这个问题，因为它的宽度是自适应的，即使设置了固定的 border 和 padding 它也不会出现填不满或者换行的情况。

弹性两栏式布局
比如说要实现左侧固定宽度，右侧宽度自适应的情况。给左边盒子设置 min-width，右边的盒子设置 width: 100%;就可以实现。

两盒子等高
给父盒子设置 display: table，给 cell2 设置 display: table-cell，不设置高度。这样 cell2 的高度就会随着 cell1 的高度变化而变化。
