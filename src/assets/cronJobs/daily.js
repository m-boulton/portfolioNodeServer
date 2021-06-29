const cron = require("node-cron");
const projectUpdateList = require("./projectListUpdate");

const daily = cron.schedule("22 22 22 * * *", () => {
  projectUpdateList();
});

module.exports = daily;
