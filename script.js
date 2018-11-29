function calc() {
  var graph = readyGraph(basicGraph);
  var start = document.getElementById("dep").value;
  var finish = document.getElementById("arr").value;
  var shortestPath = solve(graph,start,finish);
  var x = shortestPath.path.length;

  // Emptys display and inserts correct cards
  $('#cardDisplay').empty();
  if(x === 0) {
    $('<h1 style="text-align: center">First and Last stop</h1><div class="row"><div class="col-lg d-flex align-items-stretch""><div class="card mx-auto" style="width: 25rem">' + getPic(start) + '<div class="card-body"><h5 class="card-title">' + start + '</h5>' + getMess(start) + '</div></div></div></div>').appendTo('#cardDisplay')
  } else {
    for(var i = 0, j = x; i < j; i++) {
      if(i == 0 || i % 4 == 0) {
        var appendEl = $('<div class="row"></div>').appendTo('#cardDisplay');
        $('<div class="col-lg d-flex align-items-stretch"><div class="card">' + getPic(start) + '<div class="card-body"><h5 class="card-title">' + 1 + ': ' + start + '</h5>' + getMess(start) +'</div></div></div>').appendTo(appendEl);
      }
      $('<div class="col-lg d-flex align-items-stretch"><div class="card">' + getPic(shortestPath.path[i]) + '<div class="card-body"><h5 class="card-title">' + (i+2) + ': ' + shortestPath.path[i] + '</h5>' + getMess(shortestPath.path[i]) + '</div></div></div>').appendTo(appendEl);
    }
  }
}

// gets the proper picture for given airport

function getPic(x) {
  if(x == "Denver, CO") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://cdntr1.img.sputniknews.com/images/102167/53/1021675384.jpg" height="200" width="100">';
  } else if(x == "Dallas Fort Worth, TX") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://www.ainonline.com/sites/default/files/styles/ain30_fullwidth_large_2x/public/uploads/2013/06/792_dallas-fort-worth-airport_5077a.jpg?itok=T_5cCsK4&timestamp=1371049466" height="200" width="100">';
  } else if (x == "Orlando, FL") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://www.orlandoairports.net/site/uploads/2015/07/main-terminal.jpg" height="200" width="100">';
  } else if (x == "Washington Dulles, VA") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Washington_Dulles_International_Airport_at_Dusk.jpg" height="200" width="100">';
  } else if (x == "Houston, TX") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://www.airport-houston.com/images/houston-george-bush-intercontinental-united-hub.jpg" height="200" width="100">';
  } else if (x == "Chicago O'Hare, IL") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://bondlinkcdn.com/1348/332648_325638934118100_138929028_o-cropped.UbHU6MXpex.jpg" height="200" width="100">';
  } else if (x == "Salt Lake City, UT") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://res.cloudinary.com/simpleview/image/upload/crm/saltlake/Airport-Overview-I0_faca0589-fb35-da88-e951cdc0774cc0b6.jpg" height="200" width="100">';
  } else if (x == "John F Kennedy, NY") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://www.tripsavvy.com/thmb/D0cCvrY5zZWvX5vjr9x7JhGE5ec=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/john-f--kennedy-international-airport-521313476-59fe221813f12900372761e1.jpg" height="200" width="100">';
  } else if (x == "San Francisco, CA" ) {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://media.nbcbayarea.com/images/1200*675/10242017SFO_538724.JPG" height="200" width="100">';
  } else if (x == "Detroit, MI") {
    return '<img class="card-img-top" alt="Card Image Cap" src="https://cdn.vox-cdn.com/thumbor/3kA7cDDjC96hSS_kacFpjq4S0O4=/0x0:5100x2439/1200x675/filters:focal(2142x812:2958x1628)/cdn.vox-cdn.com/uploads/chorus_image/image/57877755/DTW_Airport_7_04__203.0.jpg" height="200" width="100">';
  }
}

// Gets corresponding message and button to the airport

