(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(t,e,n){t.exports=n.p+"static/media/logo.5857ad01.png"},190:function(t,e,n){t.exports=n(395)},195:function(t,e,n){},246:function(t,e){},247:function(t,e){},248:function(t,e){},266:function(t,e){},380:function(t,e){},394:function(t,e,n){},395:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),i=(n(195),n(399)),l=n(178),s=n.n(l),u=function(){return a.a.createElement("div",{className:"logo"},a.a.createElement("div",{className:"title"},a.a.createElement("img",{alt:"",src:s.a,width:100})," Convert css style to flutter style"),a.a.createElement("div",null,"Source code is here",a.a.createElement("a",{style:{padding:6},href:"https://github.com/tnfe/c2f",rel:"noopener noreferrer",target:"_blank"},"https://github.com/tnfe/c2f")))},d=n(15),f=n.n(d),h=n(39),p=n(5),g=n(6),v=n(38),m=n(37),k=n(179);n(197),n(198),n(199),n(200),n(201);var y=function(t){Object(v.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"onChange",value:function(t,e,n){this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){return a.a.createElement(k.UnControlled,{className:"code-mirror",value:this.props.value||"",options:Object.assign({theme:"monokai",tabSize:2,lineNumbers:!0},this.props.options),onChange:this.onChange.bind(this)})}}]),n}(a.a.Component),b=n(400),x=n(401),w=n(396),C=function(t){Object(v.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,null)}}]),n}(a.a.Component),E=n(398);E.a.config({duration:1,maxCount:3});var O=!0,S=function(t,e){O?O=!1:"success"===t?E.a.success(e):E.a.error(e)},V={success:function(t){S("success",t)},error:function(t){S("error",t)}},j=n(65),T=n.n(j),A=n(66),R=n.n(A),B=function(){function t(){Object(p.a)(this,t),this.decls=[]}return Object(g.a)(t,[{key:"add",value:function(t){var e=t.key,n=t.val,r=t.valueList,a=void 0===r?null:r,o=t.data,c=void 0===o?null:o;this.decls.push({data:c,valueList:a,key:e,val:n})}},{key:"isNull",value:function(){return 0===this.decls.length}},{key:"forEach",value:function(t){this.decls.forEach(function(e,n){return t(e,n)})}},{key:"merge",value:function(t){for(var e in t)this.add({key:e,val:t[e]})}},{key:"remove",value:function(t){for(var e=this.decls.length-1;e>=0;e--)this.decls[e].key===t&&this.decls.splice(e,1)}},{key:"getVal",value:function(t,e){var n=null;return this.decls.forEach(function(e){e.key===t&&(n=e.val)}),n||e}},{key:"clone",value:function(){var e=new t;return e.decls=R()(this.decls),e}}]),t}(),N=n(67),_=n.n(N),P=n(112),z=n.n(P),D=n(45),M=n.n(D),F=function(t){if(!t)return!0;if("string"===typeof t){if(""===t.trim())return!0;if("null"===t)return!0;if("none"===t)return!0;if("inhert"===t)return!0}return!1},$=function(t){if(M()(t))return t;var e=/([-0-9.]+)[a-zA-Z%]/gi.exec("".concat(t,"c"));return e&&e.length>=2?(t=e[1],t=M()(t)?t:parseFloat(t)):z()(t)},H=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=t.toString().replace(/deg$/g,"");return n=n*Math.PI/180,_.a.floor(n,e)},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=Math.pow(10,e);return Math.round(t*n)/n},L={background:["background-color","background-image","background-position","background-size","background-repeat"],"border-radius":["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],"text-decoration":["text-decoration-line","text-decoration-style","text-decoration-color"],border:["border-width","border-style","border-color"],padding:["padding-top","padding-right","padding-bottom","padding-left"],margin:["margin-top","margin-right","margin-bottom","margin-left"],font:["font-style","font-weight","font-size","font-family"]},Z=n(115),W=n.n(Z),U=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(t.getVal(e)){var a=Q(t);n=a,W()("#avator").removeClass().removeAttr("style").css(n),r.forEach(function(e){return G(t,e)}),t.remove(e)}return t},G=function(t,e){var n=J(t,e);F(n)||t.add({key:e,val:n})},J=function(t,e){var n=function(t){return W()("#avator").css(t)}(e);return F(n)&&(n=t.getVal(e)),n},Q=function(t){var e={};return t.forEach(function(t){var n=t.key,r=t.val;e[n]=r}),e},q=function(t){if(!t)return null;var e=t.clone();for(var n in L)e=U(e,n,L[n]);return e},K=function(t){return t?new Promise(function(e,n){var r=new B;t.walkDecls(function(t){var e=T.a.list.space(t.value);r.add({key:t.prop,val:t.value,data:t,valueList:e})}),setTimeout(function(t){t=q(t),e(t)},80,r)}):null},X="<-prop->",Y="<-children->",tt="<-decoration->",et="\n Container(\n  ".concat(Y,"\n  ").concat(X,"\n  ").concat(tt,"\n),\n").trim(),nt='\n Text(\n  "Hello World",\n  style: TextStyle(\n    '.concat(X,"\n  ),\n  ").concat("<-prop2->","\n),\n").trim(),rt=("\n Center(\n  ".concat(Y,"\n  ").concat(X,"\n),\n").trim(),"\n ROW(\n  ".concat(Y,"\n  ").concat(X,"\n),\n").trim()),at="\n COLUMN(\n  ".concat(Y,"\n  ").concat(X,"\n),\n").trim(),ot="\n Positioned(\n  ".concat(Y,"\n  ").concat(X,"\n),"),ct="\n Transform(\n  ".concat(Y,"\n  ").concat(X,"\n),"),it="\n Opacity(\n  ".concat(Y,"\n  ").concat(X,"\n),"),lt=function(){function t(e){Object(p.a)(this,t),this.lines=e||[]}return Object(g.a)(t,[{key:"add",value:function(t,e){var n=this.getIndexOf(t);n>-1?this.lines[n]=e:this.lines.push(e),this.enabled=!0}},{key:"isNull",value:function(){return 0===this.lines.length}},{key:"getIndexOf",value:function(t){for(var e=0;e<this.lines.length;e++)if(this.lines[e].indexOf("".concat(t,":"))>-1)return e;return-1}},{key:"getTabs",value:function(t){for(var e="",n=0;n<t;n++)e+="<-tab->";return e}},{key:"replaceTag",value:function(t,e){for(var n=R()(this.lines),r=0;r<this.lines.length;r++){this.lines[r].indexOf(t)>-1&&n.splice(r,0,e)}this.lines=n}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t)return this.lines.join("\n");var e=this.getTabs(t),n=this.lines.join("\n").split(/\n/g);return n.forEach(function(t,r){return n[r]=e+t}),n.join("\n")}}]),t}(),st=n(185),ut=n.n(st),dt=function(t){return M()(t)?t:function(t){return/^([0-9]+)$/gi.test(t.toString())}(t+="")?$(t):function(t){return/([0-9]+)%$/gi.test(t)}(t)?(t=$(t)/100,"_parent_ * ".concat(t," // percentage of parent width. like 'MediaQuery.of(context).size.width * 0.2'")):function(t){return/([0-9]+)(px|dpx)$/gi.test(t)}(t)?(t=$(t),t=ut()(t)?"".concat(t,".0"):"".concat(t)):function(t){return/([0-9]+)em$/gi.test(t)}(t)?(t=$(t),"_parent_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):function(t){return/([0-9]+)rem$/gi.test(t)}(t)?(t=$(t),"_root_font_width_ * ".concat(t," // https://www.w3.org/Style/Examples/007/units")):function(t){return/([0-9]+)pt$/gi.test(t)}(t)?(t=$(t),"".concat(t," * 72 / _dpi_ // pt = px * dpi / 72")):0},ft=n(186),ht=n.n(ft),pt=function(t){try{t="string"===typeof t?t.trim():t;var e=ht()(t).hex().replace(/^#/,"0x");return"Color(".concat(e,"00)")}catch(r){var n=(t+"").replace(/^#/,"0x");return"Color(".concat(n,"00)")}},gt=function(t,e){var n=e.getVal("border-width","1px"),r=e.getVal("border-color","blue"),a=e.getVal("border-style","solid");return n=dt(n),r=pt(r),"\nBorder.all(\n  color: ".concat(r,",\n  width: ").concat(n,",\n  style: BorderStyle.").concat(a,"\n)").trim()},vt=n(68),mt=n.n(vt),kt=function(t){t=Ct(t);var e=dt(t[0]),n=dt(t[1]),r="Offset(".concat(e,", ").concat(n,")"),a=pt(t[3]||"#000000"),o=dt(t[2]||10);return"\n  BoxShadow (\n    color: ".concat(a,",\n    offset: ").concat(r,",\n    blurRadius: ").concat(o,",\n  ),")},yt=0,bt={},xt=function(t){return t.replace(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/gi,function(t){var e="__".concat(yt++,"__");return bt[e]=t,e})},wt=function(t){for(var e in bt)t=t.replace(e,bt[e]);return t},Ct=function(t){var e=t.trim().split(" ");if(e.length>4){for(var n="",r=3;r<e.length;r++)n+=e[r];(e=e.slice(0,4))[3]=n}return e},Et=function(t){for(var e="",n=(t=xt(t)).split(","),r=0;r<n.length;r++){var a=wt(mt()(n[r]));e+="\n"+kt(a)}return"\n<BoxShadow>[\n".concat(e,"\n]").trim()},Ot=function(t,e){for(var n=0;n<e.length;n++)if(e[n].indexOf(t)>-1)return e[n];return null},St=function(t,e){if(!e)return null;var n=/[a-zA-Z]+\((.*)\)/.exec(e);if(n&&n.length>=2){var r=n[1],a=r.split(","),o=[];if("rotate"===t){var c=H(r);e=e.replace(r,c)}else{a.forEach(function(t){t=$(t),o.push(t)});var i=o.join(",");e=e.replace("3d","").replace(r,i)}}return e},Vt=function(t){if(t=mt()(t),/^matrix/gi.test(t))return t.replace("matrix","Matrix4");var e=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:")",n=t.split("".concat(e," ")),r=0;r<n.length;r++){var a=n[r];new RegExp("\\".concat(e,"$"),"gi").test(a)||(n[r]=a+e)}return n}(t),n=Ot("skew",e),r=Ot("scale",e),a=Ot("rotate",e),o=Ot("translate",e),c="";return n=St("skew",n),r=St("scale",r),a=St("rotate",a),o=St("translate",o),n&&(c+="".concat(n,"..")),r&&(c+="".concat(r,"..")),a&&(c+="".concat(a,"..")),o&&(c+="".concat(o,"..")),c=c.replace(/\.\.$/g,""),"Matrix4.".concat(c)},jt=function(t){return"bold"===t||"normal"===t?"FontWeight.".concat(t):/^[1-9]00/.test(t+"")?"FontWeight.w".concat(t):"FontWeight.normal"},Tt=function(t,e){var n="",r=e.getVal("max-width"),a=e.getVal("min-width"),o=e.getVal("max-height"),c=e.getVal("min-height");return r&&(n+="maxWidth: ".concat(dt(r))),a&&(n+=", minWidth: ".concat(dt(a))),o&&(n+=", maxHeight: ".concat(dt(o))),c&&(n+=", minHeight: ".concat(dt(c))),n=n.replace(/^,/g,""),"BoxConstraints(".concat(n,")")},At=function(t,e){var n=e.getVal("border-top-left-radius",0),r=e.getVal("border-top-right-radius",0),a=e.getVal("border-bottom-right-radius",0),o=e.getVal("border-bottom-left-radius",0);if(n===r&&r===a&&a===o)return"50%"===n?"BoxShape.circle":"BorderRadius.all(const Radius.circular(".concat(dt(n),"))");var c=dt(t[0]),i=dt(t[1]),l=dt(t[2]),s=dt(t[3]);return c="topLeft: Radius.circular(".concat(c,")"),i="topRight: Radius.circular(".concat(i,")"),l="bottomRight: Radius.circular(".concat(l,")"),s="bottomLeft: Radius.circular(".concat(s,")"),"BorderRadius.only(".concat(c,", ").concat(i,", ").concat(l,", ").concat(s,")")},Rt=function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},Bt=function(t){return t=t.replace(/flex-/,""),"".concat(Rt(t))},Nt=function(t,e,n){var r=n.getVal("".concat(t,"-top"),0),a=n.getVal("".concat(t,"-right"),0),o=n.getVal("".concat(t,"-bottom"),0),c=n.getVal("".concat(t,"-left"),0);return r===a&&a===o&&o===c?(r=dt(r),"const EdgeInsets.all(".concat(r,")")):(r=dt(r),a=dt(a),o=dt(o),c=dt(c),"const EdgeInsets.only(top: ".concat(r,", right: ").concat(a,", bottom: ").concat(o,", left: ").concat(c,")"))},_t=function(t,e){var n,r=[],a=t.replace(/^[a-zA-Z]+-gradient/gi,"").replace("(","").replace(")","").split(",");if(a.length>2){n=a[0].replace("to","").trim();for(var o=1;o<a.length;o++)r.push(pt(a[o]))}else{n="bottom";var c=a[0],i=a[1]||a[0];r.push(pt(c)),r.push(pt(i))}return"\nLinearGradient(\n  begin: Alignment(0.0, 0.0),\n  end: ".concat(zt(n),",\n  colors: [").concat(r,"],\n)").trim()},Pt=function(t,e){for(var n=[],r=t.replace(/^[a-zA-Z]+-gradient/gi,"").replace("(","").replace(")","").split(","),a=0;a<r.length;a++)/^(circle|farthest|closest|ellipse)/.test(r[a])||n.push(pt(r[a]));return"\nRadialGradient(\n  colors: [".concat(n,"]\n)").trim()},zt=function(t){var e;e=H("right"===t?90:"top"===t?0:"left"===t?-90:"bottom"===t?180:t,20),e-=Math.PI/2;var n=I(Math.cos(e)),r=I(Math.sin(e));return"Alignment(".concat(n,", ").concat(r,")")},Dt=function(t,e){t=t.replace(/^url\(/g,"").replace(/\)$/g,""),/^('|")/.test(t)||(t='"'.concat(t,'"'));var n=e.getVal("background-size","cover"),r=e.getVal("background-repeat","no-repeat");r=Rt(r);var a=e.getVal("background-position","center");return a=function(t){var e="";if(function(t){return t.indexOf("%")>0}(t))for(var n=t.split(" "),r=0;r<n.length;r++)0===r?"0%"===n[r]?e+="top":"50%"===n[r]?e+="center":e+="bottom":"0%"===n[r]?e+="-left":"50%"===n[r]?e+="-center":e+="-right";else e.replace(/\s/gi,"-");return e="centerCenter"===(e=Rt(e))?"center":e}(a),"\nDecorationImage(\n  image: ExactAssetImage(".concat(t,"),\n  fit: BoxFit.").concat(n,",\n  repeat: ImageRepeat.").concat(r,",\n)").trim()},Mt=function(t,e){return t=String(t),/^linear-gradient/gi.test(t)?_t(t,e):/^radial-gradient/gi.test(t)?Pt(t,e):Dt(t,e)},Ft=function(t){return/^("|')/gi.test(t)||(t='"'.concat(t,'"')),t},$t=function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){if(t===(e+1<1||arguments.length<=e+1?void 0:arguments[e+1]))return!0;if(Ht(t,e+1<1||arguments.length<=e+1?void 0:arguments[e+1]))return!0}return!1},Ht=function(t,e){var n=L[e];if(!n)return null;for(var r=0;r<n.length;r++)if(t===n[r])return e;return null},It=function(t){return"letter-spacing"===t?Rt(t):/^font-[a-zA-Z]+/gi.test(t)||/^text-[a-zA-Z]+/gi.test(t)?Rt(t):/^text-decoration.*/gi.test(t)?Rt(t.replace(/^text-/gi,"")):null},Lt=function(t,e,n){var r={key:null,val:e};switch(!0){case $t(t,"background-image"):r.key=/^[a-zA-Z]+-gradient/gi.test(e)?"gradient":"image",r.val=Mt(e,n);break;case $t(t,"background-color","color"):r.val=pt(e),r.key="rgba(0, 0, 0, 0)"===e?null:"color";break;case $t(t,"width","height"):case $t(t,"top","right","left","bottom"):r.key=t,r.val=dt(e);break;case $t(t,"max-width","min-width"):case $t(t,"max-height","min-height"):r.key="constraints",r.val=Tt(e,n);break;case $t(t,"text-decoration-line"):r.val="TextDecoration.".concat(Rt(e));break;case $t(t,"text-decoration-color"):r.val=pt(e);break;case $t(t,"text-decoration-style"):r.val="TextDecorationStyle.".concat(e);break;case $t(t,"text-align"):r.val="TextAlign.".concat(e);break;case $t(t,"font-style"):r.val="FontStyle.".concat(e);break;case $t(t,"font-weight"):r.val=jt(e);break;case $t(t,"font-size"):case $t(t,"letter-spacing"):r.val=dt(e);break;case $t(t,"font-family"):r.val=Ft(e);break;case $t(t,"padding","margin"):var a=t.replace(/-[a-zA-Z]+$/,"");r.key=a,r.val=Nt(a,e,n);break;case $t(t,"justify-content"):r.key="mainAxisAlignment",r.val="MainAxisAlignment.".concat(Bt(e));break;case $t(t,"align-items"):r.key="crossAxisAlignment",r.val="CrossAxisAlignment.".concat(Bt(e));break;case $t(t,"transform"):r.key="transform",r.val=Vt(e);break;case $t(t,"border-radius"):r.val=At(e,n),r.key="BoxShape.circle"===r.val?"shape":"borderRadius";break;case $t(t,"border"):r.key="border",r.val=gt(e,n);break;case $t(t,"box-shadow"):r.key="boxShadow",r.val=Et(e);break;case $t(t,"opacity"):r.key=t,r.val=e}var o=It(t);return o&&(r.key=o),r},Zt=function(){function t(e){switch(Object(p.a)(this,t),this.children=[],this.type=e,this.decls=null,this.parent=null,this.id=_.a.uuid(),e){case"container":this.template=et;break;case"position":this.template=ot;break;case"transform":this.template=ct;break;case"opacity":this.template=it;break;case"text":this.template=nt;break;case"row":this.template=rt;break;case"column":this.template=at;break;default:this.template=et}this.codeString="",this.prop=new lt,this.prop2=new lt,this.decoration=new lt,this.codelines=new lt(this.template.split(/\n/g))}return Object(g.a)(t,[{key:"addChild",value:function(t){this.children.indexOf(t)<0&&(this.children.push(t),t.parent=this)}},{key:"addChildTo",value:function(t){if(this.parent!==t){this.root=t,function e(n){n.parent?e(n.parent):t.addChild(n)}(this)}}},{key:"getRoot",value:function(){return this.root||this}},{key:"getDepth",value:function(){var t=0;return function e(n){n.parent&&(t++,e(n.parent))}(this),t}},{key:"setProp",value:function(t,e){var n=Lt(t,e,this.decls),r=n.key,a=n.val;if(r){var o="text"===this.type?"    ".concat(r,": ").concat(a,","):"".concat(r,": ").concat(a,",");this.prop.add(r,o)}}},{key:"setProp2",value:function(t,e){var n=Lt(t,e,this.decls),r=n.key,a=n.val;if(r){var o="text"===this.type?"  ".concat(r,": ").concat(a,","):"".concat(r,": ").concat(a,",");this.prop2.add(r,o)}}},{key:"setDecoration",value:function(t,e){var n=Lt(t,e,this.decls),r=n.key,a=n.val;if(r){var o="".concat(r,": ").concat(a,",");this.decoration.add(r,o)}}},{key:"clearAllPseudoTags",value:function(){this.codeString=this.codeString.replace(new RegExp(Y,"g"),"").replace(new RegExp("<-class->","g"),"").replace(new RegExp(X,"g"),"").replace(new RegExp("<-prop2->","g"),"").replace(new RegExp(tt,"g"),"").replace(new RegExp("<-tab->","g"),"  ")}},{key:"clearBlankLines",value:function(){for(var t=this.codeString.split(/\n/g),e=t.length-1;e>=0;e--){t[e].trim()||t.splice(e,1)}this.codeString=t.join("\n")}},{key:"selfToCodeString",value:function(){var t=this.getDepth();this.codeString=this.codelines.toString(t)}},{key:"childToCodeString",value:function(t){var e=t.toString().trim();this.replaceTag(Y,"  child: ".concat(e))}},{key:"propToCodeString",value:function(){if(!this.prop.isNull()){var t="text"===this.type?0:1;this.replaceTag(X,this.prop.toString(t))}}},{key:"prop2ToCodeString",value:function(){this.prop2.isNull()||this.replaceTag("<-prop2->",this.prop2.toString(0))}},{key:"decorationToCodeString",value:function(){if(!this.decoration.isNull()){var t=this.decoration.toString(2);t="  decoration: BoxDecoration(\n".concat(t,"\n  )"),this.replaceTag(tt,t)}}},{key:"replaceTag",value:function(t,e){this.codelines.replaceTag(t,e)}},{key:"toString",value:function(){if(this.children.length>0)if(1===this.children.length){var t=this.children[0];this.childToCodeString(t)}else for(var e=0;e<this.children;e++);return this.propToCodeString(),this.prop2ToCodeString(),this.decorationToCodeString(),this.selfToCodeString(),this.clearAllPseudoTags(),this.clearBlankLines(),this.codeString||""}}]),t}(),Wt=function(){function t(){Object(p.a)(this,t),this.cache={}}return Object(g.a)(t,[{key:"get",value:function(t){var e=t.type,n=t.target,r=this.cache,a="_".concat(n,".").concat(e);return r[a]||(r[a]=new Zt(e)),r[a]}}]),t}(),Ut=function(t){var e=t.key,n=t.val;t.decls;return!!/^flex/.test(e)||(!("display"!==e||!/flex/gi.test(n))||("justify-content"===e||"align-items"===e))},Gt=function(t){if(!t||t.isNull())return"";var e=new Zt("container");e.decls=t;var n=new Wt;return t.forEach(function(r,a){var o=r.key,c=r.val;if(function(t){var e=t.key,n=t.val,r=t.decls.getVal("position");return!(("absolute"!==r&&"fixed"!==r||"top"!==e&&"left"!==e&&"right"!==e&&"bottom"!==e)&&("position"!==e||"absolute"!==n&&"fixed"!==n))}({key:o,val:c,decls:t})){var i=n.get({target:"parent",type:"position"});i.setProp(o,c),e.addChildTo(i)}else if(function(t){var e=t.key;return t.val,t.decls,"opacity"===e}({key:o,val:c,decls:t})){var l=n.get({target:"parent",type:"opacity"});l.setProp(o,c),e.addChildTo(l)}else if(function(t){var e=t.key,n=t.val,r=t.decls;return!(!Ut({key:e,val:n,decls:r})||"row"!==r.getVal("flex-direction","row"))}({key:o,val:c,decls:t})){var s=n.get({target:"parent",type:"row"});s.setProp(o,c),e.addChildTo(s)}else if(function(t){var e=t.key,n=t.val,r=t.decls;return!(!Ut({key:e,val:n,decls:r})||"column"!==r.getVal("flex-direction","row"))}({key:o,val:c,decls:t})){var u=n.get({target:"parent",type:"column"});u.setProp(o,c),e.addChildTo(u)}else if(function(t){var e=t.key;return t.val,t.decls,!(!e||!/transform$/gi.test(e))}({key:o,val:c,decls:t})){var d=n.get({target:"parent",type:"transform"});d.setProp(o,c),e.addChildTo(d)}else if(function(t){return 0===t.indexOf("font")||0===t.indexOf("text-")||"color"===t||"letter-spacing"===t}(o)){var f=n.get({target:"child",type:"text"});["text-align"].indexOf(o)>-1?f.setProp2(o,c):f.setProp(o,c),e.addChild(f)}else!function(t){return"background-image"===t||"background-color"===t||"border"===t||"box-shadow"===t||t.indexOf("border")>=0}(o)?e.setProp(o,c):e.setDecoration(o,c)}),e.getRoot().toString()},Jt=function(){var t=Object(h.a)(f.a.mark(function t(e){var r,a,o,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T()([n(359)({})]).process(e);case 3:return r=t.sent,t.next=6,K(r.root);case 6:return a=t.sent,""!==(o=Gt(a))&&V.success("Has been converted successfully!"),t.abrupt("return",o);case 12:return t.prev=12,t.t0=t.catch(0),c=Qt(t.t0),V.error(c),t.abrupt("return","");case 17:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}(),Qt=function(t){var e;return"object"===typeof t?(t.message&&(e="C2F - Message: "+t.message,console.log("\n ".concat(e))),t.stack&&(e=e||"C2F - Convert css 2 flutter error !",console.log("\nC2F - Stacktrace:"),console.log("===================="),console.log(t.stack))):(e="C2F - Convert css 2 flutter error !",console.log("C2F - dumpError :: argument is not an object")),e},qt=Jt,Kt=function(t){Object(v.a)(n,t);var e=Object(m.a)(n);function n(t){var r;return Object(p.a)(this,n),(r=e.call(this,t)).cssOptions={mode:"css"},r.dartOptions={mode:"dart"},r.cssVal="",r.dartVal="",r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.cssVal="\nbackground-color: #e0e0e0;\nwidth: 320px;\nheight: 240px;\nborder:5px solid red;\nfont: 900 24px Georgia;\npadding: 2px 10px;\nmargin: 3px;\nborder-radius: 10px;\ntext-decoration: underline wavy red;\n    ".trim(),t.next=3,this.convertAndUpdateDartCoder();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"clearBtnClickHandler",value:function(t){this.updateCoder({cssVal:"",dartVal:""}),V.success("Cleared successfully")}},{key:"convertBtnClickHandler",value:function(){var t=Object(h.a)(f.a.mark(function t(e){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.convertAndUpdateDartCoder();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"codeChangeHadler",value:function(t){this.cssVal=t}},{key:"convertAndUpdateDartCoder",value:function(){var t=Object(h.a)(f.a.mark(function t(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qt(this.cssVal);case 2:e=t.sent,this.updateCoder({dartVal:e});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"updateCoder",value:function(t){var e=t.cssVal,n=t.dartVal;void 0!==n&&null!==n&&(this.dartVal=n),void 0!==e&&null!==e&&(this.cssVal=e),this.setState({})}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(C,null),a.a.createElement(b.a,null,a.a.createElement(x.a,{span:12,className:"coder-con"},a.a.createElement("div",{className:"coder-title"},"Css"),a.a.createElement(y,{options:this.cssOptions,value:this.cssVal,onChange:this.codeChangeHadler.bind(this)})),a.a.createElement(x.a,{span:12,className:"coder-con"},a.a.createElement("div",{className:"coder-title"},"Flutter"),a.a.createElement(y,{options:this.dartOptions,value:this.dartVal}))),a.a.createElement(b.a,{className:"btns"},a.a.createElement(w.a,{type:"danger",onClick:this.clearBtnClickHandler.bind(this)},"Clear"),a.a.createElement(w.a,{type:"primary",onClick:this.convertBtnClickHandler.bind(this)},"Convert")))}}]),n}(a.a.Component),Xt=(n(394),i.a.Content);var Yt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,null,a.a.createElement(Xt,null,a.a.createElement(u,null),a.a.createElement(Kt,null),a.a.createElement("div",{id:"avator"}))))};c.a.render(a.a.createElement(Yt,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.25c8057c.chunk.js.map