class FooterComponent extends HTMLElement {
  connectedCallback() {
    // Lê o atributo "base-url". Se não for informado, assume '/' (raiz)
    const base = this.getAttribute('base-url') || '/';
    console.log('Footer base definida:', base);
    this.innerHTML = `
      <!-- Rodapé -->
      <footer>
        <div class="container">
          <div class="row">
            <!-- Logo UEMA no rodapé -->
            <div class="col-md-3 mb-3">
              <img src="${base}assets/engcomp1.png" alt="Logo UEMA" class="logo-rodape" />
            </div>
            <!-- Links rápidos -->
            <div class="col-md-3 mb-3 rodape-links">
              <h5>Acesso Rápido</h5>
              <ul class="list-unstyled">
                <li><a href="${base}portal-do-aluno.html">Portal do Aluno</a></li>
                <li><a href="${base}biblioteca.html">Biblioteca</a></li>
                <li><a href="${base}calendario-academico.html">Calendário Acadêmico</a></li>
                <li><a href="${base}sistema-interno.html">Sistema Interno</a></li>
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
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/1lgl/">Luis Guilherme</a> e <a href="https://www.linkedin.com/in/pmelo22/">Patrick Melo</a></p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
