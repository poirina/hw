class Main{
    constructor(){
        this.main = document.createElement('main');
        this.main.classList.add('main');
        this.main.innerHTML = `
        <h1>Main<h1>`;
    }
    router(){
        let hash = location.hash.slice(1);
        if (!hash) hash = 'home'
        import(`./${hash}.js`)
            .then(module =>{
                this.main.innerHTML = '';
                this.main.append(module.default);
            })
            .catch(error =>{
                this.main.innerHTML = '<h1>404</h1>'
            });
    }
    init(){
        window.addEventListener('hashchange', () =>{
            this.router();
        });
        window.addEventListener('load', ()=>{
            const a = document.querySelectorAll('a[href="/"]');
            a.forEach(elem =>{
                elem.addEventListener('click', e =>{
                    e.preventDefault();
                    location.hash = '';
                });
            });
        });
        return this.main;
    }
}
export default new Main().init();