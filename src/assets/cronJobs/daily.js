const cron = require("node-cron");
const projectsUpdate = require("./projectListUpdate");

const daily = cron.schedule("22 22 22 * * *", () => {
  projectsUpdate();
});

module.exports = daily;
