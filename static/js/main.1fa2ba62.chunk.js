(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(24),n(12)),i=n(13),u=n(17),s=n(14),m=n(18),p=(n(25),function(e){var t=0;return e.map((function(e){return Number.isInteger(e.number)?t+=e.number:"A"!==e.number?t+=10:t+=t+11<=21?11:1})),t}),k=(n(26),function(e){var t=e.deck,n=e.enemy;return r.a.createElement("div",{className:"Card"},!1===n?r.a.createElement("div",null,"****"):r.a.createElement("div",null,"Points: ",p(t)),r.a.createElement("div",{className:"CardBox"},t.map((function(e,t){return!1===n&&1===t?r.a.createElement("div",{key:t,className:"CardSize"},"* *"):r.a.createElement("div",{key:t,className:"CardSize"},e.number,e.suit)}))),r.a.createElement("br",null))}),y=(n(27),function(){return r.a.createElement("div",{className:"Intro"},r.a.createElement("h1",null,"BLACKJACK"),r.a.createElement("h4",null,"Your goal is to have more points than enemy, BUT not exceeding 21 points OR you'll LOSE"),r.a.createElement("h4",null,"Press HIT to take another card and STAND to see RESULTS"))}),f=(n(28),function(e){var t=e.click,n=e.text;return r.a.createElement("div",{className:"Button"},r.a.createElement("button",{onClick:t},n))}),d=n(7),D=function(e){return{type:"setDeck",deck:e}},h=function(e){return{type:"setPlayerDeck",playerDeck:e}},E=function(e){return{type:"setEnemyDeck",enemyDeck:e}},b=function(e){return{type:"setWinner",winner:e}},v=n(3),g=function(){return function(e,t){var n=p(t().gameData.enemyDeck),a=p(t().gameData.playerDeck);e(b(n<a&&a<=21||n>21&&a<=21?"You Won!":n===a?"DRAW!":n>21&&a>21?"Both Lost...":"You Lost..."))}},O=function(){for(var e=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],t=["\u2666","\u2663","\u2665","\u2660"],n=[],a=0;a<e.length;a++)for(var r=0;r<t.length;r++)n.push({number:e[a],suit:t[r]});return n},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).start=function(){n.props.onSetGenerateDeck(O()),n.props.onSetDecks()},n.reset=function(){n.props.onReset(),n.start()},n.stand=function(){n.props.onEnemyHit(),n.props.onStand()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.start()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"u-textAlignCenter"},null===this.props.winner?r.a.createElement("div",null,r.a.createElement(f,{click:this.props.onHit,text:"Hit"}),r.a.createElement(f,{click:this.stand,text:"Stand"})):null,r.a.createElement("p",null,"YOU"),r.a.createElement(k,{deck:this.props.playerDeck}),r.a.createElement("p",null,"ENEMY"),r.a.createElement(k,{deck:this.props.enemyDeck,enemy:null!==this.props.winner})),r.a.createElement("h1",null,this.props.winner),r.a.createElement(f,{click:this.reset,text:"New Game"}))}}]),t}(r.a.Component),P=Object(d.b)((function(e){return{playerDeck:e.gameData.playerDeck,enemyDeck:e.gameData.enemyDeck,winner:e.gameData.winner}}),(function(e){return{onSetGenerateDeck:function(t){return e(D(t))},onSetDecks:function(){return e((function(e,t){for(var n=[],a=Object(v.a)(t().gameData.deck),r=0;r<4;r++){var c=Math.floor(Math.random()*a.length);n.push(a[c]),a.splice(c,1)}e(h(n.slice(0,2))),e(E(n.slice(2,4))),e(D(a))}))},onHit:function(){return e((function(e,t){var n=Object(v.a)(t().gameData.deck),a=Math.floor(Math.random()*(n.length-1));n.splice(a,1),e(h(t().gameData.playerDeck.concat(n[a]))),e(D(n)),p(t().gameData.playerDeck)>21&&e(g())}))},onEnemyHit:function(){return e((function(e,t){for(var n=Math.random()>=.5?1:0,a=Object(v.a)(t().gameData.deck),r=Object(v.a)(t().gameData.enemyDeck);1!==n;){var c=Math.floor(Math.random()*a.length);a.splice(c,1),r.push(a[c]),n=p(r)>=19?1:Math.random()>=.5?1:0}e(E(r)),e(D(a))}))},onStand:function(){return e(g())},onReset:function(){return e({type:"RESET_APP"})}}}))(j),S=n(2),w=n(5),N={playerPoints:null,enemyPoints:null,deck:[],playerDeck:[],enemyDeck:[],winner:null},A=Object(S.c)({gameData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPlayerPoints":return Object(w.a)({},e,{playerPoints:t.playerPoints});case"setEnemyPoints":return Object(w.a)({},e,{enemyPoints:t.enemyPoints});case"setDeck":return Object(w.a)({},e,{deck:t.deck});case"setPlayerDeck":return Object(w.a)({},e,{playerDeck:t.playerDeck});case"setEnemyDeck":return Object(w.a)({},e,{enemyDeck:t.enemyDeck});case"setWinner":return Object(w.a)({},e,{winner:t.winner});default:return e}}}),M=n(16),C=Object(S.d)((function(e,t){return"RESET_APP"===t.type&&(e=void 0),A(e,t)}),Object(S.a)(M.a));o.a.render(r.a.createElement(d.a,{store:C},r.a.createElement(P,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1fa2ba62.chunk.js.map