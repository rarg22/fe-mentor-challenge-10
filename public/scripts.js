const addFAQQuestionToggle = () => {
  const faqs = [...document.getElementsByClassName("faq")];

  faqs.map((faq) => {
    const question = faq.querySelector(".faq_question");

    question.addEventListener("click", function () {
        faq.classList.toggle('collapsed');
    });
  });
};

addFAQQuestionToggle();
