# AI-Powered Public Fraud & Anomaly Detection Platform

> Predicting fraud before public money is lost.

An AI-driven platform designed to detect anomalies, predict fraud risks, and improve transparency in government financial systems using machine learning, behavioral analytics, and intelligent audit monitoring.

---

# Overview

Government financial systems handle massive transactional data across multiple departments such as healthcare, education, payroll, taxation, welfare schemes, procurement, and utilities.

Traditional auditing systems are:
- Reactive instead of proactive  
- Manual and time-consuming  
- Limited in detecting early fraud signals  
- Vulnerable to insider manipulation  

This project introduces a **Predictive Public Integrity System** that detects anomalies and predicts fraud risks before approvals using AI/ML models and behavioral analysis.

---

# Key Features

## 1. Department-Wise Audit System
Supports multiple government domains:
- Education  
- Healthcare  
- Defence  
- Payroll & Government Salaries  
- Taxation & Revenue  
- Government Tenders & Procurement  
- Welfare Schemes  
- Utilities & Infrastructure  
- Disaster Management & Foreign Aid  

---

## 2. Secure Data Upload & Validation
- CSV and form-based data input  
- Missing value detection  
- Duplicate record detection  
- Data format validation  
- Input sanitization  

---

## 3. Human Approval Workflow
Every dataset must be approved before processing.

Tracks:
- Approver name  
- Approval timestamp  
- Frequency of approvals  
- Department-wise approval activity  

Alerts triggered for:
- Excessive approvals by same user  
- Repeated approvals for same vendor  
- Unusual approval patterns  

---

## 4. AI-Based Fraud & Anomaly Detection
Uses machine learning to detect:
- Abnormal financial transactions  
- Sudden budget spikes  
- Irregular vendor payments  
- Procurement anomalies  
- Spending deviations from historical trends  

Output:
- Fraud / anomaly score per record  

---

## 5. Fraud Prediction (Pre-Approval Detection)
System identifies risk **before transaction approval**, including:
- Budget overruns  
- High-risk procurement requests  
- Suspicious financial patterns  
- Early fraud indicators  

---

## 6. Vendor Risk Scoring
Each vendor is assigned a dynamic risk score based on:
- Contract frequency  
- Cost escalation patterns  
- Payment irregularities  
- Historical anomaly involvement  

Alerts generated when:
- Vendor crosses high-risk threshold multiple times  

---

## 7. Behavioral Biometrics
Tracks user interaction patterns:
- Typing speed  
- Mouse movement  
- Scroll behavior  
- Form interaction timing  

Detects:
- Suspicious login behavior  
- Insider threats  
- Account misuse or proxy approvals  

---

## 8. Explainable Audit Reports
Generates detailed reports including:
- Anomaly score  
- Vendor risk score  
- Officer approval behavior  
- Fraud prediction reasoning  
- System-generated explanations  

---

## 9. Real-Time Alerts System
Triggers alerts for:
- High-risk transactions  
- Suspicious approvals  
- Vendor risk escalation  
- Behavioral anomalies  

---

## 10. Fraud Heatmap Dashboard
Visual representation of:
- High-risk departments  
- Vendor risk distribution  
- Financial anomaly trends  

---

# Tech Stack

**Frontend**
- React.js / Next.js  
- Tailwind CSS  
- Chart.js / Recharts  

**Backend**
- Node.js / Express.js  
- Python (Flask / FastAPI for ML models)  

**Machine Learning**
- Scikit-learn  
- Pandas  
- NumPy  

**Database**
- MongoDB / PostgreSQL  

---

# Machine Learning Models Used

- Isolation Forest → Anomaly Detection  
- Statistical Outlier Detection → Financial irregularities  
- Time-Series Analysis → Trend-based fraud prediction  
- Risk Scoring Engine → Vendor & approval risk evaluation  
- Behavioral Pattern Analysis → Insider threat detection

  | Model                         | Purpose                  |
| ----------------------------- | ------------------------ |
| Isolation Forest              | Anomaly detection        |
| Statistical Outlier Detection | Financial irregularities |
| Time-Series Analysis          | Fraud prediction         |
| Risk Scoring Engine           | Vendor & approval risk   |
| Behavioral Pattern Analysis   | Insider threat detection |

# Screenshots

Homepage 
<img width="1145" height="644" alt="Screenshot 2026-05-19 133148" src="https://github.com/user-attachments/assets/4ab5c7b6-6ffb-4c60-925a-bc99f76ed0aa" />
<img width="1158" height="639" alt="Screenshot 2026-05-19 133406" src="https://github.com/user-attachments/assets/0af5d3d7-568a-47cb-84af-da63345fd327" />


Dashboard
<img width="1150" height="639" alt="Screenshot 2026-05-19 133322" src="https://github.com/user-attachments/assets/65a5e34f-2f84-4228-8720-8d5640aa7295" />


Fraud Detection Alerts
<img width="1160" height="640" alt="Screenshot 2026-05-19 133232" src="https://github.com/user-attachments/assets/12c254fa-8c5c-47eb-b83a-7226fa82c0e4" />


Vendor Risk Analysis

<img width="1151" height="640" alt="Screenshot 2026-05-19 133342" src="https://github.com/user-attachments/assets/9ffb9a25-5dec-490e-b0ef-5becf5eabd16" />

<img width="1150" height="638" alt="Screenshot 2026-05-19 133354" src="https://github.com/user-attachments/assets/1813ace4-b190-4e88-833e-824f7781707c" />

Audit Reports

<img width="1149" height="635" alt="Screenshot 2026-05-19 133305" src="https://github.com/user-attachments/assets/95ae087c-f57f-445d-9831-077485c9a26a" />



---

# System Workflow

Data Upload
↓
Human Approval Layer
↓
Data Validation & Preprocessing
↓
AI/ML Fraud Detection Engine
↓
Risk Scoring System
↓
Alert Generation
↓
Audit Reports Dashboard


---

# Architecture

User / Department
↓
Data Upload Module
↓
Approval System
↓
Preprocessing Layer
↓
ML Fraud Detection Engine
↓
Risk Scoring Engine
↓
Dashboard & Alerts


---

# Future Scope

- Blockchain-based audit logs  
- NLP-based tender document analysis  
- Real-time government financial monitoring  
- Graph-based fraud network detection  
- Federated learning across departments  
- AI-driven corruption pattern detection  

---

# Impact

- Prevents financial fraud before it happens  
- Improves government transparency  
- Reduces manual audit workload  
- Enhances accountability in public systems  
- Enables AI-driven governance  

---

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1oqTpjWhHeT8Dx56lEuInLcynId4e4uOp

## Run Locally

*Prerequisites:*  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


License

This project is developed for educational purposes.

Final Note

“Fraud detection is reactive. Predictive integrity is the future of governance.”

 Developer -
 Ritika Yadav 
