(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){e.exports=n(354)},353:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),s=n(10),c=n(11),l=n(27),u=n(18),m=n(28),p=n(145),h=n.n(p),d=n(146),f=n.n(d),g=n(58),y=n(46),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.store.example,t=e.isProcessing?r.a.createElement("div",null,r.a.createElement("p",null,"Now Loading...")):r.a.createElement("p",null,"Sleeping.");return r.a.createElement("div",{style:{color:"white"}},r.a.createElement("div",null,r.a.createElement("h3",null,"Home Menu")),r.a.createElement("div",null,r.a.createElement("h5",null,"Example Usages"),r.a.createElement(y.a,{onClick:function(){return e.startProcessing()}},"Start"),r.a.createElement(y.a,{onClick:function(){return e.stopProcessing()}},"Stop"),r.a.createElement("div",null,t,r.a.createElement("p",null,e.whoAmI))))}}]),t}(r.a.PureComponent),E=n(357),b=n(356),w=n(13),k=n(358),O=n(359),j=(E.a.Search,b.a.create({name:"LoginForm"})(function(e){var t=e.onSubmit,n=e.form,a=n.getFieldDecorator,i=n.getFieldError,o=n.isFieldTouched,s=o("username")&&i("username"),c=o("password")&&i("password");return r.a.createElement(b.a,{layout:"vertical",onSubmit:function(n){n.preventDefault(),e.form.validateFields(function(e,n){e||t(n)})}},r.a.createElement(b.a.Item,{validateStatus:s?"error":"",help:s||""},a("username",{rules:[{required:!1,message:"Please input your username!"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(b.a.Item,{validateStatus:c?"error":"",help:c||""},a("password",{rules:[{required:!1,message:"Please input your Password!"}]})(r.a.createElement(E.a,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(b.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Login")))})),A=function(e){var t=e.title,n=e.menuList,a=e.handleMenuClick,i=n.map(function(e,t){return r.a.createElement(k.b.Item,{title:e.title,key:t},e.title)}),o=r.a.createElement(k.b,{theme:"dark",onClick:a},i);return r.a.createElement(O.a,{overlay:o},r.a.createElement(y.a,{ghost:!0},t," ",r.a.createElement(w.a,{type:"down"})))},S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.store.updateUserInfo(e.username,e.password)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.store,t=e.username,n=e.status,a="Hello ".concat(t||"","!!"),i="fine"===n?"You look good today!!":"soso"===n?"Have a nice day!":"";return r.a.createElement("div",{style:{textAlign:"center",fontSize:"1.3rem"}},r.a.createElement("div",{style:{width:"50%",textAlign:"center",margin:"auto",marginTop:"20%"}},r.a.createElement("h3",{style:{color:"white"}},a),r.a.createElement("p",{style:{color:"white",margin:"0px"}},i),r.a.createElement(j,{onSubmit:this.onSubmit})))}}]),t}(r.a.PureComponent),C=n(158),P=n.n(C),I=function(e){var t=e.name,n=e.icon,a=e.onEnterKeyDown,i=e.text,o=e.idx,s=n||"user",c=i?r.a.createElement("span",null,o,r.a.createElement("span",{className:"console-input-log"},i)):r.a.createElement("span",null,P()().format("MMMM D H:mm:ss"),r.a.createElement("input",{onKeyDown:a,className:"console-input"}));return r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:"1rem"}},r.a.createElement(w.a,{className:"console-icon",type:s}),r.a.createElement("span",{className:"console-username"},t)),c)},x=function(e){var t=e.text;return r.a.createElement("div",{className:"response-log"},t)},N=n(355),H=function(e){var t=e.spinning;return r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{spinning:t}))},R=n(161),M=n(34),_=n.n(M),D=n(57),L=(n(324),function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"parse",value:function(e){return JSON.stringify(e)}}]),e}());L.URL={local:"http://localhost:8080",wf:"http://api.github.com"},L.option={mode:"cors"};var T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,null,[{key:"get",value:function(){var e=Object(D.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.URL.local,"/").concat(t)).then(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(L);T._name="Localhost Adapter";var U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,null,[{key:"get",value:function(){var e=Object(D.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.URL.wf,"/").concat(t),{mode:"cors"}).then(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"parse",value:function(e,n){try{return"".concat(n," > command: <").concat(e.cmd,"> result: ").concat(Object(R.a)(Object(u.a)(t),"parse",this).call(this,e.response))}catch(a){return"Internal ServerError"}}}]),t}(L);U._name="Github Adapter";var z=[{title:"Github",key:U},{title:"Localhost",key:T}],B=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onEnterKeyDown=function(e){var t=n.props,a=(t.user,t.terminal);if(13===e.keyCode){a.switchProcessingState(!0);var r=e.target.value;a.onEnterKeyDown(""!==r?r:" ").then(function(){a.switchProcessingState(!1)}),e.target.value=""}},n.adapterHandler=function(e){n.props.terminal.setAdapter(z[e.key].key)},n.actionHandler=function(e){n.props.terminal.handleAction(e.key)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.terminal.setAdapter(z[0].key)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.terminal,a=e.uiState,i=n.getHistories.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(I,{idx:n,text:e,name:t.username}))}),o=n.getResponses.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(x,{text:e}))}),s=0===o.length?r.a.createElement("div",null):r.a.createElement("ul",{style:{maxHeight:a.getHeight()/3},className:"response-console"},o);return r.a.createElement("div",null,r.a.createElement("div",{className:"console-header"},r.a.createElement("h3",{style:{color:"white"}},"Adapter: ",n.getAdapterName),r.a.createElement(A,{title:"ADAPTER",menuList:z,handleMenuClick:this.adapterHandler}),r.a.createElement(A,{title:"ACTION",menuList:n.actionEvents,handleMenuClick:this.actionHandler})),r.a.createElement("ul",{className:"console-list"},i,r.a.createElement("li",{key:1},r.a.createElement(I,{onEnterKeyDown:this.onEnterKeyDown,name:t.username}))),r.a.createElement("div",null,r.a.createElement(H,{spinning:n.isProcessing}),s))}}]),t}(r.a.PureComponent),K=n(4),W=Object(K.h)(function e(){var t=this;Object(s.a)(this,e),this.toggleSideBar=function(){t.manager.updateSize()},this.getSelectedItem=function(){return t.manager.getSelectedItem},this.setGoldenLayoutManager=function(e){t.manager=e},this.closeAll=function(){t.manager.closeAll()},this.openAll=function(e){t.manager.openAll(e)},this.getHeight=function(){return t.manager.getHeight()}},{toggleSideBar:K.d,getSelectedItem:K.d,closeAll:K.d,openAll:K.d}),q=function(){function e(){Object(s.a)(this,e),this.isProcessing=!1,this.who={name:"hoge",desc:"iam example stete class"}}return Object(c.a)(e,[{key:"startProcessing",value:function(){this.isProcessing=!0}},{key:"stopProcessing",value:function(){this.isProcessing=!1}},{key:"whoAmI",get:function(){var e=this.isProcessing?"Processing":"Sleeping";return"name <".concat(this.who.name,"> : description ").concat(this.who.desc," ").concat(e)}}]),e}(),F=Object(K.h)(q,{isProcessing:K.m,startProcessing:K.d,stopProcessing:K.d,whoAmI:K.e}),G=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"updateUserInfo",value:function(e,t){this.username=e,this.status=t}},{key:"getUserInfo",get:function(){return"NAME: ".concat(this.username," STATUS: ").concat(this.status)}}]),e}(),$=Object(K.h)(G,{username:K.m,status:K.m,updateUserInfo:K.d,getUserInfo:K.e}),J=function(){function e(){var t=this;Object(s.a)(this,e),this.histories=[],this.responses=[],this.isProcessing=!1,this.setAdapter=function(e){t.adapter=e},this.addReponse=function(e){t.responses.push(e)},this.parse=function(e,n){return t.adapter.parse(e,n)},this.switchProcessingState=function(e){t.isProcessing=e},this.onEnterKeyDown=function(){var e=Object(D.a)(_.a.mark(function e(n){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._sendRequest(n);case 2:return a=e.sent,t.histories.push(n),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.handleAction=function(e){t.actionEvents[e].func()},this._clearAll=function(){t._clearHistories(),t._clearResponses()},this._clearHistories=function(){t.histories=[]},this._clearResponses=function(){t.responses=[]},this._reCallHistory=function(e){console.log("Wait for release...")},this._sendRequest=function(){var e=Object(D.a)(_.a.mark(function e(n){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.adapter.get(n);case 2:return a=e.sent,t._receive(n,a),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this._receive=function(e,n){console.log(n),t.addReponse({cmd:e,response:n})},this.actionEvents=[{title:"Clear All",func:this._clearAll},{title:"Clear Text Console",func:this._clearHistories},{title:"Clear Result Console",func:this._clearResponses},{title:"Recall",func:this._reCallHistory}]}return Object(c.a)(e,[{key:"getAdapterName",get:function(){return this.adapter?this.adapter._name:""}},{key:"getHistories",get:function(){var e=this.histories.length;return this.histories.slice(e<10?0:e-10,e)||this.histories}},{key:"getResponses",get:function(){var e=this,t=this.responses.length;return(this.responses.slice(t<10?0:t-10,t)||this.responses).map(function(t,n){return e.parse(t,n)})}}]),e}(),Y=Object(K.h)(J,{histories:K.m,responses:K.m,adapter:K.m,isProcessing:K.m,getAdapterName:K.e,getHistories:K.e,onEnterClick:K.d,handleAction:K.d,setAdapter:K.d,addReponse:K.d,switchProcessingState:K.d}),Q={uiState:new W,example:new F,user:new $,terminal:new Y},V=[{title:"home",type:"react-component",key:"home",component:Object(g.a)(v),props:{store:Q}},{title:"Login",type:"react-component",key:"login",component:Object(g.a)(S),props:{store:Q.user}},{title:"Terminal",type:"react-component",key:"console",component:Object(g.a)(B),props:{user:Q.user,terminal:Q.terminal,uiState:Q.uiState}}],X=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"setInstance",value:function(e){this.instance=e,this.initialize()}},{key:"initialize",value:function(){this.registerComponent(),this.instance.init(),console.log("Successfully registered components!")}},{key:"registerComponent",value:function(){var e=this;V.forEach(function(t){e.instance.registerComponent(t.key,t.component)})}},{key:"updateSize",value:function(){this.instance.updateSize()}},{key:"getSelectedItem",value:function(){return this.instance.selectedItem}},{key:"getComponentConfig",value:function(){return V.map(function(e){return{title:e.title,key:e.key}})}},{key:"openPanel",value:function(e){var t=V.find(function(t){return t.key===e}),n={title:e,type:"react-component",component:e,props:t.props};this.instance.root.contentItems[0].addChild(n)}},{key:"closeAll",value:function(){var e=this.instance.root.contentItems||[];if(e.length>0)for(;e[0].contentItems.length>0;)e[0].removeChild(e[0].contentItems[0])}},{key:"openAll",value:function(){var e=this;V.forEach(function(t){e.openPanel(t.key)})}},{key:"getHeight",value:function(){return this.instance.height}}]),e}(),Z=n(160),ee=function(e){var t=e.isOpen,n=e.title,a=t?"folder-open":"folder";return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(w.a,{type:a,style:{marginRight:"3px"}}),n)},te=function(e){var t=e.closeAll,n=e.openAll;return r.a.createElement("div",null,r.a.createElement("ul",{className:"sidebar-menu"},r.a.createElement("li",{className:"sidebar-menu-item"},r.a.createElement(Z.a,{placement:"bottomRight",title:"Open All Tabs"},r.a.createElement("span",{onClick:n},r.a.createElement(w.a,{type:"folder-open"})))),r.a.createElement("li",{className:"sidebar-menu-item"},r.a.createElement(Z.a,{placement:"bottomRight",title:"Close All Tabs"},r.a.createElement("span",{onClick:t},r.a.createElement(w.a,{type:"close-square"}))))))},ne=X.getComponentConfig(),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickMenuItem=function(e){X.openPanel(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fit sidebar"},r.a.createElement("div",{className:"sidebar-title"},r.a.createElement("h4",null,"TITLE")),r.a.createElement(te,{openAll:this.props.openAll,closeAll:this.props.closeAll}),r.a.createElement("ul",{id:"menu-container"},ne.map(function(t){return r.a.createElement(re,{key:t.key,title:t.title,componentName:t.key,onClick:e.onClickMenuItem})})))}}]),t}(r.a.PureComponent),re=function(e){var t=e.title,n=e.onClick,a=e.componentName;return r.a.createElement("li",{className:"sidebar-tab-item",onClick:function(){return n(a)}},r.a.createElement(ee,{title:t,isOpen:!1}))},ie=ae,oe={settings:{hasHeaders:!0,constrainDragToContainer:!0,reorderEnabled:!0,selectionEnabled:!0,popoutWholeStack:!1,blockedPopoutsThrowError:!0,closePopoutsOnUnload:!0,showPopoutIcon:!0,showMaximiseIcon:!0,showCloseIcon:!0},dimensions:{borderWidth:10,minItemHeight:50,minItemWidth:50,headerHeight:20,dragProxyWidth:300,dragProxyHeight:200},labels:{close:"close",maximise:"maximise",minimise:"minimise",popout:"open in new window"},content:[{type:"row",isClosable:!1,content:[]}]},se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).node=r.a.createRef(),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=new h.a(oe,window.$("#gl-container"));X.setInstance(e),this.props.store.uiState.setGoldenLayoutManager(X)}},{key:"render",value:function(){var e=this,t=this.props.store,n=t.uiState,a=t.user;return r.a.createElement("div",{className:"fit"},r.a.createElement(f.a,{customClassName:"custom-splitter",percentage:!0,secondaryInitialSize:90,onDragEnd:n.toggleSideBar,primaryMinSize:0,secondaryMinSize:85},r.a.createElement(ie,{openAll:n.openAll,closeAll:n.closeAll,toggleSideBar:n.toggleSideBar}),r.a.createElement("div",{id:"gl-container"},r.a.createElement("div",{className:"container-header"},r.a.createElement("h4",null,a.username?"".concat(a.username,"$ ").concat(a.getUserInfo):"Please Login...")),r.a.createElement("div",{ref:function(t){return e.node=t}}))))}}]),t}(r.a.PureComponent);n(349),n(350),n(351),n(352),n(353);Object(g.a)(se);var ce=function(){return r.a.createElement("div",{className:"fit"},r.a.createElement(se,{store:Q,ref:r.a.createRef()}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(109),ue=n.n(le);window.React=r.a,window.ReactDOM=o.a,window.$=ue.a,o.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.834c9a93.chunk.js.map