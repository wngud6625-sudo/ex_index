window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".video-card");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close")
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            modal.classList.add("active");
        });
    });
    // modal close 클릭 시
    close.addEventListener("click" ,()=>{
modal.classList.remove("active");
    })
});
