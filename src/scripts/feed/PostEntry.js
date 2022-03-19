export const PostEntry = () => {
    return `
    <div class="newPost">
            <div>
                <input value=""
                       name="postTitle"
                       class="newPost__input"
                       type="text"
                       id="conceptsCovered"
                       placeholder="Concepts covered" />
            </div>
            <div>
            <input value=""
                   name="postMood"
                   class="newPost__input"
                   type="text"
                   id="mood"
                   placeholder="Mood" />
        </div>
            <textarea name="postDescription"
                class="newPost__input newPost__description" id="journalEntry"
                placeholder="Journal entry"></textarea>

            <button id="newPost__submit">Save</button>
            <button id="newPost__cancel">Cancel</button>
        </div>
    `
}

