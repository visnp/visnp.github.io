const app=Vue.createApp({mixins:Object.values(mixins),data(){return{loading:true,hiddenMenu:false,showMenuItems:false,menuColor:false,scrollTop:0,renderers:[]}},created(){window.addEventListener("load",(()=>{this.loading=false}))},mounted(){window.addEventListener("scroll",this.handleScroll,true);this.render()},methods:{render(){for(let e of this.renderers)e()},handleScroll(){let e=this.$refs.homePostsWrap;let s=document.documentElement.scrollTop;if(this.scrollTop<s){this.hiddenMenu=true;this.showMenuItems=false}else this.hiddenMenu=false;if(e){if(s<=window.innerHeight-100)this.menuColor=true;else this.menuColor=false;if(s<=400)e.style.top="-"+s/5+"px";else e.style.top="-80px"}this.scrollTop=s}}});app.mount("#layout");