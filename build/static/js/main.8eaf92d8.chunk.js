(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(78)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(4),c=t.n(s),r=t(29),m=(t(42),t(43),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("img",{className:"header__logo",src:"/filter-calendar/images/logo_OJOWO.svg",alt:"logo"}),n.a.createElement("span",{className:"header__app-version"},"Beta"),n.a.createElement("button",{type:"button",className:"header__notifications header__button"}),n.a.createElement("select",{className:"header__select-name",name:"",id:""},n.a.createElement("option",{value:"\u0410\u0440\u0442\u0435\u043c"},"\u0410\u0440\u0442\u0435\u043c")),n.a.createElement("button",{type:"button",className:"header__search header__button"}),n.a.createElement("select",{className:"header__select-language",name:"",id:""},n.a.createElement("option",{value:"RU"},"RU")))}),i=(t(44),function(){return n.a.createElement("div",{className:"side-panel"},n.a.createElement("div",{className:"side-panel__select-wrapper"},n.a.createElement("select",{className:"side-panel__select-level",name:"",id:""},n.a.createElement("option",{value:""},"\u042d\u043a\u0441\u043f\u0435\u0440\u0442")),n.a.createElement("div",{className:"side-panel__select-icon"})),n.a.createElement("div",{className:"side-panel__side-menu side-menu"},n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/analitics.svg"}),n.a.createElement("span",null,"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/product.svg"}),n.a.createElement("span",null,"\u041f\u0440\u043e\u0434\u0443\u043a\u0442")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/users.svg"}),n.a.createElement("span",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/site-builder.svg"}),n.a.createElement("span",null,"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0441\u0430\u0439\u0442\u0430")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/streams.svg"}),n.a.createElement("span",null,"\u0422\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u0438")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/sending.svg"}),n.a.createElement("span",null,"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/marketing.svg"}),n.a.createElement("span",null,"\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/payments.svg"}),n.a.createElement("span",null,"\u041f\u043b\u0430\u0442\u0435\u0436\u044b")),n.a.createElement("button",{className:"side-menu__menu-item"},n.a.createElement("img",{className:"side-menu__item-logo",src:"/filter-calendar/images/settings.svg"}),n.a.createElement("span",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))}),o=t(2),d=(t(45),t(46),t(27)),u=t.n(d),_=t(28),E=t.n(_),b=function(e){var a=e.showCalendar,t=e.setTimePeriodStart,s=e.setTimePeriodEnd,c=E()(),r=Object(l.useState)(new Date),m=Object(o.a)(r,2),i=m[0],d=m[1],_=Object(l.useState)(void 0),b=Object(o.a)(_,2),N=b[0],g=b[1],v=Object(l.useState)(void 0),h=Object(o.a)(v,2),f=h[0],p=h[1],y=Object(l.useState)((new Date).getMonth()),w=Object(o.a)(y,2),D=w[0],k=w[1];return n.a.createElement("div",{className:"calendar"},n.a.createElement("div",{className:"calendar__filters"},n.a.createElement("label",null,n.a.createElement("input",{className:"calendar__filter-checkbox",value:"allPeriod",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u0412\u0435\u0441\u044c \u0441\u0440\u043e\u043a")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){g(new Date),p(new Date),k((new Date).getMonth()),d(new Date)},className:"calendar__filter-checkbox",value:"today",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){var e=c.subtract(1,"day")._d;g(e),p(e),k((new Date).getMonth()),d(new Date)},className:"calendar__filter-checkbox",value:"yesterday",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u0412\u0447\u0435\u0440\u0430")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){var e=c.subtract(7,"day")._d;g(e),p(new Date),k((new Date).getMonth()),d(new Date)},className:"calendar__filter-checkbox",value:"lastSevenDays",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 7 \u0434\u043d\u0435\u0439")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){var e=c.subtract(30,"day")._d;g(e),p(new Date),k((new Date).getMonth()),d(new Date)},className:"calendar__filter-checkbox",value:"lastThirtyDays",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 30 \u0434\u043d\u0435\u0439")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){var e=c.startOf("month")._d.toString(),a=c.endOf("month")._d.toString();g(new Date(e)),p(new Date(a)),k(new Date(e).getMonth()),d(new Date(e))},className:"calendar__filter-checkbox",value:"duringThisMonth",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435")),n.a.createElement("label",null,n.a.createElement("input",{onChange:function(){var e=c.subtract(1,"month").startOf("month")._d.toString(),a=c.endOf("month")._d.toString();g(new Date(e)),p(new Date(a)),k(new Date(e).getMonth()),d(new Date(e))},className:"calendar__filter-checkbox",value:"lastMonth",name:"active-filter",type:"radio"}),n.a.createElement("div",{className:"calendar__filter-period"},"\u041f\u0440\u043e\u0448\u043b\u044b\u0439 \u043c\u0435\u0441\u044f\u0446"))),n.a.createElement("div",{className:"calendar__dates-block"},n.a.createElement("div",{className:"calendar__block-calendar"},n.a.createElement("div",{className:"calendar__current-month"},["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][D],",",i.getFullYear()),n.a.createElement(u.a,{onMonthChange:function(e){k(e.getMonth()),d(e)},daysOfWeek:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],activeMonth:i,mode:"range",highlighted:{start:N,end:f},selected:{start:N,end:f},onSelect:function(e){g(e.start),p(e.end)},onSelectionProgress:function(e){g(e.start),p(e.end)},blockClassName:"block-calendar"})),n.a.createElement("div",{className:"calendar__main-controls"},n.a.createElement("button",{className:"calendar__cancel",onClick:function(){a(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),n.a.createElement("button",{onClick:function(){t(N),s(f),a(!1)},disabled:!(N&&f),className:"calendar__update"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))))},N=function(){var e=["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],a=Object(l.useState)(!1),t=Object(o.a)(a,2),s=t[0],c=t[1],r=Object(l.useState)(void 0),m=Object(o.a)(r,2),i=m[0],d=m[1],u=Object(l.useState)(void 0),_=Object(o.a)(u,2),E=_[0],N=_[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"controls-table"},n.a.createElement("div",{className:"controls-table__container"},n.a.createElement("button",{className:"controls-table__time-period controls-button",onClick:function(){c(!0)}},n.a.createElement("img",{className:"controls-button__icon",src:"/filter-calendar/images/icon-calendar.svg"}),n.a.createElement("span",{className:"controls-button__name"},"\u0417\u0430 1 \u0434\u0435\u043d\u044c")),n.a.createElement("button",{className:"controls-table__filter controls-button"},n.a.createElement("img",{className:"controls-button__icon",src:"/filter-calendar/images/icon-filter.svg"}),n.a.createElement("span",{className:"controls-button__name"},"\u0424\u0438\u043b\u044c\u0442\u0440")),n.a.createElement("button",{className:"controls-table__unload"},"\u0412\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c"),n.a.createElement("button",{className:"controls-table__add-to-contacts"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),n.a.createElement("div",{className:"controls-table__filters-container"},i&&n.a.createElement("div",{className:"controls-table__active-filter"},n.a.createElement("span",{className:"controls-table__filter-data"},null===i||void 0===i?void 0:i.getDate()," ",e[null===i||void 0===i?void 0:i.getMonth()].slice(0,3)," - ",null===E||void 0===E?void 0:E.getDate()," ",e[null===E||void 0===E?void 0:E.getMonth()].slice(0,3)," ",null===E||void 0===E?void 0:E.getFullYear()," ","\u0433."),n.a.createElement("button",{className:"controls-table__cancel-filter"})))),s&&n.a.createElement("div",{className:"calendar-container"},n.a.createElement("div",{className:"calendar-wrapper"},n.a.createElement(b,{showCalendar:c,setTimePeriodStart:d,setTimePeriodEnd:N}))))},g=t(30),v=(t(77),function(){function e(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e}for(var a={1:"\u042f\u043d\u0432\u0430\u0440\u044c",2:"\u0424\u0435\u0432\u0440\u0430\u043b\u044c",3:"\u041c\u0430\u0440\u0442",4:"\u0410\u043f\u0440\u0435\u043b\u044c",5:"\u041c\u0430\u0439",6:"\u0418\u044e\u043d\u044c",7:"\u0418\u044e\u043b\u044c",8:"\u0410\u0432\u0433\u0443\u0441\u0442",9:"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",10:"\u041e\u043a\u0442\u044f\u0431\u0440\u044c",11:"\u041d\u043e\u044f\u0431\u0440\u044c",12:"\u0414\u0435\u043a\u0430\u0431\u0440\u044c"},t={userNumber:1,userMail:"user@user.com",registrationDate:{day:10,month:2,year:2020},lastActivity:{day:10,month:2,year:2020},lastActions:"view_landing_course1",product:"\u041a\u0430\u043a \u043d\u0430\u043b\u0430\u0434\u0438\u0442\u044c \u043e\u0442\u043d\u043e\u0448"},l=[],s=1;s<=13;s+=1){var c={day:e(1,30),month:e(1,12),year:e(2010,2020)},r=Object(g.a)({},t,{userNumber:s,registrationDate:c,lastActivity:{day:e(1,30),month:e(1,12),year:e(c.year+1,2020)}});l.push(r)}return n.a.createElement("table",{className:"users-table"},n.a.createElement("thead",{className:"users-table__head"},n.a.createElement("tr",{className:"users-table__row-head"},n.a.createElement("th",{className:"users-table__heading"},n.a.createElement("input",{className:"users-table__all-users-checkbox",type:"checkbox",id:"all-users-checkbox"}),n.a.createElement("label",{htmlFor:"all-users-checkbox",className:"users-table__all-users-label"})),n.a.createElement("th",{className:"users-table__heading"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),n.a.createElement("th",{className:"users-table__heading"},"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),n.a.createElement("th",{className:"users-table__heading"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),n.a.createElement("th",{className:"users-table__heading"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),n.a.createElement("th",{className:"users-table__heading"},"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"),n.a.createElement("th",{className:"users-table__heading"},n.a.createElement("button",{className:"users-table__show-users-button"},"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c 15")))),n.a.createElement("tbody",{className:"users-table__body"},l.map(function(e){return n.a.createElement("tr",{key:e.userNumber,className:"users-table__row"},n.a.createElement("td",{className:"users-table__data"},n.a.createElement("label",null,n.a.createElement("input",{className:"users-table__user-checkbox",type:"checkbox"}),n.a.createElement("div",{className:"users-table__user-label"}))),n.a.createElement("td",{className:"users-table__data"},n.a.createElement("div",{className:"users-table__user-number"},"User",e.userNumber),n.a.createElement("div",{className:"users-table__user-mail"},e.userMail)),n.a.createElement("td",{className:"users-table__data"},a[e.registrationDate.month]," ",e.registrationDate.day,","," ",e.registrationDate.year),n.a.createElement("td",{className:"users-table__data"},a[e.lastActivity.month]," ",e.lastActivity.day,","," ",e.lastActivity.year),n.a.createElement("td",{className:"users-table__data add-blur"},e.lastActions),n.a.createElement("td",{className:"users-table__data add-blur"},e.product),n.a.createElement("td",{className:"users-table__data"},n.a.createElement("button",{className:"users-table__edit-item"},n.a.createElement("img",{src:"/filter-calendar/images/icon-edit.svg"})),n.a.createElement("button",{className:"users-table__delete-item"},n.a.createElement("img",{src:"/filter-calendar/images/icon-delete.svg"}))))})))});var h=function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"app__container"},n.a.createElement(m,null),n.a.createElement("div",{className:"app__main-display"},n.a.createElement(i,null),n.a.createElement("div",{className:"app__users-table-wrapper"},n.a.createElement(N,null),n.a.createElement(v,null)))))},f=t(3),p=Object(f.b)({winner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_WINNER":return a.payload;default:return e}}}),y=Object(f.c)(p);c.a.render(n.a.createElement(r.a,{store:y},n.a.createElement(h,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8eaf92d8.chunk.js.map