import React from 'react'
import HeroSection from '../organisms/Hero';
import LiteratureSurvey from '../organisms/LiteratureSurvey';
import Gap from '../organisms/Gap';
import ResearchProblemAndSolution from '../organisms/ResearchProblemAndSolution';
import Objectives from '../organisms/Objectives';
import Methodology from '../organisms/Methodology';
import TechnologiesSection from '../organisms/Technologies';
import TimelineSection from '../organisms/Timeline';
import DocumentsSection from '../organisms/Documents';
import TeamSection from '../organisms/Team';
import ContactUs from '../organisms/Contact';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LiteratureSurvey />
      <Gap />
      <ResearchProblemAndSolution />
      <Objectives />
      <Methodology />
      <TechnologiesSection />
      <TimelineSection />
      <DocumentsSection />
      <TeamSection />
      <ContactUs />
    </div>
  );
}

export default HomePage
