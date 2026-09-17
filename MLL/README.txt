# Trisha × Varun — Boyfriend's Day Website

A minimal, editorial-style interactive website made for Varun.

## Folder structure

boyfriends-day/
│
├── index.html
├── style.css
├── script.js
└── images/
    ├── us1.jpg
    ├── us2.jpg
    ├── fav-varun.jpg
    ├── song1.jpg
    ├── song2.jpg
    ├── song3.jpg
    └── song4.jpg

## How to run

1. Open this folder in VS Code.
2. Put your photos/screenshots into the `images` folder.
3. Rename them to match the filenames above, OR change the filenames in `index.html`.
4. Open `index.html` in a browser.

For the easiest development experience, install the VS Code extension "Live Server"
and choose "Open with Live Server" on index.html.

## What to edit

Most personal text is marked with:

INSERT ...

The 50/reasons section is controlled from `script.js`:

const reasons = [
    "INSERT REASON 01",
    ...
];

You can add as many reasons as you want.

## Lyric images

No music is played by this website.

Replace:

song1.jpg
song2.jpg
song3.jpg
song4.jpg

with your own lyric screenshots.

Clicking a lyric screenshot opens it larger in a clean lightbox.

## Notes

The Google Fonts used by the design require an internet connection.
The site still works without them, but it will fall back to system fonts.


## Current personal layout

The timeline now uses:
- us1.jpg
- fav-varun.jpg
- us2.jpg

The birthday and terrace photo slots were removed.

The soundtrack now supports 13 lyric screenshots:
song1.jpg through song13.jpg.

No audio is played.

All "INSERT ..." text is intentionally left in the code so you can edit it yourself.
