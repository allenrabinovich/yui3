YUI.add("columnset",function(C){var A=C.Lang;function B(D){B.superclass.constructor.apply(this,arguments);}B.NAME="columnset";B.ATTRS={columns:{setter:"_setColumns"},tree:{readOnly:true,value:[]},flat:{readOnly:true,value:[]},hash:{readOnly:true,value:{}},keys:{readOnly:true,value:[]}};C.extend(B,C.Base,{_setColumns:function(D){return C.clone(D);},initializer:function(){var D=[],J=[],I={},H=[],G=this.get("columns"),E=this;function F(R,M,Q){var O=0,L=M.length,N,P,K;R++;if(!D[R]){D[R]=[];}for(;O<L;++O){N=M[O];N=A.isString(N)?{key:N}:N;P=new C.Column(N);N.yuiColumnId=P.get("id");J.push(P);I[P.get("id")]=P;if(Q){P._set("parent",Q);}if(A.isArray(N.children)){K=N.children;P._set("children",K);E._setColSpans(P,N);E._cascadePropertiesToChildren(P,K);if(!D[R+1]){D[R+1]=[];}F(R,K,P);}else{P._set("keyIndex",H.length);P._set("colspan",1);H.push(P);}D[R].push(P);}R--;}F(-1,G);this._set("tree",D);this._set("flat",J);this._set("hash",I);this._set("keys",H);this._setRowSpans();this._setHeaders();},destructor:function(){},_cascadePropertiesToChildren:function(G,E){var F=0,D=E.length,H;for(;F<D;++F){H=E[F];if(G.get("className")&&(H.className===undefined)){H.className=G.get("className");}if(G.get("editor")&&(H.editor===undefined)){H.editor=G.get("editor");}if(G.get("formatter")&&(H.formatter===undefined)){H.formatter=G.get("formatter");}if(G.get("resizeable")&&(H.resizeable===undefined)){H.resizeable=G.get("resizeable");}if(G.get("sortable")&&(H.sortable===undefined)){H.sortable=G.get("sortable");}if(G.get("hidden")){H.hidden=true;}if(G.get("width")&&(H.width===undefined)){H.width=G.get("width");}if(G.get("minWidth")&&(H.minWidth===undefined)){H.minWidth=G.get("minWidth");}if(G.get("maxAutoWidth")&&(H.maxAutoWidth===undefined)){H.maxAutoWidth=G.get("maxAutoWidth");}}},_setColSpans:function(G,E){var F=0;function D(J){var K=J.children,I=0,H=K.length;for(;I<H;++I){if(A.isArray(K[I].children)){D(K[I]);}else{F++;}}}D(E);G._set("colspan",F);},_setRowSpans:function(){function D(F){var G=1,I,H,E,K;function J(P,O){O=O||1;var N=0,L=P.length,M;for(;N<L;++N){M=P[N];if(A.isArray(M.children)){O++;J(M.children,O);O--;}else{if(M.get&&A.isArray(M.get("children"))){O++;J(M.get("children"),O);O--;}else{if(O>G){G=O;}}}}}for(E=0;E<F.length;E++){I=F[E];J(I);for(K=0;K<I.length;K++){H=I[K];if(!A.isArray(H.get("children"))){H._set("rowspan",G);}else{H._set("rowspan",1);}}G=1;}}D(this.get("tree"));},_setHeaders:function(){var I,G,F=this.get("keys"),E=0,D=F.length;function H(K,J){K.push(J.get("key"));if(J.get("parent")){H(K,J.get("parent"));}}for(;E<D;++E){I=[];G=F[E];H(I,G);G._set("headers",I.reverse().join(" "));}},getColumn:function(){}});C.Columnset=B;},"@VERSION@",{requires:["base","column"]});