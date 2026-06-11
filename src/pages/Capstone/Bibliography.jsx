import { NavLink } from "react-router-dom";
import BibliographySection from "../../components/Capstone/BibliographySection";
import unityRefs from "../../assets/unityrefs.json";
import uiToolkitRefs from "../../assets/uitoolkitrefs.json";
import csharpRefs from "../../assets/csharprefs.json";
import assetRefs from "../../assets/assetsrefs.json";
import fontRefs from "../../assets/fontrefs.json";
import audioRefs from "../../assets/audiorefs.json";
import webdevRefs from "../../assets/webdevrefs.json";
import PageContent from "../../components/capstone/PageContent";

const Bibliography = () => {
  return (
    <div>
      <PageContent>
        <div className="mt-20">
          <h1 className="capstone-h1 text-center">Annotated Bibliography</h1>
        </div>
        <div className="max-w-3xl mx-auto px-8 py-6 flex flex-col gap-6">
          <BibliographySection
            section="Audio Assets"
            annotation="These resources are being used for sound effects in my game."
            references={audioRefs}
          ></BibliographySection>
          <BibliographySection
            section="C#"
            annotation="These resources helped me understand C# better."
            references={csharpRefs}
          ></BibliographySection>
          <BibliographySection
            section="Font Assets"
            annotation="These resources are being used as fonts for my game."
            references={fontRefs}
          ></BibliographySection>
          <BibliographySection
            section="Unity"
            annotation="These resources helped me understand Unity Engine better. These include Unity components, built-in packages, or built-in classes."
            references={unityRefs}
          ></BibliographySection>
          <BibliographySection
            section="Unity UI Toolkit"
            annotation="These resources helped me learn Unity UI Toolkit, which was a completely new package for me. The resources also contain UI Design advice."
            references={uiToolkitRefs}
          ></BibliographySection>
          <BibliographySection
            section="Visual Assets"
            annotation="These resources helped me understand how to make better art for my game including the drawing tool (Aseprite) or general advice."
            references={assetRefs}
          ></BibliographySection>
          <BibliographySection
            section="Web Development"
            annotation="These resources helped me refresh my memory for web development. I also learned Tailwind for the first time."
            references={webdevRefs}
          ></BibliographySection>
        </div>

        <NavLink to="../" className="flex link underline justify-center mt-20">
          Go back to Capstone Landing
        </NavLink>
      </PageContent>
    </div>
  );
};

export default Bibliography;
