<script>
  let username = "";
  let password = "";

  async function register() {
    const response = await fetch("/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      console.error("Registration failed");
    } else {
      console.log("User registered!");
    }
  }
</script>

<main>
  <h1>User Management</h1>
  <input bind:value={username} placeholder="Username" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button on:click={register}>Register</button>
</main>