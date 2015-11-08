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

export class ExperimentSummary {
  title: string;
  description: string;
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}
