class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Rodapé -->
        <footer>
          <div class="container">
            <div class="row">
              <!-- Logo UEMA no rodapé -->
              <div class="col-md-3 mb-3">
                <img src="assets/engcomp1.png" alt="Logo UEMA" class="logo-rodape" />
              </div>
              <!-- Links rápidos -->
              <div class="col-md-3 mb-3 rodape-links">
                <h5>Acesso Rápido</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Portal do Aluno</a></li>
                  <li><a href="#">Biblioteca</a></li>
                  <li><a href="#">Calendário Acadêmico</a></li>
                  <li><a href="#">Sistema Interno</a></li>
                </ul>
              </div>
              <!-- Informações de contato -->
              <div class="col-md-3 mb-3">
                <h5>Contato</h5>
                <p>Rua Exemplo, 123 - São Luís, MA</p>
                <p>Telefone: (98) 99999-9999</p>
                <p>E-mail: <a href="mailto:contato@uema.br">contato@uema.br</a></p>
              </div>
            </div>
            <div class="rodape-copy">
              <p>© 2025 UEMA - Todos os direitos reservados.</p>
              <p>Desenvolvido por <a href="https://www.linkedin.com/in/1lgl/">Luis Guilherme</a></p>
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  