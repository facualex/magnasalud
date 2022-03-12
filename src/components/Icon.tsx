import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { HiMenu } from 'react-icons/hi';
import { RiContrastFill } from 'react-icons/ri';
import { VscTextSize } from 'react-icons/vsc';
import { MdOutlineLocalOffer, MdPriceCheck, MdClose } from 'react-icons/md';
import { FaTooth, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { GiHealthIncrease } from 'react-icons/gi';

type AvailableIcons =
  | 'menu'
  | 'contrast'
  | 'fontSizeUp'
  | 'fontSizeDown'
  | 'offer'
  | 'tooth'
  | 'price'
  | 'whatsapp'
  | 'send'
  | 'close'
  | 'instagram'
  | 'health';

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
  whatsapp: FaWhatsapp,
  send: FiSend,
  close: MdClose,
  instagram: FaInstagram,
  health: GiHealthIncrease,
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
