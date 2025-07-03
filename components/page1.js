export function PageComponent1() {
    return `
        <section class="pages" id="page1">
            <div class="card">
                <h1>Page1</h1>
                <button class="button" onclick="changePage('page2')">Go to Page2</button>
            </div>
        </section>     
        `;
}