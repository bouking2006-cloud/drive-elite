import React from 'react';

export interface TestimonialCardProps {
  name: string;
  handle: string;
  text: string;
  date: string;
}

export function TestimonialCard({ name, handle, text, date }: TestimonialCardProps) {
  // Get initial letters for avatar
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="bg-primary-light p-6 rounded-sm border border-primary-lighter transition-all hover:border-accent/40">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary border text-accent border-accent/20">
          <span className="font-accent text-sm font-semibold">{initials}</span>
        </div>
        
        {/* Identity */}
        <div>
          <h4 className="font-title text-lg leading-tight text-text-main">{name}</h4>
          <span className="text-xs text-accent">{handle}</span>
        </div>
      </div>
      
      {/* Text */}
      <p className="text-sm text-text-muted mb-4 line-clamp-3 leading-relaxed">
        "{text}"
      </p>
      
      {/* Footer / Rating */}
      <div className="flex items-center justify-between border-t border-primary-lighter pt-4">
        <span className="text-xs tracking-wider text-text-muted">{date}</span>
        <div className="flex text-accent text-sm gap-0.5">
          ★ ★ ★ ★ ★
        </div>
      </div>
    </div>
  );
}
