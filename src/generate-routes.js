const fs = require("fs");
const path = require("path");

async function getSecondaryUrlnames() {
  try {
    const response = await fetch(
      // "https://backend-productodigital.onrender.com/secondarycourses"
      "https://webcoursesback-alg9.onrender.com/secondarycourses"
    );
    const courses = await response.json();
    return courses.map((course) => course.urlname);
  } catch (error) {
    console.error("Error fetching secondary course IDs:", error);
    return [];
  }
}

async function generateRoutes() {
  const secUrlnames = await getSecondaryUrlnames();
  // const masiveCourseIds = await getMasiveCourseIds();
  const routes = [];

  routes.push("/training");
  routes.push("/admin-panel");
  routes.push("/payment");
  routes.push("/community");
  routes.push("/shopping");

  secUrlnames.forEach((urlname) => {
    routes.push(`/training/${urlname}`);
  });

  // masiveCourseIds.forEach((id) => {
  //   routes.push(`/training/e-learning/${id}`);
  // });

  const routesFile = path.join(__dirname, "routes.txt");
  fs.writeFileSync(routesFile, routes.join("\n"));

  console.log(`Routes generated in ${routesFile}`);
}

generateRoutes().catch(console.error);
