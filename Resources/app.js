var tabGrp = Ti.UI.createTabGroup();

var winOne = Ti.UI.createWindow({
  backgroundImage: 'blue_sky.jpg',
  exitOnClose: true,
  fullscreen: false,
  title: 'Communication'
});

var data = [
	{title: 'Adblock Plus', hasChild:true, dest: 'com_1.js'},
	{title: 'APG', hasChild:true, dest: 'com_2.js'},
	{title: 'ConnectBot', hasChild:true, dest: 'com_3.js'},
	{title: 'Chromium', hasChild:true, dest: 'com_4.js'},
	{title: 'Firefox for mobile', hasChild:true, dest: 'com_5.js'},
	{title: 'Funambol', hasChild:true, dest: 'com_6.js'},
	{title: 'K-9 Mail', hasChild:true, dest: 'com_7.js'},
	{title: 'Orbot', hasChild:true, dest: 'com_8.js'},
	{title: 'Sipdroid', hasChild:true, dest: 'com_9.js'},
	{title: 'Linphone', hasChild:true, dest: 'com_10.js'},
	{title: 'CSipSimple', hasChild:true, dest: 'com_11.js'},
];

var table = Ti.UI.createTableView({
	data: data
});

table.addEventListener('click', function(e){
	if(e.rowData.hasChild){
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'yellow'
			
		});
		tabOne.open(newWin);
	}
	
});

var view = Ti.UI.createView();
view.add(table);
winOne.add(view);


var dataTwo = [
	{title: 'Scummvm', hasChild:true, dest: 'emu_1.js'},
	{title: 'RetroArch', hasChild:true, dest: 'emu_2.js'},
	{title: 'VICE', hasChild:true, dest: 'emu_3.js'},
	{title: 'Dolphin', hasChild:true, dest: 'emu_4.js'},

];

var winTwo = Ti.UI.createWindow({
	title: 'Emulators',
	backgroundImage: 'blue_sky.jpg'
});

var tableTwo = Ti.UI.createTableView({
	data: dataTwo
});

tableTwo.addEventListener('click', function(e){
	if(e.rowData.hasChild){
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'blue'
			
		});
		tabTwo.open(newWin);
	}
	
});

var viewTwo = Ti.UI.createView();
viewTwo.add(tableTwo);
winTwo.add(viewTwo);





var dataThree = [
	{title: 'Fish Fillets NG', hasChild:true, dest: 'game_1.js'},
	{title: 'Freeciv', hasChild:true, dest: 'game_2.js'},
	{title: 'Frozen Bubble', hasChild:true, dest: 'game_3.js'},
	{title: 'GLtron', hasChild:true, dest: 'game_4.js'},
	{title: 'Nethack', hasChild:true, dest: 'game_5.js'},
	{title: 'robotfindskitten', hasChild:true, dest: 'game_6.js'},
	{title: 'Simon Tathams Puzzles', hasChild:true, dest: 'game_7.js'},
	{title: 'Warmux', hasChild:true, dest: 'game_8.js'},
];

var winThree = Ti.UI.createWindow({
	title: 'Games',
	backgroundImage: 'blue_sky.jpg'
});

var tableThree = Ti.UI.createTableView({
	data: dataThree
});

tableThree.addEventListener('click', function(e){
	if(e.rowData.hasChild){
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'blue'
			
		});
		tabThree.open(newWin);
	}
	
});

var viewThree = Ti.UI.createView();
viewThree.add(tableThree);
winThree.add(viewThree);


var dataFour = [
	{title: 'Fortune', hasChild:true, dest: 'gen_1.js'},
	{title: 'Barcode Scanner', hasChild:true, dest: 'gen_2.js'},
	{title: 'FBReader', hasChild:true, dest: 'gen_3.js'},
	{title: 'Google IO', hasChild:true, dest: 'gen_4.js'},
	{title: 'MyTracks', hasChild:true, dest: 'gen_5.js'},
	{title: 'Avare gps', hasChild:true, dest: 'gen_6.js'},
	{title: 'OsmAnd', hasChild:true, dest: 'gen_7.js'},
	{title: 'PressureNET', hasChild:true, dest: 'gen_8.js'},
	{title: 'Tomdroid', hasChild:true, dest: 'gen_9.js'},
	{title: 'Wikipedia', hasChild:true, dest: 'gen_10.js'},


];

var winFour = Ti.UI.createWindow({
	title: 'General',
	backgroundImage: 'blue_sky.jpg'
});

var tableFour = Ti.UI.createTableView({
	data: dataFour
});

tableFour.addEventListener('click', function(e){
	if(e.rowData.hasChild){
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'blue'
			
		});
		tabFour.open(newWin);
	}
	
});

var viewFour = Ti.UI.createView();
viewFour.add(tableFour);
winFour.add(viewFour);



Ti.UI.setBackgroundColor('#000');
var winFive = Ti.UI.createWindow({
  backgroundImage: 'blue_sky.jpg',
  exitOnClose: true,
  fullscreen: false,
  title: 'MultiMedia'
});



var dataFive = [
	{title: 'Subsonic Android Client', hasChild:true, dest: 'media_1.js'},
	{title: 'Ringdroid', hasChild:true, dest: 'media_2.js'},
	{title: 'VLC', hasChild:true, dest: 'media_3.js'},

];


var tableFive = Ti.UI.createTableView({
	data: dataFive
});

tableFive.addEventListener('click', function(e){
	if(e.rowData.hasChild){
		var newWin = Ti.UI.createWindow({
			url: e.rowData.dest,
			title: e.rowData.title,
			backgroundColor: 'yellow'
			
		});
		tabFive.open(newWin);
	}
	
});

var viewFive = Ti.UI.createView();
viewFive.add(tableFive);
winFive.add(viewFive);


var tabOne = Ti.UI.createTab({
	title: 'Communication',
	icon: 'KS_nav_ui.png',
	window: winOne
});


var tabTwo = Ti.UI.createTab({
	title: 'Emulators',
	icon: 'KS_nav_ui.png',
	window: winTwo
});

var tabThree = Ti.UI.createTab({
	title: 'Games',
	icon: 'KS_nav_ui.png',
	window: winThree
});
var tabFour = Ti.UI.createTab({
	title: 'General',
	icon: 'KS_nav_ui.png',
	window: winFour
});
var tabFive = Ti.UI.createTab({
	title: 'MultiMedia',
	icon: 'KS_nav_ui.png',
	window: winFive
});


tabGrp.addTab(tabOne);
tabGrp.addTab(tabTwo);
tabGrp.addTab(tabThree);
tabGrp.addTab(tabFour);
tabGrp.addTab(tabFive);


tabGrp.open();


