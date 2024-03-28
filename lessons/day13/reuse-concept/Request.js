/**
 * When sending a request: URL, headers (send method)
 * Get response
 * Verify response status
 *
 */
const RequestParent = require("./RequestParent");
class Request extends RequestParent {
    
  constructor(url, headers = {}) {
    super();
    this.url = url;
    this.headers = headers;
  }
  // ...this.headers - spread syntax - copy gtri 1 array 1 object, sau đó mình thay thế một hoặc nhièu giá trị
  // Overriding: set method
  setMethod(method) {
    this.headers = { ...this.headers, method: method };
  }
  send() {
    console.log(`Sending request to: ${JSON.stringify(this.headers)}`);
    this.response = { statusCode: 200 };
  }

  verifyResponseStatus() {
    console.log(`Status code: ${this.response.statusCode}`);
  }
}
module.exports = Request;
