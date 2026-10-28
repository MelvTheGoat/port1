import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Sequence-Based Transaction Fraud Detection System',
    description:
      'GRU, TCN and Transformer fraud models on about 297k simulated transactions, scored in real time and monitored for drift.',
    tech: ['Python', 'PyTorch', 'LightGBM', 'ONNX Runtime', 'FastAPI', 'Docker', 'SHAP'],
    github: 'https://github.com/MelvTheGoat/Fraud-Detection-With-Sequence-Models',
    live: 'https://fraud-scoring.onrender.com',
    label: 'FRAUD DETECTION',
    stats: '0.870',
    statLabel: 'PR-AUC, GRU vs 0.826 LightGBM',
    features: [
      'GRU beat a strong LightGBM baseline on PR-AUC (0.870 vs 0.826, 3 seeds), widening to 0.765 vs 0.615 after adversarial drift',
      'Real-time scoring API at 7.2 ms p99 against a 50 ms budget, with isotonic calibration and an audit log',
      'Label-free drift monitoring caught the attack shift in its first window while standard score PSI never fired',
    ],
  },
  {
    title: 'Reckon: Payment Reconciliation & Review System',
    description:
      'Matches Paystack payments to invoices with exact rules, then a calibrated model, then human review.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Paystack API', 'Docker', 'GitHub Actions', 'Railway'],
    github: 'https://github.com/MelvTheGoat/Stack',
    live: 'https://stack-production-d2a4.up.railway.app/review',
    label: 'PAYMENTS',
    stats: '76.1%',
    statLabel: 'auto-closed at 100% precision',
    features: [
      'On a simulated month of 439 payments (NGN 37.2M), it auto-closed 76.1% at 100% precision',
      'Auto-close threshold set from an 83:1 error-cost ratio, calibrated with Platt scaling (Brier 0.022)',
      'Review ranked by money at risk, cutting monthly matching time from 21.9 to 5.2 hours',
    ],
  },
  {
    title: 'Credit Risk Decisioning System',
    description:
      'A credit decisioning API with cost-optimal cutoffs, SHAP adverse action reason codes and an audit log.',
    tech: ['Python', 'LightGBM', 'scikit-learn', 'SHAP', 'WOE Scorecards', 'FastAPI', 'Docker', 'GCP Cloud Run'],
    github: 'https://github.com/MelvTheGoat/Credit-Risk-Decisioning',
    live: 'https://credit-risk-decisioning-702657773047.europe-west1.run.app/',
    label: 'CREDIT RISK',
    stats: '0.838',
    statLabel: 'out-of-time AUC, ECE 0.026',
    features: [
      'LightGBM PD model on a 30,000-application synthetic loan book',
      'An F1-chosen cutoff forfeits 28% of achievable profit',
      'A naive 0.5 cutoff loses money outright',
    ],
  },
  {
    title: 'Nigerian Fintech Compliance RAG Assistant',
    description:
      'Regulatory Q&A over CBN circulars and the NDPA that refuses when it is unsure.',
    tech: ['Python', 'RAG', 'LLM Evaluation', 'Google Cloud Run'],
    github: 'https://github.com/MelvTheGoat',
    live: 'https://nigerian-fintech-regulation-assistant-474115007874.europe-west1.run.app',
    label: 'COMPLIANCE RAG',
    stats: '0.96',
    statLabel: 'recall@5',
    features: [
      'Answers questions about CBN circulars and the NDPA',
      'Declines to answer when the sources do not support it',
    ],
  },
]
