import { create_div } from "./create_div";
import { create_link } from "./create_link";
import { create_paragraph } from "./create_paragraph";

export function create_footer() {
  const footer_text = create_paragraph({
    textContent: "Created by John Farrell (2025)",
  });

  const link = create_link({
    textContent: "JohnFarrell.dev",
    href: "https://www.johnfarrell.dev/",
    target: "_blank",
    referrerPolicy: "no-referrer",
    rel: "noreferrer",
  });

  const container = create_div({
    className: "container",
  });

  container.appendChild(footer_text);
  container.appendChild(link);

  const hr = document.createElement("hr");

  const footer = document.createElement("footer");
  footer.appendChild(hr);
  footer.appendChild(container);

  document.querySelector("main")?.insertAdjacentElement("afterend", footer);
}
