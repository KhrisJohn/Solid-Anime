document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    
    if (username === "admin123" && password === "admin456") {
  
      window.location.href = "website.html";
    } else {
      alert("Invalid username or password, Please try again.");
    }
  });
  