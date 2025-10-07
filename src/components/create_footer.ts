export function create_footer() {
  const text = document.createElement("p");
  text.innerText = "Created by John Farrell (2025)";

  const link = document.createElement("a");
  link.href = "https://www.johnfarrell.dev/";
  link.target = "_blank";
  link.referrerPolicy = "no-referrer";
  link.rel = "noreferrer";
  link.text = "JohnFarrell.dev";

  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(text);
  container.appendChild(link);

  const hr = document.createElement("hr");

  const footer = document.createElement("footer");
  footer.appendChild(hr);
  footer.appendChild(container);

  document.querySelector("main")?.insertAdjacentElement("afterend", footer);
}
