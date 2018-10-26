function calc() {
  var graph = readyGraph(basicGraph);
  var start = document.getElementById("dep").value;
  var finish = document.getElementById("arr").value;

  var shortestPath = solve(graph,start,finish);
  console.log(shortestPath);
  document.getElementById("demo").innerHTML = shortestPath.path;
  document.getElementById("demo1").innerHTML = shortestPath.path.dist;
}

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

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 650, function(){
        window.location.hash = hash;
      });
    } 
  });
});
$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  })
})