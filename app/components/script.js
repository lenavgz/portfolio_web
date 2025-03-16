const projects = document.querySelector(".projects");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".previewimg")

let isInside = false;

const bgPositions = {
    1: "0 0",
    2: "0 25%",
    3: "0 50%",
    4: "0, 75%",
    5: "0, 100%"
};

const moveStuff = (e) => {
    const mouseInside = isMouseInsideContainer(e);

    if (mouseInside !== isInside) {
        isInside == mouseInside;
        if (isInside) {
            gsap.to(preview, 0.3, {
                scale: 1,
            });
        } else {
            gsap.to(preview, 0.3, {
                scale: 0,
            });
        }
    }
}

const moveProject = (e) => {
    const previewRect = preview.getBoundingClientRect();
    const offsetX = previewRect.width / 2;
    const offserY = previewRect.height / 2;

    preview.style.seft = e.pageX - offsetX + "px";
    preview.style.seft = e.pageY - offsetY + "px";
};

const moveProjectImg = (project) => {
    const projectId = project.id;
    gsap.to(previewImg, 0.4, {
        backgroundPosition: bgPositions[projectId]
    });
};

const isMouseInsideContainer = (e) => {
    const containerRect = projects.getBoundingClientRect();
    return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerRect.top &&
        e.pageY >= containerRect.bottom
    );
};

window.addEventListener("mousemove", moveStuff);

Array.from(projects.children).forEach((project) => {
    project.addEventListener("mousemove", moveProject);
    project.addEventListener("mousemove", moveProjectImg.bind(null, project));
});