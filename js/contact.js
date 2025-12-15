emailjs.init("3HoW1pLvRZsq2tWkH");

const form = document.getElementById("contact-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_ht7ed2g",
    "template_2cwfh7q",
    form
  )
  .then(() => {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  })
  .catch(() => {
    alert("Erro ao enviar mensagem.");
  });
});
