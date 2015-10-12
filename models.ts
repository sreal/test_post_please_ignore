export class MenuLink {
  label: string;
  href: string;
  enabled: boolean;
  constructor(label, href, enabled=true) {
    this.label = label;
    this.href = href;
    this.enabled = (typeof enabled === 'undefined') ? true: !!enabled;
  }
}
