import { getPosts } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";

const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts);
    })
}

/**
 * Main logic module for what should happen on initial page load for the journal
 */

const startJournal = () => {
    const postElement = document.querySelector(".postList");
	// postElement.innerHTML = ""
}

startJournal();

showPostList()


// event listeners

// listening for clicks anywhere in <main>
const applicationElement = document.querySelector("main")

// cllicks on the edit button
applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})
