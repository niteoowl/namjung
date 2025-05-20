// js/post.js

// URL에서 id 가져오기
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

const postDiv = document.getElementById("post");

if (!postId) {
  postDiv.innerHTML = "<p>잘못된 접근입니다.</p>";
} else {
  db.collection("posts")
    .doc(postId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        postDiv.innerHTML = "<p>게시글을 찾을 수 없습니다.</p>";
        return;
      }

      const post = doc.data();
      const date = post.createdAt?.toDate?.().toLocaleString() ?? "시간 정보 없음";

      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content.replace(/\n/g, "<br />")}</p>
        <p><small>작성자: ${post.author} · ${date}</small></p>
      `;
    })
    .catch((err) => {
      postDiv.innerHTML = "<p>불러오기 실패: " + err.message + "</p>";
    });
}
