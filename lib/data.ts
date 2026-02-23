import { FaGamepad, FaFootballBall, FaCoins, FaWallet, FaShieldAlt, FaMobileAlt, FaCloud, FaGavel, FaLink, FaBitcoin, FaEthereum, FaUsers, FaChartLine, FaGift, FaHeadset, FaCode, FaServer, FaLock } from 'react-icons/fa'

export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; size?: number | string }>
  category: 'igaming' | 'crypto'
  image?: string
}

export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  image: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  avatar: string
}

export const services: Service[] = [
  // iGaming Services
  {
    id: 'turnkey-platform',
    title: 'Turnkey iGaming Platform',
    description: 'Complete end-to-end iGaming solution ready for deployment with all essential features built-in.',
    icon: FaGamepad,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'white-label',
    title: 'White-Label Casino Solutions',
    description: 'Fully customizable casino platform with your branding, ready to launch in weeks.',
    icon: FaGamepad,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'sportsbook',
    title: 'Sportsbook Betting Engine',
    description: 'Advanced sportsbook platform with real-time odds, live betting, and comprehensive market coverage.',
    icon: FaFootballBall,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop', // Sports stadium/action
  },
  {
    id: 'game-aggregation',
    title: 'Casino Game Aggregation',
    description: 'Access thousands of casino games from leading providers through a single integration.',
    icon: FaGamepad,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'live-dealer',
    title: 'Live Dealer Integration',
    description: 'Seamless integration with live dealer studios for immersive real-time gaming experiences.',
    icon: FaGamepad,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1516117172878-535d5dd138d9?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 'pam',
    title: 'Player Account Management',
    description: 'Comprehensive player management system with KYC, account verification, and user lifecycle management.',
    icon: FaUsers,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'wallet-payment',
    title: 'Wallet & Payment Gateway Integration',
    description: 'Multi-currency wallet system with support for 100+ payment methods and instant transactions.',
    icon: FaWallet,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bonus-engine',
    title: 'Bonus & Promotion Engine',
    description: 'Flexible bonus system with automated campaigns, loyalty programs, and personalized offers.',
    icon: FaGift,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 'affiliate-crm',
    title: 'Affiliate & CRM System',
    description: 'Complete affiliate management and CRM platform with real-time tracking and reporting.',
    icon: FaChartLine,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'risk-management',
    title: 'Risk Management & Fraud Detection',
    description: 'AI-powered fraud detection and risk management to protect your platform and players.',
    icon: FaShieldAlt,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 'kyc-aml',
    title: 'KYC / AML Compliance Solutions',
    description: 'Automated KYC/AML verification and compliance tools to meet regulatory requirements.',
    icon: FaLock,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Betting Applications',
    description: 'Native iOS and Android applications with seamless user experience and push notifications.',
    icon: FaMobileAlt,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'custom-development',
    title: 'Custom iGaming Software Development',
    description: 'Tailored software solutions built to your specific requirements and business needs.',
    icon: FaCode,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop', // Coding/Developer screen
  },
  {
    id: 'api-integrations',
    title: 'API & Third-Party Integrations',
    description: 'Seamless integration with payment providers, game studios, and third-party services.',
    icon: FaServer,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud infrastructure with automated deployment and 99.9% uptime guarantee.',
    icon: FaCloud,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 'licensing',
    title: 'Licensing & Regulatory Advisory',
    description: 'Expert guidance on gaming licenses and regulatory compliance across multiple jurisdictions.',
    icon: FaGavel,
    category: 'igaming',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop',
  },
  // Crypto Gaming Services
  {
    id: 'crypto-casino',
    title: 'Crypto Casino Platform',
    description: 'Full-featured crypto casino with support for multiple cryptocurrencies and instant withdrawals.',
    icon: FaCoins,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?q=80&w=2070&auto=format&fit=crop', // Blockchain/Crypto stylized
  },
  {
    id: 'multi-currency-wallet',
    title: 'Multi-Currency Wallet Integration',
    description: 'Unified wallet supporting Bitcoin, Ethereum, stablecoins, and 50+ cryptocurrencies.',
    icon: FaWallet,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39e8467144?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'blockchain-payment',
    title: 'Blockchain Payment Gateway',
    description: 'Secure blockchain payment processing with low fees and instant settlement.',
    icon: FaLink,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2032&auto=format&fit=crop',
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contract Development',
    description: 'Custom smart contracts for provably fair gaming, token distribution, and automated payouts.',
    icon: FaCode,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1639322537228-ad7117a7a622?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'token-development',
    title: 'Token Development & Tokenomics Consulting',
    description: 'Design and deploy custom tokens with optimized tokenomics for gaming ecosystems.',
    icon: FaCoins,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'nft-loyalty',
    title: 'NFT Loyalty Programs',
    description: 'NFT-based loyalty and rewards programs to enhance player engagement and retention.',
    icon: FaGift,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'web3-gaming',
    title: 'Web3 Gaming Integration',
    description: 'Integrate Web3 technologies for true ownership, cross-platform assets, and decentralized gaming.',
    icon: FaGamepad,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Solutions',
    description: 'Decentralized governance systems for community-driven gaming platforms.',
    icon: FaUsers,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1529101091760-6149d4c46b14?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'fiat-crypto',
    title: 'Fiat–Crypto Onramp & Offramp',
    description: 'Seamless conversion between fiat currencies and cryptocurrencies with competitive rates.',
    icon: FaWallet,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'stablecoin-payments',
    title: 'Stablecoin Payments',
    description: 'Support for USDT, USDC, and other stablecoins for price-stable transactions.',
    icon: FaCoins,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1621501103258-3e135c6014b4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bitcoin-ethereum',
    title: 'Bitcoin / Ethereum Support',
    description: 'Native support for Bitcoin and Ethereum with lightning-fast transaction processing.',
    icon: FaBitcoin,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?q=80&w=2075&auto=format&fit=crop',
  },
  {
    id: 'multisig-wallet',
    title: 'Multi-Signature Wallet Security',
    description: 'Enterprise-grade multi-signature wallet solutions for enhanced security.',
    icon: FaLock,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'crypto-treasury',
    title: 'Crypto Treasury Management',
    description: 'Advanced treasury management tools for handling large-scale crypto operations.',
    icon: FaChartLine,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'defi-gaming',
    title: 'DeFi Gaming Integration',
    description: 'Integrate DeFi protocols for yield farming, staking, and liquidity provision in gaming.',
    icon: FaLink,
    category: 'crypto',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2070&auto=format&fit=crop',
  },
]

