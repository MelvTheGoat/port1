import { Bot, BrainCircuit, Workflow, FileSearch, Cpu, Database, ScanSearch, Webhook, Gauge, ShieldCheck, Scale, Activity, TrendingUp, Wrench, Layers, Zap } from 'lucide-react'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const mlSkills = [
  { name: 'Python', icon: `${CDN}/python/python-original.svg` },
  { name: 'PyTorch', icon: `${CDN}/pytorch/pytorch-original.svg` },
  { name: 'scikit-learn', icon: `${CDN}/scikitlearn/scikitlearn-original.svg` },
  { name: 'LightGBM', Icon: Zap },
  { name: 'Pandas', icon: `${CDN}/pandas/pandas-original.svg` },
  { name: 'NumPy', icon: `${CDN}/numpy/numpy-original.svg` },
  { name: 'Time-Series Forecasting', Icon: TrendingUp },
  { name: 'Sequence Models', Icon: BrainCircuit },
  { name: 'Quantile Forecasting', Icon: Activity },
  { name: 'Backtesting', Icon: Workflow },
  { name: 'Feature Engineering', Icon: Wrench },
]

const riskSkills = [
  { name: 'Fraud Detection', Icon: ScanSearch },
  { name: 'Credit Risk', Icon: ShieldCheck },
  { name: 'Model Calibration', Icon: Gauge },
  { name: 'Cost-Based Thresholds', Icon: Scale },
  { name: 'SHAP', Icon: FileSearch },
  { name: 'Drift Monitoring', Icon: Activity },
  { name: 'FastAPI', icon: `${CDN}/fastapi/fastapi-original.svg` },
  { name: 'Docker', icon: `${CDN}/docker/docker-original.svg` },
  { name: 'ONNX Runtime', Icon: Cpu },
  { name: 'MLflow', Icon: Layers },
  { name: 'Prefect', Icon: Bot },
  { name: 'dbt', Icon: Database },
  { name: 'SQL', Icon: Webhook },
  { name: 'GitHub Actions', icon: `${CDN}/githubactions/githubactions-original.svg` },
  { name: 'GCP Cloud Run', icon: `${CDN}/googlecloud/googlecloud-original.svg` },
  { name: 'Git', icon: `${CDN}/git/git-original.svg` },
]

// Seconds per skill, so both rows scroll at the same speed
const SECONDS_PER_SKILL = 5.5

function SkillRow({ skills, reverse = false }) {
  return (
    <div className="marquee-container">
      <div
        className={reverse ? 'marquee marquee-reverse' : 'marquee'}
        style={{ animationDuration: `${skills.length * SECONDS_PER_SKILL}s` }}
      >
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} className="skill-pill">
            <span className="skill-icon">
              {skill.Icon
                ? <skill.Icon size={18} aria-hidden="true" />
                : <img src={skill.icon} alt={skill.name} width={18} height={18} />}
            </span>
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="skill-rows">
      <SkillRow skills={mlSkills} />
      <SkillRow skills={riskSkills} reverse />
    </div>
  )
}
