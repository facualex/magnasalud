import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { HiMenu } from 'react-icons/hi';
import { RiContrastFill } from 'react-icons/ri';
import { VscTextSize } from 'react-icons/vsc';
import { MdOutlineLocalOffer, MdPriceCheck } from 'react-icons/md';
import { FaTooth } from 'react-icons/fa';

type AvailableIcons =
  | 'menu'
  | 'contrast'
  | 'fontSizeUp'
  | 'fontSizeDown'
  | 'offer'
  | 'tooth'
  | 'price';

interface IconWithStyles {
  icon: IconType;
  style: Record<string, string>;
}

const icons: Record<AvailableIcons, IconType | IconWithStyles> = {
  menu: HiMenu,
  contrast: RiContrastFill,
  fontSizeUp: VscTextSize,
  fontSizeDown: {
    icon: VscTextSize,
    style: {
      transform: 'scaleX(-1)',
    },
  },
  offer: MdOutlineLocalOffer,
  tooth: FaTooth,
  price: MdPriceCheck,
};

interface IconProps extends IconBaseProps {
  // size, color, title (from IconBaseProps)
  icon: AvailableIcons;
}

function Icon(props: IconProps) {
  const IconComponent = icons[props.icon];

  if ('icon' in IconComponent && 'style' in IconComponent) {
    const IconToStyle = IconComponent.icon;

    return <IconToStyle {...props} style={IconComponent.style} />;
  }

  return <IconComponent {...props} />;
}

export default Icon;
