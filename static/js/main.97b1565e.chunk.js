(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),c=n(10),l=n(12),s=n(17),u=n(15),m=n(18),p=n(84),h=n.n(p),d=n(85),f=n.n(d),g=n(47),E=n(155).a.Search,v=function(e){var t=e.placeholder,n=e.onSearch,a=e.width;return o.a.createElement(E,{placeholder:t,onSearch:n,onPressEnter:function(e){return n(e.target.value)},style:{width:"".concat(a,"px")}})},y=n(49),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.store.example,t=e.isProcessing?o.a.createElement("div",null,o.a.createElement("p",null,"Now Loading...")):o.a.createElement("p",null,"Sleeping.");return o.a.createElement("div",{style:{color:"white"}},o.a.createElement("div",null,o.a.createElement("h3",null,"Home Menu")),o.a.createElement("div",null,o.a.createElement("h5",null,"Example Usages"),o.a.createElement(y.a,{onClick:function(){return e.startProcessing()}},"Start"),o.a.createElement(y.a,{onClick:function(){return e.stopProcessing()}},"Stop"),o.a.createElement("div",null,t,o.a.createElement("p",null,e.whoAmI))))}}]),t}(o.a.PureComponent),w=n(2),k=Object(w.h)(function e(){var t=this;Object(c.a)(this,e),this.toggleSideBar=function(){t.manager.updateSize()},this.getSelectedItem=function(){return t.manager.getSelectedItem},this.setGoldenLayoutManager=function(e){t.manager=e},this.closeAll=function(){t.manager.closeAll()},this.openAll=function(e){t.manager.openAll(e)}},{toggleSideBar:w.d,getSelectedItem:w.d,closeAll:w.d,openAll:w.d}),O=function(){function e(){Object(c.a)(this,e),this.isProcessing=!1,this.who={name:"hoge",desc:"iam example stete class"}}return Object(l.a)(e,[{key:"startProcessing",value:function(){this.isProcessing=!0}},{key:"stopProcessing",value:function(){this.isProcessing=!1}},{key:"whoAmI",get:function(){var e=this.isProcessing?"Processing":"Sleeping";return"name <".concat(this.who.name,"> : description ").concat(this.who.desc," ").concat(e)}}]),e}(),j=Object(w.h)(O,{isProcessing:w.m,startProcessing:w.d,stopProcessing:w.d,whoAmI:w.e}),S={uiState:new k,example:new j},C=[{title:"Hoge_A",type:"react-component",key:"hogeA",component:function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"panel",className:"fit"},o.a.createElement("h2",null,"hogeA"),o.a.createElement(v,{width:100,onSearch:this.props.onSearch}))}}]),t}(o.a.PureComponent)},{title:"Hoge_B",type:"react-component",key:"hogeB",component:function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"panel",className:"fit"},o.a.createElement("h2",null,"hogeB"),o.a.createElement(v,{width:100,onSearch:this.props.onSearch}))}}]),t}(o.a.PureComponent)},{title:"home",type:"react-component",key:"home",component:Object(g.a)(b),props:{store:S,hoge:"c"}}],A=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"setInstance",value:function(e){this.instance=e,this.initialize()}},{key:"initialize",value:function(){this.registerComponent(),this.instance.init(),console.log("Successfully registered components!")}},{key:"registerComponent",value:function(){var e=this;C.forEach(function(t){e.instance.registerComponent(t.key,t.component)})}},{key:"updateSize",value:function(){this.instance.updateSize()}},{key:"getSelectedItem",value:function(){return this.instance.selectedItem}},{key:"getComponentKeys",value:function(){return C.map(function(e){return e.key})}},{key:"openPanel",value:function(e){var t=C.find(function(t){return t.key===e}),n={title:e,type:"react-component",component:e,props:t.props};this.instance.root.contentItems[0].addChild(n)}},{key:"closeAll",value:function(){var e=this.instance.root.contentItems||[];if(e.length>0)for(;e[0].contentItems.length>0;)e[0].removeChild(e[0].contentItems[0])}},{key:"openAll",value:function(){var e=this;C.forEach(function(t){e.openPanel(t.key)})}}]),e}(),P=n(16),I=n(156),x=function(e){var t=e.isOpen,n=e.onClick,a=e.text,i=t?"folder-open":"folder";return o.a.createElement("span",{onClick:n,style:{whiteSpace:"nowrap"}},o.a.createElement(P.a,{type:i,style:{marginRight:"3px"}}),a)},N=function(e){var t=e.closeAll,n=e.openAll;return o.a.createElement("div",null,o.a.createElement("ul",{className:"sidebar-menu"},o.a.createElement("li",{className:"sidebar-menu-item"},o.a.createElement(I.a,{placement:"bottomRight",title:"Open All Tabs"},o.a.createElement("span",{onClick:n},o.a.createElement(P.a,{type:"folder-open"})))),o.a.createElement("li",{className:"sidebar-menu-item"},o.a.createElement(I.a,{placement:"bottomRight",title:"Close All Tabs"},o.a.createElement("span",{onClick:t},o.a.createElement(P.a,{type:"close-square"}))))))},B=A.getComponentKeys(),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onClickMenuItem=function(e){A.openPanel(e)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"fit sidebar"},o.a.createElement("div",{className:"sidebar-title"},o.a.createElement("h4",null,"TITLE")),o.a.createElement(N,{openAll:this.props.openAll,closeAll:this.props.closeAll}),o.a.createElement("ul",{id:"menu-container"},B.map(function(t){return o.a.createElement(z,{key:t,onClick:e.onClickMenuItem,text:t})})))}}]),t}(o.a.PureComponent),z=function(e){var t=e.text,n=e.onClick;return o.a.createElement("li",{className:"sidebar-tab-item"},o.a.createElement(x,{text:t,isOpen:!1,onClick:function(){return n(t)}}))},H=M,R={settings:{hasHeaders:!0,constrainDragToContainer:!0,reorderEnabled:!0,selectionEnabled:!0,popoutWholeStack:!1,blockedPopoutsThrowError:!0,closePopoutsOnUnload:!0,showPopoutIcon:!0,showMaximiseIcon:!0,showCloseIcon:!0},dimensions:{borderWidth:10,minItemHeight:50,minItemWidth:50,headerHeight:20,dragProxyWidth:300,dragProxyHeight:200},labels:{close:"close",maximise:"maximise",minimise:"minimise",popout:"open in new window"},content:[{type:"row",isClosable:!1,content:[]}]},T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).node=o.a.createRef(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=new h.a(R,window.$("#gl-container"));A.setInstance(e),this.props.store.uiState.setGoldenLayoutManager(A)}},{key:"render",value:function(){var e=this,t=this.props.store.uiState;return o.a.createElement("div",{className:"fit"},o.a.createElement(f.a,{customClassName:"custom-splitter",percentage:!0,secondaryInitialSize:90,onDragEnd:t.toggleSideBar,primaryMinSize:0,secondaryMinSize:85},o.a.createElement(H,{openAll:t.openAll,closeAll:t.closeAll,toggleSideBar:t.toggleSideBar}),o.a.createElement("div",{id:"gl-container"},o.a.createElement("div",{className:"container-header"},o.a.createElement("h4",null,"\u79c1\u306e 2 \u3064\u306e\u4eba\u683c\u306b\u306f\u5171\u901a\u306e\u8a18\u61b6\u304c\u3042\u308b")),o.a.createElement("div",{ref:function(t){return e.node=t}}))))}}]),t}(o.a.PureComponent);n(149),n(150),n(151),n(152),n(153);Object(g.a)(T);var W=function(){return o.a.createElement("div",{className:"fit"},o.a.createElement(T,{store:S,ref:o.a.createRef()}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(65),L=n.n(D);window.React=o.a,window.ReactDOM=r.a,window.$=L.a,r.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,n){e.exports=n(154)}},[[96,1,2]]]);
//# sourceMappingURL=main.97b1565e.chunk.js.map