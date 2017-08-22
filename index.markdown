# 盒子模型

> **margin**
> 外边框通常是透明的，可以为负值。

> 页面上的每一个元素都被当成一个矩形框，这个框有 margin border padding content 组成。

> **标准浏览器下的padding 和border 不占用content的内容**

> width padding border margin 总只有width margin 可以设置成auto,在margin-left,margin-right,width 三者之间只要的有一个auto的值，其都会自动设置成填充整个父级元素的内容宽。


left |width| right|结果
---|---|---|---
num | num| auto| auto会自动将父元素的宽内容填满
num| auto| num| auto会自动将父元素的宽内容填满
num | auto | auto| width的auto 会自动将父元素的宽内容填满
auto | num | auto | 居中，左右margin 平分



> 标准浏览器下的padding 和border 不占用content的内容，但是IE56在怪异模式中，不是内容的宽度，而是content padding border 的总和。
> **普通文档流中的块框**外边距叠加，当两个块的外边距相遇时，会产生叠加，取最大的外边距显示。
> 行内框，浮动框，绝对定位框之间的外边距不会叠加。

>height 方面，它的top-margin,bottom-margin 设置为auto的时候会默认为0，不会和width一样自动的垂直剧中。

> 如果父级元素的height设置为auto，而且只有块级元素，其默认高度是从最上级的块级子元素的外边框到最低块级子元素的外边距之间的距离（包括边框和内边距）。

> 如果没有显式的设置包含块的高度（没有明确的给外元素设置固定的高），子块设置的高度的百分比会自动转换成auto.
[例子](https://github.com/WYoYao/SSC/blob/master/width.html)

> 块状：p,h1,div等元素称之为块级元素，这意味着这些元素显示为一块。
> 行内：strong span 等元素被称为行内元素，因为它们的内容显示为行内，可以使用display:block 将行内元素转换成为块状元素，还可以使用display:none 让生成的元素没有框，这样框中的内容就不再显示。不占用文档中的空间。

> 普通定位机制：
>- 普通流
>- 浮动
>- 定位

> **普通流**
> **块级框**从上到下排列，上下之间的间距通过margin 叠加产生。
> **行内框**在一行中水平布置，可以使用水平margin border padding 来调整他们的水平间距，但是垂直的margin padding border不影响行内框的高度，行内框的高度一直是他内容的高度，所以可以通过修改content 的高度来修改这个框的高度。
> **无名框**将一些文本添加到块级标签里面的时候，会创建块级元素，这种框被称之为无名框，无法直接对无名框应用样式。