import React from 'react';

interface StarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
}

const Star: React.FC<StarProps> = ({ className = '', style, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <div
      className={`rounded-full bg-starlight animate-twinkle ${sizeClasses[size]} ${className}`}
      style={style}
    />
  );
};

export const StarField: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const stars = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: (['sm', 'md', 'lg'] as const)[Math.floor(Math.random() * 3)],
      delay: Math.random() * 3,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <Star
          key={star.id}
          size={star.size}
          className="absolute"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Star;
