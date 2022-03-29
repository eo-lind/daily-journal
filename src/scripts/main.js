import {
  getPosts,
  createPost,
  deletePost,
  getSinglePost,
  updatePost,
} from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { PostEntry } from "./feed/PostEntry.js";
import { PostEdit } from "./feed/PostEdit.js";

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

// to display the post submission form
const showPostEntry = () => {
  //Get a reference to the location on the DOM where the nav will display
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEntry();
};

/**
 * Main logic module for what should happen on initial page load for the journal
 */

const startJournal = () => {
  const postElement = document.querySelector(".postList");
  // postElement.innerHTML = ""
  showPostList();
  showPostEntry();
};

startJournal();

// event listeners

// listening for clicks anywhere in <main>
const applicationElement = document.querySelector("main");

// clicks on thhe delete button

applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("delete")) {
    const postId = event.target.id.split("__")[1];
    deletePost(postId).then((response) => {
      showPostList();
    });
  }
});

// listens for clicks on the edit button and calls showEdit()
applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const postId = event.target.id.split("__")[1];
    getSinglePost(postId).then((response) => {
      showEdit(response);
    });
  }
});

// shows the post data to be edited in the edit form
const showEdit = (postObj) => {
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEdit(postObj);
};

// listens for clicks on the update button once edit is complete
applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("updatePost")) {
    const postId = event.target.id.split("__")[1];
    //collect all the details into an object
    const conceptsCovered = document.querySelector(
      "input[name='postTitle']"
    ).value;
    const moodInput = document.querySelector("input[name='postMood']").value;
    const entryText = document.querySelector(
      "textarea[name='postDescription']"
    ).value;
    const timestamp = document.querySelector("input[name='postTime']").value;

    const postObject = {
      concept: conceptsCovered,
      mood: moodInput,
      entry: entryText,
      // userId: getLoggedInUser().id,
      timestamp: parseInt(timestamp),
      id: parseInt(postId),
    };

    updatePost(postObject).then((response) => {
      showPostList();
      showPostEntry();
    });
  }
});

// clicks on the cancel new post button
applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "newPost__cancel") {
    // clear the input fields
    showPostEntry();
  }
});

// clicks on the submit new post button
applicationElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "newPost__submit") {
    // collect the input values into an object to post to the DB
    const concept = document.querySelector("input[name='postTitle']").value;
    const mood = document.querySelector("input[name='postMood']").value;
    const entry = document.querySelector(
      "textarea[name='postDescription']"
    ).value;
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
      timestamp: Date.now(),
      concept: concept,
      entry: entry,
      mood: mood,
    };

    createPost(postObject).then(() => {
      showPostList();
      document.getElementById("conceptsCovered").value = "";
      document.getElementById("mood").value = "";
      document.getElementById("journalEntry").value = "";
    });
  }
});
