type CreateLinkProps = {
  textContent: string;
  href: string;
} & Partial<HTMLAnchorElement>;

export function create_link({ ...linkProps }: CreateLinkProps) {
  const link = document.createElement("a");

  Object.assign(link, linkProps);

  return link;
}
