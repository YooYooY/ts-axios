import axios from '../../src/index';
import qs from 'qs'

axios.defaults.headers.common["test2"] = 123;

const data = qs.stringify({a:1,b:2});
const params = new URLSearchParams();
params.append("name","chenwl");
params.append("age","12");

axios({
  url:"/config/post",
  method:"post",
  data:params,
  headers:{
    test:"321"
  }
}).then(res=>{
  console.log(res);
})
