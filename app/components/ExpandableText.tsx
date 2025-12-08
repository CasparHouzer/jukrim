'use client';

import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

export default function ExpandableText({ text, maxLength = 150 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? text.substring(0, maxLength) + '...' 
    : text;

  if (!shouldTruncate) {
    return <p className="text-gray-700 text-base leading-relaxed text-left">{text}</p>;
  }

  return (
    <div>
      <p className="text-gray-700 text-base leading-relaxed text-left">
        {displayText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-[#3676BA] hover:text-[#E1B84F] font-semibold text-sm transition-colors"
      >
        {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
    </div>
  );
}

