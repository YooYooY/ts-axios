// const hrefEl = document.createElement('a')

// hrefEl.setAttribute('href', 'http://localhost:3000/get')

// for (let key in hrefEl) {
//     if(hrefEl[key]){
//       console.log(key, '-', hrefEl[key])
//   }
// }


const cookie = {
  read(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
    return match ? decodeURIComponent(match[3]) : null
  }
}
console.log(document.cookie)

let age  =cookie.read("age");
console.log(age);

let name = cookie.read('name')
console.log(name);