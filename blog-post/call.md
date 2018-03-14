##call()

fn.call(thisArg,arg) => thisArg.fn(arg)

```
    var a = 0;
    var b = 0
    function fn1() {
        a = 1;
        var b = 1;
        console.log("fn1="+a+"|"+b);
        console.log("fn1="+this.a+"|"+this.b);
    }
    function fn2() {
        a = 2;
        var b = 2;
        console.log("fn2="+a+"|"+b);
        console.log("fn2="+this.a+"|"+this.b);
    }
    fn1.call(fn2);
    fn1.call.call(fn2);
```

> 输出结果  
> fn1=1|1  
> fn1=undefined|undefined  
> fn2=2|2  
> fn2=2|0

今天在一个群里看到这个东西，本来以为自己理解了 .call()
但是做了一下发现没搞懂 所以又看了一遍文档

    Function.prototype.call()
    Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are.

根据规范

```
15.3.4.4 Function.prototype.call (thisArg [ , arg1 [ , arg2, … ] ] ) #

When the call method is called on an object func with argument thisArg and optional arguments arg1, arg2 etc, the following steps are taken:

- If IsCallable(func) is false, then throw a TypeError exception.

- Let argList be an empty List.

- If this method was called with more than one argument then in left to right order starting with arg1 append each argument as the last element of argList

- Return the result of calling the [[Call]] internal method of func, providing thisArg as the this value and argList as the list of arguments.

- The length property of the call method is 1.

NOTE The thisArg value is passed without modification as the this value. This is a change from Edition 3, where a undefined or null thisArg is replaced with the global object and ToObject is applied to all other values and that result is passed as the this value.
```

fn1.call(thisArg,arguments)

- 如果 fn1 可以执行 就继续 不行 就 扔一个类型错误
- 建一个空的 argList
- 把每一个 argument of fn1 放进这个 list 里
- 返回 [[Call]](thisArg,argList)

```
[[Call]]
当用一个 this 值、一个参数列表调用函数对象 F 的 [[Call]] 内部方法，采用以下步骤：

用 F 的 [[FormalParameters]] 内部属性值、参数列表 args、10.4.3 描述的 this 值来建立函数代码的一个新执行环境，令 funcCtx 为其结果。
令 result 为 FunctionBody（也就是 F 的 [[Code]] 内部属性）解释执行的结果。如果 F 没有 [[Code]] 内部属性或其值是空的 FunctionBody，则 result 是 (normal, undefined, empty)。
退出 funcCtx 运行环境，恢复到之前的执行运行环境。
如果 result.type 是 throw 则抛出 result.value。
如果 result.type 是 return 则返回 result.value。
否则 result.type 必定是 normal。返回 undefined。
```

fn1.call() => Function.prototype.call.call(fn1)
fn1.call(fn2) => Function.prototype.call.call(fn1,fn2)

所以
console.log("fn1="+a+"|"+b); 输出 1 | 1

console.log("fn1="+this.a+"|"+this.b); 输出 fn2 Object 的 a key 储存的值
fn2 object 是一个 function object
长这个样子，

```
ƒ fn2()
arguments:null
caller:null
length:0
name:"fn2"
prototype:{constructor: ƒ}
__proto__:ƒ ()
[[FunctionLocation]]:VM2149:1
[[Scopes]]:Scopes[2]
```

有没有 a？有没有 b？ 没有 所以输出是 undefined

fn1.call.call(fn2);
我们从左往右看
fn1.call 是什么？ fn1.call 就是 fn1 中 call 这个 key
这个 key 在 fn1 的 隐式原型 \_\_proto\_\_ 找的到 这个东西属于谁呢
属于 Function.prototype 所以
fn1.call.call(fn2) 就 等于 Function.prototype.call.call(fn2)
跟 fn1 没关系了
这时候我们再看 Function.prototype.call.call(fn2)
