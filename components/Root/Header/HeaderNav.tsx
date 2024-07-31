"use state"



import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';

function HeaderNav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [barPosition, setBarPosition] = useState<{
      left: number;
      width: number;
  }>({ left: 0, width: 0 });

  const navRef = useRef<HTMLDivElement>(null);


  const handleItemClick = (itemName: string, itemRef: HTMLDivElement) => {
    setSelectedItem(itemName);
    updateBarPosition(itemRef);
};

const updateBarPosition = (itemRef: HTMLDivElement) => {
    const navElement = navRef.current;
    if (navElement && itemRef) {
        const navRect = navElement.getBoundingClientRect();
        const itemRect = itemRef.getBoundingClientRect();
        setBarPosition({
            left: itemRect.left - navRect.left,
            width: itemRect.width,
        });
    }
};
  return (
      <nav 
      ref={navRef} 
      className=' relative overflow-hidden h-12 flex rounded-full items-center justify-center backdrop-blur-md'>
        <NavItem
        text='Início'
        isSelected={selectedItem === 'Início'}
        onSelect={handleItemClick}/>
        <NavItem 
        text='Galeria'
        isSelected={selectedItem === 'Galeria'}
        onSelect={handleItemClick} />
        <NavItem 
        text='Sobre'
        isSelected={selectedItem === 'Sobre'}
        onSelect={handleItemClick} />
        
        <motion.div
            className={`absolute h-12 bg-alfa_color  transition-all  duration-300 z-10`}
            style={{ left: barPosition.left, width: barPosition.width }}
        />
      </nav>
  )
}

export default HeaderNav

interface NavItemProps {
  text: string
  isSelected: boolean
  onSelect: (itemName: string, itemRef: HTMLDivElement) => void;
}
function NavItem({text, onSelect, isSelected}: NavItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
      if (itemRef.current) {
        onSelect(text, itemRef.current);
      }
  };
  return (
    <motion.div
    animate={{
      color: isSelected ? "white" : "black"
    }}
    ref={itemRef}
    onClick={handleClick} className='_text z-20 cursor-pointer font-medium px-3 h-full flex items-center rounded '>{text}</motion.div>
  )
}