export const products: Product[] = [
  {
    id: 'igaming-platform',
    name: 'iGaming Platform',
    description: 'Complete turnkey iGaming solution with casino, sportsbook, and live dealer capabilities.',
    features: [
      '5000+ casino games',
      'Real-time sportsbook',
      'Live dealer integration',
      'Multi-language support',
      'Mobile responsive',
      '99.9% uptime SLA',
    ],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
  },
  {
    id: 'sportsbook-engine',
    name: 'Sportsbook Engine',
    description: 'Advanced sportsbook platform with real-time odds, live betting, and comprehensive coverage.',
    features: [
      '50+ sports markets',
      'Live in-play betting',
      'Cash-out functionality',
      'Odds management system',
      'Bet builder tools',
      'Real-time statistics',
    ],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
  },
  {
    id: 'crypto-casino',
    name: 'Crypto Casino System',
    description: 'Full-featured crypto casino supporting multiple cryptocurrencies with instant withdrawals.',
    features: [
      'Multi-crypto support',
      'Instant withdrawals',
      'Provably fair gaming',
      'Smart contract integration',
      'NFT rewards',
      'DeFi integration',
    ],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
  },
  {
    id: 'pam-system',
    name: 'PAM System',
    description: 'Comprehensive Player Account Management with KYC, verification, and lifecycle management.',
    features: [
      'KYC/AML automation',
      'Account verification',
      'User segmentation',
      'Risk scoring',
      'Compliance reporting',
      'Multi-jurisdiction support',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 'wallet-system',
    name: 'Wallet System',
    description: 'Multi-currency wallet with 100+ payment methods and instant transaction processing.',
    features: [
      '100+ payment methods',
      'Multi-currency support',
      'Instant deposits/withdrawals',
      'Fraud detection',
      'Transaction history',
      'API integration',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    id: 'affiliate-crm',
    name: 'Affiliate CRM',
    description: 'Complete affiliate management and CRM platform with real-time tracking and reporting.',
    features: [
      'Real-time tracking',
      'Commission management',
      'Marketing tools',
      'Performance analytics',
      'Automated payouts',
      'Custom reporting',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop', // Analytics/Chart
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-igaming-technology',
    title: 'The Future of iGaming Technology: Trends to Watch in 2024',
    excerpt: 'Explore the latest technological innovations shaping the iGaming industry, from AI-powered personalization to blockchain integration.',
    content: 'The iGaming industry is experiencing rapid transformation driven by technological innovation. Artificial intelligence is revolutionizing player experiences through personalized recommendations and predictive analytics. Blockchain technology is introducing transparency and trust through provably fair gaming and instant crypto transactions. Mobile-first approaches are becoming standard, with progressive web apps offering native-like experiences. Live dealer technology continues to evolve with 4K streaming and immersive VR integration. Regulatory technology (RegTech) is automating compliance processes, making it easier for operators to navigate complex legal landscapes. As we look ahead, the convergence of these technologies will create more engaging, secure, and profitable gaming platforms.',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop',
  },
  {
    slug: 'crypto-gaming-revolution',
    title: 'The Crypto Gaming Revolution: How Blockchain is Transforming Online Casinos',
    excerpt: 'Discover how blockchain technology and cryptocurrencies are revolutionizing the online gaming industry.',
    content: 'Cryptocurrency adoption in online gaming has reached unprecedented levels. Players are increasingly demanding instant withdrawals, lower fees, and enhanced privacy that only crypto can provide. Smart contracts enable provably fair gaming, where every bet can be independently verified. NFTs are creating new revenue streams through collectible items and loyalty programs. Decentralized autonomous organizations (DAOs) are giving players governance rights in gaming platforms. Multi-chain support allows seamless transactions across different blockchains. The integration of DeFi protocols enables yield farming and staking rewards for players. As regulatory clarity improves, we expect to see mainstream adoption accelerate, with traditional operators integrating crypto alongside fiat currencies.',
    date: '2024-01-10',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop',
  },
  {
    slug: 'sportsbook-technology-innovations',
    title: 'Sportsbook Technology Innovations: Real-Time Betting and AI Odds',
    excerpt: 'Learn about the latest innovations in sportsbook technology, including AI-powered odds and real-time betting features.',
    content: 'Modern sportsbooks are leveraging cutting-edge technology to provide superior betting experiences. Artificial intelligence algorithms analyze vast amounts of data to generate more accurate odds in real-time. Machine learning models predict player performance and game outcomes with increasing precision. Live betting features allow players to place wagers during games with dynamic odds that adjust based on game events. Cash-out functionality gives players control over their bets, allowing them to secure profits or minimize losses. Bet builder tools enable custom multi-leg bets with personalized odds. Real-time statistics and visualizations help players make informed decisions. Mobile-first design ensures seamless betting experiences across all devices. As technology continues to advance, we can expect even more sophisticated features that enhance both player enjoyment and operator profitability.',
    date: '2024-01-05',
    author: 'David Martinez',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop',
  },
  {
    slug: 'regulatory-compliance-igaming',
    title: 'Navigating Regulatory Compliance in iGaming: A Complete Guide',
    excerpt: 'Understanding the complex regulatory landscape of iGaming and how to ensure compliance across multiple jurisdictions.',
    content: 'Regulatory compliance is one of the most critical aspects of operating an iGaming business. Different jurisdictions have varying requirements for licensing, player protection, and responsible gaming. KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures are mandatory in most markets. Operators must implement robust age verification systems and self-exclusion tools. Data protection regulations like GDPR require careful handling of player information. Tax obligations vary significantly between jurisdictions and can impact profitability. Regulatory technology (RegTech) solutions automate many compliance processes, reducing costs and human error. Working with experienced legal advisors and compliance consultants is essential for navigating this complex landscape. As regulations evolve, staying informed and adaptable is key to long-term success.',
    date: '2023-12-28',
    author: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
  },
  {
    slug: 'mobile-gaming-trends',
    title: 'Mobile Gaming Trends: The Shift to Mobile-First iGaming Platforms',
    excerpt: 'Explore how mobile gaming is dominating the iGaming industry and what operators need to know.',
    content: 'Mobile devices now account for over 60% of all iGaming traffic, making mobile optimization essential for success. Progressive Web Apps (PWAs) offer app-like experiences without requiring app store approval. Touch-optimized interfaces and gesture controls enhance user engagement. Push notifications drive player retention and re-engagement. Mobile payment methods like Apple Pay and Google Pay simplify deposits. Location-based features enable geo-targeted promotions and responsible gaming tools. Mobile-first design principles prioritize performance and user experience on smaller screens. As 5G networks expand, we can expect even more sophisticated mobile gaming experiences with lower latency and higher quality streaming. Operators who prioritize mobile experiences will have a significant competitive advantage.',
    date: '2023-12-20',
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Robert Thompson',
    company: 'CryptoCasino Pro',
    role: 'CEO',
    content: 'Anergia\'s platform transformed our business. The crypto integration was seamless, and we saw a 300% increase in player deposits within the first quarter.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop', // Professional male headshot
  },
  {
    id: '2',
    name: 'Maria Garcia',
    company: 'Elite Sportsbook',
    role: 'CTO',
    content: 'The sportsbook engine is incredibly robust. We handle millions of bets daily with zero downtime. The real-time odds system is second to none.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop', // Professional female headshot
  },
  {
    id: '3',
    name: 'John Anderson',
    company: 'Global Gaming Group',
    role: 'Founder',
    content: 'Working with Anergia was a game-changer. Their white-label solution allowed us to launch in 3 months instead of 18. The ROI has been exceptional.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', // Professional male headshot
  },
  {
    id: '4',
    name: 'Lisa Chen',
    company: 'Blockchain Betting',
    role: 'Product Director',
    content: 'The DeFi integration opened up entirely new revenue streams. Our players love earning yield on their deposits while gaming.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop', // Professional female headshot
  },
]