function getMess(x) {
  if(x == "Denver, CO") {
    return '<p class="card-text">Denver International Airport is an international airport serving metropolitan Denver, Colorado, United States. At 33,531 acres, it is the largest airport in the United States by total land area.</p><a href="https://www.flydenver.com/" class="btn btn-primary">Take me there</a>';
  } else if(x == "Dallas Fort Worth, TX") {
    return '<p class="card-text">Dallas/Fort Worth International Airport is the primary international airport serving the Dallas–Fort Worth metroplex area in the U.S. state of Texas. It is the largest hub for American Airlines, which is headquartered near the airport.</p><a href="https://www.dfwairport.com/" class="btn btn-primary">Take me there</a>';
  } else if (x == "Orlando, FL") {
    return '<p class="card-text">Orlando International Airport is a major public airport located six miles (10 km) southeast of Downtown Orlando, Florida, United States.</p><a href="https://www.orlandoairports.net/" class="btn btn-primary">Take me there</a>';
  } else if (x == "Washington Dulles, VA") {
   return '<p class="card-text">Washington Dulles International Airport is an international airport in the eastern United States, located in Loudoun and Fairfax counties in Virginia, 26 miles west of downtown Washington, D.C.</p><a href="www.flydulles.com/" class="btn btn-primary">Take me there</a>';
  } else if (x == "Houston, TX") {
    return '<p class="card-text">George Bush Intercontinental Airport is an international airport in Houston, Texas, United States, under class B airspace, serving the Greater Houston metropolitan area.</p><a href="www.fly2houston.com/iah/overview/" class="btn btn-primary">Take me there</a>';
  } else if (x == "Chicago O'Hare, IL") {
    return '<p class="card-text">O\'Hare International Airport, typically referred to as O\'Hare Airport, Chicago O\'Hare, or simply O\'Hare, is an international airport located on the far Northwest Side of Chicago, Illinois, 14 miles northwest of the Loop business district, operated by the Chicago Department of Aviation and covering 7,627 acres.</p><a href="https://www.flychicago.com/ohare/home/pages/default.aspx" class="btn btn-primary">Take me there</a>';
  } else if (x == "Salt Lake City, UT") {
    return '<p class="card-text">Salt Lake City International Airport is a civil-military airport located about 4 miles west of Downtown Salt Lake City, Utah in the United States. The airport is the closest commercial airport for more than 2.5 million people and is within a 30-minute drive of nearly 1.3 million jobs.</p><a href="https://www.slcairport.com/" class="btn btn-primary">Take me there</a>';
  } else if (x == "John F Kennedy, NY") {
    return '<p class="card-text">John F. Kennedy International Airport is the primary international airport serving New York City. It is the busiest international air passenger gateway into North America, the 22nd-busiest airport in the world, the sixth-busiest airport in the United States, and the busiest airport in the New York airport system.</p><a href="https://www.jfkairport.com/" class="btn btn-primary">Take me there</a>';
  } else if (x == "San Francisco, CA" ) {
    return '<p class="card-text">San Francisco International Airport is an international airport 13 miles south of downtown San Francisco, California, United States, near Millbrae and San Bruno in unincorporated San Mateo County.</p><a href="https://www.flysfo.com/" class="btn btn-primary">Take me there</a>';
  } else if (x == "Detroit, MI") {
    return '<p class="card-text">Detroit Metropolitan Wayne County Airport, usually called Detroit Metro Airport, Metro Airport, or just DTW, is a major international airport in the United States covering 4,850 acres in Romulus, Michigan, a suburb of Detroit.</p><a href="https://www.metroairport.com/" class="btn btn-primary">Take me there</a>';
  }
}

// Need to fix two functions 
function myFunction() {
  const x = document.getElementById("dep").value;
  document.getElementById("depart").innerHTML = x;
}
function myFunctionArr() {
  const x = document.getElementById("arr").value;
  document.getElementById("arrival").innerHTML = x;
}


