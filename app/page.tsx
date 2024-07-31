
import { Root } from "@/components/Root";

export default function Home() {
  return (
    <Root.Main className="min-h-screen" id="top">
      <Root.Header />
      <Root.Content className="">
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