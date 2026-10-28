const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const context=vm.createContext({});
vm.runInContext(html.match(/<script id="core">([\s\S]*?)<\/script>/)[1],context);
const C=context.TodoCore;
const task={id:'1',title:'第一件事',done:false};
function memory(){const data=new Map();return {getItem:k=>data.has(k)?data.get(k):null,setItem:(k,v)=>data.set(k,v)};}
test('首次使用为空；保存后重新读取保留任务及完成状态',()=>{const s=memory();assert.equal(C.read(s).length,0);C.write(s,[task]);assert.equal(C.read(s)[0].title,task.title);C.write(s,[{...task,done:true}]);assert.equal(C.read(s)[0].done,true);});
test('编辑和删除的结果可持久化',()=>{const s=memory();C.write(s,[{...task,title:'修改后的任务'}]);assert.equal(C.read(s)[0].title,'修改后的任务');C.write(s,[]);assert.equal(C.read(s).length,0);});
test('拒绝空白及超长标题，修剪空格',()=>{assert.throws(()=>C.title('  '));assert.throws(()=>C.title('a'.repeat(201)));assert.equal(C.title('  abc  '),'abc');});
test('状态筛选与不区分大小写搜索可组合',()=>{const ts=[task,{id:'2',title:'Read Book',done:true}];assert.equal(C.visible(ts,'active','').length,1);assert.equal(C.visible(ts,'done','book')[0].id,'2');assert.equal(C.visible(ts,'all','不存在').length,0);});
test('JSON 备份可往返并将 HTML 作为普通文本保存',()=>{const text='<img src=x onerror=alert(1)>';const output=C.validate(JSON.parse(C.encode([{...task,title:text}])));assert.equal(output[0].title,text);});
test('拒绝损坏、错误版本、重复 ID 及非法状态的备份',()=>{for(const value of [null,{}, {version:2,tasks:[]},{version:1,tasks:[task,task]},{version:1,tasks:[{...task,done:'false'}]},{version:1,tasks:[{...task,title:''}]}])assert.throws(()=>C.validate(value));const s=memory();s.setItem(C.KEY,'bad json');assert.throws(()=>C.read(s));});
test('存储失败向调用方报告且旧数据保持',()=>{const s=memory();C.write(s,[task]);s.setItem=()=>{throw new Error('quota');};assert.throws(()=>C.write(s,[]));assert.equal(C.read(s).length,1);});
test('无效写入不覆盖现有数据',()=>{const s=memory();C.write(s,[task]);assert.throws(()=>C.write(s,[{...task,title:''}]));assert.equal(C.read(s)[0].title,task.title);});
