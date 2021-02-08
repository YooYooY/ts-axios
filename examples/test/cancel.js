function Cancel(reason) {
  this.message = reason
}

function CancekToken(executor) {
  let reason = null
  let resolve = null
  const cancel = message => {
    if(reason) return;
    reason = new Cancel(message);
    resolve(reason)
  }
  const promise = new Promise(r => (resolve = r))
  executor(cancel)
  return promise
}

CancekToken.source = function() {
  let cancel = () => {}
  let token = new CancekToken(c => (cancel = c))

  return {
    token,
    cancel
  }
}

const source = CancekToken.source()

axios('/simple/get', {
  cancelToken: source.token
}).catch(error => {
  if (axios.isCancel(error)) {
    console.log(error)
  }
})

source.cancel('canceled http request 1')

let cancel
axios('/simple/get', {
  cancelToken: new CancekToken(c => {
    cancel = c
  })
}).catch(error => {
  if (axios.isCancel(error)) {
    console.log(error)
  }
})
cancel('canceled http request 2')

function axios(url, config) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(config.method || 'GET', url)
    xhr.responseType = config.responseType || 'json'

    if (config.cancelToken) {
      config.cancelToken.then(reason => {
        xhr.abort()
        reject(reason)
      })
    }

    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(xhr)
      }
    }
    xhr.send(config.data ? JSON.stringify(config.data) : null)
  })
}

axios.isCancel = function(error) {
  return error instanceof Cancel
}
