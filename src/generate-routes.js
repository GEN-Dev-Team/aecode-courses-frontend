const fs = require("fs");
const path = require("path");

async function getSecondaryCourseIds() {
  try {
    const response = await fetch(
      "https://webcoursesback-26hk.onrender.com/secondarycourses"
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
      "https://webcoursesback-26hk.onrender.com/course"
    );
    const courses = await response.json();
    return courses.map((course) => course.secCourseId);
  } catch (error) {
    console.error("Error fetching masive course IDs:", error);
    return [];
  }
}

async function getUserIds() {
  try {
    const response = await fetch(
      "https://webcoursesback-26hk.onrender.com/userprofile/list"
    );
    const users = await response.json();
    return users.map((user) => user.userId);
  } catch (error) {
    console.error("Error fetching user IDs:", error);
    return [];
  }
}

async function generateRoutes() {
  const secCourseIds = await getSecondaryCourseIds();
  const masiveCourseIds = await getMasiveCourseIds();
  const userIds = await getUserIds();
  const routes = [];

  routes.push("/courses");
  routes.push("/admin-panel");
  routes.push("/payment");

  secCourseIds.forEach((id) => {
    routes.push(`/courses/secondary-course-detail/${id}`);
  });

  masiveCourseIds.forEach((id) => {
    routes.push(`/courses/masive-course-detail/${id}`);
  });

  userIds.forEach((id) => {
    routes.push(`/profile/${id}`);
  });

  const routesFile = path.join(__dirname, "routes.txt");
  fs.writeFileSync(routesFile, routes.join("\n"));

  console.log(`Routes generated in ${routesFile}`);
}

generateRoutes().catch(console.error);
