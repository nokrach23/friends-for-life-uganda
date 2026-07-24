(() => {
  document.querySelectorAll("[data-current-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener(
    "scroll",
    () => backToTop?.classList.toggle("is-visible", window.scrollY > 600),
    { passive: true },
  );
  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  });
})();
