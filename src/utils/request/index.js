async function request (url = '', params = {}) {
  const { method = 'GET', headers } = params

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      ...headers
    },
    credentials: 'include'
  }

  console.log('URL:', url)
  console.log('Config:', config)

  return fetch(url, config)
    .then(checkJSON)
    .then(async res => {
      console.log('Response status:', res.status)
      console.log('Response Headers:', res.headers.map)

      return res.text()
    })
    .then(text => parseJSON(text, url))
    .catch((e) => rejectRequest(e, url))
}

function parseJSON (resText, url) {
  if (resText) {
    console.log(`Response for URL ${url}:`, JSON.parse(resText))
    return JSON.parse(resText)
  }
  return resText
}

function checkJSON (response) {
  const contentType = response.headers.get('content-type')
  if (!contentType || !contentType.includes('application/json')) {
    console.log('JSON response was not found')
  }
  return response
}

function rejectRequest (e, url) {
  return new Promise((resolve, reject) => {
    console.log('Error in request:' + url + ': ' + e.message)
    console.log('Stack trace:', e.stack)
    reject(e)
  })
}

export function imageSearchAPIRequest (url, params, data) {
  return request('' + url, params, data)
}



export default request
