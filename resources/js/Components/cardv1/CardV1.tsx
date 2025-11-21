import React from 'react';
import './CardV1.css'; // Kita akan membuat file CSS ini
import Card from '../card/Card';

interface CardV1Props {
  emoji?: React.ReactNode | string;
  title?: string;
  desc?: string;
  emojiGradientColors?: string[];
  backgroundColor: string[];
  borderColor: string;
  hasBorder: boolean;
}

const CardV1: React.FC<CardV1Props> = ({
  emoji,
  title,
  desc,
  emojiGradientColors,
  backgroundColor,
  borderColor,
  hasBorder,
}) => {
  // Fungsi helper untuk menghasilkan string gradient CSS untuk background emoji
  const createEmojiGradientString = (colors?: string[]) => {
    if (!colors || colors.length === 0) {
      return 'transparent';
    }
    if (colors.length === 1) {
      return colors[0];
    }
    return `linear-gradient(to bottom right, ${colors.join(', ')})`;
  };

  const emojiBoxStyle: React.CSSProperties = {
    background: createEmojiGradientString(emojiGradientColors),
  };

  return (
    <Card
      alignItems="flex-start"
      justifyContent="space-between"
      backgroundColor={backgroundColor}
      hasBorder={hasBorder}
      borderColor={borderColor}
    >
      <div className="flex flex-col items-start">
        <div className="emoji-box" style={emojiBoxStyle}>
          {emoji}
        </div>
        <h3 className="card-title">{title}</h3>
        <span className="text-gray-900">{desc}</span>
      </div>
    </Card>
  );
};

export default CardV1;
