import '../styles/accordion.css';

function Accordion() {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>Dia de Semana</b> 
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>De segunda-feira a sexta-feira:</p>
                  <p>- Valor Diária: R$ 600,00</p>
                  <p>- Entrada às 08h</p>
                  <p>- Saída às 20h</p>
                  <p>Valores referentes somente a locação externa</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>Final de Semana</b> 
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Sábado e domingo:</p>
                  <p>- Valor Diária: R$ 1000,00</p>
                  <p>- Entrada no sábado às 08h</p>
                  <p>- Saída no domingo às 20h</p>
                  <p>Valores referentes somente a locação externa</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>Locações Noturnas</b>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Todos os dias:</p>
                  <p>- Valor Diária: R$ 850,00</p>
                  <p>- Entrada às 22h</p>
                  <p>- Saída às 06h</p>
                  <p>Valores referentes somente a locação externa</p>
                </div>
              </div>
            </div>
          </div>
    );
}
export default Accordion;
