/**
 * Arrow function : Là 1 hàm có dấu mũi tên, giúp cho synctax gọn gàng hơn - ngắn và đơn giản hơn. Không cần dùng 'return'
 * trong trường hợp mình có 1 statement
 */
// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function |Function expression
const addArrow = (a, b) => a + b;
console.log(add(1)); // return NaN because 1 với undefined  = NaN

// No param
const sayHello = () => {
  console.log("Hello");
};
console.log(sayHello());
// object is an instant of a class

// One param - cho phép bỏ dấu ngoặc đơn
const intArr = [1, 2, 3, 4, 5];
intArr.filter((value) => value % 2 !== 0);

// Arrow còn có thể dùng kết hợp với destructuring
const tempPost = { userId: 1, id: 2, title: "abc", body: "xyz" };
//const convertPost = post => new Post(post.userId, post.id, post.title, post.body);
const convertPost = ({ userId, id, title, body }) =>
  new Post(userId, id, title, body);
console.log(convertPost(tempPost));