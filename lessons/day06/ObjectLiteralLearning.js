// Create
// Object literal - Khai báo tường minh - Use to construct Data object
// Các property nên viết theo carmelCase
let teo = {
  name: "teo", // name, age - key, property
  "my age": 20,
};

/**
 * READ
 * dot notation (.): Đọc dữ liệu không có khoảng trắng
 * [] synctax : Đọc dữ liệu có khoảng trắng
 */
console.log(teo.name); // dot notation
console.log(teo["my age"]); // [] synctax

/**
 * UPDATE : phải truy cập đúng property
 * 
 */
teo.name = 'Teo update';
teo["my age"] = 21;
teo.gender = "Male"; // add thêm property
console.log(teo);

/**
 * DELETE
 */

delete teo["my age"]; // delete property
