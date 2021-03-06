import axios, { AxiosError } from '../../src/index'
import qs from 'qs'

// document.cookie = "name=chenwl"

// axios.get('/more/get').then(res => {
//   console.log('host-get: ', res.data)
// })

// axios
//   .post('http://localhost:8088/more/server2', {}, { withCredentials: true })
//   .then(res => {
//     console.log('8088: ', res.data)
//   })

//   const instance = axios.create({
//       xsrfCookieName:"XSRF-TOKEN-D",
//       xsrfHeaderName:"X-XSRF-TOKEN-D"
//   });

//   instance.get("/more/get").then(res=>{
//       console.log(res.data);
//   })

// import 'nprogress/nprogress.css'
// import NProgress from 'nprogress'
// const instance = axios.create()

// function calculatePercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1) / total
// }

// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start()
//       return config
//     })
//   }

//   const setupUpdateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       NProgress.set(calculatePercentage(e.loaded, e.total))
//     }
//     instance.defaults.onDownloadProgress = update
//     instance.defaults.onUploadProgress = update
//   }

//   const setupStopProgress = () => {
//     instance.interceptors.response.use(response => {
//       NProgress.done()
//       return response
//     },error=>{
//         NProgress.done();
//         return Promise.reject(error)
//     })
//   }

//   setupStartProgress();
//   setupUpdateProgress();
//   setupStopProgress();

// }

// loadProgressBar();

// const downloadEL = document.getElementById("download");
// downloadEL.addEventListener("click",e=>{
//     instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg').then(result=>{
//         console.log(result.data);
//     })
// })

// const uploadEl = document.getElementById("upload");

// uploadEl.addEventListener("click",e=>{
//     const data = new FormData();
//     const fileEl = document.getElementById('file') as HTMLInputElement;

//     if(fileEl.files){
//         data.append("file",fileEl.files[0]);
//         instance.post("/more/upload",data).then(result=>{
//             console.log(result.data);
//         })
//     }
// })

// axios
//   .post(
//     '/more/post',
//     {
//       a: 1
//     },
//     {
//       auth: {
//         username: 'chenwl',
//         password: '123456'
//       }
//     }
//   )
//   .then(res => {
//     console.log(res.data)
//   })

// axios
//   .get('/more/304')
//   .then(res => {
//     console.log(res)
//   })
//   .catch((e: AxiosError) => {
//     console.log(e.message)
//   })

// axios.get("/more/304",{
//     validateStatus(status){
//         return status >=200 && status<400
//     }
// }).then(res=>{
//     console.log(res);
// }).catch((e:AxiosError)=>{
//     console.log(e.message);
// })


// axios
//   .get('/more/get', { params: new URLSearchParams('a=b&c=d') })
//   .then(res => console.log(res.data))

// axios
//   .get('/more/get', { params: { a: 1, b: 2, c: ['A', 'B', 'C'] } })
//   .then(res => console.log(res.data))

// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, { arrayFormat: 'brackets' })
//   }
// })

// instance
//   .get('/more/get', {
//     params: {
//       a: 1,
//       b: 2,
//       c: ['a', 'b', 'c']
//     }
//   })
//   .then(res => {
//     console.log(res.data)
//   })


// const instance = axios.create({
//   baseURL:"https://img.mukewang.com/"
// });

// instance.get('5cc01a7b0001a33718720632.jpg');

// instance.get(
//   'http://5b0988e595225.cdn.sohucs.com/images/20190322/0f289dc3ee4447e1926af998691781ad.jpeg'
// )



function getA(){
  return axios.get("/more/A")
}

function getB(){
  return axios.get("/more/B")
}

axios.all([getA(),getB()]).then(axios.spread((resA,resB)=>{
  console.log(resA.data);
  console.log(resB.data);  
}));

axios.all([getA(), getB()]).then(([resA,resB])=>{
  console.log(resA.data);
  console.log(resB.data); 
})

const fakeConfig = {
  baseURL:"https://www/baidu.com",
  url:"/user/12345",
  params:{
    idClient:1,
    idTest:2,
    testString: "thisIsTest"
  }
}

console.log(axios.getUri(fakeConfig));
