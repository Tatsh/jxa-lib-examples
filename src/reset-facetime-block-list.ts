import { stdlib } from 'jxa-lib';
import path from 'ramda/es/path';

// The Preferences window in FaceTime must be already open for this to work
export default function resetFaceTimeBlockList() {
  const se = Application('System Events');
  const total = path<number>(
    [
      'processes',
      'FaceTime',
      'windows',
      'Preferences',
      'tabGroups',
      0,
      'scrollAreas',
      'tables',
      0,
      'rows',
      'length',
    ],
    se,
  )!;

  Application('FaceTime').activate();
  delay(0.2);

  for (let i = total; i >= 0; i--) {
    console.log(`${total - i} / ${total}`);
    se.keyCode(51);
  }

  return 0;
}

if ((stdlib.getenv('_') as string).endsWith('reset-facetime-block-list.ts')) {
  stdlib.exit(resetFaceTimeBlockList());
}
