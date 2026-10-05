import { siteConfig } from './siteConfig.js';

// Block types: p, ul, ol, h3, note, deletion, permissions, contact.
export const introduction = [
  { type: 'p', text: `${siteConfig.appName} ("the App") is operated by ${siteConfig.businessName} ("we", "us").` },
  { type: 'p', text: 'This Privacy Policy explains what information the App collects, why we collect it, how it is used, how it is retained, and how users can request deletion of their information.' },
  { type: 'p', text: 'The App is used by delivery drivers and dispatch administrators within our organization. It is not available for public self-service sign-up.' },
];

export const policySections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      { type: 'p', text: 'We collect the following information through the App:' },
      { type: 'h3', text: 'Precise location data' },
      { type: 'p', text: 'The App collects precise location data from drivers during an active delivery shift. This may include background location information while the App is not actively displayed on the screen.' },
      { type: 'p', text: 'Location data is used solely to:' },
      { type: 'ul', items: [
        "Show a driver's live position to authorized dispatch administrators",
        'Maintain accurate delivery records',
        'Support delivery operations',
      ] },
      { type: 'h3', text: 'Account information' },
      { type: 'p', text: 'Driver account information may include:' },
      { type: 'ul', items: ['Name', 'Phone number', 'Vehicle details', 'Email address'] },
      { type: 'p', text: "This information is entered and managed by our organization when setting up a driver's account." },
      { type: 'h3', text: 'Device and app diagnostics' },
      { type: 'p', text: 'The App may collect:' },
      { type: 'ul', items: ['Battery level', 'App version', 'Crash reports', 'Error diagnostics'] },
      { type: 'p', text: 'Crash and diagnostic information may be processed using Firebase Crashlytics to help us identify and fix technical problems and maintain application reliability.' },
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use This Information',
    content: [
      { type: 'p', text: 'Information collected through the App is used to:' },
      { type: 'ul', items: [
        "Display a driver's current and recent location to authorized dispatch administrators for active deliveries.",
        'Maintain delivery records for operational purposes.',
        'Diagnose and fix technical issues in the App.',
        'Maintain the reliability and functionality of the application.',
      ] },
      { type: 'p', text: 'We do not use the collected information for unrelated purposes.' },
    ],
  },
  {
    id: 'when-location-is-collected',
    title: 'When Location Is Collected',
    content: [
      { type: 'p', text: 'Location collection is limited to active delivery shifts. Location is collected only when:' },
      { type: 'ol', items: ['A driver is signed into the App, and', 'The driver has started an active delivery shift.'] },
      { type: 'note', text: 'Location is not collected when a driver is signed out or has not started an active shift.' },
      { type: 'h3', text: 'Background location' },
      { type: 'p', text: 'During an active delivery shift, the App may continue sending location updates while it is running in the background. For example, location updates may continue when:' },
      { type: 'ul', items: [
        "The driver's screen is locked",
        'The driver is using another application',
        'The Delivery Tracker App is not currently visible',
      ] },
      { type: 'p', text: 'Background location is required so that authorized dispatch administrators can reliably monitor active deliveries.' },
      { type: 'p', text: "When the active delivery shift ends, location collection should stop according to the application's implemented shift state." },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    content: [
      { type: 'p', text: 'We do not sell or rent driver or delivery data to third parties.' },
      { type: 'p', text: 'Driver and delivery information is stored in our Supabase database and is accessible only to authorized administrators within our organization.' },
      { type: 'p', text: 'Crash and diagnostic information is processed by Firebase Crashlytics, provided by Google, solely to help us identify and fix application bugs and technical issues.' },
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      { type: 'p', text: 'Location history is retained for a limited period for operational and record-keeping purposes. After the applicable retention period, location history is automatically deleted.' },
      { type: 'p', text: "Account information is retained for as long as the driver's account remains active with our organization." },
      // No retention duration is stated because none was provided. Add one only if it is actually implemented.
    ],
  },
  {
    id: 'data-deletion',
    title: 'Data Deletion',
    content: [
      { type: 'p', text: 'Driver accounts are created and managed directly by our organization. The App does not provide self-service account creation or account deletion.' },
      { type: 'p', text: 'A driver, or another person with a legitimate data concern, may request deletion of their personal information and location history by contacting us using the support email provided below.' },
      { type: 'p', text: 'We will review and process valid deletion requests within a reasonable timeframe.' },
      { type: 'deletion' },
    ],
  },
  { id: 'permissions', title: 'Permissions We Request', content: [{ type: 'permissions' }] },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: [
      { type: 'p', text: 'Delivery Tracker is intended for use by employed or contracted delivery drivers and authorized administrators.' },
      { type: 'p', text: 'The App is not directed toward children, and we do not knowingly collect personal information from children.' },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time. When changes are made, the updated version will be published on this page and the "Last updated" date will be changed accordingly.' },
      { type: 'p', text: 'We encourage you to review this page periodically for changes.' },
    ],
  },
  { id: 'contact', title: 'Contact Us', content: [{ type: 'contact' }] },
];

export const permissions = [
  {
    icon: 'MapPin',
    title: 'Location permission',
    text: 'The App requests location permission, including "Allow all the time" where required by the platform, because location tracking may need to continue while the application is running in the background during an active delivery shift.',
  },
  {
    icon: 'Wifi',
    title: 'Internet / network access',
    text: 'Internet access is required to synchronize delivery and location information with our servers.',
  },
];

export const summaryCards = [
  { icon: 'MapPin', title: 'Location', text: 'Collected during active delivery shifts to support live delivery tracking.' },
  { icon: 'Users', title: 'Access', text: 'Accessible only to authorized administrators within our organization.' },
  { icon: 'Clock', title: 'Retention', text: 'Location history is retained for a limited operational period and then deleted.' },
  { icon: 'Trash2', title: 'Deletion', text: 'Users can contact us to request deletion of their personal information and location history.' },
];

export const trustPoints = [
  'Access is restricted to authorized administrators.',
  'Location tracking has an operational purpose and is limited to active delivery shifts.',
  'Location history is retained for a limited period, then deleted.',
  'Anyone can request deletion of their personal data and location history.',
  'Crash diagnostics are used only to keep the App reliable.',
];
