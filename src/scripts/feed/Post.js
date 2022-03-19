
  export const Post = (postObject) => {
    return `
      <section class="post">
        <header class="post__header">
            <h2>${postObject.concept}</h2>
        </header>
        <div class="post__body">${postObject.entry}</div>
        <footer class="post__footer">
          <section>
            <div>Mood: ${postObject.mood}</div>
            <div>${postObject.timestamp}</div>
          </section>
          <div><button id="edit--${postObject.id}">Edit</button></div>
        </footer>
      </section>
    `
  }
