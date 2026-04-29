import { useState } from "react";

const skillsData = [
  {
    phase: "Phase 1 — Fondations",
    emoji: "🧱",
    duration: "2 mois",
    color: "#e8f4f0",
    accent: "#2d9e6b",
    categories: [
      {
        name: "HTML",
        skills: [
          { id: "h1", label: "Structure de base (DOCTYPE, head, body)", done: true },
          { id: "h2", label: "Balises sémantiques (header, nav, main, footer, section, article)", done: false },
          { id: "h3", label: "Textes (h1-h6, p, span, strong, em)", done: true },
          { id: "h4", label: "Liens & images (a, img, attributs alt/href)", done: false },
          { id: "h5", label: "Listes (ul, ol, li)", done: true },
          { id: "h6", label: "Formulaires (form, input, label, button, select)", done: true },
          { id: "h7", label: "Tableaux (table, tr, td, th)", done: false },
          { id: "h8", label: "Attributs globaux (id, class, data-*)", done: true },
        ]
      },
      {
        name: "CSS",
        skills: [
          { id: "c1", label: "Sélecteurs (classe, id, éléments, pseudo-classes)", done: true },
          { id: "c2", label: "Box model (margin, padding, border, width, height)", done: true },
          { id: "c3", label: "Display (block, inline, inline-block, none)", done: true },
          { id: "c4", label: "Flexbox (justify-content, align-items, flex-wrap...)", done: true },
          { id: "c5", label: "Grid (grid-template-columns, gap, grid-area...)", done: true },
          { id: "c6", label: "Position (relative, absolute, fixed, sticky)", done: false },
          { id: "c7", label: "Typographie (font-family, size, weight, line-height)", done: true },
          { id: "c8", label: "Couleurs & fonds (color, background, opacity, gradients)", done: true },
          { id: "c9", label: "Responsive & media queries (@media, breakpoints)", done: false },
          { id: "c10", label: "Transitions & animations (transition, @keyframes)", done: false },
          { id: "c11", label: "Variables CSS (--custom-property, var())", done: false },
        ]
      }
    ]
  },
  {
    phase: "Phase 2 — JavaScript",
    emoji: "⚡",
    duration: "3 mois",
    color: "#fef9ec",
    accent: "#d4a017",
    categories: [
      {
        name: "JS Fondamentaux",
        skills: [
          { id: "j1", label: "Variables (var, let, const) & types de données", done: true },
          { id: "j2", label: "Opérateurs (arithmétiques, comparaison, logiques)", done: false },
          { id: "j3", label: "Conditions (if/else, switch, ternaire)", done: true },
          { id: "j4", label: "Boucles (for, while, forEach)", done: true },
          { id: "j5", label: "Fonctions (déclaration, arrow functions, paramètres)", done: true },
          { id: "j6", label: "Tableaux (map, filter, find, push, splice...)", done: true },
          { id: "j7", label: "Objets (propriétés, méthodes, destructuring)", done: true },
          { id: "j8", label: "Template literals & string methods", done: true },
        ]
      },
      {
        name: "JS Interactif",
        skills: [
          { id: "j9", label: "DOM — Sélectionner des éléments (querySelector)", done: true },
          { id: "j10", label: "DOM — Modifier le contenu (textContent, innerHTML)", done: true },
          { id: "j11", label: "DOM — Modifier les styles et classes", done: true },
          { id: "j12", label: "Événements (addEventListener, click, submit, keydown...)", done: true },
          { id: "j13", label: "Formulaires — récupérer et valider les données", done: true },
          { id: "j14", label: "LocalStorage (stocker des données côté navigateur)", done: true },
        ]
      },
      {
        name: "JS Avancé (bases)",
        skills: [
          { id: "j15", label: "Promises & async/await", done: false },
          { id: "j16", label: "Fetch API (appels HTTP, JSON)", done: false },
          { id: "j17", label: "Gestion des erreurs (try/catch)", done: false },
          { id: "j18", label: "Modules ES6 (import/export)", done: false },
          { id: "j15", label: "Promises & async/await", done: true },
          { id: "j16", label: "Fetch API (appels HTTP, JSON)", done: true },
          { id: "j17", label: "Gestion des erreurs (try/catch)", done: true },
          { id: "j19", label: "Tests unitaires avec Vitest (describe, it, expect)", done: true },
          { id: "j20", label: "Fonctions pures et logique testable", done: true },
          { id: "j21", label: "gitignore et bonnes pratiques de projet", done: true },
        ]
      }
    ]
  },
  {
    phase: "Phase 3 — Outils & Stack",
    emoji: "🛠️",
    duration: "2 mois",
    color: "#f0f0fe",
    accent: "#5b5bd6",
    categories: [
      {
        name: "Environnement Dev",
        skills: [
          { id: "t1", label: "VS Code — raccourcis, extensions essentielles", done: true },
          { id: "t2", label: "Terminal de base (cd, ls, mkdir, touch)", done: true },
          { id: "t3", label: "Git — init, add, commit, push, pull", done: true },
          { id: "t4", label: "GitHub — créer un repo, publier du code", done: true },
          { id: "t5", label: "npm — installer et utiliser des packages", done: false },
        ]
      },
      {
        name: "Framework Front",
        skills: [
          { id: "t6", label: "React — composants, props, JSX", done: false },
          { id: "t7", label: "React — useState, useEffect (hooks de base)", done: false },
          { id: "t8", label: "React — routing (React Router)", done: false },
          { id: "t9", label: "Tailwind CSS — utility-first styling", done: false },
        ]
      }
    ]
  },
  {
    phase: "Phase 4 — Projet Rentable",
    emoji: "🚀",
    duration: "6 mois",
    color: "#fff0f3",
    accent: "#e5484d",
    categories: [
      {
        name: "Backend & BDD (bases)",
        skills: [
          { id: "b1", label: "Node.js + Express — créer un serveur simple", done: false },
          { id: "b2", label: "Base de données — Supabase ou Firebase (no-SQL/SQL)", done: false },
          { id: "b3", label: "Authentification utilisateurs (login, register, sessions)", done: false },
          { id: "b4", label: "API REST — créer ses propres endpoints", done: false },
        ]
      },
      {
        name: "Mise en ligne & Business",
        skills: [
          { id: "m1", label: "Déployer un site (Vercel, Netlify)", done: false },
          { id: "m2", label: "Nom de domaine & DNS", done: false },
          { id: "m3", label: "Paiements en ligne (Stripe)", done: false },
          { id: "m4", label: "SEO de base (balises meta, Open Graph, sitemap)", done: false },
          { id: "m5", label: "Analytics (Plausible, Google Analytics)", done: false },
        ]
      }
    ]
  }
];

