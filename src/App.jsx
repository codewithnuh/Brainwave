import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Button className={" text-xl "} href={"/"}>
          Hello
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
