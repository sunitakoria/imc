(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(18),a=c.n(s),l=c(19),o=c(20),i=c(21),h=c(23),j=c(22),r=(c(28),c(7)),d=c.n(r),b=c(52),O=c(53),u=c(0),x=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,c=e.target.value;n.setState(Object(l.a)({},t,c))},n.handleChange2=function(e){n.setState({reviewUpdate:e.target.value})},n.submit=function(){d.a.post("http://localhost:3001/insert",n.state).then((function(){alert("success post")})),console.log(n.state),document.location.reload()},n.delete=function(e){confirm("Do you want to delete? ")&&(d.a.delete("/api/delete/".concat(e)),document.location.reload())},n.edit=function(e){d.a.put("/api/update/".concat(e),n.state),document.location.reload()},n.state={setBookName:"",setIn:"",setOut:"",fetchData:[],fetchAll:[],reviewUpdate:""},n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:3001/get").then((function(t){e.setState({fetchData:t.data})})),d.a.get("http://localhost:3001/getAll").then((function(t){e.setState({fetchAll:t.data})}))}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(u.jsx)(b.a,{style:{width:"20rem"},children:Object(u.jsxs)(b.a.Body,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Entry"})}),Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("input",{name:"setBookName",placeholder:"Enter Name",onChange:this.handleChange}),Object(u.jsx)("input",{name:"setIn",placeholder:"Enter In",onChange:this.handleChange}),Object(u.jsx)("input",{name:"setOut",placeholder:"Enter Out",onChange:this.handleChange})]}),Object(u.jsx)(O.a,{className:"my-2",variant:"primary",onClick:this.submit,children:"Submit"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})}),Object(u.jsx)(b.a,{style:{width:"40rem"},children:Object(u.jsxs)(b.a.Body,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Today sell/stock"})}),Object(u.jsxs)("table",{class:"table",title:"hello",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Stock(In)"}),Object(u.jsx)("th",{scope:"col",children:"Stock(Out)"})]})}),Object(u.jsx)("tbody",{children:this.state.fetchData.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.id}),Object(u.jsx)("td",{children:e.book_name}),Object(u.jsx)("td",{children:e.book_in}),Object(u.jsx)("td",{children:e.book_out})]})})}))})]})]})}),Object(u.jsx)(b.a,{style:{width:"40rem"},children:Object(u.jsxs)(b.a.Body,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Stock in Hand"})}),Object(u.jsxs)("table",{class:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Stock(In)"}),Object(u.jsx)("th",{scope:"col",children:"Stock(Out)"})]})}),Object(u.jsx)("tbody",{children:this.state.fetchAll.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.id}),Object(u.jsx)("td",{children:e.book_name}),Object(u.jsx)("td",{children:e.book_in}),Object(u.jsx)("td",{children:e.book_out})]})})}))})]})]})})]})})}}]),c}(n.Component);c(49);a.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.bf8af0ae.chunk.js.map