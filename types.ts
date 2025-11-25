export interface ModuleItem {
    id: number;
    title: string;
    lessons: string[];
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export interface FeatureItem {
    iconName: 'chart' | 'clock' | 'laptop';
    title: string;
    description: string;
}

export interface BenefitItem {
    id: number;
    title: string;
    description: string;
    iconName: 'users' | 'video' | 'zap' | 'file';
}