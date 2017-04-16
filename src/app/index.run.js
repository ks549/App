(function() {
  'use strict';

  angular
    .module('myMessageTitle')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
