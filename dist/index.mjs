import{Component as t}from"preact";import{Subscription as n}from"rxjs";var e={active:"active",done:"done",none:"none",values:"values",waiting:"waiting"},o=function(t){function o(t){this._subscription=n.EMPTY,this.state={data:t.initialData,state:e.none}}return t&&(o.__proto__=t),(o.prototype=Object.create(t&&t.prototype)).constructor=o,o.prototype.componentDidMount=function(){var t=this;this.setState(function(){return{state:e.waiting}}),this._subscription=this.props.stream.subscribe({next:function(n){return t.setState(function(){return{data:n,state:e.active}})},error:function(){},complete:function(){return t.setState(function(){return{state:e.done}})}})},o.prototype.componentWillUnmount=function(){this._subscription.unsubscribe()},o.prototype.render=function(t,n){return(0,t.builder)(n)},o}(t);export{e as ConnectionState,o as StreamBuilder};
//# sourceMappingURL=index.mjs.map
