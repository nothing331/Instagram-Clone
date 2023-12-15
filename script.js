var arr = [
    { name: "test1", dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test2", dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test3", dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test4", dp: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]
var storiyan = document.querySelector(".story_header")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="storyFull">
                    <div class="story">
                        <img id="${idx}" 
                            src="${elem.dp}" />
                    </div>
                    <h5>${elem.name}</h5>
                </div>`
})
storiyan.innerHTML = clutter

storiyan.addEventListener("click", function (dets) {
    var value = arr[dets.target.id].story
    document.querySelector(".fullscreen").style.display = "block"
    document.querySelector(".fullscreen").style.backgroundImage = `url(${value})`
    document.querySelector(".totalFull").style.display = "block"

    setTimeout(function () {
        document.querySelector(".fullscreen").style.display = "none"
        document.querySelector(".totalFull").style.display = "none"
    }, 3000)
});



var posts_arr = [
    { name: "test1", dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", post: "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test2", dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", post: "https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test3", dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", post: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "test4", dp: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", post: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

var posts = document.querySelector(".post_area")
var post_clutter = ""
posts_arr.forEach(function (elem, idx) {
    post_clutter += `<div class="post_box">
                    <div class="post_info_bar">
                        <div class="post_dp">
                            <img id="${idx}"
                                src="${elem.dp}">
                        </div>
                        <h5>${elem.name}</h5>
                    </div>
                    <div class="post_img">
                        <i class="ri-heart-fill" id="heart2"></i>
                        <img
                            src="${elem.post}">
                    </div>
                    <div class="post_bar">
                        <i class="ri-heart-line" id="heart3"></i>
                        <i class="ri-heart-fill" id="heart1"></i>
                        <i class="ri-chat-3-line"></i>
                        <i class="ri-arrow-right-up-line"></i>
                    </div>
                    <div class="post_bio">
                        <h5>${elem.name}</h5>
                        <p>Anything</p>
                    </div>
                    <div class="post_com">
                        <p>view all comments</p>
                        <p>Add a comment</p>
                    </div>
                </div>`
})
posts.innerHTML = post_clutter


// post js
//likes
var postImag = document.querySelector(".post_img")
var love = document.querySelector("#heart2")
postImag.addEventListener("dblclick", function () {
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    document.querySelector("#heart3").style.display = 'none'
    document.querySelector("#heart1").style.display = 'contents'
    setTimeout(function () {
        love.style.opacity = '0'
    }, 2000)
    setTimeout(function () {
        love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1500)
})