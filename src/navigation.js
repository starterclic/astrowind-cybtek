export const navigation = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Support', 
    href: '/support',
    subMenu: [
      { name: 'Support GPT', href: '/support/gpt' },
      { name: 'Tickets & Téléassistance', href: '/support/tickets' },
      { name: 'Visio', href: '/support/visio' }
    ]
  },
  { 
    name: 'IA', 
    href: '/ia',
    subMenu: [
      { name: 'Studio IA', href: '/ia/studio' },
      { name: 'Services IA', href: '/ia/services' },
      { name: 'Agents IA', href: '/ia/agents' }
    ]
  },
  { 
    name: 'Projets', 
    href: '/projets',
    subMenu: [
      { name: 'Analyse Besoins', href: '/projets/analyse' },
      { name: 'Setup & Suivi', href: '/projets/setup' }
    ]
  },
  { name: 'Apps', href: '/apps' },
  { name: 'Tarifs', href: '/tarifs' }
];
