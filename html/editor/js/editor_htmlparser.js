(function(){function k(a){var d={};a=a.split(",");for(var c=0;c<a.length;c++)d[a[c]]=!0;return d}var r=50,t=/^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,w=/^<\/([-A-Za-z0-9_:@.]+)[^>]*>/,y=/([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,u=/^<([-A-Za-z0-9_:-]+)((?:\s+[a-zA-Z_0-9:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,z=/([-A-Za-z0-9_:-]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
A=k("colgroup,col"),B=k("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");k("area,base,basefont,br,col,frame,img,input,isindex,link,meta,param,embed");var C=k("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul,h1,h2,h3,h4,h5,h6,figure"),x=!1,n="a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var",
q=k(n),D=k("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),E=k("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),F=k("");"undefined"==typeof DEXT5_EDITOR&&(DEXT5_EDITOR={});DEXT5_EDITOR.HTMLParser=function(a,d,c){function g(a,b,f,d){b=b.toLowerCase();if(C[b]){for("table"!=h.last()&&"tbody"!=h.last()||"td"!=b||g("","tr","","");h.last()&&q[h.last()];)e("",h.last());"p"!=h.last()||"table"!=b&&"hr"!=b&&"center"!=b&&"figure"!=b||e("","p")}D[b]&&
h.last()==b&&e("",b);(d=B[b]||!!d)||h.push(b);if(c.start){var l=[];a=t.test(a)?y:z;f.replace(a,function(a,b,c,f,d){c=c?c:f?f:d?d:E[b]?b:"";f="";""!=a&&(a=a.substring(a.indexOf(b)+b.length),a=a.substring(a.indexOf("=")+1),a=a.replace(/^\s+/,""),f=a.substring(0,1),"'"!=f&&'"'!=f&&(f=""));l.push({name:b,value:c,escaped:c.replace(/(^|[^\\])"/g,'$1\\"'),quotationmark:f})});c.start&&c.start(b,l,d)}}function e(a,b){if(b)for(b=b.toLowerCase(),f=h.length-1;0<=f&&h[f]!=b;f--);else var f=0;if(0<=f){for(var d=
h.length-1;d>=f;d--)c.end&&c.end(h[d]);h.length=f}}var b,f,h=[],n=a;for(h.last=function(){return this[this.length-1]};a;){f=!0;if(h.last()&&F[h.last()])a=a.replace(new RegExp("(.*)</"+h.last()+"[^>]*>"),function(a,b){b=b.replace(/\x3c!--(.*?)--\x3e/g,"$1").replace(/<!\[CDATA\[(.*?)]]\x3e/g,"$1");c.chars&&c.chars(b);return""}),e("",h.last());else{var l=a.indexOf("<");b=a.indexOf(">")+1;var m=a.substring(l,b);if(0==a.indexOf("\x3c!--"))b=a.indexOf("--\x3e"),0<=b&&(c.comment&&c.comment(a.substring(4,
b)),a=a.substring(b+3),f=!1);else if(0==a.toLowerCase().indexOf("<?xml"))b=a.indexOf("/>"),0<=b&&(a=a.substring(b+2),f=!1);else if(0!=a.indexOf("<")&&"</"+h.last()+">"==m.replace(/ /ig,""))f=a.substring(0,l),a=a.substring(b),a=f+"</"+h.last()+">"+a,f=!0;else if(0==a.indexOf("</")){if(b=a.match(w))a=a.substring(b[0].length),b[0].replace(w,e),f=!1}else if(0==a.indexOf("<"))if(b=a.match(t))a=a.substring(b[0].length),b[0].replace(t,g),f=!1;else if(b=a.match(u))a=a.substring(b[0].length),b[0].replace(u,
g),f=!1;else{if("1"==DEXTTOP.G_CURREDITOR._config.removeIncorrectAttribute&&(b=a.indexOf("<"),m=a.indexOf(">"),0==b&&0<m)){var p=a.substring(0,m+1),k=l=b=0;0<p.indexOf('\ub9d1\uc740=""')?(b=p.indexOf('\ub9d1\uc740=""'),l=5,k=p.split('\ub9d1\uc740=""').length):0<p.indexOf("\ub9d1\uc740=''")&&(b=p.indexOf("\ub9d1\uc740=''"),l=5,k=p.split("\ub9d1\uc740=''").length);if(2==k&&0<b&&(m=a.substring(m+1),k=p.substring(0,b).lastIndexOf(" "),k<b+l))if(a=p.substring(k,b+l),p=p.replace(a,""),a=p+m,b=a.match(t))a=
a.substring(b[0].length),b[0].replace(t,g),f=!1;else if(b=a.match(u))a=a.substring(b[0].length),b[0].replace(u,g),f=!1}l=/^<([-a-zA-Z._]*@[-a-zA-Z._]*)()>/;if(b=a.match(l))a=a.substring(b[0].length),b[0].replace(l,g),f=!1}f&&(b=a.indexOf("<"),f=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),c.chars&&(h.last()&&q[h.last()]&&"textarea"!=h.last()&&"script"!=h.last()&&0>h.indexOf("pre")&&0>h.indexOf("xmp")&&(b=!1,l=RegExp("\\S\\n","g"),l.test(f)&&(b=!0),l=RegExp("\\n\\S","g"),l.test(f)&&(b=!0),l=RegExp("\\S\\n\\S",
"g"),l.test(f)&&(b=!0),b?f=f.replace(/\n/g," "):(l=RegExp("\\n\\n","g"),l.test(f)&&""==f.trim()?f=f.replace(/\n\n/g,""):f==unescape("%20%20")&&(b=new RegExp(unescape("%20"),"g"),f=f.replace(b,"&nbsp;")))),"1"==DEXTTOP.G_CURREDITOR._config.replaceSpace&&d&&(b=new RegExp(unescape("%20%20"),"g"),f=f.replace(b,"&nbsp; ")),c.chars(f)))}if(a==n)throw"Parse Error: "+a;n=a}e()};DEXT5_EDITOR.HTMLParser.HTMLtoXML=function(a,d){var c="",g=DEXTTOP.G_CURREDITOR._config.skipTagInParser;if(""!=g&&0==x){n=n.replace(/,/g,
",,");n=","+n+",";for(var g=g.split(","),e=g.length,b=0;b<e;b++)n=n.replace(","+g[b]+",","");n=n.replace(/,,/g,",");n=n.replace(/^,/g,"");n=n.replace(/,$/g,"");q=k(n);x=!0}DEXT5_EDITOR.HTMLParser(a,d,{start:function(a,b,d){c+="<"+a;for(a=0;a<b.length;a++)c="href"==b[a].name||"src"==b[a].name?c+(" "+b[a].name+"="+b[a].quotationmark+b[a].value+b[a].quotationmark):""!=b[a].quotationmark?c+(" "+b[a].name+"="+b[a].quotationmark+b[a].value+b[a].quotationmark):c+(" "+b[a].name+'="'+b[a].escaped+'"');c+=
(d?"/":"")+">"},end:function(a){A[a]||(c+="</"+a+">")},chars:function(a){c+=a},comment:function(a){c="0"==DEXTTOP.G_CURREDITOR._config.removeComment?c+("\x3c!--"+a+"--\x3e"):c+""}});return c};DEXT5_EDITOR.HTMLParser.RemoveOfficeTag=function(a,d){if(""==a||void 0==a)return"";a=DEXT5_EDITOR.HTMLParser.RemoveOfficeTag2(a);a=DEXTTOP.DEXT5.util.replaceOneSpaceToNbsp(a);d&&(a=a.replace(/(<span[^>]*>)\s<\/span>/gi,"$1&nbsp;</span>"),a=a.replace(/>\s+</g,"><"));return a};DEXT5_EDITOR.HTMLParser.RemoveOfficeTag2=
function(a){var d=RegExp("<o:p></o:p>","gi");a=a.replace(d,"");d=RegExp("<o:p>\\s+</o:p>","gi");a=a.replace(d,"");d=RegExp("<o:p ([^>]+)></o:p>","gi");a=a.replace(d,"");d=RegExp("<o:p ([^>]+)>\\s+</o:p>","gi");a=a.replace(d,"");d=RegExp("<w:sdt[^>]*>","gi");a=a.replace(d,"");d=RegExp("</w:sdt>","gi");a=a.replace(d,"");if("1"==DEXTTOP.G_CURREDITOR._config.removeLangAttribute&&(d=RegExp('<[^>]+(lang=["]?en-us["])[^>]*>',"gi"),d=a.match(d)))for(var c=d.length,g=0;g<c;g++){var e=d[g],b=RegExp('\\slang=[\\"]?en-us[\\"]?',
"gi"),e=e.replace(b,"");a=a.replace(d[g],e)}d=RegExp("<[^>]+(mso)[^>]*>","gi");if(d=a.match(d))for(c=d.length,g=0;g<c;g++)e=d[g],"1"==DEXTTOP.G_CURREDITOR._config.removeMsoClass&&(b=RegExp('\\sclass=[\\"]?(mso)\\w+[\\"]?',"gi"),e=e.replace(b,"")),e=e.replace(/&quot;/gi,"^"),b=RegExp('(\\s+)?mso-number-format:(\\s+)?"(.+?)"(\\s+)?;',"gi"),e=e.replace(b,""),b=RegExp('(\\s+)?mso-number-format:(\\s+)?"(.+?)"(\\s+)?;?',"gi"),e=e.replace(b,""),b=RegExp("\\s?mso-[\\w\uac00-\ud7a3\\-: ?'\"\\^@%\\.\\\\_]+; ?",
"gi"),e=e.replace(b,""),b=RegExp("\\s?mso-[\\w\uac00-\ud7a3\\-: ?]+(['\"])","gi"),e=e.replace(b,"$1"),e=e.replace(/\^/gi,"&quot;"),a=a.replace(d[g],e);d=RegExp("<v:shapetype ([^>]+)>[\\s\\S]*?</v:shapetype>","gi");a=a.replace(d,"");d=RegExp("<v:shape [^>]+>[\\s\\S]*?(<img [^>]+>)*?</v:shape>","gi");a=a.replace(d,"$1");d=RegExp("<v:shape ([^>]+)>[\\s\\S]*?</v:shape>","gi");a=a.replace(d,"");return a=a.replace(/<\!\[if ppt\]>/gi,"")};DEXT5_EDITOR.HTMLParser.CheckNeedNestedHTML=function(a,d,c){var g=
!1;"undefined"!=typeof d&&""!=d&&(r=d);d=[];var e="p";"undefined"!=typeof c&&""!=c&&(e=c);c=e.split(",");var b=c.length;if(1<b)for(e=0;e<b;e++){var f=a.getElementsByTagName(c[e]);try{d=d.concat(Array.prototype.slice.call(f,0))}catch(h){for(var k=f.length,l=0;l<k;l++)d.push(f[l])}}else d=a.getElementsByTagName(e);e=0;for(a=d.length;e<a;e++)if(DEXT5_EDITOR.HTMLParser.GetChildrenCount(d[e],!0)>r){g=!0;break}return g};DEXT5_EDITOR.HTMLParser.GetChildrenCount=function(a,d){var c=0;a.childNodes&&(c=DEXT5_EDITOR.HTMLParser.getChildrenCountForNestedHTML(a,
d)-a.childNodes.length);return c};DEXT5_EDITOR.HTMLParser.getChildrenCountForNestedHTML=function(a,d){for(var c=0,g=a.childNodes.length,e=0;e<g;e++)1==a.childNodes[e].nodeType&&-1<",p,span,div,strong,b,".indexOf(","+a.childNodes[e].tagName.toLowerCase()+",")&&(d&&(c+=DEXT5_EDITOR.HTMLParser.getChildrenCountForNestedHTML(a.childNodes[e],d)),c++);return c};DEXT5_EDITOR.HTMLParser.CleanNestedHtml=function(a,d,c,g,e){function b(a){for(var b="",c=Array(a.childNodes.length),d=0;d<c.length;d++){c[d]=[];
c[d].push(a.childNodes[d]);f(a.childNodes[d],c[d]);var e=d,g=c[d],h=[],l=0;a:for(;l<g.length;l++){for(var k=0;k<h.length;k++)if(h[k]==g[l])continue a;h[h.length]=g[l]}c[e]=h;b+=c[d].join("")}return b}function f(a,b){for(var c=a.childNodes,d=0;d<c.length;d++)b.push(c[d]),c[d].hasChildNodes()&&f(c[d],b);for(var c=0,e;c<b.length;c++){d=b[c];if(1==d.nodeType){e=d.nodeName;if(-1==(" "+l.join(" ").toUpperCase()+" ").search(" "+e.toUpperCase()+" ")){b.splice(c,1);c--;continue}e=d;for(var g="",k=0,m=void 0;k<
e.attributes.length;k++)m=e.attributes[k],1==m.specified&&("style"==m.name?(m=h(e),""!=m&&(g+=' style="'+h(e)+'"')):""!=m.value&&(g+=" "+m.name+'="'+m.value+'"'));e=g;d="<"+d.nodeName.toLowerCase()+e+">"}else 3==d.nodeType&&(d=d.nodeValue.replace(/\n/g,""),d=d.replace(/</g,"&lt;"),d=d.replace(/>/g,"&gt;"));b[c]=d}return b}function h(a){for(var b="",d=0,c=k.length,e;d<c;d++)a.currentStyle?e=a.currentStyle[k[d]]:window.getComputedStyle&&(e=document.defaultView.getComputedStyle(a,null).getPropertyValue(k[d])),
b+=k[d]+":"+e+";";return b}var k=[],l="p a abbr acronym applet b basefont bdo big br button cite code del dfn em font i iframe img input ins kbd label map object q s samp script select small strike strong sub sup textarea tt u var".split(" ");"undefined"!=typeof c&&""!=c&&(r=parseInt(c));c="p";"undefined"!=typeof g&&""!=g&&(c=g);g=a._DOC;"undefined"!=typeof e&&""!=e&&(g=e);var m=[];e=c.split(",");var p=e.length;if(1<p)for(c=0;c<p;c++){var n=g.getElementsByTagName(e[c]);try{m=m.concat(Array.prototype.slice.call(n,
0))}catch(t){for(var u=n.length,q=0;q<u;q++)m.push(n[q])}}else m=g.getElementsByTagName(c);e=!1;c=0;for(p=m.length;c<p;c++)if(DEXT5_EDITOR.HTMLParser.GetChildrenCount(m[c],!0)>r){e=!0;break}if(e)if(g&&g!=a._DOC)try{c=0;for(var p=m.length,v;c<p;c++)DEXT5_EDITOR.HTMLParser.GetChildrenCount(m[c],!0)>r&&(v=b(m[c]),v=DEXT5_EDITOR.HTMLParser.HTMLtoXML(v),m[c].innerHTML=v);return g.innerHTML}catch(w){}else showProcessingBackground(),setTimeout(function(){a._BODY.contentEditable=!1;try{if("2"==d)DEXTTOP.DEXT5.DextCommands("select_all",
a.ID),DEXTTOP.DEXT5.DextCommands("remove_css",a.ID),DEXTTOP.DEXT5.DextCommands("remove_format",a.ID),a._FRAMEWIN.setFocusToBody(),setTimeout(function(){a._FRAMEWIN.doSetCaretPosition(a._BODY.firstChild,0)},20);else for(var c=0,e=m.length,f;c<e;c++)DEXT5_EDITOR.HTMLParser.GetChildrenCount(m[c],!0)>r&&(f=b(m[c]),f=DEXT5_EDITOR.HTMLParser.HTMLtoXML(f),m[c].innerHTML=f)}catch(g){}hideProcessingBackground();a._BODY.contentEditable=!0},G_Progress_LoadTime)};DEXT5_EDITOR.HTMLParser.makeMap=function(a){return k(a)}})();
