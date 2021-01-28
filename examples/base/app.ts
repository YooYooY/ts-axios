import axios from "../../src/index";

// get

axios({
  method:"get",
  url:"/base/get",
  params:{
    foo:["bar","baz"]
  }
});

axios({
  method:"get",
  url:"/base/get",
  params:{
    foo:{bar:"baz"}
  }
})

axios({
  method:"get",
  url:"/base/get",
  params:{
    date:new Date()
  }
})

axios({
  method:"get",
  url:"/base/get",
  params:{
    foo:"baz is null",
    baz:null
  }
})

axios({
  method:"get",
  url:"/base/get#hash",
  params:{
    foo:"hash",
  }
})

axios({
  method:"get",
  url:"/base/get?foo=bar",
  params:{
    bar:"query-join",
  }
})


// post

axios({
  method:"post",
  url:"/base/post",
  data:{
    a:1,b:2
  }
});


axios({
  method:"post",
  url:"/base/buffer",
  data:new Int32Array([21,31])
})


axios({
  method:"post",
  url:"/base/post",
  headers:{
    "content-type":"application/json"
  },
  data:{a:1,b:2}
})


const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

axios({
  method:"post",
  url:"/base/post",
  data:searchParams
})


const fd = new FormData();
fd.append("name","chenwl");

axios({
  method:"post",
  url:"/base/post",
  data:fd
})

axios({
  method:"post",
  url:"/base/post",
  data:{
    a:1,b:2
  }
}).then(res=>{
  console.log(res);
})


axios({
  method:"post",
  url:"/base/post",
  responseType:"json",
  data:{
    a:3,b:4
  }
}).then(res=>{
  console.log(res);
})
