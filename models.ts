export class MenuLink {
  label: string;
  href: string;
  isRouterLink: boolean;
  constructor(label, href, isRouterLink=false) {
    this.label = label;
    this.href = href;
    this.isRouterLink = !!isRouterLink;
  }
}
