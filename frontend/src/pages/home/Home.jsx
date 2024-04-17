import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-pink-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-solid border-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
