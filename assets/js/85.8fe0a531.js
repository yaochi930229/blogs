(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{339:function(e,t,a){"use strict";a.r(t);var r=a(9),v=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mvc、mvp、mvvm区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc、mvp、mvvm区别","aria-hidden":"true"}},[e._v("#")]),e._v(" MVC、MVP、MVVM区别")]),e._v(" "),a("p",[e._v("软件中最核心的，最基本的东西是什么? 是数据，我们写的所有代码，都是围绕数据的。")]),e._v(" "),a("p",[e._v("围绕着数据的产生、修改等变化，出现了业务逻辑。")]),e._v(" "),a("p",[e._v("围绕着数据的显示，出现了不同的界面技术。")]),e._v(" "),a("h2",{attrs:{id:"mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),a("p",[e._v("网上很多资料对MVC看似有矛盾，其实是因为MVC模式主流分为"),a("code",[e._v("主动MVC")]),e._v("和"),a("code",[e._v("被动MVC")]),e._v("两种。")]),e._v(" "),a("h3",{attrs:{id:"主动mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" 主动MVC")]),e._v(" "),a("p",[e._v("主动MVC也是对应着传统MVC理论思想，其中的主动是表示，Model变化会主动通知View更新。")]),e._v(" "),a("p",[a("code",[e._v("Modal")]),e._v(": 封装与应用程序的业务逻辑相关的数据以及对数据的处理方法。不要认为Modal是数据库的Entity层，其实理解为业务层更恰当。")]),e._v(" "),a("p",[a("code",[e._v("View")]),e._v(": 负责数据的展示，因为是Modal主动更新View，所以View需要事先订阅Modal的变化")]),e._v(" "),a("p",[a("code",[e._v("Controller")]),e._v(": M和V之间的连接器，接受View层的变化并更新到Modal上")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.nodejitsu.com/content/images/2014/Feb/mvc.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"被动mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被动mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" 被动MVC")]),e._v(" "),a("p",[e._v("这是常规Web MVC框架使用的模式，如ASP .NET MVC，Struts。Controller是一个核心层，负责管理View和Modal。")]),e._v(" "),a("p",[e._v("被动MVC中，模型Modal对视图View和控制器Controller一无所知，仅仅是被使用。视图也不会主动订阅Modal的更新。视图的显示是根据控制器来决定。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/48696408-d2857080-ec1c-11e8-8a8a-ce665ba00fc1.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"实际项目应用mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际项目应用mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" 实际项目应用MVC")]),e._v(" "),a("p",[e._v("实际项目中，对MVC的应用往往采用更灵活的方式，除了每层各司其职外，还需要加入用户的交互指令。")]),e._v(" "),a("p",[e._v("如果你熟悉"),a("code",[e._v("ASP .NET MVC")]),e._v("，一定对以下这张图不陌生。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/48696231-46734900-ec1c-11e8-9f95-c1edee6d0abf.png",alt:"image"}})]),e._v(" "),a("p",[e._v("如果你熟悉"),a("code",[e._v("Backbond")]),e._v("，则更复杂些。用户既可以通过发送DOM事件到View，View再要求Model发生改变。也可以通过URL改变触发Controller层，从而改变View。Backbond View层比较重而Controller比较轻。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/48553500-b4ff9080-e916-11e8-93b3-7b1d33ae9326.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"mvp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvp","aria-hidden":"true"}},[e._v("#")]),e._v(" MVP")]),e._v(" "),a("p",[e._v("MVP是MVC的一种变种，其跟传统的MVC不同的表现在:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("View层和Modal层没有直接关系，都是通过Presenter传递")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Presenter与View层通信是双向的")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.nodejitsu.com/content/images/2014/Feb/mvp.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),a("p",[e._v("MVVM跟MVP基本类似，Presenter替换为ViewModal。其区别是"),a("strong",[e._v("MVVM通过双向数据绑定(通过事件同步到ViewModal和View)来进行View和ViewModal的同步")]),e._v("。Vue、Angular、Ember都是采用这种模式。")]),e._v(" "),a("p",[e._v("MVVM使得前后端分离更加彻底。前端不再仅仅是UI层展示，可以将后端更多的业务逻辑搬到前端进行处理，后台除了提供常规的数据库业务数据，有更多的精力去专注于保持系统稳定和可扩展性。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://blog.nodejitsu.com/content/images/2014/Feb/mvvm.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"参考文章："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章：","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考文章：")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰 MVC，MVC，MVP 和 MVVM 的图示"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.nodejitsu.com/scaling-isomorphic-javascript-code/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaling Isomorphic Javascript Code"),a("OutboundLink")],1)])])},[],!1,null,null,null);v.options.__file="different MVC、MVP、MVVM.md";t.default=v.exports}}]);