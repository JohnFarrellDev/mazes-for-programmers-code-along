type CreateParagraphProps = {
  textContent: string;
} & Partial<HTMLParagraphElement>;

export function create_paragraph({ ...paragraphProps }: CreateParagraphProps) {
  const paragraph = document.createElement("p");

  Object.assign(paragraph, paragraphProps);

  return paragraph;
}
