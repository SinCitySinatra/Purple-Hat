# Purple Hat AI Cybersecurity - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, actions | Purple theme, glow effects |
| Card | Dashboard cards, features | Dark theme, border glow hover |
| Input | Form fields, chat input | Dark bg, purple focus ring |
| Badge | Status indicators, tags | Color-coded (red/orange/green/purple) |
| Progress | Metrics, gauges | Purple/cyan gradients |
| Avatar | User/AI icons | With status indicators |
| Separator | Section dividers | Subtle purple tint |
| ScrollArea | Chat scroll, tables | Custom scrollbar |
| Sheet | Mobile navigation | Dark theme |
| Tooltip | Info hints | Purple accent |
| Tabs | Dashboard sections | Purple active indicator |
| Dialog | Modals | Dark theme with glow |

### Third-Party Registry Components
| Component | Registry | Purpose |
|-----------|----------|---------|
| @magicui/particles | magicui | Background particle effects |
| @magicui/animated-beam | magicui | Connection lines between elements |
| @aceternity/lamp | aceternity | Hero lamp effect |
| @react-bits/text-rotate | react-bits | Animated text in hero |

### Custom Components to Build
| Component | Purpose | Location |
|-----------|---------|----------|
| AnimatedGrid | Background grid with flicker | components/animated-grid.tsx |
| GlowOrb | Floating purple/cyan orbs | components/glow-orb.tsx |
| ThreatGauge | Circular progress gauge | components/threat-gauge.tsx |
| AttackMap | SVG world map with animations | components/attack-map.tsx |
| Terminal | Typing animation terminal | components/terminal.tsx |
| ChatInterface | AI chat UI | components/chat-interface.tsx |
| Counter | Animated number counter | components/counter.tsx |
| MetricCard | Stats display card | components/metric-card.tsx |
| ThreatTable | Animated table | components/threat-table.tsx |
| NetworkChart | Area chart | components/network-chart.tsx |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Global** |
| Smooth scroll | CSS | scroll-behavior: smooth | Low |
| Scroll progress bar | Framer Motion | useScroll + motion.div width | Low |
| Header background | Framer Motion | useScroll + useTransform for opacity | Low |
| **Hero** |
| Background grid flicker | CSS | @keyframes with random delays | Medium |
| Glow orb float | Framer Motion | animate={{ y }} with repeat | Low |
| Text stagger reveal | Framer Motion | staggerChildren + fade/translateY | Medium |
| Glitch effect | CSS | @keyframes with clip-path | Medium |
| Button hover glow | CSS | box-shadow transition | Low |
| **Threat Dashboard** |
| Card entrance | Framer Motion | whileInView + stagger | Medium |
| Gauge animation | Framer Motion | motion.circle stroke-dashoffset | Medium |
| Attack map lines | CSS/SVG | stroke-dasharray animation | Medium |
| Chart draw | Framer Motion | pathLength animation | Medium |
| Table row stagger | Framer Motion | staggerChildren | Low |
| Metric bar fill | Framer Motion | width animation | Low |
| **Red Team** |
| Terminal typing | Custom hook | useTypewriter with setTimeout | Medium |
| Cursor blink | CSS | @keyframes blink | Low |
| Section slide-in | Framer Motion | x animation with whileInView | Low |
| **Blue Team** |
| Alert feed scroll | Framer Motion | AnimatePresence + layout | Medium |
| Donut chart | Framer Motion | path animations | Medium |
| Counter up | Custom hook | useCountUp with requestAnimationFrame | Medium |
| **Purple Team** |
| Card scale entrance | Framer Motion | scale + opacity | Low |
| Icon float | Framer Motion | y animation loop | Low |
| **AI Assistant** |
| Message stagger | Framer Motion | staggerChildren | Medium |
| Typing dots | CSS | @keyframes bounce | Low |
| **Metrics** |
| Number counter | Custom hook | useCountUp | Medium |
| Icon pulse | CSS | @keyframes pulse | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- whileInView for scroll triggers
- AnimatePresence for enter/exit
- useScroll, useTransform for scroll-linked
- Gesture support

### Secondary: CSS Animations
- Simple hover effects
- Infinite loops (orbs, pulses)
- Background patterns
- Performance-critical animations

### Custom Hooks
- useTypewriter: Terminal typing effect
- useCountUp: Number animation
- useInView: Scroll detection

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── attack-map.svg
│       └── ...
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── animated-grid.tsx
│   │   ├── glow-orb.tsx
│   │   ├── threat-gauge.tsx
│   │   ├── attack-map.tsx
│   │   ├── terminal.tsx
│   │   ├── chat-interface.tsx
│   │   ├── counter.tsx
│   │   ├── metric-card.tsx
│   │   ├── threat-table.tsx
│   │   ├── network-chart.tsx
│   │   ├── section-wrapper.tsx
│   │   └── scroll-progress.tsx
│   ├── hooks/
│   │   ├── use-typewriter.ts
│   │   ├── use-count-up.ts
│   │   └── use-scroll-position.ts
│   ├── sections/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── threat-dashboard.tsx
│   │   ├── red-team.tsx
│   │   ├── blue-team.tsx
│   │   ├── purple-team.tsx
│   │   ├── ai-assistant.tsx
│   │   ├── metrics.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── tailwind.config.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Dependencies

### Core (from init)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation
```bash
npm install framer-motion
```

### Charts
```bash
npm install recharts
```

### Fonts
- Inter (Google Fonts)
- JetBrains Mono (Google Fonts)

---

## Color Configuration (tailwind.config.ts)

```typescript
colors: {
  background: {
    primary: '#05050a',
    secondary: '#0a0a12',
    tertiary: '#12121f',
  },
  accent: {
    purple: '#8b5cf6',
    'purple-light': '#a78bfa',
    'purple-glow': '#7c3aed',
    cyan: '#06b6d4',
    'cyan-glow': '#0891b2',
    red: '#ef4444',
    green: '#10b981',
    orange: '#f59e0b',
  }
}
```

---

## Key Implementation Notes

### Performance Optimizations
1. Use `will-change` on animated elements
2. Prefer transform/opacity animations
3. Lazy load below-fold sections
4. Use CSS for simple infinite animations
5. Implement `prefers-reduced-motion` support

### Responsive Strategy
1. Mobile-first approach
2. Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1400)
3. Dashboard cards: 1 col mobile → 2 col tablet → 3 col desktop
4. Navigation: Hamburger on mobile

### Accessibility
1. ARIA labels on interactive elements
2. Keyboard navigation support
3. Focus visible states
4. Color contrast compliance (WCAG AA)
5. Reduced motion support

---

## Data Simulation

Since this is a demo application, we'll simulate:
- Real-time threat data with setInterval
- Random attack origins on map
- Fluctuating metrics
- Chat responses with delays

All simulations will be contained in hooks/components and easily replaceable with real API calls.
