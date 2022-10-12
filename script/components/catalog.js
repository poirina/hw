import { getApiData } from "./api/spa.js";
class Catalog{
    constructor(){
        this.catalog = document.createElement('div');
        this.catalog.classList.add('catalog');
        this.catalog.innerHTML = '<h1>Catalog page</h1>';
    }
    async initComponent(){
        const data = await getApiData();
        this.catalog.innerHTML = '';
        const catalogContainer = document.createElement('div');
        catalogContainer.classList.add('catalog')
        data.forEach(element => {
            const product = document.createElement('div');
            product.classList.add('product');
            product.innerHTML = `
            <div class="product">
        <div class="img">
            <a href="#Product/${element.id}"><img src="${element.image}" alt=""></a>
        </div>
        <p class="text"><a href="#Product/${element.id}">${element.title}</a></p>
        <span class="price">${element.proce}</span>
        <span class="raiting">${element.raiting.rate}</span>
        </div>
            `;
        catalogContainer.append(product);
        });
        this.catalog.append
    }
    init(){
        return this.catalog;
    }
}
export default new Catalog().init();