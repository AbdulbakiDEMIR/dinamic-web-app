export function Blogs(blogs){
    var blogsContent = ""
    
    blogsContent = blogs.map(data => `
        ${MainContent(data)}
    `).join('');


    return `
        <section id="blogs">
            <div class="container-xxl">
                <div class="row">
                    <div class="col-12 col-xl-8 mx-auto">
                        <h2 class="animate-top2">Bloglar</h2>
                        <div class="row row-cols-md-3 row-cols-2">
                            ${blogsContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

function MainContent(data) {
    return `
        <div class="col p-2 animate-top1"">
            <div class="card text-bg-dark shadow-1 border-0">
                <div class="card-image ratio ratio-1x1">
                    <img src="${data.img}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        ${data.header}
                    </h5>
                    <p class="card-text">
                        ${data.explanation}
                    </p>
                </div>
                <div class="card-bottom">
                    <span>
                        <i class="fa-regular fa-calendar me-1"></i>
                        ${data.date}
                    </span>
                    <a href="${data.link}" target="_blank" class="rounded-pill">
                        <i class="fa-brands fa-github me-1"></i>
                        İncele
                    </a>
                </div>
            </div>    
        </div>
    `
}