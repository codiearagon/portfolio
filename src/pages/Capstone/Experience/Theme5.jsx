import Theme from "../../../components/capstone/Theme";
import PageContent from "../../../components/capstone/PageContent";

const Theme3 = () => {
  return (
    <Theme prevThemePath="../theme4">
      <PageContent>
        <div className="my-20">
          <h1 className="capstone-h1 text-center">Final Game</h1>
        </div>

        <div className="mb-15">
          <h2 className="capstone-h2">Game Demo</h2>
          <p className="mt-4">Here is a quick demo of the current game:</p>
          <iframe
            className="mt-2 w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/p7uQ1JoLVqo?si=LobRvQWQZcBxMvqK"
            title="Game Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </PageContent>
    </Theme>
  );
};

export default Theme3;
