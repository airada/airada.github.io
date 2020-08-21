var skills = ["C#", "C++", "PYTHON", "JAVA", "GIT", "MYSQL", "UNITY", "UNREAL", "BLENDER"];

function generateBadges() {
    let skill_badges = jQuery("#skill_badges");

    for (let i = 0; i < skills.length; i++) {
        let rowHTML = "";

        rowHTML  += "<h4 class='mx-3' id='"+skills[i]+"'><a class='badge badge-pill bg-warning text-white' href='#!'>"+ skills[i]+"</a></h4>";

        skill_badges.append(rowHTML);
    }
};

function generatePortfolio() {
    let portfolio = jQuery("#portfolio_grid");
    let images = 6;
    let count = 1;

    let rowHTML = "";

    for (let i = 0; i <= (images/3); i++) {
        rowHTML += "<div class='row d-flex align-items-center justify-content-center m-3'>";

        for(let j = 1; j <= 3 && count < images + 1; j++){
             rowHTML  += "<div class='col-4'><a href='#!'><img class='img-fluid' src='assets/img/portfolio/"+count+".png' alt='' /></a></div>";
             count += 1
        }

        rowHTML += "</div>";
    }
    portfolio.append(rowHTML);
}

generateBadges();
generatePortfolio()