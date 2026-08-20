(function() {
  var activeTimer = null;
  var activeRow = null;
  function clearActiveTimer() {
    if (activeTimer) {
      clearTimeout(activeTimer);
      activeTimer = null;
    }
  }
  function clearHighlight() {
    if (activeRow) {
      activeRow.classList.remove('highlight-row');
      activeRow = null;
    }
    clearActiveTimer();
  }
  function blinkRow(row, times, interval) {
    if (!row) return;
    if (activeRow === row) {
      clearActiveTimer();
    } else {
      clearHighlight();
    }

    activeRow = row;

    var step = 0;
    function toggle() {
      if (step >= times * 2) {
        row.classList.remove('highlight-row');
        activeRow = null;
        activeTimer = null;
        return;
      }
      if (step % 2 === 0) {
        row.classList.add('highlight-row');
      } else {
        row.classList.remove('highlight-row');
      }
      step++;
      activeTimer = setTimeout(toggle, interval);
    }
    row.classList.remove('highlight-row');
    toggle();
  }
  function processHash() {
    var hash = window.location.hash;
    if (hash && hash !== '#') {
      var id = hash.substring(1);
      var targetElement = document.getElementById(id);
      if (targetElement) {
        var row = targetElement.closest('tr');
        if (row) {
          blinkRow(row, 3, 400);
        }
      }
    }
  }

  window.addEventListener('DOMContentLoaded', processHash);
  window.addEventListener('hashchange', processHash);
  window.addEventListener('load', processHash);
})();