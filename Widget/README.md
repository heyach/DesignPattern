### 设计模式 Widget模式
***
Web Widget指一块在任意页面上执行的代码块，将页面分解成组件，针对组件开发，最终组合成完整的页面

### 模板部分
```js
<script id="dispatch-staff-window" type="text/template">
    <div class="dispatch-staff-window">
        <h2>${userName}</h2>
        {@if taskId}
        <a href="javascript:;">任务详情</a>
        {@/if}
        <div class="dispatch-win-arrow"></div>
    </div>
</script>
var staffTpl = document.querySelector("#dispatch-staff-window").innerHTML;
var compiledStaffTpl = juicer(staffTpl);
var html = compiledStaffTpl.render(res);
```