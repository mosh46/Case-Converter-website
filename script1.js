var x = window.matchMedia("(max-width: 480px)");

var jsConvert=function(){'use strict';function a(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a["default"]:a}function b(a,b){return b={exports:{}},a(b,b.exports),b.exports}var c="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,d=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/[^A-Za-z0-9]+/g,"$").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"$"+a}).toLowerCase().replace(/(\$)(\w)/g,function(c,d,a){return a.toUpperCase()}):""}});a(d);var e=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g,"_").toLowerCase():""}});a(e);var f=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"$").replace(/[^A-Za-z0-9]+/g,"$").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"$"+a}).toLowerCase().replace(/(\$)(\w?)/g,function(c,d,a){return a.toUpperCase()}):""}});a(f);var g=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g,".").toLowerCase():""}});a(g);var h=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g,"/").toLowerCase():""}});a(h);var i=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g," ").toLowerCase():""}});a(i);var j=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){if(void 0===a&&(a=""),!a)return"";var b=(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g," ").toLowerCase();return b.charAt(0).toUpperCase()+b.slice(1)}});a(j);var k=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return void 0===a&&(a=""),a?(a+"").replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g,"").replace(/([a-z])([A-Z])/g,function(c,d,a){return d+"_"+a.toLowerCase()}).replace(/[^A-Za-z0-9]+|_+/g," ").toLowerCase().replace(/( ?)(\w+)( ?)/g,function(d,e,a,b){return e+a.charAt(0).toUpperCase()+a.slice(1)+b}):""}});a(k);var l=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.isValidObject=b.isArrayObject=b.validateOptions=b.DefaultOption=void 0,b.DefaultOption={recursive:!1,recursiveInArray:!1},b.validateOptions=function(a){return void 0===a&&(a=b.DefaultOption),null==a.recursive?a=b.DefaultOption:null==a.recursiveInArray&&(a.recursiveInArray=!1),a},b.isArrayObject=function(a){return null!=a&&Array.isArray(a)},b.isValidObject=function(a){return null!=a&&"object"==typeof a&&!Array.isArray(a)}});a(l);var m=l.isValidObject,n=l.isArrayObject,o=l.validateOptions,p=l.DefaultOption,q=b(function(a,b){function d(a,b){if(void 0===b&&(b=l.DefaultOption),!l.isValidObject(a))return null;b=l.validateOptions(b);var c={};return Object.keys(a).forEach(function(f){var g=a[f],h=f.toLowerCase();b.recursive&&(l.isValidObject(g)?g=d(g,b):b.recursiveInArray&&l.isArrayObject(g)&&(g=e(g).map(function(a){var c=a;if(l.isValidObject(a))c=d(a,b);else if(l.isArrayObject(a)){var e=d({key:a},b);c=e.key}return c}))),c[h]=g}),c}var e=c&&c.__spreadArrays||function(){for(var b=0,c=0,d=arguments.length;c<d;c++)b+=arguments[c].length;for(var e=Array(b),f=0,c=0;c<d;c++)for(var g=arguments[c],a=0,h=g.length;a<h;a++,f++)e[f]=g[a];return e};Object.defineProperty(b,"__esModule",{value:!0}),b.default=d});a(q);var r=b(function(a,b){function d(a,b){if(void 0===b&&(b=l.DefaultOption),!l.isValidObject(a))return null;b=l.validateOptions(b);var c={};return Object.keys(a).forEach(function(f){var g=a[f],h=f.toUpperCase();b.recursive&&(l.isValidObject(g)?g=d(g,b):b.recursiveInArray&&l.isArrayObject(g)&&(g=e(g).map(function(a){var c=a;if(l.isValidObject(a))c=d(a,b);else if(l.isArrayObject(a)){var e=d({key:a},b);c=e.key}return c}))),c[h]=g}),c}var e=c&&c.__spreadArrays||function(){for(var b=0,c=0,d=arguments.length;c<d;c++)b+=arguments[c].length;for(var e=Array(b),f=0,c=0;c<d;c++)for(var g=arguments[c],a=0,h=g.length;a<h;a++,f++)e[f]=g[a];return e};Object.defineProperty(b,"__esModule",{value:!0}),b.default=d});a(r);var s=b(function(a,b){function e(a,b){if(void 0===b&&(b=l.DefaultOption),!l.isValidObject(a))return null;b=l.validateOptions(b);var c={};return Object.keys(a).forEach(function(g){var h=a[g],i=d.default(g);b.recursive&&(l.isValidObject(h)?h=e(h,b):b.recursiveInArray&&l.isArrayObject(h)&&(h=f(h).map(function(a){var c=a;if(l.isValidObject(a))c=e(a,b);else if(l.isArrayObject(a)){var d=e({key:a},b);c=d.key}return c}))),c[i]=h}),c}var f=c&&c.__spreadArrays||function(){for(var b=0,c=0,d=arguments.length;c<d;c++)b+=arguments[c].length;for(var e=Array(b),f=0,c=0;c<d;c++)for(var g=arguments[c],a=0,h=g.length;a<h;a++,f++)e[f]=g[a];return e};Object.defineProperty(b,"__esModule",{value:!0}),b.default=e});a(s);var t=b(function(a,b){function d(a,b){if(void 0===b&&(b=l.DefaultOption),!l.isValidObject(a))return null;b=l.validateOptions(b);var c={};return Object.keys(a).forEach(function(g){var h=a[g],i=e.default(g);b.recursive&&(l.isValidObject(h)?h=d(h,b):b.recursiveInArray&&l.isArrayObject(h)&&(h=f(h).map(function(a){var c=a;if(l.isValidObject(a))c=d(a,b);else if(l.isArrayObject(a)){var e=d({key:a},b);c=e.key}return c}))),c[i]=h}),c}var f=c&&c.__spreadArrays||function(){for(var b=0,c=0,d=arguments.length;c<d;c++)b+=arguments[c].length;for(var e=Array(b),f=0,c=0;c<d;c++)for(var g=arguments[c],a=0,h=g.length;a<h;a++,f++)e[f]=g[a];return e};Object.defineProperty(b,"__esModule",{value:!0}),b.default=d});a(t);var u=b(function(a,b){function d(a,b){if(void 0===b&&(b=l.DefaultOption),!l.isValidObject(a))return null;b=l.validateOptions(b);var c={};return Object.keys(a).forEach(function(g){var h=a[g],i=f.default(g);b.recursive&&(l.isValidObject(h)?h=d(h,b):b.recursiveInArray&&l.isArrayObject(h)&&(h=e(h).map(function(a){var c=a;if(l.isValidObject(a))c=d(a,b);else if(l.isArrayObject(a)){var e=d({key:a},b);c=e.key}return c}))),c[i]=h}),c}var e=c&&c.__spreadArrays||function(){for(var b=0,c=0,d=arguments.length;c<d;c++)b+=arguments[c].length;for(var e=Array(b),f=0,c=0;c<d;c++)for(var g=arguments[c],a=0,h=g.length;a<h;a++,f++)e[f]=g[a];return e};Object.defineProperty(b,"__esModule",{value:!0}),b.default=d});a(u);var v=b(function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.pascalKeys=b.snakeKeys=b.camelKeys=b.upperKeys=b.lowerKeys=b.toLowerCase=b.toUpperCase=b.toHeaderCase=b.toSentenceCase=b.toTextCase=b.toPathCase=b.toDotCase=b.toPascalCase=b.toSnakeCase=b.toCamelCase=void 0,b.toCamelCase=d.default,b.toSnakeCase=e.default,b.toPascalCase=f.default,b.toDotCase=g.default,b.toPathCase=h.default,b.toTextCase=i.default,b.toSentenceCase=j.default,b.toHeaderCase=k.default,b.lowerKeys=q.default,b.upperKeys=r.default,b.camelKeys=s.default,b.snakeKeys=t.default,b.pascalKeys=u.default;var c=function(a){return((a||"")+"").toLowerCase()};b.toLowerCase=c;var l=function(a){return((a||"")+"").toUpperCase()};b.toUpperCase=l;var m={toCamelCase:d.default,toSnakeCase:e.default,toPascalCase:f.default,toDotCase:g.default,toPathCase:h.default,toTextCase:i.default,toSentenceCase:j.default,toHeaderCase:k.default,toUpperCase:l,toLowerCase:c,lowerKeys:q.default,upperKeys:r.default,camelKeys:s.default,snakeKeys:t.default,pascalKeys:u.default};b.default=m});a(v);var w=v.pascalKeys,x=v.snakeKeys,y=v.camelKeys,z=v.upperKeys,A=v.lowerKeys,B=v.toLowerCase,C=v.toUpperCase,D=v.toHeaderCase,E=v.toSentenceCase,F=v.toTextCase,G=v.toPathCase,H=v.toDotCase,I=v.toPascalCase,J=v.toSnakeCase,K=v.toCamelCase;return v}();


function myFunction(x){
    if(x.matches){
    $("#textbx").css({
        "margin-top": "15vh"
    })
    $("#btns").css({
        "margin-left": "4vh"
    })
    $("#head").animate({
        height: "20vh"
    }, 2000);}
    else{
        $("#head").animate({
            height: "12vh"
        }, 2000);
    }
    $("#h").animate({
        opacity:100
    }, 10000);
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction2() {
    /* Get the text field */
    var Text = document.getElementById("textbx");
  
    /* Select the text field */
    Text.select();
    Text.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(Text.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + Text.value);
  }

function upper() {
    let text = document.getElementById("textbx").value;
    up = text.toUpperCase()
    document.getElementById("textbx").value = up;
    console.log(up);
};

function Capitalizeit() {
    let text = document.getElementById("textbx").value;
    // let ans = jsConvert.toPascalCase(text);
    let arr = text.split("\n")
    arr_ans = []
    ans = ""
    arr.forEach(myfunc);
    function myfunc(char){
    let ans = jsConvert.toHeaderCase(char);
    arr_ans.push(ans)
    };
    console.log(arr_ans);
    arr_ans.forEach(func2);
    function func2(char, i){
        if(i==0){
            ans = char;
        }
        else{
            ans += "\n" + char;
        } 
    };
    document.getElementById("textbx").value = ans;
    console.log(ans);
};

function lower() {
    let text = document.getElementById("textbx").value;
    up = text.toLowerCase()
    document.getElementById("textbx").value = up;
    console.log(up);
};