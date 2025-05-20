// js/index.js

const postList = document.getElementById("post-list");

db.collection("posts")
  .orderBy("createdAt", "desc")
  .get()
  .then((snapshot) => {
    if (snapshot.empty) {
      postList.innerHTML = "<p>게시글이 없습니다.</p>";
      return;
    }

    let html = "<ul>";
    snapshot.forEach((doc) => {
      const post = doc.data();
      const date = post.createdAt?.toDate?.().toLocaleString() ?? "시간 정보 없음";

      html += `
        <li>
          <a href="post.html?id=${doc.id}"><strong>${post.title}</strong></a><br />
          <small>${post.author} · ${date}</small>
        </li>
        <hr />
      `;
    });
    html += "</ul>";
    postList.innerHTML = html;
  })
  .catch((err) => {
    postList.innerHTML = "<p>불러오기 실패: " + err.message + "</p>";
  });
