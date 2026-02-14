Place your MP3 audio files here for the app to use.

Expected filenames:
- song_1.mp3  -> landing page (`/`)
- song_2.mp3  -> collection page (`/collection`)
- song_3.mp3  -> message pages (`/message/:id`)

You can add additional files and update `src/app/components/MusicController.tsx` to map other routes.

Example: to use a custom file for `/message/2`, add `song_message_2.mp3` and update the mapping logic.
