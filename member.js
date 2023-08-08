function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skills-member");
    var skillsMemberClose = document.getElementById("skills-member-close");

    skills.onclick = function() {
        skillsMember.style.display = "block";
    }

    skillsMemberClose.onclick = function() {
        skillsMember.style.display = "none";
    }
}