//Child class, concrete class
const Request = require("./Request");
// extends - dùng lại code của parent class(Request - parent class)
class PostRequest extends Request {

    setMethod(method) {
        // copy lại hết tất cả các properties của header và thêm method
        this.headers = {...this.headers, method: 'POST'};
    }
}
 module.exports = PostRequest;