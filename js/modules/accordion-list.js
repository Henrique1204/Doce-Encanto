export default class AccordionList {
    // Construtor da classe
    constructor(listaItens, classeAtiva) {
        // Seleciona os itens que iremos usar
        this.accordinList = document.querySelectorAll(listaItens);
        // Define a classe que será aplicada, caso não seja passado é usado "ativo"
        this.classeAtiva = (classeAtiva === undefined) ? "ativo" : classeAtiva;
    }

    // Método que troca a classe dos itens
    toggleAccordion(item) {
        // Troca a classe do item clicado
        item.classList.toggle(this.classeAtiva);
        // Troca a classe do próximo item após o item clicado
        item.nextElementSibling.classList.toggle(this.classeAtiva);
    }

    // Método que adiciona o evento
    addEvento() {
        // Confere se os itens passados existem
        if (this.accordinList.length) {
            // Percorre os itens e adiciona os eventos
            this.accordinList.forEach((item) => {
                // Adiciona o evento de click aos itens
                item.addEventListener("click", () => this.toggleAccordion(item));
                // Adiciona o evento de touch aos itens
                item.addEventListener("touch", () => this.toggleAccordion(item));
            });
        }
    }

    iniciar() {
        if (this.accordinList.length) {
            this.toggleAccordion(this.accordinList[0]);
            this.addEvento();
        }

        return this;
    }
}