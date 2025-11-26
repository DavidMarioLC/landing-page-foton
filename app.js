/**-------- MODAL ------- */

MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

/**-------- ANIMATIONS ------- */

const { animate, scroll, stagger, inView } = Motion;

animate(
  ".hero__title",
  { y: [50, 0], opacity: [0, 1] },
  { duration: 1, delay: 0.3 }
);

animate(
  ".header__content img",
  {
    opacity: [0, 1],
    scale: [0.8, 1],
  },
  {
    duration: 0.5,
    delay: stagger(0.5, { start: 0.1 }), // Stagger de 0.8s empezando a los 0.1s
    easing: "spring(1, 80, 10, 0)",
  }
);

animate(
  ".section-details__header h2",
  { y: [30, 0], opacity: [0, 1] },
  { duration: 0.8, delay: 1.0, easing: "ease-out" }
);

animate(
  ".section-details__header strong",
  { y: [20, 0], opacity: [0, 1] },
  { duration: 0.8, delay: 1.3, easing: "ease-out" }
);

animate(
  ".section-details__content p",
  { y: [20, 0], opacity: [0, 1] },
  { duration: 0.8, delay: 1.6, easing: "ease-out" }
);

animate(
  ".characteristics",
  {
    opacity: [0, 1],
  },
  {
    duration: 0.6,
    delay: 2.0, // Después del párrafo
    easing: "ease-out",
  }
);

animate(
  ".characteristics__item",
  {
    y: [30, 0],
    opacity: [0, 1],
    scale: [0.9, 1],
  },
  {
    duration: 0.6,
    delay: stagger(0.15, { start: 3 }), // Después de .characteristics
    easing: "ease-out",
  }
);

const modelsTitle = document.querySelector(".section-models__title");
inView(
  modelsTitle,
  () => {
    animate(
      modelsTitle,
      {
        opacity: [0, 1],
        y: [50, 0],
        scale: [0.8, 1],
      },
      {
        duration: 0.8,
        easing: "spring(1, 80, 10, 0)",
      }
    );
  },
  { amount: 0.3 }
);

const modelGallery = document.querySelector(".gallery");
const modelCards = document.querySelectorAll(".gallery__item");
inView(
  modelGallery,
  () => {
    animate(
      modelCards,
      {
        opacity: [0, 1],
        scale: [0.8, 1],
        // translateY: [50, 0],
        // scale: [0.8, 1],
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
        easing: "spring(1, 80, 10, 0)",
      }
    );
  },
  { once: true }
);

const aboutSection = document.querySelector(".section-about");
inView(aboutSection, () => {
  animate(
    aboutSection,
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 1,
      easing: "ease-out",
    }
  );
});

const statsSection = document.querySelector(".section-stats");
inView(
  statsSection,
  () => {
    const statsCards = document.querySelectorAll(".section-stats__item");
    animate(
      statsCards,
      {
        opacity: [0, 1],
        y: [50, 0],
      },
      {
        duration: 0.6,
        delay: stagger(0.2),
        easing: "ease-out",
      }
    );
  },
  { once: true }
);

const sectionFormTitle = document.querySelector(".section-form__header h2");
inView(sectionFormTitle, () => {
  animate(
    sectionFormTitle,
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 0.8,
      easing: "spring(1, 80, 10, 0)",
    }
  );
});

const sectionFormParagraph = document.querySelector(".section-form__header p");
inView(sectionFormParagraph, () => {
  animate(
    sectionFormParagraph,
    {
      opacity: [0, 1],
      y: [30, 0],
    },
    {
      duration: 0.8,
      delay: 0.2,
      easing: "ease-out",
    }
  );
});

const sectionForm = document.querySelector(".section-form__content");
inView(sectionForm, () => {
  animate(
    sectionForm,
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 1,
      delay: 0.4,
      easing: "ease-out",
    }
  );
});

/**-------- FORM VALIDATIONS ------- */

// https://just-validate.dev/

const validator = new JustValidate("#basic_form", {
  errorFieldCssClass: "is-invalid",
  errorLabelStyle: {
    color: "#f85656",
    marginTop: "8px",
  },
});

validator
  .addField("#basic_name", [
    {
      rule: "required",
      errorMessage: "El nombre es obligatorio",
    },
  ])
  .addField("#basic_email", [
    {
      rule: "required",
      errorMessage: "El correo es obligatorio",
    },
  ])
  .addField("#basic_phone", [
    {
      rule: "required",
      errorMessage: "El teléfono es obligatorio",
    },
  ])
  .addField("#basic_chosen_model_select", [
    {
      rule: "required",
      errorMessage: "El modelo elegido es obligatorio",
    },
  ])
  .addField("#basic_city_select", [
    {
      rule: "required",
      errorMessage: "La ciudad es obligatoria",
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    const formData = {
      name: document.getElementById("basic_name").value,
      email: document.getElementById("basic_email").value,
      phone: document.getElementById("basic_phone").value,
      chosenModel: document.getElementById("basic_chosen_model_select").value,
      city: document.getElementById("basic_city_select").value,
    };

    console.log("Validation passes and form submitted", formData);
  });
