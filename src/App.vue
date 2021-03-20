<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/joke">Joke</router-link>
    </div>

    <router-view />

    <a
      id="footer-link"
      href="https://github.com/BrodyRas/creative-project-3.git"
    >
      <div id="footer">
        <img src="@/assets/images/gitLogo.png" alt="GitHub Logo" />
        <p>See Source Code</p>
      </div>
    </a>
  </div>
</template>

<style>
body{
  background-color: rgb(242, 248, 241);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: Green;
}

#footer-link {
  text-decoration: none;
}

#footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer:hover {
  font-size: 1.1em;
}

#footer:hover img {
  width: 55px;
}

#footer img {
  width: 50px;
  margin-right: 10px;
  transition: all 0.3s;
}

#footer p {
  font-size: 1em;
  transition: all 0.3s;
}
</style>
