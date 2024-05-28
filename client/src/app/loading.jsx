import Image from "next/image";
import LOADING_IMG_GIF from "../../public/loading.gif";

const Loading = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={LOADING_IMG_GIF}
        alt="Page not found image"
        priority
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
    </section>
  );
};

export default Loading;
