// Nếu dùng 1 dấu & thì kết quả trả về Calling method 1, Calling method 2, The evaluation was true: Bất chấp bên trái sai thì thực thi luôn bên phải
// 2 dấu && cho bên trái sai và bên phải đúng thì kết quả trả về Calling method 1: Phát hiện bên trái sai thì không thực hiện bên phải
// 2 dấu && cho bên trái đúng và bên phải sai thì kết quả trả về Calling method 1, Calling method 2 - 2 cái đều được thực thi

if(getFirstNum()!==0 & getSecondNum()!==0){
    console.log(" The evaluation was true....");
}

function getFirstNum(){
    console.log("Calling method 1...");
    return 1;
}

function getSecondNum(){
    console.log("Calling method 2...");
    return 2;
}