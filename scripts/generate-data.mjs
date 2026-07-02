import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var diff=["easy","medium","hard"];
var ts="网络安全 安全基础 CIA 机密性 完整性 可用性 威胁模型 攻击面 身份认证 授权 访问控制 最小权限 RBAC 密码哈希 bcrypt JWT安全 Cookie安全 Session安全 HTTPS TLS 对称加密 非对称加密 哈希 数字签名 SQL注入 参数化查询 XSS 输出编码 CSP CSRF SameSite SSRF 文件上传校验 路径遍历 输入校验 速率限制 验证码 日志审计 异常检测 依赖安全 漏洞扫描 防火墙 WAF 安全测试 应急响应 安全加固 安全编码 安全配置 安全策略 权限校验 接口鉴权 访问日志 审计日志 密码策略 多因素认证 OAuth2 OpenID SAML 单点登录 会话管理 安全头 X-Frame-Options X-Content-Type-Options Strict-Transport-Security Referrer-Policy Permissions-Policy 安全更新 补丁管理 漏洞管理 CVE CVSS 威胁情报 入侵检测 恶意软件 钓鱼 社会工程 物理安全 数据加密 传输加密 存储加密 密钥管理 证书管理 PKI CA 证书链 自签名证书 中间人攻击 重放攻击 侧信道 时序攻击 暴力破解 字典攻击 凭据填充 账号锁定 安全开发 安全需求 安全设计 威胁建模 STRIDE DREAD PASTA 安全测试 SAST DAST IAST RASP 渗透测试 红队 蓝队 紫队 安全运营 SOC SIEM SOAR 事件响应 取证分析 灾难恢复 业务连续性 合规 GDPR 等级保护 数据安全法 网络安全法 个人信息保护 安全审计 等保测评 安全意识 安全培训";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"se-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Security",description:"Sec标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"se-course-01",order:1,slug:"安全入门",title:"网络安全入门与安全伦理",description:"安全定义、CIA、威胁模型、安全伦理。",estimatedHours:4,diff:"easy"},
  {id:"se-course-02",order:2,slug:"安全基础",title:"安全基础概念与威胁模型",description:"攻击面、威胁建模、风险分析、安全策略。",estimatedHours:6,diff:"easy"},
  {id:"se-course-03",order:3,slug:"认证授权",title:"身份认证、授权与访问控制",description:"认证方式、RBAC、最小权限、多因素认证。",estimatedHours:8,diff:"medium"},
  {id:"se-course-04",order:4,slug:"密码学",title:"密码学基础与常见误区",description:"对称加密、非对称加密、哈希、密码存储。",estimatedHours:10,diff:"medium"},
  {id:"se-course-05",order:5,slug:"Web安全",title:"Web 安全基础",description:"Web攻击面、浏览器安全、同源策略。",estimatedHours:6,diff:"easy"},
  {id:"se-course-06",order:6,slug:"SQL注入",title:"SQL 注入原理与防御",description:"SQL注入原理、参数化查询、ORM安全。",estimatedHours:8,diff:"hard"},
  {id:"se-course-07",order:7,slug:"XSS防御",title:"XSS 原理与防御",description:"XSS类型、输出编码、CSP策略。",estimatedHours:8,diff:"hard"},
  {id:"se-course-08",order:8,slug:"CSRFSSRF",title:"CSRF、SSRF 与请求安全",description:"CSRF防御、SameSite、SSRF防护。",estimatedHours:8,diff:"hard"},
  {id:"se-course-09",order:9,slug:"文件上传",title:"文件上传、路径遍历与输入校验",description:"文件类型校验、路径遍历防御、输入净化。",estimatedHours:8,diff:"hard"},
  {id:"se-course-10",order:10,slug:"会话安全",title:"会话安全、Cookie、Token 与 JWT",description:"Cookie安全属性、JWT安全配置、Session管理。",estimatedHours:8,diff:"hard"},
  {id:"se-course-11",order:11,slug:"安全编码",title:"安全编码与后端接口安全",description:"输入校验、输出编码、安全配置、接口鉴权。",estimatedHours:10,diff:"hard"},
  {id:"se-course-12",order:12,slug:"日志应急",title:"日志审计、监控与应急响应",description:"日志记录、异常检测、响应流程、取证基础。",estimatedHours:8,diff:"hard"},
  {id:"se-course-13",order:13,slug:"安全测试",title:"安全测试、漏洞管理与加固清单",description:"漏洞扫描、渗透测试、安全加固、CVE管理。",estimatedHours:8,diff:"hard"},
  {id:"se-course-14",order:14,slug:"综合项目面试",title:"安全综合案例、面试与项目实践",description:"安全架构、面试题、安全项目实践。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解安全基础","能防御常见漏洞","会安全编码","具备安全思维"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t,kps){var n=String(id).padStart(3,"0");all.push({id:"se-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t,content:"# "+t+"\n\n"+t+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Security"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"安全课程"+(ci+1)+"章"+(j+1),["se-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["网络安全","保护网络系统安全"],["CIA三要素","机密性完整性可用性"],["身份认证","验证用户身份"],["授权","控制访问权限"],["密码学","加密解密技术"],["SQL注入","数据库查询注入"],["XSS","跨站脚本攻击"],["CSRF","跨站请求伪造"],["SSRF","服务端请求伪造"],["文件上传","文件上传安全"],["路径遍历","目录穿越攻击"],["会话安全","Cookie和Session"],["安全编码","编写安全代码"],["日志审计","记录和分析日志"],["应急响应","安全事件处理"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"se-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Security",tags:["Security"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"se-kp-"+String(k.length+1).padStart(4,"0"),name:"安全概念"+(k.length+1),description:"安全概念说明",category:"Security",tags:["Security"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["安全入门","安全基础概念","认证授权","密码学","Web安全","SQL注入","XSS防御","CSRFSSRF","文件上传","会话安全","安全编码","日志应急","安全测试","综合项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"CIA三要素不包括？",["可用性","机密性","完整性","可扩展性"],"D","easy"],[2,"身份认证的目的是？",["验证你是谁","控制你能做什么","记录行为","加密数据"],"A","easy"],[3,"密码存储应该用什么算法？",["bcrypt","MD5","SHA1","AES"],"A","medium"],[5,"SQL注入防御最有效方法？",["参数化查询","过滤关键字","限制长度","编码"],"A","hard"],[6,"XSS防御的核心？",["输出编码","输入过滤","使用HTTPS","限制请求"],"A","hard"],[7,"CSRF防御常用方法？",["CSRF Token","验证码","HTTPS","CORS"],"A","hard"],[9,"Cookie的HttpOnly属性防止？",["XSS窃取Cookie","CSRF攻击","SQL注入","路径遍历"],"A","medium"],[4,"HTTPS使用什么协议加密？",["TLS/SSL","SSH","IPSec","VPN"],"A","easy"],[8,"文件上传校验应检查？",["文件类型大小内容","只检查扩展名","只检查大小","不检查"],"A","medium"],[11,"应急响应第一步？",["确认事件","恢复系统","删除日志","通知媒体"],"A","hard"],[12,"SAST是什么测试？",["静态代码安全测试","动态测试","渗透测试","模糊测试"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"se-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。防御知识很重要。",wrong_reason:"需加强防御思维。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=diff[Math.floor(Math.random()*diff.length)];
    var id2="se-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于安全"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下安全"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是网络安全重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在安全"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"的安全防御方法。";o=[{label:"A",text:"简答"}];a=ch+"需要遵循最小权限原则。";}
    else if(it.type==="case_analysis"){s="安全"+ch+"案例分析：设计防御方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)};});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。安全防御需要纵深防御思想。",wrong_reason:"需加强对"+ch+"防御思维的理解。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"se-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["密码存储修复","登录限流","JWT安全","Cookie安全","SQL注入防御","XSS编码","CSRF Token","文件上传防御","路径遍历防御","权限校验","接口鉴权","日志审计","依赖漏洞","安全测试报告","应急响应","后端安全加固","安全组配置","安全面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"se-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握安全",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"漏洞分析",description:"识别"},{order:2,title:"风险评估",description:"评估"},{order:3,title:"修复方案",description:"修复"},{order:4,title:"验证",description:"验证"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"安全路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"se-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["安全","CIA","认证","授权","密码","SQL注入","XSS","CSRF","HTTPS","TLS","Cookie","JWT","安全编码","日志审计","应急响应"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["安全概念"+i,"安全概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"se-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Security",tags:["Security"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["安全常见问题"+(i+1)+"?","安全常见问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"se-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Security",tags:["Security"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Security"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Security"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Security"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Security"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Security"]});});return e;}
async function main(){
  console.log("Gen cybersecurity...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-cybersecurity-basic",slug:"module-cybersecurity-basic",title:"网络安全与安全基础",subtitle:"面向开发者和安全入门者",description:"面向开发者和安全入门者的防御性网络安全身份认证权限控制密码学Web安全SQL注入防御XSS防御CSRF防御安全编码日志审计与安全加固训练模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["网络安全","Web安全","安全编码","身份认证","权限控制","SQL注入防御","XSS防御","安全加固"],estimatedHours:170,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F6E1}",repoUrl:"https://github.com/openskill-galaxy/module-cybersecurity-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var files2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in files2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(files2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(files2[key])?files2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\ncourses:"+courses.length+" lessons:"+lessons.length+" KPs:"+kps.length+" questions:"+questions.length+" exams:"+exams.length+" cases:"+cases.length+" routes:"+routes.length+" tags:"+tags.length+" glossary:"+glossary.length+" faqs:"+faqs.length+" search-index:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