var basicGraph = [
  {start:"Denver, CO",finish:"Dallas Fort Worth, TX",distance:188},
  {start:"Denver, CO",finish:"Orlando, FL",distance:463},
  {start:"Denver, CO",finish:"Chicago O'Hare, IL",distance:248},
  {start:"Denver, CO",finish:"Salt Lake City, UT",distance:133},
  {start:"Denver, CO",finish:"John F Kennedy, NY",distance:450},

  {start:"Dallas Fort Worth, TX",finish:"Orlando, FL",distance:275},
  {start:"Dallas Fort Worth, TX",finish:"Washington Dulles, VA",distance:325},
  {start:"Dallas Fort Worth, TX",finish:"Houston, TX",distance:65},
  {start:"Dallas Fort Worth, TX",finish:"Salt Lake City, UT",distance:300},
  {start:"Dallas Fort Worth, TX",finish:"Detroit, MI",distance:275},

  {start:"Orlando, FL",finish:"Dallas Fort Worth, TX",distance:275},
  {start:"Orlando, FL",finish:"Washington Dulles, VA",distance:225},
  {start:"Orlando, FL",finish:"Houston, TX",distance:250},
  {start:"Orlando, FL",finish:"John F Kennedy, NY",distance:275},
  {start:"Orlando, FL",finish:"San Francisco, CA",distance:725},

  {start:"Washington Dulles, VA",finish:"Dallas Fort Worth, TX",distance:325},
  {start:"Washington Dulles, VA",finish:"Orlando, FL",distance:225},
  {start:"Washington Dulles, VA",finish:"Chicago O'Hare, IL",distance:175},
  {start:"Washington Dulles, VA",finish:"Salt Lake City, UT",distance:500},
  {start:"Washington Dulles, VA",finish:"John F Kennedy, NY",distance:65},

  {start:"Houston, TX",finish:"Denver, CO",distance:250},
  {start:"Houston, TX",finish:"Dallas Fort Worth, TX",distance:63},
  {start:"Houston, TX",finish:"Orlando, FL",distance:250},
  {start:"Houston, TX",finish:"Salt Lake City, UT",distance:375},
  {start:"Houston, TX",finish:"San Francisco, CA",distance:475},

  {start:"Chicago O'Hare, IL",finish:"Denver, CO",distance:248},
  {start:"Chicago O'Hare, IL",finish:"Dallas Fort Worth, TX",distance:225},
  {start:"Chicago O'Hare, IL",finish:"Houston, TX",distance:275},
  {start:"Chicago O'Hare, IL",finish:"San Francisco, CA",distance:538},
  {start:"Chicago O'Hare, IL",finish:"Detroit, MI",distance:75},

  {start:"Salt Lake City, UT",finish:"Denver, CO",distance:133},
  {start:"Salt Lake City, UT",finish:"Orlando, FL",distance:575},
  {start:"Salt Lake City, UT",finish:"Houston, TX",distance:375},
  {start:"Salt Lake City, UT",finish:"San Francisco, CA",distance:188},
  {start:"Salt Lake City, UT",finish:"Detroit, MI",distance:413},

  {start:"John F Kennedy, NY",finish:"Dallas Fort Worth, TX",distance:400},
  {start:"John F Kennedy, NY",finish:"Orlando, FL",distance:275},
  {start:"John F Kennedy, NY",finish:"Washington Dulles, VA",distance:63},
  {start:"John F Kennedy, NY",finish:"Houston, TX",distance:413},
  {start:"John F Kennedy, NY",finish:"Chicago O'Hare, IL",distance:200},

  {start:"San Francisco, CA",finish:"Denver, CO",distance:313},
  {start:"San Francisco, CA",finish:"Washington Dulles, VA",distance:700},
  {start:"San Francisco, CA",finish:"Houston, TX",distance:475},
  {start:"San Francisco, CA",finish:"Salt Lake City, UT",distance:188},
  {start:"San Francisco, CA",finish:"Detroit, MI",distance:600},

  {start:"Detroit, MI",finish:"Denver, CO",distance:313},
  {start:"Detroit, MI",finish:"Chicago O'Hare, IL",distance:75},
  {start:"Detroit, MI",finish:"Salt Lake City, UT",distance:413},
  {start:"Detroit, MI",finish:"John F Kennedy, NY",distance:150},
  {start:"Detroit, MI",finish:"San Francisco, CA",distance:600}
];

//Dijkstra's Algorithm

function solve(graph,s,f) {
    var solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;
    while(true) {
        var parent = null;
        var nearest = null;
        var dist = Infinity;
        for(var n in solutions) {
            if(!solutions[n])
                continue
            var ndist = solutions[n].dist;
            var adj = graph[n];
            for(var a in adj) {
                if(solutions[a])
                    continue;
                var d = adj[a] + ndist;
                if(d < dist) {
                    parent = solutions[n];
                    nearest = a;
                    dist = d;
                }
            }
        }
        if(dist === Infinity) {
            break;
        }
        solutions[nearest] = parent.concat(nearest);
        solutions[nearest].dist = dist;
    }
    var finish = solutions[f];
    return {path:finish};
}

// Creates proper graph

function readyGraph(paths) {
    var graph = {};
    for(var i in paths){
        var path = paths[i];
        var start=path["start"];
        var finish=path["finish"];
        var distance=path["distance"];
        if(typeof graph[start]=="undefined"){
            graph[start]={};
            graph[start][finish]=distance;
        }else{
            graph[start][finish]=distance;
        }
        if(typeof graph[finish]=="undefined"){
            graph[finish]={};
            graph[finish][start]=distance;
        }else{
            graph[finish][start]=distance;
        }
    }
    return graph;
}

//jQuery for animations

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
})

$(document).ready(function() {
  $('[data-toggle="popover"]').popover(); 
})