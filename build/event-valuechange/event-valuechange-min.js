YUI.add("event-valuechange",function(D){var C="value",A="valueChange",B={POLL_INTERVAL:50,TIMEOUT:10000,_events:{},_history:{},_intervals:{},_timeouts:{},_poll:function(G,F,H){var E=G._node.value,I=B._history[F];if(E!==I){B._history[F]=E;B._events[F].fire({_event:H,newVal:E,prevVal:I});B._refreshTimeout(G,F);}},_refreshTimeout:function(F,E){B._stopTimeout(F,E);B._timeouts[E]=setTimeout(function(){B._stopPolling(F,E);},B.TIMEOUT);},_startPolling:function(F,E,H,G){if(!E){E=D.stamp(F);}if(!G&&B._intervals[E]){return;}B._stopPolling(F,E);B._intervals[E]=setInterval(function(){B._poll(F,E,H);},B.POLL_INTERVAL);B._refreshTimeout(F,E,H);},_stopPolling:function(F,E){if(!E){E=D.stamp(F);}B._intervals[E]=clearInterval(B._intervals[E]);B._stopTimeout(F,E);},_stopTimeout:function(F,E){if(!E){E=D.stamp(F);}B._timeouts[E]=clearTimeout(B._timeouts[E]);},_onBlur:function(E){B._stopPolling(E.currentTarget);},_onKeyDown:function(E){B._startPolling(E.currentTarget,null,E);},_onKeyUp:function(E){if(E.charCode===229||E.charCode===197){B._startPolling(E.currentTarget,null,E,true);}},_onMouseDown:function(E){B._startPolling(E.currentTarget,null,E);},_onSubscribe:function(G,F,E){D.all(G).each(function(I){var H=D.stamp(I);B._events[H]=E;B._history[H]=I.get(C);I.on(A+"|blur",B._onBlur);I.on(A+"|mousedown",B._onMouseDown);I.on(A+"|keydown",B._onKeyDown);I.on(A+"|keyup",B._onKeyUp);});},_onUnsubscribe:function(G,F,E){D.all(G).each(function(I){var H=D.stamp(I);I.detachAll(A+"|*");B._stopPolling(I,H);delete B._events[H];delete B._history[H];});}};D.Event.define(A,{detach:B._onUnsubscribe,on:B._onSubscribe,publishConfig:{broadcast:1,emitFacade:true}});D.ValueChange=B;},"@VERSION@",{requires:["event-focus","event-synthetic"]});