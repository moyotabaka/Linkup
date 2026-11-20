# LinkUp — Firebase-backed social app

This project intentionally contains **no sample people, posts, events, hangouts or polls**. Content appears after real members create it.

## Included features
- Email/password registration and sign-in, Google sign-in, Apple sign-in (Apple requires Apple Developer configuration).
- Editable profile: name, bio, course, year, interests and profile photo.
- Friend requests and accepted-friend count on profiles.
- Live Find People directory from completed member profiles.
- Member-created events and attendance.
- Member-created hangouts and joining/leaving.
- Community posts with optional photo, likes, comments, and author deletion.
- Member-created polls with 2–6 options and one vote per member.
- Live updates using Firestore listeners.
- Responsive desktop/tablet/mobile layout.

## Setup (required before real use)
1. Create a Firebase project: https://console.firebase.google.com/
2. Add a Web App. Copy its config into `firebase-config.js`.
3. Authentication → Sign-in method: enable Email/Password and Google. Configure Apple only if you have an Apple Developer account and have completed Apple's OAuth setup.
4. Authentication → Settings → Authorized domains: add your Netlify domain and localhost for development.
5. Firestore Database → Create database. Publish `firestore.rules` in Firestore Rules.
6. Storage → Get started. Publish `storage.rules` in Storage Rules.
7. Serve locally with VS Code Live Server or deploy to Netlify. ES modules do not run reliably from `file://`.
8. Create an account, complete your profile, then create your first event, hangout, post and poll.

## Deployment
- Keep `index.html`, `style.css`, `app.js`, `firebase-config.js`, `firestore.rules`, `storage.rules`, and `README_SETUP.md` together at the site root.
- Netlify build command: blank. Publish directory: `.`.
- Use a private GitHub repository and connect it to Netlify. Grant Netlify access only to this repository.
- Firebase web config is designed to be present in a public client app; it is not a service-account key. Never upload service-account credentials or private Apple keys.

## Important limits / production hardening
This is a functional Firebase client prototype, not a fully audited production social network. Before a public launch with real student data:
- Tighten Firestore rules with schema validation, content length limits, server-side moderation and anti-spam/rate limits.
- Add account deletion, report/block tools, privacy controls, email verification and password reset UI.
- Add server-side friend-count aggregation if the app grows; current friend count is derived from the user's friendship documents.
- Add moderation/admin workflows and abuse reporting.
- The friend request UI currently supports send/accept/decline. Duplicate request prevention is a basic client check; production should enforce it server-side.
- Apple sign-in requires Apple Developer configuration. Google/email login can be enabled independently.
- Data is only shared once Firebase is configured. With placeholder config, the app displays no fake/demo content and sign-in is unavailable.
