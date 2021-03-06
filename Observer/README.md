### 设计模式 观察者模式
观察另外一个对象，建立观察者和被观察对象的联系，被观察的对象发生变化后，让观者者们完成更新

### 一句话
建立一种观察手段，检测到被观察对象发生任何变化都要通知有关部门处理

### 与发布订阅模式的区别
发布订阅模式中，发布事件者和订阅者之间不耦合，相互之间无联系，通过事件中心完成通信，观察者模式中，观察者和被观察者要建立一种联系（被观察者的实例要把观察者实例存放起来），发生改变后，会直接让观察者更新。

**发布订阅模式要实现一个调度中心以便双方通信
观察者模式要实现一个观察机制，还要设计一种巧妙的方式来建立观察者和被观察者的联系**