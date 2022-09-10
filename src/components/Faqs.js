import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./FaqStyles.css"


const data = {
  title: "FAQs",
  rows: [
      {
          title: "How do we book you?",
          content: `We hope you have enjoyed looking at our portfolio on our website and on our Instagram account. 
          If you have any questions, please feel free to contact us through the contact tab on our website. We will respond to your inquiry within 48 hours, Monday-Friday. We offer face-to-face or telephone consultations to help you book your reservation.
          `,
      },
      {
          title: "Do we travel?",
          content:
              "Yes, we travel and we would love to discuss travel details with you.",
      },
      {
          title: "Do you photoshop your clients?",
          content: `We promote self-love and body positivity, so other than temporary blemishes like bruises and pimples, we won't change your appearance.`,
      },
  ],
};

const styles = {
  bgColor: 'var(--background)',
  titleTextColor: "var(--text-primary)",
  rowTitleColor: "var(--text-primary)",
  rowContentColor: 'var(--text-primary)',
  transitionDuration: "0.5s",
  titleTextSize: '2rem',
  arrowColor: "var(--text-primary)"
};

const config = {
   animate: true,
   arrowIcon: "+",
   tabFocus: true,
   expandIcon: "+",
   collapseIcon: "-",
};

const Faqs = () => {
  return (
    <div className='faqs'>
    <Faq
        data={data}
        styles={styles}
        config={config}
    />
    </div>
  )
}

export default Faqs