// js/auth.js

// 회원가입 처리
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("회원가입 완료!");
        window.location.href = "index.html"; // 홈으로 이동
      })
      .catch((error) => {
        alert("에러: " + error.message);
      });
  });
}

// 로그인 처리
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("로그인 성공!");
        window.location.href = "index.html"; // 홈으로 이동
      })
      .catch((error) => {
        alert("에러: " + error.message);
      });
  });
}
