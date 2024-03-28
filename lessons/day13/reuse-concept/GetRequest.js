//Child class, concrete class
const Request = require("./Request");
// extends - dùng lại code của parent class(Request - parent class)
class GetRequest extends Request {

    // Overriding: giống tên method giống nhau
    setMethod(method) {
        // copy lại hết tất cả các properties của header và thêm method

        this.headers = {...this.headers, method: 'GET'};
    }
}
 module.exports = GetRequest;