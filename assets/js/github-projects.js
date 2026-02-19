(function () {
  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getRepoPath(project) {
    if (project.previewRepo) {
      return project.previewRepo;
    }

    try {
      var url = new URL(project.repoUrl);
      return url.pathname.replace(/^\//, "").replace(/\/$/, "");
    } catch (error) {
      return "";
    }
  }

  function buildCard(project, index) {
    var delay = 100 + index * 100;
    var repoPath = getRepoPath(project);
    var previewUrl = "https://opengraph.githubassets.com/pucusoft-preview/" + repoPath;
    var techBadges = (project.techStack || [])
      .map(function (tech) {
        return '<span class="badge bg-secondary me-1">' + escapeHtml(tech) + '</span>';
      })
      .join("");

    var demoButton = "";
    if (project.demoUrl) {
      demoButton =
        '<a href="' +
        escapeHtml(project.demoUrl) +
        '" target="_blank" class="btn btn-primary btn-sm">' +
        '<i class="bi bi-eye"></i> ' +
        escapeHtml(project.demoLabel || "Ver Demo") +
        "</a>";
    }

    return (
      '<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="' +
      delay +
      '">' +
      '<div class="portfolio-item" style="border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">' +
      '<div class="portfolio-header" style="background: ' +
      escapeHtml(project.headerGradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)") +
      '; padding: 15px; color: white;">' +
      '<div class="d-flex justify-content-between align-items-center">' +
      '<h4 style="margin: 0; font-size: 16px;">' +
      escapeHtml(project.name) +
      "</h4>" +
      '<span class="badge" style="background: rgba(255,255,255,0.2);">' +
      escapeHtml(project.badge || "Proyecto") +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="portfolio-demo" style="height: 200px; background: #fff; position: relative; overflow: hidden;">' +
      '<a href="' +
      escapeHtml(project.repoUrl) +
      '" target="_blank" style="display: block; width: 100%; height: 100%;">' +
      '<img src="' +
      escapeHtml(previewUrl) +
      '" style="width: 100%; height: 100%; object-fit: cover;" alt="' +
      escapeHtml(project.previewAlt || "Vista previa del repositorio en GitHub") +
      '" loading="lazy">' +
      "</a>" +
      '<div class="demo-overlay" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px;">' +
      '<i class="bi bi-box-arrow-up-right"></i> Puerta al Repo' +
      "</div>" +
      "</div>" +
      '<div class="portfolio-info" style="padding: 20px;">' +
      "<h5>" +
      escapeHtml(project.title || project.name) +
      "</h5>" +
      '<p style="color: #666; font-size: 14px;">' +
      escapeHtml(project.description || "") +
      "</p>" +
      '<div class="tech-stack" style="margin: 15px 0;">' +
      techBadges +
      "</div>" +
      '<div class="portfolio-links">' +
      '<a href="' +
      escapeHtml(project.repoUrl) +
      '" target="_blank" class="btn btn-outline-primary btn-sm me-2">' +
      '<i class="bi bi-github"></i> Ver Código' +
      "</a>" +
      demoButton +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function renderProjects(projects) {
    var container = document.getElementById("github-projects-grid");
    if (!container) {
      return;
    }

    container.innerHTML = (projects || []).map(buildCard).join("");

    if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }

  function renderFallback() {
    var container = document.getElementById("github-projects-grid");
    if (!container) {
      return;
    }

    container.innerHTML =
      '<div class="col-12"><div class="alert alert-warning">No se pudieron cargar los proyectos dinámicos de GitHub.</div></div>';
  }

  async function initGithubProjects() {
    try {
      var response = await fetch("assets/data/github-projects.json");
      if (!response.ok) {
        throw new Error("No se pudo cargar JSON de proyectos");
      }

      var projects = await response.json();
      renderProjects(projects);
    } catch (error) {
      renderFallback();
    }
  }

  document.addEventListener("DOMContentLoaded", initGithubProjects);
})();
