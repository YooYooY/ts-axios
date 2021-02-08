import axios,{Canceler} from "../../src/index";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get("/cancel/get",{
  cancelToken:source.token
}).then(res=>{
  console.log("success");
}).catch((e)=>{
  if(axios.isCancel(e)){
    console.log("Request canceled: ",e.message);
  }
});

setTimeout(()=>{
  source.cancel("Operation canceled by the user");

  axios.post("/cancel/post",{a:1},{cancelToken:source.token}).then(res=>{
    console.log(res);
  }).catch((e)=>{
    if(axios.isCancel(e)){
      console.log("timeout: ",e.message);
    }
  })

},500)

let cancel:Canceler;

axios.get("/cancel/get",{
  cancelToken:new CancelToken(c=>{
    cancel = c;
  })
}).catch((e)=>{
  if(axios.isCancel(e)){
    console.log("request canceled");
  }
});

setTimeout(()=>{
  cancel();
},200);
