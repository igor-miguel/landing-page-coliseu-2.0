import React, { useState } from 'react';
import { ChevronDown, Play, Plus, Minus } from 'lucide-react';
import { ModuleItem, FaqItem } from '../types';

interface ModuleAccordionProps {
    items: ModuleItem[];
}

export const ModuleAccordion: React.FC<ModuleAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`border border-white/10 bg-rich-charcoal transition-colors duration-300 ${activeIndex === index ? 'border-gold-400/50' : 'hover:border-gold-400/30'}`}
                >
                    <button 
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" 
                        onClick={() => toggle(index)}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-gold-400 font-serif text-xl italic opacity-80">
                                0{item.id}.
                            </span>
                            <span className="font-medium text-white/90">{item.title}</span>
                        </div>
                        <ChevronDown 
                            className={`text-gray-500 w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-gold-400' : ''}`} 
                        />
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#0f0f0f] ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <ul className="px-6 py-6 space-y-3 text-sm text-gray-400 font-light border-t border-white/5">
                            {item.lessons.map((lesson, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                                        <Play className="w-2 h-2 text-gold-600 fill-current" />
                                    </div>
                                    <span>{lesson}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

interface FaqAccordionProps {
    items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                    <button 
                        className="w-full text-left flex justify-between items-center py-2 font-medium text-lg text-rich-black hover:text-gold-600 transition-colors focus:outline-none" 
                        onClick={() => toggle(index)}
                    >
                        <span>{item.question}</span>
                        {activeIndex === index ? (
                            <Minus className="text-gold-600 w-4 h-4" />
                        ) : (
                            <Plus className="text-gold-600 w-4 h-4" />
                        )}
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-gray-600 font-light leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};