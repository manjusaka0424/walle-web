webpackJsonp([13],{j0bF:function(e,t){},j4WE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),s=n("exGp"),c=n.n(s),l=n("Dd8w"),i=n.n(l),o=n("NYxO"),u={0:"新建提交",1:"审核通过",2:"审核拒绝",3:"上线中",4:"上线完成",5:"上线失败"},d=n("4kd1"),p={name:"tasks",props:{space:{type:String,required:!0}},data:function(){return{enableCreate:!1,value:"",columns:function(){var e=this;return[{label:"ID",type:"index",width:50},{prop:"name",label:"上线单",width:180},{prop:"project_name",label:"项目",width:140},{prop:"user_name",label:"用户名",width:100},{label:"版本",width:80,render:function(e,t){return t.row.tag||t.row.commit_id}},{prop:"environment_name",label:"环境",width:120},{prop:"updated_at",label:"更新时间",width:160},{prop:"status",label:"状态",width:80,render:function(e,t){return u[t.row.status]}},{label:"操作",minWidth:200,render:function(t,n,r){return t("div",[e.renderReview(i()({},n.row)),e.renderDeploy(i()({},n.row)),e.renderEditTool(i()({},n.row)),e.renderRollbackTool(i()({},n.row)),e.renderDeleteTool(i()({},n.row))])}}]}.call(this),form:{search:""},breadcrumbData:[{to:"",name:"上线单"}],isMy:!1}},watch:{value:function(){this.search()}},computed:i()({},Object(o.c)(["user"]),{userId:function(){return this.isMy?this.user.id:""}}),methods:{callServe:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.table;return c()(a.a.mark(function n(){var r,s,c,l,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.e)({size:t.page.size,page:t.page.currentPage,kw:e.value,user_id:e.userId});case 2:r=n.sent,s=r.data,c=s.list,l=s.count,i=s.enable_create,e.enableCreate=i,t.page.total=l,t.list=c;case 10:case"end":return n.stop()}},n,e)}))()},search:function(){this.callServe()},addTask:function(){this.$router.push("/"+this.space+"/task/create")},edit:function(e){this.$router.push("/"+this.space+"/task/edit/"+e.id)},closePopover:function(){document.body.click()},renderReview:function(e){var t=this,n=this.$createElement;return e.enable_audit?n("el-popover",{attrs:{placement:"bottom-start"}},[n("div",{class:"wl-task__review"},[n("p",["审核是否通过？"]),n("div",{class:"footer"},[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){t.rejectTask(e)}}},["驳回"]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(){t.auditTask(e)}}},["通过"])])]),n("el-button",{attrs:{type:"text",size:"small"},class:"review",slot:"reference"},["审核"])]):null},renderDeploy:function(e){var t=this,n=this.$createElement;return e.enable_online?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.deploy(i()({},e))}}},["上线"]):e.enable_view?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.deploy(i()({},e),!0)}}},["查看"]):null},renderEditTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},class:this.getClass(i()({},e)),on:{click:function(){return t.edit(i()({},e))}}},["编辑"]):null},renderDeleteTool:function(e){var t=this,n=this.$createElement;return e.enable_delete?n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},class:"user-delete",on:{click:function(){return t.delete(i()({},e))}}},["删除"]):null},rejectTask:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.f)(e.id);case 2:t.closePopover(),t.callServe(),t.$message({type:"success",message:"审核驳回!"});case 5:case"end":return n.stop()}},n,t)}))()},auditTask:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.b)(e.id);case 2:t.closePopover(),t.callServe(),t.$message({type:"success",message:"审核通过!"});case 5:case"end":return n.stop()}},n,t)}))()},deploy:function(e,t){t?this.$router.push("/"+this.space+"/task/deploy/"+e.id):this.$rrcTrack.trackEvent({category:"任务",action:"上线",optLabel:{taskId:e.id,host:location.host}},"/"+this.space+"/task/deploy/"+e.id)},deleteTask:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.c)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return n.stop()}},n,t)}))()},delete:function(e){var t=this;this.$confirm("确定删除本上线单吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteTask(e)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},renderRollbackTool:function(e){var t=this,n=this.$createElement;return e.enable_rollback?n("el-button",{attrs:{type:"text",icon:"wl-icon-rollback",size:"small"},class:"rollback",on:{click:function(){return t.rollback(i()({},e))}}},["回滚"]):null},rollback:function(e){var t=this;this.$confirm("确定回滚吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.rollbackTask(e)}).catch(function(){t.$message({type:"info",message:"已取消回滚"})})},rollbackTask:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.g)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"回滚成功!"});case 4:case"end":return n.stop()}},n,t)}))()},getClass:function(e){if(0!==e.status&&1!==e.status)return"empty"}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wl-task"},[n("wl-breadcrumb",{attrs:{data:e.breadcrumbData,isBackButton:!1}}),e._v(" "),n("el-form",{attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入上线单名称",size:"small"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),e.enableCreate?n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addTask}},[e._v("新建上线单")])],1):e._e(),e._v(" "),n("el-form-item",[n("el-checkbox",{attrs:{label:"我的"},on:{change:e.search},model:{value:e.isMy,callback:function(t){e.isMy=t},expression:"isMy"}})],1)],1),e._v(" "),n("wl-table",{ref:"table",attrs:{columns:e.columns},on:{callServe:e.callServe}})],1)},staticRenderFns:[]};var m=n("VU/8")(p,f,!1,function(e){n("j0bF")},null,null);t.default=m.exports}});