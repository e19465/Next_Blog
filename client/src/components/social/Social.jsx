import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants";
//! END IMPORTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ||

const Social = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        height: "auto",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <div
            key={social._id}
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
            }}
          >
            <Link
              href={social.link}
              style={{
                width: "100%",
                height: "100%",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon title={social.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
