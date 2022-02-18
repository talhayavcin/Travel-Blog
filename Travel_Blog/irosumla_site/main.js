const items = ["talha"];

document.getElementById('more1').addEventListener('click', loadMore);


function loadMore() {
    $("#content").append("<div>+"+items[i]+"</div>")
}
loadMore();
