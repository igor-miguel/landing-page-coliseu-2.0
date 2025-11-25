import React from 'react';

export const ColiseumLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Base */}
        <path d="M2 21h20" />
        
        {/* Structure structure (Ruined/Slanted look) */}
        <path d="M4 21V10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v11" />
        
        {/* Tiers / Levels */}
        <path d="M4 16h16" />
        <path d="M4 12h16" />
        
        {/* Top Broken Edge (Stylized) */}
        <path d="M6 8V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />

        {/* Arches - Bottom Row */}
        <path d="M7 21v-3a1 1 0 0 1 2 0v3" />
        <path d="M11 21v-3a1 1 0 0 1 2 0v3" />
        <path d="M15 21v-3a1 1 0 0 1 2 0v3" />

        {/* Arches - Middle Row */}
        <path d="M7 16v-2a1 1 0 0 1 2 0v2" />
        <path d="M11 16v-2a1 1 0 0 1 2 0v2" />
        <path d="M15 16v-2a1 1 0 0 1 2 0v2" />
    </svg>
);