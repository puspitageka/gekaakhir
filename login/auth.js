// AKUN DEFAULT

const defaultUsername = "heri";
const defaultPassword = "123";


// REGISTER

const registerForm = document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("newUsername").value;

    const password =
      document.getElementById("newPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Akun berhasil dibuat!");

    window.location.href = "login.html";

  });

}


// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    const savedUsername =
      localStorage.getItem("username");

    const savedPassword =
      localStorage.getItem("password");

    // LOGIN DEFAULT ATAU AKUN REGISTER

    if(

      (
        username === defaultUsername &&
        password === defaultPassword
      )

      ||

      (
        username === savedUsername &&
        password === savedPassword
      )

    ){

      alert("Login berhasil!");

      window.location.href = "index.html";

    }else{

      alert("Username atau password salah!");

    }

  });

}


// FORGOT PASSWORD

const forgotForm =
document.getElementById("forgotForm");

if(forgotForm){

  forgotForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Link reset password berhasil dikirim!");

  });

}
