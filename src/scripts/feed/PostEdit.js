export const PostEdit = (postObj) => {
  return `
	<div class="newPost">
	<h3>Edit This Post</h3>
		<div>
			<input value="${postObj.concept}"
				   name="postTitle"
				   class="newPost__input"
				   type="text"
				   id="conceptsCovered"
				   placeholder="Concepts covered" />
		</div>
		<div>
			<input value="${postObj.mood}"
				   name="postMood"
				   class="newPost__input"
				   type="text"
				   id="mood"
				   placeholder="Mood" />
		</div>

    	<textarea name="postDescription"
    	class="newPost__input newPost__description" id="journalEntry" 
    	placeholder="Journal entry">${postObj.entry}</textarea>
		
		<input type="hidden" value="${postObj.id}" name="postId">
		<input type="hidden" value="${postObj.timestamp}" name="postTime">	
		<button id="updatePost__${postObj.id}">Update</button>
		<button id="newPost__cancel">Cancel</button>
	</div>
	`;
};
