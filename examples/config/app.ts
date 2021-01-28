import axios, { AxiosTransformer } from '../../src/index';
import qs from 'qs'

// axios.defaults.headers.common["test2"] = 123;

// const data = qs.stringify({a:1,b:2});
// const params = new URLSearchParams();
// params.append("name","chenwl");
// params.append("age","12");

// axios({
//   url:"/config/post",
//   method:"post",
//   data:params,
//   headers:{
//     test:"321"
//   }
// }).then(res=>{
//   console.log(res);
// })

// axios({
//   transformRequest:[
//     function(data,headers){
//       console.log(data);
//       return qs.stringify(data);
//     }
//   ],
//   transformResponse:[
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function(data,headers){
//       if(Object.prototype.toString.call(data) === "[object Object]"){
//         data.add =  "test"
//       }
//       return data;
//     }
//   ],
//   url:"/config/post",
//   method:"post",
//   headers:{
//       "test":"a"
//   },
//   data:{
//     a:1
//   }
// }).then(res=>{
//   console.log(res.data);
// })


const instance = axios.create({
  transformRequest:[function(data){
    return qs.stringify(data)
  }],
  transformResponse:[
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if(Object.prototype.toString.call(data) === "[object Object]"){
        data.virtual = "virtual";
      }
      return data;
  }]
})

instance.post("/config/post",{a:1}).then(res=>{
  console.log(res);
})

