'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LanguageSelector.module.scss';
import Image from 'next/image';
import flag_en from "@/../public/images/flag_en.png";
import flag_ch from "@/../public/images/flag_ch.png";
import { useTranslation } from "react-i18next";
import i18n from '@/i18n/i18n';
// import i18n from "@/src/i18n/i18n"; // correct import

const languages = [
  { code: 'en', name: 'English', flag: flag_en },
  { code: 'zh', name: 'Chinese', flag: flag_ch },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language.code);

    setSelectedLanguage(language);
    setIsOpen(false);
    // Here you would typically update the application's language
    console.log(`Language changed to: ${language.code}`);
    // e.g., i18n.changeLanguage(language.code);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button 
        className={styles.languageButton}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className={styles.selectedLanguage}>
          {/* <span className={styles.flag}>{selectedLanguage.flag}</span> */}
          <Image src={selectedLanguage.flag} alt="Flag" width={30} height={30} />
          <span className={styles.code}>{selectedLanguage.code.toUpperCase()}</span>
        </span>
        <span className={styles.dropdownArrow}>▼</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.languageDropdown}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            aria-label="Available languages"
          >
            {languages.map((language) => (
              <div
                key={language.code}
                className={`${styles.languageOption} ${
                  selectedLanguage.code === language.code ? styles.selected : ''
                }`}
                onClick={() => handleLanguageSelect(language)}
                role="option"
                aria-selected={selectedLanguage.code === language.code}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleLanguageSelect(language);
                  }
                }}
              >
                <Image 
                  src={language.flag} 
                  alt={language.name} 
                  width={30} 
                  height={30} 
                  className={styles.flag}
                />
                <span className={styles.name}>{language.name}</span>
                <span className={styles.code}>{language.code.toUpperCase()}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
