
import { Layout } from "@/components/Layouts";
import { Root } from "@/components/Root";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <Root.Body className="min-h-screen">
      <Root.Header />
      {/* <HeaderComponent/> */}
      <Root.Content className="">
        E ai AMandinha!222
      </Root.Content>
      <Root.Controller/>
      <Root.Footer />
      <ToastContainer
        draggable 
        position="top-center"
        closeOnClick
        hideProgressBar
        theme="dark"/>
    </Root.Body>
  );
}