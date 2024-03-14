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

function printTargetPost(userId, postId) {
  _getAllPosts(userId).then(function (filteredPosts) {
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
  });
}

function printAllPosts(userId) {
  _getAllPosts(userId).then(function (filteredPosts) {
    console.log(filteredPosts);
  });
}

function _getAllPosts(userId) {
  return sendRequest(url).then(function (posts) {
    return posts.filter(function (post) {
      return post.userId === userId;
    });
  });
}
