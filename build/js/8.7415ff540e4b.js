(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,n){"use strict";function i(e,t){return void 0===t&&(t={}),{type:e,data:t}}n.r(t),n.d(t,"changeLoginState",function(){return i})},236:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSIxNiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iMTQuMzQ0IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDY0IDY0KSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iNjQiIHI9IjEyLjUzMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NCA2NCkiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSIxMC43NSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgNjQgNjQpIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iMTAuMDYzIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2NCA2NCkiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSI4LjA2MyIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgNjQgNjQpIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iNi40MzgiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDY0IDY0KSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iNjQiIHI9IjUuMzc1IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDMxNSA2NCA2NCkiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0IDY0OzMxNSA2NCA2NDsyNzAgNjQgNjQ7MjI1IDY0IDY0OzE4MCA2NCA2NDsxMzUgNjQgNjQ7OTAgNjQgNjQ7NDUgNjQgNjQiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3MjBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+"},256:function(e,t,n){"use strict";n.r(t);n(198);var i=n(199),a=n.n(i),I=n(171),c=n.n(I),o=n(26),r=n.n(o),s=n(0),l=n.n(s),u=n(7),g=n.n(u),m=n(60),N=n(10),j={login:"http://"+window.location.host+"/mokeJson/login.json"},d=(n(100),n(101),n(202)),p=n.n(d),M=n(232),y=n.n(M);n(235);var S,b,w,Z=n(236),Y=n.n(Z),h=(n(163),n(186));n.d(t,"default",function(){return v});var v=Object(m.b)(null,function(e){return Object(N.bindActionCreators)(r()({},h),e)})((w=b=function(e){function t(t){var n;return(n=e.call(this,t)||this).goLogin=function(){var e,t,i,I,c=n.state,o=c.userName,r=c.userPwd;o?(r||alert("请输入密码"),n.setState({loading:!0}),(e={url:j.login,type:"get"},t=e.headers||{"Content-Type":"application/json;charset=utf-8"},i=e.body||{},I={url:e.url,method:e.type||"post",credentials:"include",headers:t,body:"get"===e.type||"head"===e.type?void 0:y()(i)},fetch(I.url,I).then(function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}).then(function(e){return e.json()}).then(function(e){return e.success?e.result:p.a.reject(e)}).catch(function(e){alert(e.msg||e.errorMsg||"网络异常，稍后再试"),p.a.reject(e)})).then(function(e){a()(function(){sessionStorage.setItem("username",e.name),n.setState({loading:!1}),n.props.history.push("/"),n.props.changeLoginState("CANCEL_LOGIN_STATE",e)},1500)}).catch(function(e){alert(e.errorMsg)})):alert("请输入用户名")},n.state={userName:"",userPwd:"",loading:!1},n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;document.addEventListener("keyup",function(t){13===t.keyCode&&e.goLogin()})},n.render=function(){var e=this,t=this.state,n=t.userName,i=t.userPwd,a=t.loading;return l.a.createElement("div",{id:"loginArea"},l.a.createElement("ul",{className:"loginContent"},l.a.createElement("li",{className:"title"},"React App Init"),l.a.createElement("li",{className:"userItemBox"},l.a.createElement("input",{type:"text",placeholder:"请输入用户名",value:n,onChange:function(t){return e.setState({userName:t.target.value})}}),l.a.createElement("input",{type:"password",placeholder:"请输入密码",value:i,onChange:function(t){return e.setState({userPwd:t.target.value})}})),a?l.a.createElement("li",{className:"loading"},l.a.createElement("img",{src:Y.a,alt:"loading"}),l.a.createElement("span",null,"登录中...")):l.a.createElement("li",{className:"loginBotton"},l.a.createElement("button",{type:"button",onClick:this.goLogin},"登录"))))},t}(s.Component),b.propTypes={changeLoginState:g.a.func,history:g.a.object},S=w))||S}}]);