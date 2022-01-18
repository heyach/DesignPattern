### 设计模式 解释器模式
***
对于一种语言，给出其文法描述，并定义解释器，来解释定义的语句

### 应用场景
比如一个html节点，我们怎么知道它在文档中的具体位置呢，或者说通过一个准确的数据结构（自定义），别人就能知道具体位置
![](https://raw.githubusercontent.com/heyach/blog/main/images/designpattern/interpreter.jpg)
当我们得到一个html片段时，我们根据我们的解释器，可以直接得到这样一个描述，反过来根据这样一段描述，也可以生成对应的html代码（会丢失其他节点）