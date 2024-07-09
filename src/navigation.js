import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '🔔 Support',
      href: getPermalink('/support/gpt'),
    },
    {
      text: 'Studio IA + 🔔',
      links: [
        {
          text: '🏢 Studio',
          href: getPermalink('/ia/studio'),
        },
        {
          text: '💡 Services IA',
          href: getPermalink('/ia/services'),
        },
        {
          text: '🤖 Agents IA',
          href: getPermalink('/ia/agents'),
        },
      ],
    },
    {
      text: 'Projets',
      links: [
        {
          text: '🔍 Cahier des charges',
          href: getPermalink('/projets/analyse'),
        },
        {
          text: '🛠️ Installation & paramétrages de votre Studio IA',
          href: getPermalink('/projets/setup'),
        },
        
        {
          text: '👍🏼 Accompagnement de votre projet IA',
          href: getPermalink('/projets/accompagnement'),
        },
      ],
    },
    {
      text: 'Agents',
      links: [
        {
          text: '🌐 Expert-WordPress',
          href: getPermalink('/apps/wordpress'),
        },
        {
          text: '📊 Expert-Odoo',
          href: getPermalink('/apps/odoo'),
        },
        {
          text: '⚙️ Expert-Strapi',
          href: getPermalink('/apps/strapi'),
        },
        {
          text: '✨ Expert-Astro',
          href: getPermalink('/apps/astro'),
        },
        {
          text: '🔐 Expert-RGPD',
          href: getPermalink('/apps/madis-rgpd'),
        },
      ],
    },
    {
      text: 'Tarifs',
      href: getPermalink('/tarifs'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Télécharger', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Produit',
      links: [
        { text: 'Fonctionnalités', href: '#' },
        { text: 'Sécurité', href: '#' },
        { text: 'Équipe', href: '#' },
        { text: 'Entreprise', href: '#' },
        { text: 'Histoires de clients', href: '#' },
        { text: 'Tarifs', href: '#' },
        { text: 'Ressources', href: '#' },
      ],
    },
    {
      title: 'Plateforme',
      links: [
        { text: 'API Développeur', href: '#' },
        { text: 'Partenaires', href: '#' },
        { text: 'StartIA', href: '#' },
        { text: 'GPT', href: '#' },
        { text: 'Langchain', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Forum Communautaire', href: '#' },
        { text: 'Services Professionnels', href: '#' },
        { text: 'Compétences', href: '#' },
        { text: 'Statut', href: '#' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { text: 'À Propos', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carrières', href: '#' },
        { text: 'Presse', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Impact Social', href: '#' },
        { text: 'Boutique', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Conditions', href: getPermalink('/terms') },
    { text: 'Politique de Confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://cybtek.fr/favicon/favicon-32x32.png" alt="Cybtek logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://cybtek.fr/">Cybtek</a> · All rights reserved.
  `,
};
