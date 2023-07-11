type LinkObject = {
  name: string;
  link: string;
};

export function parseResourcesString(input: string): LinkObject[] {
  const markdownLinkRegEx = /\[(.*?)]\((.*?)\)/g;

  let match;
  const linkObjects: LinkObject[] = [];

  while ((match = markdownLinkRegEx.exec(input)) !== null) {
    linkObjects.push({
      name: match[1],
      link: match[2],
    });
  }

  return linkObjects;
}
