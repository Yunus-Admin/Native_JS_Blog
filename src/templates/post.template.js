export function renderPost(post, options = {}) {
  const tag =
    post.type === "news"
      ? '<li class="tag tag-blue tag-rounded">News</li>'
      : '<li class="tag tag-red tag-rounded">Note</li>';

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const candidate = favorites.find((p) => p.id === post.id);

  const button = candidate
    ? `<button class="button-small button-round button-danger" data-id="${post.id}" 
        data-title="${post.title}">Delete</button>`
    : `<button class="button-small button-round button-primary" data-id="${post.id}"
        data-title="${post.title}">Save</button>`;

  return `
   <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p> 
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</strong> </p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${options.withButton ? button : ""}
      </div>
    </div>
  `;
}
