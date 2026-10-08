import React from 'react';
import AppDownloadSection from './AppDownloadSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const AppAndFooter = ({ onlyFooter = false }) => {
  return (
    <>
      {!onlyFooter && (
        <>
          <AppDownloadSection />
          <NewsletterSection />
        </>
      )}
      <Footer />
    </>
  );
};

export default AppAndFooter;
export { AppDownloadSection, NewsletterSection, Footer };
