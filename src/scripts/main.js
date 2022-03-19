import { getPosts, createPost } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { PostEntry } from "./feed/PostEntry.js";

const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts);
    })
}

  // to display the post submission form
  const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
  }

/**
 * Main logic module for what should happen on initial page load for the journal
 */

const startJournal = () => {
    const postElement = document.querySelector(".postList");
	// postElement.innerHTML = ""
    showPostList()
    showPostEntry()
}

startJournal();


// event listeners

// listening for clicks anywhere in <main>
const applicationElement = document.querySelector("main")

// clicks on the edit button
applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

// clicks on the cancel new post button
applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        // clear the input fields
        document.getElementById('conceptsCovered').value = ''
        document.getElementById('mood').value = ''
        document.getElementById('journalEntry').value = ''
    }
  })
  
  // clicks on the submit new post button
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    // collect the input values into an object to post to the DB
      const concept = document.querySelector("input[name='postTitle']").value
      const mood = document.querySelector("input[name='postMood']").value
      const entry = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          timestamp: Date.now(),
          concept: concept,
          entry: entry,
          mood: mood
      }
  
        createPost(postObject)
        .then(()=>{
			showPostList()
			document.getElementById('conceptsCovered').value = ''
            document.getElementById('mood').value = ''
            document.getElementById('journalEntry').value = ''
		})
    }
  })