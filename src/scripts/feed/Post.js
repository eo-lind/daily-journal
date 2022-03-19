
  export const Post = (postObject) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const date = new Date(postObject.timestamp);


    return `
      <section class="post">
        <header class="post__header">
            <h2>${postObject.concept}</h2>
        </header>
        <div class="post__body">${postObject.entry}</div>
        <footer class="post__footer">
          <section>
            <div>Mood: ${postObject.mood}</div>
            <div>${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</div>
          </section>
          <div><button id="edit--${postObject.id}">Edit</button></div>
        </footer>
      </section>
    `
  }
