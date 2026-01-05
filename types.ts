import { LucideIcon } from 'lucide-react';

export interface TransactionType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; 
}

export type TransactionStatus = 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED' | 'ANALYZED';

export type ViewState = 'SELECTION' | 'INPUT_FORM' | 'APPROVAL_STEP' | 'ANALYSIS_RESULT' | 'DASHBOARD_MOCK' | 'REPORTS_LIST';

export interface AppNotification {
  id: string;
  type: 'INFO' | 'WARNING' | 'CRITICAL';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface ApprovalMetadata {
  approverName: string;
  approverDept: string;
  timestamp: string;
  approvalCount: number;
  thresholdWarning?: boolean;
}

export interface ClaimData {
  category: 'healthcare' | 'education' | 'defence' | 'taxation' | 'tenders' | 'payroll' | 'foreign-aid' | 'welfare';
  subCategory?: string;
  entityName: string;
  entityId: string;
  location: string;
  amount: string;
  revenue?: string;   
  taxPayerType?: 'Individual' | 'Company' | 'Firm'; 
  taxPeriod?: 'Month' | 'Quarter' | 'Year'; 
  dueDate?: string;   
  tenderId?: string;
  tenderReleaseDate?: string;
  tenderClosingDate?: string;
  estimatedCost?: string;
  vendorLocation?: string;
  pastProjectsCount?: string; 
  basicSalary?: string;
  allowances?: string;
  deductions?: string;
  designation?: string;
  aidReliefId?: string;
  dateOfDispatch?: string;
  netDisbursedAmount?: string;
  disbursementDate?: string;
  welfareType?: 'Scholarships' | 'Pensions' | 'Ration/Food Subsidy' | 'Housing' | 'Farmer Support';
  schemeId?: string;
  amountDisbursed?: string;
  reason: string;
  date: string;
}

export type HealthcareClaimData = ClaimData; 

export interface RiskAnalysisResult {
  score: number; 
  level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  factors: string[];
  timestamp: string;
}

export interface ReportEntry {
  id: string;
  input: ClaimData;
  analysis: RiskAnalysisResult;
  date: string;
  status: TransactionStatus;
  approval?: ApprovalMetadata;
}