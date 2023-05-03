import {createServer} from 'node:http';
import {URL} from 'node:url';
///url in postman is localhost:3000?page=1&limit=5

const users=[
    {id:1,username:"user1"},
    {id:2,username:"user2"},
    {id:3,username:"user3"},
    {id:4,username:"user4"},
    {id:5,username:"user5"},
    {id:6,username:"user6"},
    {id:7,username:"user7"},
    {id:8,username:"user8"},
    {id:9,username:"user9"},
    {id:10,username:"user10"},
    {id:11,username:"user11"},
    {id:12,username:"user12"},
    {id:13,username:"user13"}
]
const server = createServer((req, res) => {
    const urlObj=new URL(req.url,`http://${req.headers.host}`);
    const {page,limit} =Object.fromEntries(urlObj.searchParams.entries());
    let startIndex=(page-1) * limit;
    let endIndex=page*limit;
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(users.slice(startIndex,endIndex)));
});

server.listen(3000,(err) => {
    if(err)throw new Error(err);
    console.log("server is running on port 3000");
});