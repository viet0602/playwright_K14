const { sendRequest } = require("./RequestHelper");

//Consts difinition
const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";
const url = BASE_URL + SLUG;

const userId = 1;
const postId = 2;

//1. Print Target Post
printTargetPost(userId, postId);

// Print All Posts
printAllPosts(userId);

async function printTargetPost(userId, postId) {
  const filteredPosts = await _getAllPosts(userId);
  const targetPost = filteredPosts.filter(function (post) {
    return post.id === postId;
  })[0];
  if (targetPost) {
    console.log(targetPost);
  } else {
    console.log(
      `The post ID: ${postId} is not existing for the user ID: ${userId}`
    );
  }
}

async function printAllPosts(userId) {
  const allPosts = await _getAllPosts(userId);
  console.log(allPosts);
}

async function _getAllPosts(userId) {
  const posts = await sendRequest(url);
  return posts.filter(function (post) {
    return post.userId === userId;
  });
}
