import { applicationWithStandardAdditions } from 'jxa-lib';
import fetchGoogle from './fetch-google-command';
import getIconOfChromeAppsDirectory from './get-file-icon';
import refreshSelectedTags from './refresh-selected-tags';
import refreshTags from './refresh-tags';
import resetFaceTimeBlockList from './reset-facetime-block-list';

export const main = () => {
  const finder = applicationWithStandardAdditions('Finder');
  const item = finder.chooseFromList(
    [
      'Clear Badge of FaceTime.app',
      'Fetch google.com with NSURLSession (fetch-like API)',
      'Get icon of Chrome Apps.localized',
      'Refresh selected tags in Music.app',
      'Refresh all tags in Music.app',
      'Reset the FaceTime block list',
    ],
    {
      withTitle: 'jxa-lib examples',
      withPrompt:
        'Please open the associated app with the task you choose before ' +
        'clicking OK.\n\n' +
        `If you choose "Reset the FaceTime block list", have FaceTime.app's ` +
        'Preferences window already open.\n\n' +
        'Getting the icon of Chrome Apps directory may fail if Chrome has ' +
        'not yet made this directory.\n',
      multipleSelectionsAllowed: false,
      emptySelectionAllowed: false,
    },
  );
  if (!item || !item.length) {
    return 0;
  }
  switch (item[0] as string) {
    case 'Fetch google.com with NSURLSession (fetch-like API)':
      return fetchGoogle();

    case 'Refresh selected tags in Music.app':
      return refreshSelectedTags();

    case 'Refresh all tags in Music.app':
      return refreshTags();

    case 'Reset the FaceTime block list':
      return resetFaceTimeBlockList();

    case 'Get icon of Chrome Apps.localized':
      return getIconOfChromeAppsDirectory();

    default:
      return 1;
  }
};