export default function SkillsRoadmap() {
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('roadmap-skills');
    if (saved) return JSON.parse(saved);
    
    const flat = {};
    skillsData.forEach(phase =>
      phase.categories.forEach(cat =>
        cat.skills.forEach(s => { flat[s.id] = s.done; })
      )
    );
    return flat;
  });
  const toggle = (id) => {
    setSkills(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem('roadmap-skills', JSON.stringify(updated));
      return updated;
    });
  };

  const totalSkills = Object.keys(skills).length;
  const doneSkills = Object.values(skills).filter(Boolean).length;
  const globalPct = Math.round((doneSkills / totalSkills) * 100);

  const phaseProgress = (phase) => {
    let total = 0, done = 0;
    phase.categories.forEach(cat =>
      cat.skills.forEach(s => {
        total++;
        if (skills[s.id]) done++;
      })
    );
    return { total, done, pct: Math.round((done / total) * 100) };
  };

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#fafaf8",
      minHeight: "100vh",
      padding: "2rem 1rem",
      maxWidth: 780,
      margin: "0 auto"
    }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
          Digital Nomade Dev — Parcours personnalisé
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 0.5rem" }}>
          Skills Roadmap 🗺️
        </h1>
        <div style={{ color: "#666", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
          Coche chaque skill au fur et à mesure que tu le maîtrises
        </div>

        <div style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          padding: "1.25rem 1.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "1.5rem",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
        }}>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>{globalPct}%</div>
            <div style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>progression globale</div>
          </div>
          <div style={{ width: 1, height: 40, background: "#e5e5e5" }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: "#333" }}>{doneSkills} / {totalSkills}</div>
            <div style={{ fontSize: "0.75rem", color: "#999" }}>skills validés</div>
          </div>
          <div style={{ flex: 1, minWidth: 120 }}>
            <div style={{ background: "#eee", borderRadius: 99, height: 8, overflow: "hidden" }}>
              <div style={{
                width: `${globalPct}%`,
                height: "100%",
                background: "linear-gradient(90deg, #2d9e6b, #5b5bd6)",
                borderRadius: 99,
                transition: "width 0.4s ease"
              }} />
            </div>
          </div>
        </div>
      </div>

      {skillsData.map((phase) => {
        const prog = phaseProgress(phase);
        return (
          <div key={phase.phase} style={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: 20,
            marginBottom: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{
              background: phase.color,
              padding: "1rem 1.5rem",
              borderBottom: "1px solid #e8e8e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem"
            }}>
              <div>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a" }}>
                  {phase.emoji} {phase.phase}
                </span>
                <span style={{
                  marginLeft: "0.75rem",
                  background: phase.accent,
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "2px 10px",
                  borderRadius: 99,
                  letterSpacing: "0.05em"
                }}>
                  {phase.duration}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "0.85rem", color: "#555", fontFamily: "monospace" }}>
                  {prog.done}/{prog.total}
                </span>
                <div style={{ width: 80, background: "#ddd", borderRadius: 99, height: 6, overflow: "hidden" }}>
                  <div style={{
                    width: `${prog.pct}%`,
                    height: "100%",
                    background: phase.accent,
                    borderRadius: 99,
                    transition: "width 0.4s ease"
                  }} />
                </div>
              </div>
            </div>

            {phase.categories.map((cat) => (
              <div key={cat.name} style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #f2f2f2" }}>
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: phase.accent,
                  marginBottom: "0.75rem"
                }}>
                  {cat.name}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {cat.skills.map((skill) => (
                    <label key={skill.id} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      cursor: "pointer",
                      padding: "0.4rem 0.6rem",
                      borderRadius: 8,
                      background: skills[skill.id] ? `${phase.color}cc` : "transparent",
                    }}>
                      <div
                        onClick={() => toggle(skill.id)}
                        style={{
                          width: 18,
                          height: 18,
                          minWidth: 18,
                          borderRadius: 5,
                          border: `2px solid ${skills[skill.id] ? phase.accent : "#ccc"}`,
                          background: skills[skill.id] ? phase.accent : "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 1,
                          transition: "all 0.2s"
                        }}
                      >
                        {skills[skill.id] && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span style={{
                        fontSize: "0.88rem",
                        color: skills[skill.id] ? "#888" : "#333",
                        textDecoration: skills[skill.id] ? "line-through" : "none",
                        lineHeight: 1.4,
                        transition: "all 0.2s"
                      }}>
                        {skill.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}

      <div style={{ textAlign: "center", color: "#bbb", fontSize: "0.78rem", marginTop: "2rem" }}>
        Mis à jour au fil de nos sessions — Bonne route 🌍
      </div>
    </div>
  );
}
