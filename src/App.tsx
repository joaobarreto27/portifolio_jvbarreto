import { Send, Cloud, Database, Settings, Sparkles, ArrowRight, Github, Linkedin, MapPin } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const linkedInUrl = 'https://www.linkedin.com/in/jo%C3%A3o-vitor-barreto-495a6a222/';
const githubUrl = 'https://github.com/joaobarreto27';
const contactEmail = 'joao.vito1951@gmail.com';
const locationLabel = 'Santo André, SP, Brasil';

const toolCards = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud AWS',
    tools: ['S3', 'VPC', 'EC2', 'RDS', 'Lambda', 'EventBridge', 'Secrets Manager'],
  },
  {
    icon: <Database size={24} />,
    title: 'Data Engineering',
    tools: ['PySpark', 'Python', 'SQL', 'Pandas', 'Data Lake', 'ETL'],
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Airflow & Docker',
    tools: ['Apache Airflow', 'Docker', 'CI/CD'],
  },
  {
    icon: <Settings size={24} />,
    title: 'Observabilidade e DataQuality',
    tools: ['Logs', 'Alertas', 'Auditoria', 'Monitoramento', 'Pydantic', 'Pandera'],
  },
];

const education = [
  {
    degree: 'Pós-graduação Lato Sensu',
    field: 'Engenharia de Dados',
    institution: 'PUC Minas',
    period: 'Ago de 2025 – Out de 2026'
  },
    {
    degree: 'Graduação',
    field: 'Logística',
    institution: 'Unicid',
    period: 'Jan de 2022 – Jun de 2024'
  }
];

const projects = [
  {
    title: 'Lakehouse Orquestrado com PySpark, Apache Airflow e AWS',
    description: 'Arquitetura de dados moderna com Delta Lake, PySpark e observabilidade completa para analytics.',
    highlights: ['PySpark', 'Apache Airflow', 'Data Lake', 'AWS'],
    repoUrl: 'https://github.com/joaobarreto27/market-data-lakehouse-orchestrator'
  },
  {
    title: 'ETL com Pandas e Apache Airflow para Dados de Criptomoedas',
    description: 'Pipeline de dados automatizado para coleta e processamento de dados de criptomoedas usando Apache Airflow, Docker e AWS.',
    highlights: ['Apache Airflow', 'Docker', 'Pandas', 'ETL'],
    repoUrl: 'https://github.com/joaobarreto27/etl-bitcoin-jd'
  }
];


function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Engenheiro de Dados & Arquitetura AWS</p>
          <h1>
            João Barreto
          </h1>
          <p>
            Conduzo projetos end-to-end de dados com AWS, PySpark, Airflow e Docker,
            entregando arquiteturas escaláveis, eficientes e prontas para produção.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Ver projetos <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#about">
              Sobre 📋
            </a>
            <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noreferrer">
              Linkedin <Linkedin size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Fale comigo <Send size={18} />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-card">
            <h2>Impactos e resultados</h2>
            <ul>
              <li>📉 Economia de custos superior a 80% em cloud.</li>
              <li>⚡ +90% em velocidade de processamento com modelagem e otimização.</li>
              <li>🔄 CI/CD e DataOps com deploys seguros e monitoramento contínuo.</li>
              <li>📊 Democratização de dados com Apache Superset e Power BI.</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="about" className="section section-light">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-content">
              <h2>Sobre</h2>
              <p>
                Engenheiro de Dados com sólida trajetória na condução de projetos
                end-to-end, desde o levantamento de requisitos até a entrega final de
                arquiteturas escaláveis.
              </p>
              <p>
                Tenho experiência no ecossistema AWS e no desenvolvimento de pipelines de 
                dados ponta a ponta, utilizando Docker para conteinerização, PySpark para 
                processamento distribuído e Apache Airflow para orquestração, sempre com foco 
                em eficiência, governança e otimização de custos.
              </p>
            </div>
            <div className="about-photo">
              <div className="about-photo-frame">
                <img src="/me.png" alt="João Barreto" className="about-photo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="section-inner">
          <h2>Ferramentas e conhecimentos</h2>
          <p className="section-copy">
            Tecnologias e práticas que uso para entregar projetos de dados confiáveis
            e de alto impacto.
          </p>
          <div className="feature-grid">
            {toolCards.map((tool) => (
              <article key={tool.title} className="feature-card card-hover">
                <div className="feature-header">
                  {tool.icon}
                  <h3>{tool.title}</h3>
                </div>
                <div className="feature-meta">
                  {tool.tools.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section section-dark">
        <div className="section-inner">
          <h2>Formação acadêmica</h2>
          <p className="section-copy">
            Minha formação educacional em engenharia de dados.
          </p>
          <div className="education-list">
            {education.map((edu, index) => (
              <article key={index} className="education-card">
                <h3>{edu.degree}</h3>
                <p className="education-field">{edu.field}</p>
                <div className="education-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-dark">
        <div className="section-inner">
          <h2>Projetos em destaque</h2>
          <p className="section-copy">
            Projetos que demonstram minha expertise em engenharia de dados, cloud e automação.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card card-hover">
                <div>
                  <span className="project-label">Projeto</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                {project.repoUrl && (
                  <a
                    className="button button-secondary project-link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver no GitHub <Github size={16} />
                  </a>
                )}
              </article>
            ))}
            <article className="project-card project-placeholder card-hover">
              <div>
                <span className="project-label">Em breve</span>
                <h3>Novo projeto</h3>
                <p>Pronto para novos desafios de dados, nuvem e automação.</p>
              </div>
              <div className="project-meta">
                <span className="tag">DataOps</span>
                <span className="tag">Streaming</span>
                <span className="tag">Observability</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-dark contact-section">
        <div className="section-inner contact-column">
          <div className="contact-copy">
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar</h2>
            <p>
              Se você busca um profissional que entrega arquiteturas de dados robustas
              com AWS, automação e governança, vamos conversar.
            </p>
            <p>
              Estou aberto para trabalho remoto, híbrido ou presencial e pronto para colaborar em projetos de
              dados, analytics e soluções em nuvem.
            </p>
          </div>
          <div className="contact-grid">
            <a className="contact-card card-hover" href={linkedInUrl} target="_blank" rel="noreferrer">
              <div className="contact-icon">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="contact-card-label">LinkedIn</p>
                <strong>João Barreto</strong>
              </div>
            </a>
            <a className="contact-card card-hover" href={`mailto:${contactEmail}`}>
              <div className="contact-icon">
                <Send size={20} />
              </div>
              <div>
                <p className="contact-card-label">E-mail</p>
                <strong>{contactEmail}</strong>
              </div>
            </a>
            <div className="contact-card card-hover contact-info-card">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact-card-label">Localização</p>
                <strong>{locationLabel}</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Aberto a trabalho remoto
                </p>
              </div>
            </div>
            <a className="contact-card card-hover" href={githubUrl} target="_blank" rel="noreferrer">
              <div className="contact-icon">
                <Github size={20} />
              </div>
              <div>
                <p className="contact-card-label">GitHub</p>
                <strong>github.com/joaobarreto27</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 João Barreto — Engenharia de Dados & Cloud na AWS.</p>
      </footer>
    </div>
  );
}

export default App;
