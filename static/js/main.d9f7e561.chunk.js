(this["webpackJsonpproject-4-assessment"]=this["webpackJsonpproject-4-assessment"]||[]).push([[0],[,,,,,,,function(t,e,s){},,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),c=s(1),n=s.n(c),o=s(8),i=s.n(o),l=(s(14),s(2)),b=s(3),r=s(5),d=s(4),x=(s(15),s(16),function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).buttonClicked=function(e){if("1"===e.target.id){var s=t.state.box1;t.setState({box1:!s}),t.setState({box2:!1}),t.setState({box3:!1}),t.setState({box4:!1}),t.props.changeClass(e)}else if("2"===e.target.id){var a=t.state.box2;t.setState({box1:!1}),t.setState({box2:!a}),t.setState({box3:!1}),t.setState({box4:!1}),t.props.changeClass(e)}else if("3"===e.target.id){var c=t.state.box3;t.setState({box1:!1}),t.setState({box2:!1}),t.setState({box3:!c}),t.setState({box4:!1}),t.props.changeClass(e)}else if("4"===e.target.id){var n=t.state.box4;t.setState({box1:!1}),t.setState({box2:!1}),t.setState({box3:!1}),t.setState({box4:!n}),t.props.changeClass(e)}},t.state={active:!1,box1:!1,box2:!1},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"CircleSelector",children:[Object(a.jsx)("button",{onClick:this.buttonClicked,className:this.state.box1?"selected":null,id:"1",children:"1"}),Object(a.jsx)("button",{onClick:this.buttonClicked,className:this.state.box2?"selected":null,id:"2",children:"2"}),Object(a.jsx)("button",{onClick:this.buttonClicked,className:this.state.box3?"selected":null,id:"3",children:"3"}),Object(a.jsx)("button",{onClick:this.buttonClicked,className:this.state.box4?"selected":null,id:"4",children:"4"})]})}}]),s}(c.Component)),u=(s(7),function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).state={active:!1},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Circles",children:[Object(a.jsx)("div",{className:"1"===this.props.box?"selected":null,children:"1"}),Object(a.jsx)("div",{className:"2"===this.props.box?"selected":null,children:"2"}),Object(a.jsx)("div",{className:"3"===this.props.box?"selected":null,children:"3"}),Object(a.jsx)("div",{className:"4"===this.props.box?"selected":null,children:"4"})]})}}]),s}(c.Component)),h=function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).changeClass=function(e){console.log(e.target.id),t.setState({box:e.target.id})},t.state={selected:!1,box:!1,box2:!1,box3:!1,box4:!1},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:"UNIT 4 FINAL ASSESSMENT"}),Object(a.jsxs)("main",{children:[Object(a.jsx)(x,{changeClass:this.changeClass,className:this.state.box1?"selected":null}),Object(a.jsx)(u,{box:this.state.box})]})]})}}]),s}(c.Component),j=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(e){var s=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,o=e.getTTFB;s(t),a(t),c(t),n(t),o(t)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.d9f7e561.chunk.js.map