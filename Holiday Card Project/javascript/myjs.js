var imageArray = [
	"http://static.srcdn.com/slir/w1000-h500-q90-c1000:500/wp-content/uploads/2-doctor-strange.jpg",
	"https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-137144955-1500x1000.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/ba/1c/4b/ba1c4bee6aaef5d36cb214f57d340683.jpg",
	"http://funnyasduck.net/wp-content/uploads/2012/11/funny-finally-caught-tail-happy-dog-pics.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/e5/fd/24/e5fd24ae126e67723c9dbb91c66a02ef.jpg"
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

$("h1").html(outputString);


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Cheerfulness');
data.addRows([
  ['Matt', 30],
  ['Brian', 10],
  ['The Dog', 42],
  ['Mom', 30],
  ['Dad', 20]
]);

var chartWidth = $(window).width()*0.35;

// Set chart options
var options = {
	'title':'Cheerfulness of My Family',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#FFFAE4',
    'colors': ['#40627C'],
    'fontName': 'Love Ya Like A Sister'
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}




