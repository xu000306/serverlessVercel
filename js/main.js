//https://serverless-vercel-rouge.vercel.app/
document.addEventListener("DOMContentLoaded", init);

const MODE = Object.freeze({
  DEV: "DEV",
  PROD: "PRODUCTION",
  STAGING: "STAGING",
});
let mode = (() => {
  //127.0.0.1:5500- origin
  //127.0.0.1-hostname
  if (location.hostname == "localhost" || location.hostname == "127.0.0.1") {
    return MODE.DEV; //DEV
  }
  if (location.hostname.endsWith("github.io")) {
    return MODE.STAGING;
  }
  if (location.hostname.includes("vercel.app")) {
    return MODE.PROD;
  }
})();
const log = (msg, level = "info") => {
  switch (level) {
    case "info":
      if (mode === MODE.DEV) {
        console.log(msg);
      }
      break;
    case "warn":
      console.warn(msg);

      break;
    case "error":
      console.error(msg);
  }
};

function init() {
  //page is ready to use
  log("hello");
  log("yikes", "warn");
  log("ah crap!!!", "error");
}
