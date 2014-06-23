// generate random number, used to make each row appear distinct for this example
function randomInt(max){
  return Math.floor(Math.random() * max) + 1;
}

var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var tableData = [];

for (var i=1; i<=1; i++){
  var row = Ti.UI.createTableViewRow({
    className:'forumEvent', // used to improve table performance
    selectedBackgroundColor:'white',
    rowIndex:i, // custom property, useful for determining the row during events
    height:110
  });
  
  var imageAvatar = Ti.UI.createImageView({
    image: 'vlc.jpg',
    left:10, top:5,
    width:50, height:50
  });
  row.add(imageAvatar);
  
  var labelUserName = Ti.UI.createLabel({
    color:'#576996',
    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
    text:'VLC',
    left:70, top: 6,
    width:200, height: 30
  });
  row.add(labelUserName);
  
  var labelDetails = Ti.UI.createLabel({
    color:'#222',
    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
    text:'Media player',
    left:70, top:44,
    width:360
  });
  row.add(labelDetails);
  
   var labelLicense = Ti.UI.createLabel({
    color:'#222',
    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
    text:'License: GPLv2+',
    left:70, top:80,
    width:360
  });
  row.add(labelLicense);



  tableData.push(row);
}

var tableView = Ti.UI.createTableView({
  backgroundColor:'white',
  data:tableData
});

  var button = Ti.UI.createButton({
	color: 'blue',
	title : 'Download Application',
	left:70, top:120,
	height : 'auto',
	width : 'auto',
	font : {
		fontSize : '24dp'
	}
});

button.addEventListener('click', function(e) {
	Titanium.Platform.openURL('http://nightlies.videolan.org/');
});

Ti.UI.currentWindow.add(tableView);
Ti.UI.currentWindow.add(button);