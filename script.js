const container = document.getElementById("post-container")

posts.forEach((post, index) => {
  post.liked = false

  const postHTML = `
    <section class="post">
      <div class="post-header">
        <img src="${post.avatar}" class="avatar">
        <div>
          <h3>${post.name}</h3>
          <p>${post.location}</p>
        </div>
      </div>

      <div class="post-image-container">
        <img src="${post.post}" class="post-image" id="post-img-${index}">
        <img src="images/like-transparent.png" class="heart-overlay" id="heart-${index}">
      </div>

      <div class="post-actions">
        <img src="images/like.png" class="like-icon" id="like-${index}">
        <img src="images/comment.png">
        <img src="images/share.png">
      </div>

      <p class="likes" id="likes-${index}">${post.likes} likes</p>

      <div class="comment-list">
        <p><strong>${post.username}</strong> ${post.comment}</p>
      </div>
    </section>
  `
  container.innerHTML += postHTML
})

posts.forEach((post, index) => {
  const likeBtn = document.getElementById(`like-${index}`)
  const heartOverlay = document.getElementById(`heart-${index}`)
  const likeCount = document.getElementById(`likes-${index}`)

  likeBtn.addEventListener("click", () => {
    post.liked = !post.liked

    if (post.liked) {
      post.likes += 1
      likeBtn.src = "images/red-like.png"
      heartOverlay.classList.add("show")
      setTimeout(() => heartOverlay.classList.remove("show"), 600)
    } else {
      post.likes -= 1
      likeBtn.src = "images/like.png"
    }

    likeCount.textContent = `${post.likes} likes`
  })
})

// Menü toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("dropdown").classList.toggle("hidden")
})
