function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function LikeButton() {

}

function Promote() {

}

function Search_submit() {

}

function Megan() {

}

function editProfile() {
    window.location.href = "Edit_Profile.html"
}

function HomePictureSave() {

}

function HomePictureEdit() {

}
