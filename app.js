Vue.createApp({
  data() {
    return {
      name: "Demetre",
      age: 26,
      favNum: Math.random().toFixed(2),
      imgURL:
        "https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256",
    };
  },
}).mount("#assignment");
