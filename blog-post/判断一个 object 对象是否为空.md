三种方法

1. 常用 用 for loop
循环一遍， 如果有一个key的话就会执行循环内语句
```
for(var i in object){
    return true;
}
return false;
```

2. JSON.stringify()

判断是否为空 （‘{}’）

JSON.stringify(obj) === "{}"? false : true;

3. Object.keys() //ES6 新增的method
这个会返回一个数组 => 判断数组是否为空就可以判断是否是空对象

```
Object.keys(object).length === 0? false: true;

```