let ref = "";
let pathName = document.location.pathname;
if (pathName.includes("projects") || pathName.includes("members")) {
  ref = `../`;
}
let menu = `
<div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="${ref}index.html">
                <img src="${ref}images/logo30060.webp" width="150" height="30" alt="uniMAD">
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown active">
                        <a id='about' href="${ref}index.html" class="dropdown-toggle" data-toggle="dropdown">About<i
                                class="icon-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="${ref}about.html">Mission & Vision</a></li>
                            <li><a href="${ref}facilities.html">Facilities</a></li>
                            <li><a href="${ref}awards.html">Awards</a></li>
                            <li><a href="${ref}partnerships.html">Partnerships</a></li>                            
                        </ul>
                    </li>
                    <li><a id='team' href="${ref}team.html">Team</a></li>
                    <li><a id='publications' href="${ref}publications.html">Publications</a></li>
                    <li><a id='projs' href="${ref}projs.html">Projects</a></li>
                    
                    <li><a id='news' href="${ref}news.html">News & Events</a></li>
                    <li><a id='contacts' href="${ref}contacts.html">Contacts</a></li>                                  
                </ul>
            </div>
        </div>
`;
document.querySelector("header").innerHTML = menu;

if (pathName.endsWith("news.html")) {
  document.querySelector("#news").style.color = "yellow";
} else if (pathName.endsWith("projs.html")) {
  document.querySelector("#projs").style.color = "yellow";
} else if (pathName.endsWith("team.html")) {
  document.querySelector("#team").style.color = "yellow";
} else if (
  pathName.endsWith("about.html") ||
  pathName.endsWith("facilities.html") ||
  pathName.endsWith("awards.html") ||
  pathName.endsWith("partnerships.html")
) {
  document.querySelector("#about").style.color = "yellow";
} else if (pathName.endsWith("contacts.html")) {
  document.querySelector("#contacts").style.color = "yellow";
} else if (pathName.endsWith("publications.html")) {
  document.querySelector("#publications").style.color = "yellow";
}
