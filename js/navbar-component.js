class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar principal -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img src="assets/engecomp.png" alt="Logo UEMA" style="max-height: 40px" class="me-2" />
            <span class="text-white fw-bold d-none d-md-inline">Portal UEMA</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style="filter: invert(1) brightness(2)"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <!-- Dropdown Curso -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="cursoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Curso
                </a>
                <ul class="dropdown-menu" aria-labelledby="cursoDropdown">
                  <li><a class="dropdown-item" href="curso/direcao-secretaria.html">Direção e Secretaria</a></li>
                  <li><a class="dropdown-item" href="curso/docentes.html">Docentes</a></li>
                  <li><a class="dropdown-item" href="curso/colegiado.html">Colegiado</a></li>
                  <li><a class="dropdown-item" href="curso/nucleo-docente-estruturante.html">Núcleo Docente Estruturante</a></li>
                  <li><a class="dropdown-item" href="curso/infraestrutura.html">Infraestrutura</a></li>
                  <li><a class="dropdown-item" href="curso/projeto-pedagogico1.html">Projeto Pedagógico</a></li>
                  <li><a class="dropdown-item" href="curso/grade-curricular.html">Grade Curricular</a></li>
                  <li><a class="dropdown-item" href="curso/estagio-supervisionado.html">Estágio Supervisionado</a></li>
                </ul>
              </li>
              <!-- Dropdown Gestão -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="gestaoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gestão
                </a>
                <ul class="dropdown-menu" aria-labelledby="gestaoDropdown">
                  <li><a class="dropdown-item" href="gestão/empresa-junior.html">Empresa Júnior</a></li>
                  <li><a class="dropdown-item" href="gestão/diretoria-academica.html">Diretoria Acadêmica</a></li>
                  <li><a class="dropdown-item" href="gestão/projetos-especiais.html">Projetos Especiais</a></li>
                </ul>
              </li>
              <!-- Dropdown Pesquisa -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="pesquisaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pesquisa
                </a>
                <ul class="dropdown-menu" aria-labelledby="pesquisaDropdown">
                  <li><a class="dropdown-item" href="pesquisa/iniciacao-cientifica.html">Iniciação Científica</a></li>
                  <li><a class="dropdown-item" href="pesquisa/pibic.html">PIBIC</a></li>
                  <li><a class="dropdown-item" href="pesquisa/pibiti.html">PIBITI</a></li>
                  <li><a class="dropdown-item" href="pesquisa/laboratorios.html">Laboratórios</a></li>
                </ul>
              </li>
              <!-- Dropdown Departamentos -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="departamentosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Departamentos
                </a>
                <ul class="dropdown-menu" aria-labelledby="departamentosDropdown">
                  <li><a class="dropdown-item" href="departamentos/noticias.html">Notícias</a></li>
                  <li><a class="dropdown-item" href="departamentos/projetos.html">Projetos</a></li>
                  <li><a class="dropdown-item" href="departamentos/publicacoes.html">Publicações</a></li>
                </ul>
              </li>
              <!-- Dropdown Indicadores -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="indicadoresDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Indicadores
                </a>
                <ul class="dropdown-menu" aria-labelledby="indicadoresDropdown">
                  <li><a class="dropdown-item" href="indicadores/estatisticas.html">Estatísticas</a></li>
                </ul>
              </li>
              <!-- Dropdown Contato -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="contatoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contato
                </a>
                <ul class="dropdown-menu" aria-labelledby="contatoDropdown">
                  <li><a class="dropdown-item" href="contato/contato.html">Informações de Contato</a></li>
                  <li><a class="dropdown-item" href="contato/localizacao.html">Localização</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
