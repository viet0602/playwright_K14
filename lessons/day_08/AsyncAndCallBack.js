//Asynchronous: Là khả năng thực hiện các tác vụ đồng thời với nhau
//setTimeout(askQuestion, 3000 ) - askQuestion() sẽ được thực thi sau 3 giây, askQuestion - định nghĩa hàm chứ không phải thực thi hàm

function sendRequest(url){
    console.log(`Sending request to: ${url}`);
    return setTimeout(function(){
        return {status: 200};
    },1000);
}

//Asynchronous
function processResponse(response){
    dry
}