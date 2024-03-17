const { sendRequest } = require("../utils/RequestHelper");
class RequestHandler {
  // Methods
  async printTargetPost(userId, postId, url) {
    // Return the returned data as a Post data model from class Post
    const filteredPosts = await this._getAllPosts(userId, url);
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

  async printAllPosts(userId, url) {
    const allPosts = await this._getAllPosts(userId, url);
    console.log(allPosts);
  }

  async _getAllPosts(userId, url) {
    const posts = await sendRequest(url);
    return posts.filter(function (post) {
      return post.userId === userId;
    });
  }
}
module.exports = RequestHandler;
