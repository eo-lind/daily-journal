export const getPosts = () => {
  return fetch("http://localhost:8088/posts?_sort=id&_order=desc")
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};

export const createPost = (postObj) => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  }).then((response) => response.json());
};

// to fetch a specific post from the database to be deleted
export const deletePost = (postId) => {
  return fetch(`http://localhost:8088/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
