// @ts-ignore
const viewer = window.pannellum.viewer("panoramaContainer", {
  type: "equirectangular",
  panorama: "/160002.webp",
  autoLoad: true,
  showZoomCtrl: true,
  mouseZoom: true,
  hfov: 100,
  minHfov: 20,
});

// Assume you have initialized the viewer globally
// @ts-ignore

// Replace these with your target values
const targetPitch = 47; // vertical angle, e.g., 10 degrees
const targetYaw = 0; // horizontal angle, e.g., 45 degrees
const targetHfov = 75; // zoom/fov, lower = more zoomed in

window.addEventListener("keydown", (event) => {
  if (event.key === "z" || event.key === "Z") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(targetPitch, targetYaw, targetHfov, 400);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(0, 0, 100, 600);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(targetPitch, targetYaw, targetHfov, 600);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "2") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(90, targetYaw, targetHfov, 600);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "3") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(-15, targetYaw, 50, 600);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "4") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(-40, targetYaw, targetHfov, 600);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "5") {
    // Move camera smoothly over 1 second to the specified coordinates and zoom
    viewer.lookAt(-25, targetYaw, 40, 600);
  }
});
