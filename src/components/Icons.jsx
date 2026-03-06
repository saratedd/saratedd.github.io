// ─── Nav / UI icons ───────────────────────────────────────────────

export const Sun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.5" fill="currentColor" opacity=".3"/>
    <circle cx="12" cy="12" r="4.5"/>
    <line x1="12" y1="1.5" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22.5"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1.5" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22.5" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

export const Moon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export const Mail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

export const LinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const Download = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export const FileText = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

export const DownloadSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export const Hamburger = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const Close = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const PlayIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

export const ImageIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21,15 16,10 5,21"/>
  </svg>
);

// ─── Skill icons ──────────────────────────────────────────────────

export const SkillIcon = ({ name, size = 20, color }) => {
  const s = { width: size, height: size, flexShrink: 0 };

  const adobeBox = (label) => (
    <svg style={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill={color} opacity=".15" stroke={color} strokeWidth="1.2"/>
      <text x="12" y="16" textAnchor="middle" fill={color} fontSize="9" fontWeight="700" fontFamily="serif">{label}</text>
    </svg>
  );

  const icons = {
    // ── Soft Skills ──
    "Strategic Planning": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" opacity=".6"/>
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    "Problem Solving": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.4" opacity=".4"/>
        <path d="M12 7v1.5a3 3 0 0 1 0 6V16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="18.5" r="1" fill={color}/>
      </svg>
    ),
    "Analytical Thinking": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M3 18l4-8 4 5 4-9 4 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="3" cy="18" r="1.2" fill={color}/>
        <circle cx="21" cy="12" r="1.2" fill={color}/>
      </svg>
    ),
    "Creative Thinking": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M9 21h6M12 17v4" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 5.5V17H9v-2.5C7.5 13.5 6 11.5 6 9a6 6 0 0 1 6-6z" stroke={color} strokeWidth="1.4"/>
        <path d="M10 9.5a2 2 0 0 1 4 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    "Attention to Detail": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.4"/>
        <path d="M20 20l-3-3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" stroke={color} strokeWidth="1.2" opacity=".5"/>
        <circle cx="11" cy="11" r="1" fill={color}/>
      </svg>
    ),
    "Quick Learner": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),

    // ── Languages ──
    "Croatian": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="4" rx=".5" fill={color} opacity=".8"/>
        <rect x="2" y="9" width="20" height="4" rx=".5" fill={color} opacity=".35"/>
        <rect x="2" y="13" width="20" height="4" rx=".5" fill={color} opacity=".6"/>
        <rect x="2" y="5" width="20" height="12" rx="1.5" stroke={color} strokeWidth="1.2"/>
      </svg>
    ),
    "English": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="1.5" stroke={color} strokeWidth="1.3" opacity=".5"/>
        <path d="M2 12h20M12 5v14" stroke={color} strokeWidth="1.3" opacity=".6"/>
        <path d="M2 5l10 7 10-7M2 19l10-7 10 7" stroke={color} strokeWidth="1" opacity=".3"/>
      </svg>
    ),

    // ── Software ──
    "After Effects": adobeBox("Ae"),
    "Premiere Pro":  adobeBox("Pr"),
    "Lightroom":     adobeBox("Lr"),
    "Canva": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" opacity=".4"/>
        <circle cx="12" cy="12" r="3" fill={color}/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    "Procreate": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M4 20L8 16M8 16L15 9M15 9L18 6C19 5 20 5 20 6C21 7 20 8 19 9L16 12M15 9L16 12M8 16L11 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="1.5" fill={color} opacity=".6"/>
      </svg>
    ),
    "DBeaver": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="2.5" stroke={color} strokeWidth="1.3"/>
        <path d="M4 6v5c0 1.4 3.6 2.5 8 2.5S20 12.4 20 11V6" stroke={color} strokeWidth="1.3"/>
        <path d="M4 11v5c0 1.4 3.6 2.5 8 2.5S20 17.4 20 16v-5" stroke={color} strokeWidth="1.3"/>
      </svg>
    ),
    "pgAdmin": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" stroke={color} strokeWidth="1.4"/>
        <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke={color} strokeWidth="1.4"/>
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke={color} strokeWidth="1.2" opacity=".5"/>
        <path d="M11 10v4M13 10v4" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity=".7"/>
      </svg>
    ),

    // ── Creative ──
    "Motion Graphics": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M3 12 Q7 4 12 12 Q17 20 21 12" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill={color}/>
      </svg>
    ),
    "Illustration": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M4 20L8 16M8 16L15 9M15 9L18 6C19 5 20 5 20 6C21 7 20 8 19 9L16 12M15 9L16 12M8 16L11 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 20h3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Video Editing": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="15" height="12" rx="2" stroke={color} strokeWidth="1.4"/>
        <path d="M17 9l5-3v12l-5-3V9z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    "Photography": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.4"/>
      </svg>
    ),
    "Photo Editing": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1.4"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill={color} opacity=".6"/>
        <path d="M21 15l-5-5L5 21" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // ── Technical ──
    "Java": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 17s-1 .6.7.8c2.2.3 3.3.2 5.7-.2 0 0 .6.4 1.5.7C10.6 20.6 4.3 18.2 8.5 17z" fill={color} opacity=".7"/>
        <path d="M7.8 14.5s-1.1.8 1.2 1c1.7.2 3.9.2 6.1-.2 0 0 .4.4 1 .6C10.5 17.9 4.5 16.5 7.8 14.5z" fill={color} opacity=".6"/>
        <path d="M13 8c1.1 1.3-.7 2.5-.7 2.5s2.9-1.5 1.5-3.4C12.5 5.4 11.6 4.5 16.7 1.5c0 0-8.2 2-3.7 6.5z" fill={color} opacity=".8"/>
      </svg>
    ),
    "Python": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 6 4 6 6v3h6v1H5C3 10 2 11.5 2 14s1 4 3 4h2v-3c0-2 2-3 5-3s5 1 5 3v3h2c2 0 3-1.5 3-4s-1-4-3-4h-6V9h6V6c0-2-2-4-7-4z" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="9" cy="5.5" r="1" fill={color}/>
        <circle cx="15" cy="18.5" r="1" fill={color}/>
      </svg>
    ),
    "Spring Boot": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 1 0 9 9" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M15 3.5c1 2.5.5 5.5-1.5 7.5s-5 2.5-7.5 1.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity=".6"/>
        <circle cx="20" cy="4" r="2" fill={color} opacity=".7"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" stroke={color} strokeWidth="1.4"/>
        <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke={color} strokeWidth="1.4"/>
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke={color} strokeWidth="1.2" opacity=".5"/>
      </svg>
    ),
    "HTML / CSS": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.6 18L12 23l6.4-2L20 3H4z" stroke={color} strokeWidth="1.3" opacity=".6"/>
        <path d="M8 8h8M8.5 12h7M9 16l3 1 3-1" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity=".8"/>
      </svg>
    ),
    "Git": (
      <svg style={s} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2" stroke={color} strokeWidth="1.4"/>
        <circle cx="6" cy="18" r="2" stroke={color} strokeWidth="1.4"/>
        <circle cx="18" cy="10" r="2" stroke={color} strokeWidth="1.4"/>
        <path d="M6 8v8M6 8c0-2 2-4 4-4h3a3 3 0 0 1 3 3v1" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[name] || (
    <svg style={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.4" opacity=".5"/>
      <circle cx="12" cy="12" r="3" fill={color}/>
    </svg>
  );
};