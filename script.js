// function createcard(titles,cName,views,monthsold,duration,thumbnail){
//     let card=document.createElement(`div`)
//     card.className="cards"
//     document.body.querySelector(".container").append(card)    
// }
function import_img(url) {
    var x = document.createElement("IMG");
    x.setAttribute("src", url);
    x.setAttribute("width", "170px");
    x.setAttribute("height", "150px");
    x.setAttribute("alt", "image not available");
    document.body.querySelector(".container").lastChild.appendChild(x);
}
function import_title(titles, cname, views, monthold) {
    let t = document.createElement(`div`);
    t.className = "cont"
    document.body.querySelector(".container").lastChild.appendChild(t);
    let s = document.createElement(`div`);
    s.innerHTML = titles
    document.body.querySelector(".cont").appendChild(s);
    let c = document.createElement(`div`);

    if (views < 1000000) {
        views /= 1000;
        c.innerHTML = cname + "&#183;" + parseInt(views) + "K" + "&#183;" + monthold + " months ago"
    }
    else {
        views /= 1000000;
        c.innerHTML = cname + "&#183;" + parseInt(views) + "M" + "&#183;" + monthold + " months ago"
    }
    c.className = "cnames"
    document.body.querySelector(".cont").appendChild(c);
}
function import_duration(duration) {
    let y = document.createElement("div");
    y.innerHTML = duration
    y.className = "time"
    document.body.querySelector(".container").lastChild.appendChild(y);
}
function createcard(cname, title, view, monthsold, duration_vd, img_url) {
    let card = document.createElement(`div`)
    card.className = "cards"
    document.body.querySelector(".container").append(card)
    // card.textContent = titles
    import_img(img_url)
    import_duration(duration_vd)
    import_title(title, cname, view, monthsold)
}
for (let index = 1; index <= 4; index++) {
    if (confirm("Do you want to create a card?")) {
        createcard(prompt("Enter the name of your Youtbe Channel : "), prompt("Enter the title of your video : "), prompt("Enter the number of views on your video : "), prompt("How many months old the video is : "), prompt("Enter the duration of video : "), prompt("Enter a URL of image : "))
    }
    else {
        alert("You are exited")
        break;
    }
    index--
}
