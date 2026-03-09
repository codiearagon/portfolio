import React from "react";
import BibliographySection from "../../components/Capstone/BibliographySection";
import unityRefs from "../../assets/unityrefs.json";
import uiToolkitRefs from "../../assets/uitoolkitrefs.json";
import csharpRefs from "../../assets/csharprefs.json";
import assetRefs from "../../assets/assetsrefs.json";
import fontRefs from "../../assets/fontrefs.json";
import audioRefs from "../../assets/audiorefs.json";
import webdevRefs from "../../assets/webdevrefs.json";

const Bibliography = () => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="capstone-h1 text-center">Annotated Bibliography</h1>
      </div>
      <div className="max-w-3xl mx-auto px-8 py-6 flex flex-col gap-6">
        <BibliographySection
          section="Unity"
          references={unityRefs}
        ></BibliographySection>
        <BibliographySection
          section="Unity UI Toolkit"
          references={uiToolkitRefs}
        ></BibliographySection>
        <BibliographySection
          section="C#"
          references={csharpRefs}
        ></BibliographySection>
        <BibliographySection
          section="Assets"
          references={assetRefs}
        ></BibliographySection>
        <BibliographySection
          section="Fonts"
          references={fontRefs}
        ></BibliographySection>
        <BibliographySection
          section="Audio"
          references={audioRefs}
        ></BibliographySection>
        <BibliographySection
          section="Web Dev"
          references={webdevRefs}
        ></BibliographySection>
      </div>
    </div>
  );
};

export default Bibliography;
