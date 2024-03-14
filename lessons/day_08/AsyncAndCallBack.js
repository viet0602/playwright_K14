
//Asynchronous: Là khả năng thực hiện các tác vụ đồng thời với nhau
// callback: Một cái nào đó mà tôi sẽ gọi lại sau khi tôi xử lý xong
//setTimeout(askQuestion, 3000 ) - askQuestion() sẽ được thực thi sau 3 giây, askQuestion - định nghĩa hàm chứ không phải thực thi hàm
/**
 * 
Tác vụ nào asynchonous thì đặt cái call back ở phía cuối cho nó xử ký
 */
//Asynchronous
function sendRequest(url, callback) {
  console.log(`Sending request to: ${url}`);
  setTimeout(function () {
    callback({status: 200});
  }, 1000);
}

//Asynchronous
function processResponse(response, callback) {
    console.log("Processing response:" ,response);
   setTimeout(function () {
    callback(response.status);
  }, 1000);
}

//Synchronous
function validateResponse(statusCode) {
  if (statusCode === 200) {
    console.log("Request successful");
  } else {
    console.err("Request failed", status);
  }
}

const targetUrl = "https://sdetpro.com";
sendRequest(targetUrl, function (response) {
    processResponse(response, function (statusCode) {
        validateResponse(statusCode);
    });
});

