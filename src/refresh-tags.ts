import { ItunesHelper } from 'jxa-lib';

export default function refreshTags() {
  const tunesApp = Application('Music') as ItunesApplication;
  const itunes = new ItunesHelper(tunesApp);
  itunes.clearOrphanedTracks();
  console.log('Please be patient!');
  for (const track of itunes.fileTracks) {
    tunesApp.refresh(track);
  }
  return 0;
}
