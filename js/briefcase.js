/*
*	Briefcase.js
*	author: Lily Madar
*	created: 7 Sept 2014
*
*	source: https://github.com/Lily2point0/briefcasejs
*/
!function(){
	var briefcase = {
		version: "1.0.0",

		getJSON: function(options, callback) {
			format = 'json';
			init(compareOptions(options), callback);
		}
	},
	config = {
		type: "spreadsheet",
		leftColumnTitle:"item",
		showTimeStamp: false,
		download: false
	},
	format;

	function init(config, callback) {
		var path = 'https://spreadsheets.google.com/feeds/list/1znpc893us2dvFvAVr-k2Ea-EPZl9xf2-VdOtqDOCPMw/1/public/values?alt=json';
		getData(path, callback);
	}

	function compareOptions(options) {
		Object.keys(config).forEach(function(i){
			if(options.hasOwnProperty(i)) {
				config[i] = options[i];
			}
		});
		
		return config;
	}

	function getData(path, callback){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if(xmlhttp.status == 200) {
					formatData(JSON.parse(xmlhttp.responseText), format, callback);
				} else {
					var div = document.createElement("div");
    				div.innerHTML = xmlhttp.responseText;

					var error_msg = {
						"responseType":"error", 
						"responseStatus":xmlhttp.status, 
						"responseMessage": div.innerText
					};


					formatData(error_msg, "error", callback);
				}	
			}
		}
		xmlhttp.open("GET", path, true);
		xmlhttp.send();
	}

	function formatData(data, format, callback) {
		var d = data;
		switch(format) {
			case 'raw':
				callback(d);
				if(config.download) {
		        	createDownloadFile(d, 'application/json');
		        }
			break;

			case 'json':
				callback(formatJSON(d.feed.entry));
			break;

			case 'csv':
				callback(formatCSV(d.feed.entry));
			break;

			case 'xml':
				callback(formatXML(d.feed.entry));
			break;

			case 'error':
				callback(data);
			break;	

			default:
				callback(d.feed.entry);
			break;
		}
	}

	function formatJSON(entry) {
		var items = [];

        for(var i = 0; i<entry.length; i++) {
            var values = [];
            var ts = "";

            Object.keys(entry[i]).forEach(function (key) {

                if(key.toString().substring(0,4) == "gsx$") {
                    var item = {};
                    var value = {};

                    var category = key.toString().substring(4, key.toString().length);
                    var entry_value = entry[i][key].$t;
                    
                    if(config.type == "form") {
						if(category == config.leftColumnTitle) {
							item.title = entry_value;
							items.push(item);
						} else {
							if(category != "timestamp") {
								value.name = category.toString();
								value.value = entry_value;
								values.push(value);
							} else {
								ts = entry_value;
							}
						}
					} else {
						if(category == config.leftColumnTitle) {
							item.title = entry_value;
							items.push(item);
						} else {
							value.name = category.toString();
							value.value = entry_value;
							values.push(value);
						}
					}
				}
            });

            items[i].categories = values;
            if(config.type == "form" && config.showTimeStamp) items[i].timestamp = ts;
        }

        if(config.download) {
        	createDownloadFile(items, 'application/json');
        }
        return items;
	}

	this.briefcase = briefcase;
}();