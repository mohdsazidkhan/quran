(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){},117:function(e,t,a){},127:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),s=a.n(i),o=(a(82),a(1)),l=a(2),c=a(4),u=a(3),h=a(5),p=(a(84),a(8)),d=a(9),f=a.n(d),m=a(11),v=(a(90),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSurahChangeHandler=function(e){var t=a.props.surahList.surahList.find(function(t){return t.value===e.value});a.props.dispatch({type:"SELECTEDSURAH",selectedSurah:t}),console.log("selectedSurah",t),a.props.dispatch({type:"SURAH",surah:t.value}),a.props.dispatch({type:"AYAHRANGE",verseRange:[0,0]})},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.surahList.surahList?r.a.createElement("div",{className:"Surah"},r.a.createElement("h5",null,"Surah"),r.a.createElement(m.a,{options:this.props.surahList.surahList,onChange:this.onSurahChangeHandler,className:"surahName text-right",placeholder:"Select Surah",isRtl:!0,defaultValue:this.props.surahList.surahList[0],value:this.props.surahList.surahList.find(function(t){return t.value===e.props.surah.surah})})):r.a.createElement(f.a,{color:"green",type:"spinningBubbles"})}}]),t}(n.Component)),g=Object(p.b)(function(e){return{surahList:e.surahList,surah:e.surah,selectedSurah:e.selectedSurah,verseRange:e.verseRange}})(v),y=a(76),b=(a(101),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onVerseFromChangeHandler=function(e){var t=a.state.verseOptions.length;0!==a.state.verseRange[1]&&(t=a.state.verseRange[1]),a.setState({verseRange:[e.value,t]}),a.props.dispatch({type:"AYAHRANGE",verseRange:[e.value,t]})},a.onVerseToChangeHandler=function(e){a.setState({verseRange:[0===a.state.verseRange[0]?1:a.state.verseRange[0],e.value]}),a.props.dispatch({type:"AYAHRANGE",verseRange:[0===a.state.verseRange[0]?1:a.state.verseRange[0],e.value]})},a.state={verseRange:a.props.verseRange.verseRange},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchSurah()}},{key:"componentWillReceiveProps",value:function(e){this.props.selectedSurah.selectedSurah!==e.selectedSurah.selectedSurah&&this.fetchSurah(e)}},{key:"fetchSurah",value:function(e){var t=this.props.selectedSurah.selectedSurah;e&&(t=e.selectedSurah.selectedSurah);var a=Object(y.a)(Array(t.numberOfAyahs).keys()).map(function(e){return{value:e+1,label:e+1}});this.setState({verseOptions:a})}},{key:"render",value:function(){var e=this;return this.props.surahList.surahList?this.state.verseOptions?r.a.createElement("div",{className:"Verse"},r.a.createElement("h5",null,"Verse"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(m.a,{options:this.state.verseOptions,placeholder:"From",onChange:this.onVerseFromChangeHandler,value:0===this.props.verseRange.verseRange[0]?this.state.verseOptions[0]:this.state.verseOptions.find(function(t){return t.value===e.props.verseRange.verseRange[0]})})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(m.a,{options:this.state.verseOptions,placeholder:"To",onChange:this.onVerseToChangeHandler,value:0===this.props.verseRange.verseRange[1]?this.state.verseOptions[this.state.verseOptions.length-1]:this.state.verseOptions.find(function(t){return t.value===e.props.verseRange.verseRange[1]})})))):r.a.createElement(f.a,{type:"bars",color:"green"}):r.a.createElement(f.a,{color:"green",type:"spinningBubbles"})}}]),t}(n.Component)),O=Object(p.b)(function(e){return{surahList:e.surahList,surah:e.surah,verseRange:e.verseRange,selectedSurah:e.selectedSurah}})(b),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onReciterChangeHandler=function(e){a.props.dispatch({type:"AUDIO",audio:e.value})},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.reciterList.reciterList?r.a.createElement("div",null,r.a.createElement("h5",null,"Reciter"),r.a.createElement(m.a,{options:this.props.reciterList.reciterList,onChange:this.onReciterChangeHandler,value:this.props.reciterList.reciterList.find(function(t){return t.value===e.props.audio.audio})})):r.a.createElement("p",null,"Loading Audios list ...")}}]),t}(n.Component),j=Object(p.b)(function(e){return{audio:e.audio,reciterList:e.reciterList}})(E),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onEditionChangeHandler=function(e){a.props.dispatch({type:"EDITION",edition:e.value})},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.editionList.editionList?r.a.createElement("div",{className:"editions"},r.a.createElement("h5",null,"Editions"),r.a.createElement(m.a,{options:this.props.editionList.editionList,onChange:this.onEditionChangeHandler,value:this.props.editionList.editionList.find(function(t){return t.value===e.props.edition.edition})})):r.a.createElement(f.a,{color:"green",type:"spinningBubbles"})}}]),t}(n.Component),R=Object(p.b)(function(e){return{editionList:e.editionList,edition:e.edition}})(S),L=a(24),T=(a(103),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onTranslationChangeHandler=function(e){console.log("eventfor translationchange",e),a.props.dispatch({type:"TRANSLATION",translation:"0"===e.value?null:e.value})},a.customStyles={option:function(e,t){var a=-1!==t.value.indexOf("ar.")||-1!==t.value.indexOf("ug.")||-1!==t.value.indexOf("ur.")||-1!==t.value.indexOf("fa.");return Object(L.a)({},e,{borderBottom:"1px dotted pink",padding:20,color:t.value,fontFamily:a?"Lateef":"inherit",fontSize:a?25:"inherit",textAlign:a?"right":"left"})},control:function(e){return Object(L.a)({},e,{fontSize:25})},groupHeading:function(e){return Object(L.a)({},e,{fontSize:20,color:"green"})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(L.a)({},e,{opacity:a,transition:"opacity 300ms",color:"green"})}},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.translationList.translationList)return r.a.createElement(f.a,{color:"green",type:"spinningBubbles"});if(null!==this.props.translation.translation){var t=this.props.translationList.translationList.find(function(t){return t.options.find(function(t){return t.value===e.props.translation.translation})});t=t.options.filter(function(t){return t.value===e.props.translation.translation})}return r.a.createElement("div",{className:"Translations"},r.a.createElement("h5",null,"Translations"),r.a.createElement(m.a,{classNamePrefix:"optiontext",onChange:this.onTranslationChangeHandler,options:this.props.translationList.translationList,placeholder:"select Translation",styles:this.customStyles,value:t}))}}]),t}(n.Component)),x=Object(p.b)(function(e){return{translationList:e.translationList,translation:e.translation}})(T),N=a(23),k=(a(105),a(107),a(109),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){a.props.dispatch({type:"SEARCH",searchText:a.state.search})},a.handleReset=function(e){a.props.dispatch({type:"SEARCH",searchText:null})},a.state={search:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("input",{type:"text",value:this.state.search,onChange:this.handleChange,placeholder:"Search Quranic Text"}),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:this.handleSubmit},"Search"),r.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:this.handleReset},"Reset"))}}]),t}(n.Component)),w=Object(p.b)(function(e){return{searchText:e.searchText}})(k),A=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"m-2 p-3 LeftPanel"},r.a.createElement("h3",null," Quran "),r.a.createElement(w,null),r.a.createElement(R,null),r.a.createElement(N.d,{className:"tabPanel"},r.a.createElement(N.b,null,r.a.createElement(N.a,null," By Surah")),r.a.createElement(N.c,null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(O,null))),r.a.createElement(j,null))}}]),t}(n.Component),C=a(10),I=a.n(C),H=a(15),D=function(){var e=Object(H.a)(I.a.mark(function e(t,a){var n,r,i,s,o,l,c,u;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("props in fetchsurah",t),n=t.edition.edition,r=t.surah.surah,i=t.verseRange.verseRange,a&&(r=a.surah.surah,n=a.edition.edition,i=a.verseRange.verseRange),s="http://api.alquran.cloud/v1/surah/"+r+"/"+n,console.log("verseRange in Surah",i),0!==i[0]&&0!==i[1]&&(o="?offset=".concat(i[0]-1),l="&limit=".concat(i[1]-(i[0]-1)),s=s.concat([o+l])),e.next=10,fetch(s);case 10:return c=e.sent,e.next=13,c.json();case 13:return u=e.sent,e.abrupt("return",u.data);case 15:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchSurah=function(e){D(a.props,e).then(function(e){a.setState({surah:e})}).catch(function(e){console.log("error in topjs call",e)})},a.styles={surahName:{direction:"rtl",fontFamily:"Lateef",fontSize:65,color:"green"},bismillah:{direction:"rtl",fontFamily:"Lateef",fontSize:55,color:"green"}},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchSurah()}},{key:"componentDidUpdate",value:function(e){this.props.surah.surah!==e.surah.surah&&(this.setState({surah:null}),this.fetchSurah(this.props))}},{key:"render",value:function(){return this.state.surah?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",{className:"text-left",style:this.styles.surahName},this.state.surah.englishName)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",{className:"text-center",style:this.styles.bismillah},"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650"),r.a.createElement("h4",{className:"text-center"},this.state.surah.number," - ",this.state.surah.revelationType," -"," ",this.state.surah.numberOfAyahs)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",{className:"text-right",style:this.styles.surahName},this.state.surah.name))):r.a.createElement(f.a,{color:"green",type:"cylon"})}}]),t}(n.Component),q=Object(p.b)(function(e){return{surah:e.surah,edition:e.edition,chapter:e.chapter,translation:e.translation,verseRange:e.verseRange}})(B),_=(a(113),a(71)),F=a.n(_),M=a(72),V=a.n(M),U=(a(115),V()(r.a)),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).jsxJoin=function(e,t){return e.length>0?e.reduce(function(e,a){return r.a.createElement(r.a.Fragment,null,e,t,a)}):null},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("ayah_".concat(this.props.highlight.highlight));null!==e&&"text-right ayah"===e.className&&(e.className="text-right ayah highlight")}},{key:"componentWillReceiveProps",value:function(e){if(this.props.highlight.highlight!==e.highlight.highlight){var t=document.getElementById("ayah_".concat(this.props.highlight.highlight));null!==t&&"text-right ayah highlight"===t.className&&(t.className="text-right ayah");var a=document.getElementById("ayah_".concat(e.highlight.highlight));null!==a&&"text-right ayah"===a.className&&(a.className="text-right ayah highlight")}}},{key:"render",value:function(){var e=null,t=[{identifier:"h",description:"Hamzat ul Wasl"},{identifier:"s",description:"Silent"},{identifier:"l",description:"Lam Shamsiyyah"},{identifier:"n",description:"Normal Prolongation: 2 Vowels"},{identifier:"p",description:"Permissible Prolongation: 2, 4, 6 Vowels"},{identifier:"q",description:"Qalaqah"},{identifier:"o",description:"Obligatory Prolongation: 4-5 Vowels"},{identifier:"c",description:"Ikhafa' Shafawi - With Meem"},{identifier:"f",description:"Ikhafa'"},{identifier:"w",description:"Idgham Shafawi - With Meem"},{identifier:"i",description:"Iqlab"},{identifier:"a",description:"Idgham - With Ghunnah"},{identifier:"u",description:"Idgham - Without Ghunnah"},{identifier:"d",description:"Idgham - Mutajanisayn"},{identifier:"b",description:"Idgham - Mutaqaribayn"},{identifier:"g",description:"Ghunnah: 2 Vowels"}];if("quran-wordbyword"===this.props.edition.edition){var a;a=this.props.ayah.text.split("$").map(function(e){var t=e.split("|");return""!==t[0]?r.a.createElement("div",{className:"text-center ayahWord"},t[0]," ",r.a.createElement("br",null)," ",t[1]):null}),e=r.a.createElement("div",{className:"wordbywordContainer"},this.jsxJoin(a,r.a.createElement("span",null)))}else if("quran-tajweed"===this.props.edition.edition){e=this.props.ayah.text;var n=[{regex:/\[(\w+)[^[]*\[(.*?)\]/g,fn:function(e,a){var n=t.filter(function(e){return e.identifier===a[1]});return r.a.createElement("span",{key:e},r.a.createElement("span",{className:a[1],"data-rh":n.length>0?n[0].description:"Description not found","data-rh-at":"top"},a[2]))}}];e=F()(n)(e)}else e=this.props.ayah.text;return r.a.createElement("div",{className:"Verse text-right heading"},r.a.createElement(U,{events:!0,delay:100}),r.a.createElement("div",{key:this.props.ayah.number,className:"text-right ayah",id:"ayah_".concat(this.props.ayah.number)},1!==this.props.surah&&"quran-wordbyword"!==this.props.edition.edition&&"quran-tajweed"!==this.props.edition.edition?e.replace("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","").replace("\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","").replace("\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645","").replace("\u0628\u0650\u0633\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u064a\u0645\u0650",""):e,r.a.createElement("div",{className:"ayahContainer"},r.a.createElement("span",{className:"ayahStop"},this.props.ayah.numberInSurah))))}}]),t}(n.Component),G=Object(p.b)(function(e){return{highlight:e.highlight,edition:e.edition}})(P),W=(a(117),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.ayah?r.a.createElement("div",{className:"Translation text-right heading"},r.a.createElement("div",{key:this.props.ayah.number,className:"ayah "+this.props.language,id:"trans_ayah_".concat(this.props.ayah.number)},this.props.ayah.text)):r.a.createElement("p",null,"Loading....")}}]),t}(n.Component)),z=a(22),Y=a.n(z),J=function(){var e=Object(H.a)(I.a.mark(function e(t,a){var n,r,i,s,o,l,c,u;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.surah.surah,r=t.translation.translation,i=t.verseRange.verseRange,a&&(n=a.surah.surah,r=a.translation.translation,i=a.verseRange.verseRange),null!==r){e.next=6;break}return e.abrupt("return",null);case 6:return s="http://api.alquran.cloud/v1/surah/"+n+"/"+r,0!==i[0]&&0!==i[1]&&(o="?offset=".concat(i[0]-1),l="&limit=".concat(i[1]-(i[0]-1)),s=s.concat([o+l])),console.log("urlForTranslation for translation",s),e.next=11,fetch(s);case 11:return c=e.sent,e.next=14,c.json();case 14:return u=e.sent,e.abrupt("return",u.data);case 16:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).scrollBar=null,a.fetchTrans=function(e){a.setState({translation:null}),J(a.props,e).then(function(e){a.setState({translation:e})})},a.fetchSurah=function(e){D(a.props,e).then(function(e){a.setState({surah:e})})},a.styles={mainDiv:{height:window.innerHeight-300+"px",direction:"rtl"}},a.state={searchResult:!1,translation:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchSurah(),null!==this.props.translation.translation&&this.fetchTrans()}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return"undefined"!==typeof this._scrollBar&&null!==this._scrollBar?this.scrollBar=this._scrollBar:this.scrollBar}},{key:"componentDidUpdate",value:function(e,t,a){console.log("I am in update"),this.props!==e&&(this.fetchSurah(this.props),this.fetchTrans(this.props)),null!==a&&function(e,t,a){if(a.highlight.highlight<t.highlight.highlight){var n=e.getScrollValues().scrollTop,r=document.getElementById("ayah_".concat(t.highlight.highlight)),i=document.getElementById("trans_ayah_".concat(t.highlight.highlight));n+=(null!==r?r.offsetHeight:0)+(null!==i?i.offsetHeight:0),e.scrollTo(n)}a.highlight.highlight>t.highlight.highlight&&e.scrollTo(0)}(this.scrollBar,this.props,e)}},{key:"render",value:function(){var e=this;return this.state.surah?this.state.searchResult?this.state.searchResults?r.a.createElement(Y.a,{style:this.styles.mainDiv,rtl:!0,noScrollX:!0,scrollTop:0,ref:function(t){e._scrollBar=t}},r.a.createElement("div",null," Total Results Found: ",this.state.searchResults.count),this.state.searchResults.matches.map(function(e){return r.a.createElement("div",null,e.text)})):r.a.createElement(f.a,{color:"green",type:"cylon"}):r.a.createElement(Y.a,{style:this.styles.mainDiv,rtl:!0,noScrollX:!0,scrollTop:0,ref:function(t){e._scrollBar=t}},this.state.surah.ayahs.map(function(t,a){return r.a.createElement("div",{key:"versecontainer_".concat(t.number)},r.a.createElement(G,{ayah:t,key:"verse_".concat(t.number),surah:e.state.surah.number}),e.state.translation?r.a.createElement(W,{ayah:e.state.translation.ayahs[a],language:e.state.translation.edition.language,key:"trans_".concat(t.number)}):null===e.props.translation.translation?null:r.a.createElement(f.a,{type:"bars",color:"lightblue"}))})):r.a.createElement(f.a,{color:"green",type:"cylon"})}}]),t}(n.Component),X=Object(p.b)(function(e){return console.log("state in Quran",e),{surah:e.surah,edition:e.edition,chapter:e.chapter,translation:e.translation,verseRange:e.verseRange,highlight:e.highlight,searchText:e.searchText}})(Q),$=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(X,null)}}]),t}(n.Component),K=a(73),Z=a.n(K),ee=function(){var e=Object(H.a)(I.a.mark(function e(t,a){var n,r,i,s,o,l,c,u,h;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.audio.audio,r=t.surah.surah,i=t.verseRange.verseRange,a&&(n=a.audio.audio,r=a.surah.surah,i=a.verseRange.verseRange),s="http://api.alquran.cloud/v1/surah/"+r+"/"+n,0!==i[0]&&0!==i[1]&&(o="?offset=".concat(i[0]-1),l="&limit=".concat(i[1]-(i[0]-1)),s=s.concat([o+l])),e.next=6,fetch(s);case 6:return c=e.sent,e.next=9,c.json();case 9:return u=e.sent,h=u.data.ayahs.map(function(e){return{url:e.audio,title:u.data.englishName+" [ Ayah "+e.numberInSurah+"]",ayah:e.numberInSurah}}),e.abrupt("return",h);case 12:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),te=(a(125),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchAudios=function(e){ee(a.props,e).then(function(e){a.setState({audioFiles:e})})},a.onMediaChangeHandler=function(e){var t=e.target.attributes.src.value.split("/");a.props.dispatch({type:"AYAHTOHIGHLIGHT",highlight:t[t.length-1]})},a.state={surah:e.surah.surah},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchAudios()}},{key:"componentDidUpdate",value:function(e,t){e.surah.surah!==this.props.surah.surah&&this.fetchAudios(this.props),e.audio.audio!==this.props.audio.audio&&(this.setState({audioFiles:null}),this.fetchAudios(this.props))}},{key:"render",value:function(){return this.state.audioFiles?r.a.createElement("div",null,r.a.createElement(Z.a,{playlist:this.state.audioFiles,controls:["playpause","forwardskip","progressdisplay"],autoplay:!1,autoplayDelayInSeconds:2.1,onMediaEvent:{play:this.onMediaChangeHandler}})):r.a.createElement(f.a,{type:"bubbles",color:"black"})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.surah.surah!==t.surah?{surah:e.surah.surah,audioFiles:null}:null}}]),t}(n.Component)),ae=Object(p.b)(function(e){return{surah:e.surah,audio:e.audio,verseRange:e.verseRange}})(te),ne=function(){var e=Object(H.a)(I.a.mark(function e(t){var a,n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.alquran.cloud/search/"+t+"/all/en");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),re=(a(127),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).styles={mainDiv:{height:window.innerHeight-100+"px",direction:"rtl"}},a.state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.results?(console.log(this.props.results),r.a.createElement("div",{className:"SearchResults"},r.a.createElement("div",{className:"top"},r.a.createElement("h3",null,this.props.results.count," Search Results found for keyword"," ",this.props.keyword)),r.a.createElement(Y.a,{style:this.styles.mainDiv,rtl:!1,noScrollX:!0,scrollTop:0,ref:function(t){e._scrollBar=t}},r.a.createElement("div",{className:"searchResults"},this.props.results.matches.map(function(e,t){return r.a.createElement("div",{key:t,className:"result"},r.a.createElement("h5",null,"Edition: ",e.edition.name),r.a.createElement("p",{className:"surah"}," ","Surah: ",e.surah.name," Ayah: ",e.numberInSurah),r.a.createElement("p",{className:"text"}," ",e.text))}))))):r.a.createElement(f.a,{type:"cylon",color:"green"})}}]),t}(n.Component)),ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchSearchResults=function(e){ne(e).then(function(e){a.setState({searchResults:e})}).catch(function(e){return console.log("error in results",e)})},a.state={searchResult:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){console.log("this.state",this.state,e),null!==this.state.searchText&&this.state.searchText!==e.searchText.searchText&&this.fetchSearchResults(this.state.searchText)}},{key:"render",value:function(){return this.state.searchResult?r.a.createElement(re,{results:this.state.searchResults,keyword:this.state.searchText}):r.a.createElement("div",{className:"m-2 p-3"},r.a.createElement(q,null),r.a.createElement($,null),r.a.createElement(ae,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!==e.searchText.searchText?{searchText:e.searchText.searchText,searchResult:!0}:{searchText:null,searchResult:!1}}}]),t}(n.Component),se=Object(p.b)(function(e){return{searchText:e.searchText}})(ie),oe=a(74),le=a.n(oe),ce=a(42),ue=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).styles={marginLeft:0,marginRight:0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e;e=this.props,fetch("http://api.alquran.cloud/v1/surah").then(function(e){return e.json()}).then(function(t){var a=null;200===t.code&&(a=t.data.map(function(e){return{value:e.number,label:e.name,numberOfAyahs:e.numberOfAyahs}})),null!==a&&e.dispatch({type:"SURAHLIST",surahList:a})}),function(e){fetch("http://api.alquran.cloud/v1/edition?format=text&type=translation").then(function(e){return e.json()}).then(function(t){var a=le()(t.data,function(e){return e.language}),n=Object.keys(a).map(function(e){var t=a[e];return{label:ce.a.getNativeName(e),options:t.map(function(t){return{value:t.identifier,label:t.name,group:ce.a.getNativeName(e)}})}});n.push({label:"No Translation",options:[{value:"null",label:"No Translation",group:"No Translation"}]}),e.dispatch({type:"TRANSLATIONLIST",translationList:n})})}(this.props),function(e){fetch("http://api.alquran.cloud/v1/edition?format=text&language=ar&type=quran").then(function(e){return e.json()}).then(function(t){var a=t.data.map(function(e){return{value:e.identifier,label:e.name}});e.dispatch({type:"EDITIONLIST",editionList:a})})}(this.props),function(e){fetch("http://api.alquran.cloud/v1/edition?format=audio&type=versebyverse&language=ar").then(function(e){return e.json()}).then(function(t){var a=t.data.map(function(e){return{value:e.identifier,label:e.name}});e.dispatch({type:"RECITERLIST",reciterList:a})})}(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:this.styles},r.a.createElement("div",{className:"col-md-3 p-2"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-9 p-2"},r.a.createElement(se,null)))}}]),t}(n.Component),he=Object(p.b)()(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(219);var pe=a(21),de={chapter:1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAPTER":return{chapter:t.chapter};default:return e}},me={edition:"quran-simple"},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDITION":return{edition:t.edition};default:return e}},ge={surah:1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SURAH":return{surah:t.surah};default:return e}},be={translation:null},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRANSLATION":return{translation:t.translation};default:return e}},Ee={audio:"ar.alafasy"},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUDIO":return{audio:t.audio};default:return e}},Se={verseRange:[0,0]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AYAHRANGE":return{verseRange:t.verseRange};default:return e}},Le={highlight:1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AYAHTOHIGHLIGHT":return{highlight:t.highlight};default:return e}},xe={surahList:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SURAHLIST":return{surahList:t.surahList};default:return e}},ke={translationList:null},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRANSLATIONLIST":return{translationList:t.translationList};default:return e}},Ae={editionList:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDITIONLIST":return{editionList:t.editionList};default:return e}},Ie={reciterList:null},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECITERLIST":return{reciterList:t.reciterList};default:return e}},De={selectedSurah:{value:1,label:"1",numberOfAyahs:7}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTEDSURAH":return{selectedSurah:t.selectedSurah};default:return e}},qe={searchText:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return{searchText:t.searchText};default:return e}},Fe=Object(pe.b)({surahList:Ne,translationList:we,editionList:Ce,reciterList:He,selectedSurah:Be,searchText:_e,chapter:fe,edition:ve,surah:ye,translation:Oe,audio:je,verseRange:Re,highlight:Te}),Me=Object(pe.c)(Fe);s.a.render(r.a.createElement(function(){return r.a.createElement(p.a,{store:Me},r.a.createElement(he,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports=a(221)},82:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){}},[[77,2,1]]]);
//# sourceMappingURL=main.64745284.chunk.js.map