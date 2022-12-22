class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "POST",
        body: JSON.stringify(post),
      });
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: "GET",
      });
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: "GET",
      });
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  "https://n-js-blog-default-rtdb.firebaseio.com"
);
