import React from "react";

const Formulaire = () => {
  return (
    <>
      <form class="row g-3 m-5">
        <div class="col-12">
          <label for="name" class="form-label">
            Nom
          </label>
          <input
            type="name"
            class="form-control mb-3 p-3 bg-body-secondary"
            id="name"
            name="name"
            // value="Mark"
            placeholder="Entrez votre nom"
          />
        </div>
        <div class="col-12">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control mb-3 p-3 bg-body-secondary"
            id="email"
            name="email"
            // value="Otto"
            placeholder="Entrez votre email"
          />
        </div>
        <div class="col-12">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            class="form-control mb-3 p-3 bg-body-secondary"
            id="message"
            name="message"
            // value="Otto"
            rows={10}
            placeholder="Laissez moi un message"
          />
        </div>
        <div class="col-12 text-end">
          <button class="btn btn-primary btn-contact" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulaire;
