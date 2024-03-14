//Asynchronous
function sendRequest(url, callback) {
  console.log(`Sending request to: ${url}`);
  // Promise
  // Thenable chaining
  /**
   * // CALLBACK HELL
   * callback
   *  anothercallback
   *      anotheranothercallback
   * 
   * // PROMISE
   * callback()
   * .then()
   * anothercallback()
   * .then()
   * anotheranothercallback()
   */

  fetch(url).then(function (response) {
    callback(response);
  });
}

//Synchronous
function processResponse(response) {
  console.log("Processing response:", response);
  return response.status;
}

//Synchronous
function validateResponse(statusCode) {
  if (statusCode === 200) {
    console.log("Request successful");
  } else {
    console.err("Request failed", status);
  }
}

const targetUrl = "https://jsonplaceholder.typicode.com/todos/1";
sendRequest(targetUrl, function (response) {
  const statusCode = processResponse(response);
  validateResponse(statusCode);
  });
