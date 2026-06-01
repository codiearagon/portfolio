import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";

const Theme5 = () => {
  return (
    <Theme prevThemeLabel="Game Art" prevThemePath="../theme4">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Game Demo</h1>
        </div>

        <div className="mb-15 w-full aspect-video">
          <p className="mt-4 mb-2">Here is a quick demo of the current game:</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9-B06fCl0xE?si=liWER_jbv0Z0AZdB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme5;
