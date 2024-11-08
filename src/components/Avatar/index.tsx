/*-- Apply this component styles --*/
import myStyles from "@/components/Avatar/styles/index.module.scss";

type AvatarProps = {
  img: string;
  size: "sm" | "md" | "lg";
};

const Avatar = ({ img, size = "md" }: AvatarProps) => (
  <div
    className={`${myStyles["app-avatar-block"]} ${
      myStyles[`app-avatar-${size}`]
    }`}
  >
    <img
      src={img as string}
      alt="null-is-null-and-null-but-null-is-null-again"
    />
  </div>
);

export default Avatar;
