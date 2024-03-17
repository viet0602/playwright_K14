const Post = require("./Post");
const RequestHandler = require("./RequestHanler");

lab11();

// Create RequestHandler object
async function lab11() {
    
  const userId = 1;
  const postId = 2;
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const SLUG = "/posts";
  const url = BASE_URL + SLUG;

  const requestHandler = new RequestHandler();
  await requestHandler.printTargetPost(userId, postId, url);
  await requestHandler.printAllPosts(userId, url);
}
