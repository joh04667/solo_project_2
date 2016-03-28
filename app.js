// @author: Kyle Johnson
// date: 3/23/2016

  console.log("                                 _                                | \\n                                | |\n                                | |\n           |\                   | |\n          /, ~\                / /\n         X     `-.....-------./ /\n          ~-. ~  ~              |\n             \             /    |\n              \  /_     ___\   /\n              | /\ ~~~~~   \ |\n              | | \        || |\n              | |\ \       || )\n             (_/ (_/      ((_/");


// TODO: learn line breaks with ASCII art
$(document).ready(function() {
 $(".button").click(function() {
   $("img").attr("src", $(this).data("cat"));
  });
 });
