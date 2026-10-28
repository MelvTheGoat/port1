import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import resume from '../assets/Resume.pdf'
import ThemeToggle from './ThemeToggle'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const GITHUB_URL = 'https://github.com/MelvTheGoat'
const LINKEDIN_URL = 'https://linkedin.com/in/oluwatobi-mayungbo-3a567026b'

const btnBase = [
  'inline-flex items-center gap-2 px-3 py-[4px] rounded-[6px]',
  'text-[12px] font-[\'Figtree\'] font-medium',
  'border-none no-underline min-h-[28px]',
  'transition-all',
].join(' ')

const btnStyle = {
  background: 'var(--bg-surface)',
  color: 'var(--text-primary)',
  boxShadow: 'var(--shadow-btn)',
}

const BIO =
  "Hi, I'm Oluwatobi Mayungbo 👋\nI build time-series and sequence models for fraud detection and payments, with calibrated outputs and cost-based decision thresholds.\nMy flagship project is a Sequence-Based Transaction Fraud Detection System, where a GRU beat a strong LightGBM baseline and held up after adversarial drift.\nI also teach machine learning at SQI College of ICT."

export default function Hero() {
  const highlight = (text, words) => {
    const parts = text.split(new RegExp(`(${words.join('|')})`, 'g'))
    return parts.map((part, i) =>
      words.includes(part)
        ? <span key={i} className="font-semibold" style={{ color: 'var(--text-primary)' }}>{part}</span>
        : <span key={i} style={{ color: 'var(--text-zinc-400)' }}>{part}</span>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-[700px] mx-auto px-[18px] pt-[60px]"
    >
      <div className="absolute top-[60px] right-[18px]">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-[6px] text-left"
      >
        <h1 className="font-['Figtree'] font-bold text-[1.5rem] leading-tight" style={{ color: 'var(--text-primary)' }}>
          Oluwatobi Melvyn Mayungbo <span className="inline-block">✨</span>
        </h1>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['JetBrains_Mono'] text-[.85rem] transition-colors no-underline"
          style={{ color: 'var(--text-zinc-400)' }}
          onMouseEnter={e => e.target.style.color = 'var(--text-zinc-500)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-zinc-400)'}
        >
          @MelvTheGoat
        </a>

        <p className="font-['Figtree'] text-[.85rem] font-semibold underline underline-offset-4" style={{ color: 'var(--text-primary)', textDecorationColor: 'var(--border-subtle)' }}>
          Machine Learning Engineer
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-['Figtree'] text-[16px] leading-[1.7] mt-4 max-w-[700px]"
        style={{ color: 'var(--text-zinc-400)', whiteSpace: 'pre-line' }}
      >
        {highlight(BIO, ['Sequence-Based Transaction Fraud Detection System'])}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 mt-[32px] justify-start"
      >
        <a href="mailto:mlvyn.t@gmail.com" className={btnBase} style={btnStyle}>
          <Mail size={14} />
          <span>Email</span>
        </a>

        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={btnBase} style={btnStyle}>
          <img src={`${CDN}/github/github-original.svg`} alt="GitHub" width={14} height={14} style={{ filter: 'var(--icon-filter)' }} />
        </a>

        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={btnBase} style={btnStyle}>
          <img src={`${CDN}/linkedin/linkedin-original.svg`} alt="LinkedIn" width={14} height={14} style={{ filter: 'var(--icon-filter)' }} />
        </a>

        <a href={resume} target="_blank" rel="noopener noreferrer" className={btnBase} style={btnStyle}>
          <FileText size={14} />
        </a>
      </motion.div>
    </motion.section>
  )
}
