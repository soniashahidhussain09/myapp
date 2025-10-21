document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Stop page reload

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('message').innerText = '✅ Login Successful!';
      console.log(data.token);
      // ✅ Redirect to homepage or dashboard
      window.location.href = 'index.html';
    } else {
      document.getElementById('message').innerText = '❌ ' + data.message;
    }

  } catch (error) {
    document.getElementById('message').innerText = '⚠️ Error connecting to server';
  }
});
