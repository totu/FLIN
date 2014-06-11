function save_options() {
  if (document.getElementsByName('window-type')[0].checked)
    var window_type = 'panel'
  else
    var window_type = 'popup'

  chrome.storage.sync.set({
    window_type: window_type,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
}

var init = function() {
  chrome.storage.sync.get('window_type', function(obj){
    if (typeof obj.window_type == 'undefined' || obj.window_type == 'popup') {
      document.getElementsByName('window-type')[1].checked = true
    } else {
      document.getElementsByName('window-type')[0].checked = true
    }
  })
}

document.addEventListener('DOMContentLoaded', init);
document.getElementById('save').addEventListener('click', save_options);
