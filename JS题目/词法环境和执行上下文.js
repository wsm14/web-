function foo() {
    console.log( a ); 
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;
bar();


//Lexical Environments 词法环境

/*

词法环境由两部分组成：

Environments Records（环境记录）：变量等级的地方

outer：outer是个指向，包含本词法环境的外部词法环境


词法环境就是用来登记变量和相关函数名字的，也知道这个名字是登记在词法环境的 EnvironmentRecord上的。

JS引擎和学校一样，设置一个办公厅，老师（Lexical Environments）坐在办公厅里，
手里拿着登记薄（EnvironmentsRecord），等比人来办理注册


JS的这个办公厅叫运行上下文（Execution Contexts），还有两个办事窗口，这两个窗口分别有个名字

LexicalEnvironments，
VariableEnvironment


执行上下文有三个部分组成

LexicalEnvironments：是一个词法环境，用来解析引用
VariableEnvironment：也是一个词法环境，用来登记var和function声明

ThisBinding：这个就是代码的this


三类可运行代码，运行这些代码的时候创建运行上下文


global code：整个JS程序，就是源代码文件中所有不在function体中的代码

function code：就是函数体中的代码。除了内嵌函数体中代码以外

eval code：就是传给内置eval函数的代码字符串


运行上下文创建出来的会被放在一个叫运行栈的结构中



*/