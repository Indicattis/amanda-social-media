
import ExhibitionComponent from "@/components/ExhibitionComponent";
import { Root } from "@/components/Root";

export default function Home() {
  return (
    <Root.Main className="min-h-screen w-full relative" id="top">
      <Root.Header />
      <Root.Content className="">
        <ExhibitionComponent/>
      </Root.Content>
      <Root.Footer />
      {/* <ToastContainer
        draggable 
        position="top-center"
        closeOnClick
        hideProgressBar
        theme="dark"/> */}
        
    </Root.Main>
  );
}