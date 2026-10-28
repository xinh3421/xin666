const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const file=path.join(__dirname,'../index.html');
const server=http.createServer((req,res)=>{
  if(req.method!=='GET' && req.method!=='HEAD'){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
  if(req.url!=='/' && req.url!=='/index.html'){res.writeHead(404);res.end('Not found');return;}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(500);res.end('Unable to read index.html');return;}res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:data);});
});
server.on('error',err=>{console.error('无法启动本地服务：'+err.message);process.exitCode=1;});
server.listen(4173,'127.0.0.1',()=>console.log('xin666: http://127.0.0.1:4173 · Ctrl+C 停止'));
