module.exports = {
  apps: [
    {
      name: "softcorp",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      watch: false,
    },
  ],
};
