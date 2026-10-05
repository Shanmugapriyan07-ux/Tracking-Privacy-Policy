// Replace every bracketed placeholder before publishing.
export const siteConfig = {
  appName: 'Delivery Tracker',
  businessName: '[YOUR NAME / BUSINESS NAME]',
  supportEmail: '[YOUR SUPPORT EMAIL]',
  lastUpdated: '[DATE]',
  year: '[YEAR]',
  // Set to a real URL only if a Terms of Service page exists; otherwise leave null and the link is hidden.
  termsUrl: null,
};

export const mailto = `mailto:${siteConfig.supportEmail}`;
