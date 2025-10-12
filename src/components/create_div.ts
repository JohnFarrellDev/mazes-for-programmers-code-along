type CreateDivProps = {} & Partial<HTMLDivElement>;

export function create_div({ ...divProps }: CreateDivProps = {}) {
  const div = document.createElement("div");

  Object.assign(div, divProps);

  return div;
}
