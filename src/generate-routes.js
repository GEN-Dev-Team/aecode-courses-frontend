const fs = require("fs");
const path = require("path");

async function getSecondaryCourseIds() {
  try {
    const response = await fetch(
      "https://backend-productodigital.onrender.com/secondarycourses"
    );
    const courses = await response.json();
    return courses.map((course) => course.seccourseId);
  } catch (error) {
    console.error("Error fetching secondary course IDs:", error);
    return [];
  }
}

async function getMasiveCourseIds() {
  try {
    const response = await fetch(
      "https://backend-productodigital.onrender.com/course"
    );
    const courses = await response.json();
    return courses.map((course) => course.courseId);
  } catch (error) {
    console.error("Error fetching masive course IDs:", error);
    return [];
  }
}

async function generateRoutes() {
  const secCourseIds = await getSecondaryCourseIds();
  const masiveCourseIds = await getMasiveCourseIds();
  const routes = [];

  routes.push("/training");
  routes.push("/admin-panel");
  routes.push("/payment");

  secCourseIds.forEach((id) => {
    routes.push(`/training/module/${id}`);
  });

  masiveCourseIds.forEach((id) => {
    routes.push(`/training/e-learning/${id}`);
  });

  const routesFile = path.join(__dirname, "routes.txt");
  fs.writeFileSync(routesFile, routes.join("\n"));

  console.log(`Routes generated in ${routesFile}`);
}

generateRoutes().catch(console.error);
