/**
 * formBuilder Tag script
 */

import {exec} from 'child_process';

/**
 * Build, push, tag and npm publish
 * @param  {String} version [description]
 */
function deploy(version) {
  // Deploy Demo
  exec('git push origin $(git subtree split --prefix demo master):gh-pages --force', function(err, stdout, stderr) {
    // Deploy Site
    exec('cd site && gulp deploy && cd ../', function(err, stdout, stderr) {
      if (!stderr) {
        console.log('Site successfully deployed');
      } else {
        console.error(stderr);
      }
    });
    if (!stderr) {
      console.log('Demo successfully deployed');
    } else {
      console.error(stderr);
    }
  });
}

export default deploy;
