var w_type = 'popup';

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.storage.sync.get('window_type', function(obj) {
		if (typeof(obj.window_type) == 'undefined')
			w_type = 'popup'
		else
			w_type = obj.window_type

		chrome.windows.create({
	  	type: w_type,
	  	url: "https://www.netflix.com",
		}, function (w) {
		  chrome.windows.update(w.id, {
		    width: 1238,
		    height: 720,
		    focused : true
		  })
		});
	});
});
