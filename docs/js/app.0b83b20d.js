(function(i){function e(e){for(var a,c,n=e[0],r=e[1],o=e[2],d=0,v=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(t,c)&&t[c]&&v.push(t[c][0]),t[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(i[a]=r[a]);u&&u(e);while(v.length)v.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var i,e=0;e<l.length;e++){for(var s=l[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==t[r]&&(a=!1)}a&&(l.splice(e--,1),i=n(n.s=s[0]))}return i}var a={},t={app:0},l=[];function c(i){return n.p+"js/"+({about:"about"}[i]||i)+"."+{about:"1138f195"}[i]+".js"}function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(i){var e=[],s=t[i];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=t[i]=[e,a]}));e.push(s[2]=a);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.src=c(i);var o=new Error;l=function(e){r.onerror=r.onload=null,clearTimeout(d);var s=t[i];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;o.message="Loading chunk "+i+" failed.\n("+a+": "+l+")",o.name="ChunkLoadError",o.type=a,o.request=l,s[1](o)}t[i]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(e)},n.m=i,n.c=a,n.d=function(i,e,s){n.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,e){if(1&e&&(i=n(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var a in i)n.d(s,a,function(e){return i[e]}.bind(null,a));return s},n.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},n.p="/",n.oe=function(i){throw console.error(i),i};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=o;l.push([0,"chunk-vendors"]),s()})({0:function(i,e,s){i.exports=s("56d7")},"23f0":function(i,e,s){"use strict";s("2410")},2410:function(i,e,s){},"56d7":function(i,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23");s("6597"),s("5ed1");function t(i,e,s,t,l,c){var n=Object(a["v"])("Nav"),r=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(n),Object(a["g"])(r)],64)}var l={class:"container"},c=Object(a["f"])('<nav class="navbar has-shadow is-white px-6 is-fixed-top"><div class="navbar-brand"><a href="/" class="navbar-item is-size-4">FitLife</a><a class="navbar-burger"><span></span><span></span><span></span></a></div><div class="navbar-menu"><div class="navbar-start"><a href="/dashboard" class="navbar-item">Dashboard</a><div class="navbar-item has-dropdown is-hoverable"><a href="#" class="navbar-link">Workouts</a><div class="navbar-dropdown"><a href="/workouts_history" class="navbar-item">History</a><a href="/workouts_new" class="navbar-item">New Workout</a></div></div><a href="/friends" class="navbar-item">Friends</a></div><div class="navbar-end"><div class="navbar-item"><input type="text" class="input is-dark is-rounded" placeholder="Search"></div><div class="navbar-item"><span class="icon"><a class="button is-white"><i class="fa fa-facebook"></i></a></span></div><div class="navbar-item"><span class="icon"><a class="button is-white"><i class="fa fa-youtube"></i></a></span></div><div class="navbar-item"><span class="icon"><a class="button is-white"><i class="fa fa-instagram"></i></a></span></div></div></div></nav>',1),n=[c];function r(i,e,s,t,c,r){return Object(a["p"])(),Object(a["d"])("div",l,n)}var o={},d=s("d959"),u=s.n(d);const v=u()(o,[["render",r]]);var m=v,p={components:{Nav:m}};const b=u()(p,[["render",t]]);var f=b,g=(s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),h={class:"section"},j={class:"section is-medium"},O={class:"section is-medium has-background-light"};function w(i,e,s,t,l,c){var n=Object(a["v"])("landing-hero"),r=Object(a["v"])("testimonials"),o=Object(a["v"])("pricing"),d=Object(a["v"])("mailing-list");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(n),Object(a["e"])("div",h,[Object(a["g"])(r)]),Object(a["e"])("section",j,[Object(a["g"])(o)]),Object(a["e"])("section",O,[Object(a["g"])(d)])])}var q={class:"container"},P=Object(a["f"])('<section id="header-hero" class="hero is-halfheight is-light" data-v-356fe18a><div class="hero-body" data-v-356fe18a><div class="container has-text-left" data-v-356fe18a><p class="title has-text-white is-size-1" data-v-356fe18a> Your Life </p><p class="subtitle has-text-white is-size-3" data-v-356fe18a> but Fit </p><button class="button is-dark is-rounded" data-v-356fe18a> Sign Up </button><button class="button is-white is-rounded is-outlined" data-v-356fe18a> Login </button></div></div></section>',1),y=[P];function x(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("div",q,y)}var L={};s("23f0");const k=u()(L,[["render",x],["__scopeId","data-v-356fe18a"]]);var S=k,J={class:"container"},M=Object(a["f"])('<div class="columns"><div class="column"><p class="title"> Join our Newsletter Today! </p><div class="field"><label class="label">Name</label><div class="control"><input class="input" type="text" placeholder="e.g Alex Smith"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"></div></div><div class="control"><button class="button is-dark">Submit</button></div></div></div>',1),_=[M];function N(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("div",J,_)}var z={};const T=u()(z,[["render",N]]);var F=T,A={class:"container"},D=Object(a["f"])('<div class="level"><div class="level-item has-text-centered"><p class="title is-size-2">Pricing</p></div></div><div class="tabs is-boxed is-fullwidth"><ul><li class="is-active" data-target="basic-content"><a><span>Basic</span></a></li><li data-target="premium-content"><a><span>Premium</span></a></li><li data-target="super-content"><a><span>Super</span></a></li></ul></div><div id="tab-content"><div id="basic-content"><div class="content"><h3 class="title is-size-3">Basic Plan</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas enim recusandae, numquam magnam consequuntur dolorem labore non a dolorum voluptates molestiae quasi suscipit accusantium. Laboriosam quidem consequatur officia quia.</p><ol><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li></ol><div class="level"><div class="level-item"><button class="button is-dark is-medium is-rounded">Join</button></div></div></div></div><div id="premium-content" class="is-hidden"><div class="content"><h3 class="title is-size-3">Premium Plan</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas enim recusandae, numquam magnam consequuntur dolorem labore non a dolorum voluptates molestiae quasi suscipit accusantium. Laboriosam quidem consequatur officia quia.</p><ol><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li></ol><div class="level"><div class="level-item"><button class="button is-dark is-medium is-rounded">Join</button></div></div></div></div><div id="super-content" class="is-hidden"><div class="content"><h3 class="title is-size-3">Super Plan</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas enim recusandae, numquam magnam consequuntur dolorem labore non a dolorum voluptates molestiae quasi suscipit accusantium. Laboriosam quidem consequatur officia quia.</p><ol><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing.</li><li>Lorem ipsum dolor sit.</li><li>Lorem ipsum dolor sit amet consectetur.</li></ol><div class="level"><div class="level-item"><button class="button is-dark is-medium is-rounded">Join</button></div></div></div></div></div>',3),E=[D];function H(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("div",A,E)}var W={};const B=u()(W,[["render",H]]);var C=B,I={class:"container"},Q=Object(a["f"])('<div class="level pb-5"><div class="level-item has-text-centered"><p class="title is-size-2"> Testimonials </p></div></div><div class="container is-fluid"><div class="columns"><div class="column"><div class="card"><div class="card-image"><figure class="image"><img src="/workingout-square-woman1.jfif" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">Jane Smith</p><p class="subtitle is-6">@janesmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div><div class="column"><div class="card"><div class="card-image"><figure class="image is-square"><img src="/workingout-square-man.jfif" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div><div class="column"><div class="card"><div class="card-image"><figure class="image is-square"><img src="/workingout-square-woman2.jfif" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">Jules Smith</p><p class="subtitle is-6">@julessmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div></div></div>',2),U=[Q];function Y(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("div",I,U)}var G={};const K=u()(G,[["render",Y]]);var R=K,V={name:"Home",components:{LandingHero:S,Testimonials:R,Pricing:C,MailingList:F}};const X=u()(V,[["render",w]]);var Z=X,$={class:"section"},ii={class:"container"},ei={class:"columns"};function si(i,e,s,t,l,c){var n=Object(a["v"])("profile-sidebar"),r=Object(a["v"])("feed");return Object(a["p"])(),Object(a["d"])("section",$,[Object(a["e"])("div",ii,[Object(a["e"])("div",ei,[Object(a["g"])(n),Object(a["g"])(r)])])])}var ai={id:"feed-column",class:"column"};function ti(i,e,s,t,l,c){var n=Object(a["v"])("post");return Object(a["p"])(),Object(a["d"])("div",ai,[Object(a["g"])(n),Object(a["g"])(n),Object(a["g"])(n),Object(a["g"])(n)])}var li={class:"media"},ci=Object(a["f"])('<div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">Jane Doe</p><p class="subtitle is-6">@janethedoe</p></div></div><div class="content"><p class="title">Workout Title</p><div class="level"><div class="level-left"><div class="level-item"><strong>Location</strong></div></div><div class="level-right"><div class="level-item"><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div></div><div class="card-content"><div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia facere alias nesciunt eveniet tenetur odit mollitia voluptatibus expedita. Ipsa mollitia illum inventore ad officia ex facere adipisci ducimus deserunt error non quo perferendis sit quisquam, eos quam vel consectetur debitis itaque libero? Aliquam veniam atque iste similique impedit asperiores labore, placeat tenetur provident nihil tempora ea. Nam, facilis assumenda. </div></div></div>',1),ni=[ci];function ri(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("article",li,ni)}var oi={};const di=u()(oi,[["render",ri]]);var ui=di,vi={components:{Post:ui}};const mi=u()(vi,[["render",ti]]);var pi=mi,bi=Object(a["f"])('<div class="column is-narrow"><div class="card"><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"><div class="level is-mobile"><div class="level-left"><div class="level-item"><div><p class="heading">Following</p><p class="title">10</p></div></div></div><div class="level-item"><div><p class="heading">Followers</p><p class="title">14</p></div></div><div class="level-right"><div class="level-item"><div><p class="heading">Post</p><p class="title">2</p></div></div></div></div><p class="heading">Latest Activity</p><p>Morning Workout - <time datetime="2021-10-1">1 Oct 2021</time></p></div></div></div></div>',1),fi=[bi];function gi(i,e,s,t,l,c){return Object(a["p"])(),Object(a["d"])("div",null,fi)}var hi={};const ji=u()(hi,[["render",gi]]);var Oi=ji,wi={name:"Dashboard",components:{ProfileSidebar:Oi,Feed:pi}};const qi=u()(wi,[["render",si]]);var Pi=qi,yi=[{path:"/",name:"Home",component:Z},{path:"/dashboard",name:"Dashboard",component:Pi},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],xi=Object(g["a"])({history:Object(g["b"])("/"),routes:yi}),Li=xi;Object(a["c"])(f).use(Li).mount("#app")}});
//# sourceMappingURL=app.0b83b20d.js.map