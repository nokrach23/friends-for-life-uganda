(() => {
  const messages = {
    valueMissing: "Please complete this field.",
    typeMismatch: "Please enter a valid email address.",
    tooShort: "Please provide a little more detail.",
  };

  document.querySelectorAll("[data-validated-form]").forEach((form) => {
    const fields = form.querySelectorAll("input, select, textarea");
    const showError = (field) => {
      const error = form.querySelector(`[data-error-for="${field.id}"]`);
      if (!error) return field.validity.valid;
      const key = Object.keys(messages).find((name) => field.validity[name]);
      error.textContent = field.validity.valid
        ? ""
        : messages[key] || "Please check this field.";
      field.setAttribute("aria-invalid", String(!field.validity.valid));
      if (!field.validity.valid)
        field.setAttribute("aria-describedby", `${field.id}-error`);
      else field.removeAttribute("aria-describedby");
      return field.validity.valid;
    };

    fields.forEach((field) => {
      const error = form.querySelector(`[data-error-for="${field.id}"]`);
      if (error) error.id = `${field.id}-error`;
      field.addEventListener("blur", () => showError(field));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") showError(field);
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const valid = [...fields].map(showError).every(Boolean);
      if (!valid) {
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      const status = form.querySelector(".form__status");
      status?.classList.add("is-visible");
      status?.focus();
      form.reset();
      fields.forEach((field) => field.removeAttribute("aria-invalid"));
    });
  });

  const requestedType = new URLSearchParams(window.location.search).get("type");
  const typeField = document.querySelector('select[name="type"]');
  if (requestedType && typeField) {
    const option = [...typeField.options].find(
      (item) => item.value.toLowerCase() === requestedType.toLowerCase(),
    );
    if (option) typeField.value = option.value;
  }
})();
