// js/write.js

// 로그인한 사용자 확인
auth.onAuthStateChanged((user) => {
  if (!user) {
    alert("로그인이 필요합니다.");
    window.location.href = "login.html";
    return;
  }

  const form = document.getElementById("post-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    try {
      await db.collection("posts").add({
        title: title,
        content: content,
        createdAt: new Date(),
        author: user.email
      });

      alert("게시글이 등록되었습니다.");
      window.location.href = "index.html";
    } catch (error) {
      alert("게시 실패: " + error.message);
    }
  });
});
