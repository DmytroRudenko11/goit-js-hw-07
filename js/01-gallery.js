import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onClickOpenModal);

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

function onClickOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  gallery.addEventListener("keydown", onClickCloseModal);

  function onClickCloseModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
