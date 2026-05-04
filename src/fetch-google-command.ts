import { dispatch, fetch, string, unistd } from 'jxa-lib';

/**
 * Demonstrates how to use the Dispatch framework to fetch webpage contents. `fetch()` here is
 * custom built in jxa-lib to use `NSURLSession`.
 */
export default function fetchGoogle() {
  const sema = new dispatch.DispatchSemaphore(0);

  fetch('https://www.google.com/')
    .then((x) => {
      if (x.data) {
        console.log(string.stringWithData(x.data));
      }
      sema.signal();
    })
    .catch((_) => {
      console.log('Caught error');
      sema.signal();
    });

  while (sema.waitForever() != 0) {
    unistd.sleep(1);
  }
  return 0;
}
