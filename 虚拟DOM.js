/*

    虚拟Dom

    实际就是一个JS对象树，

    通过修改  比较新旧的DOM的差异来进行页面渲染

    React  Diff 算法

    比较新旧DOM，发现差异，形成一个patch

    如果我有1000条数据，我修改了其中两条，真实的DOM会重新渲染1000条数据，只要发生了变化，就会重新渲染全部数据，虚拟dom 会生成1000个对象 （它是不会被浏览器图形化渲染的），虚拟dom 里的东西会和真实dom绑定在一起，当数据发生变化 虚拟dom和之前的虚拟dom 会去做数据的比较，当数据发生变化时，才会去更新数据发生改变的那部分真实的dom元素

    
    虚拟DOM用javascript对象来表示VNode，在传统的开发流程中，使用原生的JS或JQ操作DOM时，很有可能触发回流操作，浏览器重新渲染部分或全部文档，更可怕的是，当需要更新多个节点时，一个节点更新后，导致前一个节点的坐标信息更新，前一次计算为无用功，计算DOM节点浪费了性能，所以直接操作DOM的代价十分昂贵，频繁操作还会造成页面卡顿影响用户体验，通过虚拟DOM我们执行更新大量节点操作时，通过在这个虚拟DOM上实现了一个 diff 算法找出最小变更，再把这些变更写入实际的DOM中。这个虚拟DOM以JS结构的形式存在，计算性能会比较好，而且由于减少了实际DOM操作次数，性能会有较大提升



    普通土操作DOM会容易触发重绘和回流，会降低性能

    本身DOM中的对象比较的复杂
*/