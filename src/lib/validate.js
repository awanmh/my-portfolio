// Dev-only schema validation for portfolio data

const requiredProjectFields = [
  "id",
  "title",
  "category",
  "year",
  "problem",
  "image",
  "images",
  "tags",
  "githubLink",
];

export function validateProjects(projects) {
  projects.forEach((p, i) => {
    requiredProjectFields.forEach((field) => {
      if (!p[field] && p[field] !== 0) {
        console.warn(
          `[Schema] Project[${i}] "${p.title || "untitled"}" missing field: ${field}`,
        );
      }
    });
  });
}
