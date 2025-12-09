# Online Auction System - Phase 2

## Project Overview
This is an online auction platform with:
- Viewer mode: Anyone can see the auction without login.
- Bidder mode: Requires login/registration.
- Admin mode: Manage players, teams, and bids.

## File Structure
- `index.html` – Main page with auction info and bidder login/registration.
- `admin.html` – Admin panel (username: QWERTYUIOP1234, password: bluezone0025)
- `app.js` – Core logic and Firebase integration.
- `firebase.js` – Firebase configuration for database.
- `script.js` – Handles frontend interactions (login/registration, bidding UI).
- `style.css` – Styling for all pages.

## How to Run
1. Clone this repository.
2. Open `index.html` in a web browser.
3. Ensure Firebase is correctly configured in `firebase.js` for live auction updates.
4. Admins can log in at `admin.html`.

## Notes
- Default bid increment: 0.5 Cr
- Viewer mode is read-only; bidders need credentials.
- Admin credentials are hardcoded for Phase 2.
